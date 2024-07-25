import html from './app.html?raw';
import todoStore from '../store/todo.store.js';

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    console.log(todos);
  }
  // When the App() function it is called
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();
}