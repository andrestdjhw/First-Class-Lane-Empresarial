<?php

function fcl_load_assets() {
  // Compiled Tailwind (src/index.css -> build/index.css)
  wp_enqueue_style(
    'fcl-main',
    get_theme_file_uri('/build/index.css'),
    array(),
    '1.0.0'
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
    '1.0.0',
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