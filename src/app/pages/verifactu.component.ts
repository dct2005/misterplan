import { Component } from '@angular/core';

@Component({
  selector: 'app-verifactu',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 150px; padding-bottom: 120px; position: relative; overflow: hidden;">
      <div class="aurora-orb orb-1"></div>
      <div class="aurora-orb orb-2"></div>

      <div class="container animate-fade-in-up" style="position: relative; z-index: 10;">
        <div style="text-align: center; max-width: 900px; margin: 0 auto 5rem;">
          <h1 style="font-size: clamp(3.5rem, 5vw, 4.5rem); font-weight: 800; margin-bottom: 1.5rem; letter-spacing: -0.03em;">Normativa <span class="text-gradient">VeriFactu / TicketBAI</span></h1>
          <p class="text-muted" style="font-size: 1.25rem; line-height: 1.6;">
            El blindaje anti-fraude definitivo exigido por el gobierno de España y las Diputaciones Forales, transparentemente integrado en el corazón de todas tus transacciones.
          </p>
        </div>

        <div class="premium-bento-grid">
          <div class="bento-card bento-wide">
            <div class="bento-icon" style="background: rgba(239, 131, 35, 0.1); color: var(--primary-color);">🧾</div>
            <div class="bento-content">
              <h3>Certificación Verifactu de Hacienda (AEAT)</h3>
              <p>Misterplan asegura por programación que cada factura sea estrictamente inalterable, garantizando la perfecta integridad, trazabilidad estricta y formato XML inmanipulable de cada cargo o devolución que tu alojamiento emita, preparándote legalmente para la obligatoriedad total de 2025 impuesta por la agencia tributaria.</p>
            </div>
          </div>
          
          <div class="bento-card">
            <div class="bento-icon" style="background: rgba(16, 185, 129, 0.1); color: #10b981;">💻</div>
            <div class="bento-content">
              <h3>Motor Fiscal de Euskadi y Navarra</h3>
              <p>Si resides u operas en el País Vasco, Misterplan inyectará directamente a la red el código identificador cruzado europeo TBAI y ploteará el obligatorio código matriz bidimensional QR sobre cada documento emitido al público y enviados por SILICIE.</p>
            </div>
          </div>

          <div class="bento-card">
            <div class="bento-icon" style="background: rgba(99, 102, 241, 0.1); color: #6366f1;">📉</div>
            <div class="bento-content">
               <h3>Automatización del Asesor Contable</h3>
              <p>Reducción drástica de horas de asesoría. Extrae con un solo clic los sumatorios y volcados tributarios desglosados compatibles y nativos para A3, Sage, y Contraplus listos para liquidar el IVA.</p>
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
export class VerifactuComponent {}
