<?php
/**
 * Front Page — FCL Empresarial landing (People & Culture Division)
 * Bilingual: Spanish base copy with data-i18n keys; the LanguageToggle
 * component (src/scripts) swaps text via the src/scripts/i18n.js dictionary.
 * Set this theme's static front page under Settings → Reading.
 */
get_header();

/* ── Hero media (opcional) ─────────────────────────────────────────
 * Pega la URL de tu biblioteca de medios de WP. Deja $hero_media_type
 * vacío ('') para el hero de solo texto (comportamiento actual).
 *   $hero_media_type: 'image' | 'video' | ''
 *   $hero_media_url : URL completa, o content_url('/uploads/2026/07/archivo.jpg')
 *   $hero_poster_url: opcional, poster para el video
 * ──────────────────────────────────────────────────────────────── */
$hero_media_type = 'video';
$hero_media_url  = '/wp-content/uploads/2026/07/VideoHero.mp4';
$hero_poster_url = '/wp-content/uploads/2026/07/HeroFCLE-scaled.webp';
$hero_has_media  = ( $hero_media_type && $hero_media_url );
?>

<!-- HERO -->
<section class="hero<?php echo $hero_has_media ? ' has-media' : ''; ?>" id="top">
  <?php if ( $hero_has_media ) : ?>
  <div class="hero-media" aria-hidden="true">
    <?php if ( 'video' === $hero_media_type ) : ?>
      <video src="<?php echo esc_url( $hero_media_url ); ?>" autoplay muted loop playsinline<?php echo $hero_poster_url ? ' poster="' . esc_url( $hero_poster_url ) . '"' : ''; ?>></video>
    <?php else : ?>
      <img src="<?php echo esc_url( $hero_media_url ); ?>" alt="">
    <?php endif; ?>
  </div>
  <?php endif; ?>
  <div class="container hero-inner">
    <p class="eyebrow" data-i18n="hero.eyebrow">Consultoría de Personas y Cultura · Bay Area</p>
    <h1 data-i18n="hero.title">Tus mejores colaboradores se están yendo. ¿Sabes por qué?</h1>
    <p class="lead" data-i18n="hero.lead">Muchas empresas invierten mucho en contratar, pero casi nada en mantener a su gente comprometida, reconocida y con sentido de pertenencia. FCL Empresarial construye los sistemas de cultura que hacen que tu equipo quiera quedarse.</p>
    <div class="hero-actions">
      <a class="btn btn--olive" href="#book" data-i18n="hero.cta1">Agenda tu diagnóstico de cultura gratuito</a>
      <a class="btn btn--ghost" href="#method" data-i18n="hero.cta2">Cómo funciona</a>
    </div>
    <p class="hero-trust"><span class="dot"></span> <span data-i18n="hero.trust">Llamada de 20 minutos · Sin compromiso · Sin venta</span></p>
  </div>
</section>

<!-- 2. COST OF DOING NOTHING -->
<section class="band" id="cost">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-i18n="cost.eyebrow">El costo de no hacer nada</p>
      <h2 data-i18n="cost.title">La rotación no es solo un problema de personas. Es un problema de rentabilidad.</h2>
    </div>
    <div class="cost-copy">
      <p data-i18n="cost.p1">Reemplazar a un solo colaborador cuesta entre el <strong>50 % y el 200 % de su salario anual</strong>. Para una empresa de 50 personas con 30 % de rotación, son cientos de miles perdidos cada año — en reclutamiento, capacitación, productividad y conocimiento que se va por la puerta.</p>
      <p data-i18n="cost.p2">Pero el costo real no es financiero. Es el equipo que deja de confiar en el liderazgo. La cultura que se erosiona en silencio. Los mejores que empiezan a actualizar su currículum porque ven que todos se van.</p>
    </div>
    <div class="stats">
      <div class="stat">
        <div class="num">50–200<em>%</em></div>
        <div class="label" data-i18n="stat1.label">Costo de reemplazar a un colaborador, respecto a su salario anual.</div>
        <div class="src" data-i18n="stat.src">Promedio de la industria</div>
      </div>
      <div class="stat">
        <div class="num">30<em>%</em></div>
        <div class="label" data-i18n="stat2.label">Rotación anual promedio en empresas sin programas de cultura.</div>
        <div class="src" data-i18n="stat.src">Promedio de la industria</div>
      </div>
      <div class="stat">
        <div class="num">67<em>%</em></div>
        <div class="label" data-i18n="stat3.label">Colaboradores que dicen que el reconocimiento los haría quedarse más tiempo.</div>
        <div class="src" data-i18n="stat.src">Promedio de la industria</div>
      </div>
    </div>
  </div>
