import { connect } from "react-redux";

import { GET_POST_PAGE } from "../store/post";
import { DELETE_USER_TOKEN } from "../store/user";
import Header from "./component";

const mapStateToProps = (state: any, ownProps: any) => ({
  showProgressBar: state.system.showProgressBar,
  token: state.user.token,
});

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch({ type: DELETE_USER_TOKEN }),
  setPostPage: (response: any) => dispatch({ type: GET_POST_PAGE, body: response.data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
