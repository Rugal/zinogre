import { connect } from "react-redux";

import { POST_PROGRASS_BAR, DELETE_PROGRASS_BAR } from "../../store/system";
import { POST_USER_TOKEN } from "../../store/user";
import Login from "./component";

const mapStateToProps = (state: any, ownProps: any) => ({
  showProgressBar: state.system.showProgressBar,
});

const mapDispatchToProps = (dispatch: any) => ({
  hide: () => dispatch({ type: DELETE_PROGRASS_BAR }),
  login: (token: string) => dispatch({ type: POST_USER_TOKEN, data: token }),
  show: () => dispatch({ type: POST_PROGRASS_BAR }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
