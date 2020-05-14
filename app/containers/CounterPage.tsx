import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/counter/Counter';
import {
  IncrementAction,
  DecrementAction,
  IncrementIfOdd,
  IncrementAsyncAction
} from '../actions/counter';
import { AllState } from '../types/_all';

const mapStateToProps = (state: AllState) => {
  const { counter } = state;
  return {
    count: counter.count
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      IncrementAction,
      DecrementAction,
      IncrementIfOdd,
      IncrementAsyncAction
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
