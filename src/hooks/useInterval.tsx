import React, {useEffect} from 'react';

const useInterval = ({time = 1000, call}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      call()
    }, time);
    return () => clearInterval(interval);
  }, [time]);
};

export default useInterval;
