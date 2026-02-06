import { storage, keys } from './storage.js';
import { generateId } from './utils.js';

export const menuManager = {
    getAll: () => storage.get(keys.MENU) || [],
    save: (item) => {
        let menu = storage.get(keys.MENU) || [];
        if (item.id && menu.find(i => i.id === item.id)) {
            menu = menu.map(i => i.id === item.id ? item : i);
        } else {
            item.id = generateId();
            menu.push(item);
        }
        storage.set(keys.MENU, menu);
        return item;
    },
    delete: (id) => {
        let menu = storage.get(keys.MENU) || [];
        menu = menu.filter(i => i.id !== id);
        storage.set(keys.MENU, menu);
    }
};
