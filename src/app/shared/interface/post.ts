import { PostState } from "../enum/post-state";

export interface Post {
  id: number;
  price: string;
  status: PostState;
  startLocation: string;
  endLocation: string;
  parcel: Parcel[];
  isPostCompleted: boolean;
}

export interface Parcel {
  name: string;
  quantity: string;
  dimension: string;
}
