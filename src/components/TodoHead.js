import React from 'react';
import style from 'styled-components';

const TodoHeaddiv = style.div`
    padding:48px 32px 24px;
    border-bottom:1px solid #ddd;
    h1{
        margin:0;
        font-size:36px;
        color:#343a40;
    }
    .day{
        margin-top:4px;
        color:#868e96;
        font-size:21px;
    }
    .tasks-left{
        color:#ff0000;
        font-size:18px;
        margin-top:40px;
        font-weight:700;
    }
`;

function TodoHead({ todosLength }) {
  const today = new Date();
  const date = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const day = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  return (
    <TodoHeaddiv>
      <h1>{date}</h1>
      <div className="day">{day}</div>
      <div className="tasks-left">총 할일 {todosLength}개</div>
    </TodoHeaddiv>
  );
}

export default TodoHead;
