import { Component } from '@angular/core';

@Component({
  selector: 'app-turismo-activo',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Adventure & Sports</div>
          <h1 class="prm-title">Multiaventura y <span class="text-gradient">Turismo Activo</span></h1>
          <p class="prm-subtitle">
            Aumenta la seguridad y rentabilidad de tu empresa. Gestiona turnos de barranquismo, kayak o alquiler de equipo cerrando ventas las 24h.
          </p>
        </div>

        <!-- Bento Grid for Turismo Activo -->
        <div class="grid-silo-bento">
          <!-- Main Card -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/motor-turismo-activo.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Active Control</span>
              <h3>Gestión de Cupos Experto</h3>
              <p>Configura reglas que ligan tickets con disponibilidad física. Si solo tienes 10 cascos, las ventas paran solas al llegar al límite.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Ver inventario &rarr;</span>
              </div>
            </div>
          </div>

          <!-- Feature 1 -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/ira-software-para-gestion-de-actividades-turisticas.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Cuadrante de Guías</h3>
              <p>Visión gráfica para asignar personal de manera dinámica a cada salida programada.</p>
              <span class="btn-minimal">Asignar &rarr;</span>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/motor-empresas-actividades-turisticas.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Seguros y Descargos</h3>
              <p>Firma digital de descargos de responsabilidad desde el móvil del cliente antes del inicio.</p>
              <span class="btn-minimal">Info Legal &rarr;</span>
            </div>
          </div>

          <!-- Wide Card -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/4480.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Rental Management</span>
              <h3>Alquiler de Material Técnico</h3>
              <p>Controla las entregas y devoluciones de bicicletas, neoprenos o material de esquí con códigos de barras.</p>
              <span class="btn-minimal">Gestionar Material &rarr;</span>
            </div>
          </div>
        </div>

        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>Lleva tu aventura al siguiente nivel</h2>
          <p>Misterplan es el partner tecnológico de las empresas de turismo activo líderes en el sector.</p>
          <button class="prm-btn-primary">Empezar ahora</button>
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
    .orb-2 { background: radial-gradient(circle, #059669, transparent); }
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
export class TurismoActivoComponent {}
