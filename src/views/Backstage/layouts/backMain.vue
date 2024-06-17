<template>
  <div class="m-4">
    <div
      class="d-flex justify-content-between align-items-center flex-wrap grid-margin mb-2"
    >
      <!-- 輸出輸入按鈕start -->
      <div class="d-flex align-items-center flex-wrap text-nowrap ms-auto">
        <button
          type="button"
          class="btn btn-outline-primary btn-icon-text mb-md-0 bg-light"
          style="border: 0px"
          @click="exportChartAsPDF"
        >
          <i class="fa fa-download" aria-hidden="true"></i>
          下載PDF圖表
        </button>
      </div>
    </div>
    <!-- 輸出輸入按鈕end -->

    <main class="page-content"   ref="chartDiv">
      <div class="row">
        <!-- card1 -->
        <div class="col-12 col-lg-3 d-flex">
          <div class="card radius-10 w-100 mb-4">
            <div class="card-body">
              <p>本月網站流量</p>
              <h2 class="text-center fw-light">
                {{ chart1CalcSum }}
              </h2>
              <div id="chart1" class="chart"></div>
            </div>
            <div class="card-footer bg-transparent border-top">
              <div class="d-flex align-items-center justify-content-between">
                <div class="text-center">
                  <p class="font-13 mb-0">與上個月相較</p>
                  <p class="mb-0">{{ chart1VsLastMonth() }}</p>
                </div>
                <div class="text-center">
                  <p class="font-13 mb-0">與去年同月相較</p>
                  <p class="mb-0">{{ chart1VsLastYear() }}</p>
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
              <p>訪問頁面平均</p>
              <h2 class="text-center fw-light">{{ chart3GetThisMonthPage }}</h2>
              <div id="chart3"></div>
            </div>
            <div class="card-footer bg-transparent border-top">
              <div class="d-flex align-items-center justify-content-between">
                <div class="text-center">
                  <p class="font-13 mb-0">與上個月相較</p>
                  <p class="mb-0">{{ chart3VsLastMonth }}</p>
                </div>
                <div class="text-center">
                  <p class="font-13 mb-0">與去年同月相較</p>
                  <p class="mb-0">{{ chart3VsLastYear }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- card4 -->
        <div class="col-12 col-lg-3 d-flex">
          <div class="card radius-10 w-100">
            <div class="card-body">
              <p>平均停留分鐘數</p>
              <h2 class="text-center fw-light">{{ chart4GetThisMonthTime }}</h2>
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
                <div id="chart5" class="w-100 mt-4"></div>
              </div>
            </div>
            <div class="card-footer bg-transparent border-top">
              <div class="d-flex align-items-center justify-content-between">
                <div class="text-center">
                  <p class="font-13 mb-0">交通月點擊量</p>
                  <p class="mb-0">{{ chart5Traffic }}</p>
                </div>
                <div class="text-center">
                  <p class="font-13 mb-0">旅遊月點擊量</p>
                  <p class="mb-0">{{ chart5Hotel }}</p>
                </div>
                <div class="text-center">
                  <p class="font-13 mb-0">樂園門票月點擊量</p>
                  <p class="mb-0">{{ chart5TouristSpot }}</p>
                </div>
                <!-- <div class="text-center">
                  <p class="font-13 mb-0">總點擊量</p>
                  <p class="mb-0">{{ chart3VsLastMonth }}</p>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
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
  <Spinner></Spinner>
</template>

<script setup>
import Spinner from '@/views/Backstage/layouts/components/spinner.vue';
import { onBeforeMount, ref } from "vue";
import axios from "axios";
import html2canvas from "html2canvas";

onBeforeMount(() => {
  fetchChart1Data();
  fetchChart3Data();
  fetchChart4Data();
  fetchChart5Data();
  fetchChart7Data();
  fetchChart8Data();
});
google.charts.load("current", { packages: ["corechart"] });
google.charts.load("current", { packages: ["bar"] });

google.charts.setOnLoadCallback(drawChart2);

const chart1Data = ref([]);
const chart3Data = ref([["Month", "Pages"]]);
const chart4Data = ref([["Month", "minute"]]);
const chart5Data = ref([["section", "click"]]);
const chart7Data = ref([["language", "count", { role: "style" }]]);
const chart8Data = ref([["裝置", "統計"]]);

const today = new Date();
const thisMonth = today.getMonth() + 1;
const yearThisMonth =
  today.getFullYear() + "" + (thisMonth < 10 ? "0" + thisMonth : thisMonth); // 這個月YYYYMM
const yearBeforeMonth =
  today.getFullYear() +
  "" +
  (thisMonth - 1 < 10 ? "0" + (thisMonth - 1) : thisMonth - 1); // 上個月YYYYMM
const beforeYearSameMonth =
  today.getFullYear() - 1 + "" + (thisMonth < 10 ? "0" + thisMonth : thisMonth); // 去年這個月YYYYMM
const chart1CalcSum = ref("");
const chart3GetThisMonthPage = ref("");
const chart3VsLastMonth = ref("資料不足");
const chart3VsLastYear = ref("資料不足");
const chart4GetThisMonthTime = ref("");
console.log(yearBeforeMonth);
console.log(beforeYearSameMonth);

const chartDiv = ref(null);

// ==========================chart1 start=====================================
const fetchChart1Data = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/getChart1Data`);
    // console.log(response.data);
    const IntegerArray = response.data.map((row) =>
      row.map((str) => parseInt(str, 10))
    );
    chart1Data.value = IntegerArray;
    chart1Data.value.unshift(["Month", "流量"]);
    chart1CalcSum.value = chart1Data.value[chart1Data.value.length - 1][1];
    // console.log(chart1Data.value);
    // console.log(chart1CalcSum.value);
    google.charts.setOnLoadCallback(drawChart1);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
  }
};

const chart1VsLastMonth = () => {
  if (chart1Data[chart1Data.length - 1]) {
    return (
      Math.round(
        (100 *
          (chart1Data[chart1Data.length - 1][1] -
            chart1Data[chart1Data.length - 1 - 1][1])) /
          chart1Data[chart1Data.length - 1 - 1][1]
      ) + "%"
    );
  } else {
    return "資料不足";
  }
};

const chart1VsLastYear = () => {
  if (chart1Data[chart1Data.length - 1 - 12]) {
    return (
      Math.round(
        (100 *
          (chart1Data[chart1Data.length - 1][1] -
            chart1Data[chart1Data.length - 1 - 12][1])) /
          chart1Data[chart1Data.length - 1 - 12][1]
      ) + "%"
    );
  } else {
    return "資料不足";
  }
};

function drawChart1() {
  const data = google.visualization.arrayToDataTable(chart1Data.value);

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

const exportChartAsPDF = async () => {
  const canvas = await html2canvas(chartDiv.value, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  console.log("start request to pdf");
  try {
    const response = await axios.post(
      "http://localhost:8080/exportChartAsPDF",
      {
        imgData: imgData,
      },
      {
        responseType: "blob", // 確保獲取二進制數據
      }
    );

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "chart.pdf");
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.error("Error exporting chart:", error);
  }
};
// ==========================chart1 end=====================================

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

// ==========================chart3 start=====================================
const chart3GetBeforeMonthPage = null;
const chart3GetSameMonthPage = null;

const fetchChart3Data = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/getChart3Data`);
    for (let data of response.data) {
      let temp = [];
      temp.push(data.month);
      temp.push(parseFloat(data.data1));
      chart3Data.value.push(temp);
      if (data.month == yearThisMonth) {
        chart3GetThisMonthPage.value = parseFloat(data.data1);
        chart3GetThisMonthPage.value = parseFloat(
          chart3GetThisMonthPage.value.toFixed(2)
        );
      }
      if (data.month == yearBeforeMonth) {
        chart3GetBeforeMonthPage.value = data.data1;
        chart3VsLastMonth.value =
          100 *
            ((chart3GetThisMonthPage.value - chart3GetBeforeMonthPage.value) /
              chart3GetBeforeMonthPage.value) +
          "%";
      }
      if (data.month == beforeYearSameMonth) {
        chart3GetSameMonthPage.value = data.data1;
        chart3VsLastYear.value =
          100 *
            ((chart3GetThisMonthPage.value - chart3GetSameMonthPage.value) /
              chart3GetSameMonthPage.value) +
          "%";
      }
    }
    // console.log(chart3Data.value);
    // console.log(chart3GetThisMonthPage.value);
    google.charts.setOnLoadCallback(drawChart3);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
  }
};

