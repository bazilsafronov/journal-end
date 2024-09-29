import { getUsers, addUser } from '../../services/users';
export default async function handler(req, res) {
    if (req.method === 'GET') {
        const users = await getUsers();
        res.status(200).json(users);
    } else if (req.method === 'POST') {
        const { name } = req.body;
        const user = await addUser(name);
        res.status(201).json(user);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
