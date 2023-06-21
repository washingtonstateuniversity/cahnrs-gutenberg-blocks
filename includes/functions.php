<?php namespace CAHNRS\Plugin\Gutenberg;

class CAHNRS_Gutenberg_Functions {
    public static function init(){
        add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'cahnrs_enqueue_block_editor_assets' ) );
        add_action( 'wp_enqueue_scripts', array( __CLASS__, 'cahnrs_gutenberg_blocks_public_styles' ), 5 );
        
    }

    public static function cahnrs_enqueue_block_editor_assets() {
        // Make paths variables
        $block_path = '/assets/dist/js/cahnrs-gutenberg-blocks.js';
        $style_path = '/assets/src/styles/styles.min.css';
        $cahnrs_gutenberg_plugin_version = CAHNRSGutenbergPlugin::get('version');

        // Enqueue optional editor-only styles
        //wp_enqueue_style( 'cahnrs-gutenberg-blocks-styles', _get_cahnrs_gutenberg_plugin_url() . $style_path, [], null);
        wp_enqueue_style( 'cahnrs-parent-styles', get_stylesheet_directory_uri() . '/style.min.css' , [], $cahnrs_gutenberg_plugin_version );
        wp_enqueue_style( 'cahnrs-gutenberg-blocks-styles', _get_cahnrs_gutenberg_plugin_url() . $style_path, [], $cahnrs_gutenberg_plugin_version);
        
        // Enqueue the bundled block JS file
		wp_enqueue_script(
			'cahnrs-gutenberg-blocks',
			_get_cahnrs_gutenberg_plugin_url() . '/assets/dist/js/cahnrs-gutenberg-blocks.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components' ),
            $cahnrs_gutenberg_plugin_version
		);
    
        $CAHNRSblockList = _get_cahnrs_gutenberg_plugin_url() . '/assets/src/js/deny-list-blocks.js';
        
        wp_enqueue_script('deny-list-blocks', $CAHNRSblockList, array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ));
    }

    public static function cahnrs_gutenberg_blocks_public_styles(){
        $cahnrs_gutenberg_plugin_version = CAHNRSGutenbergPlugin::get('version');
        $style_path = '/assets/src/styles/styles.min.css';

        wp_enqueue_style( 'cahnrs-gutenberg-blocks-styles', _get_cahnrs_gutenberg_plugin_url() . $style_path, [], $cahnrs_gutenberg_plugin_version);
    }

}

CAHNRS_Gutenberg_Functions::init();

?>