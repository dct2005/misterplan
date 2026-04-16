import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-container" style="padding-top: 100px; padding-bottom: 80px;">
      <div class="container animate-fade-in-up">
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Centro de <span class="text-gradient">Soporte</span></h1>
        <p class="text-muted" style="font-size: 1.2rem; max-width: 700px; margin-bottom: 3rem;">
          Estamos aquí para ayudarte. Accede a nuestra base de conocimientos, abre un ticket de asistencia técnica o contacta con tu gestor asignado.
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
            <div style="font-size: 2rem; margin-bottom: 1rem;">💻</div>
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Soporte Remoto para Windows</h2>
            <p class="text-muted">Descarga nuestro cliente de TeamViewer para que nuestros técnicos puedan ayudarte conectándose a tu equipo de forma segura.</p>
            <a href="https://www.reservaonline.support/temp/TeamViewerQS.exe" target="_blank" class="btn btn-primary" style="margin-top: 1.5rem; background: var(--text-main); color: var(--bg-secondary); border-radius: var(--radius-pill); font-weight: 600; text-decoration: none; display: inline-block; padding: 0.8rem 1.5rem;">Descargar (Windows)</a>
          </div>
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
            <div style="font-size: 2rem; margin-bottom: 1rem;">🍏</div>
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Soporte Remoto para Mac</h2>
            <p class="text-muted">Si utilizas entorno macOS, descarga nuestro software remoto optimizado para asistencia directa con el equipo técnico.</p>
             <a href="https://download.teamviewer.com/download/version_13x/TeamViewerQS.dmg" target="_blank" class="btn btn-primary" style="margin-top: 1.5rem; background: var(--text-main); color: var(--bg-secondary); border-radius: var(--radius-pill); font-weight: 600; text-decoration: none; display: inline-block; padding: 0.8rem 1.5rem;">Descargar (Mac)</a>
          </div>
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
             <div style="font-size: 2rem; margin-bottom: 1rem;">📖</div>
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Centro de Ayuda y FAQ</h2>
            <p class="text-muted">Aprende al máximo sobre el Channel Manager, motor de reservas y PMS mediante nuestros tutoriales interactivos y manuales.</p>
            <a routerLink="/tutoriales" class="btn btn-primary" style="margin-top: 1.5rem; background: var(--border-subtle); color: var(--text-main); border: none; text-decoration: none; display: inline-block; padding: 0.8rem 1.5rem; border-radius: var(--radius-pill);">Ver Tutoriales</a>
          </div>
        </div>

        <div style="margin-top: 5rem; text-align: center; background: var(--bg-secondary); padding: 3rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
            <h3 style="font-size: 1.8rem; margin-bottom: 1rem;">¿Necesitas ayuda inmediata?</h3>
            <p class="text-muted" style="margin-bottom: 2rem;">Contáctanos directamente en nuestro número de soporte técnico centralizado.</p>
            <a href="tel:+34902100200" style="font-size: 2rem; font-weight: 700; color: var(--text-main); text-decoration: none;">+34 902 100 200</a>
        </div>
      </div>
    </div>
  `
})
export class SoporteComponent {}
