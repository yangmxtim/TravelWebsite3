<template>
     <div class="container">
            <h4>設施</h4>
            <p>{設施}</p><br>
            <h4>資訊</h4>
            <div class="row">
                <div class="col-9">
                    <p>入住時間：{入住時間}&nbsp; 退房時間：{退房時間}</p>
                    <p>附近地標：{附近地標}</p>
                </div>
                <div class="col-3">
                    <div class="map"><br><br><br><br>
                        <button type="button" class="btn btn-outline-primary">查看地圖</button>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>
/* 地圖 */
.map{
    height: 25vh;
    background-image: url("/src/views/Layout/img/map.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}
</style>