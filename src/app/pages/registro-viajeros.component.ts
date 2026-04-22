import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-viajeros',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Compliance & Security</div>
          <h1 class="prm-title">Registro Legal de <span class="text-gradient">Viajeros y RD933</span></h1>
          <p class="prm-subtitle">
            Cumple impecablemente con la Ley de Seguridad Ciudadana y el reciente y severo Real Decreto 933/2021 sin esfuerzo manual. Fichas digitales en piloto automático.
          </p>
        </div>

        <!-- Bento Grid for Registro -->
        <div class="grid-registro-bento">
          <!-- Conexión Instituciones (Main Card) -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/ayudas-junta-de-extremadura-y-union-europea.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Cuerpos de Seguridad</span>
              <h3>Conexión Directa Policial</h3>
              <p>Misterplan envía automáticamente la información a Guardia Civil (Hospederías), Policía Nacional (Webpol), Mossos d'Esquadra y Ertzaintza.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Ver integraciones &rarr;</span>
              </div>
            </div>
          </div>

          <!-- RD933 -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/gestion-alojamiento-vacacional.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Adaptación RD933</h3>
              <p>Tranquilidad absoluta frente al Real Decreto. Reportamos medios de pago y parentescos automáticamente.</p>
              <span class="btn-minimal">Info Legal &rarr;</span>
            </div>
          </div>

          <!-- Archivo Cifrado -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/4480.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Archivo Cifrado</h3>
              <p>Custodia legal de firmas ológrafas durante 3 años con total seguridad y cifrado.</p>
              <span class="btn-minimal">Seguridad &rarr;</span>
            </div>
          </div>

          <!-- Wide Card for Mobile App -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/gestion-comercializacion-apartamento-turistico.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Firma Digital</span>
              <h3>Parte de Entrada Digital</h3>
              <p>Genera y firma los partes de entrada de forma 100% digital, eliminando el papel y los archivadores físicos.</p>
              <span class="btn-minimal">Probar ahora &rarr;</span>
            </div>
          </div>
        </div>

        <!-- Section 3: Normativa -->
        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>Evita sanciones y ahorra tiempo</h2>
          <p>Misterplan automatiza la burocracia para que tú solo te preocupes de dar la bienvenida a tus clientes.</p>
          <button class="prm-btn-primary">Configurar mi registro</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-registro-bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 280px;
      gap: 1.5rem;
      margin-top: 4rem;
    }
    .orb-2 { background: radial-gradient(circle, #3b82f6, transparent); }

    .bento-lg { grid-column: span 2; grid-row: span 2; }
    .bento-wide { grid-column: span 2; }

    @media (max-width: 1100px) {
      .grid-registro-bento { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 250px; }
    }
    @media (max-width: 700px) {
      .grid-registro-bento { grid-template-columns: 1fr; grid-auto-rows: auto; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
      .bento-card { height: 350px; }
    }
  `]
})
export class RegistroViajerosComponent {}
