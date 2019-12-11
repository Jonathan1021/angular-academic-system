import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { DetailTeacherComponent } from './detail-teacher/detail-teacher.component';


const routes: Routes = [
  { path: 'subject-register', component: FormSubjectComponent },
  { path: 'teacher-register', component: FormTeacherComponent },
  { path: 'student-register', component: FormStudentComponent },
  { path: 'group-register', component: FormGroupComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'teacher/detail/:id', component: DetailTeacherComponent },
  { path: 'student/detail/:id', component: DetailStudentComponent },
  { path: 'student', component: StudentComponent },
  { path: 'group', component: GroupComponent },
  { path: '', component:  DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
