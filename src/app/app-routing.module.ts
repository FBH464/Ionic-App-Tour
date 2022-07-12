import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./components/tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [AuthGuard] // Asegurar todas las páginas secundarias
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canLoad: [IntroGuard, AutoLoginGuard] // Revisar si mostrar la introducción o reenviar 
  },
  {
    path: 'pueblos-magicos',
    loadChildren: () => import('./pages/rutas/pueblos-magicos/pueblos-magicos.module').then( m => m.PueblosMagicosPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'amigo-tours',
    loadChildren: () => import('./pages/rutas/amigo-tours/amigo-tours.module').then( m => m.AmigoToursPageModule),
    canLoad: [AuthGuard]
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
