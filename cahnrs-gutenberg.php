<?php
/**
 *
 * @wordpress-plugin
 * Plugin Name:       CAHNRS Gutenberg Blocks
 * Plugin URI:        https://cahnrs.wsu.edu/
 * Description:       Custom functionality for CAHNRS websites
 * Version:           1.3
 * Author:            CAHNRS Communications
 * Author URI:        https://cahnrs.wsu.edu/
 * Text Domain:       cahnrs-gutenberg-plugin
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

//Checks to see if WSUWP Gutenberg plugin is activated. 
register_activation_hook( __FILE__, 'wsuwp_plugin_gutenberg_plugin_check' );

function wsuwp_plugin_gutenberg_plugin_check(){
    if ( ! is_plugin_active( 'wsuwp-plugin-gutenberg/wsuwp-plugin-gutenberg.php' ) and current_user_can( 'activate_plugins' ) ) {
      wp_die('Sorry, this plugin requires WSUWP Gutenberg to be activated. Please activate plugin that plugin first before activating this one. <br><a href="' . admin_url( 'plugins.php' ) . '">&laquo; Return to Plugins</a> <style>div#query-monitor{display:none;}');
    }
}

//Include files from WSUWP Gutenberg Plugin
require_once( WP_PLUGIN_DIR . '/wsuwp-plugin-gutenberg/includes/plugin.php');

//Define the version of this CAHNRS Gutenberg plugin
define( 'CAHNRSGUTENBERGBLOCKVERSION', '1.3' );

// Gets CAHNRS Gutenberg plugin URL.
function _get_cahnrs_gutenberg_plugin_url() {
  static $cahnrs_gutenberg_plugin_url;

  if (empty($cahnrs_gutenberg_plugin_url)) {
    $cahnrs_gutenberg_plugin_url = plugins_url(null, __FILE__);
  }

  return $cahnrs_gutenberg_plugin_url;
}

//Load other files of this plugin
function cahnrs_gutenberg_init(){
	require_once __DIR__ . '/includes/plugin.php';
}

add_action( 'plugins_loaded', 'cahnrs_gutenberg_init' );



//add_filter( 'template_include', 'contact_page_template', 99 );

function contact_page_template( $template ) {
    $file_name = 'page_contact.php';

    if ( is_singular( 'tribe_events' ) ) {
        
      // Template not found in theme's folder, use plugin's template as a fallback
      $template = dirname( __FILE__ ) . '/tribe/templates/single-tribe_events.php';
       
    }

    return $template;
}
