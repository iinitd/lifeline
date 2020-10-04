import { createStore } from './index';
import api from './api';

const initState = {
  blocks: [],
};

function reducer(state: any, action: { type: string; payload: any }) {
  console.log(state, action);
  switch (action.type) {
    case 'set':
      return {
        blocks: action.payload,
      };
    case 'add':
      return {
        blocks: [
          ...state.blocks,
          {
            id: '3',
            content: action.payload,
          },
        ],
      };
    default:
      return state;
  }
}

function actions(dispatch: any) {
  return {
    refreshList: async (list: any) => {
      const res = await api.getList();
      dispatch({
        type: 'set',
        payload: res,
      });
    },
    addOne: async (content: string) => {
      dispatch({
        type: 'add',
        payload: content,
      });
    },
  };
}

const { Provider: RootProvider, useStore: useRootStore } = createStore(reducer, actions, initState);

export { RootProvider, useRootStore };
