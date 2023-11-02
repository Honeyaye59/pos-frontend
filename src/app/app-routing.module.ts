import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStaffComponent } from './staff/all-staff/all-staff.component';
import { AddNewStaffComponent } from './staff/add-new-staff/add-new-staff.component';
import { StaffInfoDetailComponent } from './staff/staff-info-detail/staff-info-detail.component';
import { AllMenuComponent } from './menu/all-menu/all-menu.component';
import { AddNewMenuComponent } from './menu/add-new-menu/add-new-menu.component';
import { MenuInfoDetailComponent } from './menu/menu-info-detail/menu-info-detail.component';

const routes: Routes = [
  {path: 'staffs', component: AllStaffComponent},
  {path: 'new-staff', component: AddNewStaffComponent},
  {path: 'staffs/:id', component: StaffInfoDetailComponent},
  {path: 'menus', component: AllMenuComponent},
  {path: 'new-menu', component: AddNewMenuComponent},
  {path: 'menus/:id', component: MenuInfoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
