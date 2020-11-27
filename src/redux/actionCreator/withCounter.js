import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter: state.counter.counter ? state.counter.counter : 0,
});

export default connect(mapStateToProps);
