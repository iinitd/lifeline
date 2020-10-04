import React, { useEffect, useState } from 'react';
import css from './index.module.scss';
import classNames from 'classnames';
import dayjs from 'dayjs';

interface INote {
  id: string;
  createTime: string;
  content: string;
}

export default function ({ item }: { item: INote }) {
  return (
    <div className={css.noteBlock}>
      <div className={css.date} title={item.createTime}>
        {dayjs(item.createTime).format('HH:MM:ss')}
      </div>
      <div className={css.content}>{item.content}</div>
    </div>
  );
}
