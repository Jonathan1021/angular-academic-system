import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../models/index';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  providers: [GroupService]
})
export class GroupComponent implements OnInit {

  public groups: Array<Group> = [];

  constructor(
    private router: Router,
    private groupService: GroupService
  ) {
    this.getGroups();
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['./group-register']);
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

}
