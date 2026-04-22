import { Component } from '@angular/core';

@Component({
  selector: 'app-tutoriales',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Misterplan Academy</div>
          <h1 class="prm-title">Centro de <span class="text-gradient">Formación y Ayuda</span></h1>
          <p class="prm-subtitle">
            Domina cada herramienta de Misterplan con nuestros videotutoriales paso a paso y guías de configuración experta.
          </p>
        </div>

        <!-- Video Bento Grid -->
        <div class="grid-video-bento">
          <!-- Main Tutorial -->
          <div class="bento-card bento-lg group">
            <div class="video-container">
              <iframe src="https://www.youtube.com/embed/qLNCGgIAdss?rel=0" allowfullscreen></iframe>
            </div>
            <div class="bento-content">
              <span class="bento-tag">Featured</span>
              <h3>Check-in con MIDNI</h3>
              <p>Aprende a automatizar la identificación de huéspedes cumpliendo la normativa española vigente de forma 100% digital.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Ver tutorial completo &rarr;</span>
              </div>
            </div>
          </div>

          <!-- Secondary Video 1 -->
          <div class="bento-card group">
            <div class="video-container small">
              <iframe src="https://www.youtube.com/embed/PIC-rZ-4Ecs?rel=0" allowfullscreen></iframe>
            </div>
            <div class="bento-content">
              <h3>Manual Verifactu</h3>
              <p>Cumple con la nueva ley de facturación electrónica sin complicaciones técnicas.</p>
            </div>
          </div>

          <!-- Secondary Video 2 -->
          <div class="bento-card group">
            <div class="video-container small">
              <iframe src="https://www.youtube.com/embed/yEqGlYaQEZc?rel=0" allowfullscreen></iframe>
            </div>
            <div class="bento-content">
              <h3>Carga de Grupos</h3>
              <p>Optimiza la entrada masiva de viajeros en albergues y grandes grupos estacionales.</p>
            </div>
          </div>

          <!-- Resources Wide -->
          <div class="bento-card bento-wide group">
             <div class="bento-img" style="background-image: url('/images/aula-misterplan-formacion.jpg')"></div>
             <div class="bento-overlay"></div>

             <div class="bento-content">
               <span class="bento-tag">Full Guide</span>
               <h3>Documentación Completa</h3>
               <p>Accede a nuestro manual interactivo con más de 200 artículos detallados sobre gestión hotelera y actividades.</p>
               <span class="btn-minimal">Abrir Help Center &rarr;</span>
             </div>
          </div>
        </div>

        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>¿Necesitas formación personalizada?</h2>
          <p>Organizamos webinars semanales gratuitos para que nunca dejes de optimizar tu negocio.</p>
          <button class="prm-btn-primary">Ver Agenda de Webinars</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-video-bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(280px, auto);
      gap: 1.5rem;
      margin-top: 4rem;
    }
    .orb-2 { background: radial-gradient(circle, #f97316, transparent); }
    .bento-lg { grid-column: span 2; grid-row: span 2; }
    .bento-wide { grid-column: span 2; }

    .video-container { position: relative; height: 350px; background: #000; overflow: hidden; border-radius: 20px 20px 0 0; }
    .video-container.small { height: 180px; }
    .video-container iframe { position: absolute; width: 100%; height: 100%; border: 0; }

    @media (max-width: 1100px) {
      .grid-video-bento { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 700px) {
      .grid-video-bento { grid-template-columns: 1fr; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
      .video-container { height: 250px; }
    }
  `]
})
export class TutorialesComponent {}
