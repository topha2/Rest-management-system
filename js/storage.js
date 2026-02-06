export const keys = {
    USERS: 'restaurant_users',
    MENU: 'restaurant_menu',
    ORDERS: 'restaurant_orders',
    SETTINGS: 'restaurant_settings',
    CURRENT_USER: 'restaurant_current_user'
};

export const storage = {
    get: (table) => {
        const data = localStorage.getItem(table);
        if (table === keys.SETTINGS) {
            return data ? JSON.parse(data) : { restaurantName: 'Al-Baraka Restaurant' };
        }
        if (table === keys.CURRENT_USER) {
            return data ? JSON.parse(data) : null;
        }
        return data ? JSON.parse(data) : [];
    },
    set: (table, value) => {
        localStorage.setItem(table, JSON.stringify(value));
    },
    remove: (table) => {
        localStorage.removeItem(table);
    },
    clear: () => {
        localStorage.clear();
    },
    // Adding some helpers for easier CRUD in local storage
    saveOne: (table, item) => {
        const data = storage.get(table);
        const index = data.findIndex(i => i.id === item.id);
        if (index > -1) {
            data[index] = item;
        } else {
            data.push(item);
        }
        storage.set(table, data);
        return item;
    },
    deleteOne: (table, id) => {
        const data = storage.get(table);
        const filtered = data.filter(i => i.id !== id);
        storage.set(table, filtered);
    }
};