function drawChart3() {
  var data = google.visualization.arrayToDataTable(chart3Data.value);

  var options = {
    title: "每月訪問平均頁面數",
    hAxis: { title: "Month", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
  };

  var chart = new google.visualization.AreaChart(
    document.getElementById("chart3")
  );
  chart.draw(data, options);
}
// ==========================chart3 end=====================================

// ==========================chart4 start=====================================
const fetchChart4Data = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/getChart4Data`);
    // console.log(response.data);
    for (let data of response.data) {
      let temp = [];
      if (data.month == yearThisMonth) {
        chart4GetThisMonthTime.value = parseFloat(data.data1);
        chart4GetThisMonthTime.value = parseFloat(
          chart4GetThisMonthTime.value.toFixed(2)
        );
      }
      // console.log(chart4GetThisMonthTime.value)
      temp.push(data.month);
      temp.push(parseFloat(data.data1));
      // console.log(temp);
      chart4Data.value.push(temp);
    }
    // console.log(chart4Data.value);
    google.charts.setOnLoadCallback(drawChart4);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
  }
};
function drawChart4() {
  var data = google.visualization.arrayToDataTable(chart4Data.value);

  var options = {
    title: "",
    hAxis: { title: "Month", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
  };

  var chart = new google.visualization.AreaChart(
    document.getElementById("chart4")
  );
  chart.draw(data, options);
}
// ==========================chart4 end=====================================

// ==========================chart5 start=====================================
const chart5Traffic = ref("");
const chart5Hotel = ref("");
const chart5TouristSpot = ref("");

const fetchChart5Data = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/getChart5Data`);
    // console.log(response.data);
    for (let data of response.data) {
      let temp = [];
      // if (data.month == yearThisMonth) {
      //   chart4GetThisMonthTime.value = data.data1;
      // }
      // console.log(chart4GetThisMonthTime.value)
      temp.push("交通產品");
      temp.push(parseFloat(data.data1));
      chart5Data.value.push(temp);
      temp = [];
      temp.push("旅遊產品");
      temp.push(parseFloat(data.data2));
      chart5Data.value.push(temp);
      temp = [];
      temp.push("樂園門票產品");
      temp.push(parseFloat(data.data3));
      chart5Data.value.push(temp);
      temp = [];
      chart5Traffic.value = data.data1;
      chart5Hotel.value = data.data2;
      chart5TouristSpot.value = data.data3;
    }
    // console.log(chart5Data.value);
    google.charts.setOnLoadCallback(drawChart5);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
  }
};

