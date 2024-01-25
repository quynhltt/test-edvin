import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { userRoute } from './routes/userRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {userRoute.map(({ path, component }, index) => {
          return <Route key={index} path={path} element={component} />
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
