import { Component } from '@angular/core';

@Component({
  selector: 'app-actividades',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 100px; padding-bottom: 80px;">
      <div class="container animate-fade-in-up">
        <!-- SEO friendly H1 specific for this Silo -->
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Gestión para <span class="text-gradient">Actividades Turísticas</span></h1>
        <p class="text-muted" style="font-size: 1.2rem; max-width: 700px; margin-bottom: 3rem;">
          Controla los aforos, el personal y la distribución en las principales OTA del mundo desde un solo panel de control.
        </p>

        <img src="/images/ira-software-para-gestion-de-actividades-turisticas.jpg" alt="Actividades Turísticas" style="width: 100%; height: 350px; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: 3rem; box-shadow: 0 15px 30px rgba(0,0,0,0.08);">

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
            <img src="/images/motor-empresas-actividades-turisticas.jpg" alt="OTAs" style="width: 100%; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Venta en OTAs</h2>
            <p class="text-muted">Conecta tus actividades con los principales portales de reservas del mundo y automatiza los cupos.</p>
          </div>
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
            <img src="/images/motor-turismo-activo.jpg" alt="Gestión de Recursos" style="width: 100%; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Gestión de Recursos</h2>
            <p class="text-muted">Coordina con eficacia los horarios de tus guías y el material necesario para cada tour.</p>
          </div>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
          <button class="btn btn-primary btn-lg" style="background: var(--text-main); color: var(--bg-secondary); padding: 1rem 2rem; border-radius: var(--radius-pill); font-weight: 600;">Explorar Funcionalidades</button>
        </div>
      </div>
    </div>
  `
})
export class ActividadesComponent {}
