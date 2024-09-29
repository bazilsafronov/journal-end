import { useEffect, useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/users');
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const addUser = async () => {
        await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        setName('');
        // Обновляем список пользователей
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
    };

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>{user.name}</li>
                ))}
            </ul>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add a new user"
            />
            <button onClick={addUser}>Add User</button>
        </div>
    );
};

export default UserList;
