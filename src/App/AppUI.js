import React from 'react';

import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
  return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoContext.Consumer>
        {({
          error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <TodoList>
            {error && <p> hubo un error, desesperate...</p>}
            {loading && <p> estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p> Crea tu primer Todo!</p>}


            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete = {() => completeTodo(todo.text)}
                onDelete = {() => deleteTodo(todo.text)}
              />
            ))}

        </TodoList>

        )}
      </TodoContext.Consumer>



      <CreateTodoButton />
    </React.Fragment>
  );
}

export {AppUI};