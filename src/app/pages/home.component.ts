import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <!-- Section 1: Hero Slider -->
    <header class="prm-hero">
      <div class="container animate-fade-in-up">
        <div class="badge">Nueva Generación de PMS</div>
        <h1 class="prm-title">Gestiona. Crece.<br><span class="text-gradient">Domina tu mercado.</span></h1>
        <p class="prm-subtitle">
          Deja atrás el software rígido de ayer. Descubre el ecosistema interactivo que fluye con tu negocio: Motor de reservas, PMS y Channel Manager unificados.
        </p>
        <div class="prm-actions">
          <button class="prm-btn-primary">Empieza la prueba de 14 días</button>
          <button class="prm-btn-text" style="display: flex; align-items: center; gap: 8px;">
            <span style="display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; background: #FF0000; color: white; border-radius: 50%; font-size: 10px;">▶</span>
            Ver vídeo
          </button>
        </div>
      </div>
      <div class="prm-hero-graphic animate-fade-in-up" style="animation-delay: 0.3s; background: none; border: none; box-shadow: none;">
        <img src="/images/740.jpg" alt="Misterplan PMS Dashboard" style="width: 100%; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
      </div>
    </header>

    <!-- Section 2: Intro 2026 -->
    <section class="intro-2026 text-center">
       <div class="container animate-fade-in-up">
          <h2 class="section-title">Nos espera un 2026 con grandes novedades</h2>
          <p class="section-subtitle">Presentamos más conectividad, mejor interfaz y nuevas herramientas pensadas exclusivamente para maximizar tu rentabilidad este año.</p>
       </div>
    </section>

    <!-- Section 3: 4 Image Pillars (Visually Stunning) -->
    <section class="four-pillars">
       <div class="container animate-fade-in-up">
          <div class="grid-4-img">
            <a href="/alojamientos" class="img-card group">
              <div class="img-bg" style="background-image: url('/images/821.jpg')"></div>
              <div class="img-overlay"></div>
              <div class="img-content">
                <span class="icon-blur">🏨</span>
                <h3>Hoteles y Alojamientos</h3>
                <p>PMS y Channel Manager integrados en la nube.</p>
              </div>
            </a>
            <a href="/actividades" class="img-card group">
              <div class="img-bg" style="background-image: url('/images/bodegas-vino-gestion-visitas.jpg')"></div>
              <div class="img-overlay"></div>
              <div class="img-content">
                <span class="icon-blur">🚵</span>
                <h3>Actividades Turísticas</h3>
                <p>Reservas online y taquilla física en tiempo real.</p>
              </div>
            </a>
            <a href="/ocio" class="img-card group">
              <div class="img-bg" style="background-image: url('/images/823.jpg')"></div>
              <div class="img-overlay"></div>
              <div class="img-content">
                <span class="icon-blur">🎭</span>
                <h3>Cultura y Ocio</h3>
                <p>Gestión de aforo, museos y venta mediante códigos QR.</p>
              </div>
            </a>
            <a href="/destinos" class="img-card group">
              <div class="img-bg" style="background-image: url('/images/741.jpg')"></div>
              <div class="img-overlay"></div>
              <div class="img-content">
                <span class="icon-blur">🗺️</span>
                <h3>Ayuntamientos y Destinos</h3>
                <p>Centro inteligente para digitalizar la oferta local comunitaria.</p>
              </div>
            </a>
          </div>
       </div>
    </section>

    <!-- Section 4: Evolución Banner -->
    <section class="evolucion-banner">
       <div class="container text-center animate-fade-in-up">
          <h2 class="text-white title-large">La evolución que estabas esperando</h2>
          <p class="text-white subtitle-large">Un ecosistema sin fricciones donde la información viaja en milisegundos desde la web hasta tu recepción.</p>
       </div>
    </section>

    <!-- Section 5: Pillar Details (Fluid Typographic Features) -->
    <section class="fluid-section">
      <div class="container">
        <!-- Feature 01 -->
        <div class="feature-block inline-layout animate-fade-in-up">
          <div class="feature-text">
            <span class="feat-subtitle">01 / HOTELES Y APARTAMENTOS</span>
            <h2>Revoluciona tu recepción en la nube.</h2>
            <p>El PMS integral donde las tareas complejas de facturación, limpieza y reservas se reducen a arrastrar y soltar.</p>
            <a href="/alojamientos" class="prm-btn-text">Descubre el PMS hotelero &rarr;</a>
          </div>
          <div class="feature-visual">
            <img src="/images/821.jpg" alt="Hoteles" class="img-fluid rounded-lg shadow-lg">
          </div>
        </div>

        <!-- Feature 02 -->
        <div class="feature-block inline-layout reverse animate-fade-in-up">
          <div class="feature-text">
            <span class="feat-subtitle">02 / CASAS RURALES</span>
            <h2>El motor que nunca duerme.</h2>
            <p>Channel Manager sincronizado al segundo. Sin sobre-reservas (overbookings), ingresos automatizados en piloto automático.</p>
            <a href="/alojamientos" class="prm-btn-text">Ver integraciones &rarr;</a>
          </div>
          <div class="feature-visual">
             <img src="/images/741.jpg" alt="Rural" class="img-fluid rounded-lg shadow-lg">
          </div>
        </div>
        
        <!-- Feature 03 -->
        <div class="feature-block inline-layout animate-fade-in-up">
          <div class="feature-text">
            <span class="feat-subtitle">03 / ACTIVIDADES TURÍSTICAS</span>
            <h2>Control total de tus experiencias.</h2>
            <p>Gestiona disponibilidad, guías y recursos en un solo lugar. Vende online y a través de agencias con la misma herramienta.</p>
            <a href="/actividades" class="prm-btn-text">Más información sobre turismo activo &rarr;</a>
          </div>
          <div class="feature-visual">
             <img src="/images/bodegas-vino-gestion-visitas.jpg" alt="Actividades" class="img-fluid rounded-lg shadow-lg">
          </div>
        </div>

        <!-- Feature 04 -->
        <div class="feature-block center-layout animate-fade-in-up">
          <span class="feat-subtitle">04 / TURISMO DE OCIO Y ENTORNOS</span>
          <h2>Ticketing a gran escala simplificado.</h2>
          <p>Control de aforo en tiempo real, validación de códigos QR mediante dispositivos móviles y pasarelas ultras rápidas.</p>
          <img src="/images/823.jpg" alt="Ocio y Cultura" class="img-fluid rounded-lg shadow-lg margin-y">
          <a href="/ocio" class="prm-btn-primary mt-1">Crea tu perfil de ocio</a>
        </div>
      </div>
    </section>

    <!-- Section 6: Info Cards with Aurora Ambient UI -->
    <section class="info-cards-section relative-overflow">
       <div class="aurora-orb orb-1"></div>
       <div class="aurora-orb orb-2"></div>
       
       <div class="container animate-fade-in-up relative-z">
          <h2 class="section-title text-center" style="margin-bottom: 3rem;">Software Completo y Modular</h2>
          <div class="grid-3-bento">
             <a href="/especial-checkin" class="bento-glass group">
               <div class="bento-header">
                 <div class="icon-gradient">🛂</div>
                 <div class="bento-title">
                   <h4>Especial Checkin</h4>
                 </div>
               </div>
               <p>Escáner de DNI e ICR ultrarrápido, firmas digitales 100% legales y envío directo a comisarías automatizado sin interacciones.</p>
               <div class="card-arrow">&rarr;</div>
             </a>
             <a href="/tarifas" class="bento-glass group">
               <div class="bento-header">
                 <div class="icon-gradient">💰</div>
                 <div class="bento-title">
                   <h4>Revenue & Tarifas</h4>
                 </div>
               </div>
               <p>Reglas algorítmicas de precios dinámicos según ocupación local, optimizando por sí solas los ingresos del alojamiento cada noche.</p>
               <div class="card-arrow">&rarr;</div>
             </a>
             <a href="/cerraduras" class="bento-glass group">
               <div class="bento-header">
                 <div class="icon-gradient">🔓</div>
                 <div class="bento-title">
                   <h4>Cerraduras Smart</h4>
                 </div>
               </div>
               <p>Generación de pines PIN temporales o Bluetooth para accesos de clientes antes de la llegada, evitando la entrega de llaves manuales.</p>
               <div class="card-arrow">&rarr;</div>
             </a>
             <a href="/aula" class="bento-glass group">
               <div class="bento-header">
                 <div class="icon-gradient">🎓</div>
                 <div class="bento-title">
                   <h4>Aula Formativa</h4>
                 </div>
               </div>
               <p>Webinars semanales en directo y academias con tutoriales técnicos en video 4k para todo tu nuevo personal de recepción.</p>
               <div class="card-arrow">&rarr;</div>
             </a>
             <a href="/registro-viajeros" class="bento-glass group">
               <div class="bento-header">
                 <div class="icon-gradient">📋</div>
                 <div class="bento-title">
                   <h4>Registro Oficial</h4>
                 </div>
               </div>
               <p>Adaptado estrictamente al Real Decreto. Almacenaje de libros de huéspedes y partes para asegurar el envío de la documentación.</p>
               <div class="card-arrow">&rarr;</div>
             </a>
             <a href="/verifactu" class="bento-glass group">
               <div class="bento-header">
                 <div class="icon-gradient">🧾</div>
                 <div class="bento-title">
                   <h4>Sistema VeriFactu</h4>
                 </div>
               </div>
               <p>Módulo de contabilidad y facturación preparado internamente para las leyes anti-fraude y envío de factura a servidores de la AEAT.</p>
               <div class="card-arrow">&rarr;</div>
             </a>
          </div>
       </div>
    </section>

    <!-- Section 7: Normativa Block -->
    <section class="normativa-section">
      <div class="container animate-fade-in-up">
        <div class="normativa-box">
          <h2>Normativa de Turismo & Cumplimiento Legal</h2>
          <p>Misterplan se actualiza mensualmente para garantizar que tu negocio cumpla con las obligaciones fiscales y de seguridad vigentes, como el envío directo a Hospederías y partes policiales de todos los cuerpos del Estado.</p>
          <a href="/contacto" class="btn-outline-white">Hablar con un asesor</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Hero */
    .prm-hero { padding: 160px 0 60px; text-align: center; display: flex; flex-direction: column; align-items: center; position: relative; overflow: hidden; }
    .badge { display: inline-block; padding: 6px 14px; background: rgba(249, 129, 0, 0.1); color: var(--primary-color); border-radius: 999px; font-size: 0.85rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 2rem; border: 1px solid rgba(249, 129, 0, 0.2); }
    .prm-title { font-size: clamp(3rem, 7vw, 5.5rem); letter-spacing: -0.03em; line-height: 1.05; margin-bottom: 2rem; font-weight: 800; }
    .prm-subtitle { font-size: 1.25rem; color: var(--text-muted); max-width: 700px; margin: 0 auto 3rem; font-weight: 400; }
    .prm-actions { display: flex; gap: 1.5rem; justify-content: center; align-items: center; }
    .prm-btn-primary { background: var(--text-main); color: var(--bg-secondary); border-radius: var(--radius-pill); padding: 1rem 2rem; font-size: 1.05rem; font-weight: 600; transition: transform 0.3s ease, background 0.3s ease; border: none; cursor: pointer; }
    .prm-btn-primary:hover { background: var(--primary-color); transform: scale(1.05); color: #fff; }
    .prm-btn-text { background: transparent; color: var(--text-main); font-weight: 600; font-size: 1.05rem; transition: color 0.3s ease; border: none; cursor: pointer; }
    .prm-btn-text:hover { color: var(--primary-color); }
    .prm-hero-graphic { width: 100%; max-width: 1100px; height: 400px; margin: 4rem auto 0; background: linear-gradient(180deg, var(--bg-secondary) 0%, transparent 100%); border: 1px solid var(--border-subtle); border-bottom: none; border-top-left-radius: 24px; border-top-right-radius: 24px; position: relative; }

    /* Common typography */
    .section-title { font-size: clamp(2rem, 4vw, 2.8rem); margin-bottom: 1rem; color: var(--text-main); font-weight: 700; }
    .section-subtitle { font-size: 1.15rem; color: var(--text-muted); max-width: 700px; margin: 0 auto; }
    .text-center { text-align: center; } .margin-y { margin: 2rem 0; } .mb-4 { margin-bottom: 3rem; }

    /* Sections */
    .intro-2026 { padding: 5rem 0 3rem; }
    .evolucion-banner { background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); padding: 6rem 0; }
    .text-white { color: #fff !important; }
    .title-large { font-size: clamp(2.5rem, 5vw, 3.5rem); margin-bottom: 1.5rem; font-weight: 800; letter-spacing: -0.02em;}
    .subtitle-large { font-size: 1.3rem; max-width: 800px; margin: 0 auto; opacity: 0.9; }
    .fluid-section { padding: 6rem 0; }
    .normativa-section { padding: 4rem 0 6rem; }

    /* --- BEAUTIFUL IMAGE PILLAR CARDS --- */
    .four-pillars { padding: 0 0 6rem; }
    .grid-4-img {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
       gap: 1.5rem;
    }
    .img-card {
       position: relative;
       border-radius: 24px;
       overflow: hidden;
       aspect-ratio: 9/11;
       display: flex;
       flex-direction: column;
       justify-content: flex-end;
       text-decoration: none;
       box-shadow: 0 15px 35px rgba(0,0,0,0.1);
       transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .img-card:hover { transform: translateY(-10px) scale(1.02); }
    
    .img-bg {
       position: absolute; inset: 0;
       background-size: cover; background-position: center;
       transition: transform 0.6s ease;
    }
    .img-card:hover .img-bg { transform: scale(1.1); }
    
    .img-overlay {
       position: absolute; inset: 0;
       background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 100%);
       transition: opacity 0.4s ease;
    }
    .img-card:hover .img-overlay { opacity: 0.9; }
    
    .img-content {
       position: relative; z-index: 10;
       padding: 2.2rem 2rem; color: white !important;
    }
    .img-content h3 { font-size: 1.45rem; font-weight: 800; margin-bottom: 0.5rem; letter-spacing: -0.02em; color: white !important; text-shadow: 0 2px 10px rgba(0,0,0,0.8); }
    .img-content p { font-size: 0.95rem; line-height: 1.4; transform: translateY(10px); opacity: 0; transition: all 0.3s ease; color: white !important; text-shadow: 0 2px 8px rgba(0,0,0,0.8); }
    .img-card:hover .img-content p { transform: translateY(0); opacity: 1; }
    
    .icon-blur {
       display: inline-flex;
       background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2);
       backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);
       width: 50px; height: 50px;
       align-items: center; justify-content: center; border-radius: 14px;
       font-size: 1.5rem; margin-bottom: 1.2rem;
    }

    /* --- BEAUTIFUL AURORA BENTO CADO --- */
    .relative-overflow { position: relative; overflow: hidden; padding: 6rem 0; background: var(--bg-secondary); }
    .relative-z { position: relative; z-index: 5; }
    
    .aurora-orb {
       position: absolute; border-radius: 50%;
       filter: blur(90px); opacity: 0.6; z-index: 1;
       animation: auroraFloat 8s infinite alternate ease-in-out;
    }
    .orb-1 {
       width: 600px; height: 600px;
       background: radial-gradient(circle, var(--primary-color), transparent 60%);
       top: -150px; right: -150px;
    }
    .orb-2 {
       width: 700px; height: 700px;
       background: radial-gradient(circle, #ff007a, transparent 60%);
       bottom: -200px; left: -150px;
       animation-delay: -4s;
    }
    @keyframes auroraFloat {
       0% { transform: translateY(0) scale(1); }
       100% { transform: translateY(60px) scale(1.1); }
    }

    .grid-3-bento {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
       gap: 2rem;
    }
    
    .bento-glass {
       background: rgba(255, 255, 255, 0.65);
       backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px);
       border: 1px solid rgba(255, 255, 255, 0.9);
       border-radius: 24px; padding: 2.5rem;
       text-decoration: none; display: flex; flex-direction: column; justify-content: space-between;
       box-shadow: 0 10px 40px rgba(0,0,0,0.06);
       transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
       position: relative; overflow: hidden;
    }
    .bento-glass:hover {
       transform: translateY(-8px);
       box-shadow: 0 20px 40px rgba(249, 129, 0, 0.15);
       border-color: rgba(249, 129, 0, 0.5);
    }
    
    .bento-header { display: flex; align-items: center; gap: 1.2rem; margin-bottom: 1.5rem; }
    .icon-gradient {
       width: 55px; height: 55px; border-radius: 16px;
       display: flex; align-items: center; justify-content: center;
       background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
       color: white; font-size: 1.5rem;
       box-shadow: 0 8px 20px rgba(249,129,0,0.3);
    }
    .bento-title h4 { font-size: 1.4rem; color: var(--text-main); font-weight: 800; margin: 0; letter-spacing: -0.02em; }
    .bento-glass p { font-size: 1.1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem; }
    
    .card-arrow {
       color: var(--primary-color); font-size: 1.6rem; font-weight: bold;
       align-self: flex-start; opacity: 0; transform: translateX(-15px); transition: all 0.3s ease;
    }
    .bento-glass:hover .card-arrow { opacity: 1; transform: translateX(0); }


    /* Fluid Feature Layouts */
    .feature-block { margin-bottom: 8rem; }
    .feature-block:last-child { margin-bottom: 2rem; }
    .inline-layout { display: flex; align-items: center; justify-content: space-between; gap: 4rem; }
    .inline-layout.reverse { flex-direction: row-reverse; }
    .feature-text { flex: 1; max-width: 550px; }
    .feat-subtitle { display: inline-block; font-weight: 700; color: var(--primary-color); letter-spacing: 0.1em; margin-bottom: 1.5rem; font-size: 0.85rem; }
    .feature-text h2 { font-size: clamp(2.2rem, 4vw, 3.5rem); letter-spacing: -0.02em; margin-bottom: 1.5rem; color: var(--text-main); }
    .feature-text p { font-size: 1.15rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 2rem; }
    .center-layout { text-align: center; max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }
    .center-layout h2 { font-size: clamp(2.5rem, 5vw, 4rem); letter-spacing: -0.03em; margin-bottom: 1.2rem; color: var(--text-main); }
    .center-layout p { font-size: 1.2rem; color: var(--text-muted); margin-bottom: 2rem; }
    .feature-visual { flex: 1; text-align: center; }
    .img-fluid { max-width: 100%; height: auto; }
    .rounded-lg { border-radius: var(--radius-lg); }
    .shadow-lg { box-shadow: 0 15px 30px rgba(0,0,0,0.08); }

    /* Normativa block */
    .normativa-box { background: linear-gradient(135deg, rgba(255, 60, 60, 0.05), transparent); border: 1px solid rgba(255, 60, 60, 0.2); border-radius: var(--radius-lg); padding: 4rem 2rem; text-align: center; max-width: 800px; margin: 0 auto; }
    .normativa-box h2 { color: #df3030; font-size: 2rem; margin-bottom: 1rem; }
    .normativa-box p { font-size: 1.1rem; color: var(--text-main); margin-bottom: 2rem; line-height: 1.6; }
    .btn-outline-white { display: inline-block; padding: 0.8rem 1.8rem; border: 2px solid #df3030; color: #df3030; border-radius: var(--radius-pill); text-decoration: none; font-weight: 600; transition: all 0.3s; }
    .btn-outline-white:hover { background: #df3030; color: #fff; }

    @media (max-width: 900px) {
      .inline-layout, .inline-layout.reverse { flex-direction: column; text-align: center; gap: 0; }
      .feature-text { margin-bottom: 3rem; max-width: 100%; }
      .feature-block { margin-bottom: 6rem; }
    }
  `]
})
export class HomeComponent {}
