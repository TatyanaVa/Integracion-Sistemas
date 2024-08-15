import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/test/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password="";
  tipo=""
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit(loginForm: NgForm) {
    const { username, password } = loginForm.value;
    this.userService.login(username, password)
      .subscribe(response => {
        if (response.success) {
          alert ("Loggeado")
        } else {
          alert ("Error de credenciales")
          console.log('Error de autenticación');
        }
      }, error => {
        alert ("Error de credenciales")
        console.log('Error al autenticar:', error);
      });
  }
}
