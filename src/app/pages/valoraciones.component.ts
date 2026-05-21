import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-valoraciones',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px; background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);">
      <div class="container animate-fade-in-up">
        
        <!-- Hero Header -->
        <div class="text-center mb-5 max-w-3xl mx-auto">
          <span class="badge" style="display: inline-block; padding: 6px 14px; background: rgba(249, 129, 0, 0.1); color: var(--primary-color); border-radius: 999px; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Customer Stories</span>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.02em; color: var(--secondary-color);">Opiniones y Casos de Éxito</h1>
          <p class="text-muted" style="font-size: 1.2rem; line-height: 1.7;">
            Más de 5.000 profesionales del alojamiento y el ocio confían cada día en la robustez, agilidad y elegancia de Misterplan para hacer crecer su negocio.
          </p>
          <div class="mt-4" style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
            <a routerLink="/contacto" class="btn-primary" style="padding: 1rem 2rem; border-radius: 99px; font-size: 1.1rem; text-decoration: none;">Empezar a Escalar</a>
          </div>
        </div>

        <!-- Horizontal Features -->
        <div class="features-list mt-5" style="display: flex; flex-direction: column; gap: 6rem; margin-top: 8rem;">

          <!-- Feature 1: Featured Quote -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(249, 129, 0, 0.1); color: var(--primary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Featured Story</span>
              <div style="color: #fbbf24; font-size: 1.5rem; margin-bottom: 1rem;">⭐⭐⭐⭐⭐</div>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color); line-height: 1.2;">"La unificación y tranquilidad que necesitábamos"</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem; font-style: italic;">
                "Desde que decidimos implantar Misterplan en nuestros hoteles boutique, las duplicidades y overbookings son cosa del pasado. Sin duda, es el motor de reservas más robusto y fiable del mercado español."
              </p>
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%); display: flex; justify-content: center; align-items: center; color: white; font-weight: 800;">H</div>
                <div>
                  <h4 style="margin: 0; font-size: 1rem; color: var(--secondary-color); font-weight: 700;">Gerencia General</h4>
                  <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">Hotel Boutique Cantabria</p>
                </div>
              </div>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/16-razones-para-elegir-misterplan-pequeno-hotel.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 2: Sector Testimonials (Reverse) -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Sectores Diversos</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Líderes en Ocio y Aventura</h2>
              
              <div style="display: flex; flex-direction: column; gap: 2rem; margin-top: 2rem;">
                <!-- Review A -->
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 10px 30px rgba(10,28,62,0.04); border: 1px solid rgba(10,28,62,0.05);">
                  <div style="color: #fbbf24; font-size: 1.1rem; margin-bottom: 0.5rem;">⭐⭐⭐⭐⭐</div>
                  <h4 style="margin: 0 0 0.5rem 0; color: var(--secondary-color); font-weight: 700;">"Soporte técnico inmejorable de 10"</h4>
                  <p class="text-muted" style="margin: 0 0 1rem 0; font-size: 0.95rem;">Tener a un equipo técnico altamente cualificado que entiende perfectamente el negocio del turismo de aventura y ocio marca la diferencia diaria.</p>
                  <small style="font-weight: bold; color: var(--primary-color);">Empresa de Multiaventura</small>
                </div>
                <!-- Review B -->
                <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 10px 30px rgba(10,28,62,0.04); border: 1px solid rgba(10,28,62,0.05);">
                  <div style="color: #fbbf24; font-size: 1.1rem; margin-bottom: 0.5rem;">⭐⭐⭐⭐⭐</div>
                  <h4 style="margin: 0 0 0.5rem 0; color: var(--secondary-color); font-weight: 700;">"Velocidad extrema en taquilla física"</h4>
                  <p class="text-muted" style="margin: 0 0 1rem 0; font-size: 0.95rem;">La validación de códigos QR mediante la app de Misterplan ha agilizado los accesos a nuestro museo de forma espectacular, eliminando colas.</p>
                  <small style="font-weight: bold; color: var(--primary-color);">Gestor Cultural y Museo</small>
                </div>
              </div>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%); height: 420px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; padding: 3rem; text-align: center;">
                <span style="font-size: 4rem; margin-bottom: 1.5rem;">🎯</span>
                <h3 style="color: white; font-size: 2rem; margin-bottom: 1rem;">98.6%</h3>
                <p style="color: rgba(255,255,255,0.8); font-size: 1.1rem; max-width: 300px; margin: 0;">De tasa de fidelidad anual entre nuestros clientes asociados en la península.</p>
              </div>
            </div>
          </div>

          <!-- Feature 3: Innovación Continua -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Comunidad</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Innovación Continua</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Únete hoy a la comunidad de alojamientos, destinos inteligentes y empresas de ocio más avanzada tecnológicamente de Europa y Latinoamérica.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Solicitar información &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/4480.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

        </div>

        <!-- CTA Section -->
        <div class="cta-banner mt-5 text-center animate-fade-in-up" style="background: var(--secondary-color); padding: 5rem 2rem; border-radius: 24px; color: white; margin-top: 8rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: white;">Tu éxito es nuestra mayor garantía</h2>
          <p style="font-size: 1.15rem; max-width: 600px; margin-inline: auto; color: #94A3B8; margin-bottom: 2.5rem;">
            Queremos que tu negocio sea nuestra próxima historia de éxito compartida en el sector.
          </p>
          <a routerLink="/contacto" class="btn-primary" style="background: var(--primary-color); color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 99px; font-weight: bold; font-size: 1.1rem; cursor: pointer; text-decoration: none;">Empezar a Escalar ahora</a>
        </div>
        
      </div>
    </div>
  `,
  styles: [`
    .max-w-3xl { max-width: 48rem; }
    .mx-auto { margin-inline: auto; }
    .mt-5 { margin-top: 4rem; }
    @media (max-width: 900px) {
      .feature-split { flex-direction: column !important; text-align: center; gap: 2rem !important; }
      .feature-image { width: 100%; }
      .mt-4 { flex-direction: column; }
    }
  `]
})
export class ValoracionesComponent {}

