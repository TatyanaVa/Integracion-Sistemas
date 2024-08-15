import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { Error404Component } from './screens/error404/error404.component';
import { LoginComponent } from './screens/login/login.component';
import { ReportComponent } from './screens/report/report.component';
import { AcercaComponent } from './screens/acerca/acerca.component';
import { WorkComponent } from './screens/work/work.component';
import { ListGradeComponent } from './screens/list-grade/list-grade.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'report', component: ReportComponent  },
  { path: 'acerca', component: AcercaComponent },
  { path: 'work', component: WorkComponent },
  { path: 'grade', component: ListGradeComponent},
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
