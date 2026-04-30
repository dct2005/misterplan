import { Component } from '@angular/core';

@Component({
  selector: 'app-valoraciones',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Customer Stories</div>
          <h1 class="prm-title">Opiniones y <span class="text-gradient">Casos de Éxito</span></h1>
          <p class="prm-subtitle">
            Más de 5,000 profesionales del turismo confían en la robustez y elegancia de Misterplan para sus negocios.
          </p>
        </div>

        <div class="grid-valoraciones-bento">
          <!-- Featured Quote -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/16-razones-para-elegir-misterplan-pequeno-hotel.jpg')"></div>
            <div class="bento-overlay"></div>
            <div class="bento-content">
              <div class="stars mb-3">⭐⭐⭐⭐⭐</div>
              <h3 style="font-size: 2rem;">"La unificación que necesitábamos"</h3>
              <p style="font-size: 1.2rem;">Desde que usamos Misterplan, los overbookings son cosa del pasado. Es el motor más fiable del mercado español.</p>
              <div class="mt-4" style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 50px; height: 50px; border-radius: 50%; background: #ccc;"></div>
                <div>
                  <h4 style="margin: 0; font-size: 1rem;">Gerencia Hotelera</h4>
                  <p style="margin: 0; font-size: 0.8rem; opacity: 0.7;">Hotel Boutique Cantabria</p>     
                </div>
              </div>
            </div>
          </div>

          <!-- Short Testimonial 1 -->
          <div class="bento-card group">
            <div class="bento-content">
              <div class="stars mb-2">⭐⭐⭐⭐⭐</div>
              <h3>"Soporte 10"</h3>
              <p>Tener un equipo técnico que entiende de verdad el turismo es lo que marca la diferencia.</p>
              <small class="mt-auto block" style="opacity: 0.6;">Empresa de Multiaventura</small>
            </div>
          </div>

          <!-- Short Testimonial 2 -->
          <div class="bento-card group">
            <div class="bento-content">
              <div class="stars mb-2">⭐⭐⭐⭐⭐</div>
              <h3>"Rapidez en Taquilla"</h3>
              <p>La validación de códigos QR ha agilizado la entrada a nuestro museo de forma espectacular.</p>
              <small class="mt-auto block" style="opacity: 0.6;">Gestor Cultural</small>
            </div>
          </div>

          <!-- Image Card -->
          <div class="bento-card bento-wide group">
             <div class="bento-img" style="background-image: url('/images/4480.jpg')"></div>
             <div class="bento-overlay"></div>
             <div class="bento-content">
               <h3>Innovación Continua</h3>
               <p>Únete a la comunidad de alojamientos y empresas de ocio más avanzada tecnológicamente.</p>
             </div>
          </div>
        </div>

        <div class="cta-banner-premium mt-5 animate-fade-in-up">
          <h2>Tu éxito es nuestra mayor garantía</h2>
          <p>Queremos que seas nuestra próxima historia de éxito.</p>
          <button class="prm-btn-primary">Empezar a Escalar</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-valoraciones-bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(280px, auto);
      gap: 1.5rem;
      margin-top: 4rem;
    }
    .orb-2 { background: radial-gradient(circle, #fcd34d, transparent); }
    .bento-lg { grid-column: span 2; grid-row: span 2; }
    .bento-wide { grid-column: span 2; }
    .stars { color: #fbbf24; font-size: 1.2rem; }
    .block { display: block; }

    @media (max-width: 1100px) {
      .grid-valoraciones-bento { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 700px) {
      .grid-valoraciones-bento { grid-template-columns: 1fr; }
      .bento-lg, .bento-wide { grid-column: span 1; grid-row: span 1; }
    }
  `]
})
export class ValoracionesComponent {}
