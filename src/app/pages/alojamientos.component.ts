import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alojamientos',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">PMS & Channel Manager</div>
          <h1 class="prm-title">Soluciones para <span class="text-gradient">Todo Tipo de Alojamiento</span></h1>
          <p class="prm-subtitle">
            Desde hoteles de 5 estrellas hasta acogedoras casas rurales. El ecosistema Misterplan se adapta a la escala y necesidades únicas de tu establecimiento.
          </p>
        </div>

        <!-- Bento Grid for Alojamientos -->
        <div class="grid-alojamientos-bento">
          <!-- MRP-HOTEL (Main Card) -->
          <div class="bento-card bento-lg group" [routerLink]="['/mrp-hotel']">
            <div class="bento-img" style="background-image: url('/images/motor-PMS-channelmanager-hotel.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Hoteles 4* & 5*</span>
              <h3>MRP-HOTEL</h3>
              <p>La solución PMS premium para hoteles que requieren control absoluto de operaciones, facturación avanzada y limpieza.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Ver especificaciones &rarr;</span>
              </div>
            </div>
          </div>

          <!-- MRP-SUPERHOTEL (Hotels with SPA) -->
          <div class="bento-card group" [routerLink]="['/mrp-spa']">
            <div class="bento-img" style="background-image: url('/images/pms-motor-channel-spa-hotel.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>MRP-SUPERHOTEL</h3>
              <p>Diseñado para hoteles con SPA y servicios de resort integrados.</p>
              <span class="btn-minimal">Explorar &rarr;</span>
            </div>
          </div>

          <!-- MRP-CASA RURAL -->
          <div class="bento-card group" [routerLink]="['/mrp-casa-rural']">
            <div class="bento-img" style="background-image: url('/images/741.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>MRP-CASA RURAL</h3>
              <p>Sincronización total para el turismo rural y masías.</p>
              <span class="btn-minimal">Saber más &rarr;</span>
            </div>
          </div>

          <!-- Apartamentos Turísticos (Wide) -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/gestion-comercializacion-apartamento-turistico.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Urbano</span>
              <h3>Apartamentos Turísticos</h3>
              <p>Gestión eficiente de carteras de apartamentos multizona desde un único panel centralizado.</p>
              <span class="btn-minimal">Ver planes &rarr;</span>
            </div>
          </div>

          <!-- Alquiler Vacacional -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/gestion-alojamiento-vacacional.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Alquiler Vacacional</h3>
              <p>Potencia tus alquileres de corta estancia con reservas directas.</p>
              <span class="btn-minimal">Información &rarr;</span>
            </div>
          </div>

          <!-- Campings -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/4480.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Campings & Glamping</h3>
              <p>Gestión de parcelas, servicios comunes y control de estancias.</p>
              <span class="btn-minimal">Configurar &rarr;</span>
            </div>
          </div>

          <!-- Solo Channel Manager -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/channel-manager-para-hoteles-info.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Conectividad</span>
              <h3>Solo Channel Manager</h3>
              <p>¿Ya tienes PMS? Conecta tu hotel con más de 100 canales (Booking, Expedia, Airbnb) con la tecnología más rápida del mercado.</p>
              <span class="btn-minimal">Documentación &rarr;</span>
            </div>
          </div>
        </div>

        <!-- Section 3: Value Prop -->
        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>Todos tus canales, una sola señal</h2>
          <p>Misterplan unifica tu disponibilidad evitando el overbooking para que te centres en lo que importa: tus huéspedes.</p>
          <div style="display: flex; gap: 1rem; justify-content: center;">
            <button class="prm-btn-primary">Empezar ahora</button>
            <button class="prm-btn-text">Ver integraciones</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-alojamientos-bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 320px; /* Slight increase for parity with other bento grids */
      gap: 1.5rem;
      margin-top: 4rem;
    }
    .orb-2 { background: radial-gradient(circle, #00d4ff, transparent); }

    .bento-lg { grid-column: span 2; grid-row: span 2; }
    .bento-wide { grid-column: span 2; }

    @media (max-width: 1100px) {
      .grid-alojamientos-bento { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 250px; }
    }
    @media (max-width: 700px) {
      .grid-alojamientos-bento { grid-template-columns: 1fr; grid-auto-rows: auto; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
      .bento-card { height: 350px; }
    }
  `]
})
export class AlojamientosComponent {}
