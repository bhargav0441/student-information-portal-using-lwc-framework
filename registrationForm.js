import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import Stud_Object from '@salesforce/schema/Registration__c';
import Stud_Name from '@salesforce/schema/Registration__c.Name';
import Stud_FullName from '@salesforce/schema/Registration__c.Full_Name__c';
import Stud_Email from '@salesforce/schema/Registration__c.Email__c';
import Stud_Phone from '@salesforce/schema/Registration__c.Phone__c';
import Stud_Address from '@salesforce/schema/Registration__c.Address__c';
import Stud_Education from '@salesforce/schema/Registration__c.Educational_Qualification__c';
import Stud_Institute from '@salesforce/schema/Registration__c.Institution__c';
import Stud_CompletionYear from '@salesforce/schema/Registration__c.Completion_Year__c';
import Stud_WExperience from '@salesforce/schema/Registration__c.Work_Experience__c';
import Stud_Employer from '@salesforce/schema/Registration__c.Employer__c';
import Stud_TExperience from '@salesforce/schema/Registration__c.Tech_Experience__c';
import Stud_IntCourse from '@salesforce/schema/Registration__c.Interested_Courses__c';
import Stud_Mode from '@salesforce/schema/Registration__c.Preferred_Mode__c';
import Stud_Timing from '@salesforce/schema/Registration__c.Batch_Timing__c';
import Stud_Option from '@salesforce/schema/Registration__c.Payment_Option__c';
import Stud_Comments from '@salesforce/schema/Registration__c.Comments__c';

export default class RegistrationForm extends LightningElement {

    objectApiName = Stud_Object;
    fields = [Stud_Name, Stud_FullName, Stud_Email, Stud_Phone, Stud_Address, Stud_Education, Stud_Institute, Stud_CompletionYear,
            
            Stud_WExperience, Stud_Employer, Stud_TExperience, Stud_IntCourse, Stud_Mode, Stud_Timing, Stud_Option, Stud_Comments];

    handleForm(event){
    const showToast = new ShowToastEvent({
        title : "Enrollement Succesfull", 
        message : "Student Id: " + event.detail.id ,
        variant : "Success"
    });
    this.dispatchEvent(showToast);
    }
}