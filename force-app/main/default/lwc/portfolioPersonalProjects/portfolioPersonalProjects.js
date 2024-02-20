import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
export default class PortfolioPersonalProjects extends LightningElement {
    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`


projects = [
    {
        "name":"BMI Calculator App",
        "img":this.BMICalculator,
        "link":"https://devpaul-dev-ed.develop.my.site.com/bmi-calculator"
    },
    {
        "name":"Weather App",
        "img":this.WeatherApp,
        "link":"https://devpaul-dev-ed.develop.my.site.com/weather-app"
    }
]

}