import { Component } from '@angular/core';

@Component({
  selector: 'app-list-grade',
  templateUrl: './list-grade.component.html',
  styleUrls: ['./list-grade.component.css']
})
export class ListGradeComponent {

  nota = {
    nombre: '',
    asignatura: '',
    nota: null
  };

  onSubmit() {
    console.log('Nota del estudiante guardada:', this.nota);
    
  }
}
