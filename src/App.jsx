import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './router/RouteList';
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
