<template>
    <div class="home">
        <p v-for="user in users" :key="user.id" v-permission="user.role">
            {{ user.name }}
        </p>
    </div>
</template>

<script>
export default {
    name: "v-permission",
    data() {
        return {
            users: [
                {
                    id: 0,
                    name: "tom",
                    role: 0,
                },
                {
                    id: 1,
                    name: "merry",
                    role: 1,
                },
                {
                    id: 2,
                    name: "jack",
                    role: 2,
                },
            ]
        };
    }
};
</script>
