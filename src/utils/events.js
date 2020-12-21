/**
 * 兼容的事件绑定与解绑函数
 * @param {*} el event target
 * @param {Boolean} bind bind or unbind
 * @param {String} type event type
 * @param {Function} fn handle function
 */
const bindEventListener = (el, bind, type, fn)=> {
    if (bind) {
        if (el.addEventListener) {
            el.addEventListener(type, fn, false);
        } else if (el.attachEvent) {
            el.attachEvent('on' + type, fn);
        } else {
            el['on' + type] = fn;
        }
    } else {
        if (el.removeEventListener) {
            el.removeEventListener(type, fn, false);
        } else if (el.detachEvent) {
            el.detachEvent('on' + type, fn);
        } else {
            el['on' + type] = null;
        }
    }
};
export default bindEventListener;