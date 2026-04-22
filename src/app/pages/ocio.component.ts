import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ocio',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Cultura y Entretenimiento</div>
          <h1 class="prm-title">Ecosistema para <span class="text-gradient">Ocio y Espectáculos</span></h1>
          <p class="prm-subtitle">
            La plataforma definitiva para la gestión de aforos, venta de tickets y taquilla física. Desde museos icónicos hasta festivales multitudinarios.
          </p>
        </div>

        <!-- Bento Grid for Ocio Solutions -->
        <div class="grid-ocio-bento">
          <!-- MRP-MUSEUM (Large Card) -->
          <div class="bento-card bento-lg group overflow-hidden">
            <div class="bento-img" style="background-image: url('/images/software-tickets-entradas-museos.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Silo Museo</span>
              <h3>MRP-MUSEUM</h3>
              <p>Gestión integral de Museos: control de aforo por franjas horarias, validación de códigos QR y audioguías integradas.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Explorar módulo &rarr;</span>
              </div>
            </div>
          </div>

          <!-- MRP-CONCIERTOS -->
          <div class="bento-card group overflow-hidden">
            <div class="bento-img" style="background-image: url('/images/venta-de-ticket-entradas-para-conciertos.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>MRP-CONCIERTOS</h3>
              <p>Ticketing masivo para eventos musicales y festivales con sistema de preventa.</p>
              <span class="btn-minimal">Ver más &rarr;</span>
            </div>
          </div>

          <!-- Teatro, Cine y Espectáculos -->
          <div class="bento-card group overflow-hidden">
            <div class="bento-img" style="background-image: url('/images/software-entradas-cines-teatros.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Teatros y Cines</h3>
              <p>Asignación de butacas numeradas y gestión de taquilla física/online.</p>
              <span class="btn-minimal">Ver más &rarr;</span>
            </div>
          </div>

          <!-- MRP-BODEGAS (Wide Card) -->
          <div class="bento-card bento-wide group overflow-hidden">
            <div class="bento-img" style="background-image: url('/images/bodegas-vino-gestion-visitas.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Enoturismo</span>
              <h3>MRP-BODEGAS</h3>
              <p>Especializado en catas, visitas a viñedos y venta directa de producto vinculada a la experiencia turística.</p>
              <span class="btn-minimal">Saber más &rarr;</span>
            </div>
          </div>

          <!-- MRP-CASINO -->
          <div class="bento-card group overflow-hidden">
            <div class="bento-img" style="background-image: url('/images/software-gestion-comeracializacion-casinos.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>MRP-CASINO</h3>
              <p>Gestión de torneos, espectáculos en sala y reserva de mesas VIP.</p>
              <span class="btn-minimal">Ver más &rarr;</span>
            </div>
          </div>

          <!-- MRP-SPA -->
          <div class="bento-card group overflow-hidden" [routerLink]="['/mrp-spa']">
            <div class="bento-img" style="background-image: url('/images/reservar-spa-circuito-termal.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>MRP-SPA</h3>
              <p>Circuitos termales, gestión de cabinas y agendas de terapeutas.</p>
              <span class="btn-minimal">Ver más &rarr;</span>
            </div>
          </div>

          <!-- Visitas Guiadas -->
          <div class="bento-card group overflow-hidden" [routerLink]="['/rutas']">
            <div class="bento-img" style="background-image: url('/images/software-visitas-guiadas-guias.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Visitas Guiadas</h3>
              <p>Ideal para guías independientes y empresas de tours culturales.</p>
              <span class="btn-minimal">Ver más &rarr;</span>
            </div>
          </div>

          <!-- Restaurante -->
          <div class="bento-card group overflow-hidden">
            <div class="bento-img" style="background-image: url('/images/motor-de-reservas-para-reservar-mesa-en-restaurantes.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Restaurantes</h3>
              <p>Motor de reservas de mesa inteligente con gestión de turnos.</p>
              <span class="btn-minimal">Ver más &rarr;</span>
            </div>
          </div>

          <!-- Eventos y Congresos -->
          <div class="bento-card bento-lg group overflow-hidden">
            <div class="bento-img" style="background-image: url('/images/sistemas-para-inscripciones-de-jornadas-eventos-y-congresos.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Eventos y Congresos</h3>
              <p>Acreditaciones en tiempo real, gestión de ponentes y control de inscripciones profesionales.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Solicitar información &rarr;</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>¿Listo para digitalizar tu oferta de ocio?</h2>
          <p>Únete a cientos de recintos que ya optimizan sus ingresos con Misterplan.</p>
          <button class="prm-btn-primary">Solicitar Demo Personalizada</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-ocio-bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 280px;
      gap: 1.5rem;
      margin-top: 4rem;
    }
    .bento-lg { grid-column: span 2; grid-row: span 2; }
    .bento-wide { grid-column: span 2; }

    @media (max-width: 1200px) {
      .grid-ocio-bento { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 280px; }
    }
    @media (max-width: 768px) {
      .grid-ocio-bento { grid-template-columns: 1fr; grid-auto-rows: auto; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
      .bento-card { height: 400px; padding: 2rem; }
      .cta-banner-premium { padding: 4rem 2rem; }
      .cta-banner-premium h2 { font-size: 2rem; }
    }
  `]
})
export class OcioComponent {
}
