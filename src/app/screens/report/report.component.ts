import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  nota = {
    nombre: '',
    fecha: '',
    presente: false
  };

  onSubmit() {
    const tableBody = document.getElementById('attendanceTableBody')!;
    
 
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${this.nota.nombre}</td>
      <td>${this.nota.fecha}</td>
      <td>${this.nota.presente ? '✔️' : ''}</td>
      <td>${this.nota.presente ? '' : '✔️'}</td>
    `;
    
    
    tableBody.appendChild(newRow);
    
  
    this.nota = {
      nombre: '',
      fecha: '',
      presente: false
    };
  }

}
