import permission from '../directives/permission/permission';
import permissionCheck from '../directives/permission/permissionCheck';
import visible from '../directives/Visible/visible';

const directives = {
    permission: permission(permissionCheck),
    visible
};

export const customDirectives = {
    install(Vue) {
        Object.entries(directives).forEach(([directiveName, directiveObj])=> {
            Vue.directive(directiveName, directiveObj);
        });
    }
}