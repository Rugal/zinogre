import { connect } from "react-redux";

import Post from "./component";

const mapStateToProps = (state: any, ownProps: any) => ({
  post: state.post.post,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
