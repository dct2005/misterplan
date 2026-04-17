import { Component } from '@angular/core';

@Component({
  selector: 'app-mrp-spa',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 120px; padding-bottom: 80px;">
      <div class="text-center animate-fade-in-up" style="max-width: 800px; margin: 0 auto 5rem;">
        <h1 style="font-size: clamp(3rem, 5vw, 4.5rem); font-weight: 800; margin-bottom: 1.5rem; line-height: 1.05; letter-spacing: -0.03em;">
          Balnearios y <br><span class="text-gradient">Centros Thermas & SPA</span>
        </h1>
        <p class="text-muted" style="font-size: 1.25rem; margin-bottom: 2.5rem; line-height: 1.6;">
          Optimiza el control de tus cabinas, automatiza la asignación de terapeutas y eleva tu ticket medio vendiendo pases y circuitos directamente por la web.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center;">
          <a href="/contacto" class="btn btn-primary" style="padding: 1rem 2.5rem; border-radius: var(--radius-pill); font-weight: 600;">Contactar Ventas</a>
        </div>
      </div>

      <div class="container animate-fade-in-up">
        <img src="/images/ira-software-para-gestion-de-hoteles-y-alojamientos.jpg" alt="Thermas SPA View" style="width: 100%; height: 450px; object-fit: cover; border-radius: 24px; box-shadow: 0 25px 50px rgba(0,0,0,0.1); margin-bottom: 8rem;">
      </div>

      <div class="container">
        <!-- Feature 1 -->
        <div class="feature-block inline-layout animate-fade-in-up">
          <div class="feature-text">
            <span class="feat-subtitle">AGENDAS MULTI-TERAPEUTA</span>
            <h2>Combina personal, recursos y horas a la perfección.</h2>
            <p>Define algoritmos que ligan que el 'Masaje Aromaterapia' requiere a la terapeuta María, usar la Cabina Azul y bloquear el inventario de cremas simultáneamente.</p>
          </div>
          <div class="feature-visual">
            <img src="/images/740.jpg" alt="Agendas" class="img-fluid">
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="feature-block inline-layout reverse animate-fade-in-up">
          <div class="feature-text">
            <span class="feat-subtitle">CONTROL DE AFORO EN PISCINAS</span>
            <h2>Reservas de circuitos limitadas por tramos.</h2>
            <p>Vende pases de 2 horas asegurándote nunca sobrepasar la legalidad del aforo en tus piscinas interiores termales de alto tránsito.</p>
          </div>
          <div class="feature-visual">
            <img src="/images/gestion-comercializacion-apartamento-turistico.jpg" alt="Circuitos" class="img-fluid">
          </div>
        </div>
      </div>

      <div class="container" style="margin-top: 6rem;">
         <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 30px; padding: 5rem 3rem; text-align: center; color: white;">
            <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">¿Tu Spa está creciendo?</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9;">Automatízalo y despídete a las libretas y el lápiz anticuado.</p>
            <button class="btn" style="background: white; color: var(--primary-color); padding: 1rem 2.5rem; border-radius: 50px; font-weight: bold; border: none; cursor: pointer;">Probar Ahora</button>
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
export class MrpSpaComponent {}
