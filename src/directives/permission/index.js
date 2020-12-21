/**
 * judge function
 * @param {*} obj 
 */
const isFunction = (obj)=> {
    return Object.prototype.toString.call(obj) === '[object Function]';
}

const permission = {
    inserted(el, {value}) {
        const hasPermission = isFunction(value) ? value() : value;

        if (!hasPermission) {
            // 移除Dom元素，同v-if
            el.parentNode && el.parentNode.removeChild(el);
        }
    }
};

export default permission;