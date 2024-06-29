<template>
    <div class="card my-2 p-0 box-shadow">
        <div class="row">
            <div class="col-md-12 my-2 d-flex">
                <div class="card-body">
                    <span class="nav-link2">選擇分類：</span>
                    <router-link 
                        to="categoryMembers" 
                        :class="{ active: activeLink === 'categoryMembers' }" 
                        @click.native="setActiveLink('categoryMembers')"
                    >
                        <a class="nav-link2 mx-lg-2" href="#">基本資料</a>
                    </router-link>
                    <router-link 
                        to="qr" 
                        :class="{ active: activeLink === 'qr' }" 
                        @click.native="setActiveLink('qr')"
                    >
                        <a class="nav-link2 mx-lg-2" href="#">我的票券</a>
                    </router-link>
                    <router-link 
                        to="note" 
                        :class="{ active: activeLink === 'note' }" 
                        @click.native="setActiveLink('note')"
                    >
                        <a class="nav-link2 mx-lg-2" href="#">行程筆記</a>
                    </router-link>
                </div>
                <div>
                    <img style="height: 65px; width: auto;" src="/src/views/Layout/img/cat.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeLink: ''
        };
    },
    methods: {
        setActiveLink(link) {
            this.activeLink = link;
        }
    }
};
</script>

<style scoped>
/* 清除超連結預設底線、顏色 */
a {
    text-decoration: none;
    color: gray;
}

a.active {
    color: black;
}

.router-link-active {
    text-decoration: none;
}

@media (max-width: 767.98px) {
    a {
        padding: 8px;
    }
}
</style>
