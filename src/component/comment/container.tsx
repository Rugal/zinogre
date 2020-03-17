import { connect } from "react-redux";

import { POST_COMMENT } from "../../store/post";
import Comment from "./component";

const mapStateToProps = (state: any, ownProps: any) => ({
  comment: state.post.comment,
});

const mapDispatchToProps = (dispatch: any) => ({
  saveComment: (comment: string) => dispatch({ type: POST_COMMENT, comment }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
