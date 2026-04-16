import { Component } from '@angular/core';

@Component({
  selector: 'app-tutoriales',
  standalone: true,
  template: `
    <div class="page-container" style="position: relative; overflow: hidden; padding-top: 120px; padding-bottom: 100px;">
      <!-- Glowing Background Elements -->
      <div style="position: absolute; top: -10%; right: -5%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(249, 129, 0, 0.1) 0%, transparent 70%); z-index: -1;"></div>
      <div style="position: absolute; bottom: 0; left: -10%; width: 600px; height: 600px; background: radial-gradient(circle, rgba(255, 179, 71, 0.05) 0%, transparent 70%); z-index: -1;"></div>

      <div class="container animate-fade-in-up">
        <div style="max-width: 800px; margin-bottom: 4rem;">
          <h1 style="font-size: 3.5rem; margin-bottom: 1rem; line-height: 1.1;">Academia <span class="text-gradient">Misterplan</span></h1>
          <p class="text-muted" style="font-size: 1.25rem; line-height: 1.6;">
            Tu centro de formación especializado para exprimir al máximo el potencial de tu negocio turístico. Videotutoriales, webinars y guías estratégicas.
          </p>
        </div>

        <!-- Filter Categories -->
        <div style="display: flex; gap: 0.8rem; margin-bottom: 4rem; overflow-x: auto; padding-bottom: 1rem; scrollbar-width: none;">
          <button style="padding: 0.8rem 1.5rem; border-radius: var(--radius-pill); background: var(--text-main); color: var(--bg-secondary); font-weight: 600; white-space: nowrap;">Todos los vídeos</button>
          <button style="padding: 0.8rem 1.5rem; border-radius: var(--radius-pill); background: var(--bg-secondary); color: var(--text-main); font-weight: 500; border: 1px solid var(--border-subtle); white-space: nowrap;">Alojamientos</button>
          <button style="padding: 0.8rem 1.5rem; border-radius: var(--radius-pill); background: var(--bg-secondary); color: var(--text-main); font-weight: 500; border: 1px solid var(--border-subtle); white-space: nowrap;">Ocio y Cultura</button>
          <button style="padding: 0.8rem 1.5rem; border-radius: var(--radius-pill); background: var(--bg-secondary); color: var(--text-main); font-weight: 500; border: 1px solid var(--border-subtle); white-space: nowrap;">Actividades</button>
          <button style="padding: 0.8rem 1.5rem; border-radius: var(--radius-pill); background: var(--bg-secondary); color: var(--text-main); font-weight: 500; border: 1px solid var(--border-subtle); white-space: nowrap;">Destinos</button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2.5rem;">
          <!-- Tutorial 1: MIDNI -->
          <div class="tutorial-card glass" style="border-radius: var(--radius-lg); overflow: hidden; background: var(--bg-secondary); transition: transform 0.3s ease, box-shadow 0.3s ease; border: 1px solid var(--border-subtle);">
            <div style="position: relative; padding-bottom: 56.25%; height: 0; background: #000;">
              <iframe src="https://www.youtube.com/embed/qLNCGgIAdss?rel=0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen></iframe>
            </div>
            <div style="padding: 2rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                <span style="background: rgba(249, 129, 0, 0.1); color: var(--primary-color); padding: 0.3rem 0.8rem; border-radius: var(--radius-pill); font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">Check-in</span>
                <span class="text-muted" style="font-size: 0.85rem;">4:40 min</span>
              </div>
              <h3 style="font-size: 1.5rem; margin-bottom: 0.8rem;">Extraer datos de MIDNI (España)</h3>
              <p class="text-muted" style="font-size: 1rem; line-height: 1.5;">Aprende cómo aceptar la app MIDNI como método de identificación obligatorio para tus huéspedes de forma rápida y sencilla.</p>
            </div>
          </div>

          <!-- Tutorial 2: Verifactu -->
          <div class="tutorial-card glass" style="border-radius: var(--radius-lg); overflow: hidden; background: var(--bg-secondary); transition: transform 0.3s ease, box-shadow 0.3s ease; border: 1px solid var(--border-subtle);">
            <div style="position: relative; padding-bottom: 56.25%; height: 0; background: #000;">
              <iframe src="https://www.youtube.com/embed/PIC-rZ-4Ecs?rel=0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen></iframe>
            </div>
            <div style="padding: 2rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                <span style="background: rgba(249, 129, 0, 0.1); color: var(--primary-color); padding: 0.3rem 0.8rem; border-radius: var(--radius-pill); font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">Legal</span>
                <span class="text-muted" style="font-size: 0.85rem;">11:20 min</span>
              </div>
              <h3 style="font-size: 1.5rem; margin-bottom: 0.8rem;">VERIFACTU: Manual de Uso</h3>
              <p class="text-muted" style="font-size: 1rem; line-height: 1.5;">Manual paso a paso para manejar Verifactu con Misterplan y cumplir con la normativa de facturación electrónica.</p>
            </div>
          </div>

          <!-- Tutorial 3: Grupos -->
          <div class="tutorial-card glass" style="border-radius: var(--radius-lg); overflow: hidden; background: var(--bg-secondary); transition: transform 0.3s ease, box-shadow 0.3s ease; border: 1px solid var(--border-subtle);">
            <div style="position: relative; padding-bottom: 56.25%; height: 0; background: #000;">
              <iframe src="https://www.youtube.com/embed/yEqGlYaQEZc?rel=0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen></iframe>
            </div>
            <div style="padding: 2rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                <span style="background: rgba(249, 129, 0, 0.1); color: var(--primary-color); padding: 0.3rem 0.8rem; border-radius: var(--radius-pill); font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">Gestión</span>
                <span class="text-muted" style="font-size: 0.85rem;">9:58 min</span>
              </div>
              <h3 style="font-size: 1.5rem; margin-bottom: 0.8rem;">Check-in masivo para Grupos</h3>
              <p class="text-muted" style="font-size: 1rem; line-height: 1.5;">Optimiza la entrada de grandes grupos y albergues con técnicas de carga masiva de datos y autocheckin.</p>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div style="margin-top: 6rem; position: relative;">
          <div class="glass" style="padding: 4rem; border-radius: var(--radius-lg); background: var(--gradient-glow); text-align: center; color: white;">
            <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: white;">¿Buscas algo más específico?</h2>
            <p style="font-size: 1.2rem; opacity: 0.9; margin-bottom: 2.5rem; max-width: 600px; margin-left: auto; margin-right: auto;">
              Nuestros expertos están disponibles para realizar demostraciones personalizadas adaptadas a tu flujo de trabajo real.
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a routerLink="/contacto" style="padding: 1rem 2.5rem; border-radius: var(--radius-pill); background: white; color: var(--primary-color); font-weight: 700; font-size: 1.1rem; text-decoration: none;">Solicitar Demo Live</a>
              <a routerLink="/soporte" style="padding: 1rem 2.5rem; border-radius: var(--radius-pill); border: 1.5px solid rgba(255,255,255,0.5); color: white; font-weight: 600; font-size: 1.1rem; text-decoration: none;">Ir al Soporte</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TutorialesComponent {}
