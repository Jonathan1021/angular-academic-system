import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [TeacherService]
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private teacherService: TeacherService,
  ) {
    this.getTeachers();
  }

  ngOnInit() {

  }

  goBack() {
    this.router.navigate(['./dashboard-register']);
  }

  getTeachers() {
  }

  buildTeachers(arrayTeachers) {
    for (const dashboard of arrayTeachers) {
    }
  }

}
