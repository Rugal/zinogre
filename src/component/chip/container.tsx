import { connect } from "react-redux";

import ChipList from "./component";

const mapStateToProps = (state: any, ownProps: any) => ({
  chips: state.post.chips,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChipList);
