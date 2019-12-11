import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '../models/index';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
  providers: [SubjectService]
})
export class SubjectComponent implements OnInit {

  public subjects: Array<Subject> = [];

  constructor(
    private router: Router,
    private subjectService: SubjectService
  ) {
    this.getSubjects();
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['./subject-register']);
  }

  getSubjects() {
    this
      .subjectService
      .getSubjects()
      .subscribe((res: any) => {
        this.buildSubjects(res.result);
      }, err => {
        console.log(err);
      });
  }

  buildSubjects(arraySubjects) {
    for (const subject of arraySubjects) {
      this
        .subjects
        .push(new Subject(
          subject.id_asignatura,
          subject.nombre,
          subject.creditos
        ));
    }
  }
}
