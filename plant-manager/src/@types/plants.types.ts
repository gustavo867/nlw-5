export interface Plants_water_frequencies {
  key: string;
  title: string;
}

export interface Plants {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
  dateTimeNotification: Date;
}

export interface StoragePlantProps {
  [id: string]: {
    data: Plants;
  };
}
