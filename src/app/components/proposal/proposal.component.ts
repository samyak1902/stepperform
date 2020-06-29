import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonDataService } from 'src/app/common-data.service';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

  summaryForm:FormGroup;
  first:string="170.27 BGN";
  secondI:string="182.40 BGN";
  third:string='';
  fourth:string='abcd';
  sdate:string='04-03-54';
  mtplCalculatorData;
  mtplPolicyData;
  installmentData
  @Output() changeStep = new EventEmitter()
  @Output() moveTab = new EventEmitter()
  @Output() OnInstallment = new EventEmitter<any>();
  @Output() OnAdditionalCovers = new EventEmitter<any>();
  @Output() OnVehicleInfo = new EventEmitter<any>();
  @Output() OnInsuringParty = new EventEmitter<any>();
  @Output() OnVehicleOwner = new EventEmitter<any>();
  @Output() OnDelivery = new EventEmitter<any>();
  @Output() OnPolicyDates = new EventEmitter<any>();
  moveToCalculator=(index)=>{
    this.moveTab.emit(index)
      if(index===0){
        this.OnVehicleInfo.emit('Vehicle edit button clicked')
      }
      if(index===1){
        this.OnInsuringParty.emit('Insuring Party edit button clicked')
      }
      if(index===2){
        this.OnPolicyDates.emit('Policy Dates edit button clicked')
      }
      if(index===3){
        this.OnInstallment.emit('Installment edit button clicked')
      }
      if(index===4){
        this.OnAdditionalCovers.emit('Additional Covers edit button clicked')
      }
    }

    
  constructor(private fb: FormBuilder,private _dataService:CommonDataService) { }

  ngOnInit(): void {
    this._dataService.formData.subscribe(data=>{
      this.mtplCalculatorData=data;
      this.installmentData=data["installmentsData"].installments
      console.log(this.installmentData);
      
     })
     this._dataService.policyData.subscribe(data=>{
       console.log(data);
       
       this.mtplPolicyData=data;
       console.log(this.mtplPolicyData["vehicleOwnerInformation"]);
       
       if(this.mtplPolicyData["vehicleOwnerInformation"]=="Yes"){
         var obj={    fullname: {firstname: this.mtplPolicyData["personalInformation"].fullname.firstname,
          lastname: this.mtplPolicyData["personalInformation"].fullname.lastname, 
          surname: this.mtplPolicyData["personalInformation"].fullname.surname},
          city: this.mtplPolicyData["contactInformation"].city,
          street:this.mtplPolicyData["contactInformation"].street,
     
       lnch: this.mtplPolicyData["personalInformation"].lnch
     
            
         }
         this.mtplPolicyData["vehicleOwnerInformation"]=obj
         
         
         
       }
       

     })
//      this._dataService.installmentData.subscribe(data=>{
// this.installmentData=data
// console.log(data);

//      })
    
    this.summaryForm=this.fb.group({
      firstInstalment:[this.first],
      secondInstalment:[this.secondI],
      thirdInstalment:[this.third],
      fourthInstalment:[this.fourth],
      additionalCover:[''],
      startDate:[this.sdate],
      endDate:[''],
      vehicleRegistration:[''],
      vehiclePurpose:[''],
      certificationNumber:[''],
      days:[''],
      number:[''],
      fullName:[''],
      phoneNumber:[''],
      email:[''],
      cityZipcode:[''],
      streetNumber:[''],
      apartment:[''],
      egnnumber:[''],
      fullnamevehicleowner:[''],
      cityZipcodevehicleOwner:[''],
      streetNumbervehicleowner:[''],
      fullNameDelivery:[''],
      phoneNumDelivery:[''],
      addressType:[''],
      cityZipcodeDelivery:[''],
      streetNumberDelivery:[''],
      block:[''],
      apartmentDelivery:[''],
      AgreeToAll:[false,Validators.requiredTrue],
      receiveNewsletter:[false,Validators.requiredTrue],
      generalTerms:[false,Validators.requiredTrue]
    })
  }
  edit=(index)=>{
    console.log("inside edit",index);
    if(index===2){
      this.OnVehicleOwner.emit('Vehicle owner edit button clicked');
    }
    if(index===3){
      this.OnDelivery.emit('Delivery edit button clicked');
    }
    this.changeStep.emit(index)
  }

  
}
