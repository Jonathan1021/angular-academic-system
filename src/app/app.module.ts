import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormStudentComponent } from './form-student/form-student.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormTeacherComponent } from './form-teacher/form-teacher.component';
import { FormSubjectComponent } from './form-subject/form-subject.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { GroupComponent } from './group/group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { DetailTeacherComponent } from './detail-teacher/detail-teacher.component';
import { StudentGmapComponent } from './student-gmap/student-gmap.component';

@NgModule({
  declarations: [
    AppComponent,
    FormStudentComponent,
    FormGroupComponent,
    FormTeacherComponent,
    FormSubjectComponent,
    SubjectComponent,
    StudentComponent,
    TeacherComponent,
    GroupComponent,
    DashboardComponent,
    DetailStudentComponent,
    DetailTeacherComponent,
    StudentGmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC7QZSmFQdI4wzSs-niS8r-ytxshT6JqVc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
