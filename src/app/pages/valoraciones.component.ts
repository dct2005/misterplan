import { Component } from '@angular/core';

@Component({
  selector: 'app-valoraciones',
  standalone: true,
  template: `
    <div class="page-container" style="padding-top: 100px; padding-bottom: 80px;">
      <div class="container animate-fade-in-up">
        <!-- SEO friendly H1 specific for this Silo -->
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Opiniones y <span class="text-gradient">Casos de Éxito</span></h1>
        <p class="text-muted" style="font-size: 1.2rem; max-width: 700px; margin-bottom: 3rem;">
          Más de 5,000 profesionales del turismo confían en Misterplan para escalar sus modelos de negocio.
        </p>

        <img src="/images/16-razones-para-elegir-misterplan-pequeno-hotel.jpg" alt="Casos de éxito de clientes" style="width: 100%; height: 350px; object-fit: cover; object-position: top; border-radius: var(--radius-lg); margin-bottom: 3rem; box-shadow: 0 15px 30px rgba(0,0,0,0.08);">

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
            <img src="/images/1903.jpg" alt="Testimonio Hotel" style="width: 100%; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">"Imprescindible"</h2>
            <p class="text-muted">"Desde que unificamos Channel Manager y motor de reservas no tememos overbookings. Ha cambiado por completo el hotel."</p>
          </div>
          <div class="glass" style="padding: 2rem; border-radius: var(--radius-md); background: var(--bg-secondary);">
             <img src="/images/4480.jpg" alt="Testimonio Ocio" style="width: 100%; border-radius: var(--radius-sm); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">"Flexibilidad total"</h2>
            <p class="text-muted">"Gestionar el aforo del museo es sencillísimo ahora. Su soporte es espectacular y la rapidez en taquilla ha mejorado un montón."</p>
          </div>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
          <button class="btn btn-primary btn-lg" style="background: var(--text-main); color: var(--bg-secondary); padding: 1rem 2rem; border-radius: var(--radius-pill); font-weight: 600;">Unirse a Misterplan</button>
        </div>
      </div>
    </div>
  `
})
export class ValoracionesComponent {}
