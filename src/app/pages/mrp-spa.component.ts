import { Component } from '@angular/core';

@Component({
  selector: 'app-mrp-spa',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Wellness & Health Centers</div>
          <h1 class="prm-title">Balnearios y <span class="text-gradient">Motor Thermas & SPA</span></h1>
          <p class="prm-subtitle">
            Optimiza el control de tus cabinas, automatiza la asignación de terapeutas y eleva tu ticket medio vendiendo pases directamente online.
          </p>
        </div>

        <!-- Bento Grid -->
        <div class="grid-silo-bento">
          <!-- Main Card -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/pms-motor-channel-spa-hotel.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Resource Excellence</span>
              <h3>Agendas Multi-Recurso</h3>
              <p>Algoritmos que ligan terapeutas, cabinas específicas y stock de productos de belleza a cada reserva.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Ver Agendas &rarr;</span>
              </div>
            </div>
          </div>

          <!-- Feature 1 -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/ira-software-para-gestion-de-hoteles-y-alojamientos.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Aforo de Piscinas</h3>
              <p>Ventas de pases de 2h asegurando nunca sobrepasar la legalidad del aforo termal.</p>
              <span class="btn-minimal">Piscina &rarr;</span>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/821.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Bonos y Cheques Regalo</h3>
              <p>Genera ingresos recurrentes vendiendo experiencias wellness para regalar con diseño premium.</p>
              <span class="btn-minimal">Ver Bonos &rarr;</span>
            </div>
          </div>

          <!-- Wide Card -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/740.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Analytics</span>
              <h3>Rentabilidad por Cabina</h3>
              <p>Informes detallados sobre el uso y rendimiento de cada sala y cada tratamiento de tu spa.</p>
              <span class="btn-minimal">Informes &rarr;</span>
            </div>
          </div>
        </div>

        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>Relajación para tus clientes, control para ti</h2>
          <p>Misterplan es el software zen que pone orden en el complejo mundo de los balnearios.</p>
          <button class="prm-btn-primary">Digitalizar mi Spa</button>
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
    .orb-2 { background: radial-gradient(circle, #06b6d4, transparent); }
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
export class MrpSpaComponent {}
