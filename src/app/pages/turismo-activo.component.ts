import { Component } from '@angular/core';

@Component({
  selector: 'app-turismo-activo',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 140px; padding-bottom: 100px; background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);">
      <div class="container">
        
        <!-- Hero Header -->
        <div class="text-center mb-5 max-w-3xl mx-auto animate-fade-in-up">
          
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1.5rem; letter-spacing: -0.02em;"></h1>
          <p class="text-muted" style="font-size: 1.2rem; line-height: 1.7;">
            
          </p>
        </div>

        <!-- Horizontal Features -->
        <div class="features-list mt-5" style="display: flex; flex-direction: column; gap: 6rem; margin-top: 5rem;">

          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: var(--primary-color); color: white; border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Active Control</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Gestión de Cupos Experto</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Configura reglas que ligan tickets con disponibilidad física. Si solo tienes 10 cascos, las ventas paran solas al llegar al límite.</p>
              <button class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Ver inventario &rarr;</button>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/motor-turismo-activo.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Cuadrante de Guías</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Visión gráfica para asignar personal de manera dinámica a cada salida programada.</p>
              <button class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Asignar &rarr;</button>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/ira-software-para-gestion-de-actividades-turisticas.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row;">
            <div class="feature-text" style="flex: 1;">
              
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Seguros y Descargos</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Firma digital de descargos de responsabilidad desde el móvil del cliente antes del inicio.</p>
              <button class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Info Legal &rarr;</button>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/motor-empresas-actividades-turisticas.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

          <div class="feature-split animate-fade-in-up" style="display: flex; align-items: center; gap: 4rem; flex-direction: row-reverse;">
            <div class="feature-text" style="flex: 1;">
              <span class="badge mb-3" style="display: inline-block; padding: 6px 12px; background: var(--primary-color); color: white; border-radius: 6px; font-size: 0.85rem; font-weight: 700;">Rental Management</span>
              <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Alquiler de Material Técnico</h2>
              <p class="text-muted" style="font-size: 1.15rem; line-height: 1.7; margin-bottom: 2rem;">Controla las entregas y devoluciones de bicicletas, neoprenos o material de esquí con códigos de barras.</p>
              <button class="btn-outline" style="border: 2px solid var(--secondary-color); color: var(--secondary-color); background: transparent; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: 600; cursor: pointer;">Gestionar Material &rarr;</button>
            </div>
            <div class="feature-image" style="flex: 1;">
              <div style="background-image: url('/images/4480.jpg'); height: 400px; background-size: cover; background-position: center; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);"></div>
            </div>
          </div>

        </div>

        <!-- CTA Banner -->
        
        <div class="cta-banner mt-5 text-center animate-fade-in-up" style="background: var(--secondary-color); padding: 5rem 2rem; border-radius: 24px; color: white; margin-top: 8rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: white;">Lleva tu aventura al siguiente nivel</h2>
          <p style="font-size: 1.15rem; max-width: 600px; margin-inline: auto; color: #94A3B8; margin-bottom: 2.5rem;">Misterplan es el partner tecnológico de las empresas de turismo activo líderes en el sector.</p>
          <button class="btn-primary" style="background: var(--primary-color); color: white; border: none; padding: 1.2rem 2.5rem; border-radius: 99px; font-weight: bold; font-size: 1.1rem; cursor: pointer;">Empezar ahora</button>
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
    }
  `]
})
export class TurismoActivoComponent {}
