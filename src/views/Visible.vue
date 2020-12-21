<template>
    <div class="home">
        <p v-for="(item, index) in 300" :key="index" v-visible="{ show: handleShow, once: true }">{{item}}</p>
    </div>
</template>

<script>
export default {
    name: "v-visible",
    data() {
        return {
            list: []
        }
    },
    methods: {
        handleShow(el) {
            // 通过这个指令可以扩展为lazy-load
            this.list.push(el.innerHTML);
            console.log(el);
        }
    }
};
</script>
