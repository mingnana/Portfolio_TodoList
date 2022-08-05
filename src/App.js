/* eslint arrow-body-style: ["error", "as-needed"] */

import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import Template from './components/Template';
import TodoList from './components/Todolist';
import TodoInsert from './components/Todoinsert';
import './App.css';

const GlobalStyle = createGlobalStyle`
  body{
    background:#e9ecef;
  }
`;
function App() {
  let nextId = 4;
  const [selectedTodo, setSelectedTodo] = useState('');
  const [insertToggle, setInsertToggle] = useState(false);
  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일 1',
      checked: true,
    },
    {
      id: 2,
      text: '할일 2',
      checked: false,
    },
    {
      id: 3,
      text: '할일 3',
      checked: false,
    },
  ]);
  // eslint-disable-next-line consistent-return
  const onInsertTodo = text => {
    if (text === '') {
      return alert('할일을 입력해주세요.');
    }
    const todo = {
      id: nextId,
      text,
      checked: false,
    };
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    setTodos(todos => todos.concat(todo)); // 상태불변성을 지키기 위해서 concat 사용
    nextId += 1;
  };

  const onCheckToggle = id => {
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };
  const onChangeSelectedTodo = todo => {
    setSelectedTodo(todo);
  };
  const onRemove = id => {
    onInsertToggle();
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };
  const onUpdate = (id, text) => {
    onInsertToggle();
    // eslint-disable-next-line @typescript-eslint/no-shadow, no-shadow
    setTodos(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, text } : todo)),
    );
  };
  return (
    <>
      <GlobalStyle />
      <Template todosLength={todos.length}>
        <TodoList
          todos={todos}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
        <button type="button" className="add-todo-btn" onClick={onInsertToggle}>
          <MdAdd />
        </button>
        {insertToggle && (
          <TodoInsert
            selectedTodo={selectedTodo}
            onInsertToggle={onInsertToggle}
            onInsertTodo={onInsertTodo}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        )}
      </Template>
    </>
  );
}

export default App;
