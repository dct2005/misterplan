import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  template: `
    <div class="page-container relative-overflow" style="padding-top: 140px; padding-bottom: 100px;">


      <div class="container animate-fade-in-up relative-z">
        <!-- Hero Header -->
        <div class="text-center mb-5">
          <div class="badge-premium">Get in Touch</div>
          <h1 class="prm-title">Contacta con <span class="text-gradient">Misterplan</span></h1>
          <p class="prm-subtitle">
            Estamos aquí para resolver tus dudas y ayudarte a elegir el motor de reservas que mejor se adapte a tu crecimiento.
          </p>
        </div>

        <div class="grid-contacto-bento">
          <!-- Contact Info -->
          <div class="bento-card bento-lg group">
            <div class="bento-img" style="background-image: url('/images/misterplan-research.webp'); opacity: 0.2; filter: grayscale(1);"></div>
            <div class="bento-content" style="z-index: 2;">
              <span class="bento-tag">HQ Information</span>
              <h3>Atención Directa</h3>
              
              <div class="contact-item mt-4">
                <small>Teléfono Comercial</small>
                <p>+34 902 100 200</p>
              </div>

              <div class="contact-item mt-3">
                <small>Email de Consultas</small>
                <p>info@misterplan.es</p>
              </div>

              <div class="contact-item mt-3">
                <small>Delegación MILA Business (LATAM)</small>
                <a href="https://www.milabusiness.com/contáctanos" target="_blank" class="btn-minimal">Consultar Delegación &rarr;</a>
              </div>
            </div>
          </div>

          <!-- Form Card -->
          <div class="bento-card bento-wide bento-tall group">
            <div class="bento-content">
              <h3>Solicitar Auditoría Gratuita</h3>
              <p>Envíanos tus datos y un especialista analizará tu negocio turístico sin compromiso.</p>
              
              <form class="prm-form mt-4">
                <div class="form-row">
                  <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" placeholder="Ej. Javier">
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="javier@hotel.com">
                  </div>
                </div>
                <div class="form-group mt-3">
                  <label>Mensaje</label>
                  <textarea rows="4" placeholder="Cuéntanos sobre tu propiedad..."></textarea>
                </div>
                <button type="submit" class="prm-btn-primary w-100 mt-4">Enviar Mensaje</button>
              </form>
            </div>
          </div>

          <!-- Support Mini Card -->
          <div class="bento-card group">

            <div class="bento-content">
              <h3>Soporte Técnico</h3>
              <p>¿Ya eres cliente y tienes una incidencia? Accede al portal de tickets.</p>
              <a href="/soporte" class="btn-minimal">Ir a Soporte &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .grid-contacto-bento {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(280px, auto);
      gap: 1.5rem;
      margin-top: 4rem;
    }
    .orb-2 { background: radial-gradient(circle, #3b82f6, transparent); }
    .bento-lg { grid-column: span 1; grid-row: span 2; }
    .bento-wide { grid-column: span 3; }
    .bento-tall { grid-row: span 2; }

    .contact-item small { color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; font-weight: 600; font-size: 0.7rem; }
    .contact-item p { font-size: 1.3rem; font-weight: 700; margin-top: 0.2rem; }

    .prm-form .form-row { display: flex; gap: 1rem; }
    .prm-form .form-group { flex: 1; display: flex; flex-direction: column; gap: 0.5rem; }
    .prm-form label { font-size: 0.85rem; font-weight: 600; }
    .prm-form input, .prm-form textarea { 
      background: rgba(255,255,255,0.05); 
      border: 1px solid rgba(255,255,255,0.1); 
      border-radius: 12px; 
      padding: 1rem; 
      color: white;
      transition: border-color 0.3s;
    }
    .prm-form input:focus, .prm-form textarea:focus { border-color: var(--primary-color); outline: none; background: rgba(255,255,255,0.08); }
    .w-100 { width: 100%; border: none; cursor: pointer; }

    @media (max-width: 1100px) {
      .grid-contacto-bento { grid-template-columns: 1fr; }
      .bento-lg, .bento-wide, .bento-tall { grid-column: span 1; grid-row: span 1; }
      .prm-form .form-row { flex-direction: column; }
    }
  `]
})
export class ContactoComponent {}
