import { Component } from '@angular/core';

@Component({
  selector: 'app-verifactu',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Anti-Fraud Compliance</div>
          <h1 class="prm-title">Normativa <span class="text-gradient">VeriFactu / TicketBAI</span></h1>
          <p class="prm-subtitle">
            El blindaje anti-fraude definitivo exigido por el gobierno de España y las Diputaciones Forales, transparentemente integrado en el corazón de todas tus transacciones.
          </p>
        </div>

        <!-- Bento Grid for VeriFactu -->
        <div class="grid-verifactu-bento">
          <!-- Certificación (Main Card) -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/4484.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">AEAT Oficial</span>
              <h3>Certificación Verifactu</h3>
              <p>Misterplan asegura que cada factura sea inalterable, garantizando la perfecta integridad y trazabilidad estricta exigida para 2025.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Ver especificaciones &rarr;</span>
              </div>
            </div>
          </div>

          <!-- TicketBAI -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/ira-comercializacion-y-promocion-de-destinos-ciudades-y-municipios.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>TicketBAI & Navarra</h3>
              <p>Inyección directa de códigos TBAI y QR sobre cada documento emitido al público en el País Vasco.</p>
              <span class="btn-minimal">Configurar &rarr;</span>
            </div>
          </div>

          <!-- Automatización -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/channel-manager-para-hoteles-info.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Fácil para tu Asesor</h3>
              <p>Reducción de horas de asesoría. Exportación nativa para A3, Sage y Contraplus con un clic.</p>
              <span class="btn-minimal">Ver formatos &rarr;</span>
            </div>
          </div>

          <!-- Wide Card for B2B -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/ira-software-para-gestion-de-actividades-turisticas.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Security First</span>
              <h3>Garantía de Inalterabilidad</h3>
              <p>Nuestra arquitectura en la nube garantiza que los registros de facturación no puedan ser borrados ni modificados, cumpliendo la Ley 11/2021.</p>
              <span class="btn-minimal">Auditoría &rarr;</span>
            </div>
          </div>
        </div>

        <!-- Section 3: Normativa -->
        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>Prepárate para la nueva era fiscal</h2>
          <p>Misterplan es el software certificado que te da la tranquilidad que tu negocio necesita frente a Hacienda.</p>
          <button class="prm-btn-primary">Saber más sobre VeriFactu</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-verifactu-bento {
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
      .grid-verifactu-bento { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 250px; }
    }
    @media (max-width: 700px) {
      .grid-verifactu-bento { grid-template-columns: 1fr; grid-auto-rows: auto; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
      .bento-card { height: 350px; }
    }
  `]
})
export class VerifactuComponent {}
