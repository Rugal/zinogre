export const POST_PROGRASS_BAR = "system/progressBar/POST";
export const DELETE_PROGRASS_BAR = "system/progressBar/DELETE";

const initialState = {
  showProgressBar: false,
};

export default function SystemReducer(state = initialState, action: any) {
  switch (action.type) {
    case POST_PROGRASS_BAR:
      return { ...state, showProgressBar: true };
    case DELETE_PROGRASS_BAR:
      return { ...state, showProgressBar: false };
    default:
      return state;
  }
}
