function convertTemparature(){
    const inputTemparature = parseFloat(document.getElementById("num").value);
    const unit = document.getElementById("unit").value

    let convertedTemparature;

    if (unit == 'Celcius') {
        convertedTemparature = (inputTemparature * 9/5) + 32;
        document.getElementById("result").textContent = `${inputTemparature} degrees Celcius = ${convertedTemparature} degrees Fahrenheit` 
    }
    else if (unit=== 'Fahrenheit') {
        convertedTemparature = (inputTemparature - 32) * 5/9;
        document.getElementById("result").textContent = `${inputTemparature} degrees Fahrenheit = ${convertedTemparature} degrees Celcius` 
    }
    else {
        document.getElementById("result").textContent = 'Please select a valid unit';
    }
}