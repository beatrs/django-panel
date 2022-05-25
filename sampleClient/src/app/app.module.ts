import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDepartmentComponent } from './department/view-department/view-department.component';
import { AddEditDepartmentComponent } from './department/add-edit-department/add-edit-department.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { AddEditEmployeeComponent } from './employee/add-edit-employee/add-edit-employee.component';

import { ManageDataService } from './shared/manage-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ViewDepartmentComponent,
    AddEditDepartmentComponent,
    DepartmentComponent,
    EmployeeComponent,
    ViewEmployeeComponent,
    AddEditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    ManageDataService, 
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
