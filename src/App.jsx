import { useState } from 'react';
import routes from './router/RouteList';
import { RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
