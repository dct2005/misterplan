import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px; background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);">
      <div class="container animate-fade-in-up">
        
        <div class="contact-split-layout" style="display: flex; gap: 5rem; align-items: flex-start; margin-top: 2rem;">
          
          <!-- Left Column: HQ & Info -->
          <div class="contact-info-panel" style="flex: 1;">
            <span class="badge" style="display: inline-block; padding: 6px 14px; background: rgba(249, 129, 0, 0.1); color: var(--primary-color); border-radius: 999px; font-weight: 700; text-transform: uppercase; margin-bottom: 1.5rem;">Get in Touch</span>
            <h1 style="font-size: clamp(2.5rem, 4vw, 3.5rem); margin-bottom: 1.5rem; letter-spacing: -0.02em; color: var(--secondary-color); line-height: 1.1;">Contacta con Misterplan</h1>
            <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 3rem;">
              Estamos aquí para resolver tus dudas comerciales, guiarte en el proceso de digitalización y ayudarte a elegir el motor de reservas que impulsará tu rentabilidad.
            </p>

            <div style="display: flex; flex-direction: column; gap: 2.5rem;">
              
              <!-- Phone -->
              <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                <div style="font-size: 1.8rem; background: rgba(10, 28, 62, 0.05); padding: 12px; border-radius: 12px; line-height: 1;">📞</div>
                <div>
                  <h4 style="color: var(--secondary-color); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.3rem;">Teléfono Comercial</h4>
                  <p style="font-size: 1.4rem; font-weight: 800; color: var(--secondary-color); margin: 0;">+34 902 100 200</p>
                </div>
              </div>

              <!-- Email -->
              <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                <div style="font-size: 1.8rem; background: rgba(10, 28, 62, 0.05); padding: 12px; border-radius: 12px; line-height: 1;">✉️</div>
                <div>
                  <h4 style="color: var(--secondary-color); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.3rem;">Email de Consultas</h4>
                  <p style="font-size: 1.4rem; font-weight: 800; color: var(--secondary-color); margin: 0;">info@misterplan.es</p>
                </div>
              </div>

              <!-- LATAM -->
              <div style="display: flex; gap: 1.5rem; align-items: flex-start;">
                <div style="font-size: 1.8rem; background: rgba(10, 28, 62, 0.05); padding: 12px; border-radius: 12px; line-height: 1;">🌍</div>
                <div>
                  <h4 style="color: var(--secondary-color); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.3rem;">Delegación MILA Business (LATAM)</h4>
                  <a href="https://www.milabusiness.com/contáctanos" target="_blank" class="btn-outline" style="display: inline-block; border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 600; text-decoration: none; margin-top: 0.5rem; font-size: 0.9rem;">Consultar Delegación &rarr;</a>
                </div>
              </div>

              <!-- Tech Support Link -->
              <div style="display: flex; gap: 1.5rem; align-items: flex-start; padding-top: 1.5rem; border-top: 1px solid rgba(10, 28, 62, 0.1);">
                <div style="font-size: 1.8rem; background: rgba(249, 129, 0, 0.05); padding: 12px; border-radius: 12px; line-height: 1;">🛠️</div>
                <div>
                  <h4 style="color: var(--secondary-color); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.3rem;">¿Ya eres cliente y tienes incidencias?</h4>
                  <p class="text-muted" style="margin: 0 0 0.5rem 0; font-size: 0.95rem;">Accede de forma directa a nuestro portal exclusivo de soporte técnico.</p>
                  <a routerLink="/soporte" style="color: var(--primary-color); font-weight: 700; text-decoration: none; font-size: 0.95rem; display: inline-block;">Ir al Centro de Soporte &rarr;</a>
                </div>
              </div>

            </div>
          </div>
          
          <!-- Right Column: Interactive Request Form -->
          <div class="contact-form-panel" style="flex: 1; background: white; border-radius: 24px; box-shadow: 0 20px 50px rgba(10, 28, 62, 0.08); padding: 3.5rem; border: 1px solid rgba(10, 28, 62, 0.05);">
            <h3 style="font-size: 1.8rem; color: var(--secondary-color); margin-bottom: 0.5rem; font-weight: 700;">Solicitar Auditoría Gratuita</h3>
            <p class="text-muted" style="font-size: 1rem; margin-bottom: 2.5rem;">Déjanos tus datos de contacto y un especialista sénior analizará tu modelo de comercialización turística sin compromiso.</p>
            
            <form (submit)="$event.preventDefault()" style="display: flex; flex-direction: column; gap: 1.5rem;">
              <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
                <div class="form-group" style="flex: 1; min-width: 200px;">
                  <label style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--secondary-color); margin-bottom: 0.5rem;">Nombre Completo</label>
                  <input type="text" placeholder="Ej. Javier Gómez" style="width: 100%; border: 1px solid rgba(10, 28, 62, 0.15); border-radius: 8px; padding: 0.9rem; font-size: 1rem; color: var(--secondary-color); transition: all 0.3s; background: rgba(10,28,62,0.02);" onfocus="this.style.borderColor='var(--primary-color)'; this.style.outline='none'; this.style.background='white'; this.style.boxShadow='0 0 0 4px rgba(249, 129, 0, 0.1)'" onblur="this.style.borderColor='rgba(10, 28, 62, 0.15)'; this.style.background='rgba(10,28,62,0.02)'; this.style.boxShadow='none'">
                </div>
                <div class="form-group" style="flex: 1; min-width: 200px;">
                  <label style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--secondary-color); margin-bottom: 0.5rem;">Dirección Email</label>
                  <input type="email" placeholder="javier@hotel.com" style="width: 100%; border: 1px solid rgba(10, 28, 62, 0.15); border-radius: 8px; padding: 0.9rem; font-size: 1rem; color: var(--secondary-color); transition: all 0.3s; background: rgba(10,28,62,0.02);" onfocus="this.style.borderColor='var(--primary-color)'; this.style.outline='none'; this.style.background='white'; this.style.boxShadow='0 0 0 4px rgba(249, 129, 0, 0.1)'" onblur="this.style.borderColor='rgba(10, 28, 62, 0.15)'; this.style.background='rgba(10,28,62,0.02)'; this.style.boxShadow='none'">
                </div>
              </div>
              
              <div class="form-group">
                <label style="display: block; font-size: 0.85rem; font-weight: 700; color: var(--secondary-color); margin-bottom: 0.5rem;">Cuéntanos sobre tu propiedad o negocio</label>
                <textarea rows="4" placeholder="Ej. Gestiono un hotel boutique de 25 habitaciones y quiero optimizar mi venta directa..." style="width: 100%; border: 1px solid rgba(10, 28, 62, 0.15); border-radius: 8px; padding: 0.9rem; font-size: 1rem; color: var(--secondary-color); transition: all 0.3s; background: rgba(10,28,62,0.02); resize: vertical;" onfocus="this.style.borderColor='var(--primary-color)'; this.style.outline='none'; this.style.background='white'; this.style.boxShadow='0 0 0 4px rgba(249, 129, 0, 0.1)'" onblur="this.style.borderColor='rgba(10, 28, 62, 0.15)'; this.style.background='rgba(10,28,62,0.02)'; this.style.boxShadow='none'"></textarea>
              </div>

              <button type="submit" class="btn-primary" style="border: none; padding: 1.1rem; border-radius: 8px; font-weight: 700; font-size: 1.1rem; color: white; background: var(--primary-color); cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">Enviar Mensaje de Solicitud &rarr;</button>
            </form>
          </div>
          
        </div>
        
      </div>
    </div>
  `,
  styles: [`
    @media (max-width: 950px) {
      .contact-split-layout { flex-direction: column; gap: 4rem !important; }
      .contact-form-panel { padding: 2rem !important; }
    }
  `]
})
export class ContactoComponent {}

