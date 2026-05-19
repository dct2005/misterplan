import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mrp-casa-rural',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px; background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);">
      <div class="container">
        
        <!-- Hero Header -->
        <div class="text-center mb-5 max-w-3xl mx-auto animate-fade-in-up">
          <span class="badge" style="display: inline-block; padding: 6px 14px; background: rgba(3, 142, 104, 0.1); color: #038E68; border-radius: 999px; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Especialistas en España</span>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.02em; color: var(--secondary-color);">Software para casas rurales</h1>
          <p class="text-muted" style="font-size: 1.2rem; line-height: 1.7;">
            El mayor especialista de turismo rural en España. Software para la gestión y venta de casas rurales, ya sea de <strong>alquiler completo o por habitaciones</strong>.
          </p>
          <div class="mt-4" style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
            <a routerLink="/contacto" class="btn-primary" style="padding: 1rem 2rem; border-radius: 99px; font-size: 1.1rem; text-decoration: none; background-color: #038E68;">Solicitar demostración</a>
            <a routerLink="/contacto" class="btn-outline" style="padding: 1rem 2rem; border-radius: 99px; font-size: 1.1rem; text-decoration: none;">Ver precios sin comisiones</a>
          </div>
        </div>

        <!-- Horizontal Features -->
        <div class="features-list mt-5" style="display: flex; flex-direction: column; gap: 6rem; margin-top: 8rem;">

          <!-- Feature 1 -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Gestión Centralizada</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">El Channel Manager que una casa rural necesita</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Sabemos que gestionar una casa rural es diferente a un hotel. Por eso nuestro Channel Manager te permite configurar reservas de alquiler íntegro, estancias mínimas por temporadas y sincronizar automáticamente con plataformas como EscapadaRural, Airbnb y Booking.</p>
              <a routerLink="/tarifas" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Saber más &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/741.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 2 (Reverse) -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Venta Directa</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Motor de reservas integrado</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Evita pagar comisiones altas a portales de terceros. Instala nuestro motor de reservas directamente en tu página web y permite que tus clientes reserven al instante, vendiendo también servicios adicionales como leña, desayunos o mascotas.</p>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background: linear-gradient(135deg, #038E68, #0AD6A0); height: 400px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: bold;">Motor de Reservas Web</div>
            </div>
          </div>

        </div>

        <!-- CTA Banner -->
        <div class="cta-banner mt-5 text-center animate-fade-in-up" style="background: var(--secondary-color); padding: 5rem 2rem; border-radius: 24px; color: white; margin-top: 8rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: white;">La paz del campo, la potencia de la nube</h2>
          <p style="font-size: 1.15rem; max-width: 600px; margin-inline: auto; color: #94A3B8; margin-bottom: 2.5rem;">Te hacemos una demostración y respondemos a todas tus preguntas.</p>
          <a routerLink="/contacto" class="btn-primary" style="background: #038E68; color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 99px; font-weight: bold; font-size: 1.1rem; cursor: pointer; text-decoration: none;">Solicitar demostración</a>
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
export class MrpCasaRuralComponent {}
