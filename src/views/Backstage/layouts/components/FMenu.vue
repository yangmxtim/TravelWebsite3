<template>
  <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-light navbar-light">
                <a href="index.html" class="navbar-brand mx-4 mb-3">
                    <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>DASHMIN</h3>
                </a>
                <div class="d-flex align-items-center ms-4 mb-4">
                    <div class="position-relative">
                        <img class="rounded-circle" src="@/assets/images/seaIsland_logo.png" alt="" style="width: 40px; height: 40px;">
                        <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div class="ms-3">
                        <h6 class="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div class="navbar-nav w-100">
                    <a href="index.html" class="nav-item nav-link active" @click.prevent="this.$router.push('backMain')"><i class="fa fa-tachometer-alt me-2"></i>分析圖表</a>
                    
                    
                    <a href="form.html" @click.prevent="this.$router.push('member')" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>會員管理</a>
                    <a href="table.html" @click.prevent="this.$router.push('orderManage')" class="nav-item nav-link"><i class="fa fa-table me-2"></i>訂單管理</a>
                    <a href="chart.html" @click.prevent="this.$router.push('productManage')" class="nav-item nav-link"><i class="fa fa-chart-bar me-2"></i>產品管理</a>
                    
                </div>
            </nav>
        </div>
</template>

<script>
</script>
