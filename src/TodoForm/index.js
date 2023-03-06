import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';


function TodoForm() {

  const [newTodoValue, setNewTodoValue] = React.useState('');


  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // Utilizamos nuestra función para añadir nuestro TODO
    addTodo(newTodoValue);
    // Cerramos nustro modal
    setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    setNewTodoValue('')
  };


  return (
    <form onSubmit ={onSubmit}>
      <label> Escribe una tarea nueva </label>
      <textarea
      value={newTodoValue}
        onChange={onChange}
        placeholder="escribe una tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Agregar
        </button>
      </div>
    </form>
  );

}


export { TodoForm };