</section>

<!-- 3. WHO WE ARE -->
<section class="band band--paper2" id="about">
  <div class="container about-grid">
    <div class="about-copy">
      <div class="section-head">
        <p class="eyebrow" data-i18n="about.eyebrow">Quiénes somos</p>
        <h2 data-i18n="about.title">Construimos empresas donde las personas quieren quedarse.</h2>
      </div>
      <div class="who">
        <p data-i18n="about.p1">FCL Empresarial es una consultoría de personas y cultura que ayuda a las organizaciones a fortalecer su cultura de trabajo, mejorar la experiencia del colaborador y construir entornos donde la gente se siente valorada, comprometida y orgullosa de pertenecer.</p>
        <p data-i18n="about.p2">No organizamos fiestas de cumpleaños. Diseñamos sistemas intencionales y estructurados de reconocimiento, integración, comunicación y desarrollo — para que tus líderes no tengan que hacerlo. Somos tu aliado externo de cultura: diseñamos, ejecutamos y medimos. Tú te enfocas en tu negocio.</p>
      </div>
    </div>
    <div class="about-media" aria-hidden="true">
      <img src="<?php echo esc_url( content_url( '/uploads/2026/07/BADGE.png' ) ); ?>" alt="FCL Empresarial">
    </div>
  </div>
</section>

<!-- 4. METHODOLOGY -->
<?php
/* Imágenes por pilar (opcional): pega URLs de tu biblioteca de medios de WP.
   Si dejas 'img' vacío, se usa el ícono de línea como respaldo. */
$pillars = array(
  array( 'n' => '01', 'key' => 'p1', 'img' => '/wp-content/uploads/2026/07/Recognize-scaled.webp',
    'title' => 'Reconocer', 'principle' => 'Las personas necesitan sentirse vistas',
    'desc' => 'Cumpleaños, aniversarios laborales, empleado destacado y reconocimiento entre compañeros.',
    'icon' => '<path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z"/><circle cx="12" cy="12" r="3"/>' ),
  array( 'n' => '02', 'key' => 'p2', 'img' => '/wp-content/uploads/2026/07/Listen-scaled.webp',
    'title' => 'Escuchar', 'principle' => 'Las personas necesitan sentirse escuchadas',
    'desc' => 'Encuestas de clima, encuestas de satisfacción y entrevistas de permanencia.',
    'icon' => '<path d="M3 10v4M7.5 6v12M12 3v18M16.5 6v12M21 10v4"/>' ),
  array( 'n' => '03', 'key' => 'p3', 'img' => '/wp-content/uploads/2026/07/Connect-scaled.webp',
    'title' => 'Conectar', 'principle' => 'Las personas necesitan pertenecer',
    'desc' => 'Eventos, actividades de integración y comunicación interna.',
    'icon' => '<circle cx="7" cy="9" r="3"/><circle cx="17" cy="9" r="3"/><path d="M2 20a5 5 0 0 1 10 0M12 20a5 5 0 0 1 10 0"/>' ),
  array( 'n' => '04', 'key' => 'p4', 'img' => '/wp-content/uploads/2026/07/Develop-scaled.webp',
    'title' => 'Desarrollar', 'principle' => 'Las personas necesitan crecer',
    'desc' => 'Planes de desarrollo, reconocimiento de logros y programas de mentoría.',
    'icon' => '<path d="M4 20V10M10 20V4M16 20v-7"/><path d="M3 8l4-4 4 4 5-6"/><path d="M20 2h1.5V4"/>' ),
  array( 'n' => '05', 'key' => 'p5', 'img' => '/wp-content/uploads/2026/07/Inspire-scaled.webp',
    'title' => 'Inspirar', 'principle' => 'Las personas necesitan propósito',
    'desc' => 'Valores, cultura, historias de éxito y comunicación de liderazgo.',
    'icon' => '<path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.4 7.2 17.9l.9-5.4L4.2 8.7l5.4-.8L12 2Z"/>' ),
);
?>
<section class="band band--teal method-band" id="method">
  <div class="method-bg" aria-hidden="true"></div>
  <div class="container">
    <div class="method-top">
      <div class="section-head">
        <p class="eyebrow" data-i18n="method.eyebrow">La metodología</p>
        <h2 data-i18n="method.title">Nuestro enfoque de 5 pilares para construir una cultura que retiene.</h2>
      </div>
    </div>
    <div class="pillars-viewport">
      <div class="pillars">
      <?php foreach ( $pillars as $p ) : ?>
      <article class="pillar reveal">
        <div class="pillar-media<?php echo empty( $p['img'] ) ? ' is-placeholder' : ''; ?>">
          <?php if ( ! empty( $p['img'] ) ) : ?>
            <img src="<?php echo esc_url( $p['img'] ); ?>" alt="">
          <?php else : ?>
            <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><?php echo $p['icon']; ?></svg>
          <?php endif; ?>
          <span class="pnum"><?php echo esc_html( $p['n'] ); ?></span>
        </div>
        <div class="pillar-body">
          <h3 data-i18n="<?php echo esc_attr( $p['key'] ); ?>.title"><?php echo esc_html( $p['title'] ); ?></h3>
          <p class="principle" data-i18n="<?php echo esc_attr( $p['key'] ); ?>.principle"><?php echo esc_html( $p['principle'] ); ?></p>
          <p data-i18n="<?php echo esc_attr( $p['key'] ); ?>.desc"><?php echo esc_html( $p['desc'] ); ?></p>
        </div>
      </article>
      <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>

