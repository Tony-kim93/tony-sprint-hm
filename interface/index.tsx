//얘 반복되는거 제네릭으로 뺴자
export interface cardProps {
  bred_for: string;
  breed_group: string;
  height: { imperial: string; metric: string };
  id: number;
  image: { id: string; width: number; height: number; url: string };
  life_span: string;
  name: string;
  origin: string;
  reference_image_id: string;
  temperament: string;
  weight: { imperial: string; metric: string };
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

export interface itemProps {
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

export interface firebasePayload {
  collapse_key: string;
  data: string;
  from: string;
  notification: { title: string; body: string; tag: string };
  priority: string;
}
