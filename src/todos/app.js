import html from './app.html?raw';

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {
  // When the App() function it is called
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
  })();
}