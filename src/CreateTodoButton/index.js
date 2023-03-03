import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
    className="CreateTodoButton"
    onClick={onClickButton}
    >

    </button>
  );
}

export { CreateTodoButton };

// tiene que haber una funcion: arrow function o definirla al principio y luego llamarla(en ultimo este caso, si quisieramos reutilizar la funcion agregandole un parametro, igual necesitariamos la arrow function)
