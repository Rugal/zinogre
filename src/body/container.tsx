import { connect } from "react-redux";

import Body from "./component";

const mapStateToProps = (state: any, ownProps: any) => ({
  postPage: state.post.postPage,
});

/*
https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-a-function
const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  }
}
*/

/*
https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ listRepos }, dispatch);
*/

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
