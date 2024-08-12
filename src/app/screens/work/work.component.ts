import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/test/student/students.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {

 // titulo: string = '';
  //id: string = '';
  id: any;
  titulo: any;
  nombre:any;

  constructor(private servicio: StudentsService,private ruta:Router){}

  enviarTarea() {
    const nuevaTarea = {
      id: this.id,
      titulo: this.titulo,
      nombre:this.nombre
    };
  
    this.servicio.postStudent(nuevaTarea).subscribe(
      response => {
        console.log('Tarea enviada:', response);
        location.reload(); 
      },
      error => {
        console.error('Error al enviar la tarea:', error);
      }
    );
  }
}