<template>
    <div class="home">
        <!-- 传参 -->
        <!-- <p v-for="user in users" :key="user.id" v-permission="permissionCheck(user.role)"> -->
        <!-- 不带参数 -->
        <p v-for="user in users" :key="user.id" v-permission="permissionCheckWithoutParams">
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
                    role: 3,
                },
            ]
        };
    },
    methods: {
        permissionCheck(key) {
            const permissions = [0, 1];

            return permissions.indexOf(key) > -1;
        },
        permissionCheckWithoutParams() {
            return true;
        }
    }
};
</script>
