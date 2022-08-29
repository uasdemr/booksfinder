import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout';
import { ItemCard } from '../../Pages/ItemCard/ItemCard';
import { MainPage } from '../../Pages/Main';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":bookId" element={<ItemCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
