<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>

<!-- HEADER -->
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="FCL Empresarial">
      <img class="brand-badge" src="<?php echo esc_url( content_url( '/uploads/2026/07/PRINCIPAL-scaled.png' ) ); ?>" alt="FCL Empresarial" width="180" height="72">
    </a>
    <nav class="header-nav" aria-label="Primary">
      <a class="navlink" href="#cost" data-i18n="nav.cost">El Costo</a>
      <a class="navlink" href="#method" data-i18n="nav.method">Metodología</a>
      <a class="navlink" href="#packages" data-i18n="nav.packages">Paquetes</a>
      <a class="btn btn--olive btn--sm" href="#book" data-i18n="header.cta">Agendar diagnóstico</a>
    </nav>
  </div>
</header>