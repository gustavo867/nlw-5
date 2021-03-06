import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../services/api";
import { parseISO } from "date-fns";
import { useRouter } from "next/router";
import ptBR from "date-fns/locale/pt-BR";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { format } from "date-fns";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";
import { Episode as EpisodeType } from "../index";
import styles from "./episode.module.scss";
import { usePlayer } from "../../context/PlayerContext";

type EpisodeProps = {
  episode: EpisodeType;
};

export default function Episode({ episode }: EpisodeProps) {
  const { isFallback } = useRouter();
  const { play } = usePlayer();

  return (
    <div className={styles.episode}>
      <Head>
        <title>{episode.title} | Podcastr</title>
      </Head>
      <div className={styles.thumbnailContainer}>
        <Link href="/">
          <button type="button">
            <img src="/arrow-left.svg" alt="Voltar" />
          </button>
        </Link>

        <Image
          width={700}
          height={160}
          src={episode.thumbnail}
          objectFit="cover"
        />

        <button
          type="button"
          onClick={() =>
            play({
              ...episode,
              url: episode.file.url,
              duration: String(episode.file.duration),
            })
          }
        >
          <img src="/play.svg" alt="Tocar episodio" />
        </button>
      </div>

      <header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </header>

      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: episode.description }}
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { data } = await api.get(`/episodes/${slug}`);

  const episode = {
    ...data,
    publishedAt: format(parseISO(data.published_at), "d MMM yy", {
      locale: ptBR,
    }),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    duration: Number(data.file.duration),
  };

  return {
    props: {
      episode,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
