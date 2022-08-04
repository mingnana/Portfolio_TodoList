import {MdAdd} from 'react-icons/md';
import styled from 'styled-components';


const AddBtn = styled.button`
background: #ff7700;
&:hover {
  background: #63e6be;
}
// &:active {
//   background: #20c997;
// }

z-index: 100;
cursor: pointer;
width: 60px;
height: 60px;
// display: block;
align-items: center;
justify-content: center;
font-size: 60px;
position: absolute;
right:20px;
bottom: 20px;
// transform: translate(-50%, 50%);
color: white;
border-radius: 50%;
border: none;
outline: none;
display: flex;



transition: 0.125s all ease-in;
`
function TodoCreate(){
  
    return (
        <AddBtn onClick={onInsertToggle}>
            <MdAdd/>
        </AddBtn>
    )
}

// export default TodoCreate;