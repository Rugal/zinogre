import { connect } from "react-redux";

import { POST_PROGRASS_BAR, DELETE_PROGRASS_BAR } from "../../store/system";
import { DELETE_USER_TOKEN } from "../../store/user";
import Logout from "./component";

const mapStateToProps = (state: any, ownProps: any) => ({
  showProgressBar: state.system.showProgressBar,
});

const mapDispatchToProps = (dispatch: any) => ({
  hide: () => dispatch({ type: DELETE_PROGRASS_BAR }),
  logout: () => dispatch({ type: DELETE_USER_TOKEN }),
  show: () => dispatch({ type: POST_PROGRASS_BAR }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
