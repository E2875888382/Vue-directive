import permission from '../directives/permission';
import visible from '../directives/visible';
import copy from '../directives/copy';
import focus from '../directives/focus';

const directives = {
    permission,
    visible,
    copy,
    focus
};

export const customDirectives = {
    install(Vue) {
        Object.entries(directives).forEach(([directiveName, directiveObj])=> {
            Vue.directive(directiveName, directiveObj);
        });
    }
}