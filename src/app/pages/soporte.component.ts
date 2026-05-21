import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px; background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);">
      <div class="container animate-fade-in-up">
        
        <!-- Hero Header -->
        <div class="text-center mb-5 max-w-3xl mx-auto">
          <span class="badge" style="display: inline-block; padding: 6px 14px; background: rgba(249, 129, 0, 0.1); color: var(--primary-color); border-radius: 999px; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Customer Support</span>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.02em; color: var(--secondary-color);">Centro de Soporte y Ayuda</h1>
          <p class="text-muted" style="font-size: 1.2rem; line-height: 1.7;">
            Estamos aquí para impulsarte. Accede a herramientas de asistencia remota inmediata, manuales autogestionados y atención directa por nuestro equipo.
          </p>
        </div>

        <!-- Horizontal Features -->
        <div class="features-list mt-5" style="display: flex; flex-direction: column; gap: 6rem; margin-top: 8rem;">

          <!-- Feature 1: Soporte Remoto -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Asistencia Remota</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Soporte Remoto Inmediato</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Descarga TeamViewer QuickSupport para permitir que nuestro equipo técnico de soporte se conecte de forma segura a tu ordenador para resolver cualquier duda en vivo.</p>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="https://www.reservaonline.support/temp/TeamViewerQS.exe" target="_blank" class="btn-primary" style="padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; text-decoration: none; cursor: pointer;">Windows (.exe)</a>
                <a href="https://download.teamviewer.com/download/version_13x/TeamViewerQS.dmg" target="_blank" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">macOS (.dmg)</a>
              </div>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background: linear-gradient(135deg, var(--secondary-color) 0%, #1e293b 100%); height: 320px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; padding: 2rem; text-align: center;">
                <h3 style="color: white; font-size: 1.8rem; margin-bottom: 1rem;">Multiplataforma</h3>
                <p style="color: #94a3b8; font-size: 1.05rem; max-width: 320px;">Soporte técnico optimizado tanto para entornos Windows como macOS de forma nativa.</p>
              </div>
            </div>
          </div>

          <!-- Feature 2: Centro de Conocimiento (Reverse) -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Autogestión</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Centro de Conocimiento</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Resuelve tus dudas al instante con nuestros manuales interactivos, tutoriales en vídeo y guías de configuración del Channel Manager, Motor de Reservas y PMS.</p>
              <a routerLink="/tutoriales" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Ver Tutoriales &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/registro-viajeros-misterplan.jpg'); background-size: cover; background-position: center; height: 350px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 3: Asistencia Directa -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Atención Telefónica</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">¿Necesitas ayuda inmediata?</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Llámanos a nuestro número de soporte centralizado disponible de Lunes a Viernes para asistencia directa de primer nivel.</p>
              <a href="tel:+34902100200" class="btn-primary" style="display: inline-block; padding: 1.1rem 2.2rem; border-radius: 99px; font-size: 1.2rem; font-weight: 700; text-decoration: none; cursor: pointer;">Llamar ahora: +34 902 100 200</a>
              <p class="text-muted mt-3" style="font-size: 0.85rem; opacity: 0.6; margin-top: 1rem;">* El coste de la llamada depende de su operador habitual.</p>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%); height: 320px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); display: flex; flex-direction: column; justify-content: center; align-items: center; color: white; padding: 2rem; text-align: center;">
                <span style="font-size: 4rem; margin-bottom: 1rem;">📞</span>
                <h3 style="color: white; font-size: 1.6rem; margin-bottom: 0.5rem;">Lunes a Viernes</h3>
                <p style="color: rgba(255,255,255,0.8); font-size: 1.05rem;">Soporte telefónico disponible para todos nuestros clientes de pago.</p>
              </div>
            </div>
          </div>

        </div>

        <!-- CTA Section -->
        <div class="cta-banner mt-5 text-center animate-fade-in-up" style="background: var(--secondary-color); padding: 5rem 2rem; border-radius: 24px; color: white; margin-top: 8rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: white;">¿Aún no eres cliente de Misterplan?</h2>
          <p style="font-size: 1.15rem; max-width: 600px; margin-inline: auto; color: #94A3B8; margin-bottom: 2.5rem;">
            Descubre por qué cientos de hoteles y agencias confían en nuestro soporte de primer nivel calificado con un 9.8/10 de satisfacción.
          </p>
          <a routerLink="/contacto" class="btn-primary" style="background: var(--primary-color); color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 99px; font-weight: bold; font-size: 1.1rem; cursor: pointer; text-decoration: none;">Solicitar Auditoría de Gestión</a>
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
export class SoporteComponent {}

