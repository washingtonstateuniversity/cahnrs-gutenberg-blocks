<?php 
$eventIsAllDay 			= $event_item['isAllDay'];
$eventIsMultiDay        = $event_item['isMultiDay'];
$eventDateTime 			= $event_item['Time'];
$eventStartDate 		= $event_item['startDay'];
$eventStartMonth 		= $event_item['startMonth'];
$eventStartTime 		= $event_item['startTime'];
$eventEndTime 			= $event_item['endTime'];
$eventEndMonth 			= $event_item['endMonth'];
$eventEndDay 			= $event_item['endDay'];
?>
<li>
    <div class="tribe-common-g-row tribe-events-widget-events-list__event-row">

        <div class="tribe-events-widget-events-list__event-date-tag tribe-common-g-col">
            <time class="tribe-events-widget-events-list__event-date-tag-datetime" datetime="<?php echo esc_attr( $eventDateTime ); ?>">
                <span class="tribe-events-widget-events-list__event-date-tag-month">
                    <?php echo esc_attr( $eventStartMonth ); ?></span> 
                <span class="tribe-events-widget-events-list__event-date-tag-daynum tribe-common-h2 tribe-common-h4--min-medium">
                <?php echo esc_attr( $eventStartDate ); ?></span>
            </time>
        </div>

        <div class="tribe-events-widget-events-list__event-wrapper tribe-common-g-col">
            <article class="tribe-events-widget-events-list__event tribe_events type-tribe_events status-publish hentry">
                <div class="tribe-events-widget-events-list__event-details">

                    <header class="tribe-events-widget-events-list__event-header">
                        
                        <<?php echo esc_attr( $card_attrs['headingTag'] ); ?> class="wsu-title tribe-events-widget-events-list__event-title tribe-common-h7 <?php if ( ! empty( $card_attrs['headingClass'] ) ) : ?><?php echo esc_attr( $card_attrs['headingClass'] ); ?><?php endif; ?>">
                            <a href="<?php echo esc_attr( $event_item['link'] ); ?>" title="<?php echo esc_attr( $event_item['title'] ); ?>" rel="bookmark" class="tribe-events-widget-events-list__event-title-link tribe-common-anchor-thin">
                                <?php echo esc_attr( $event_item['title'] ); ?>	
                            </a>
                        </<?php echo esc_attr( $card_attrs['headingTag'] ); ?>>
                        
                        <div class="tribe-events-widget-events-list__event-datetime-wrapper tribe-common-b2 tribe-common-b3--min-medium">
                            <?php 
                                if(($eventIsAllDay) && ($eventStartDate == $eventEndDay)){
                                    ?> <span class="tribe-event-date-start">All Day Event</span> <?php 
                                }elseif($eventIsMultiDay){ 
                                    ?>
                                    <time class="tribe-events-widget-events-list__event-datetime" datetime="<?php echo esc_attr( $eventDateTime ); ?>">
                                        <span> Date: </span>
                                        <span class="tribe-event-date-end"><?php echo esc_attr( $eventStartMonth ); ?></span> <span class="tribe-event-time"><?php echo esc_attr( $eventStartDate  ); ?></span> 
                                        <span> to </span>
                                        <span class="tribe-event-date-end"><?php echo esc_attr( $eventEndMonth ); ?></span> <span class="tribe-event-time"><?php echo esc_attr( $eventEndDay  ); ?></span>    
                                        <?php 
                                            if($eventIsAllDay){ ?>
                                                <span class="tribe-event-date-start"> | All Day Event</span> 
                                        <?php }else{ ?> 
                                                <span> | Time: </span>
                                                <span class="tribe-event-date-start"><?php echo esc_attr( $eventStartTime ); ?></span> - <span class="tribe-event-time"><?php echo esc_attr( $eventEndTime ); ?></span>
                                                <?php } ?>
                                    </time>    
                                <?php }else{ ?>
                                    <time class="tribe-events-widget-events-list__event-datetime" datetime="<?php echo esc_attr( $eventDateTime ); ?>">

                                    <span class="tribe-event-date-start"><span> Time: </span><?php echo esc_attr( $eventStartTime ); ?></span> - <span class="tribe-event-time"><?php echo esc_attr( $eventEndTime ); ?></span>	</time> <?php
                            } 
                            ?>
                            
                        </div>
                    </header>
                </div>
            </article>
        </div>

    </div>
</li>
						
