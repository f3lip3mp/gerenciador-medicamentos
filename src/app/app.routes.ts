import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'medicamentos', component: MedicamentosComponent },
  { path: 'usuarios', component: UsuariosComponent },
];