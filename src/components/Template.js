import React from 'react';
import styled from 'styled-components';
import TodoHead from './TodoHead';

const TemplateBlock = styled.div`
  width: 500px;
  height: 700px;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  position: relative;
`;
// eslint-disable-next-line react/function-component-definition
function Template({ children, todosLength }) {
  return (
    <TemplateBlock>
      <TodoHead todosLength={todosLength} />
      <div>{children}</div>
    </TemplateBlock>
  );
}
export default Template;
