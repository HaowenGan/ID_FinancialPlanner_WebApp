//--------------------------------------Read More Functions-----------------------------------------
function readMore1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var readMoreButton = document.getElementById("readMore1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMoreButton.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    readMoreButton.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function readMore2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var readMoreButton = document.getElementById("readMore2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMoreButton.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    readMoreButton.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function readMore3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var readMoreButton = document.getElementById("readMore3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMoreButton.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    readMoreButton.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function readMore4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var readMoreButton = document.getElementById("readMore4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMoreButton.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    readMoreButton.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function readMore5() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var readMoreButton = document.getElementById("readMore5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMoreButton.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    readMoreButton.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function readMore6() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var readMoreButton = document.getElementById("readMore6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMoreButton.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    readMoreButton.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

//-----------------------------------Sticky Nav Bar-------------------------------------------------

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  window.onscroll = function() {myFunctio2()};
  
  var navbar = document.getElementById("myTopnav");
  var sticky = navbar.offsetTop;
  
  function myFunctio2() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }


//------------------------------------Budget Sheet--------------------------------------------------

function incomesTotal() {
    var income1 = Number(document.getElementById("income1").value);
    var income2 = Number(document.getElementById("income2").value);
    var incomes = income1 + income2;
    document.getElementById("incomes").value = incomes;
    return incomes;
}
function needsTotal() {
    var need1 = Number(document.getElementById("need1").value);
    var need2 = Number(document.getElementById("need2").value);
    var need3 = Number(document.getElementById("need3").value);
    var need4 = Number(document.getElementById("need4").value);
    var need5 = Number(document.getElementById("need5").value);
    var need6 = Number(document.getElementById("need6").value);
    var need7 = Number(document.getElementById("need7").value);
    var need8 = Number(document.getElementById("need8").value);
    var need9 = Number(document.getElementById("need9").value);
    var needs = need1 + need2 + need3 + need4 + need5 + need6 + need7 + need8 + need9;
    document.getElementById("needs").value = needs;
    return needs;
}
function wantsTotal() {
    var want1 = Number(document.getElementById("want1").value);
    var want2 = Number(document.getElementById("want2").value);
    var want3 = Number(document.getElementById("want3").value);
    var want4 = Number(document.getElementById("want4").value);
    var want5 = Number(document.getElementById("want5").value);
    var want6 = Number(document.getElementById("want6").value);
    var want7 = Number(document.getElementById("want7").value);
    var want8 = Number(document.getElementById("want8").value);
    var wants = want1 + want2 + want3 + want4 + want5 + want6 + want7 + want8;
    document.getElementById("wants").value = wants;
    return wants;
}
function moneyLeft() {
    var incomes = incomesTotal();
    var needs = needsTotal();
    var wants = wantsTotal();
    var savings = incomes - needs - wants;
    if (savings < 0) {
        savings = 0;
    }
    document.getElementById("left").value = Number(savings);


    var data = google.visualization.arrayToDataTable([
    ['50/30/20 Rule', 'i'],
    ['Needs', Number(needs)],
    ['Wants', Number(wants)],
    ['Savings', Number(savings)]
    ]);
    var options = {'title':'Budgeting Chart', 'width':550, 'height':400};

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);


    if (Number(savings) < 0 || Number(needs + wants > incomes)) {
    document.getElementById("alert").innerHTML = "No more money from income for this month! You are using extra money!";
}
}






//-----------------------------------------API------------------------------------------------------

let url = "https://www.tablebuilder.singstat.gov.sg/publicfacing/rest/timeseries/tabledata/17057";




var percentData = [], nameData = [], yearLabel = [];

getData()

async function getData(){
    const response = await fetch(url)
    const barChartData = await response.json()

    console.log(barChartData);

    const year = barChartData.records.map( (x) => x.time)
    const percent = barChartData.records.map( (x) => x.value)
    const name = barChartData.records.map( (x) => x.variableName)

    const uniqueyear = year.map(year => year)
        .filter((value, index, self) => self.indexOf(value) === index)
        console.log(uniqueyear);

    const uniquename = name.map(name => name)
        .filter((value, index, self) => self.indexOf(value) === index)
        console.log(uniquename);

        
        
    percentData = percent;
    nameData = uniquename;
    yearLabel = uniqueyear;

    console.log(percentData);
    return yearLabel, nameData;
}



function drawBarChart() {
    document.getElementById("noChart").innerHTML = '<p id="noChart"></p>';
    document.querySelector("#chart-contain").innerHTML = '<canvas id="myChart" width="1000" height="700"></canvas>';
    const ctx = document.getElementById('myChart').getContext('2d');
    
    var searchYear = Number(document.getElementById("searchYear").value);
    var values = [];
    var barColors = ["blue", "pink","orange","brown","green","aquamarine", "maroon","navy","yellow","indigo","turqoise", "grey","cyan","black","purple","red"];

    if (searchYear == yearLabel[0]) {
        values = [10.2, 0.0, 23.6, 26.4, 7.3, 3.6, 5.8, 1.8, 2.9, 18.3, 17.5, 13.1, 12.3, 13.3, 6.1, 100];
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: nameData,
                datasets: [{
                    data: values,
                    backgroundColor: barColors,
                }]
            },
            options: {
                responsive : false,
                tooltips: {
                    mode : 'index'
                }
            }
        });
    }

    else if (searchYear == yearLabel[1]) {
        values = [10.5, 0.1, 24.2, 23.7, 7.7, 4.4, 3.9, 3.6, 3.5, 18.6, 18.2, 10.4, 12.5, 13.3, 6.1, 100]
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: nameData,
                datasets: [{
                    data: values,
                    backgroundColor: barColors,
                }]
            },
            options: {
                responsive : false,
                tooltips: {
                    mode : 'index'
                }
            }
        });
    }

    else if (searchYear == yearLabel[2]) {
        values = [11.8, 0.2, 24.2, 21.0, 9.2, 5.1, 3.3, 4.5, 4.5, 16.2, 18, 8.7, 11.7, 12.3, 5.7, 100];
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: nameData,
                datasets: [{
                    data: values,
                    backgroundColor: barColors
                }]
            },
            options: {
                responsive : false,
                tooltips: {
                    mode : 'index'
                }
            }
        });
    }

    else if (searchYear == yearLabel[3]) {
        values = [8.6, 0.7, 26.4, 21.4, 8.9, 5.3, 3.2, 4.7, 4.9, 15.8, 22.2, 8.1, 14.1, 13.4, 4.2, 100];
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: nameData,
                datasets: [{
                    data: values,
                    backgroundColor: barColors
                }]
            },
            options: {
                responsive : false,
                tooltips: {
                    mode : 'index'
                }
            }
        });
    }

    else if (searchYear == yearLabel[4]) {
        values = [6.9, 0.7, 30.1, 20.6, 11.4, 5.4, 2.7, 3.8, 4.5, 14.1, 25.5, 7.3, 18.1, 13.2, 4.6, 100];
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: nameData,
                datasets: [{
                    data: values,
                    backgroundColor: barColors
                }]
            },
            options: {
                responsive : false,
                tooltips: {
                    mode : 'index'
                }
            }
        });
    }

    else if (searchYear == yearLabel[5]) {
        values = [6.4, 1.2, 28.9, 20.3, 12.6, 5.7, 2.1, 4.1, 5.5, 13.2, 24.1, 6.6, 16.9, 13.7, 4.8, 100];
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: nameData,
                datasets: [{
                    data: values,
                    backgroundColor: barColors
                }]
            },
            options: {
                responsive : false,
                tooltips: {
                    mode : 'index'
                }
            }
        });
    }

    else {
        document.getElementById("noChart").innerHTML = "There is no data for this year. Please try another year."
    }
}
