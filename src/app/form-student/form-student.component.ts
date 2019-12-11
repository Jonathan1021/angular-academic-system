import { Component, OnInit } from '@angular/core';
import { Student } from '../models/index';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss'],
  providers: [StudentService]
})
export class FormStudentComponent implements OnInit {

  public student: Student;
  public alertError = false;

  constructor(
    private router: Router,
    private studentService: StudentService,
  ) {
    this.student = new Student(null, null, null, null, null, null, null, null);
  }

  ngOnInit() {
  }

  goTo() {
    this.router.navigate(['./student']);
  }

  save() {
    const saveStudent = {
      id_estudiante: this.student.idEstudiante,
      nombre: this.student.nombre,
      apellidos: this.student.apellidos,
      correo: this.student.correo,
      fecha_nacimiento: this.student.fechaNacimiento,
      telefono: this.student.telefono
    };

    this
      .studentService
      .saveStudent(saveStudent)
      .subscribe(res => {
        this.goTo();
      }, err => {
        console.log('err :', err);
        this.showError();
      });
  }

  showError() {
    this.alertError = true;
    setTimeout(() => {
      this.alertError = false;
    }, 3000);
  }
}
