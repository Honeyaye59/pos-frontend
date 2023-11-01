import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStaffComponent } from './staff/all-staff/all-staff.component';

const routes: Routes = [
  {path: 'all-staff', component: AllStaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
