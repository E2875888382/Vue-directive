<template>
    <div class="home">
        <p v-for="(item, index) in 300" :key="index" v-visible>{{item}}</p>
    </div>
</template>

<script>
export default {
    name: "v-visible"
};
</script>
