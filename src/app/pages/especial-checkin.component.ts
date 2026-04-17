import { Component } from '@angular/core';

@Component({
  selector: 'app-especial-checkin',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 150px; padding-bottom: 120px; position: relative; overflow: hidden;">
      <div class="aurora-orb orb-1"></div>
      <div class="aurora-orb orb-2"></div>

      <div class="container animate-fade-in-up" style="position: relative; z-index: 10;">
        <div style="text-align: center; max-width: 900px; margin: 0 auto 5rem;">
          <h1 style="font-size: clamp(3.5rem, 5vw, 4.5rem); font-weight: 800; margin-bottom: 1.5rem; letter-spacing: -0.03em;">Especial <span class="text-gradient">Check-in</span></h1>
          <p class="text-muted" style="font-size: 1.25rem; line-height: 1.6;">
            Agiliza la recepción de tus huéspedes con nuestro sistema avanzado de autofirma y kioskos digitales. Menos colas, máxima satisfacción y total integración legal.
          </p>
        </div>

        <div class="premium-bento-grid">
          <div class="bento-card bento-wide">
            <div class="bento-icon" style="background: rgba(239, 131, 35, 0.1); color: var(--primary-color);">📱</div>
            <div class="bento-content">
              <h3>Check-in Online Previo Automático</h3>
              <p>Envía un elegante enlace seguro 24 o 48 horas antes para que el cliente rellene sus datos tranquilamente, suba imágenes de su DNI y firme digitalmente con su dedo sobre la pantalla táctil de su propio smartphone, acortando la estancia en el lobby de recepción drásticamente.</p>
            </div>
          </div>
          
          <div class="bento-card">
            <div class="bento-icon" style="background: rgba(16, 185, 129, 0.1); color: #10b981;">🎫</div>
            <div class="bento-content">
              <h3>Kiosko Auto Check-in Lobby</h3>
              <p>Integra robustos terminales de pantalla táctil en tu lobby para que el viajero escanee su reserva y dispense él mismo la llave física desde recepción.</p>
            </div>
          </div>

          <div class="bento-card">
            <div class="bento-icon" style="background: rgba(59, 130, 246, 0.1); color: #3b82f6;">🆔</div>
            <div class="bento-content">
               <h3>Escáner Óptico de Documentos</h3>
              <p>Para aquellos que llegan presencialmente a mostrador, usa nuestro escáner láser de DNI y Pasaportes que rellena instantáneamente la ficha por tecnología OCR.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .aurora-orb { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.15; z-index: 0; }
    .orb-1 { top: -10%; left: -10%; width: 50vw; height: 50vw; background: var(--primary-color); animation: float 15s infinite alternate; }
    .orb-2 { bottom: -10%; right: -10%; width: 60vw; height: 60vw; background: var(--secondary-color); animation: float 20s infinite alternate-reverse; }
    @keyframes float { 0% { transform: translateY(0) scale(1); } 100% { transform: translateY(-30px) scale(1.1); } }
    
    .premium-bento-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem; }
    .bento-card {
      background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.5); border-radius: 24px; padding: 3.5rem;
      display: flex; flex-direction: column; box-shadow: 0 20px 40px rgba(0,0,0,0.03);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .bento-card:hover { transform: translateY(-8px); box-shadow: 0 30px 60px rgba(0,0,0,0.08); background: rgba(255, 255, 255, 0.9); }
    
    @media (min-width: 1024px) {
      .premium-bento-grid { grid-template-columns: repeat(2, 1fr); }
      .bento-wide { grid-column: span 2; flex-direction: row; align-items: center; gap: 4rem; padding: 4rem; }
      .bento-wide .bento-icon { font-size: 4rem; width: 140px; height: 140px; flex-shrink: 0; margin-bottom: 0; }
    }
    
    .bento-icon { font-size: 3rem; width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; border-radius: 24px; margin-bottom: 2rem; }
    .bento-content h3 { font-size: 1.8rem; font-weight: 800; margin-bottom: 1rem; color: var(--text-main); letter-spacing: -0.02em; }
    .bento-content p { font-size: 1.15rem; line-height: 1.7; color: var(--text-muted); }
  `]
})
export class EspecialCheckinComponent {}
