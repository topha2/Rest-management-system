import { storage, keys } from './storage.js';
import { generateId } from './utils.js';

export const userManager = {
    getAll: () => storage.get(keys.USERS) || [],
    save: (user) => {
        let users = storage.get(keys.USERS) || [];
        if (user.id && users.find(u => u.id === user.id)) {
            users = users.map(u => u.id === user.id ? user : u);
        } else {
            user.id = generateId();
            users.push(user);
        }
        storage.set(keys.USERS, users);
        return user;
    },
    delete: (id) => {
        let users = storage.get(keys.USERS) || [];
        users = users.filter(u => u.id !== id);
        storage.set(keys.USERS, users);
    }
};
