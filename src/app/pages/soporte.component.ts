import { Component } from '@angular/core';

@Component({
  selector: 'app-soporte',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Customer Support</div>
          <h1 class="prm-title">Centro de <span class="text-gradient">Soporte y Ayuda</span></h1>
          <p class="prm-subtitle">
            Estamos aquí para impulsarte. Accede a herramientas de asistencia remota, manuales y atención técnica directa.
          </p>
        </div>

        <div class="grid-soporte-bento">
          <!-- Windows Card -->
          <div class="bento-card group">

            <div class="bento-content">
              <span class="bento-tag">Windows OS</span>
              <h3>Soporte Remoto Windows</h3>
              <p>Descarga TeamViewer QuickSupport para asistencia inmediata de nuestros técnicos.</p>
              <div class="bento-footer">
                <a href="https://www.reservaonline.support/temp/TeamViewerQS.exe" target="_blank" class="prm-btn-primary" style="width: 100%; text-align: center; text-decoration: none; border: none; cursor: pointer;">Descargar (.exe)</a>
              </div>
            </div>
          </div>

          <!-- Mac Card -->
          <div class="bento-card group">

            <div class="bento-content">
              <span class="bento-tag">macOS</span>
              <h3>Soporte Remoto Mac</h3>
              <p>Software optimizado para entorno Mac para una conexión segura con el equipo técnico.</p>
              <div class="bento-footer">
                 <a href="https://download.teamviewer.com/download/version_13x/TeamViewerQS.dmg" target="_blank" class="prm-btn-primary" style="width: 100%; text-align: center; text-decoration: none; background: #333; border: none; cursor: pointer;">Descargar (.dmg)</a>
              </div>
            </div>
          </div>

          <!-- Documentation Wide -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/registro-viajeros-misterplan.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Self-Service</span>
              <h3>Centro de Conocimiento</h3>
              <p>Resuelve tus dudas al instante con nuestros manuales detallados sobre Channel Manager, Motor de Reservas y PMS.</p>
              <a href="/tutoriales" class="btn-minimal">Ver Artículos &rarr;</a>
            </div>
          </div>

          <!-- Direct Help Large -->
          <div class="bento-card bento-lg group">
            <div class="bento-content text-center" style="display: flex; flex-direction: column; justify-content: center; height: 100%;">
              <span class="bento-tag mx-auto">Urgent Assistance</span>
              <h3>¿Necesitas ayuda inmediata?</h3>
              <p>Llámanos a nuestro número de soporte centralizado disponible de Lunes a Viernes.</p>
              <div class="phone-display mt-4">
                <a href="tel:+34902100200">+34 902 100 200</a>
              </div>
              <p class="mt-3" style="font-size: 0.8rem; opacity: 0.6;">* El coste de la llamada depende de su operador habitual.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .grid-soporte-bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(280px, auto);
      gap: 1.5rem;
      margin-top: 4rem;
    }
    .orb-2 { background: radial-gradient(circle, #ef4444, transparent); }
    .bento-lg { grid-column: span 2; grid-row: span 2; }
    .bento-wide { grid-column: span 2; }
    .mx-auto { margin-left: auto; margin-right: auto; }

    .phone-display { font-size: 2.5rem; font-weight: 800; letter-spacing: -2px; }
    .phone-display a { color: var(--primary-color); text-decoration: none; }

    @media (max-width: 1100px) {
      .grid-soporte-bento { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 700px) {
      .grid-soporte-bento { grid-template-columns: 1fr; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
      .phone-display { font-size: 1.8rem; }
    }
  `]
})
export class SoporteComponent {}
