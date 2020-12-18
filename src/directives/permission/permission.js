const permission = (permissionCheck = ()=> {})=> {
    return {
        inserted(el, binding) {
            let permission = binding.value;

            if (permission !== null) {
                let hasPermission = permissionCheck(permission);

                if (!hasPermission) {
                    // 移除Dom元素，同v-if
                    el.parentNode && el.parentNode.removeChild(el);
                }
            }
        }
    };
}

export default permission;