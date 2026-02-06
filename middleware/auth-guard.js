import { auth } from '../js/auth.js';

export const checkAuth = (requiredRole = null) => {
    // Helper to get correct relative path to root
    const getPathToRoot = () => {
        const path = window.location.pathname;
        if (path.includes('/pages/admin/') || path.includes('/pages/pos/') || path.includes('/pages/finance/')) {
            return '../../index.html';
        } else if (path.includes('/pages/')) {
            return '../index.html';
        }
        return 'index.html';
    };

    if (!auth.isAuthenticated()) {
        window.location.href = getPathToRoot();
        return;
    }

    if (requiredRole && !auth.hasRole(requiredRole)) {
        // Redirect to their respective dashboard if they don't have permission
        const user = auth.getCurrentUser();
        const rootPath = getPathToRoot().replace('index.html', '');
        
        if (user.role === 'admin') {
            window.location.href = rootPath + 'pages/admin/dashboard.html';
        } else if (user.role === 'reception' || user.role === 'finance') {
            window.location.href = rootPath + 'pages/pos/pos.html';
        } else {
            window.location.href = getPathToRoot();
        }
    }
};