<!-- 5. PACKAGES -->
<section class="band has-media" id="packages">
  <div class="section-media" aria-hidden="true">
    <video src="<?php echo esc_url( content_url( '/uploads/2026/07/VideoBackgroundPackages.mp4' ) ); ?>" autoplay muted loop playsinline></video>
  </div>
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-i18n="packages.eyebrow">Paquetes</p>
      <h2 data-i18n="packages.title">Un plan para cada etapa de crecimiento.</h2>
    </div>
    <div class="plans">
      <article class="plan">
        <div class="tier">Starter</div>
        <div class="size" data-i18n="pkg.starter.size">10–30 empleados</div>
        <ul>
          <li data-i18n="pkg.starter.f1">Calendario anual de reconocimiento</li>
          <li data-i18n="pkg.starter.f2">Reconocimiento de cumpleaños y aniversarios</li>
          <li data-i18n="pkg.starter.f3">Reconocimiento mensual destacado</li>
          <li data-i18n="pkg.starter.f4">Comunicación interna básica</li>
        </ul>
        <p class="goal" data-i18n="pkg.starter.goal">Objetivo: Que los colaboradores se sientan vistos.</p>
        <div class="plan-cta"><a class="btn btn--ghost" href="#book" data-i18n="pkg.cta">Agenda tu diagnóstico</a></div>
      </article>

      <article class="plan plan--featured">
        <span class="badge" data-i18n="pkg.growth.badge">Más popular</span>
        <div class="tier">Growth</div>
        <div class="size" data-i18n="pkg.growth.size">30–75 empleados</div>
        <ul>
          <li data-i18n="pkg.growth.f1">Todo lo de Starter</li>
          <li data-i18n="pkg.growth.f2">Encuestas trimestrales de compromiso</li>
          <li data-i18n="pkg.growth.f3">Programas estructurados de reconocimiento</li>
          <li data-i18n="pkg.growth.f4">Eventos trimestrales de equipo</li>
          <li data-i18n="pkg.growth.f5">Reportes para gerencia</li>
        </ul>
        <p class="goal" data-i18n="pkg.growth.goal">Objetivo: Aumentar compromiso y pertenencia.</p>
        <div class="plan-cta"><a class="btn btn--olive" href="#book" data-i18n="pkg.cta">Agenda tu diagnóstico</a></div>
      </article>

      <article class="plan">
        <div class="tier">Excellence</div>
        <div class="size" data-i18n="pkg.exc.size">75+ empleados</div>
        <ul>
          <li data-i18n="pkg.exc.f1">Todo lo de Growth</li>
          <li data-i18n="pkg.exc.f2">Diagnóstico cultural completo y estrategia anual</li>
          <li data-i18n="pkg.exc.f3">Diseño de programa de onboarding</li>
          <li data-i18n="pkg.exc.f4">Programas de bienestar</li>
          <li data-i18n="pkg.exc.f5">Métricas de clima y reportes ejecutivos</li>
        </ul>
        <p class="goal" data-i18n="pkg.exc.goal">Objetivo: Construir una cultura de alto desempeño.</p>
        <div class="plan-cta"><a class="btn btn--ghost" href="#book" data-i18n="pkg.cta">Agenda tu diagnóstico</a></div>
      </article>
    </div>
  </div>
