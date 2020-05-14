import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.scss';
import routes from '../../constants/routes.json';

type Props = {
  IncrementAction: () => void;
  IncrementIfOdd: () => void;
  IncrementAsyncAction: (delay?: number) => void;
  DecrementAction: () => void;
  count: number;
};

const Counter = (props: Props) => {
  const {
    IncrementAction,
    IncrementIfOdd,
    IncrementAsyncAction,
    DecrementAction,
    count
  } = props;

  return (
    <div>
      <input className={styles.input} type="text" placeholder="some text" />
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>BACK</Link>
      </div>
      <div className={`counter ${styles.counter}`} data-tid="counter">
        {count}
      </div>
      <div className={styles.btnGroup}>
        <button
          className={styles.btn}
          onClick={IncrementAction}
          data-tclass="btn"
          type="button"
        >
          +
        </button>
        <button
          className={styles.btn}
          onClick={DecrementAction}
          data-tclass="btn"
          type="button"
        >
          -
        </button>
        <button
          className={styles.btn}
          onClick={IncrementIfOdd}
          data-tclass="btn"
          type="button"
        >
          odd
        </button>
        <button
          className={styles.btn}
          onClick={() => IncrementAsyncAction()}
          data-tclass="btn"
          type="button"
        >
          async
        </button>
      </div>
    </div>
  );
};

export default Counter;
