import { connect } from "react-redux";

import PostBrief from "./component";

const mapStateToProps = (state: any, ownProps: any) => ({
  token: state.user.token,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PostBrief);
