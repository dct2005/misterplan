import { Component } from '@angular/core';

@Component({
  selector: 'app-mrp-spa',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px; background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);">
      <div class="container">
        
        <!-- Hero Header -->
        <div class="text-center mb-5 max-w-3xl mx-auto animate-fade-in-up">
          <span class="badge" style="display: inline-block; padding: 6px 14px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 999px; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Wellness & Health Centers</span>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.02em;">Balnearios y Motor Thermas & SPA</h1>
          <p class="text-muted" style="font-size: 1.2rem; line-height: 1.7;">
            Optimiza el control de tus cabinas, automatiza la asignación de terapeutas y eleva tu ticket medio vendiendo pases directamente online.
          </p>
        </div>

        <!-- Horizontal Features -->
        <div class="features-list mt-5" style="display: flex; flex-direction: column; gap: 6rem; margin-top: 5rem;">

          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: var(--primary-color); color: white; border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Resource Excellence</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Agendas Multi-Recurso</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Algoritmos que ligan terapeutas, cabinas específicas y stock de productos de belleza a cada reserva.</p>
              <button class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Ver Agendas &rarr;</button>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/pms-motor-channel-spa-hotel.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Aforo de Piscinas</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Ventas de pases de 2h asegurando nunca sobrepasar la legalidad del aforo termal.</p>
              <button class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Piscina &rarr;</button>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/ira-software-para-gestion-de-hoteles-y-alojamientos.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Bonos y Cheques Regalo</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Genera ingresos recurrentes vendiendo experiencias wellness para regalar con diseño premium.</p>
              <button class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Ver Bonos &rarr;</button>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/821.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: var(--primary-color); color: white; border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Analytics</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Rentabilidad por Cabina</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Informes detallados sobre el uso y rendimiento de cada sala y cada tratamiento de tu spa.</p>
              <button class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Informes &rarr;</button>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/740.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

        </div>

        <!-- CTA Banner -->
        
        <div class="cta-banner mt-5 text-center animate-fade-in-up" style="background: var(--secondary-color); padding: 5rem 2rem; border-radius: 24px; color: white; margin-top: 8rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: white;">Relajación para tus clientes, control para ti</h2>
          <p style="font-size: 1.15rem; max-width: 600px; margin-inline: auto; color: #94A3B8; margin-bottom: 2.5rem;">Misterplan es el software zen que pone orden en el complejo mundo de los balnearios.</p>
          <button class="btn-primary" style="background: var(--primary-color); color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 99px; font-weight: bold; font-size: 1.1rem; cursor: pointer;">Digitalizar mi Spa</button>
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
export class MrpSpaComponent {}
