

export const checkRole = (userRole, allowedRoles) => {
    return allowedRoles.includes(userRole);
};
