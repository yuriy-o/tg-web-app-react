import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';

function App() {
    const { tg, onToggleButton } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg]);

    return (
        <div className="App">
            Hello world !<button onClick={onToggleButton}>Toggle</button>
        </div>
    );
}

export default App;
