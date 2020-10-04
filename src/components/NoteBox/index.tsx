import React, { useEffect, useState } from 'react';
import css from './index.module.scss';
import classNames from 'classnames';
import NoteBlock from './NoteBlock';
import dayjs from 'dayjs';

export default function ({ list }: any) {
  return (
    <div>
      {list.map((itemGroup: any) => (
        <div className={css.noteBox}>
          <div className={css.headline}>{dayjs(itemGroup.date).format('YYYYMMDD')}</div>
          {itemGroup.note.map((item: any) => (
            <NoteBlock item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}