function drawChart5() {
  var data = google.visualization.arrayToDataTable(chart5Data.value);
  var options = {
    title: "熱力圖/月",
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("chart5")
  );
  chart.draw(data, options);
}
// ==========================chart5 end=====================================

// ==========================chart7 start=====================================
let color = ["#b87333", "silver", "color: #e5e4e2", "gold"];
const fetchChart7Data = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/getChart7Data`);
    console.log(response.data);
    let temp;
    for (let data of response.data) {
      temp = [];
      temp.push(data[0]);
      temp.push(parseInt(data[1]));
      temp.push(color[Math.floor(Math.random() * 5)]);
      chart7Data.value.push(temp);
    }
    console.log(chart7Data.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    google.charts.setOnLoadCallback(drawChart7);
  }
};

function drawChart7() {
  var data = google.visualization.arrayToDataTable(chart7Data.value);

  var options = {
    title: "偏好語言長條圖",
    vAxis: { title: "Language" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
    bars: "horizontal",
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("chart7")
  );
  chart.draw(data, options);
}

// ==========================chart7 end=====================================

// ==========================chart8 start=====================================
const fetchChart8Data = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/getChart8Data`);
    // console.log(response.data[0]);
    let arr = response.data[0].split(",");
    let temp;
    temp = [];
    temp.push("桌上裝置");
    temp.push(parseFloat(arr[1]));
    chart8Data.value.push(temp);
    temp = [];
    temp.push("行動裝置");
    temp.push(parseFloat(arr[3]));
    chart8Data.value.push(temp);
    // console.log(temp);
    temp = [];
    temp.push("其他");
    temp.push(parseFloat(arr[5]));
    chart8Data.value.push(temp);
    // console.log(chart8Data.value);
    google.charts.setOnLoadCallback(drawChart8);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
  }
};

function drawChart8() {
  var data = google.visualization.arrayToDataTable(chart8Data.value);

  var options = {
    title: "裝置分布圖",
    is3D: true,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("chart8")
  );
  chart.draw(data, options);
}
// ==========================chart8 end=====================================

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
