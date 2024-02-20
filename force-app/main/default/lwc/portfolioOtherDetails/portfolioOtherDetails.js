import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SUPERBADGE_FIELD from '@salesforce/schema/Portfolio__c.Superbadges__c';
import AWARDS_FIELD from '@salesforce/schema/Portfolio__c.Awards__c'
import LANGUAGES_FIELD from '@salesforce/schema/Portfolio__c.Languages__c'
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
export default class PortfolioOtherDetails extends LightningElement {
    awardsList = []
    superbadgesList = []
    languagesList = []
    awardIcon = `${PortfolioAssets}/PortfolioAssets/trophy.png`
    badgeIcon = `${PortfolioAssets}/PortfolioAssets/badge.png`
    languageIcon = `${PortfolioAssets}/PortfolioAssets/language.png`

    @api recordId
    @wire(getRecord,{
        recordId:'$recordId',
        fields: [SUPERBADGE_FIELD, AWARDS_FIELD, LANGUAGES_FIELD]
    })otherFieldsHandler({data, error}){
        if(data){
            console.log("otherFieldsHandler Data", JSON.stringify(data))
            this.formatData(data)
        }
        if(error){
            console.error("otherFieldsHandler Data", error)
        }
    }

    formatData(data){
        const{Awards__c, Languages__c, Superbadges__c} = data.fields
        this.awardsList = Awards__c ? Awards__c.value.split(','):[]
        this.superbadgesList = Superbadges__c ? Superbadges__c.value.split(';'):[]
        this.languagesList = Languages__c ? Languages__c.value.split(','):[]
    }

}