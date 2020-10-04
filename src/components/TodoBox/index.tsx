import React, { useEffect } from 'react';
import css from './index.module.scss';
import TodoBlock from './TodoBlock';

export default function ({ list }: any) {
  return (
    <div className={css.todoBox}>
      {list.map((todo: any) => (
        <TodoBlock todo={todo} />
      ))}
    </div>
  );
}
