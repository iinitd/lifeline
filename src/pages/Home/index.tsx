import React from 'react';
import BlockList from '../../components/BlockList';
import { RootProvider } from '../../store/root';
import css from './index.module.scss';
import TodoBox from '../../components/TodoBox';
import NoteBox from '../../components/NoteBox';

const projectList = ['Personal', 'Work', 'Fit'];

const todoList = [
  {
    id: '1',
    status: true,
    content: 'Drink water',
  },
  {
    id: '2',
    status: false,
    ddl: '2020/09/24',
    content: 'Get up early',
  },
];

const noteGoupList = [
  {
    date: '2020/09/23',
    note: [
      {
        id: '1',
        createTime: '2020-09-23 22:00:00',
        content:
          '大家都成了大人，各自拥有不同的生活圈子，所以这在某种程度上也是无可奈何。我们已经不再是天真的高中生了。可就算是这样，亲眼看着曾经具有重要意义的东西一点点褪色，逐渐消失，还是让人悲哀。毕竟是一起度过了朝气蓬勃的时代，一起长大的人啊。',
      },
      {
        id: '2',
        createTime: '2020-09-23 22:00:00',
        content:
          '大家都成了大人，各自拥有不同的生活圈子，所以这在某种程度上也是无可奈何。我们已经不再是天真的高中生了。可就算是这样，亲眼看着曾经具有重要意义的东西一点点褪色，逐渐消失，还是让人悲哀。毕竟是一起度过了朝气蓬勃的时代，一起长大的人啊。',
      },
      {
        id: '3',
        createTime: '2020-09-23 22:00:00',
        content:
          '大家都成了大人，各自拥有不同的生活圈子，所以这在某种程度上也是无可奈何。我们已经不再是天真的高中生了。可就算是这样，亲眼看着曾经具有重要意义的东西一点点褪色，逐渐消失，还是让人悲哀。毕竟是一起度过了朝气蓬勃的时代，一起长大的人啊。',
      },
    ],
  },
  {
    date: '2020/09/22',
    note: [
      {
        id: '1',
        content: 'Ayy..',
      },
    ],
  },
  {
    date: '2020/09/21',
    note: [
      {
        id: '1',
        content: 'Ayy..',
      },
    ],
  },
];

export default function () {
  console.log(css);
  return (
    <RootProvider>
      <main className={css.mainContainer}>
        <div className={css.leftContainer}>
          <div className={css.groupContainer}>
            {projectList.map(g => (
              <div className={css.groupItem}>{g}</div>
            ))}
          </div>
        </div>
        <div className={css.rightContainer}>
          <div className={css.instantInput}>
            <input />
            <button>ok</button>
          </div>
          <TodoBox list={todoList} />
          <NoteBox list={noteGoupList} />
        </div>

        {/* <BlockList /> */}
      </main>
    </RootProvider>
  );
}
