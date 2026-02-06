import { storage, keys } from './storage.js';

export const auth = {
    login: async (username, password) => {
        const users = storage.get(keys.USERS);
        const user = users.find(u => (u.username === username || u.email === username) && u.password === password);

        if (!user) {
            return { success: false, message: 'Invalid username or password' };
        }

        storage.set(keys.CURRENT_USER, user);
        return { success: true, user };
    },
    register: async (userData) => {
        const users = storage.get(keys.USERS);
        if (users.find(u => u.username === userData.username)) {
            return { success: false, message: 'Username already exists' };
        }

        const newUser = {
            id: Date.now().toString(),
            ...userData,
            role: userData.role || 'staff'
        };

        users.push(newUser);
        storage.set(keys.USERS, users);
        return { success: true, user: newUser };
    },
    logout: async () => {
        storage.remove(keys.CURRENT_USER);
        const isSubfolder = window.location.pathname.includes('/pages/');
        window.location.href = isSubfolder ? '../../index.html' : 'index.html';
    },
    getCurrentUser: () => {
        return storage.get(keys.CURRENT_USER) || null;
    },
    isAuthenticated: () => {
        return !!storage.get(keys.CURRENT_USER);
    },
    hasRole: (role) => {
        const user = auth.getCurrentUser();
        return user && user.role === role;
    }
};
