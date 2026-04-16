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

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
            <img src="/images/motor-PMS-channelmanager-hotel.jpg" alt="PMS Hotelero" style="width: 100%; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">PMS Hotelero</h2>
            <p class="text-muted">Gestión de check-in / check-out, facturación, limpieza y envíos automáticos a la policía (Registro de viajeros).</p>
          </div>
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
             <img src="/images/gestion-comercializacion-apartamento-turistico.jpg" alt="Motor de Reservas" style="width: 100%; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Motor de Reservas Integrado</h2>
            <p class="text-muted">Evita las altas comisiones de las OTA vendiendo directamente en tu propia página web con un motor optimizado.</p>
          </div>
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
            <img src="/images/channel-manager-para-hoteles-info.jpg" alt="Channel Manager" style="width: 100%; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Channel Manager</h2>
            <p class="text-muted">Conecta tu calendario con todas las plataformas del mercado en tiempo real, bloqueando la disponibilidad al instante.</p>
          </div>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
          <button class="btn btn-primary btn-lg">Probar PMS Gratis</button>
        </div>
      </div>
    </div>
  `
})
export class AlojamientosComponent {}
