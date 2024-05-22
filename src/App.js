import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import Button from './components/Button/Button';
import './App.css';

function App() {
    const { tg, onToggleButton } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg]);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<ProductList />} />
                <Route path={'form'} element={<Form />} />
            </Routes>
            <Button onClick={onToggleButton}>Toggle</Button>
        </div>
    );
}

export default App;
