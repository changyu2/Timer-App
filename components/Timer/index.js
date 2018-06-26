import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as Actions } from "../../reducer";
import Timer from "./presenter";

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(Actions.startTimer, dispatch),
    restartTimer: bindActionCreators(Actions.restartTimer, dispatch),
    addSecond: bindActionCreators(Actions.addSecond, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
