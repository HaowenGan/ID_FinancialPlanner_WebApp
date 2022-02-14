let url = "https://www.tablebuilder.singstat.gov.sg/publicfacing/rest/timeseries/tabledata/17057"

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));

