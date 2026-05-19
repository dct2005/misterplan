import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alojamientos',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px;">
      <div class="container animate-fade-in-up">
        
        <!-- Hero Header -->
        <div class="text-center mb-5 max-w-3xl mx-auto">
          <span class="badge" style="display: inline-block; padding: 6px 14px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 999px; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">PMS & Channel Manager</span>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.02em;">Soluciones para Todo Tipo de Alojamiento</h1>
          <p class="text-muted" style="font-size: 1.2rem; line-height: 1.7;">
            Desde hoteles de 5 estrellas hasta acogedoras casas rurales. El ecosistema Misterplan se adapta a la escala y necesidades únicas de tu establecimiento.
          </p>
        </div>

        <!-- Products Grid -->
        <div class="product-grid mt-5">
          
          <!-- MRP-HOTEL -->
          <div class="guesty-card" [routerLink]="['/mrp-hotel']" style="cursor: pointer;">
            <div class="card-img-top mb-3" style="background-image: url('/images/motor-PMS-channelmanager-hotel.jpg'); height: 200px; background-size: cover; background-position: center; border-radius: 8px;"></div>
            <h3>MRP-HOTEL</h3>
            <p class="text-muted mb-4">La solución PMS premium para hoteles que requieren control absoluto de operaciones, facturación avanzada y limpieza.</p>
            <span class="card-link">Ver especificaciones &rarr;</span>
          </div>

          <!-- MRP-CASA RURAL -->
          <div class="guesty-card" [routerLink]="['/mrp-casa-rural']" style="cursor: pointer;">
            <div class="card-img-top mb-3" style="background-image: url('/images/741.jpg'); height: 200px; background-size: cover; background-position: center; border-radius: 8px;"></div>
            <h3>MRP-CASA RURAL</h3>
            <p class="text-muted mb-4">Sincronización total para el turismo rural y masías. Channel Manager automático.</p>
            <span class="card-link">Saber más &rarr;</span>
          </div>

          <!-- Apartamentos Turísticos -->
          <div class="guesty-card" style="cursor: pointer;">
            <div class="card-img-top mb-3" style="background-image: url('/images/gestion-comercializacion-apartamento-turistico.jpg'); height: 200px; background-size: cover; background-position: center; border-radius: 8px;"></div>
            <h3>Apartamentos Turísticos</h3>
            <p class="text-muted mb-4">Gestión eficiente de carteras de apartamentos multizona desde un único panel centralizado.</p>
            <span class="card-link">Ver planes &rarr;</span>
          </div>

          <!-- Alquiler Vacacional -->
          <div class="guesty-card" style="cursor: pointer;">
            <div class="card-img-top mb-3" style="background-image: url('/images/gestion-alojamiento-vacacional.jpg'); height: 200px; background-size: cover; background-position: center; border-radius: 8px;"></div>
            <h3>Alquiler Vacacional</h3>
            <p class="text-muted mb-4">Potencia tus alquileres de corta estancia con motores de reservas directas integrados.</p>
            <span class="card-link">Información &rarr;</span>
          </div>

        </div>

        <!-- Section 3: Value Prop (SaaS Banner) -->
        <div class="cta-banner mt-5 text-center" style="background: var(--bg-color); padding: 4rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Todos tus canales, una sola señal</h2>
          <p class="text-muted mb-4" style="font-size: 1.15rem; max-width: 600px; margin-inline: auto;">Misterplan unifica tu disponibilidad evitando el overbooking para que te centres en lo que importa: tus huéspedes.</p>
          <div style="display: flex; gap: 1rem; justify-content: center;">
            <a routerLink="/contacto" class="btn-primary">Empezar ahora</a>
            <a routerLink="/soporte" class="btn-outline">Ver integraciones</a>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .max-w-3xl { max-width: 48rem; }
    .mx-auto { margin-inline: auto; }
    .mt-5 { margin-top: 4rem; }
    
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
export class AlojamientosComponent {}
