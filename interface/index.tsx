// card item
export interface ItemType {
  bred_for: string;
  breed_group: string;
  height: { imperial: string; metric: string };
  id: number;
  image: {
    id: string;
    width: number;
    height: number;
    url: string;
  };
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  weight: { imperial: string; metric: string };
}

// detailCard props item
export interface DetailProps {
  breeds: any;
  height: number;
  id: string;
  url: string;
  width: number;
}

//LikeCard props item
interface eachBreedProps {
  bred_for: string;
  breed_group: string;
  height: { imperial: string; metric: string };
  id: number;
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
}

export interface likeItem {
  breeds: eachBreedProps[];
  height: number;
  id: string;
  url: string;
  width: number;
}

//modal props item
export interface likeProps {
  created_at: string;
  id: number;
  image: { id: string; url: string };
  image_id: string;
  sub_id: string;
  user_id: string;
}

//registCard Props item
export interface registProps {
  breed_ids: any;
  breeds: object;
  created_at: string;
  height: number;
  id: string;
  original_filename: string;
  sub_id: string;
  url: string;
  width: number;
}

//enjoyCard props item
export interface enjoyItem {
  created_at: string;
  id: number;
  image: { id: string; url: string };
  image_id: string;
  sub_id: string;
  user_id: string;
}
