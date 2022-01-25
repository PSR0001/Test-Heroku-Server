const URL = "/";

// Socket.io Code-->
const socket = io(URL);

// client-side
 socket.on("connection", (data) => {
     console.log(socket.id); // x8WIv7-mJelg7on_ALbx
     console.log(data);

 });

//  let Data_Distance;
 //Chart- Data
 socket.on("Chart-Data", (data) => {
    //  console.log(data.distance);
    //  Data_Distance=data;
    // console.log(Data_Distance)
    pushValueChart(data)
 });
 
 socket.on("disconnect", () => {
     console.log('Socket Disconnected ... ');
 });


/*---Chart JS code---*/

    const ctx = document.getElementById('chart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['RS'],
        datasets: [{  //index[0]
          label: 'Distance',
          data: [10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
          spanGaps:true,//in case of empty Data
          showLine:true
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
    let time=0;

// pushing the incoming Value
  function pushValueChart(data){
      // console.log(myChart.data.datasets[0].data)
      if(data.distance <=500){
      myChart.data.datasets[0].data.push(data.distance)
      }
      // console.log(myChart.data.datasets[0].data)
      time+=2
      myChart.data.labels.push(time)
      

      myChart.update();
  }
  


  const button = document.getElementById('button')

  button.addEventListener('click',()=>{
      darkLightToggle();
  })
  
  // dark and 
  function darkLightToggle() {
      console.log('click me!')
      var element = document.body;
      element.classList.toggle("dark-mode");
    }
 