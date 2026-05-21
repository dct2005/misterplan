import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ocio',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px; background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);">
      <div class="container animate-fade-in-up">
        
        <!-- Hero Header -->
        <div class="text-center mb-5 max-w-3xl mx-auto">
          <span class="badge" style="display: inline-block; padding: 6px 14px; background: rgba(249, 129, 0, 0.1); color: var(--primary-color); border-radius: 999px; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">Cultura y Entretenimiento</span>
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.02em; color: var(--secondary-color);">Ecosistema para Ocio y Espectáculos</h1>
          <p class="text-muted" style="font-size: 1.2rem; line-height: 1.7;">
            La plataforma definitiva para la gestión de aforos, venta de tickets y taquilla física. Desde museos icónicos hasta festivales multitudinarios.
          </p>
          <div class="mt-4" style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
            <a routerLink="/contacto" class="btn-primary" style="padding: 1rem 2rem; border-radius: 99px; font-size: 1.1rem; text-decoration: none;">Solicitar demostración</a>
            <a routerLink="/contacto" class="btn-outline" style="padding: 1rem 2rem; border-radius: 99px; font-size: 1.1rem; text-decoration: none;">Ver tarifas</a>
          </div>
        </div>

        <!-- Horizontal Features -->
        <div class="features-list mt-5" style="display: flex; flex-direction: column; gap: 6rem; margin-top: 8rem;">

          <!-- Feature 1: MRP-MUSEUM -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Silo Museo</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">MRP-MUSEUM</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Gestión integral de Museos: control de aforo por franjas horarias, validación de códigos QR y audioguías integradas de forma 100% nativa.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Explorar módulo &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/software-tickets-entradas-museos.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 2: MRP-CONCIERTOS (Reverse) -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Ticketing Masivo</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">MRP-CONCIERTOS</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Ticketing masivo para eventos musicales y festivales con sistema de preventa avanzado, control de colas y lectura de entradas a alta velocidad.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Ver más &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/venta-de-ticket-entradas-para-conciertos.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 3: Teatros y Cines -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Butacas Numeradas</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Teatros y Cines</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Asignación interactiva de butacas numeradas sobre mapa virtual 2D/3D y gestión integrada de taquilla física y online en tiempo real.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Ver más &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/software-entradas-cines-teatros.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 4: MRP-BODEGAS (Reverse) -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Enoturismo</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">MRP-BODEGAS</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Especializado en catas, visitas a viñedos y venta directa de producto vinculada a la experiencia turística para una gestión vitivinícola unificada.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Saber más &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/bodegas-vino-gestion-visitas.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 5: MRP-CASINO -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Juegos y Salas</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">MRP-CASINO</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Gestión integrada de torneos, espectáculos en sala, control de aforo restringido y reservas prioritarias de mesas y zonas VIP.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Ver más &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/software-gestion-comeracializacion-casinos.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 6: MRP-SPA (Reverse) -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Bienestar</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">MRP-SPA</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Circuitos termales, gestión de cabinas, agendas inteligentes de terapeutas y venta de tratamientos de forma unificada.</p>
              <a routerLink="/mrp-spa" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Ver más &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/reservar-spa-circuito-termal.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 7: Visitas Guiadas -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Tours Culturales</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Visitas Guiadas</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">La herramienta ideal para guías independientes y empresas de tours culturales. Asignación automática de guías y control de cupos.</p>
              <a routerLink="/rutas" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Ver más &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/software-visitas-guiadas-guias.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 8: Restaurantes (Reverse) -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Gastronomía</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Restaurantes</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Motor de reservas de mesa inteligente con gestión avanzada de turnos, planos de sala dinámicos e integración con TPV.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Ver más &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/motor-de-reservas-para-reservar-mesa-en-restaurantes.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <!-- Feature 9: Eventos y Congresos -->
          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: rgba(10, 28, 62, 0.1); color: var(--secondary-color); border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Inscripciones B2B</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: var(--secondary-color);">Eventos y Congresos</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Acreditaciones en tiempo real, gestión completa de ponentes, emisión de certificados y control estricto de inscripciones profesionales.</p>
              <a routerLink="/contacto" class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer; text-decoration: none;">Solicitar información &rarr;</a>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/sistemas-para-inscripciones-de-jornadas-eventos-y-congresos.jpg'); background-size: cover; background-position: center; height: 380px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

        </div>

        <!-- CTA Section -->
        <div class="cta-banner mt-5 text-center animate-fade-in-up" style="background: var(--secondary-color); padding: 5rem 2rem; border-radius: 24px; color: white; margin-top: 8rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: white;">¿Listo para digitalizar tu oferta de ocio?</h2>
          <p style="font-size: 1.15rem; max-width: 600px; margin-inline: auto; color: #94A3B8; margin-bottom: 2.5rem;">
            Únete a cientos de recintos y empresas que ya optimizan sus aforos e ingresos con Misterplan.
          </p>
          <a routerLink="/contacto" class="btn-primary" style="background: var(--primary-color); color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 99px; font-weight: bold; font-size: 1.1rem; cursor: pointer; text-decoration: none;">Solicitar Demo Personalizada</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .max-w-3xl { max-width: 48rem; }
    .mx-auto { margin-inline: auto; }
    .mt-5 { margin-top: 4rem; }
    @media (max-width: 900px) {
      .feature-split { flex-direction: column !important; text-align: center; gap: 2rem !important; }
      .feature-image { width: 100%; }
      .mt-4 { flex-direction: column; }
    }
  `]
})
export class OcioComponent {
}

