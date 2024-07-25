// Importing only for documentation purposes
import { Todo } from '../models/todo.model.js';
import { createTodoHTML } from './';
/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = [] ) => {

  // TODO: referencia al elemento del DOM
  const element = document.querySelector(elementId);

  todos.forEach( todo => {
    element.append(createTodoHTML(todo));
  })
}