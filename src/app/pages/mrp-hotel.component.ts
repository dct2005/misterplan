import { Component } from '@angular/core';

@Component({
  selector: 'app-mrp-hotel',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 120px; padding-bottom: 80px;">
      <div class="text-center animate-fade-in-up" style="max-width: 800px; margin: 0 auto 5rem;">
        <h1 style="font-size: clamp(3rem, 5vw, 4.5rem); font-weight: 800; margin-bottom: 1.5rem; line-height: 1.05; letter-spacing: -0.03em;">
          Cadenas y Hoteles <br><span class="text-gradient">Motor MRP-HOTEL</span>
        </h1>
        <p class="text-muted" style="font-size: 1.25rem; margin-bottom: 2.5rem; line-height: 1.6;">
          Descubre un entorno de recepción digitalizado. Organiza tu Front Desk, sincroniza el Housekeeping en tiempo real y gestiona facturas grupales sin fricción.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center;">
          <a href="/contacto" class="btn btn-primary" style="padding: 1rem 2.5rem; border-radius: var(--radius-pill); font-weight: 600;">Solicitar Demo</a>
        </div>
      </div>

      <div class="container animate-fade-in-up">
        <img src="/images/740.jpg" alt="Motor Hotel" style="width: 100%; height: 450px; object-fit: cover; border-radius: 24px; box-shadow: 0 25px 50px rgba(0,0,0,0.1); margin-bottom: 8rem;">
      </div>

      <div class="container">
        <!-- Feature 1 -->
        <div class="feature-block inline-layout animate-fade-in-up">
          <div class="feature-text">
            <span class="feat-subtitle">FRONT DESK & CHECK-IN</span>
            <h2>El panel de control que tu recepción soñaba.</h2>
            <p>Plano de habitaciones interactivo tipo calendario vectorial, listados de check-in y check-out ultrarrápidos y control automático de perfiles de clientes habituales.</p>
          </div>
          <div class="feature-visual">
            <img src="/images/821.jpg" alt="Hotel View" class="img-fluid">
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="feature-block inline-layout reverse animate-fade-in-up">
          <div class="feature-text">
            <span class="feat-subtitle">HOUSEKEEPING EN APP</span>
            <h2>La limpieza ahora se sincroniza al segundo.</h2>
            <p>Tus camareras de piso verán en su móvil las habitaciones. Al terminar, la recepción recibe la alerta de 'Habitación Lista' inmediatamente, sin esperas de walkies.</p>
          </div>
          <div class="feature-visual">
            <img src="/images/motor-PMS-channelmanager-hotel.jpg" alt="Housekeeping Panel" class="img-fluid">
          </div>
        </div>
      </div>

      <div class="container" style="margin-top: 6rem;">
         <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 30px; padding: 5rem 3rem; text-align: center; color: white;">
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">¿Listo para escalar tu hotel?</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9;">Sincroniza tus habitaciones con Misterplan hoy mismo.</p>
            <button class="btn" style="background: white; color: var(--primary-color); padding: 1rem 2.5rem; border-radius: 50px; font-weight: bold; border: none; cursor: pointer;">Empieza Hoy Mismo</button>
         </div>
      </div>
    </div>
  `,
  styles: [`
    .feature-block { margin-bottom: 8rem; }
    .inline-layout { display: flex; align-items: center; justify-content: space-between; gap: 4rem; }
    .inline-layout.reverse { flex-direction: row-reverse; }
    .feature-text { flex: 1; max-width: 550px; text-align: left; }
    .feat-subtitle { display: inline-block; font-weight: 700; color: var(--primary-color); letter-spacing: 0.1em; margin-bottom: 1.5rem; font-size: 0.85rem; }
    .feature-text h2 { font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.02em; margin-bottom: 1.5rem; color: var(--text-main); font-weight: 800; line-height: 1.1; }
    .feature-text p { font-size: 1.15rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 2rem; }
    .feature-visual { flex: 1; text-align: center; }
    .img-fluid { max-width: 100%; height: auto; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
    @media (max-width: 900px) {
      .inline-layout, .inline-layout.reverse { flex-direction: column; text-align: center; gap: 0; }
      .feature-text { margin-bottom: 3rem; max-width: 100%; text-align: center; }
      .feature-block { margin-bottom: 5rem; }
    }
  `]
})
export class MrpHotelComponent {}
