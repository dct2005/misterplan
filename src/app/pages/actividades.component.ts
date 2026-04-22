import { Component } from '@angular/core';

@Component({
  selector: 'app-actividades',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Tourism Activities</div>
          <h1 class="prm-title">Gestión para <span class="text-gradient">Actividades Turísticas</span></h1>
          <p class="prm-subtitle">
            Controla los aforos, el personal y la distribución en las principales OTA del mundo desde un solo panel de control unificado.
          </p>
        </div>

        <!-- Bento Grid for Activities -->
        <div class="grid-actividades-bento">
          <!-- Main Hero Card -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/ira-software-para-gestion-de-actividades-turisticas.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">All-in-One</span>
              <h3>Software de Gestión Integral</h3>
              <p>La solución definitiva para digitalizar tu empresa de ocio. Reservas en tiempo real y asignación de guías automática.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Explorar módulos &rarr;</span>
              </div>
            </div>
          </div>

          <!-- Turismo Activo -->
          <a href="/turismo-activo" class="bento-card group decoration-none">
            <div class="bento-img" style="background-image: url('/images/motor-empresas-actividades-turisticas.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Turismo Activo</h3>
              <p>Multiaventura, kayak y alquiler de material.</p>
              <span class="btn-minimal">Saber más &rarr;</span>
            </div>
          </a>

          <!-- Barcos -->
          <a href="/barcos" class="bento-card group decoration-none">
            <div class="bento-img" style="background-image: url('/images/823.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Barcos y Charter</h3>
              <p>Gestión de flotas y venta por plazas.</p>
              <span class="btn-minimal">Ver flota &rarr;</span>
            </div>
          </a>

          <!-- Rutas -->
          <a href="/rutas" class="bento-card bento-wide group decoration-none">
            <div class="bento-img" style="background-image: url('/images/motor-turismo-activo.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Tours & Routes</span>
              <h3>Rutas y Visitas Guiadas</h3>
              <p>Optimiza tus Free Tours y rutas urbanas con control de aforo inmediato y confirmación vía SMS.</p>
              <span class="btn-minimal">Gestionar rutas &rarr;</span>
            </div>
          </a>
        </div>

        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>Digitaliza tu aventura hoy mismo</h2>
          <p>Misterplan es el motor que impulsa a las mejores empresas de actividades de España.</p>
          <button class="prm-btn-primary">Solicitar demo gratuita</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-actividades-bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 280px;
      gap: 1.5rem;
      margin-top: 4rem;
    }
    .orb-2 { background: radial-gradient(circle, #10b981, transparent); }

    .bento-lg { grid-column: span 2; grid-row: span 2; }
    .bento-wide { grid-column: span 2; }

    .decoration-none { text-decoration: none; }

    @media (max-width: 1100px) {
      .grid-actividades-bento { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 250px; }
    }
    @media (max-width: 700px) {
      .grid-actividades-bento { grid-template-columns: 1fr; grid-auto-rows: auto; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
      .bento-card { height: 350px; }
    }
  `]
})
export class ActividadesComponent {}
