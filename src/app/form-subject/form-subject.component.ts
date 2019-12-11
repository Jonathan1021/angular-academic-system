import { Component, OnInit } from '@angular/core';
import { Subject } from '../models/index';
import { SubjectService } from '../services/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-subject',
  templateUrl: './form-subject.component.html',
  styleUrls: ['./form-subject.component.scss'],
  providers: [SubjectService]
})
export class FormSubjectComponent implements OnInit {

  public subject: Subject;
  public alertError = false;

  constructor(
    private router: Router,
    private subjectService: SubjectService,
  ) {
    this.subject = new Subject(null, null, null);
  }

  ngOnInit() {
  }

  goTo() {
    this.router.navigate(['./subject']);
  }

  save() {
    const saveSubject = {
      id_asignatura: this.subject.idAsignatura,
      nombre: this.subject.nombre,
      creditos: this.subject.creditos,
    };

    this
      .subjectService
      .saveSubject(saveSubject)
      .subscribe(() => {
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
