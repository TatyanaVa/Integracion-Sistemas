import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GradeService } from 'src/app/services/test/grade/grade.service';
import { StudentsService } from 'src/app/services/test/student/students.service';

@Component({
  selector: 'app-list-grade',
  templateUrl: './list-grade.component.html',
  styleUrls: ['./list-grade.component.css']
})
export class ListGradeComponent {


data: any[] = [];
tareas: any[] = [];

  constructor(private gradesService: GradeService, private studentService: StudentsService) {}

  ngOnInit(): void {
    this.cargarDatos();
    this.studentService.getStudent().subscribe(
      (data: any[]) => {
        this.tareas = data;
      },
    )
  }

   cargarDatos(): void {
    this.gradesService.getGrade().subscribe(
      (response: any) => {
        this.data = response.grades || response;  // Ajusta esto según la estructura de tu JSON
        console.log('Datos cargados:', this.data); // Para depuración
      },
      (error) => {
        console.error('Error al cargar las notas:', error);
      }
    );
  }

  onNombreChange(item: any): void {
    this.gradesService.updateGrade(item, item.id).subscribe(
      (response) => {
        console.log('Nombre actualizado:', response);
      },
      (error) => {
        console.error('Error al actualizar el nombre:', error);
      }
    );
  }

  onNotaChange(item: any): void {
    this.gradesService.updateGrade(item, item.id).subscribe(
      (response) => {
        console.log('Nota actualizada:', response);
      },
      (error) => {
        console.error('Error al actualizar la nota:', error);
      }
    );
  }

  eliminar(id: any): void {
    this.gradesService.deleteGrade(id).subscribe(
      () => {
        this.cargarDatos();  
      },
      (error) => {
        console.error('Error al eliminar la tarea:', error);
      }
    );
  }


  agregarNota(): void {
    const nuevaNota = {
      id: new Date().getTime(),  // Genera un ID único basado en el timestamp
      nombre: 'Estudiante nuevo',  // Nombre por defecto, puedes hacer esto dinámico
      nota: 0  // Nota por defecto
    };

    this.gradesService.postGrade(nuevaNota).subscribe(
      (response: any) => {
        console.log('Nota agregada:', response);
        this.cargarDatos();  // Recargar los datos para reflejar la nueva nota
      },
      (error: any) => {
        console.error('Error al agregar la nota:', error);
      }
    );
  }
  eliminarTarea(id: any): void {
    this.studentService.deleteStudent(id).subscribe(
      response => {
        console.log('Tarea eliminada:', response);
        
      },
      error => {
        console.error('Error al eliminar la tarea:', error);
      }
    );
  }
}
