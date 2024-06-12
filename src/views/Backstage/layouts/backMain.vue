<template>
  <div class="m-4">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin mb-2"
    >
      <!-- 輸出輸入按鈕start -->
      <div class="d-flex align-items-center flex-wrap text-nowrap ms-auto">
        <button
          type="button"
          class="btn btn-outline-primary btn-icon-text me-2 mb-md-0 bg-light"
        >
          <i class="fa fa-print" aria-hidden="true"></i>
          列印
        </button>
        <button
          type="button"
          class="btn btn-outline-primary btn-icon-text mb-md-0 bg-light"
        >
          <i class="fa fa-download" aria-hidden="true"></i>
          下載報表
        </button>
      </div>
    </div>
    <!-- 輸出輸入按鈕end -->

    <main class="page-content">
      <div class="row">
        <!-- card1 -->
        <div class="col-12 col-lg-3 d-flex">
          <div class="card radius-10 w-100 mb-4">
            <div class="card-body">
              <p>每月網站流量趨勢分析</p>
              <h2 class="text-center fw-light">5,635</h2>
              <div id="chart1" class="chart"></div>
            </div>
            <div class="card-footer bg-transparent border-top">
              <div class="d-flex align-items-center justify-content-between">
                <div class="text-center">
                  <p class="font-13 mb-0">與上個月相較</p>
                  <p class="mb-0">87.6%</p>
                </div>
                <div class="text-center">
                  <p class="font-13 mb-0">與去年同月相較</p>
                  <p class="mb-0">54.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- card2 -->
        <div class="col-12 col-lg-9 d-flex mb-4">
          <div class="card radius-10 w-100">
            <div class="card-body">
              <p>銷售總額分析</p>
              <div id="chart2" style="min-height: 205px"></div>
            </div>
          </div>
        </div>
      </div>
      <!--end row-->
      <div class="row mb-4">
        <div class="col-12 col-lg-3 d-flex">
          <!-- card3 -->
          <div class="card radius-10 w-100">
            <div class="card-body">
              <p>來訪停留時間分析</p>
              <h2 class="text-center fw-light">5.03</h2>
              <div id="chart3"></div>
            </div>
            <div class="card-footer bg-transparent border-top">
              <div class="d-flex align-items-center justify-content-between">
                <div class="text-center">
                  <p class="font-13 mb-0">與上個月相較</p>
                  <p class="mb-0">-1.6%</p>
                </div>
                <div class="text-center">
                  <p class="font-13 mb-0">與去年同月相較</p>
                  <p class="mb-0">24.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- card4 -->
        <div class="col-12 col-lg-3 d-flex">
          <div class="card radius-10 w-100">
            <div class="card-body">
              <p>用戶分析</p>
              <h2 class="text-center fw-light">1,120</h2>
              <div id="chart4"></div>
            </div>
          </div>
        </div>
        <!-- card5 -->
        <div class="col-12 col-lg-6 d-flex">
          <div class="card radius-10 w-100">
            <div class="card-body">
              <p>點擊區塊分析</p>
              <div
                class="d-lg-flex align-items-center justify-content-center gap-4"
              >
                <div id="chart5"></div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <i class="bi bi-circle-fill text-danger me-1"></i
                    >會員點擊次數 :<span class="me-1">546</span>
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-circle-fill text-purple me-1"></i
                    >非會員點擊次數 :<span class="me-1">985</span>
                  </li>
                  <li class="list-group-item list-group-item-secondary">
                    總共:1,254
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end row-->
      <!-- <div class="row mb-4">
        <div class="col-12 col-xl-6 d-flex">
          <div class="card radius-10 w-100">
            <div class="card-body">
              <p>AGE GROUP</p>
              <div id="chart6"></div>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-6 d-flex">
          <div class="card radius-10 w-100">
            <div class="card-body">
              <p>CONVERSION RATE</p>
              <div id="chart7"></div>
            </div>
          </div>
        </div>
      </div> -->
      <!--end row-->
      <div class="row">
        <div class="col-12 col-xl-4 d-flex mb-4">
          <!-- card6 -->
          <div class="card radius-10 w-100 overflow-hidden">
            <div class="card-body">
              <p>熱門都市</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="d-flex align-items-center gap-2">
                    <div><i class="flag-icon flag-icon-us"></i></div>
                    <div>台北市</div>
                    <div class="ms-auto">289</div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="d-flex align-items-center gap-2">
                    <div><i class="flag-icon flag-icon-au"></i></div>
                    <div>新北市</div>
                    <div class="ms-auto">562</div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="d-flex align-items-center gap-2">
                    <div><i class="flag-icon flag-icon-in"></i></div>
                    <div>台中市</div>
                    <div class="ms-auto">354</div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="d-flex align-items-center gap-2">
                    <div><i class="flag-icon flag-icon-ca"></i></div>
                    <div>台南市</div>
                    <div class="ms-auto">147</div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="d-flex align-items-center gap-2">
                    <div><i class="flag-icon flag-icon-ad"></i></div>
                    <div>高雄市</div>
                    <div class="ms-auto">652</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-4 d-flex mb-4">
          <!-- card7 -->
          <div class="card radius-10 w-100">
            <div class="card-body">
              <p>各分類每月差異分析</p>
              <div id="chart7"></div>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-4 d-flex mb-4">
          <!-- card8 -->
          <div class="card radius-10 w-100">
            <div class="card-body">
              <p>用戶使用裝置分析</p>
              <div class="mt-5" id="chart8"></div>
            </div>
              
          </div>
          </div>
        <div id="chart" class="w-100 mt-2"></div>
      </div>
      <!--end row-->
    </main>
  </div>
  <!-- Back to Top -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"
    ><i class="fa-solid fa-arrow-up"></i>
  </a>
