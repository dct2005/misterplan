import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Section 1: Hero -->
    <header class="hero">
      <div class="container animate-fade-in-up">
        <div class="hero-content mx-auto">
          <h1 class="hero-title">Software para gestión turística integral</h1>
          <p class="hero-subtitle">
            Encuentra el mejor ecosistema para la gestión de hoteles, alojamientos y actividades turísticas. PMS, Channel Manager y Motores de reserva unificados en una sola plataforma.
          </p>
          <div class="hero-cta">
            <a routerLink="/contacto" class="btn-primary btn-lg">Solicitar Demo</a>
            <a routerLink="/novedades" class="btn-outline btn-lg">Ver novedades</a>
          </div>
        </div>
        
        <div class="hero-dashboard-img mt-5 animate-fade-in-up" style="animation-delay: 0.2s;">
          <img src="/images/740.jpg" alt="Misterplan PMS Dashboard" class="dashboard-mockup">
        </div>
      </div>
    </header>

    <!-- Logo Strip -->
    <section class="logo-strip section-bg-light">
      <div class="container text-center">
        <p class="text-muted mb-3 font-semibold">LA PLATAFORMA ELEGIDA POR ALOJAMIENTOS Y DESTINOS</p>
        <div class="logos-grid">
           <!-- Placeholder for logos -->
           <span class="logo-placeholder">Hotel Rural</span>
           <span class="logo-placeholder">SmartCity</span>
           <span class="logo-placeholder">Aventura Sur</span>
           <span class="logo-placeholder">Museo Nacional</span>
           <span class="logo-placeholder">Ayuntamientos</span>
        </div>
      </div>
    </section>

    <!-- Section: 4 Pillars (Solutions) -->
    <section class="section solutions-section">
      <div class="container">
        <div class="section-header">
          <h2>Soluciones adaptadas a tu negocio</h2>
          <p class="text-muted text-lg max-w-2xl mx-auto">Misterplan ofrece módulos especializados para cada sector turístico, garantizando la conectividad y eficiencia que necesitas.</p>
        </div>

        <div class="fw-cards-stack animate-fade-in-up" style="animation-delay: 0.1s;">
          
          <!-- Alojamientos -->
          <a routerLink="/alojamientos" class="fw-card">
            <div class="fw-card-content">
              <div class="icon-wrapper hotel-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11"></path></svg>
              </div>
              <div class="fw-text">
                <h3>Hotel y Alojamientos</h3>
                <p>Gestión completa para Hoteles, Casas Rurales y Apartamentos Turísticos con PMS y Channel Manager integrados.</p>
              </div>
              <div class="fw-action">
                <span class="card-link">Ver soluciones para alojamiento &rarr;</span>
              </div>
            </div>
          </a>

          <!-- Actividades -->
          <a routerLink="/actividades" class="fw-card">
            <div class="fw-card-content">
              <div class="icon-wrapper tour-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
              </div>
              <div class="fw-text">
                <h3>Software de Actividades</h3>
                <p>Comercialización y reservas para Turismo Activo, Actividades Acuáticas y Viajes en Globo.</p>
              </div>
              <div class="fw-action">
                <span class="card-link">Ver software de actividades &rarr;</span>
              </div>
            </div>
          </a>

          <!-- Ocio -->
          <a routerLink="/ocio" class="fw-card">
            <div class="fw-card-content">
              <div class="icon-wrapper" style="background: linear-gradient(135deg, #8B5CF6, #6D28D9);">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </div>
              <div class="fw-text">
                <h3>Turismo Cultural y Ocio</h3>
                <p>Motores de reserva para la venta de tickets en Museos, Bodegas (Enoturismo) y Conciertos.</p>
              </div>
              <div class="fw-action">
                <span class="card-link">Ver herramientas de ticketing &rarr;</span>
              </div>
            </div>
          </a>

          <!-- Destinos -->
          <a routerLink="/destinos" class="fw-card">
            <div class="fw-card-content">
              <div class="icon-wrapper rural-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div class="fw-text">
                <h3>Destinos y Municipios</h3>
                <p>Plataformas SmartCity y comercialización integral para destinos turísticos mediante Travel CARD.</p>
              </div>
              <div class="fw-action">
                <span class="card-link">Ver plataforma para destinos &rarr;</span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>

    <!-- Deep Dive Features (Alternating Layout) -->
    <section class="section section-bg-light">
      <div class="container">
        
        <div class="feature-split animate-fade-in-up">
          <div class="feature-text">
            <span class="badge">Automatización</span>
            <h2>Especial Check-in y Cerraduras</h2>
            <p>Todo para el check-in de hoteles y apartamentos turísticos. Integra escáneres, firmas digitales y envíos a la policía de forma automática.</p>
            <p>Genera pines de acceso temporales para cerraduras electrónicas o cajetines, mejorando la experiencia del cliente al evitar la entrega de llaves.</p>
            <a routerLink="/especial-checkin" class="btn-outline mt-4">Descubrir Especial Check-in</a>
          </div>
          <div class="feature-image">
            <img src="/images/821.jpg" alt="Checkin">
          </div>
        </div>

        <div class="feature-split reverse animate-fade-in-up" style="margin-bottom: 0;">
          <div class="feature-text">
            <span class="badge">Rentabilidad Legal</span>
            <h2>Revenue Manager & VeriFactu</h2>
            <p>Maximiza tus ingresos con reglas de precios dinámicos y algoritmos de tarifas inteligentes que se ajustan automáticamente a la ocupación.</p>
            <p>Además, cumple con la normativa española sin esfuerzo. Nuestro sistema de facturación electrónica está adaptado a la ley anti-fraude y al envío automático de facturas a la AEAT.</p>
            <div class="flex gap-4 mt-4">
              <a routerLink="/tarifas" class="btn-primary">Gestión de Tarifas</a>
              <a routerLink="/verifactu" class="btn-outline" style="margin-left: 1rem;">Conoce VeriFactu</a>
            </div>
          </div>
          <div class="feature-image">
            <img src="/images/bodegas-vino-gestion-visitas.jpg" alt="Revenue">
          </div>
        </div>

      </div>
    </section>

    <!-- New normative: Alquiler -->
    <section class="section">
      <div class="container">
        <div class="feature-split animate-fade-in-up">
          <div class="feature-text">
            <span class="badge">Nueva Normativa Legal</span>
            <h2>Nº de Registro de Alquiler (Ministerio de Vivienda)</h2>
            <p>Misterplan se adapta automáticamente a la nueva normativa del Ministerio de Vivienda para alquileres de corta duración. Automatiza la generación y validación del Número de Registro de Alquiler en todas tus reservas.</p>
            <p>Simplifica el cumplimiento legal y evita sanciones administrativas manteniendo toda tu información sincronizada.</p>
            <a routerLink="/alojamientos" class="btn-outline mt-4">Ver módulo legal</a>
          </div>
          <div class="feature-image">
            <div style="background: linear-gradient(135deg, #0A1C3E, #F98100); height: 350px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.5rem; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);">Cumplimiento Normativo</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specific Products Grid -->
    <section class="section section-bg-light">
      <div class="container">
        <div class="section-header">
          <h2>Un módulo para cada necesidad</h2>
          <p class="text-muted text-lg max-w-2xl mx-auto">Explora nuestro ecosistema completo de herramientas especializadas para cada sector del turismo.</p>
        </div>
        
        <div class="products-grid">
          <a routerLink="/mrp-hotel" class="product-mini-card">
            <div class="pm-icon">🏨</div>
            <div class="pm-content">
              <h4>MRP-HOTEL</h4>
              <p>Solución completa para hoteles</p>
            </div>
          </a>
          <a routerLink="/mrp-casa-rural" class="product-mini-card">
            <div class="pm-icon">🏡</div>
            <div class="pm-content">
              <h4>MRP-CASA RURAL</h4>
              <p>Solución para casas rurales</p>
            </div>
          </a>
          <a routerLink="/alojamientos" class="product-mini-card">
            <div class="pm-icon">🏢</div>
            <div class="pm-content">
              <h4>MRP-APARTAMENTOS</h4>
              <p>Gestión y comercialización</p>
            </div>
          </a>
          <a routerLink="/ocio" class="product-mini-card">
            <div class="pm-icon">🏛️</div>
            <div class="pm-content">
              <h4>MRP-MUSEUM</h4>
              <p>Venta y gestión de tickets</p>
            </div>
          </a>
          <a routerLink="/ocio" class="product-mini-card">
            <div class="pm-icon">🍷</div>
            <div class="pm-content">
              <h4>MRP-BODEGAS</h4>
              <p>Gestión turística y enoturismo</p>
            </div>
          </a>
          <a routerLink="/ocio" class="product-mini-card">
            <div class="pm-icon">🎵</div>
            <div class="pm-content">
              <h4>MRP-CONCIERTOS</h4>
              <p>Ticketing y taquilla</p>
            </div>
          </a>
          <a routerLink="/destinos" class="product-mini-card">
            <div class="pm-icon">🏛️</div>
            <div class="pm-content">
              <h4>AYUNTAMIENTOS</h4>
              <p>Plataforma SmartCity</p>
            </div>
          </a>
          <a routerLink="/destinos" class="product-mini-card">
            <div class="pm-icon">🗺️</div>
            <div class="pm-content">
              <h4>DESTINOS TURÍSTICOS</h4>
              <p>Comercialización integral</p>
            </div>
          </a>
          <a routerLink="/destinos" class="product-mini-card">
            <div class="pm-icon">💳</div>
            <div class="pm-content">
              <h4>TRAVEL CARD</h4>
              <p>Tarjeta multiproducto</p>
            </div>
          </a>
          <a routerLink="/turismo-activo" class="product-mini-card">
            <div class="pm-icon">🧗</div>
            <div class="pm-content">
              <h4>TURISMO ACTIVO</h4>
              <p>Venta y gestión de tickets</p>
            </div>
          </a>
          <a routerLink="/actividades" class="product-mini-card">
            <div class="pm-icon">🏄</div>
            <div class="pm-content">
              <h4>ACT. ACUÁTICAS</h4>
              <p>Reservas y comercialización</p>
            </div>
          </a>
          <a routerLink="/actividades" class="product-mini-card">
            <div class="pm-icon">🎈</div>
            <div class="pm-content">
              <h4>VIAJE EN GLOBO</h4>
              <p>Venta de regalos</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Testimonials / Opiniones -->
    <section class="section">
      <div class="container text-center">
        <h2 class="mb-3">Cientos de clientes confían en Misterplan</h2>
        <p class="text-muted mb-5 text-lg">Descubre lo que dicen de nosotros los profesionales del sector.</p>
        <div class="testimonial-card">
          <p class="testimonial-text">"Misterplan ha cambiado por completo la forma en la que gestionamos las reservas de nuestras actividades. La integración con la plataforma del destino es simplemente espectacular."</p>
          <p class="testimonial-author">- Cliente de Turismo Activo</p>
        </div>
        <a routerLink="/valoraciones" class="btn-primary mt-4" style="margin-top: 2rem;">Ver más opiniones</a>
      </div>
    </section>

    <!-- Final CTA Banner -->
    <section class="section">
      <div class="container">
        <div class="cta-banner">
          <h2>¡Déjanos sorprenderte!</h2>
          <p>Descubre las utilidades para hoteles, turismo activo y destinos que no verás en otro software.</p>
          <div class="cta-actions">
            <a routerLink="/contacto" class="btn-primary btn-lg">Solicitar Demo</a>
            <a routerLink="/aula" class="btn-outline btn-lg" style="margin-left: 1rem; background: rgba(255,255,255,0.1); color: white; border-color: white;">Aula de Formación</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .mx-auto { margin-left: auto; margin-right: auto; }
    .max-w-2xl { max-width: 42rem; }
    .text-lg { font-size: 1.125rem; }
    .font-semibold { font-weight: 600; }
    .flex { display: flex; }

    /* Hero adjustments */
    .hero {
      background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);
      padding-top: 120px;
      padding-bottom: 4rem;
    }
    
    .hero-content {
      max-width: 900px;
    }
    
    .hero-title {
      font-size: clamp(3rem, 6vw, 4.5rem);
      margin-bottom: 1.5rem;
      letter-spacing: -0.03em;
      color: var(--secondary-color);
    }
    
    .hero-dashboard-img {
      max-width: 1000px;
      margin: 0 auto;
      padding: 1rem;
      background: var(--bg-secondary);
      border-radius: 20px 20px 0 0;
      box-shadow: 0 -10px 40px rgba(0,0,0,0.05);
      border: 1px solid var(--border-subtle);
      border-bottom: none;
    }
    
    .dashboard-mockup {
      width: 100%;
      border-radius: 12px;
      display: block;
    }

    /* Logos */
    .logo-strip {
      padding: 3rem 0;
      border-top: 1px solid var(--border-subtle);
      border-bottom: 1px solid var(--border-subtle);
    }
    
    .logos-grid {
      display: flex;
      justify-content: center;
      gap: 3rem;
      flex-wrap: wrap;
      opacity: 0.6;
    }
    
    .logo-placeholder {
      font-size: 1.25rem;
      font-weight: 700;
      font-family: var(--font-heading);
      color: var(--text-muted);
    }
    /* Section Header */
    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }
    .section-header h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    /* Full Width Feature Cards */
    .fw-cards-stack {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .fw-card {
      display: block;
      background: var(--bg-secondary);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      text-decoration: none;
      color: inherit;
      transition: all var(--transition-speed) ease;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }
    
    .fw-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      border-color: var(--border-focus);
    }
    
    .fw-card-content {
      display: flex;
      align-items: center;
      padding: 2rem 2.5rem;
      gap: 2rem;
    }
    
    .icon-wrapper {
      width: 72px;
      height: 72px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-md);
      color: white;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    
    .icon-wrapper svg {
      width: 32px;
      height: 32px;
    }
    
    .hotel-icon { background: linear-gradient(135deg, #F98100, #E07300); }
    .tour-icon { background: linear-gradient(135deg, #0A1C3E, #132A55); }
    .rural-icon { background: linear-gradient(135deg, #10B981, #059669); }
    
    .fw-text {
      flex: 1;
    }
    
    .fw-text h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--secondary-color);
    }
    
    .fw-text p {
      font-size: 1.1rem;
      color: var(--text-muted);
      margin: 0;
    }
    
    .fw-action {
      flex-shrink: 0;
    }
    
    .card-link {
      color: var(--primary-color);
      font-weight: 600;
      font-size: 1.05rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: gap var(--transition-speed) ease;
    }
    
    .fw-card:hover .card-link {
      gap: 0.75rem;
    }

    /* Feature Splits */
    .feature-split {
      display: flex;
      align-items: center;
      gap: 4rem;
      margin-bottom: 6rem;
    }
    .feature-split.reverse {
      flex-direction: row-reverse;
    }
    .feature-text { flex: 1; }
    .feature-image { flex: 1; }
    .feature-image img {
      width: 100%;
      border-radius: var(--radius-lg);
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
    }
    .badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: rgba(249, 129, 0, 0.1);
      color: var(--primary-color);
      border-radius: var(--radius-pill);
      font-weight: 600;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }
    .feature-text h2 {
      font-size: 2.25rem;
      margin-bottom: 1.25rem;
    }
    .feature-text p {
      font-size: 1.125rem;
      color: var(--text-muted);
      margin-bottom: 1.25rem;
    }

    /* Mini Cards */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    
    .product-mini-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: var(--bg-secondary);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 1.5rem;
      text-decoration: none;
      color: inherit;
      transition: all var(--transition-speed) ease;
    }
    
    .product-mini-card:hover {
      border-color: var(--border-focus);
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
      transform: translateY(-2px);
    }
    
    .pm-icon {
      font-size: 2rem;
      background: var(--bg-color);
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-sm);
    }
    
    .pm-content h4 {
      font-size: 1.1rem;
      margin-bottom: 0.25rem;
      color: var(--secondary-color);
    }
    
    .pm-content p {
      font-size: 0.9rem;
      color: var(--text-muted);
      margin: 0;
    }

    /* Testimonials */
    .testimonial-card {
      max-width: 800px;
      margin: 0 auto;
      background: var(--bg-secondary);
      padding: 3rem;
      border-radius: var(--radius-lg);
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      border: 1px solid var(--border-subtle);
    }
    
    .testimonial-text {
      font-size: 1.25rem;
      font-style: italic;
      color: var(--secondary-color);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .testimonial-author {
      font-weight: 700;
      color: var(--primary-color);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .fw-card-content {
        flex-direction: column;
        text-align: center;
        padding: 2rem 1.5rem;
        gap: 1.5rem;
      }
      .fw-text p {
        font-size: 1rem;
      }
      .feature-split, .feature-split.reverse {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
      }
      .feature-image {
        order: -1; /* Image always on top on mobile */
      }
    }

    .cta-banner {
      background: var(--secondary-color);
      border-radius: var(--radius-lg);
      padding: 5rem 3rem;
      text-align: center;
      color: white;
      box-shadow: 0 25px 50px -12px rgba(10, 28, 62, 0.25);
    }
    
    .cta-banner h2 {
      color: white;
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .cta-banner p {
      font-size: 1.25rem;
      color: #94A3B8;
      max-width: 600px;
      margin: 0 auto 3rem;
    }
    
    .cta-actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    @media (max-width: 768px) {
      .cta-actions {
        flex-direction: column;
      }
      .cta-actions a {
        margin-left: 0 !important;
      }
    }
  `]
})
export class HomeComponent {}

