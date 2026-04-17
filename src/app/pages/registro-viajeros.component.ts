import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-viajeros',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 150px; padding-bottom: 120px; position: relative; overflow: hidden;">
      <div class="aurora-orb orb-1"></div>
      <div class="aurora-orb orb-2"></div>

      <div class="container animate-fade-in-up" style="position: relative; z-index: 10;">
        <div style="text-align: center; max-width: 900px; margin: 0 auto 5rem;">
          <h1 style="font-size: clamp(3.5rem, 5vw, 4.5rem); font-weight: 800; margin-bottom: 1.5rem; letter-spacing: -0.03em;">Envío Legal y <span class="text-gradient">Registro de Viajeros</span></h1>
          <p class="text-muted" style="font-size: 1.25rem; line-height: 1.6;">
            Cumple impecablemente con la Ley de Seguridad Ciudadana y el reciente y severo Real Decreto 933/2021 sin esfuerzo manual. Fichas digitales en piloto automático.
          </p>
        </div>

        <div class="premium-bento-grid">
          <div class="bento-card bento-wide">
            <div class="bento-icon" style="background: rgba(239, 131, 35, 0.1); color: var(--primary-color);">🚓</div>
            <div class="bento-content">
              <h3>Conexión a Instituciones Nacionales Tecnológicas</h3>
              <p>Misterplan se encarga de empaquetar, firmar y enviar en bloque la información de todos los huéspedes registrados. Integración profunda y estable con la Guardia Civil (Hospederías), el Cuerpo de Policía Nacional (Webpol), los Mossos d'Esquadra y el cuerpo de la Ertzaintza autonómica.</p>
            </div>
          </div>
          
          <div class="bento-card">
            <div class="bento-icon" style="background: rgba(16, 185, 129, 0.1); color: #10b981;">🇪🇸</div>
            <div class="bento-content">
              <h3>Nueva Normativa Ministeral RD933</h3>
              <p>Tranquilidad absoluta frente al Real Decreto adaptado. Aparte de los datos identitarios, el sistema reporta automáticamente los medios de pago exigidos (tarjeta, transferencias), parentescos y matrículas.</p>
            </div>
          </div>

          <div class="bento-card">
            <div class="bento-icon" style="background: rgba(20, 184, 166, 0.1); color: #14b8a6;">📂</div>
            <div class="bento-content">
               <h3>Archivo Cifrado Legal Incorruptible</h3>
              <p>Eliminamos el archivo físico llenando cajones. Misterplan cifra y respalda las firmas ológrafas trazables del viajero durante el margen legal exigido de 3 años, ante eventuales inspecciones turísticas.</p>
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
export class RegistroViajerosComponent {}
