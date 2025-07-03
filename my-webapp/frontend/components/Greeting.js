import { useState } from 'react';

export default function Greeting() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleGreet = () => {
        fetch(`http://localhost:8080/greet?name=${encodeURIComponent(name)}`)
            .then((res) => res.text())
            .then((data) => setMessage(data))
            .catch((err) => console.error('Ошибка запроса:', err));
    };

    return (
        <div className="p-5 font-sans">
            <h1 className="text-2xl mb-4">Приветствие от сервера</h1>

            <div className="mb-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Введите имя"
                    className="border p-2 mr-2 rounded"
                />
                <button
                    onClick={handleGreet}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Получить приветствие
                </button>
            </div>

            <p className="text-lg">{message}</p>
        </div>
    );
}
