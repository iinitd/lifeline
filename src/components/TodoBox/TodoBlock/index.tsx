import React, { useEffect, useState } from 'react';
import css from './index.module.scss';
import classNames from 'classnames';

export default function ({ todo }: any) {
  const [status, setStatus] = useState(todo.status);
  return (
    <div className={classNames(css.todoBlock, { [css.todoDDLBlock]: todo.ddl })}>
      <input
        type="checkbox"
        checked={status}
        onChange={e => {
          console.log(e.target.checked);
          setStatus(e.target.checked);
        }}
      />
      {todo.ddl ? <span className={css.tag}>{todo.ddl}</span> : null}
      <span className={status ? css.checkedContent : undefined}>{todo.content}</span>
    </div>
  );
}
