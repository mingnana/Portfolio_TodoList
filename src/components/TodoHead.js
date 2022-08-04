import style from 'styled-components'
// import { useTodoState } from './TodoContext';

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
        color:#38d9a9;
        font-size:18px;
        margin-top:40px;
        font-weight:700;
    }
`

function TodoHead(){
    // const todos = useTodoState();
    // const undoneTasks = todos.filter(todo => !todo.done); // done이 false인 객체들
    return (
        <TodoHeaddiv>
            <h1>2022년 8월 1일</h1>
            <div className="day">월요일</div>
            {/* <div className="tasks-left">할일 {undoneTasks.length}개 남음</div> */}
            <div className="tasks-left">할일 개 남음</div>
        </TodoHeaddiv>
    )
}

export default TodoHead;