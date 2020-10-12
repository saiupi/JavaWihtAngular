import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllEmployeesComponent } from './dashboard/reports/all-employees/all-employees.component';
import { AssignmentClinetLinkComponent } from './dashboard/admin/assignment-clinet-link/assignment-clinet-link.component';
import { AssignmentEmployeeLinkComponent } from './dashboard/admin/assignment-employee-link/assignment-employee-link.component';
import { AssignmentsComponent } from './dashboard/admin/assignments/assignments.component';
import { ClientsComponent } from './dashboard/admin/clients/clients.component';
import { EmployeesComponent } from './dashboard/admin/employees/employees.component';
import { ServerNotFoundComponent } from './server-not-found/server-not-found.component';
import { RegistorComponent } from './registor/registor.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { UserComponent } from './pages/user/user.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'emp',
    pathMatch: 'full'
  },
  { path: 'registor', component: RegistorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component:  AdminComponent},
  { path: 'user', component:  UserComponent},
  { path: 'dashboar', component: DashboardComponent},
  { path: 'emp', component:  AllEmployeesComponent}, 
  {
    path: '', redirectTo: 'login', pathMatch: 'full',
  },

  { path: 'dashboard', component: DashboardComponent,children: [ 
    // { path: 'admin', component:  AdminComponent},
    // { path: 'user', component:  UserComponent}

  //   { path: 'emp', component:  AllEmployeesComponent},   
  // { path: 'allEmployees', component:  AllEmployeesComponent},
  // { path: 'clients', component: ClientsComponent },
  // { path: 'assignments', component: AssignmentsComponent },
  // { path: 'employees', component: EmployeesComponent },

  // { path: 'assignmentClient', component: AssignmentClinetLinkComponent },
  // { path: 'assignmentEmployee', component: AssignmentEmployeeLinkComponent } 
]},
  { path: '**', component: ServerNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
