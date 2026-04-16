import { Component } from '@angular/core';

@Component({
  selector: 'app-destinos',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 100px; padding-bottom: 80px;">
      <div class="container animate-fade-in-up">
        <!-- SEO friendly H1 specific for this Silo -->
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Plataforma Integral para <span class="text-gradient">Destinos Inteligentes</span></h1>
        <p class="text-muted" style="font-size: 1.2rem; max-width: 700px; margin-bottom: 3rem;">
          Ofrece a tus visitantes una única plataforma municipal o regional donde puedan comprar experiencias, visitar puntos de interés y reservar alojamiento.
        </p>

        <img src="/images/ira-comercializacion-y-promocion-de-destinos-ciudades-y-municipios.jpg" alt="Destinos Inteligentes" style="width: 100%; height: 350px; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: 3rem; box-shadow: 0 15px 30px rgba(0,0,0,0.08);">

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
             <img src="/images/plataforma-para-destinos-turisticos.jpg" alt="Marketplace" style="width: 100%; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Marketplace Local</h2>
            <p class="text-muted">Agrupa toda la oferta turística de tu territorio en un único motor de reservas institucional.</p>
          </div>
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
            <img src="/images/plataforma-smartciy-ayuntamientos.jpg" alt="Smart Cities" style="width: 100%; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Smart Destinations</h2>
            <p class="text-muted">Recopila datos de impacto, controla los flujos turísticos y moderniza tu Ayuntamiento.</p>
          </div>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
          <button class="btn btn-primary btn-lg" style="background: var(--text-main); color: var(--bg-secondary); padding: 1rem 2rem; border-radius: var(--radius-pill); font-weight: 600;">Ver Casos de Éxito</button>
        </div>
      </div>
    </div>
  `
})
export class DestinosComponent {}
