import { Component } from '@angular/core';

@Component({
  selector: 'app-novedades',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 100px; padding-bottom: 80px;">
      <div class="container animate-fade-in-up">
        <!-- SEO friendly H1 specific for this Silo -->
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Novedades y Blog de <span class="text-gradient">Misterplan</span></h1>
        <p class="text-muted" style="font-size: 1.2rem; max-width: 700px; margin-bottom: 3rem;">
          Descubre las últimas actualizaciones de la plataforma, consejos de gestión turística y avances del sector.
        </p>

        <img src="/images/ayudas-junta-de-extremadura-y-union-europea.jpg" alt="Novedades Misterplan" style="width: 100%; height: 350px; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: 3rem; box-shadow: 0 15px 30px rgba(0,0,0,0.08);">

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
             <img src="/images/4484.jpg" alt="Verifactu" style="width: 100%; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Actualización PMS 2026</h2>
            <p class="text-muted">Descubre las nuevas características del Property Management System preparadas para la nueva temporada.</p>
          </div>
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
            <img src="/images/4461.jpg" alt="Especial Check-in" style="width: 100%; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Nuevo Registro de Viajeros</h2>
            <p class="text-muted">Academía: Todo lo que debes saber sobre la normativa y cómo Misterplan te ayuda a automatizar el proceso.</p>
          </div>
        </div>

        <!-- Misterplan TV / YouTube Integration Section -->
        <div style="margin-top: 6rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Misterplan <span class="text-gradient">TV</span></h2>
          <p class="text-muted" style="font-size: 1.2rem; max-width: 700px; margin-bottom: 3rem;">
            Aprende a sacar el máximo partido a tu plataforma con nuestros últimos videotutoriales y webinars guiados por expertos.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
            <!-- YouTube Video 1: Diferenciación -->
            <div class="glass" style="border-radius: var(--radius-md); overflow: hidden; background: var(--bg-secondary); border: 1px solid var(--border-subtle);">
              <div style="position: relative; padding-bottom: 56.25%; height: 0;">
                <iframe src="https://www.youtube.com/embed/U8EGfukpchI?rel=0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div style="padding: 1.5rem;">
                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px;">
                  <span style="color: #FF0000;">▶</span> Si no vendes esto, eres uno más
                </h3>
                <p class="text-muted" style="font-size: 0.95rem;">¿Qué quiere tu cliente? ¿Qué compra realmente cuando elige tu alojamiento? Una radiografía del cliente de hoy.</p>
              </div>
            </div>

            <!-- YouTube Video 2: Arma de diferenciación -->
            <div class="glass" style="border-radius: var(--radius-md); overflow: hidden; background: var(--bg-secondary); border: 1px solid var(--border-subtle);">
              <div style="position: relative; padding-bottom: 56.25%; height: 0;">
                <iframe src="https://www.youtube.com/embed/biRr_YNo4wQ?rel=0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div style="padding: 1.5rem;">
                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px;">
                  <span style="color: #FF0000;">▶</span> Tu arma de diferenciación
                </h3>
                <p class="text-muted" style="font-size: 0.95rem;">Descubre qué es lo único que tú tienes y que ninguna plataforma puede replicar para ser inolvidable.</p>
              </div>
            </div>

            <!-- YouTube Video 3: Silencios -->
            <div class="glass" style="border-radius: var(--radius-md); overflow: hidden; background: var(--bg-secondary); border: 1px solid var(--border-subtle);">
              <div style="position: relative; padding-bottom: 56.25%; height: 0;">
                <iframe src="https://www.youtube.com/embed/YTOwjxxgf3I?rel=0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div style="padding: 1.5rem;">
                <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px;">
                  <span style="color: #FF0000;">▶</span> Silencios que matan tu negocio
                </h3>
                <p class="text-muted" style="font-size: 0.95rem;">¿Qué dice tu servicio al cliente: “sé lo que necesitas” o…“adivina qué está pasando”?</p>
              </div>
            </div>
          </div>

          <div style="margin-top: 3rem; text-align: center;">
            <a href="https://www.youtube.com/@MisterPlanSistemasdeReservas" target="_blank" style="background: #FF0000; color: #fff; padding: 0.8rem 2rem; border-radius: var(--radius-pill); font-weight: 600; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; box-shadow: 0 4px 14px rgba(255,0,0,0.3);">
              Suscribirse al Canal
            </a>
          </div>
        </div>

        <div style="margin-top: 6rem; text-align: center; border-top: 1px solid var(--border-subtle); padding-top: 4rem;">
          <button class="btn btn-primary btn-lg" style="background: var(--text-main); color: var(--bg-secondary); padding: 1rem 2rem; border-radius: var(--radius-pill); font-weight: 600;">Leer todos los artículos</button>
        </div>
      </div>
    </div>
  `
})
export class NovedadesComponent {}
