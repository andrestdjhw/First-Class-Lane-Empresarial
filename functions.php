<?php

function fcl_load_assets() {
  // Versión = fecha de modificación del archivo → el navegador baja la versión
  // nueva automáticamente en cada build (adiós hard-refresh manual).
  $css_path = get_theme_file_path('/build/index.css');
  $js_path  = get_theme_file_path('/build/index.js');
  $css_ver  = file_exists($css_path) ? filemtime($css_path) : '1.0.0';
  $js_ver   = file_exists($js_path)  ? filemtime($js_path)  : '1.0.0';

  // Compiled Tailwind (src/index.css -> build/index.css)
  wp_enqueue_style(
    'fcl-main',
    get_theme_file_uri('/build/index.css'),
    array(),
    $css_ver
  );

  // Google Fonts — Fraunces (display) + Inter (body)
  wp_enqueue_style(
    'fcl-fonts',
    'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap',
    array(),
    null
  );

  // React bundle from wp-scripts (kept from the boilerplate; loads only where a mount point exists)
  wp_enqueue_script(
    'fcl-main-js',
    get_theme_file_uri('/build/index.js'),
    array('wp-element', 'react-jsx-runtime'),
    $js_ver,
    true
  );
}
add_action('wp_enqueue_scripts', 'fcl_load_assets');

// Preconnect to Google Fonts for faster loading
function fcl_font_preconnect() {
  echo '<link rel="preconnect" href="https://fonts.googleapis.com">' . "\n";
  echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
}
add_action('wp_head', 'fcl_font_preconnect', 1);

function fcl_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'fcl_add_support');