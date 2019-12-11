import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KnnService {

  private URL_API = 'http://localhost:3000/api';
  constructor(public http: HttpClient) {
  }

  public getKnnStudents(params: any) {
    return this.http.get(`${this.URL_API}/knn/student`, {params});
  }
}
