import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AlojamientosComponent } from './pages/alojamientos.component';
import { OcioComponent } from './pages/ocio.component';
import { ActividadesComponent } from './pages/actividades.component';
import { DestinosComponent } from './pages/destinos.component';
import { NovedadesComponent } from './pages/novedades.component';
import { ValoracionesComponent } from './pages/valoraciones.component';
import { SoporteComponent } from './pages/soporte.component';
import { ContactoComponent } from './pages/contacto.component';
import { TutorialesComponent } from './pages/tutoriales.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alojamientos', component: AlojamientosComponent },
  { path: 'ocio', component: OcioComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'destinos', component: DestinosComponent },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'valoraciones', component: ValoracionesComponent },
  { path: 'soporte', component: SoporteComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'tutoriales', component: TutorialesComponent },
  { path: '**', redirectTo: '' }
];
