import { Component } from '@angular/core';

@Component({
  selector: 'app-novedades',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Latest Pulse</div>
          <h1 class="prm-title">Novedades y <span class="text-gradient">Blog de Misterplan</span></h1>
          <p class="prm-subtitle">
            Descubre las últimas actualizaciones de la plataforma, consejos de gestión turística y avances del sector tecnológico.
          </p>
        </div>

        <!-- News Bento Grid -->
        <div class="grid-news-bento">
          <!-- Main News Card -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/ayudas-junta-de-extremadura-y-union-europea.jpg')"></div>
            <div class="bento-overlay"></div>
            <div class="bento-content">
              <span class="bento-tag">Announcement</span>
              <h3>Subvenciones Europa 2026</h3>
              <p>Misterplan es agente digitalizador oficial. Descubre cómo conseguir hasta 12.000€ para modernizar tu infraestructura turística.</p>
              <div class="bento-footer">
                <span class="btn-minimal">Leer más &rarr;</span>
              </div>
            </div>
          </div>

          <!-- YouTube Video 1 -->
          <div class="bento-card group">
            <div class="video-preview-mini">
              <iframe src="https://www.youtube.com/embed/U8EGfukpchI?rel=0" allowfullscreen></iframe>
            </div>
            <div class="bento-content" style="padding-top: 0.5rem;">
               <span class="bento-tag">Misterplan TV</span>
               <h3>Diferenciación Real</h3>
               <p>¿Qué compra realmente tu cliente hoy en día?</p>
            </div>
          </div>

          <!-- YouTube Video 2 -->
          <div class="bento-card group">
            <div class="video-preview-mini">
              <iframe src="https://www.youtube.com/embed/biRr_YNo4wQ?rel=0" allowfullscreen></iframe>
            </div>
            <div class="bento-content" style="padding-top: 0.5rem;">
               <span class="bento-tag">Webinar</span>
               <h3>Tu arma secreta</h3>
               <p>Estrategias de venta directa que nadie te cuenta.</p>
            </div>
          </div>

          <!-- Wide Card -->
          <div class="bento-card bento-wide group">
             <div class="bento-img" style="background-image: url('/images/4484.jpg')"></div>
             <div class="bento-overlay"></div>

             <div class="bento-content">
               <span class="bento-tag">Update Log</span>
               <h3>Lanzamiento PMS 2026.04</h3>
               <p>Ya disponible la nueva versión con gestión de cabinas mejorada y motor de IA para predicción de demanda estacional.</p>
               <span class="btn-minimal">Ver changelog &rarr;</span>
             </div>
          </div>
        </div>

        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>No te pierdas ninguna actualización</h2>
          <p>Suscríbete a nuestra newsletter para estar al día de las últimas tendencias del sector.</p>
          <button class="prm-btn-primary">Suscribirme al Blog</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-news-bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(280px, auto);
      gap: 1.5rem;
      margin-top: 4rem;
    }

    .bento-lg { grid-column: span 2; grid-row: span 2; }
    .bento-wide { grid-column: span 2; }

    .video-preview-mini { height: 180px; position: relative; overflow: hidden; border-radius: 20px 20px 0 0; }
    .video-preview-mini iframe { position: absolute; width:100%; height:100%; border:0; }

    @media (max-width: 1100px) {
      .grid-news-bento { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 700px) {
      .grid-news-bento { grid-template-columns: 1fr; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
      .video-preview-mini { height: 220px; }
    }
  `]
})
export class NovedadesComponent {}
