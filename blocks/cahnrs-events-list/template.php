<div class="tribe-compatibility-container" id="cahnrs-event-list">
	<div class="tribe-common tribe-events tribe-events-view tribe-events-view--widget-events-list tribe-events-widget">
		<div class="tribe-events-widget-events-list">
			<div class="tribe-events-widget-events-list__events">
				<ul class="<?php echo esc_attr( $attrs['className']); ?>">
					<?php foreach( $events_items as $event_item ) : ?>
						<?php 
							if ( ! isset( $card_attrs ) ) {
								$card_attrs = array();
							}

							WSUWP\Plugin\Gutenberg\Blocks::parse_block_template_args(
								$card_attrs,
								array(
									'className'   => '',
									'showCaption' => true,
									'showImage'   => true,
									'showHeading'   => true,
									'imageRatio' => '',
									'showContent' => false,
									'headingTag' => 'h3',
									'headingClass' => '',
									'linkCard'     => false,   
								)
							);
						?>
						<?php if(! empty( $attrs['host'])){
							include __DIR__ . '/remote-template.php';
						}else{
							include __DIR__ . '/local-template.php';
						} ?>
					
					<?php endforeach; ?>
				</ul>
			</div>
		</div>
	</div>
</div>
