import { Component } from '@angular/core';

@Component({
  selector: 'app-actividades',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 100px; padding-bottom: 80px;">
      <div class="container animate-fade-in-up">
        <!-- SEO friendly H1 specific for this Silo -->
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Gestión para <span class="text-gradient">Actividades Turísticas</span></h1>
        <p class="text-muted" style="font-size: 1.2rem; max-width: 700px; margin-bottom: 3rem;">
          Controla los aforos, el personal y la distribución en las principales OTA del mundo desde un solo panel de control.
        </p>

        <img src="/images/ira-software-para-gestion-de-actividades-turisticas.jpg" alt="Actividades Turísticas" style="width: 100%; height: 350px; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: 3rem; box-shadow: 0 15px 30px rgba(0,0,0,0.08);">

        <h2 style="font-size: 2rem; margin-bottom: 2rem; font-weight: bold;">Nuestros Módulos</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <a href="/turismo-activo" class="glass group" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary); text-decoration: none; color: inherit; display: block; transition: transform 0.3s ease;">
            <img src="/images/motor-empresas-actividades-turisticas.jpg" alt="Turismo Activo" style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-main);">Turismo Activo</h2>
            <p class="text-muted">Programa especializado para empresas de barranquismo, kayak, multiaventura y alquiler de material.</p>
          </a>
          <a href="/barcos" class="glass group" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary); text-decoration: none; color: inherit; display: block; transition: transform 0.3s ease;">
            <img src="/images/823.jpg" alt="Barcos y Charter" style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-main);">Barcos y Charter</h2>
            <p class="text-muted">Comercializa tu flota marítima, gestiona tripulaciones y vende plazas individuales o chárter completo.</p>
          </a>
          <a href="/rutas" class="glass group" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary); text-decoration: none; color: inherit; display: block; transition: transform 0.3s ease;">
            <img src="/images/motor-turismo-activo.jpg" alt="Rutas y Visitas" style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--text-main);">Rutas y Visitas</h2>
            <p class="text-muted">Simplifica las reservas de visitas guiadas urbanas (Free Tours) y entornos naturales con paradas.</p>
          </a>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
          <button class="btn btn-primary btn-lg" style="background: var(--text-main); color: var(--bg-secondary); padding: 1rem 2rem; border-radius: var(--radius-pill); font-weight: 600;">Explorar Funcionalidades</button>
        </div>
      </div>
    </div>
  `
})
export class ActividadesComponent {}
