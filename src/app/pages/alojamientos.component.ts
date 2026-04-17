import { Component } from '@angular/core';

@Component({
  selector: 'app-alojamientos',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 100px; padding-bottom: 80px;">
      <div class="container animate-fade-in-up">
        <!-- SEO friendly H1 specific for this Silo -->
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Software para Gestión de <span class="text-gradient">Hoteles y Alojamientos</span></h1>
        <p class="text-muted" style="font-size: 1.2rem; max-width: 700px; margin-bottom: 3rem;">
          Descubre el PMS y Channel Manager más completo del mercado. Sincroniza tus reservas de Booking, Expedia y Airbnb automáticamente y gestiona tu recepción desde la nube.
        </p>

        <img src="/images/ira-software-para-gestion-de-hoteles-y-alojamientos.jpg" alt="Gestión de Hoteles y Alojamientos" style="width: 100%; height: 350px; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: 3rem; box-shadow: 0 15px 30px rgba(0,0,0,0.08);">

        <h2 style="font-size: 2rem; margin-bottom: 2rem; font-weight: bold;">Soluciones Específicas</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <a href="/mrp-hotel" class="glass group" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary); text-decoration: none; color: inherit; display: block; transition: transform 0.3s ease;">
            <img src="/images/motor-PMS-channelmanager-hotel.jpg" alt="MRP Hotel" style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-main);">MRP-HOTEL</h2>
            <p class="text-muted">La solución completa en la nube para grandes hoteles y cadenas hoteleras. Control total desde facturación hasta limpieza.</p>
          </a>
          <a href="/mrp-spa" class="glass group" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary); text-decoration: none; color: inherit; display: block; transition: transform 0.3s ease;">
             <img src="/images/821.jpg" alt="Thermas & SPA" style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-main);">Thermas & SPA</h2>
            <p class="text-muted">Gestión avanzada de cabinas, terapeutas y bonos. Optimizado para balnearios y centros wellness.</p>
          </a>
          <a href="/mrp-casa-rural" class="glass group" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary); text-decoration: none; color: inherit; display: block; transition: transform 0.3s ease;">
            <img src="/images/741.jpg" alt="Casas Rurales" style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-main);">Casas Rurales</h2>
            <p class="text-muted">Sistema especializado para el alquiler completo o por habitaciones de casas rurales, masías y apartamentos vacacionales.</p>
          </a>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
          <button class="btn btn-primary btn-lg">Probar PMS Gratis</button>
        </div>
      </div>
    </div>
  `
})
export class AlojamientosComponent {}
