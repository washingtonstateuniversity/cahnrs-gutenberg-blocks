<?php namespace CAHNRS\Plugin\Gutenberg;

class Register_Block_CAHNRS extends \WSUWP\Plugin\Gutenberg\Blocks  {
	
	//Add new blocks to register to this variable
    protected static $register_blocks = array(
		'cahnrs/events-list'   	=> 'Block_WSUWP_CAHNRS_Events_List',
	);


	public static function get( $property ) {

		switch ( $property ) {

			case 'register_blocks':
				return self::$register_blocks;

			case 'dir':
				return plugin_dir_path( dirname( __FILE__ ) );

			default:
				return '';
		}

	}

	public static function setup_classes() {

		\WSUWP\Plugin\Gutenberg\Plugin::load_class( 'block' );
		\WSUWP\Plugin\Gutenberg\Plugin::load_class( 'wsu-query' );
		\WSUWP\Plugin\Gutenberg\Plugin::load_class( 'wsu-image' );

	}


	public static function init() {	
		self::setup_classes();	

		add_filter( 'allowed_block_types', array( __CLASS__, 'remove_blocks'), 11 );
		add_action('init', array( __CLASS__, 'cahnrsregister' ) );
	}

	public static function remove_blocks( $allowed_blocks) {

		$cahnrs_allowed_blocks = \WSUWP\Plugin\Gutenberg\Blocks::$allowed_blocks;
		$cahnrs_allowed_blocks[] = 'cahnrs/video-list';
		$cahnrs_allowed_blocks[] = 'cahnrs/archive-search';
		$cahnrs_allowed_blocks[] = 'cahnrs/on-solid-ground';
		$cahnrs_allowed_blocks[] = 'cahnrs/voice-of-the-vine';
		$cahnrs_allowed_blocks[] = 'cahnrs/events-list';
		$cahnrs_allowed_blocks[] = 'cahnrs/extension-newsletter';


		return $cahnrs_allowed_blocks;
	}

	public static function cahnrsregister() {

		// Get blocks to register
		$blocks = self::$register_blocks;

		// Get the block directory
		$block_dir = CAHNRSGutenbergPlugin::get( 'dir' ) . 'blocks/';

		foreach ( $blocks as $block => $class ) {

			// folder name should be the block name with the / replaced with - (i.e. wsuwp/name -> wsupw-name)
			$block_folder = str_replace( '/', '-', $block );

			$block_class = __NAMESPACE__ . '\\' . $class;

			require_once $block_dir . $block_folder . '/block.php';

			// Call get('register_block') to check if the block should be registered, default is true in class-block.php
			if ( call_user_func( array( $block_class, 'get' ), 'register_block' ) ) {
				//echo $block_class;
				register_block_type(
					$block,
					array(
						'api_version'     => 2,
						'render_callback' => array( $block_class, 'render_block' ),
						'editor_script'   => 'cahnrs-gutenberg-blocks',
					)
				);
			}
		}

		
	}

}

Register_Block_CAHNRS::init();