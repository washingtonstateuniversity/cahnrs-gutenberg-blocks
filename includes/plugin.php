<?php namespace CAHNRS\Plugin\Gutenberg;

class CAHNRSGutenbergPlugin {

	public static function get( $property ) {

		switch ( $property ) {

			case 'version':
				return CAHNRSGUTENBERGBLOCKVERSION;

			case 'dir':
				return plugin_dir_path( dirname( __FILE__ ) );

			default:
				return '';

		}

	}

	public static function init() {

		// Do plugin stuff here
		require_once __DIR__ . '/functions.php';
		require_once __DIR__ . '/blocks.php';
		require_once __DIR__ . '/block-categories.php';
		require_once __DIR__ . '/rest-api.php';
		require_once __DIR__ . '/../classes/class-query-posts.php';
		require_once __DIR__ . '/../classes/class-query-events.php';
	}


}

CAHNRSGutenbergPlugin::init();