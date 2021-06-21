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

export interface likeProps {
  breeds: any;
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface likeArrProps {
  country_code: string;
  created_at: string;
  id: number;
  image_id: string;
  sub_id: string;
  value: number;
  length?: any;
  url?: any;
  breeds?: any;
}

export interface enjoyProps {
  created_at: string;
  id: number;
  image: { id: string; url: string };
  image_id: string;
  sub_id: string;
  user_id: string;
}
