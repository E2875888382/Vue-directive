const focus = {
    inserted(el, binding) {
        el.focus && el.focus();
    }
};

export default focus;