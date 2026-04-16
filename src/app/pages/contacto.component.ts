import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 100px; padding-bottom: 80px;">
      <div class="container animate-fade-in-up">
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Contacta con <span class="text-gradient">Misterplan</span></h1>
        <p class="text-muted" style="font-size: 1.2rem; max-width: 700px; margin-bottom: 3rem;">
          ¿Tienes dudas sobre cómo nuestro software puede adaptarse a tus necesidades? Déjanos tus datos o contáctanos de forma directa y un especialista te llamará lo antes posible.
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem;">
          <div class="contact-info">
             <div class="glass" style="padding: 2.5rem; border-radius: var(--radius-lg); background: var(--bg-secondary); height: 100%;">
               <h3 style="font-size: 1.5rem; margin-bottom: 2rem;">Información Corporativa</h3>
               
               <div style="margin-bottom: 1.5rem;">
                 <strong style="color: var(--text-muted); display: block; margin-bottom: 0.3rem;">Teléfono Comercial</strong>
                 <a href="tel:+34902100200" style="font-size: 1.2rem; text-decoration: none; color: var(--text-main); font-weight: 500;">+34 902 100 200</a>
               </div>

               <div style="margin-bottom: 1.5rem;">
                 <strong style="color: var(--text-muted); display: block; margin-bottom: 0.3rem;">Email General</strong>
                 <a href="mailto:info@misterplan.es" style="font-size: 1.2rem; text-decoration: none; color: var(--text-main); font-weight: 500;">info&#64;misterplan.es</a>
               </div>

               <div style="margin-bottom: 1.5rem;">
                 <strong style="color: var(--text-muted); display: block; margin-bottom: 0.3rem;">Delegación LATAM (MILA)</strong>
                 <a href="https://www.milabusiness.com/contáctanos" target="_blank" style="font-size: 1.1rem; text-decoration: none; color: var(--text-main); font-weight: 500; display: inline-flex; align-items: center; gap: 8px;">
                   <span>Contactar con MILA</span> <span style="font-size:0.8rem">↗</span>
                 </a>
               </div>
             </div>
          </div>

          <div class="contact-form">
            <form class="glass" style="padding: 2.5rem; border-radius: var(--radius-lg); display: flex; flex-direction: column; gap: 1.5rem; border: 1px solid var(--border-subtle);">
              
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Nombre y Apellidos</label>
                <input type="text" placeholder="Ej. Ana García" style="width: 100%; padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); background: var(--bg-secondary); color: var(--text-main);">
              </div>

              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email Profesional</label>
                <input type="email" placeholder="hola@tuempresa.com" style="width: 100%; padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); background: var(--bg-secondary); color: var(--text-main);">
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">¿En qué podemos ayudarte?</label>
                <textarea rows="4" placeholder="Me gustaría conocer más sobre el PMS y solicitar una demo..." style="width: 100%; padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); background: var(--bg-secondary); color: var(--text-main); resize: vertical;"></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg" style="background: var(--text-main); color: var(--bg-secondary); padding: 1rem 2rem; border-radius: var(--radius-pill); font-weight: 600; margin-top: 1rem; cursor: pointer; border: none;">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactoComponent {}
