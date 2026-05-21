import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-verifactu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px; background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);">
      <div class="container animate-fade-in-up">
        
        <!-- Hero Header -->
        <div class="text-center mb-5 max-w-3xl mx-auto">
          <span class="badge" style="display: inline-block; padding: 6px 14px; background: rgba(249, 129, 0, 0.1); color: var(--primary-color); border-radius: 999px; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Anti-Fraud Compliance</span>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.02em; color: var(--secondary-color);">Normativa VeriFactu / TicketBAI</h1>
          <p class="text-muted" style="font-size: 1.2rem; line-height: 1.7;">
            El blindaje anti-fraude definitivo exigido por el gobierno de España y las Diputaciones Forales, transparentemente integrado en el corazón de todas tus transacciones.
          </p>
          <div class="mt-4" style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
            <a routerLink="/contacto" class="btn-primary" style="padding: 1rem 2rem; border-radius: 99px; font-size: 1.1rem; text-decoration: none;">Saber más sobre VeriFactu</a>
          </div>
        </div>

        <!-- Horizontal Features -->
        <div class="features-list mt-5" style="display: flex; flex-direction: column; gap: 6rem; margin-top: 8rem;">

          <!-- Feature 1: Certificación Verifactu -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">AEAT Oficial</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Certificación Verifactu</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Misterplan asegura que cada factura sea inalterable y se envíe automáticamente a la Agencia Tributaria, garantizando la perfecta integridad y trazabilidad estricta exigida.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Ver especificaciones &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/4484.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 2: TicketBAI & Navarra (Reverse) -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">País Vasco y Navarra</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">TicketBAI & Navarra</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Inyección directa de códigos TBAI y códigos QR únicos sobre cada documento emitido al público en el País Vasco y Navarra de forma transparente.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Configurar &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/ira-comercializacion-y-promocion-de-destinos-ciudades-y-municipios.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 3: Fácil para tu Asesor -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Automatización</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Fácil para tu Asesor</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Reducción de horas de asesoría y contabilidad mediante la exportación nativa para A3, Sage, Contaplus y otros formatos estándar con un solo clic.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Ver formatos &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/channel-manager-para-hoteles-info.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 4: Garantía de Inalterabilidad (Reverse) -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Security First</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Garantía de Inalterabilidad</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Nuestra arquitectura en la nube de alta seguridad garantiza que los registros de facturación no puedan ser borrados ni modificados, cumpliendo estrictamente la Ley 11/2021.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Auditoría &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/ira-software-para-gestion-de-actividades-turisticas.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

        </div>

        <!-- CTA Banner -->
        <div class="cta-banner mt-5 text-center animate-fade-in-up" style="background: var(--secondary-color); padding: 5rem 2rem; border-radius: 24px; color: white; margin-top: 8rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: white;">Prepárate para la nueva era fiscal</h2>
          <p style="font-size: 1.15rem; max-width: 600px; margin-inline: auto; color: #94A3B8; margin-bottom: 2.5rem;">
            Misterplan es el software certificado que te da la tranquilidad que tu negocio necesita frente a las inspecciones de Hacienda.
          </p>
          <a routerLink="/contacto" class="btn-primary" style="background: var(--primary-color); color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 99px; font-weight: bold; font-size: 1.1rem; cursor: pointer; text-decoration: none;">Saber más sobre VeriFactu</a>
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
export class VerifactuComponent {}

