import { Component } from '@angular/core';

@Component({
  selector: 'app-barcos',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 120px; padding-bottom: 80px;">
      <div class="text-center animate-fade-in-up" style="max-width: 800px; margin: 0 auto 5rem;">
        <h1 style="font-size: clamp(3rem, 5vw, 4.5rem); font-weight: 800; margin-bottom: 1.5rem; line-height: 1.05; letter-spacing: -0.03em;">
          Charter Naval <br><span class="text-gradient">Barcos y Excursiones</span>
        </h1>
        <p class="text-muted" style="font-size: 1.25rem; margin-bottom: 2.5rem; line-height: 1.6;">
          Comercializa las plazas de tu flota o patronea charter de lujo con total control de la tripulación en el puerto, optimizando cada amarre y salida.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center;">
          <a href="/contacto" class="btn btn-primary" style="padding: 1rem 2.5rem; border-radius: var(--radius-pill); font-weight: 600;">Descubrir Funciones</a>
        </div>
      </div>

      <div class="container animate-fade-in-up">
        <img src="/images/motor-empresas-actividades-turisticas.jpg" alt="Barcos" style="width: 100%; height: 450px; object-fit: cover; border-radius: 24px; box-shadow: 0 25px 50px rgba(0,0,0,0.1); margin-bottom: 8rem;">
      </div>

      <div class="container">
        <!-- Feature 1 -->
        <div class="feature-block inline-layout animate-fade-in-up">
          <div class="feature-text">
            <span class="feat-subtitle">ALQUILER POR TRAMOS FLEXIBLES</span>
            <h2>Vende medios días, días completos o semanas fácilmente.</h2>
            <p>Configura las horas exactas de inicio y fin. Nuestro sistema evita automáticamente dobles reservas permitiendo alquilar una embarcación solo si el barco llega a tiempo de su alquiler previo.</p>
          </div>
          <div class="feature-visual">
            <img src="/images/motor-turismo-activo.jpg" alt="Tramos Barcos" class="img-fluid">
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="feature-block inline-layout reverse animate-fade-in-up">
          <div class="feature-text">
            <span class="feat-subtitle">UPSELLING AL CHECKOUT</span>
            <h2>Agrega valor a cada reserva marítima.</h2>
            <p>Ofrece alquiler adicional de catering (bocadillos especiales, botellas de cava), tablas de Paddle Surf o material de Snorkel durante el proceso de pago online para duplicar el ticket de compra.</p>
          </div>
          <div class="feature-visual">
            <img src="/images/bodegas-vino-gestion-visitas.jpg" alt="Equipos extra" class="img-fluid">
          </div>
        </div>
      </div>

      <div class="container" style="margin-top: 6rem;">
         <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 30px; padding: 5rem 3rem; text-align: center; color: white;">
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">Navega hacia el éxito, nosotros amarramos la gestión.</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9;">Inicia en el programa de Charter Náutico.</p>
            <button class="btn" style="background: white; color: var(--primary-color); padding: 1rem 2.5rem; border-radius: 50px; font-weight: bold; border: none; cursor: pointer;">Sincronizar Flota Ahora</button>
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
export class BarcosComponent {}
