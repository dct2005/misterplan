import { Component } from '@angular/core';

@Component({
  selector: 'app-barcos',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px; background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);">
      <div class="container">
        
        <!-- Hero Header -->
        <div class="text-center mb-5 max-w-3xl mx-auto animate-fade-in-up">
          <span class="badge" style="display: inline-block; padding: 6px 14px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 999px; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Maritime & Charter</span>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.02em;">Charter Naval y Excursiones en Barco</h1>
          <p class="text-muted" style="font-size: 1.2rem; line-height: 1.7;">
            Comercializa las plazas de tu flota o patronea charter de lujo con total control de la tripulación en el puerto, optimizando cada amarre.
          </p>
        </div>

        <!-- Horizontal Features -->
        <div class="features-list mt-5" style="display: flex; flex-direction: column; gap: 6rem; margin-top: 5rem;">

          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: var(--primary-color); color: white; border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Fleet Manager</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Gestión de Flotas</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Control de disponibilidad por plazas individuales o alquiler de barco completo (Charter).</p>
              <button class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Configurar flota &rarr;</button>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/823.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

        </div>

        <!-- CTA Banner -->
        
        <div class="cta-banner mt-5 text-center animate-fade-in-up" style="background: var(--secondary-color); padding: 5rem 2rem; border-radius: 24px; color: white; margin-top: 8rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: white;">Navega hacia la rentabilidad</h2>
          <p style="font-size: 1.15rem; max-width: 600px; margin-inline: auto; color: #94A3B8; margin-bottom: 2.5rem;">Misterplan es el timón que guía tu negocio náutico hacia el éxito digital.</p>
          <button class="btn-primary" style="background: var(--primary-color); color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 99px; font-weight: bold; font-size: 1.1rem; cursor: pointer;">Solicitar asesoría naval</button>
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
export class BarcosComponent {}
