import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/index';

@Injectable()
export class StudentService {
  private URL_API = 'http://localhost:3000/api';
  constructor(public http: HttpClient) {
  }

  public getStudents() {
    return this.http.get(`${this.URL_API}/student`);
  }

  public saveStudent(student: any) {
    return this.http.post(`${this.URL_API}/student/save`, student);
  }

  public updateStudent(student: any) {
    return this.http.post(`${this.URL_API}/student/update`, student);
  }

  public getStudentbyId(id: string) {
    return this.http.get(`${this.URL_API}/student/${id}`);
  }  

  public getSubjectsByIdStudent(id: string) {
    return this.http.get(`${this.URL_API}/student/subject/${id}`);
  }  
}
