import { Todo } from '../todos/models/todo.model';

const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending',
}

const state = {
  todos: [
    new Todo('Holitassss'),
    new Todo('Holitassss2'),
    new Todo('Holitassss3'),
  ],
  filter: Filters.All,
}

const initStore = () => {
  console.log(state);
  console.log('InitStore 🥑');
}

export default {
  initStore,
}