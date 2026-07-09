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
    <a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>"><b>FCL</b><span>Empresarial</span></a>
    <nav class="header-nav" aria-label="Primary">
      <a class="navlink" href="#cost">The Cost</a>
      <a class="navlink" href="#method">Methodology</a>
      <a class="navlink" href="#packages">Packages</a>
    </nav>
    <div class="header-cta">
      <a class="header-phone" href="tel:+14088138335">408&middot;813&middot;8335</a>
      <a class="btn btn--olive" href="#book">Book Diagnostic</a>
    </div>
  </div>
</header>