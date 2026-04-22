import { Component } from '@angular/core';

@Component({
  selector: 'app-aula',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Corporate Training</div>
          <h1 class="prm-title">Misterplan <span class="text-gradient">Aula Digital</span></h1>
          <p class="prm-subtitle">
            Descubre todo el potencial del software y acelera la curva de aprendizaje (onboarding) mediante nuestra plataforma interactiva de formación digital continua.
          </p>
        </div>

        <!-- Bento Grid for Aula -->
        <div class="grid-aula-bento">
          <!-- Videotutoriales (Main Card) -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/4461.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">On-Demand</span>
              <h3>Clips y Videotutoriales</h3>
              <p>Más de 200 vídeos en 4K detallando cada rincón de la plataforma. Resuelve dudas operativas en menos de 1 minuto.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Ir a la academia &rarr;</span>
              </div>
            </div>
          </div>

          <!-- Webinars -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/4484.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Webinars Semanales</h3>
              <p>Masterclass en vivo impartidas por consultores expertos en SEO y gestión turística.</p>
              <span class="btn-minimal">Ver calendario &rarr;</span>
            </div>
          </div>

          <!-- Gamificación -->
          <div class="bento-card group">
            <div class="bento-img" style="background-image: url('/images/823.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <h3>Gamificación Corporativa</h3>
              <p>Sistema de credenciales para tus empleados. Asegura que tu equipo domine el software.</p>
              <span class="btn-minimal">Saber más &rarr;</span>
            </div>
          </div>

          <!-- Wide Card for Success -->
          <div class="bento-card bento-wide group">
            <div class="bento-img" style="background-image: url('/images/ayudas-junta-de-extremadura-y-union-europea.jpg')"></div>
            <div class="bento-overlay"></div>

            <div class="bento-content">
              <span class="bento-tag">Customer Success</span>
              <h3>Onboarding Impecable</h3>
              <p>Reducimos el tiempo de aprendizaje de tus nuevos recepcionistas hasta en un 60% gracias a nuestra metodología de Aula.</p>
              <span class="btn-minimal">Probar ahora &rarr;</span>
            </div>
          </div>
        </div>

        <!-- Section 3: Normativa -->
        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>El conocimiento es rentabilidad</h2>
          <p>Un equipo formado es un equipo eficiente. Accede hoy mismo al Aula Misterplan.</p>
          <button class="prm-btn-primary">Acceder al Aula</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-aula-bento {
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
      .grid-aula-bento { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 250px; }
    }
    @media (max-width: 700px) {
      .grid-aula-bento { grid-template-columns: 1fr; grid-auto-rows: auto; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
      .bento-card { height: 350px; }
    }
  `]
})
export class AulaComponent {}
