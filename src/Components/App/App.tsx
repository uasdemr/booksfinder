import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemCard } from '../ItemCard/ItemCard';
import { ItemList } from '../ItemList';
import { Layout } from '../Layout';
import './App.css';
// import styless from './App.module.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ItemList />} />
          <Route path=":bookId" element={<ItemCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
