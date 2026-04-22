import { Component } from '@angular/core';

@Component({
  selector: 'app-mrp-hotel',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Hotel Chains & Luxury Hotels</div>
          <h1 class="prm-title">Cadenas y Hoteles <span class="text-gradient">Motor MRP-HOTEL</span></h1>
          <p class="prm-subtitle">
            Descubre un entorno de recepción digitalizado. Organiza tu Front Desk, sincroniza el Housekeeping y gestiona facturas grupales sin fricción.
          </p>
        </div>

        <!-- Bento Grid -->
        <div class="grid-silo-bento">
          <!-- Main Card -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/motor-PMS-channelmanager-hotel.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Advanced FrontDesk</span>
              <h3>Panel de Recepción Pro</h3>
              <p>Plano de habitaciones interactivo tipo calendario vectorial. Check-in y check-out ultrarrápidos.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Ver Panel &rarr;</span>
              </div>
            </div>
          </div>

          <!-- Feature 1 -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/740.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Housekeeping App</h3>
              <p>Sincronización en tiempo real de camareras de piso. Aviso instantáneo de habitación lista.</p>
              <span class="btn-minimal">Ver App &rarr;</span>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/821.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Arqueo y Facturación</h3>
              <p>Gestión de folios, facturación grupal y arqueos de caja por recepcionista.</p>
              <span class="btn-minimal">Contabilidad &rarr;</span>
            </div>
          </div>

          <!-- Wide Card -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/channel-manager-para-hoteles-info.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Channel Synergy</span>
              <h3>Integración con Channel Manager</h3>
              <p>Sincronización bidireccional perfecta con Booking, Expedia y Airbnb. Cero overbooking garantizado.</p>
              <span class="btn-minimal">Conectarcanales &rarr;</span>
            </div>
          </div>
        </div>

        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>¿Listo para escalar tu hotel?</h2>
          <p>Misterplan es el ecosistema donde los hoteles crecen de forma inteligente y segura.</p>
          <button class="prm-btn-primary">Solicitar Auditoría</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-silo-bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 280px;
      gap: 1.5rem;
      margin-top: 4rem;
    }
    .orb-2 { background: radial-gradient(circle, #6366f1, transparent); }
    .bento-lg { grid-column: span 2; grid-row: span 2; }
    .bento-wide { grid-column: span 2; }

    @media (max-width: 1100px) {
      .grid-silo-bento { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 250px; }
    }
    @media (max-width: 700px) {
      .grid-silo-bento { grid-template-columns: 1fr; grid-auto-rows: auto; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
      .bento-card { height: 350px; }
    }
  `]
})
export class MrpHotelComponent {}
