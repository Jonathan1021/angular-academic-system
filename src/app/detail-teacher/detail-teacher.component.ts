import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher';
import { TeacherService } from '../services/teacher.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-teacher',
  templateUrl: './detail-teacher.component.html',
  styleUrls: ['./detail-teacher.component.scss'],
  providers: [TeacherService]
})
export class DetailTeacherComponent implements OnInit {

  public teacher: Teacher;
  public alertError = false;
  public paramsRoute;
  public subjects: Array<any>;

  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.teacher = new Teacher(null, null, null, null, null, null);
    this.paramsRoute = this.route.params;
  }

  ngOnInit() {
    this.getTeacherbyId(this.paramsRoute._value.id);
    this.getSubjectToTeacher(this.paramsRoute._value.id);
  }

  getTeacherbyId(id: string) {
    this
      .teacherService
      .getTeacherbyId(id)
      .subscribe((res: any) => {
        this.buildDetailTeacher(res.result);
      }, err => {
        this.goTo();
        console.log(err);
      });
  }

  goTo() {
    this.router.navigate(['./teacher']);
  }

  getSubjectToTeacher(id) {
    this
      .teacherService
      .getSubjectsByIdTeacher(id)
      .subscribe((res: any) => {
        this.subjects = res.result;
      }, err => {
        this.goTo();
        console.log(err);
      });
  }

  buildDetailTeacher(teacher) {
    if (!teacher.id_profesor)
      return this.goTo()
    this.teacher = new Teacher(
      teacher.id_profesor,
      teacher.nombre,
      teacher.apellidos,
      teacher.correo,
      teacher.fecha_nacimiento,
      teacher.telefono
    )
  }
}
