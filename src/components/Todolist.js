import React from 'react';
import styled from 'styled-components';
import TodoItem from './Todoitem';

const ListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
function TodoList({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) {
  // eslint-disable-line
  return (
    <ListBlock>
      {todos.map(todo => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            onCheckToggle={onCheckToggle}
            onInsertToggle={onInsertToggle}
            onChangeSelectedTodo={onChangeSelectedTodo}
          />
        );
      })}
    </ListBlock>
  );
}

export default TodoList;
