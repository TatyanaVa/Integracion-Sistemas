import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  student = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: ''
  };

  onSubmit() {
    console.log('Estudiante registrado:', this.student);
    // Aquí puedes agregar la lógica para enviar los datos a un servidor o procesarlos como sea necesario
  }

}
