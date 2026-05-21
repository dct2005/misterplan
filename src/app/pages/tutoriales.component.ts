import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tutoriales',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px; background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);">
      <div class="container animate-fade-in-up">
        
        <!-- Hero Header -->
        <div class="text-center mb-5 max-w-3xl mx-auto">
          <span class="badge" style="display: inline-block; padding: 6px 14px; background: rgba(249, 129, 0, 0.1); color: var(--primary-color); border-radius: 999px; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Misterplan Academy</span>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.02em; color: var(--secondary-color);">Centro de Formación y Ayuda</h1>
          <p class="text-muted" style="font-size: 1.2rem; line-height: 1.7;">
            Domina cada herramienta de Misterplan con nuestros videotutoriales técnicos paso a paso y completas guías de autogestión de nivel experto.
          </p>
          <div class="mt-4" style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
            <a routerLink="/contacto" class="btn-primary" style="padding: 1rem 2rem; border-radius: 99px; font-size: 1.1rem; text-decoration: none;">Ver Agenda de Webinars</a>
          </div>
        </div>

        <!-- Horizontal Features -->
        <div class="features-list mt-5" style="display: flex; flex-direction: column; gap: 6rem; margin-top: 8rem;">

          <!-- Feature 1: Check-in con MIDNI -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(249, 129, 0, 0.1); color: var(--primary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Destacado</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Check-in con MIDNI</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Aprende a automatizar completamente la identificación de huéspedes y envío de partes de viajeros cumpliendo la normativa española vigente de forma 100% digital.</p>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/qLNCGgIAdss?rel=0" allowfullscreen></iframe>
              </div>
            </div>
          </div>

          <!-- Feature 2: Manual Verifactu (Reverse) -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Fiscalidad</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Manual Verifactu y TicketBAI</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Cumple de forma transparente con la nueva normativa fiscal de facturación electrónica inalterable y envío de facturas a Hacienda sin complicaciones técnicas.</p>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/PIC-rZ-4Ecs?rel=0" allowfullscreen></iframe>
              </div>
            </div>
          </div>

          <!-- Feature 3: Carga de Grupos -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Operativa PMS</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Carga Rápida de Grupos</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Optimiza y agiliza la entrada masiva de viajeros para albergues, touroperadores, agencias asociadas y grandes eventos estacionales.</p>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/yEqGlYaQEZc?rel=0" allowfullscreen></iframe>
              </div>
            </div>
          </div>

          <!-- Feature 4: Documentación Completa (Reverse) -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Full Guide</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Documentación Completa</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Accede a nuestro completo Help Center interactivo con más de 200 guías y artículos paso a paso creados para resolver todas tus dudas sobre configuración.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Abrir Help Center &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/aula-misterplan-formacion.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

        </div>

        <!-- CTA Section -->
        <div class="cta-banner mt-5 text-center animate-fade-in-up" style="background: var(--secondary-color); padding: 5rem 2rem; border-radius: 24px; color: white; margin-top: 8rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: white;">¿Necesitas formación personalizada?</h2>
          <p style="font-size: 1.15rem; max-width: 600px; margin-inline: auto; color: #94A3B8; margin-bottom: 2.5rem;">
            Organizamos webinars interactivos y talleres técnicos gratuitos semanales para que nunca dejes de optimizar e impulsar tu negocio.
          </p>
          <a routerLink="/contacto" class="btn-primary" style="background: var(--primary-color); color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 99px; font-weight: bold; font-size: 1.1rem; cursor: pointer; text-decoration: none;">Solicitar webinar privado</a>
        </div>
        
      </div>
    </div>
  `,
  styles: [`
    .max-w-3xl { max-width: 48rem; }
    .mx-auto { margin-inline: auto; }
    .mt-5 { margin-top: 4rem; }
    .video-wrapper {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      border-radius: 16px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    .video-wrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
    @media (max-width: 900px) {
      .feature-split { flex-direction: column !important; text-align: center; gap: 2rem !important; }
      .feature-image { width: 100%; }
      .mt-4 { flex-direction: column; }
    }
  `]
})
export class TutorialesComponent {}

