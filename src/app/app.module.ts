import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllStaffComponent } from './staff/all-staff/all-staff.component';
import { SidebarComponent } from './staff/all-staff/sidebar/sidebar.component';
import { TopbarComponent } from './staff/all-staff/topbar/topbar.component';
import { MainComponent } from './staff/all-staff/main/main.component';
import { ManagerComponent } from './staff/all-staff/main/manager/manager.component';
import { SupervisorComponent } from './staff/all-staff/main/supervisor/supervisor.component';
import { WaitStaffComponent } from './staff/all-staff/main/wait-staff/wait-staff.component';
import { CardComponent } from './staff/all-staff/main/utils/card/card.component';
import { AddNewStaffComponent } from './add-new-staff/add-new-staff.component';
import { StaffInfoDetailComponent } from './staff-info-detail/staff-info-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AllStaffComponent,
    SidebarComponent,
    TopbarComponent,
    MainComponent,
    ManagerComponent,
    SupervisorComponent,
    WaitStaffComponent,
    CardComponent,
    AddNewStaffComponent,
    StaffInfoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
