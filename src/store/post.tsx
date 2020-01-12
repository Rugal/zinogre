import { Post, PostPage } from "../openapi";

export const GET_POST_PAGE = "post/page/GET";

const initialPost: Post = {
  content: "Enjoy!",
  hash: "Welcome to Rugal Private Torrent",
  pid: -1,
  title: "Welcome",
};

const initialPostPage: PostPage = {
  index: 0,
  items: [initialPost, initialPost, initialPost, initialPost, initialPost],
  size: 20,
  total: 1,
};

const initialState = {
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
