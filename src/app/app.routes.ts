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

// Nuevas pantallas
import { EspecialCheckinComponent } from './pages/especial-checkin.component';
import { TarifasComponent } from './pages/tarifas.component';
import { CerradurasComponent } from './pages/cerraduras.component';
import { AulaComponent } from './pages/aula.component';
import { RegistroViajerosComponent } from './pages/registro-viajeros.component';
import { VerifactuComponent } from './pages/verifactu.component';

// Nuevos Subcomponentes
import { MrpHotelComponent } from './pages/mrp-hotel.component';
import { MrpSpaComponent } from './pages/mrp-spa.component';
import { MrpCasaRuralComponent } from './pages/mrp-casa-rural.component';
import { TurismoActivoComponent } from './pages/turismo-activo.component';
import { BarcosComponent } from './pages/barcos.component';
import { RutasComponent } from './pages/rutas.component';

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
  { path: 'especial-checkin', component: EspecialCheckinComponent },
  { path: 'tarifas', component: TarifasComponent },
  { path: 'cerraduras', component: CerradurasComponent },
  { path: 'aula', component: AulaComponent },
  { path: 'registro-viajeros', component: RegistroViajerosComponent },
  { path: 'verifactu', component: VerifactuComponent },
  { path: 'mrp-hotel', component: MrpHotelComponent },
  { path: 'mrp-spa', component: MrpSpaComponent },
  { path: 'mrp-casa-rural', component: MrpCasaRuralComponent },
  { path: 'turismo-activo', component: TurismoActivoComponent },
  { path: 'barcos', component: BarcosComponent },
  { path: 'rutas', component: RutasComponent },
  { path: '**', redirectTo: '' }
];
