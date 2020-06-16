import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatSelectModule} from '@angular/material/select';
import { constants } from 'buffer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { StepperComponent } from './stepper/stepper.component';
import { TabComponent } from './tab/tab.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
<<<<<<< HEAD
import { AdditionalCoversComponent } from './components/additional-covers/additional-covers.component';
=======

>>>>>>> ba28e1bbd7fd2191882fc62c681aec6172f95f20
import { LoginComponent } from './components/login/login.component';
import { VInfoComponent } from './components/v-info/v-info.component';



import {MatDividerModule} from '@angular/material/divider';
import { PolicyDetailsComponent } from './components/policy-details/policy-details.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CdkStepper } from '@angular/cdk/stepper';
import { InsuringPartyComponent } from './components/insuring-party/insuring-party.component';
import { DeliveryComponent } from './components/delivery/delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    TabComponent,
    AdditionalCoversComponent,
    PolicyDetailsComponent,
    LoginComponent,
    VInfoComponent,
    Tab2Component,
    TabsComponent,
    InsuringPartyComponent,
    DeliveryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDividerModule

  ],
  providers: [CdkStepper],
  bootstrap: [AppComponent]
})
export class AppModule { }
