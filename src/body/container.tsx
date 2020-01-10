import { connect } from "react-redux";

import Body from "./component";

const mapStateToProps = (state: any, ownProps: any) => ({
  postPage: state.post.postPage,
  token: state.user.token,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
