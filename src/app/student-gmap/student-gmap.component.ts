import { Component, OnInit, Input } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { KnnService } from "../services/knn.service";
import { Student } from '../models';

@Component({
  selector: 'app-student-gmap',
  templateUrl: './student-gmap.component.html',
  styleUrls: ['./student-gmap.component.scss'],
  providers: [KnnService]
})
export class StudentGmapComponent implements OnInit {

  @Input() student: Student;

  // google maps zoom level
  public zoom: number = 11;
  public markers: Array<marker> = [];

  // initial center position for the map
  public lat: number = 4.633520;
  public lon: number = -74.092145;
  public km: number = 1;

  constructor(
    private knnService: KnnService
  ) { }

  ngOnInit() {
  }

  getStudentKnn() {
    let params = {
      lat: this.student.latitud,
      lon: this.student.longitud,
      km: this.km,
    }

    this
      .knnService
      .getKnnStudents(params)
      .subscribe((res: any) => {
        this.buildKnn(res.result);
      }, err => {

      })
  }

  buildKnn(listKnn) {
    this.markers = []
    let cont = 0
    for (const knn of listKnn) {
      cont++
      this.markers.push({
        id: `${cont}`,
        lat: knn.latitud,
        lng: knn.longitud,
        name: `${knn.nombre} ${knn.apellidos}`,
        email: `${knn.correo}`,
        draggable: true
      })
    }
  }
}

interface marker {
  id: string;
  lat: number;
  lng: number;
  name?: string;
  email?: string;
  draggable: boolean;
}
