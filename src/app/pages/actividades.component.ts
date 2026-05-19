import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px;">
      <div class="container animate-fade-in-up">
        
        <!-- Hero Header -->
        <div class="text-center mb-5 max-w-3xl mx-auto">
          <span class="badge" style="display: inline-block; padding: 6px 14px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 999px; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Tourism Activities</span>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.02em;">Gestión para Actividades Turísticas</h1>
          <p class="text-muted" style="font-size: 1.2rem; line-height: 1.7;">
            Controla los aforos, el personal y la distribución en las principales OTA del mundo desde un solo panel de control unificado.
          </p>
        </div>

        <!-- Products Grid -->
        <div class="product-grid mt-5">
          
          <!-- Turismo Activo -->
          <a routerLink="/turismo-activo" class="guesty-card decoration-none" style="display: block;">
            <div class="card-img-top mb-3" style="background-image: url('/images/motor-empresas-actividades-turisticas.jpg'); height: 200px; background-size: cover; background-position: center; border-radius: 8px;"></div>
            <h3>Turismo Activo</h3>
            <p class="text-muted mb-4">Multiaventura, kayak y alquiler de material. Integración de reservas en tiempo real.</p>
            <span class="card-link">Saber más &rarr;</span>
          </a>

          <!-- Barcos -->
          <a routerLink="/barcos" class="guesty-card decoration-none" style="display: block;">
            <div class="card-img-top mb-3" style="background-image: url('/images/823.jpg'); height: 200px; background-size: cover; background-position: center; border-radius: 8px;"></div>
            <h3>Barcos y Charter</h3>
            <p class="text-muted mb-4">Gestión de flotas y venta por plazas. Control de disponibilidad simplificado.</p>
            <span class="card-link">Ver flota &rarr;</span>
          </a>

          <!-- Rutas -->
          <a routerLink="/rutas" class="guesty-card decoration-none" style="display: block;">
            <div class="card-img-top mb-3" style="background-image: url('/images/motor-turismo-activo.jpg'); height: 200px; background-size: cover; background-position: center; border-radius: 8px;"></div>
            <h3>Rutas y Visitas Guiadas</h3>
            <p class="text-muted mb-4">Optimiza tus Free Tours y rutas urbanas con control de aforo y SMS.</p>
            <span class="card-link">Gestionar rutas &rarr;</span>
          </a>

        </div>

        <!-- Section 3: Value Prop (SaaS Banner) -->
        <div class="cta-banner mt-5 text-center" style="background: var(--bg-color); padding: 4rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Digitaliza tu aventura hoy mismo</h2>
          <p class="text-muted mb-4" style="font-size: 1.15rem; max-width: 600px; margin-inline: auto;">Misterplan es el motor que impulsa a las mejores empresas de actividades de España.</p>
          <div style="display: flex; gap: 1rem; justify-content: center;">
            <a routerLink="/contacto" class="btn-primary">Solicitar demo gratuita</a>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .max-w-3xl { max-width: 48rem; }
    .mx-auto { margin-inline: auto; }
    .mt-5 { margin-top: 4rem; }
    .decoration-none { text-decoration: none; }
    
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .card-link {
      font-weight: 600;
      color: var(--primary-color);
    }
  `]
})
export class ActividadesComponent {}
