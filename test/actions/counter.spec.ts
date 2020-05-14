import { spy } from 'sinon';
import * as actions from '../../app/actions/counter';
import { INCREMENT_COUNTER } from '../../app/types/counter';

describe('actions', () => {
  it('should increment should create increment action', () => {
    expect(actions.IncrementAction()).toMatchSnapshot();
  });

  it('should decrement should create decrement action', () => {
    expect(actions.DecrementAction()).toMatchSnapshot();
  });

  it('should incrementIfOdd should create increment action', () => {
    const fn = actions.IncrementIfOdd();
    expect(fn).toBeInstanceOf(Function);
    const dispatch = spy();
    const getState = () => ({ counter: { count: 1 } });
    fn(dispatch, getState);
    expect(dispatch.calledWith({ type: INCREMENT_COUNTER })).toBe(true);
  });

  it('should incrementIfOdd shouldnt create increment action if counter is even', () => {
    const fn = actions.IncrementIfOdd();
    const dispatch = spy();
    const getState = () => ({ counter: { count: 2 } });
    fn(dispatch, getState);
    expect(dispatch.called).toBe(false);
  });

  // There's no nice way to test this at the moment...
  it('should incrementAsync', () => {
    return new Promise(resolve => {
      const fn = actions.IncrementAsyncAction(1);
      expect(fn).toBeInstanceOf(Function);
      const dispatch = spy();
      fn(dispatch);
      setTimeout(() => {
        expect(dispatch.calledWith({ type: INCREMENT_COUNTER })).toBe(true);
        resolve();
      }, 5);
    });
  });
});
