import { Component, OnInit } from '@angular/core';
import { Group } from '../models/index';
import { GroupService } from '../services/group.service';
import { TeacherService } from '../services/teacher.service';
import { SubjectService } from '../services/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
  providers: [GroupService, TeacherService, SubjectService]
})
export class FormGroupComponent implements OnInit {

  public group: Group;
  public alertError = false;
  public teachers = [];
  public subjects = [];
  constructor(
    private router: Router,
    private groupService: GroupService,
    private subjectService: SubjectService,
    private teacherService: TeacherService,
  ) {
    this.group = new Group(null, null, null, null, null, null);
    this.getTeachers();
    this.getSubjects();
  }

  ngOnInit() {
  }

  goTo() {
    this.router.navigate(['./group']);
  }

  save() {
    const saveGroup = {
      id_grupo: this.group.idGrupo,
      id_asignatura: this.group.idAsignatura,
      id_profesor: this.group.idProfesor,
      salon: this.group.salon,
      hora_inicio: this.group.horaInicio,
      hora_fin: this.group.horaFin,
    };

    this
      .groupService
      .saveGroup(saveGroup)
      .subscribe(() => {
        this.goTo();
      }, err => {
        console.log('err :', err);
        this.showError();
      });
  }

  getTeachers() {
    this
      .teacherService
      .getTeachers()
      .subscribe((res: any) => {
        this.teachers = res.result;
      }, err => {
        console.log(err);
      });
  }

  getSubjects() {
    this
      .subjectService
      .getSubjects()
      .subscribe((res: any) => {
        this.subjects = res.result;
      }, err => {
        console.log(err);
      });
  }

  showError() {
    this.alertError = true;
    setTimeout(() => {
      this.alertError = false;
    }, 3000);
  }

}
