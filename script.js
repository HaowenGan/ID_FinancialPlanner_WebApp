let url = "https://www.tablebuilder.singstat.gov.sg/publicfacing/rest/timeseries/tabledata/17057";


var percentData = [], nameData = [], yearLabel = [];

getData()

async function getData(){
    const response = await fetch(url)
    const barChartData = await response.json()

    console.log(barChartData)

    const year = barChartData.records.map( (x) => x.time)
    const percent = barChartData.records.map( (x) => x.value)
    const name = barChartData.records.map( (x) => x.variableName)

    const uniqueyear = year.map(year => year)
        .filter((value, index, self) => self.indexOf(value) === index)
         console.log(uniqueyear)

    const uniquename = name.map(name => name)
        .filter((value, index, self) => self.indexOf(value) === index)
        console.log(uniquename)

        
        
    percentData = percent
    nameData = uniquename
    yearLabel = uniqueyear
        
   
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [yearLabel[0],yearLabel[1],yearLabel[2],yearLabel[3],yearLabel[4],yearLabel[5]],
            datasets: [{
                //Recreation and culture
                label: [uniquename[0]],
                data:[10.2,10.5,11.8,8.6,6.9,6.4],
                backgroundColor: 'blue',
                borderColor : 'rgb(255,99,132)'
            },

            {
                //Accomodation services
                label: [uniquename[1]],
                data:[0.0,0.1,0.2,0.7,0.7,1.2],
                backgroundColor: 'pink',
                borderColor : 'rgb(255,99,132)'
            },
            {
                //Housing and related expenditure
                label: [uniquename[2]],
                data:[23.6,24.2,24.2,26.4,30.1,28.9],
                backgroundColor: 'orange',
                borderColor : 'rgb(255,99,132)'
            },
            {
                //Food
                label: [uniquename[3]],
                data:[26.4,23.7,21.0,21.4,20.6,20.3],
                backgroundColor: 'brown',
                borderColor : 'rgb(255,99,132)'
            },
            {
                //Others
                label: [uniquename[4]],
                data:[7.3,7.7,9.2,8.9,11.4,12.6],
                backgroundColor: 'green',
                borderColor : 'rgb(255,99,132)'
            },
            {
                //Educational Services
                label: [uniquename[5]],
                data:[3.6,4.4,5.1,5.3,5.4,5.7],
                backgroundColor: 'aquamarine',
                borderColor : 'rgb(255,99,132)'
            },
            {
                //Clothing and Footware
                label: [uniquename[6]],
                data:[5.8,3.9,3.3,3.2,2.7,2.1],
                backgroundColor: 'maroon',
                borderColor : 'rgb(255,99,132)'
            },
            {
                //Communication
                label: [uniquename[7]],
                data:[1.8,3.6,4.5,4.7,3.8,4.1],
                backgroundColor: 'navy',
                borderColor : 'rgb(255,99,132)'
            },
            {
                //Health
                label: [uniquename[8]],
                data:[2.9,3.5,4.5,4.9,4.5,5.5],
                backgroundColor: 'yellow',
                borderColor : 'rgb(255,99,132)'
            },
            {
                //Transport
                label: [uniquename[9]],
                data:[18.3,18.6,16.2,15.8,14.1,13.2],
                backgroundColor: 'indigo',
                borderColor : 'rgb(255,99,132)'
            },
            {
                //Housing and Utilities
                label: [uniquename[10]],
                data:[17.5,18.2,18,5,22.2,25.5,24.1],
                backgroundColor: 'turqoise',
                borderColor : 'rgb(255,99,132)'
            },
            {
                //Food and non-alcoholic
                label: [uniquename[11]],
                data:[13.1,10.4,8.7,8.1,7.3,6.6],
                backgroundColor: 'grey',
                borderColor : 'rgb(255,99,132)'
            },
            {
                //Imputed Rental Of owner occupied accomodation
                label: [uniquename[12]],
                data:[12.3,12.5,11.7,14.1,18.1,16.9],
                backgroundColor: 'cyan',
                borderColor : 'rgb(255,99,132)'
            },
            {
                //Food Serving Services
                label: [uniquename[13]],
                data:[13.3,13.3,12.3,13.4,13.2,13.7],
                backgroundColor: 'black',
                borderColor : 'rgb(255,99,132)'
            },
            {
                //Furnishings, Household Equipment And Routine Household Maintenance
                label: [uniquename[14]],
                data:[6.1,6.1,5.7,4.2,4.6,4.8],
                backgroundColor: 'purple',
                borderColor : 'rgb(255,99,132)'
            },
            {
                //Total
                label: [uniquename[15]],
                data:[100,100,100,100,100,100],
                backgroundColor: 'red',
                borderColor : 'rgb(255,99,132)'
            }
        ]
        },
        options: {
            responsive : false,

            tooltips: {
                mode : 'index'
            },

            scales: {
                        x: {
                            type: 'time',
                            time: 
                            {
                                unit: 'year'
                            }
                        
                        }

                
                    }
        }
        
        
    });
}






