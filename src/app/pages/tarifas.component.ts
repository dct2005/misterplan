import { Component } from '@angular/core';

@Component({
  selector: 'app-tarifas',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Revenue Management</div>
          <h1 class="prm-title">Gestión de <span class="text-gradient">Tarifas y Revenue</span></h1>
          <p class="prm-subtitle">
            Aplica estrategias de precios inteligentes y maximiza los ingresos de tus alojamientos en función de la ocupación real o fechas clave con nuestro motor automatizado.
          </p>
        </div>

        <!-- Bento Grid for Tarifas -->
        <div class="grid-tarifas-bento">
          <!-- Dynamic Pricing (Main Card) -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/channel-manager-para-hoteles-info.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">AI Powered</span>
              <h3>Precios Dinámicos</h3>
              <p>El motor inteligente ajusta las tarifas automáticamente basándose en la ocupación y demanda del mercado, optimizando tu rentabilidad 24/7.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Ver algoritmos &rarr;</span>
              </div>
            </div>
          </div>

          <!-- Sincronización -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/gestion-alojamiento-vacacional.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Sincronización OTA</h3>
              <p>Cambios instantáneos en Booking, Airbnb y Expedia. Cero disparidad de precios.</p>
              <span class="btn-minimal">Integraciones &rarr;</span>
            </div>
          </div>

          <!-- Yielding -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/4480.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Cálculo de Yielding</h3>
              <p>Analíticas de RevPAR, ADR y GOPPAR calculadas en tiempo real para tu dashboard.</p>
              <span class="btn-minimal">Ver informes &rarr;</span>
            </div>
          </div>

          <!-- Wide Card for Offers -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/pms-motor-channel-spa-hotel.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Marketing</span>
              <h3>Ofertas y Promociones</h3>
              <p>Crea campañas de última hora o reserva anticipada con códigos descuento exclusivos para tu venta directa.</p>
              <span class="btn-minimal">Crear campaña &rarr;</span>
            </div>
          </div>
        </div>

        <!-- Section 3: Value Prop -->
        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>Tu inventario, siempre al mejor precio</h2>
          <p>Misterplan te ayuda a vender cada habitación al precio óptimo en cada momento.</p>
          <button class="prm-btn-primary">Optimizar mis tarifas</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-tarifas-bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 280px;
      gap: 1.5rem;
      margin-top: 4rem;
    }
    .orb-2 { background: radial-gradient(circle, #f59e0b, transparent); }

    .bento-lg { grid-column: span 2; grid-row: span 2; }
    .bento-wide { grid-column: span 2; }

    @media (max-width: 1100px) {
      .grid-tarifas-bento { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 250px; }
    }
    @media (max-width: 700px) {
      .grid-tarifas-bento { grid-template-columns: 1fr; grid-auto-rows: auto; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
      .bento-card { height: 350px; }
    }
  `]
})
export class TarifasComponent {}
