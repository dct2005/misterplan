import { Component } from '@angular/core';

@Component({
  selector: 'app-cerraduras',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Smart Access Control</div>
          <h1 class="prm-title">Cerraduras <span class="text-gradient">Inteligentes y Domótica</span></h1>
          <p class="prm-subtitle">
            Olvídate de las entregas físicas de llaves. Nuestro PMS se conecta a más de 30 fabricantes mundiales para emitir llaves digitales vinculadas a la reserva.
          </p>
        </div>

        <!-- Bento Grid for Cerraduras -->
        <div class="grid-cerraduras-bento">
          <!-- Apertura (Main Card) -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/plataforma-smartciy-ayuntamientos.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Contactless Access</span>
              <h3>Apertura Autónoma</h3>
              <p>Generación automática de códigos PIN o llaves Bluetooth para el huésped, validas solo durante su estancia.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Ver fabricantes &rarr;</span>
              </div>
            </div>
          </div>

          <!-- Limpieza -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/4480.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Control de Limpieza</h3>
              <p>Llaves maestras para personal con registro exacto de entrada y salida.</p>
              <span class="btn-minimal">Gestionar equipo &rarr;</span>
            </div>
          </div>

          <!-- Partners -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/ira-comercializacion-y-promocion-de-destinos-ciudades-y-municipios.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Certificación Oficial</h3>
              <p>Integración con Salto, Omnitec, Assa Abloy, Nuki, TTLock y ZKTeco.</p>
              <span class="btn-minimal">Saber más &rarr;</span>
            </div>
          </div>

          <!-- Wide Card for Energy -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/741.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Ahorro Energético</span>
              <h3>Desconexión Inteligente</h3>
              <p>Al hacer el check-out, el sistema corta automáticamente el suministro eléctrico o climatización si detecta que no hay nadie.</p>
              <span class="btn-minimal">Eficiencia &rarr;</span>
            </div>
          </div>
        </div>

        <!-- Section 3: Normativa -->
        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>Tu smartphone es la llave</h2>
          <p>Moderniza tu establecimiento y ofrece una experiencia de llegada totalmente autónoma y segura.</p>
          <button class="prm-btn-primary">Consultar compatibilidad</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-cerraduras-bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 280px;
      gap: 1.5rem;
      margin-top: 4rem;
    }
    .orb-2 { background: radial-gradient(circle, #8b5cf6, transparent); }

    .bento-lg { grid-column: span 2; grid-row: span 2; }
    .bento-wide { grid-column: span 2; }

    @media (max-width: 1100px) {
      .grid-cerraduras-bento { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 250px; }
    }
    @media (max-width: 700px) {
      .grid-cerraduras-bento { grid-template-columns: 1fr; grid-auto-rows: auto; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
      .bento-card { height: 350px; }
    }
  `]
})
export class CerradurasComponent {}
