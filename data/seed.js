import { ROLES } from './constants.js';

export const INITIAL_USERS = [
    {
        id: 'user_admin',
        fullName: 'System Admin',
        username: 'admin',
        password: 'admin', // In a real app, this should be hashed
        role: 'admin'
    }
];

export const INITIAL_MENU = [
    {
        id: '1',
        name: 'Mandi Rice',
        category: 'rice',
        price: 15.00,
        image: '../../assets/images/food/rice.jpg',
        status: 'available'
    },
    {
        id: '2',
        name: 'Somali Tea',
        category: 'coffee',
        price: 5.00,
        image: '../../assets/images/food/coffee.jpg',
        status: 'available'
    },
    {
        id: '3',
        name: 'Kunafa',
        category: 'desserts',
        price: 8.00,
        image: '../../assets/images/food/dessert.jpg',
        status: 'available'
    }
];
