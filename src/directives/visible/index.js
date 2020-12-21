import bindEventListener from '../../utils/events';

const visible = {
    inserted(el, binding) {
        const {show: showHandle, hide: hideHandle, once} = binding.value;

        if (IntersectionObserver) {
            observe(el, showHandle, hideHandle, once);
        } else {
            // for IE
            observeScroll(el, showHandle, hideHandle, once);
        }
    },
    unbind() {
        bindEventListener(window, false, 'scroll', ()=> {});
    }
};

/**
 * observe by IntersectionObserver
 * @param {Document} el element
 * @param {Function} show show callback
 * @param {Function} hide hide callback
 * @param {Boolean} once run show callback once
 */
const observe = (el, show = ()=> {}, hide = ()=> {}, once = false)=> {
    const observer = new IntersectionObserver(entries=> {
        if (entries[0].intersectionRatio <= 0) {
            // out of view
            hide(el);
        } else {
            // show
            show(el);
            // once 下 show 只执行一次
            once && observer.unobserve(el);
        }
    })

    observer.observe(el);
};

/**
 * observe by scroll event
 * @param {Document} el element
 * @param {Function} show show callback
 * @param {Function} hide hide callback
 * @param {Boolean} once run show callback once
 */
const observeScroll = (el, show = ()=> {}, hide = ()=> {}, once = false)=> {
    bindEventListener(window, true, 'scroll', ()=> {
        throttle(()=> {
            const top = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const loaded = el.dataset.loaded;
        
            if (top < windowHeight) {
                // 非once模式可以重复执行
                !once && show(el);
                // 只执行一次
                if (!loaded && once) {
                    show(el);
                }
                // 添加load标志
                el.dataset.loaded = true;
            } else {
                hide(el);
            }
        }, 300)();
    });
};

const throttle = (fn, delay)=> {
    let timer = null;

    return ()=> {
        timer && clearTimeout(timer);
        timer = setTimeout(fn, delay);
    }
};

export default visible;