import React from 'react';
import styled from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

const ItemBlock = styled.div`
  line-height: 35px;
  display: flex;
  flex-wrap: wrap;
  font-size: 22px;
  color: #333;
  .TodoItem {
    width: 100%;
    padding: 0.5rem;
    margin-top: 5px;
  }
  .content {
    display: flex;
    flex: 1;
    align-items: center;
    cursor: pointer;
  }
  .content svg {
    // 아이콘 크기조정
    font-size: 1.5rem;
    color: #f67280;
  }
  .text {
    margin-left: 15px;
  }
  .content.checked .text {
    // 체크시 css
    text-decoration: line-through;
    color: #aaa;
  }
`;
function TodoItem({
  todo,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) {
  const { id, text, checked } = todo;
  return (
    <ItemBlock>
      <div className="TodoItem">
        <div className={`content ${checked ? 'checked' : ''}`}>
          {checked ? (
            <MdCheckBox
              onClick={() => {
                onCheckToggle(id);
              }}
            />
          ) : (
            <MdCheckBoxOutlineBlank
              onClick={() => {
                onCheckToggle(id);
              }}
            />
          )}
          <div
            className="text"
            onClick={() => {
              onChangeSelectedTodo(todo);
              onInsertToggle();
            }}
            aria-hidden="true"
          >
            {text}
          </div>
        </div>
      </div>
    </ItemBlock>
  );
}
export default TodoItem;
