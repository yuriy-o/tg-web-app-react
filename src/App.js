import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import './App.css';
import './components/Button/Button.css';

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
            <button className={'button'} onClick={onToggleButton}>
                Toggle
            </button>
        </div>
    );
}

export default App;
