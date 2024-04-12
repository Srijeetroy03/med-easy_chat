import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/Body/Main';
import ChatBot from './components/ChatPage/ChatBot';

let app_route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: '/chatbot',
        element: <ChatBot />
      }
    ],
  },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={app_route} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

