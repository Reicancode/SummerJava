import { useState } from 'react';

export default function GreetingForm() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    const fetchGreeting = async () => {
        const response = await fetch(`http://localhost:8080/greeting?name=${name}`);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const greetingText = doc.querySelector('p').textContent;
        setGreeting(greetingText);
    };

    const postGreeting = async () => {
        const params = new URLSearchParams();
        params.append("name", name);
        const response = await fetch(`http://localhost:8080/greeting`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: params.toString()
        });
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");
        const greetingText = doc.querySelector("p").textContent;
        setGreeting(greetingText);
    };

    return (
        <div className="p-5 font-sans">
            <h1 className="text-2xl mb-4">Сообщение от сервера</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введи имя"
                className="border p-2 mr-2"
            />
            <button onClick={fetchGreeting} className="bg-blue-500 text-white p-2 rounded mr-2">
                Получить (GET)
            </button>
            <button onClick={postGreeting} className="bg-green-500 text-white p-2 rounded">
                Отправить (POST)
            </button>
            {greeting && <p className="mt-4">{greeting}</p>}
        </div>
    );
}