</section>

<!-- 6. HOW IT WORKS -->
<section class="band band--paper2" id="how">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-i18n="how.eyebrow">Cómo funciona</p>
      <h2 data-i18n="how.title">Empezar toma 20 minutos.</h2>
    </div>
    <div class="steps">
      <div class="step">
        <h3 data-i18n="how.s1.title">Agenda tu diagnóstico gratuito</h3>
        <p data-i18n="how.s1.desc">Agenda una llamada de 20 minutos. Exploramos aspectos clave de la experiencia de tus colaboradores para identificar fortalezas, oportunidades y áreas de mejora.</p>
      </div>
      <div class="step">
        <h3 data-i18n="how.s2.title">Recibe tu reporte de cultura</h3>
        <p data-i18n="how.s2.desc">Te entregamos una evaluación clara de dónde está tu cultura, con recomendaciones prácticas que puedes aplicar de inmediato.</p>
      </div>
      <div class="step">
        <h3 data-i18n="how.s3.title">Elige tu plan</h3>
        <p data-i18n="how.s3.desc">Selecciona el paquete que se ajuste al tamaño y etapa de tu empresa. Nosotros nos encargamos de todo: del diseño a la ejecución y la medición.</p>
      </div>
      <div class="step">
        <h3 data-i18n="how.s4.title">Nosotros ejecutamos. Tú te enfocas en tu negocio</h3>
        <p data-i18n="how.s4.desc">Nuestro equipo diseña, organiza y da seguimiento a cada programa. Tú no planeas, coordinas ni gestionas nada. Menos carga administrativa. Más compromiso. Mayor retención de talento.</p>
      </div>
    </div>
  </div>
</section>

<!-- 7. KEY QUESTION -->
<section class="quote-band">
  <div class="container">
    <div class="quote-inner">
      <blockquote>
        <span class="quote-mark" aria-hidden="true">&ldquo;</span>
        <q data-i18n="quote.text">La cultura existe en todas las empresas. La diferencia es que algunas la gestionan intencionalmente — y otras la dejan al azar.</q>
      </blockquote>
      <p class="sub" data-i18n="quote.sub">Si logras retener a <em>una</em> persona clave un año más, el programa prácticamente se paga solo.</p>
    </div>
  </div>
</section>

<!-- 8. FINAL CTA -->
<section class="band close" id="book">
  <div class="container">
    <div class="close-card">
      <h2 data-i18n="close.title">Tu equipo es tu ventaja competitiva. Asegurémonos de que lo sepan.</h2>
      <p data-i18n="close.p">Agenda tu diagnóstico de cultura gratuito de 20 minutos. Sin compromiso. Sin presentación de venta. Solo una conversación sobre tu equipo y cómo construir un lugar del que no quieran irse.</p>
      <div class="close-actions">
        <a class="btn btn--olive" href="#book" data-i18n="close.cta">Agenda tu diagnóstico gratuito</a>
        <div class="close-contact">
          <span><span data-i18n="close.callus">Llámanos:</span> <a href="tel:+14088138335">408-813-8335</a></span>
          <span><a href="mailto:info@fclempresarial.com">info@fclempresarial.com</a></span>
        </div>
      </div>
      <p class="close-note" data-i18n="close.note">El calendario de reservas (Calendly) se integra aquí.</p>
    </div>
  </div>
</section>

<?php get_footer();