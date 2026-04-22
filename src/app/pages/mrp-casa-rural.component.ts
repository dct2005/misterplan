import { Component } from '@angular/core';

@Component({
  selector: 'app-mrp-casa-rural',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Rural Accommodations</div>
          <h1 class="prm-title">Casas y Masías <span class="text-gradient">Motor Casa Rural</span></h1>
          <p class="prm-subtitle">
            Sistema hiper-especializado para el alquiler íntegro. Conecta con EscapadaRural, Airbnb y Booking al instante sin miedos.
          </p>
        </div>

        <!-- Bento Grid -->
        <div class="grid-silo-bento">
          <!-- Main Card -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/741.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Full-House Management</span>
              <h3>Reglas de Alquiler Íntegro</h3>
              <p>Tu casa se alquila entera. Configura estancias mínimas por temporadas o añade suplementos por leña y mascotas.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Configurar reglas &rarr;</span>
              </div>
            </div>
          </div>

          <!-- Feature 1 -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/gestion-comercializacion-apartamento-turistico.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Sincronización iCal/API</h3>
              <p>Conexión directa con EscapadaRural, Rentalia y portales rurales clave. Adiós al overbooking.</p>
              <span class="btn-minimal">Integrar &rarr;</span>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/channel-manager-para-hoteles-info.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Partes de Viajeros</h3>
              <p>Generación y firma digital de los partes para Guardia Civil desde el propio alojamiento rural.</p>
              <span class="btn-minimal">Legal &rarr;</span>
            </div>
          </div>

          <!-- Wide Card -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/4480.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Maintenance</span>
              <h3>Control de Limpiezas Semanales</h3>
              <p>Organiza los turnos de limpieza entre entradas y salidas consecutivas de forma visual y coordinada.</p>
              <span class="btn-minimal">Gestionar &rarr;</span>
            </div>
          </div>
        </div>

        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>La paz del campo, la potencia de la nube</h2>
          <p>Misterplan es el software que moderniza el sector rural con elegancia y robustez tecnológica.</p>
          <button class="prm-btn-primary">Ver demo rural</button>
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
    .orb-2 { background: radial-gradient(circle, #84cc16, transparent); }
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
export class MrpCasaRuralComponent {}
