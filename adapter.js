class FahrenheitSensor {
    getTemperature() {
        return 100; // Fahrenheit
    }
}

class CelsiusAdapter {
    constructor(fahrenheitSensor) {
        this.fahrenheitSensor = fahrenheitSensor;
    }

    getTemperature() {
        const fahrenheit = this.fahrenheitSensor.getTemperature();
        return ((fahrenheit - 32) * 5) / 9;
    }
}

const sensorFahrenheit = new FahrenheitSensor();
const sensorCelsius = new CelsiusAdapter(sensorFahrenheit);
console.log(sensorCelsius.getTemperature());