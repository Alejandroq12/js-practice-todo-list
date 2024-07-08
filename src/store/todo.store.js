import { Todo } from '../todos/models/todo.model';

const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending',
};

const state = {
  todos: [
    new Todo('Holitassss'),
    new Todo('Holitassss2'),
    new Todo('Holitassss3'),
  ],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log('InitStore 🥑');
};

const loadStore = () => {
  throw new Error('Method not implemented.');
};

const getTodos = (filter = Filters.All) => {
  switch(filter) {
    case filter.All:
      return [...state.todos];
    case filter.Completed:
      return state.todos.filter(todo => todo.done);
    case filter.Pending:
      return state.todos.filter(todo => !todo.done);
    default:
      throw new Error(`Option ${ filter } is not valid.`);

  }
};

/**
 *
 * @param {String} description
 */
const addTodo = (description) => {
  throw new Error('Method not implemented.');
};

/**
 *
 * @param {String} todoId Todo identifier
 */
const toggleTodo = (todoId) => {
  throw new Error('Method not implemented.');
};

/**
 *
 * @param {String} todoId Todo identifier
 */
const deleteTodo = (todoId) => {
  throw new Error('Method not implemented.');
};

const setFilter = (filter = Filters.All) => {
  throw new Error('Method not implemented.');
};

const getCurrentFilter = () => {
  throw new Error('Method not implemented.');
};

export default {
  addTodo,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
