import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { EditStudentsComponent } from './screens/edit-students/edit-students.component';
import { ListStudentsComponent } from './screens/list-students/list-students.component';
import { DetailCourseComponent } from './screens/detail-course/detail-course.component';
import { ListCourseComponent } from './screens/list-course/list-course.component';
import { ListGradeComponent } from './screens/list-grade/list-grade.component';
import { ReportComponent } from './screens/report/report.component';
import { Error404Component } from './screens/error404/error404.component';
import { AcercaComponent } from './screens/acerca/acerca.component';
import { WorkComponent } from './screens/work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    EditStudentsComponent,
    ListStudentsComponent,
    DetailCourseComponent,
    ListCourseComponent,
    ListGradeComponent,
    ReportComponent,
    Error404Component,
    AcercaComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
