import { storage, keys } from './storage.js';
import { INITIAL_USERS, INITIAL_MENU } from '../data/seed.js';

export const initializeData = () => {
    // Initialize Users
    const users = storage.get(keys.USERS);
    if (!users || users.length === 0) {
        storage.set(keys.USERS, INITIAL_USERS);
    }

    // Initialize Menu
    const menu = storage.get(keys.MENU);
    if (!menu || menu.length === 0) {
        storage.set(keys.MENU, INITIAL_MENU);
    }

    // Initialize Orders
    const orders = storage.get(keys.ORDERS);
    if (!orders) {
        storage.set(keys.ORDERS, []);
    }

    // Initialize Settings
    const settings = storage.get(keys.SETTINGS);
    if (!settings || Object.keys(settings).length === 0) {
        storage.set(keys.SETTINGS, {
            restaurantName: 'Al-Baraka Restaurant',
            currency: '$',
            address: 'Main Street, City',
            phone: '+252b 63 6775288'
        });
    }
};

// Auto-initialize on load
document.addEventListener('DOMContentLoaded', initializeData);
