import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule, MatCardModule, MatButtonModule  } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { ReportsComponent } from './dashboard/reports/reports.component';
import { AllEmployeesComponent } from './dashboard/reports/all-employees/all-employees.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SlideNavComponent } from './dashboard/slide-nav/slide-nav.component';
import { HeaderBarComponent } from './dashboard/header-bar/header-bar.component';
import { ClientsComponent } from './dashboard/admin/clients/clients.component';
import { AssignmentsComponent } from './dashboard/admin/assignments/assignments.component';
import { EmployeesComponent } from './dashboard/admin/employees/employees.component';
import { AssignmentClinetLinkComponent } from './dashboard/admin/assignment-clinet-link/assignment-clinet-link.component';
import { AssignmentEmployeeLinkComponent } from './dashboard/admin/assignment-employee-link/assignment-employee-link.component';
import { ServerNotFoundComponent } from './server-not-found/server-not-found.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistorComponent } from './registor/registor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DataTableModule } from 'ng-angular8-datatable';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportsComponent,
    AllEmployeesComponent,
    AdminComponent,
    LoginComponent,
    SlideNavComponent,
    HeaderBarComponent,
    ClientsComponent,
    AssignmentsComponent,
    EmployeesComponent,
    AssignmentClinetLinkComponent,
    AssignmentEmployeeLinkComponent,
    ServerNotFoundComponent,
    RegistorComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatRadioModule,
    MatInputModule ,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
