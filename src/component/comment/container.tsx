import { connect } from "react-redux";

import { POST_COMMENT } from "../../store/post";
import Comment from "./component";

const mapStateToProps = (state: any, ownProps: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
  saveComment: (comment: string) => dispatch({ type: POST_COMMENT, comment: comment }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
