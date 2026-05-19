import { Component } from '@angular/core';

@Component({
  selector: 'app-rutas',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px; background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);">
      <div class="container">
        
        <!-- Hero Header -->
        <div class="text-center mb-5 max-w-3xl mx-auto animate-fade-in-up">
          <span class="badge" style="display: inline-block; padding: 6px 14px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 999px; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Cultural Tours & Routes</span>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.02em;">Gestor de Rutas y Visitas Guiadas</h1>
          <p class="text-muted" style="font-size: 1.2rem; line-height: 1.7;">
            Lidia con grandes volúmenes de grupos organizados de turistas fácilmente. Vende entradas online y valida sus códigos QR al instante.
          </p>
        </div>

        <!-- Horizontal Features -->
        <div class="features-list mt-5" style="display: flex; flex-direction: column; gap: 6rem; margin-top: 5rem;">

          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: var(--primary-color); color: white; border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Route Planning</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Organización de Grupos</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Control de aforo por idiomas y franjas horarias. Gestión impecable de Free Tours.</p>
              <button class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Configurar rutas &rarr;</button>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/4461.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Validación QR</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Escaneo de tickets desde la app nativa en el punto de encuentro.</p>
              <button class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Ver App &rarr;</button>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/823.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Puntos de Interés</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Define paradas y geolocalización para tus rutas guiadas interactivas.</p>
              <button class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Editar POIs &rarr;</button>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/741.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: var(--primary-color); color: white; border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Multi-language</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Gestión de Guías Políglotas</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Asigna guías automáticamente según el idioma de la reserva y la especialidad cultural.</p>
              <button class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Personal &rarr;</button>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/motor-PMS-channelmanager-hotel.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

        </div>

        <!-- CTA Banner -->
        
        <div class="cta-banner mt-5 text-center animate-fade-in-up" style="background: var(--secondary-color); padding: 5rem 2rem; border-radius: 24px; color: white; margin-top: 8rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: white;">Guía a tus clientes al siglo XXI</h2>
          <p style="font-size: 1.15rem; max-width: 600px; margin-inline: auto; color: #94A3B8; margin-bottom: 2.5rem;">Misterplan es la herramienta preferida por los guías oficiales de toda España.</p>
          <button class="btn-primary" style="background: var(--primary-color); color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 99px; font-weight: bold; font-size: 1.1rem; cursor: pointer;">Empezar a guiar</button>
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
    }
  `]
})
export class RutasComponent {}
