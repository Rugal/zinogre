import { Post, PostPage, User } from "../generated/graphql";

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

const initialUser: User = {
  credit: 1024,
  download: 1024,
  email: "test@mail.com",
  status: "live",
  uid: -1,
  upload: 1024,
  username: "Rugal",
};

/* tslint:disable:no-trailing-whitespace */
const initialPost: Post = {
  author: initialUser,
  content: `~~Enjoy! something special~~ markdown  
  HERE again  
  multiple  
  line
  `,
  enable: true,
  hash: "Welcome to Rugal Private Torrent",
  pid: -1,
  size: 123,
  tags: [],
  title: "Welcome",
};
/* tslint:enable:no-trailing-whitespace */

const initialPostPage: PostPage = {
  index: 0,
  items: [],
  size: 20,
  total: 1,
};

const initialState = {
  chips: undefined,
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
