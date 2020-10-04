import React, { useState, useContext, createContext, useReducer } from 'react';

export function createStore(reducer: any, actions: any, initState: any) {
  const ctx = createContext({} as any);

  const Provider = (props: any) => <ctx.Provider value={useReducer(reducer, initState)}>{props.children}</ctx.Provider>;

  function useStore() {
    const [state, dispatch] = useContext(ctx);
    return [state, actions(dispatch)];
  }

  return { Provider, useStore };
}
