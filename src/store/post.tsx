import { Post as IPost, User as IUser } from "../generated/graphql";
import { PostDto, PostPageDto } from "../generated/openapi";

export const GET_POST_PAGE = "post/page/GET";
export const GET_POST = "post/GET";
export const GET_POST_SUCCESS = "post/GET_SUCCESS";
export const GET_POST_FAIL = "post/GET_FAIL";

export interface IChip {
  label: string;
}

const initialChipData: IChip[] = [
  { label: "Angular" },
  { label: "jQuery" },
  { label: "Polymer" },
  { label: "React" },
  { label: "Vue.js" },
];

const initialUser: IUser = {
  credit: 0,
  download: 1024,
  uid: -1,
  upload: 1024,
  username: "Rugal",
};

const initialPost: PostDto = {
  // author: initialUser,
  content: "~~Enjoy! something special~~ markdown",
  hash: "Welcome to Rugal Private Torrent",
  pid: -1,
  title: "Welcome",
};

const initialPostPage: PostPageDto = {
  index: 0,
  items: [initialPost],
  size: 20,
  total: 1,
};

const initialState = {
  chips: initialChipData,
  post: initialPost,
  postPage: initialPostPage,
};

export default function PostReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_POST_PAGE:
      return { ...state, postPage: action.body };
    default:
      return state;
  }
}
