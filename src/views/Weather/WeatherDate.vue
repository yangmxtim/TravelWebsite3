<!-- 左邊sideBar -->
<template>
  <div class="card my-2 p-0 box-shadow">
    <div class="row ">
      <div class="col-md-12 my-2">
        <div class="button-container">
          <button @click="fetchWeatherData(link_Taipei)">台北</button>
          <button @click="fetchWeatherData(link_Xinpei)">新北</button>
          <button @click="fetchWeatherData(link_Taichung)">台中</button>
          <button @click="fetchWeatherData(link_Tainan)">台南</button>
          <button @click="fetchWeatherData(link_Kaoshiung)">高雄</button>
        </div>
        <div class="card-body weather-bar">
          <div>
            <div v-for="(startTime, index) in weatherData.startTimes" :key="index" class="weather-timebar">
              <div class="left col-8">
                <div class="weather-timebar-time">{{ startTime }}</div>
                <div class="weather-timebar-temp">平均溫度：{{ weatherData.temperatures[index] }} °C</div>
                <!-- <div class="weather-timebar-time">{{ weatherData.rainOdds[index] }} </div> -->
                <div v-if="parseInt(weatherData.rainOdds[index]) > 0">
                  <div class="weather-timebar-rain">降雨機率：{{ weatherData.rainOdds[index] }} %</div> 
                </div>
                <div v-else>
                  <div class="weather-timebar-rain">尚未預測</div> 
                </div>
              </div >
              <!-- icon -->
              <div class="right col-4">
                <div v-if="parseInt(weatherData.rainOdds[index]) == 0">
                  <div class=""><i class="fa-solid fa-sun"></i></div> 
                </div>
                <div v-else-if="parseInt(weatherData.rainOdds[index]) <= 30 && parseInt(weatherData.rainOdds[index]) > 0">
                  <div class=""><i class="fa-solid fa-cloud"></i></div> 
                </div>
                <div v-else-if="parseInt(weatherData.rainOdds[index]) <= 70 && parseInt(weatherData.rainOdds[index]) > 30">
                  <div class=""><i class="fa-solid fa-cloud-rain"></i></div> 
                </div>
                <div v-else-if="parseInt(weatherData.rainOdds[index]) > 70">
                  <div class=""><i class="fa-solid fa-cloud-showers-heavy"></i></div> 
                </div>
                <div v-else>
                  <div class=""><i class="fa-solid  fa-question"></i></div> 
                </div>
              </div>
              
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const weatherData = ref([]);
const startTimes = ref();
const temperatures = ref();
const loading = ref(true);
const error = ref(null);
const link_Taipei = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWA-D8A20CA7-D201-49E8-B2E6-7BF9E436DD20&format=JSON&locationName=%E5%A4%A7%E5%AE%89%E5%8D%80&elementName=PoP12h,T"
const link_Xinpei = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-071?Authorization=CWA-D8A20CA7-D201-49E8-B2E6-7BF9E436DD20&format=JSON&locationName=%E6%9D%BF%E6%A9%8B%E5%8D%80&elementName=PoP12h,T"
const link_Taichung = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-075?Authorization=CWA-D8A20CA7-D201-49E8-B2E6-7BF9E436DD20&format=JSON&locationName=%E8%A5%BF%E5%B1%AF%E5%8D%80&elementName=PoP12h,T"
const link_Tainan ="https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-079?Authorization=CWA-D8A20CA7-D201-49E8-B2E6-7BF9E436DD20&format=JSON&locationName=%E5%AE%89%E5%B9%B3%E5%8D%80&elementName=PoP12h,T"
const link_Kaoshiung = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-067?Authorization=CWA-D8A20CA7-D201-49E8-B2E6-7BF9E436DD20&format=JSON&locationName=%E9%B3%B3%E5%B1%B1%E5%8D%80&elementName=PoP12h,T"
const fetchWeatherData = async (place) => {
  try {
    const response = await axios.get(place);
    //   weatherData.value = response.data;
    const times = response.data.records.locations[0].location[0].weatherElement[1].time;
    const rainOdds = response.data.records.locations[0].location[0].weatherElement[0].time;
    const startTime = [];

    const temperature = [];
    const rain = [];
    times.forEach((time,index) => {
      if(index % 2 != 0  && index < 7){
        const st = time.startTime.slice(5, 10);

        const tp = time.elementValue[0].value;
  
        startTime.push(st); //get month/date , hour:min
        temperature.push(tp); //get tempature
      }
    })
    rainOdds.forEach((time ,index)=> {
      if(index % 2 != 0  && index < 7){
        const ro = time.elementValue[0].value;   //rain odds
        if (ro != " ") {
          // rain.push("降雨機率" + ro + "%");
          rain.push(ro);
        } else {
          rain.push("尚未預測")  //cuz the official didnt provide data
        }
      }
    })
    // console.log(rain);
    startTimes.value = startTime;
    temperatures.value = temperature;

    weatherData.value = { "startTimes": startTime,"temperatures": temperature, "rainOdds": rain }
    // console.log(weatherData.value);
    // console.log( startTimes.value);

  } catch (err) {
    console.log(err);
    error.value = 'Failed to fetch weather data';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchWeatherData(link_Taipei);
});
</script>

<style scoped>
.card{background-color: rgb(226, 103, 48, 5%);}
::-webkit-scrollbar {
    display: none;
}
.weather-bar {
  display: flex;
  padding: 20px;
  border-radius: 8px;
  max-height: 400px;
  /* overflow-y: scroll; */
	flex-direction:column;
  animation: 2s infinite alternate breathing-color;
}
.weather-bar h3 {
  margin: 0 0 10px;
}
.weather-bar p {
  margin: 5px 0;

}
.weather-timebar {
  max-height: 800px;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  padding-bottom: 1em;
} 

.weather-timebar-time, .weather-timebar-rain, .weather-timebar-temp{
  text-align: center;  margin: 0 0 5px 0;

}
.weather-timebar-time{text-align: center; font-size: 25px;}
.left{  
  border: 2px solid black;
  animation: 5s infinite alternate breathing-color;
}
.right{
  display: flex;
  justify-content: center;
  align-items: center; 
  padding-left: 1rem;
  /* border-left: 1px dashed black; */
}
/* icons */
.fa-sun{font-size: 60px; color: rgb(255, 215, 0, 80%);}
.fa-cloud{font-size: 50px; color: darkgray;}
.fa-cloud-rain{font-size: 60px; color: lightblue	;}
.fa-cloud-showers-heavy{font-size: 60px; color: rgb(24, 119, 242,80%);}
.fa-question{font-size: 50px; color: lightcoral;}

.button-container{
  border-bottom: 1.5px solid lightgray;
  padding-bottom: 10px;
}
.button-container button{
  width: 40px;
  border-radius: 50% ;
  padding: 0px 5px;
  border: 1px solid transparent;
  
}
.button-container button:hover{
  background-color: rgb(255, 180, 150);
}

@keyframes breathing-color{
  0%{
    color: lightgray;
    border-color: lightgray;
  }
  33%{
    color: grey;
    border-color: grey;

  }
  66%{
    color: darkgray;
    border-color: darkgray;
  }
  
  100%{
    color: black;
    border-color: black;
  }
}
</style>