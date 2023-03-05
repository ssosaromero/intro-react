import React from 'react';

function TodoForm() {
  const onCancel = () => {
    // pendiente
  };

  const onSubmit = () => {
    // pendiente
  };


  return (
    <form onSubmit ={onSubmit}>
      <label>...</label>
      <textarea
        placeholder="Cortar la cebolla"
      />
      <div>
        <button
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          onClick={onCancel}
        >
          Agregar
        </button>
      </div>
    </form>
  );

}


export { TodoForm };
