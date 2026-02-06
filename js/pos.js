import { storage, keys } from './storage.js';
import { generateId } from './utils.js';

export const posManager = {
    createOrder: (cart, total, type, method, operator) => {
        const order = {
            id: generateId(),
            date: new Date().toISOString(),
            user: operator,
            items: cart,
            total: total,
            orderType: type,
            paymentMethod: method,
            status: 'completed'
        };

        const orders = storage.get(keys.ORDERS) || [];
        orders.push(order);
        storage.set(keys.ORDERS, orders);
        return order;
    }
};
