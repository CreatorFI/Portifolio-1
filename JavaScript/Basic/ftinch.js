

function convert(inch){
    feet = inch/12
    return feet
}
var measurements=[120,48,96]

for (i=0; i<=measurements.length; i++){
    var element=measurements[i]
    console.log(convert(measurements[0,1,2]))
}
