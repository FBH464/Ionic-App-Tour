import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { filter, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanLoad {
  constructor(private authService: AuthenticationService, private router: Router) { }
 
  canLoad(): Observable<boolean> {    
    return this.authService.isAuthenticated.pipe(
      filter(val => val !== null), // Filtrar el valor de sujeto de comportamiento inicial
      take(1), // De lo contrario, el Observable no se completa.!
      map(isAuthenticated => {
        console.log('Found previous token, automatic login');
        if (isAuthenticated) {
          // Zona interior abierta directamente       
          this.router.navigateByUrl('/tabs', { replaceUrl: true });
        } else {          
          // Simplificar el acceso al inicio de sesión
          return true;
        }
      })
    );
  }
}