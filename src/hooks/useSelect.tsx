import React from 'react';
import {useSelector} from 'react-redux';
import {Store} from '../states/store';

const useSelect = (select: (state: Store) => any) => {
  const data = useSelector(select);
  return data;
};

export default useSelect;
