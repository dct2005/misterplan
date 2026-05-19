import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-viajeros',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px; background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);">
      <div class="container">
        
        <!-- Hero Header -->
        <div class="text-center mb-5 max-w-3xl mx-auto animate-fade-in-up">
          <span class="badge" style="display: inline-block; padding: 6px 14px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 999px; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Compliance & Security</span>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.02em;">Registro Legal de Viajeros y RD933</h1>
          <p class="text-muted" style="font-size: 1.2rem; line-height: 1.7;">
            Cumple impecablemente con la Ley de Seguridad Ciudadana y el reciente y severo Real Decreto 933/2021 sin esfuerzo manual. Fichas digitales en piloto automático.
          </p>
        </div>

        <!-- Horizontal Features -->
        <div class="features-list mt-5" style="display: flex; flex-direction: column; gap: 6rem; margin-top: 5rem;">

          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: var(--primary-color); color: white; border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Cuerpos de Seguridad</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Conexión Directa Policial</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Misterplan envía automáticamente la información a Guardia Civil (Hospederías), Policía Nacional (Webpol), Mossos d'Esquadra y Ertzaintza.</p>
              <button class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Ver integraciones &rarr;</button>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/ayudas-junta-de-extremadura-y-union-europea.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

        </div>

        <!-- CTA Banner -->
        
        <div class="cta-banner mt-5 text-center animate-fade-in-up" style="background: var(--secondary-color); padding: 5rem 2rem; border-radius: 24px; color: white; margin-top: 8rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: white;">Evita sanciones y ahorra tiempo</h2>
          <p style="font-size: 1.15rem; max-width: 600px; margin-inline: auto; color: #94A3B8; margin-bottom: 2.5rem;">Misterplan automatiza la burocracia para que tú solo te preocupes de dar la bienvenida a tus clientes.</p>
          <button class="btn-primary" style="background: var(--primary-color); color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 99px; font-weight: bold; font-size: 1.1rem; cursor: pointer;">Configurar mi registro</button>
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
export class RegistroViajerosComponent {}
