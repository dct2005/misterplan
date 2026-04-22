import { Component } from '@angular/core';

@Component({
  selector: 'app-especial-checkin',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Reception Excellence</div>
          <h1 class="prm-title">Especial <span class="text-gradient">Check-in Digital</span></h1>
          <p class="prm-subtitle">
            Agiliza la recepción de tus huéspedes con nuestro sistema avanzado de autofirma y kioskos digitales. Menos colas, máxima satisfacción y total integración legal.
          </p>
        </div>

        <!-- Bento Grid for Check-in -->
        <div class="grid-checkin-bento">
          <!-- Check-in Online (Main Card) -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/motor-PMS-channelmanager-hotel.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Customer Experience</span>
              <h3>Check-in Online Automático</h3>
              <p>Envía un enlace seguro 24h antes para que el cliente rellene sus datos, suba su DNI y firme desde su smartphone, acortando la espera en el lobby.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Ver proceso &rarr;</span>
              </div>
            </div>
          </div>

          <!-- Kiosko -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/pms-motor-channel-spa-hotel.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Kiosko Auto Check-in</h3>
              <p>Terminales táctiles en el lobby para dispensación de llaves automática.</p>
              <span class="btn-minimal">Explorar hardware &rarr;</span>
            </div>
          </div>

          <!-- Escáner -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/741.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Escáner de Documentos</h3>
              <p>Escáner óptico OCR para mostrador de recepción física.</p>
              <span class="btn-minimal">Saber más &rarr;</span>
            </div>
          </div>

          <!-- Wide Card for Mobile App -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/4461.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">App Mobile</span>
              <h3>Misterplan Mobile Reception</h3>
              <p>Gestiona las entradas y salidas desde cualquier lugar del hotel con nuestra app nativa para recepcionistas.</p>
              <span class="btn-minimal">Descargar App &rarr;</span>
            </div>
          </div>
        </div>

        <!-- Section 3: Normativa -->
        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>Elimina el papel de tu recepción</h2>
          <p>Misterplan digitaliza cada paso del contacto con el cliente para una operativa eficiente y moderna.</p>
          <button class="prm-btn-primary">Solicitar demostración</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-checkin-bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 280px;
      gap: 1.5rem;
      margin-top: 4rem;
    }
    .orb-2 { background: radial-gradient(circle, #00ff88, transparent); }

    .bento-lg { grid-column: span 2; grid-row: span 2; }
    .bento-wide { grid-column: span 2; }

    @media (max-width: 1100px) {
      .grid-checkin-bento { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 250px; }
    }
    @media (max-width: 700px) {
      .grid-checkin-bento { grid-template-columns: 1fr; grid-auto-rows: auto; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
      .bento-card { height: 350px; }
    }
  `]
})
export class EspecialCheckinComponent {}
