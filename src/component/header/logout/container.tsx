import { connect } from "react-redux";

import { USER_LOGOUT } from "../../../store";
import { DELETE_PROGRASS_BAR, POST_PROGRASS_BAR } from "../../../store/system";
import Logout from "./component";

const mapStateToProps = (state: any, ownProps: any) => ({
  showProgressBar: state.system.showProgressBar,
});

const mapDispatchToProps = (dispatch: any) => ({
  hide: () => dispatch({ type: DELETE_PROGRASS_BAR }),
  logout: () => dispatch({ type: USER_LOGOUT }),
  show: () => dispatch({ type: POST_PROGRASS_BAR }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
