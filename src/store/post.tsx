export const GET_POST_PAGE = "post/page/GET";
export const GET_POST = "post/GET";
export const GET_POST_SUCCESS = "post/GET_SUCCESS";
export const GET_POST_FAIL = "post/GET_FAIL";

export interface IChip {
  label: string;
}

const initialState = {
  chips: undefined,
  post: undefined,
  postPage: undefined,
};

export default function PostReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_POST_PAGE:
      return { ...state, postPage: action.body };
    default:
      return state;
  }
}
