import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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
import { AddNewStaffComponent } from './staff/add-new-staff/add-new-staff.component';
import { StaffInfoDetailComponent } from './staff/staff-info-detail/staff-info-detail.component';
import { AllMenuComponent } from './menu/all-menu/all-menu.component';
import { MenuTopbarComponent } from './menu/all-menu/menu-topbar/menu-topbar.component';
import { MenuMainComponent } from './menu/all-menu/menu-main/menu-main.component';
import { PopularDishesComponent } from './menu/all-menu/menu-main/popular-dishes/popular-dishes.component';
import { UnpopularDishesComponent } from './menu/all-menu/menu-main/unpopular-dishes/unpopular-dishes.component';
import { BreakfastComponent } from './menu/all-menu/menu-main/breakfast/breakfast.component';
import { LunchComponent } from './menu/all-menu/menu-main/lunch/lunch.component';
import { DinnerComponent } from './menu/all-menu/menu-main/dinner/dinner.component';
import { TraditionalComponent } from './menu/all-menu/menu-main/traditional/traditional.component';
import { SnacksComponent } from './menu/all-menu/menu-main/snacks/snacks.component';
import { DrinksComponent } from './menu/all-menu/menu-main/drinks/drinks.component';
import { EditMenuComponent } from './menu/edit-menu/edit-menu.component';
import { MenuInfoDetailComponent } from './menu/menu-info-detail/menu-info-detail.component';
import { AddNewMenuComponent } from './menu/add-new-menu/add-new-menu.component';

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
    StaffInfoDetailComponent,
    AllMenuComponent,
    MenuTopbarComponent,
    MenuMainComponent,
    PopularDishesComponent,
    UnpopularDishesComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
    TraditionalComponent,
    SnacksComponent,
    DrinksComponent,
    EditMenuComponent,
    MenuInfoDetailComponent,
    AddNewMenuComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
