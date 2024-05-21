import './App.css';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            Hello world !<button onClick={onClose}>Закрити</button>
        </div>
    );
}

export default App;
