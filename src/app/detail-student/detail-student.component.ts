import { Component, OnInit } from '@angular/core';
import { Student, Group } from '../models/index';
import { GroupStudentService } from '../services/group-student.service';
import { StudentService } from '../services/student.service';
import { GroupService } from '../services/group.service';
import { Router, ActivatedRoute } from '@angular/router';
import { KnnService } from '../services/knn.service';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.scss'],
  providers: [StudentService, GroupStudentService, GroupService]
})
export class DetailStudentComponent implements OnInit {

  public student: Student;
  public alertError = false;
  public paramsRoute;
  public subjects: Array<any>;
  public groups: Array<Group> = [];
  public show = false;

  constructor(
    private router: Router,
    private studentService: StudentService,
    private groupStudentService: GroupStudentService,
    private groupService: GroupService,
    private route: ActivatedRoute
  ) {
    this.student = new Student(null, null, null, null, null, null, null, null);
    this.paramsRoute = this.route.params;
  }

  ngOnInit() {
    this.getStudentbyId(this.paramsRoute._value.id);
    this.getSubjectToStudent(this.paramsRoute._value.id);
    this.getGroups();
  }

  goTo() {
    this.router.navigate(['./student']);
  }

  getStudentbyId(id: string) {
    this
      .studentService
      .getStudentbyId(id)
      .subscribe((res: any) => {
        this.buildDetailStudent(res.result);
      }, err => {
        this.goTo();
        console.log(err);
      });
  }

  getSubjectToStudent(id) {
    this
      .studentService
      .getSubjectsByIdStudent(id)
      .subscribe((res: any) => {
        this.subjects = res.result;
      }, err => {
        this.goTo();
        console.log(err);
      });
  }

  buildDetailStudent(student) {
    if (!student.id_estudiante)
      return this.goTo()
    this.student = new Student(
      student.id_estudiante,
      student.nombre,
      student.apellidos,
      student.correo,
      student.fecha_nacimiento,
      student.telefono,
      student.longitud,
      student.latitud
    )
    this.show = true;
  }

  getGroups() {
    this
      .groupService
      .getGroups()
      .subscribe((res: any) => {
        this.buildGroups(res.result);
      }, err => {
        console.log(err);
      });
  }

  buildGroups(arrayGroups) {
    for (const group of arrayGroups) {
      this
        .groups
        .push(new Group(
          group.id_grupo,
          group.id_asignatura,
          group.id_profesor,
          group.salon,
          group.hora_inicio,
          group.hora_fin
        ));
    }
  }

  suscribeSubject(group: any) {

    let groupStudent = {
      id_estudiante: this.student.idEstudiante,
      id_grupo: group.idGrupo
    };

    this
      .groupStudentService
      .saveGroupStudent(groupStudent)
      .subscribe(res => {
        this.getSubjectToStudent(this.student.idEstudiante)
      }, err => {
        this.showError();
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
