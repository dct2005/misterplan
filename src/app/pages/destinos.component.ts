import { Component } from '@angular/core';

@Component({
  selector: 'app-destinos',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Smart Destinations</div>
          <h1 class="prm-title">Digitalización para <span class="text-gradient">Municipios e Instituciones</span></h1>
          <p class="prm-subtitle">
            Transforma tu territorio en un Destino Inteligente. Unifica la oferta local de hoteles, actividades y museos bajo una única marca institucional.
          </p>
        </div>

        <!-- Bento Grid for Destinos -->
        <div class="grid-destinos-bento">
          <!-- Marketplace Local -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/plataforma-para-destinos-turisticos.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">E-Commerce Público</span>
              <h3>Marketplace de Destino</h3>
              <p>Centraliza las reservas de todos los empresarios locales en un portal único, aumentando la visibilidad y las ventas del municipio.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Ver funcionamiento &rarr;</span>
              </div>
            </div>
          </div>

          <!-- Smart City -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/plataforma-smartciy-ayuntamientos.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>SmartCity Admin</h3>
              <p>Panel de control para ayuntamientos con analíticas de flujos turísticos y Big Data.</p>
              <span class="btn-minimal">Explorar &rarr;</span>
            </div>
          </div>

          <!-- Travel Card -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/741.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Tourist Travel Card</h3>
              <p>Tarjetas físicas o digitales que agrupan entradas a museos y transporte local.</p>
              <span class="btn-minimal">Saber más &rarr;</span>
            </div>
          </div>

          <!-- SEO & Promotion -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/ira-comercializacion-y-promocion-de-destinos-ciudades-y-municipios.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Marketing</span>
              <h3>Promoción Estratégica</h3>
              <p>Herramientas de marketing automatizado y CRM para fidelizar a los visitantes del destino.</p>
              <span class="btn-minimal">Planificar campaña &rarr;</span>
            </div>
          </div>
        </div>

        <!-- Section 3: Normativa -->
        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>Moderniza tu Ayuntamiento hoy mismo</h2>
          <p>Misterplan es el socio tecnológico para los destinos que quieren liderar la era digital del turismo.</p>
          <button class="prm-btn-primary">Contactar con un experto</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-destinos-bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 280px;
      gap: 1.5rem;
      margin-top: 4rem;
    }
    .orb-2 { background: radial-gradient(circle, #7000ff, transparent); }

    .bento-lg { grid-column: span 2; grid-row: span 2; }
    .bento-wide { grid-column: span 2; }

    @media (max-width: 1100px) {
      .grid-destinos-bento { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 250px; }
    }
    @media (max-width: 700px) {
      .grid-destinos-bento { grid-template-columns: 1fr; grid-auto-rows: auto; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
      .bento-card { height: 350px; }
    }
  `]
})
export class DestinosComponent {}
