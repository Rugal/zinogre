export const POST_USER_TOKEN = "user/token/POST";
export const DELETE_USER_TOKEN = "user/token/DELETE";

const initialState = {
  token: "Bearer a",
};

export default function UserReducer(state = initialState, action: any) {
  switch (action.type) {
    case POST_USER_TOKEN:
      return { ...state, token: action.data };
    case DELETE_USER_TOKEN:
      return { ...state, token: undefined };
    default:
      return state;
  }
}
