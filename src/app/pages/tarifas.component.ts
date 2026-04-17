import { Component } from '@angular/core';

@Component({
  selector: 'app-tarifas',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 150px; padding-bottom: 120px; position: relative; overflow: hidden;">
      <!-- Glowing Orbs -->
      <div class="aurora-orb orb-1"></div>
      <div class="aurora-orb orb-2"></div>

      <div class="container animate-fade-in-up" style="position: relative; z-index: 10;">
        <div style="text-align: center; max-width: 900px; margin: 0 auto 5rem;">
          <h1 style="font-size: clamp(3.5rem, 5vw, 4.5rem); font-weight: 800; margin-bottom: 1.5rem; letter-spacing: -0.03em;">Gestión de <span class="text-gradient">Tarifas y Revenue</span></h1>
          <p class="text-muted" style="font-size: 1.25rem; line-height: 1.6;">
            Aplica estrategias de precios inteligentes y maximiza los ingresos de tus alojamientos en función de la ocupación real o fechas clave con nuestro motor automatizado.
          </p>
        </div>

        <div class="premium-bento-grid">
          <!-- Main Feature (span 2 columns on desktop) -->
          <div class="bento-card bento-wide">
            <div class="bento-icon" style="background: rgba(239, 131, 35, 0.1); color: var(--primary-color);">📈</div>
            <div class="bento-content">
              <h3>Precios Dinámicos</h3>
              <p>El motor inteligente ajusta las tarifas automáticamente basándose en la ocupación, proximidad de la fecha y rápidas fluctuaciones de la demanda del mercado turístico, optimizando tu rentabilidad sin intervención manual.</p>
            </div>
          </div>
          
          <div class="bento-card">
            <div class="bento-icon" style="background: rgba(16, 185, 129, 0.1); color: #10b981;">🔄</div>
            <div class="bento-content">
              <h3>Sincronización Total OTA</h3>
              <p>Los cambios de precios se enviarán instantáneamente a Booking.com, Airbnb, Expedia y a tu propia página web oficial, erradicando la temida disparidad de precios.</p>
            </div>
          </div>

          <div class="bento-card">
            <div class="bento-icon" style="background: rgba(139, 92, 246, 0.1); color: #8b5cf6;">📊</div>
            <div class="bento-content">
               <h3>Cálculo de Yielding</h3>
              <p>Analíticas exhaustivas de rendimiento (RevPAR, ADR, GOPPAR) calculadas en tiempo real y expuestas de forma gráfica en tu dashboard directivo.</p>
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
export class TarifasComponent {}
