import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/index';
import { TeacherService } from '../services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-teacher',
  templateUrl: './form-teacher.component.html',
  styleUrls: ['./form-teacher.component.scss'],
  providers: [TeacherService]
})
export class FormTeacherComponent implements OnInit {

  public teacher: Teacher;
  public alertError = false;

  constructor(
    private router: Router,
    private teacherService: TeacherService,
  ) {
    this.teacher = new Teacher(null, null, null, null, null, null);
  }

  ngOnInit() {
  }

  goTo() {
    this.router.navigate(['./teacher']);
  }

  save() {
    const saveTeacher = {
      id_profesor: this.teacher.idProfesor,
      nombre: this.teacher.nombre,
      apellidos: this.teacher.apellidos,
      correo: this.teacher.correo,
      fecha_nacimiento: this.teacher.fechaNacimiento,
      telefono: this.teacher.telefono
    };

    this
      .teacherService
      .saveTeacher(saveTeacher)
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
