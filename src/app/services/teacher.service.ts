import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/index';

@Injectable()
export class TeacherService {
  private URL_API = 'http://localhost:3000/api';
  constructor(public http: HttpClient) {
  }

  public getTeachers() {
    return this.http.get(`${this.URL_API}/teacher`);
  }

  public saveTeacher(teacher: any) {
    return this.http.post(`${this.URL_API}/teacher/save`, teacher);
  }

  public updateTeacher(teacher: Teacher) {
    return this.http.post(`${this.URL_API}/teacher/update`, teacher);
  }

  public getSubjectsByIdTeacher(id: string) {
    return this.http.get(`${this.URL_API}/teacher/${id}/subject`);
  }

  public getTeacherbyId(id: string) {
    return this.http.get(`${this.URL_API}/teacher/${id}`);
  }  
}
