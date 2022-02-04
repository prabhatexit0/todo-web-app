import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './todo/Main'

ReactDOM.render(
  <React.StrictMode>
    <div 
      className="
        bg-gray-500 
        flex
        justify-end
        h-screen 
        w-screen">
      <Main/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
