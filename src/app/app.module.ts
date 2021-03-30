import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardTotalReadingComponent } from './components/dashboard-total-reading/dashboard.total.reading.component';
import { DashboardTopReadingComponent } from './components/dashboard-top-reading/dashboard.top.reading.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { FleetOwnersComponent } from './components/fleet-owners/fleet-owners.component';
import { GoodsComponent } from './components/goods/goods.component';
import { GoodsTypeComponent } from './components/goods-type/goods-type.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { RateDetailsComponent } from './components/rate-details/rate-details.component';
import { IncentivesComponent } from './components/incentives/incentives.component';
import { ReferAndEarnComponent } from './components/refer-and-earn/refer-and-earn.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeRightsComponent } from './components/employee-rights/employee-rights.component';
import { CreateVehicleComponent } from './components/create-vehicle/create-vehicle.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateDriverComponent } from './components/create-driver/create-driver.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import {DataTablesModule} from 'angular-datatables';
import {MatIconModule} from '@angular/material/icon';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './components/login/login.component';

import { CreateVehicleTypeComponent } from './components/create-vehicle-type/create-vehicle-type.component';
import { DriverViewComponent } from './components/driver-view/driver-view.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  // {path: 'dashboardd', component: DashboardTotalReadingComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'drivers', component: DriversComponent},
  {path: 'fleet-owners', component: FleetOwnersComponent},
  {path: 'goods', component: GoodsComponent},
  {path: 'goods-type', component: GoodsTypeComponent},
  {path: 'vehicle-details', component: VehicleDetailsComponent},
  {path: 'vehicle-create', component: CreateVehicleComponent},
  {path: 'rate-details', component: RateDetailsComponent},
  {path: 'incentives', component: IncentivesComponent},
  {path: 'refer-and-earn', component: ReferAndEarnComponent},
  {path: 'coupon', component: CouponComponent},
  {path: 'promotions', component: PromotionsComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'create-driver', component: CreateDriverComponent},
  {path: 'driver-view', component: DriverViewComponent},
  {path: 'employee-rights', component: EmployeeRightsComponent},
  {path: 'create-vehicle-type', component: CreateVehicleTypeComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenubarComponent,
    DashboardComponent,
    DashboardTotalReadingComponent,
    DashboardTopReadingComponent,
    FooterComponent,
    CustomersComponent,
    DriversComponent,
    FleetOwnersComponent,
    GoodsComponent,
    GoodsTypeComponent,
    VehicleDetailsComponent,
    RateDetailsComponent,
    IncentivesComponent,
    ReferAndEarnComponent,
    CouponComponent,
    PromotionsComponent,
    EmployeeComponent,
    EmployeeRightsComponent,
    CreateVehicleComponent,
    CreateCustomerComponent,
    CreateDriverComponent,
    LoginComponent,
    CreateVehicleTypeComponent,
    MenubarComponent,
    DriverViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    DataTablesModule,
    MatIconModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
