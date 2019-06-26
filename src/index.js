// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react Component
const App = () => {
  const buttonText = { text: 'ClickMe' };
  const labelText = 'Enter Name:';

  return (
    <div>
      <label htmlFor="name" className="label">
        {labelText}
      </label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText.text}
      </button>
    </div>
  ); 
};

// Take the react Component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);