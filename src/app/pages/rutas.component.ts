import { Component } from '@angular/core';

@Component({
  selector: 'app-rutas',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Cultural Tours & Routes</div>
          <h1 class="prm-title">Gestor de <span class="text-gradient">Rutas y Visitas Guiadas</span></h1>
          <p class="prm-subtitle">
            Lidia con grandes volúmenes de grupos organizados de turistas fácilmente. Vende entradas online y valida sus códigos QR al instante.
          </p>
        </div>

        <!-- Bento Grid -->
        <div class="grid-silo-bento">
          <!-- Main Card -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/4461.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Route Planning</span>
              <h3>Organización de Grupos</h3>
              <p>Control de aforo por idiomas y franjas horarias. Gestión impecable de Free Tours.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Configurar rutas &rarr;</span>
              </div>
            </div>
          </div>

          <!-- Feature 1 -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/823.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Validación QR</h3>
              <p>Escaneo de tickets desde la app nativa en el punto de encuentro.</p>
              <span class="btn-minimal">Ver App &rarr;</span>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/741.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Puntos de Interés</h3>
              <p>Define paradas y geolocalización para tus rutas guiadas interactivas.</p>
              <span class="btn-minimal">Editar POIs &rarr;</span>
            </div>
          </div>

          <!-- Wide Card -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/motor-PMS-channelmanager-hotel.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Multi-language</span>
              <h3>Gestión de Guías Políglotas</h3>
              <p>Asigna guías automáticamente según el idioma de la reserva y la especialidad cultural.</p>
              <span class="btn-minimal">Personal &rarr;</span>
            </div>
          </div>
        </div>

        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>Guía a tus clientes al siglo XXI</h2>
          <p>Misterplan es la herramienta preferida por los guías oficiales de toda España.</p>
          <button class="prm-btn-primary">Empezar a guiar</button>
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
    .orb-2 { background: radial-gradient(circle, #ea580c, transparent); }
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
export class RutasComponent {}
