import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  private API_STUDENT="http://localhost:3000/students"

  getStudent():Observable<any>{
    return this.http.get(this.API_STUDENT)
  }

  postStudent(student:any):Observable<any>{
    return this.http.post(this.API_STUDENT,student)
  }
  putStudent(student:any,id:any):Observable<any>{
    this.API_STUDENT=`${this.API_STUDENT}/${id}`
    return this.http.put(this.API_STUDENT,student)
  }
  deleteStudent(id:any):Observable<any>{
    this.API_STUDENT=`${this.API_STUDENT}/${id}`
    return this.http.delete(this.API_STUDENT)
  }
}