</template>

<script setup>
google.charts.load("current", { packages: ["corechart"] });
google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5);
google.charts.setOnLoadCallback(drawChart7);
google.charts.setOnLoadCallback(drawChart8);

// chart1
function drawChart1() {
  const data = google.visualization.arrayToDataTable([
    ["Year", "流量"],
    ["2004", 1000],
    ["2005", 1170],
    ["2006", 660],
    ["2007", 1030],
  ]);

  const options = {
    title: "流量圖",
    curveType: "function",
    legend: { position: "bottom" },
  };

  const chart = new google.visualization.LineChart(
    document.getElementById("chart1")
  );

  function resizeChart() {
    chart.draw(data, options);
  }

  window.addEventListener("resize", resizeChart);
  resizeChart();
}

// chart2
function drawChart2() {
  const data = google.visualization.arrayToDataTable([
    ["月", "銷售額"],
    ["1", 1000],
    ["2", 1170],
    ["3", 660],
    ["4", 1030],
    ["5", 1000],
    ["6", 1170],
    ["7", 660],
    ["8", 1030],
    ["9", 1000],
    ["10", 1170],
    ["11", 660],
    ["12", 1030],
  ]);

  const options = {
    chart: {
      title: "銷售趨勢圖",
      // bonus 不同區域銷售數據
      subtitle: "",
    },
    bars: "vertical", // Required for Material Bar Charts.
    isStacked: true,
  };

  const chart = new google.charts.Bar(document.getElementById("chart2"));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

// chart3
function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ]);

  var options = {
    title: "各分類評分平均與分析",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
  };

  var chart = new google.visualization.AreaChart(
    document.getElementById("chart3")
  );
  chart.draw(data, options);
}

// chart4
function drawChart4() {
  var data = google.visualization.arrayToDataTable([
    ["Month", "用戶", "非用戶"],
    ["6", 1000, 400],
    ["7", 1170, 460],
    ["8", 660, 1120],
    ["9", 1030, 540],
  ]);

  var options = {
    title: "用戶與非用戶來訪次數差異圖",
    hAxis: { title: "Month", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
  };

  var chart = new google.visualization.AreaChart(
    document.getElementById("chart4")
  );
  chart.draw(data, options);
}

// chart5
function drawChart5() {
  var data = google.visualization.arrayToDataTable([
    ["區塊", "點擊次數"],
    ["主頁面", 11],
    ["交通產品頁面", 2],
    ["旅遊產品頁面", 2],
    ["樂園門票產品頁面", 2],
  ]);

  var options = {
    title: "熱力圖/月",
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("chart5")
  );
  chart.draw(data, options);
}

// chart7
function drawChart7() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ]);

  var options = {
    title: "Monthly Coffee Production by Country",
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
    bars: "horizontal",
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("chart7")
  );
  chart.draw(data, options);
}

// chart8
function drawChart8() {
  var data = google.visualization.arrayToDataTable([
    ["裝置", "來訪次數"],
    ["桌面電腦", 11],
    ["平板電腦", 2],
    ["手機", 2],
  ]);

  var options = {
    title: "裝置分布圖",
    is3D: true,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("chart8")
  );
  chart.draw(data, options);
}

google.charts.load("current", {
  packages: ["geochart"],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
  ]);

  var options = {};

  var chart = new google.visualization.GeoChart(
    document.getElementById("chart")
  );

  chart.draw(data, options);
}
</script>

<style scoped>
.card-body {
  /* width: 100%;
  height: 100px;
  padding-bottom: 56.25%; */
  position: relative;
}
.chart {
  /* position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%; */
  min-height: 100px;
}
</style>
