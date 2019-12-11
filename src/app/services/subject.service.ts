import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../models/index';

@Injectable()
export class SubjectService {
  private URL_API = 'http://localhost:3000/api';
  constructor(public http: HttpClient) {
  }

  public getSubjects() {
    return this.http.get(`${this.URL_API}/subject`);
  }

  public saveSubject(subject: any) {
    return this.http.post(`${this.URL_API}/subject/save`, subject);
  }

  public updateSubject(subject: Subject) {
    return this.http.post(`${this.URL_API}/subject/update`, subject);
  }
}
