import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../models/index';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss'],
  providers: [TeacherService]
})
export class TeacherComponent implements OnInit {

  public teachers: Array<Teacher> = [];

  constructor(
    private router: Router,
    private teacherService: TeacherService,
  ) {
    this.getTeachers();
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['./teacher-register']);
  }

  getTeachers() {
    this
      .teacherService
      .getTeachers()
      .subscribe((res: any) => {
        this.buildTeachers(res.result);
      }, err => {
        console.log(err);
      });
  }

  buildTeachers(arrayTeachers) {
    for (const teacher of arrayTeachers) {
      this
        .teachers
        .push(new Teacher(
          teacher.id_profesor,
          teacher.nombre,
          teacher.apellidos,
          teacher.correo,
          new Date(teacher.fecha_nacimiento),
          teacher.telefono
        ));
    }
  }

}
