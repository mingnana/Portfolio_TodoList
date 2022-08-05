import { useEffect, useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { TiTrash, TiPencil } from 'react-icons/ti';
import styled from 'styled-components';

const BackgroundBlock = styled.div`
    .background {
        position: absolute;
        z-index: 900;
        top: 0px;
        left: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        display: flex;
        // justify-content:center;
        // align-items:center;
        background: rgba(0, 0, 0, 0.6);
    }
    form {
        position: absolute;
        top: 40%;
        margin-left: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 990;
        width: 300px;
        height: 150px;
        border-radius: 5px;
        box-shadow: 1px 2px 5px 1px #555;
        background: #fff;
        opacity: 1;
    }
    input {
        background: none;
        outline: none;
        border: none;
        border-bottom: 1px solid #999;
        padding: 0.5rem;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    button {
        padding-top: 15px;
        background: none;
        outline: none;
        border: none;
        color: #f67280;
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 35px;
        transition: 0.1s background ease-in;
    }
    .rewrite svg {
        padding-top: 20px;
        color: #f67280;
        margin: 0 10px;
        font-size: 30px;
        cursor: pointer;
    }
`;
function TodoInsert({ onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate }) {
    const [value, setValue] = useState('');
    const onChange = (e) => {
        setValue(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue('');
        onInsertToggle();
    };
    useEffect(() => {
        if (selectedTodo) {
            setValue(selectedTodo.text);
        }
    }, []);

    return (
        <BackgroundBlock>
            <div className="background" onClick={onInsertToggle}></div>
            <form
                onSubmit={
                    selectedTodo
                        ? () => {
                              onUpdate(selectedTodo.id, value);
                          }
                        : onSubmit
                }
            >
                <input name="todo" placeholder="할일을 추가하세요." value={value} onChange={onChange}></input>
                {selectedTodo ? (
                    <div className="rewrite">
                        <TiPencil 
                            onClick={() => {
                                onUpdate(selectedTodo.id, value);
                            }}
                        />
                        <TiTrash
                            onClick={() => {
                                onRemove(selectedTodo.id);
                            }}
                        />
                    </div>
                ) : (
                    <button type="submit">
                        <MdAddCircle />
                    </button>
                )}
            </form>
        </BackgroundBlock>
    );
}
export default TodoInsert;
