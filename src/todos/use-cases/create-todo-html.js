// Importing only for documentation purposes
import { Todo } from '../models/todo.model.js';

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {
  if(!todo) throw new Error('Todo object is required.');
  
  const html = `<h1>${ todo.description }</h1>`;

  const liElement = document.createElement('li');
  liElement.innerHTML = html;
  return liElement;
};