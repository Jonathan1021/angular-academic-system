import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/index';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {

  public students: Array<Student> = [];

  constructor(
    private router: Router,
    private studentService: StudentService
  ) {
    this.getStudents();
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['./student-register']);
  }

  getStudents() {
    this
      .studentService
      .getStudents()
      .subscribe((res: any) => {
        this.buildStudents(res.result);
      }, err => {
        console.log(err);
      });
  }

  buildStudents(arrayStudents) {
    for (const student of arrayStudents) {
      this
        .students
        .push(new Student(
          student.id_estudiante,
          student.nombre,
          student.apellidos,
          student.correo,
          new Date(student.fecha_nacimiento),
          student.telefono,
          undefined, 
          undefined
        ));
    }
  }
}
