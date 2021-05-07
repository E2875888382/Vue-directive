<template>
    <div class="home">
        <div class="flex-box">
            <!-- 实现懒加载的时候设置 once = true，防止重复设置src -->
            <img 
                class="flex-item" 
                src="../assets/img/loading.gif" 
                :data-src="item" 
                v-for="(item, index) in list" 
                :key="index" 
                v-visible="{ show: handleShow, once: true }"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "v-visible",
    data() {
        return {
            list: [
                'https://cn.bing.com/th?id=OHR.MaineWetland_ZH-CN7884780461_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                'https://cn.bing.com/th?id=OHR.ThosegharWaterfalls_ZH-CN9371597122_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                'https://cn.bing.com/th?id=OHR.Cholula_ZH-CN9284459784_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                'https://cn.bing.com/th?id=OHR.StarWarsSeal_ZH-CN9173208926_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                'https://cn.bing.com/th?id=OHR.InselMainauAerial_ZH-CN9105248103_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                'https://cn.bing.com/th?id=OHR.LaughingZebras_ZH-CN9034706837_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                'https://cn.bing.com/th?id=OHR.GGTeaGarden_ZH-CN8933043250_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                'https://cn.bing.com/th?id=OHR.MontStMich_ZH-CN8844280566_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
            ]
        }
    },
    methods: {
        handleShow(el) {
            el.src = el.dataset.src;
        }
    }
};
</script>

<style scoped>
.flex-item {
    width: 80%;
    margin: 0 auto;
}
</style>