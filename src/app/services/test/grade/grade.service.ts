import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  httpClient: any;
  addGrade(nuevaNota: { id: number; nombre: string; nota: number; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  private API_GRADE="http://localhost:8081/api/v1/notas";
  private API_STUDENT="http://localhost:8081/api/v1/estudiantes";

  getGrade():Observable<any>{
    return this.http.get(this.API_GRADE)
  }
  postGrade(grade:any):Observable<any>{
    return this.http.post(this.API_GRADE,grade)
  }
  putGrade(grade:any,id:any):Observable<any>{
    this.API_GRADE=`${this.API_GRADE}/${id}`
    return this.http.put(this.API_GRADE,grade)
  }
  updateGrade(grade: any, id: any): Observable<any> {
    const url = `${this.API_GRADE}/${id}`;
    return this.http.put(url, grade);
  }
  deleteGrade(id:any):Observable<any>{
    this.API_GRADE=`${this.API_GRADE}/${id}`
    return this.http.delete(this.API_GRADE)
  }

  getStudent():Observable<any>{
    return this.http.get(this.API_STUDENT)
  }
}

