import React from 'react';
import {useDispatch} from 'react-redux';
import {login, logout, updateUser} from '../states/account.slice';
import {hideSplash, load, loaded} from '../states/process.slice';

const useAction = () => {
  const dispatch = useDispatch();
  const actionDipatch = (action: any) => () => dispatch(action());
  return {
    hideSplash: actionDipatch(hideSplash),
    login: actionDipatch(login),
    logout: actionDipatch(logout),
    updateUser: actionDipatch(updateUser),
    load: actionDipatch(load),
    loaded: actionDipatch(loaded),
  };
};

export default useAction;
