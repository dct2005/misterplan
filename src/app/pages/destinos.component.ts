import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-destinos',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px; background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);">
      <div class="container animate-fade-in-up">
        
        <!-- Hero Header -->
        <div class="text-center mb-5 max-w-3xl mx-auto">
          <span class="badge" style="display: inline-block; padding: 6px 14px; background: rgba(249, 129, 0, 0.1); color: var(--primary-color); border-radius: 999px; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Smart Destinations</span>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.02em; color: var(--secondary-color);">Digitalización para Municipios e Instituciones</h1>
          <p class="text-muted" style="font-size: 1.2rem; line-height: 1.7;">
            Transforma tu territorio en un Destino Inteligente. Unifica la oferta local de hoteles, actividades y museos bajo una única marca institucional.
          </p>
          <div class="mt-4" style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
            <a routerLink="/contacto" class="btn-primary" style="padding: 1rem 2rem; border-radius: 99px; font-size: 1.1rem; text-decoration: none;">Contactar con un experto</a>
          </div>
        </div>

        <!-- Horizontal Features -->
        <div class="features-list mt-5" style="display: flex; flex-direction: column; gap: 6rem; margin-top: 8rem;">

          <!-- Feature 1: Marketplace de Destino -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">E-Commerce Público</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Marketplace de Destino</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Centraliza las reservas de todos los empresarios locales en un portal único, aumentando de forma exponencial la visibilidad, promoción y ventas directas del municipio.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Ver funcionamiento &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/plataforma-para-destinos-turisticos.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 2: SmartCity Admin (Reverse) -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Gestión Pública</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">SmartCity Admin</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Panel de control avanzado para ayuntamientos y diputaciones con analíticas en tiempo real de flujos turísticos, pernoctaciones y Big Data sectorial.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Explorar panel &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/plataforma-smartciy-ayuntamientos.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 3: Tourist Travel Card -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Fidelización</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Tourist Travel Card</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Tarjetas físicas o digitales unificadas que agrupan entradas a museos, transporte público, descuentos comerciales y accesos prioritarios.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Saber más &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/741.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 4: Promoción Estratégica (Reverse) -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Promoción</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Promoción Estratégica</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Herramientas avanzadas de marketing automatizado, segmentación demográfica y CRM para fidelizar e impactar a los visitantes de tu destino.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Planificar campaña &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/ira-comercializacion-y-promocion-de-destinos-ciudades-y-municipios.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

        </div>

        <!-- CTA Banner -->
        <div class="cta-banner mt-5 text-center animate-fade-in-up" style="background: var(--secondary-color); padding: 5rem 2rem; border-radius: 24px; color: white; margin-top: 8rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: white;">Moderniza tu Ayuntamiento hoy mismo</h2>
          <p style="font-size: 1.15rem; max-width: 600px; margin-inline: auto; color: #94A3B8; margin-bottom: 2.5rem;">
            Misterplan es el socio tecnológico para los destinos que quieren liderar la era digital y la sostenibilidad en el turismo.
          </p>
          <a routerLink="/contacto" class="btn-primary" style="background: var(--primary-color); color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 99px; font-weight: bold; font-size: 1.1rem; cursor: pointer; text-decoration: none;">Contactar con un experto</a>
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
export class DestinosComponent {}

