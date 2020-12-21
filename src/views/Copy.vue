<template>
    <div>
        <textarea name="textarea" id="" cols="30" rows="10" v-model="textarea"></textarea>
        <div v-copy="{text: textarea, click: handleClick}">点击复制输入框内容</div>
    </div>
</template>

<script>
export default {
    name: 'copy',
    data() {
        return {
            textarea: ''
        };
    },
    methods: {
        handleClick(event, copyResult) {
            if (copyResult) console.log('复制成功');
        }
    }
}
</script>

<style>

</style>