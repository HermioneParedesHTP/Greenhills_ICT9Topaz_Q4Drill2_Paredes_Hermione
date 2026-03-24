function heatcheck() {

    // get values
    var temp = document.getElementById("value1").value;
    var humidity = document.getElementById("value2").value;

    temp = Number(temp);
    humidity = Number(humidity);

    // compute heat index
    var heatIndex = temp + (0.33 * humidity) - 4;

    var status = "";

    // conditions
    if (heatIndex <= 27) {
        status = "COMFORTABLE TEMPERATURE";
    } 
    else if (heatIndex <= 32) {
        status = "WARM TEMPERATURE";
    } 
    else if (heatIndex <= 37) {
        status = "HOT TEMPERATURE";
    } 
    else {
        status = "EXTREMELY HOT TEMPERATURE";
    }

    // result
    document.getElementById("display1").innerHTML =
        "Heat Index: " + heatIndex + "<br>Status: " + status;
}