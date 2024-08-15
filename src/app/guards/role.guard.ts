import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/test/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    const user = this.userService.getCurrentUser();
    if (user) {
      if (user.tipo === 'MAESTRO') {
        this.router.navigate(['/maestro-dashboard']);
        return false;
      } else if (user.tipo === 'ESTUDIANTE') {
        this.router.navigate(['/estudiante-dashboard']);
        return false;
      }
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
