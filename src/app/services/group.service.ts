import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '../models/index';

@Injectable()
export class GroupService {
  private URL_API = 'http://localhost:3000/api';
  constructor(public http: HttpClient) {
  }

  public getGroups() {
    return this.http.get(`${this.URL_API}/group`);
  }

  public saveGroup(group: any) {
    return this.http.post(`${this.URL_API}/group/save`, group);
  }

  public updateGroup(group: Group) {
    return this.http.post(`${this.URL_API}/group/update`, group);
  }
}
