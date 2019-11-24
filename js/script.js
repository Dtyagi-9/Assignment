
 fetch("https://data.cityofchicago.org/resource/k7hf-8y75.json").then(function(response) {
   return response.json();
 }).then(function(data) {
 
     console.log(data[0]);
 
   var labels = [];
   var prop1 = [];
   var prop2 = [];
   var prop3 = [];
 
   for(i in data){
     if(data[i].station_name == "Foster Weather Station"){
     labels.push(data[i].measurement_timestamp_label);
     prop1.push(data[i].air_temperature);
     prop2.push(data[i].humidity);
     prop3.push(data[i].wind_speed);
     } 
   }
 
   
   //console.log(labeltest1.length+" "+prop11.length)
   
 
 
 var ctx = canvas.getContext('2d');
 var config = {
    type: 'line',
    data: {
       labels: labels,
       datasets: [{
          label: 'Air temperature',
          data: prop1,
          backgroundColor: 'rgba(0, 119, 204, 0.3)'
       },
       {
          label: 'Humidity',
          data: prop2,
          backgroundColor: 'rgba(200, 119, 104, 0.3)'
       },
       {
          label: 'Wind Speed',
          data: prop3,
          backgroundColor: 'rgba(255, 219, 204, 0.3)'
       }
       ]
    }
 };
 
 var chart = new Chart(ctx, config);
 
 
 
 }).catch(function(e) {
   console.log(e);
 });
 