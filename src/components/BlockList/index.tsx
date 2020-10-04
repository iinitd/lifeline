import React, { useState, useEffect } from 'react';
import useAsyncEffect from 'use-async-effect';
import Block from '../Block';
import { useRootStore } from '../../store/root';

export default function () {
  const [rootState, rootActions] = useRootStore();

  const [text, setText] = useState('');

  useAsyncEffect(async () => {
    await rootActions.refreshList();
  }, []);

  return (
    <div>
      <input value={text} onChange={(e: any) => setText(e.target.value)} />{' '}
      <button
        onClick={() => {
          rootActions.addOne(text);
          setText('');
        }}
      >
        ok
      </button>
      {rootState.blocks.map((b: any) => (
        <Block key={b.id} block={b} />
      ))}
    </div>
  );
}
