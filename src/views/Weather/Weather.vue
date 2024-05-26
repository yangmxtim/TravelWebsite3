<template>
    <div class="weather-bar">

      <div v-if="loading">Loading...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else >
        <div v-for="(startTime, index) in weatherData.startTimes" :key="index" class="weather-timebar">
           
                <div class="weather-timebar-time">{{ startTime }}</div>
                <div class="weather-timebar-time">{{ weatherData.endTimes[index] }}</div>
                <div class="weather-timebar-temp">{{ weatherData.temperatures[index] }} °C</div>

      </div>
        
       
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const weatherData = ref([]);
  const startTimes = ref();
  const endTimes = ref();
  const temperatures = ref();
  const loading = ref(true);
  const error = ref(null);
  const link_Kaoshiung = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-067?Authorization=CWA-D8A20CA7-D201-49E8-B2E6-7BF9E436DD20&format=JSON&locationName=%E9%B3%B3%E5%B1%B1%E5%8D%80&elementName=PoP12h,T"
  const link_Taipei = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWA-D8A20CA7-D201-49E8-B2E6-7BF9E436DD20&format=JSON&locationName=%E5%A4%A7%E5%AE%89%E5%8D%80&elementName=PoP12h,T"
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(link_Kaoshiung);
    //   weatherData.value = response.data;
    const times = response.data.records.locations[0].location[0].weatherElement[1].time;
    const startTime = [];
    const endTime = [];
    const temperature = [];
    times.forEach(time => {
        const st = time.startTime.slice(5,-3);
        const et = time.endTime.slice(5,-3);
        const tp = time.elementValue[0].value;
        
        startTime.push(st); //get month/date , hour:min
        endTime.push(et);
        temperature.push(tp); //get tempature
    })
    startTimes.value = startTime;
    temperatures.value = temperature;
    endTimes.value = endTime;
    weatherData.value ={"startTimes":startTime,"endTimes":endTime,"temperatures":temperature}
    console.log(weatherData.value);
    // console.log( startTimes.value);
    
    } catch (err) {
        console.log(err);
      error.value = 'Failed to fetch weather data';
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(() => {
    fetchWeatherData();
  });
  </script>
  
  <style scoped>
  .weather-bar {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    
    /* text-align: center; */
    /* justify-content: center; */
  }
  
  .weather-bar h3 {
    margin: 0 0 10px;
  }
  
  .weather-bar p {
    margin: 5px 0;
   
  }
  .weather-timebar{
    border: 1px solid black;

    
  }
  /* .weather-timebar-time{
    display: block;
    border: 1px solid black;
  }  */
  </style>
  