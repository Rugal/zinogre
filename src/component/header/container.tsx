import { connect } from "react-redux";

import { PostPage } from "../../generated/graphql";
import { GET_POST_PAGE } from "../../store/post";
import Header from "./component";

const mapStateToProps = (state: any, ownProps: any) => ({
  showProgressBar: state.system.showProgressBar,
  token: state.user.token,
});

const mapDispatchToProps = (dispatch: any) => ({
  setPostPage: (page: PostPage) => dispatch({ type: GET_POST_PAGE, body: page }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
