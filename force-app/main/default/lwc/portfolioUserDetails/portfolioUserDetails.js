import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {

    @api recordId
    @api objectApiName
    @api resumeUrl

    downloadResume(){
        window.open(this.resumeUrl, "_blank")
    }

    //https://wise.com/imaginary-v2/images/bd791441603b8beaf14cd9e119133303-Simple-resume-template.pdf
}