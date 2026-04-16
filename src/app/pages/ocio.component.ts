import { Component } from '@angular/core';

@Component({
  selector: 'app-ocio',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 100px; padding-bottom: 80px;">
      <div class="container animate-fade-in-up">
        <!-- SEO friendly H1 specific for this Silo -->
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Ocio, Cultura y <span class="text-gradient">Espectáculos</span></h1>
        <p class="text-muted" style="font-size: 1.2rem; max-width: 700px; margin-bottom: 3rem;">
          La plataforma definitiva para gestionar aforos, venta de tickets y taquilla. Ideal para museos, teatros, visitas guiadas y grandes eventos.
        </p>

        <img src="/images/ira-motores-reserva-para-cultura-ocio-y-espectaculos.jpg" alt="Ocio y Cultura" style="width: 100%; height: 350px; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: 3rem; box-shadow: 0 15px 30px rgba(0,0,0,0.08);">

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
            <img src="/images/software-tickets-entradas-museos.jpg" alt="Venta de Entradas" style="width: 100%; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Venta de Entradas y Aforo</h2>
            <p class="text-muted">Controla la entrada de tus clientes, valida tickets con códigos QR y mantén el control en tiempo real.</p>
          </div>
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
            <img src="/images/bodegas-vino-gestion-visitas.jpg" alt="Enoturismo" style="width: 100%; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Enoturismo y Bodegas</h2>
            <p class="text-muted">Diseñado especialmente para la reserva de catas de vino y visitas personalizadas a viñedos.</p>
          </div>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
          <button class="btn btn-primary btn-lg">Solicitar Demo</button>
        </div>
      </div>
    </div>
  `
})
export class OcioComponent {}
