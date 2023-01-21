import React from 'react';
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
    /* este metodo lo que hace es que cada vez que escribamos algo(evento) se va viendo en la consola, y luego se actualiza en el estado */
  };

  return (
  <input
  className="TodoSearch"
      placeholder="task name"
      value={searchValue}   /* el valor del input tiene que ser igual que el estado que hayamos guardado en la variable(y que se va actualizando gracias a setAlgo) */
      onChange={onSearchValueChange}

    />
  );
}
export {TodoSearch};
