import { connect } from "react-redux";

import { DELETE_USER_TOKEN } from "../../store/user";
import Logout from "./component";

const mapStateToProps = (state: any, ownProps: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch({ type: DELETE_USER_TOKEN }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
