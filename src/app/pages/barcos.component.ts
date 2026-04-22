import { Component } from '@angular/core';

@Component({
  selector: 'app-barcos',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Maritime & Charter</div>
          <h1 class="prm-title">Charter Naval y <span class="text-gradient">Excursiones en Barco</span></h1>
          <p class="prm-subtitle">
            Comercializa las plazas de tu flota o patronea charter de lujo con total control de la tripulación en el puerto, optimizando cada amarre.
          </p>
        </div>

        <!-- Bento Grid -->
        <div class="grid-silo-bento">
          <!-- Main Card -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/823.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Fleet Manager</span>
              <h3>Gestión de Flotas</h3>
              <p>Control de disponibilidad por plazas individuales o alquiler de barco completo (Charter).</p>
              <div class="bento-footer">
                <span class="btn-minimal">Configurar flota &rarr;</span>
              </div>
            </div>
          </div>

          <!-- Feature 1 -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/motor-turismo-activo.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Control de Tripulación</h3>
              <p>Asignación de patrones y personal de servicio a cada salida programada.</p>
              <span class="btn-minimal">Personal &rarr;</span>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/pms-motor-channel-spa-hotel.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Servicios a Bordo</h3>
              <p>Upselling de catering, bebidas y material de snorkel durante la reserva.</p>
              <span class="btn-minimal">Upselling &rarr;</span>
            </div>
          </div>

          <!-- Wide Card -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/motor-empresas-actividades-turisticas.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Port Operations</span>
              <h3>Gestión de Amarres</h3>
              <p>Sincronización con las operadoras del puerto para optimizar tiempos de escala y limpieza.</p>
              <span class="btn-minimal">Logística &rarr;</span>
            </div>
          </div>
        </div>

        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>Navega hacia la rentabilidad</h2>
          <p>Misterplan es el timón que guía tu negocio náutico hacia el éxito digital.</p>
          <button class="prm-btn-primary">Solicitar asesoría naval</button>
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
    .orb-2 { background: radial-gradient(circle, #0284c7, transparent); }
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
export class BarcosComponent {}
