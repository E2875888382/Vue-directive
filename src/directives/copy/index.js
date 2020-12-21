import bindEventListener from '../../utils/events';

let copyText = '';

const copy = {
    bind(el, binding) {
        const {text, click, empty = ()=> {}} = binding.value;

        copyText = text;
        bindEventListener(el, true, 'click', e=> {
            let copyResult;

            if (copyText.trim().length === 0) {
                empty();
            } else {
                const input = document.createElement('input');

                input.readOnly = true;
                input.value = copyText;
                document.body.appendChild(input);
                input.select();
                copyResult = document.execCommand('Copy');
                document.body.removeChild(input);
            }
            // 合并click事件
            click(e, copyResult);
        });
    },
    componentUpdated(el, binding) {
        copyText = binding.value.text;
    },
    unbind(el) {
        bindEventListener(el, false, 'click', ()=> {});
    }
};

export default copy;

