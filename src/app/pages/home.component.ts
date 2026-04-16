import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <!-- Premium Minimalist Hero -->
    <header class="prm-hero">
      <div class="container animate-fade-in-up">
        <div class="badge">Nueva Generación de PMS</div>
        <h1 class="prm-title">Gestiona. Crece.<br><span class="text-gradient">Domina tu mercado.</span></h1>
        <p class="prm-subtitle">
          Deja atrás el software rígido de ayer. Descubre el ecosistema interactivo que fluye con tu negocio: Motor de reservas, PMS y Channel Manager unificados en una sola obra de ingeniería.
        </p>
        <div class="prm-actions">
          <button class="prm-btn-primary">Empieza la prueba de 14 días</button>
          <button class="prm-btn-text" style="display: flex; align-items: center; gap: 8px;">
            <span style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; background: #FF0000; color: white; border-radius: 50%; font-size: 10px;">▶</span>
            Ver vídeo de presentación
          </button>
        </div>
      </div>
      
      <div class="prm-hero-graphic animate-fade-in-up" style="animation-delay: 0.3s; background: none; border: none; box-shadow: none;">
        <img src="/images/740.jpg" alt="Misterplan PMS Dashboard" style="width: 100%; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
      </div>
    </header>

    <!-- Fluid Typographic Features (No Cards) -->
    <section class="fluid-section">
      <div class="container">
        
        <!-- Feature 01: Hoteles -->
        <div class="feature-block inline-layout animate-fade-in-up" style="animation-delay: 0.2s;">
          <div class="feature-text">
            <span class="feat-subtitle">01 / HOTELES Y APARTAMENTOS</span>
            <h2>Revoluciona tu recepción en la nube.</h2>
            <p>El PMS integral donde las tareas complejas de facturación, limpieza y reservas se reducen a arrastrar y soltar, simplificando tu día a día de un plumazo.</p>
            <a href="/alojamientos" class="prm-btn-text">Descubre el PMS hotelero &rarr;</a>
          </div>
          <div class="feature-visual">
            <img src="/images/821.jpg" alt="Hoteles" style="max-width: 100%; border-radius: var(--radius-lg); box-shadow: 0 15px 30px rgba(0,0,0,0.08);">
          </div>
        </div>

        <!-- Feature 02: Rural -->
        <div class="feature-block inline-layout reverse animate-fade-in-up" style="animation-delay: 0.3s;">
          <div class="feature-text">
            <span class="feat-subtitle">02 / CASAS RURALES</span>
            <h2>El motor de reservas que nunca duerme.</h2>
            <p>Channel Manager sincronizado al segundo con Airbnb, Booking y VRBO. Sin sobre-reservas (overbookings), ingresos automatizados en piloto automático.</p>
            <a href="/alojamientos" class="prm-btn-text">Ver integraciones &rarr;</a>
          </div>
          <div class="feature-visual">
            <img src="/images/741.jpg" alt="Rural" style="max-width: 100%; border-radius: var(--radius-lg); box-shadow: 0 15px 30px rgba(0,0,0,0.08);">
          </div>
        </div>

        <!-- Feature 03: Ocio -->
        <div class="feature-block center-layout animate-fade-in-up" style="animation-delay: 0.4s;">
          <span class="feat-subtitle">03 / TURISMO DE OCIO Y ENTORNOS</span>
          <h2>Ticketing a gran escala simplificado.</h2>
          <p>Control de aforo en tiempo real, validación de códigos QR mediante dispositivos móviles y pasarelas de pago ultrarrápidas para museos, teatros y eventos monumentales.</p>
          <img src="/images/823.jpg" alt="Ocio y Cultura" style="width: 100%; border-radius: var(--radius-lg); margin: 2rem 0; box-shadow: 0 15px 30px rgba(0,0,0,0.08);">
          <a href="/ocio" class="prm-btn-primary" style="margin-top: 1.5rem;">Crea tu perfil de ocio ahora</a>
        </div>

      </div>
    </section>
  `,
  styles: [`
    /* Hero */
    .prm-hero {
      padding: 160px 0 60px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .badge {
      display: inline-block;
      padding: 6px 14px;
      background: rgba(249, 129, 0, 0.1);
      color: var(--primary-color);
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 2rem;
      border: 1px solid rgba(249, 129, 0, 0.2);
    }

    .prm-title {
      font-size: clamp(3rem, 7vw, 5.5rem);
      letter-spacing: -0.03em;
      line-height: 1.05;
      margin-bottom: 2rem;
      font-weight: 800;
    }

    .prm-subtitle {
      font-size: 1.25rem;
      color: var(--text-muted);
      max-width: 700px;
      margin: 0 auto 3rem;
      font-weight: 400;
    }

    .prm-actions {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      align-items: center;
    }

    .prm-btn-primary {
      background: var(--text-main);
      color: var(--bg-secondary);
      border-radius: var(--radius-pill);
      padding: 1rem 2rem;
      font-size: 1.05rem;
      font-weight: 600;
      transition: transform 0.3s ease, background 0.3s ease;
    }

    .prm-btn-primary:hover {
      background: var(--primary-color);
      transform: scale(1.05);
      color: #fff;
    }

    .prm-btn-text {
      background: transparent;
      color: var(--text-main);
      font-weight: 600;
      font-size: 1.05rem;
      transition: color 0.3s ease;
    }
    .prm-btn-text:hover { color: var(--primary-color); }

    .prm-hero-graphic {
      width: 100%;
      max-width: 1100px;
      height: 400px;
      margin: 5rem auto 0;
      background: linear-gradient(180deg, var(--bg-secondary) 0%, transparent 100%);
      border: 1px solid var(--border-subtle);
      border-bottom: none;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      box-shadow: 0 -20px 60px rgba(0,0,0,0.02);
      position: relative;
    }

    .mockup-dash {
      position: absolute;
      top: 24px; left: 24px; right: 24px; bottom: 0;
      background: var(--bg-color);
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      box-shadow: inset 0 2px 20px rgba(0,0,0,0.02);
    }

    /* Fluid Layout Features */
    .fluid-section {
      padding: 8rem 0;
    }

    .feature-block {
      margin-bottom: 10rem;
    }

    .feature-block:last-child {
      margin-bottom: 2rem;
    }

    .inline-layout {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4rem;
    }

    .inline-layout.reverse {
      flex-direction: row-reverse;
    }

    .feature-text {
      flex: 1;
      max-width: 550px;
    }

    .feat-subtitle {
      display: inline-block;
      font-weight: 700;
      color: var(--primary-color);
      letter-spacing: 0.1em;
      margin-bottom: 1.5rem;
      font-size: 0.85rem;
    }

    .feature-text h2 {
      font-size: clamp(2.2rem, 4vw, 3.5rem);
      letter-spacing: -0.02em;
      margin-bottom: 1.5rem;
      color: var(--text-main);
    }

    .feature-text p {
      font-size: 1.15rem;
      color: var(--text-muted);
      line-height: 1.7;
      margin-bottom: 2rem;
    }

    .center-layout {
      text-align: center;
      max-width: 800px;
      margin: 0 auto 8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .center-layout h2 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      letter-spacing: -0.03em;
      margin-bottom: 1.2rem;
      color: var(--text-main);
    }
    
    .center-layout p {
      font-size: 1.2rem;
      color: var(--text-muted);
      margin-bottom: 2rem;
    }

    /* Abstract Visuals */
    .feature-visual {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .orb-visual {
      width: 400px;
      height: 400px;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.6;
      animation: float 6s ease-in-out infinite alternate;
      z-index: -1;
    }

    .orb-orange {
      background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
    }

    .orb-amber {
      background: radial-gradient(circle, var(--secondary-color) 0%, transparent 70%);
      animation-delay: -3s;
    }

    @keyframes float {
      0% { transform: translateY(0px) scale(0.9); }
      100% { transform: translateY(-30px) scale(1.1); }
    }

    @media (max-width: 900px) {
      .inline-layout, .inline-layout.reverse {
        flex-direction: column;
        text-align: center;
        gap: 0;
      }
      .feature-text { margin-bottom: 4rem; }
      .orb-visual { width: 300px; height: 300px; }
      .feature-block { margin-bottom: 6rem; }
    }
  `]
})
export class HomeComponent {}
