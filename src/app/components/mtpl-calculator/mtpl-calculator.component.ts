import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { CommonDataService } from 'src/app/common-data.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-mtpl-calculator',
  templateUrl: './mtpl-calculator.component.html',
  styleUrls: ['./mtpl-calculator.component.css']
})
export class MTPLCalculatorComponent implements OnInit {
  @Output() selectionChange: EventEmitter<StepperSelectionEvent>
  @Output() NextTabSwitch = new EventEmitter()

  @ViewChild('stepper1') stepper1: MatStepper;
  constructor(private _commonData:CommonDataService) { }

  ngOnInit(): void {
  }
  
  vehicle
  insuringParty
  policyDetails
  installments
  covers
  summary
  toggle1=false
  toggle2=false
  toggle3=false
  toggle4=false
  toggle5=false
  toggle6=true
  mtplCalculaterData

  move=(index)=> {
    console.log("calculators");
    
    this.stepper1.selectedIndex = index;
  }

  vehicleData=(data)=>{
    this.vehicle=data
    console.log(this.vehicle);
  }

  insuringPartyData=(data)=>{
    this.insuringParty=data
    console.log(this.insuringParty);
  }

  policyDetailsData=(data)=>{
    this.policyDetails=data
    console.log(this.policyDetails);
  }

  installmentsData=(data)=>{
    this.installments=data
    console.log(this.installments);
  }

  coversData=(data)=>{
    this.covers=data
    console.log(this.covers);
    this.mtplCalculaterData={
      vehicleData:this.vehicle,
      insuringPartyData:this.insuringParty,
      policyDetailsData:this.policyDetails,
      installmentsData:this.installments,
      coversData:this.covers
    }
  this._commonData.formData.next(this.mtplCalculaterData)
  //  this._commonData.formData.subscribe(data=>{
  //    console.log(data);
  //    }) 
  }


  nextTab=(data)=>{
    this.NextTabSwitch.emit(data)
  }
  change=(data)=>{
    console.log(data);
  }
}
