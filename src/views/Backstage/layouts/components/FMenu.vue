<template>
        <div class="sidebar bg-light" style="border: 2px solid lavender;">
            <nav class="navbar bg-light navbar-light">
                <a href="#" @click.prevent="this.$router.push('/')" class="navbar-brand mx-4 mb-3 mt-2">
                    <h3 class="d-flex" style="color:chocolate">
                        <img class="rounded-circle" src="@/assets/images/seaIsland_logo.png" alt="" style="width: 40px; height: 40px;">
                        <img class="ms-2" src="@/assets/images/seaIsland_word.png" style="width: px; height: 40px;">
                    </h3>
                </a>
                <div class="navbar-nav w-100">
                    <a href="#" class="nav-item nav-link" @click.prevent="this.$router.push('backMain')">
                        <i class="fa fa-tachometer-alt me-2"></i>
                        戰情室
                    </a>
                    <a href="#" @click.prevent="this.$router.push('member')" class="nav-item nav-link">
                        <i class="fa fa-users me-2" aria-hidden="true"></i>
                        用戶分析
                    </a>
                    <a href="#" @click.prevent="this.$router.push('orderManage')" class="nav-item nav-link">
                        <i class="fa fa-inbox me-2" aria-hidden="true"></i>
                        訂單一覽與分析
                    </a>
                    <a href="#" @click.prevent="this.$router.push('productManage')" class="nav-item nav-link">
                        <i class="fa fa-cart-shopping me-2" aria-hidden="true"></i>
                        商品查詢與新增
                    </a>
                </div>
            </nav>
        </div>
</template>

<script>
</script>
