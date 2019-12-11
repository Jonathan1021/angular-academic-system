import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroupStudent } from '../models/index';

@Injectable()
export class GroupStudentService {
  private URL_API = 'http://localhost:3000/api';
  constructor(public http: HttpClient) {
  }

  public getGroupStudent() {
    return this.http.get(`${this.URL_API}/group-student`);
  }

  public saveGroupStudent(groupStudent: any) {
    return this.http.post(`${this.URL_API}/group-student/save`, groupStudent);
  }

  public updateGroupStudent(groupStudent: any) {
    return this.http.post(`${this.URL_API}/group-student/update`, groupStudent);
  }
}
