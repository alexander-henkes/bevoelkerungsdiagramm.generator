<script type="text/javascript" src="https://geographie-im-unterricht.de/files/chart.js/chart.js"></script>
    
 <script>
// max values for male & female
    function maxMale(){
            var arr = document.querySelectorAll(".male");
            var emptyarray = [];
            arr.forEach((elem) => {
                emptyarray.push(elem.value);
            })
            var max = Math.max.apply(null, emptyarray);
            document.getElementById("highMale").innerHTML=max;
    }
    function maxFemale(){
            var arr = document.querySelectorAll(".female");
            var emptyarray = [];
            arr.forEach((elem) => {
                emptyarray.push(elem.value);
            })
            var max = Math.max.apply(null, emptyarray);
            document.getElementById("highFemale").innerHTML=max;
    }
// now create population chart
function create_populationChart() {
// general information
  let place = document.getElementById("place").value;
   let year = document.getElementById("year").value;
  let population = document.getElementById("population").value;
   let unit = document.getElementById("unit").value; 
// values for man
  let male1 = document.getElementById("male1").value * -1;
   let male2 = document.getElementById("male2").value * -1;
  let male3 = document.getElementById("male3").value * -1;
   let male4 = document.getElementById("male4").value * -1;
  let male5 = document.getElementById("male5").value * -1;
   let male6 = document.getElementById("male6").value * -1;
  let male7 = document.getElementById("male7").value * -1;
   let male8 = document.getElementById("male8").value * -1;
  let male9 = document.getElementById("male9").value * -1;
   let male10 = document.getElementById("male10").value * -1;
  let male11 = document.getElementById("male11").value * -1;
   let male12 = document.getElementById("male12").value * -1;
  let male13 = document.getElementById("male13").value * -1;
   let male14 = document.getElementById("male14").value * -1;
  let male15 = document.getElementById("male15").value * -1;
   let male16 = document.getElementById("male16").value * -1;
  let male17 = document.getElementById("male17").value * -1;
   let male18 = document.getElementById("male18").value * -1;
  let male19 = document.getElementById("male19").value * -1;
   let male20 = document.getElementById("male20").value * -1;
// values for man
  let female1 = document.getElementById("female1").value;
   let female2 = document.getElementById("female2").value;
  let female3 = document.getElementById("female3").value;
   let female4 = document.getElementById("female4").value;
  let female5 = document.getElementById("female5").value;
   let female6 = document.getElementById("female6").value;
  let female7 = document.getElementById("female7").value;
   let female8 = document.getElementById("female8").value;
  let female9 = document.getElementById("female9").value;
   let female10 = document.getElementById("female10").value;
  let female11 = document.getElementById("female11").value;
   let female12 = document.getElementById("female12").value;
  let female13 = document.getElementById("female13").value;
   let female14 = document.getElementById("female14").value;
  let female15 = document.getElementById("female15").value;
   let female16 = document.getElementById("female16").value;
  let female17 = document.getElementById("female17").value;
   let female18 = document.getElementById("female18").value;
  let female19 = document.getElementById("female19").value;
   let female20 = document.getElementById("female20").value;
// set high
  let maxMale = document.getElementById("highMale").value;
   let maxFemale = document.getElementById("highFemale").value;
  let maxMaleRounded = Math.ceil(maxMale / 5) * 5;
    let maxFemaleRounded = Math.ceil(maxFemale / 5) * 5;
    
    if(maxMaleRounded > maxFemaleRounded && maxMaleRounded < 100 || maxFemaleRounded < 100) {
        maxFemaleRounded = Math.ceil(maxMaleRounded / 50) * 50;
    }
    if(maxFemaleRounded > maxMaleRounded && maxMaleRounded < 100 || maxFemaleRounded < 100) {
        maxMaleRounded = Math.ceil(maxFemaleRounded / 50) * 50;
    }
    if(maxMaleRounded > maxFemaleRounded && maxMaleRounded > 100 || maxFemaleRounded > 100) {
        maxFemaleRounded = Math.ceil(maxMaleRounded / 100) * 100;
    }
    if(maxFemaleRounded > maxMaleRounded && maxMaleRounded < 100 || maxFemaleRounded > 100) {
        maxMaleRounded = Math.ceil(maxFemaleRounded / 100) * 100;
    }
// add white background
var whitebackgroundColor = {
  beforeDraw: function(chart, args, options) {
    const ctx = chart.ctx;
    const canvas = chart.canvas;
    const chartArea = chart.chartArea;
    //
    var background = canvas.getContext("2d").createLinearGradient(0, 250, 0, 0);
    background.addColorStop(0, "white");
    ctx.fillStyle = background;
    ctx.fillRect(0, 700,
      600 - 0, 0 - 700);
  }
};
// add background color of chart only
var backgroundColor = {
  beforeDraw: function(chart, args, options) {
    const ctx = chart.ctx;
    const canvas = chart.canvas;
    const chartArea = chart.chartArea;
    //
    var background = canvas.getContext("2d").createLinearGradient(0, 250, 0, 0);
    background.addColorStop(0, "rgba(255,250,207,255)");
    ctx.fillStyle = background;
    ctx.fillRect(chartArea.left, chartArea.bottom,
      chartArea.right - chartArea.left, chartArea.top - chartArea.bottom);
  }
};
// add city/place name
  setTimeout(function writeText(){
    var c = document.getElementById("populationChart");
    var ctx = c.getContext("2d");
    ctx.font = "15px Roboto";
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
    ctx.fillText([place], 55, 42);
    }, 1500);
// add year
  setTimeout(function writeText(){
    var c = document.getElementById("populationChart");
    var ctx = c.getContext("2d");
    ctx.font = "30px Roboto";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText([year], 270, 30);
    }, 1500);
// add total population
  setTimeout(function writeText(){
    var c = document.getElementById("populationChart");
    var ctx = c.getContext("2d");
    ctx.font = "15px Roboto";
    ctx.textAlign = "right";
    ctx.fillStyle = "black";
    ctx.fillText(["gesamt: ",'',[population]].join(''), 480, 42);
    }, 1500);
// add unit
  setTimeout(function writeText(){
    var c = document.getElementById("populationChart");
    var ctx = c.getContext("2d");
    ctx.font = "15px Roboto";
    ctx.textAlign = "right";
    ctx.fillStyle = "black";
    ctx.fillText(["in ",'',[unit]].join(''), 480, 447.5);
    }, 1500);
// add signature
  setTimeout(function writeText(){
    var c = document.getElementById("populationChart");
    var ctx = c.getContext("2d");
    ctx.font = "10px Roboto";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText("geographie-im-unterricht.de | Alexander Henkes", 250, 495);
    }, 1500);
    
// input values
  if (Chart.getChart(populationChart) === undefined) {
    let ctx = document.getElementById('populationChart').getContext('2d');
    populationChart = new Chart(ctx, {
      data: {
        labels: ['≥ 96', '91–95', '86–90', '81–85', '76–80', '71–75', '66–70', '61–65', '56–60', '51–55', '46–50', '41–45', '36–40', '31–35', '26–30', '21–25', '16–20', '11–15', '6–10', '≤ 5'],
        datasets: [{
          label: 'male',
          data: [male20, male19, male18, male17, male16, male15, male14, male13, male12, male11, male10, male9, male8, male7, male6, male5, male4, male3, male2, male1],
          backgroundColor: 'rgba(170,201,219,255)',
          borderColor: 'rgba(138,133,143,255)',
          barPercentage: 1.0,
          categoryPercentage: 1.07,
          borderWidth: 2,
        },{
          label: 'female',
          data: [female20, female19, female18, female17, female16, female15, female14, female13, female12, female11, female10, female9, female8, female7, female6, female5, female4, female3, female2, female1],
          backgroundColor: 'rgba(222,168,194,255)',
          borderColor: 'rgba(138,133,143,255)',
          barPercentage: 1.0,
          categoryPercentage: 1.07,
          borderWidth: 2,
        }]
      },
        
// config
    plugins: [whitebackgroundColor, backgroundColor],
    type: 'bar',
    options: {
      events: [],
      indexAxis: 'y',
    plugins: {
       legend: {
        display: false,
      }
    },
    aspectRatio: 1,
    layout: {
      padding: {
      top: 50,
      bottom: 20,
      }
    },
      scales: {
        x: {
            grid: {
            color: (ctx) => {
                const zeroLine = ctx.tick.value;
                const notzeroLine = ctx.tick.value;
                const gridColor = zeroLine === 0 ? '#666' : '#ccc' ;
                const gridColor2 = notzeroLine > -1000 ? '#666' : '#ccc' ;
                return gridColor, gridColor2;
                }
            }, 
          min: (maxMaleRounded * -1),
          max: maxFemaleRounded,
          stacked: true,
          ticks: {
                color: 'black',
                //font: {
                //size: 15
                //},
              callback: function(value, index, values) {
                return Math.abs(value);
                }
            }
        },
        y: {
           // stepsize: 50,
          // grid: {
          // color: 'black'
          // },
          //beginAtZero: true,
          stacked: true,
          ticks: {
                color: 'black',
                },
          }
      }
    },
 });
      
  } else {
    populationChart.destroy();
    create_populationChart();
  }
};
    
// create download
function download(){
    setTimeout(function() {
    const imageLink = document.createElement('a');
    const canvas = document.getElementById('populationChart');
    imageLink.download = 'bevoelkerungsdiagramm.png';
    imageLink.href = canvas.toDataURL('image/png', 1);
    // document.write('<img src=" '+imageLink+' "/>');
    imageLink.click();
    }, 500);
}

</script>