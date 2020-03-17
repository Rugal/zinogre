export const GET_POST_PAGE = "post/page/GET";
export const POST_COMMENT = "post/comment/POST";

const initialState = {
  comment: undefined,
  post: undefined,
  postPage: undefined,
};

export default function PostReducer(state = initialState, action: any) {
  switch (action.type) {
    case POST_COMMENT:
      return { ...state, comment: action.comment };
    case GET_POST_PAGE:
      return { ...state, postPage: action.body };
    default:
      return state;
  }
}
