<?php namespace CAHNRS\Plugin\Gutenberg;

class Block_WSUWP_CAHNRS_Events_List extends \WSUWP\Plugin\Gutenberg\Block {

	protected static $block_name    = 'cahnrs/events-list';

	protected static $default_attrs = array(
		'className'   => 'cahnrs-events-list',
		'postIn'      => '',
		'hideDate'    => false,
		'hideCaption' => false,
		'postType'   => 'tribe_events',
		'taxonomy'    => 'tribe_events_cat',
		'terms'       => '',
		'queryTerms'  => array(),
		'headingTag'  => 'h3',
		'count'       => '3',
		'offset'      => '0',
		'host'        => '',
		'useAndLogic' => false,
		'orderby' => '_EventStartDate'
	);


	public static function render( $attrs, $content = '' ) {
			
		$post_query = new CAHNRS_Events_Query_Posts( $attrs );

		$card_attrs = array(
			'headingTag'  => $attrs['headingTag'],
		);

		$events_items = ( ! empty( $attrs['host'] ) ) ? $post_query->cahnrs_get_remote_posts() : $post_query->cahnrs_events_get_posts();
			
		ob_start();

		if ( ! empty( $events_items ) ) {
			
			include __DIR__ . '/template.php';

		}

		return ob_get_clean();

	}
	
}
