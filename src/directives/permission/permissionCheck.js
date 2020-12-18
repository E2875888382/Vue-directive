const permissions = [0, 1];
const permissionCheck = key=> permissions.indexOf(key) > -1;

export default permissionCheck;