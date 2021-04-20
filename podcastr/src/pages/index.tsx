interface File {
  url: string;
  type: string;
  duration: number;
}

interface Episodes {
  id: string;
  title: string;
  members: string;
  published_at: string;
  thumbnail: string;
  description: string;
  file: File;
}

interface HomeProps {
  episodes: Episodes[];
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c4ea48b9-25ef-4267-aa02-f4815e2a3459/server.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210420T220518Z&X-Amz-Expires=86400&X-Amz-Signature=8d846e10a8654e15fc5182e8b9fc09712a65f4c1a05b6e08dfa814d71dfa6e90&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22server.json%22"
  );
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}
