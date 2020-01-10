import { connect } from "react-redux";

import { POST_PROGRASS_BAR, DELETE_PROGRASS_BAR } from "../../store/system";
import Login from "./component";

const mapStateToProps = (state: any, ownProps: any) => ({
  showProgressBar: state.system.showProgressBar,
});

const mapDispatchToProps = (dispatch: any) => ({
  show: () => dispatch({ type: POST_PROGRASS_BAR }),
  hide: () => dispatch({ type: DELETE_PROGRASS_BAR }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
