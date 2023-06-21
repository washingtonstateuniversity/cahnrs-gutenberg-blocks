<?php 
    $remoteEventStartDate 	    = $event_item['startDateUTC'];
    $remoteEventStartTime 	    = $event_item['startDate'];
    $remoteEventEnd     		= $event_item['endDate'];
    $remoteEventStartDay 		= date('d',strtotime( $remoteEventStartTime ));
    $remoteEventStartMonth      = date('M', strtotime( $remoteEventStartTime ));
    $remoteEventStartTime 	    = date('g:i a', strtotime( $remoteEventStartTime ));
    $remoteEventEndTime 		= date('g:i a', strtotime( $remoteEventEnd ));
    $remoteEventEndMonth 		= date('M', strtotime( $remoteEventEnd ));
    $remoteEventEndDate		    = date('d', strtotime( $remoteEventEnd ));
    $remoteEventDateTime        = date('Y-n-d', strtotime( $remoteEventDateTime  ));
    $remoteEventAllDay          = $event_item['allDay'];
?>

<li>
    <div class="tribe-common-g-row tribe-events-widget-events-list__event-row">

        <div class="tribe-events-widget-events-list__event-date-tag tribe-common-g-col">
            <time class="tribe-events-widget-events-list__event-date-tag-datetime" datetime="<?php echo esc_attr( $remoteEventDateTime ); ?>">
                <span class="tribe-events-widget-events-list__event-date-tag-month">
                    <?php echo esc_attr( $remoteEventStartMonth ); ?></span> 
                <span class="tribe-events-widget-events-list__event-date-tag-daynum tribe-common-h2 tribe-common-h4--min-medium">
                <?php echo esc_attr( $remoteEventStartDay ); ?></span>
            </time>
        </div>

        <div class="tribe-events-widget-events-list__event-wrapper tribe-common-g-col">
            <article class="tribe-events-widget-events-list__event tribe_events type-tribe_events status-publish hentry">
                <div class="tribe-events-widget-events-list__event-details">

                    <header class="tribe-events-widget-events-list__event-header">
                        
                        <<?php echo esc_attr( $card_attrs['headingTag'] ); ?> class="wsu-title tribe-events-widget-events-list__event-title tribe-common-h7 <?php if ( ! empty( $card_attrs['headingClass'] ) ) : ?><?php echo esc_attr( $card_attrs['headingClass'] ); ?><?php endif; ?>">
                            <a href="<?php echo esc_attr( $event_item['url'] ); ?>" title="<?php echo esc_attr( $remoteEvent_item['title'] ); ?>" rel="bookmark" class="tribe-events-widget-events-list__event-title-link tribe-common-anchor-thin">
                                <?php echo esc_attr( $event_item['title'] ); ?>	
                            </a>
                        </<?php echo esc_attr( $card_attrs['headingTag'] ); ?>>
                        
                        <div class="tribe-events-widget-events-list__event-datetime-wrapper tribe-common-b2 tribe-common-b3--min-medium">
                            <?php if(($remoteEventAllDay) && ($remoteEventStartDay == $remoteEventEndDate)){ ?>
                                <span class="tribe-event-date-start">All Day Event</span>
                            <?php }elseif($remoteEventStartDay != $remoteEventEndDate){ ?>
                                <time class="tribe-events-widget-events-list__event-datetime" datetime="<?php echo esc_attr( $event_item['startDateUTC'] ); ?>">
                                        <span> Date: </span>
                                        <span class="tribe-event-date-end"><?php echo esc_attr( $remoteEventStartMonth ); ?></span> <span class="tribe-event-time"><?php echo esc_attr( $remoteEventStartDay  ); ?></span> 
                                        <span> to </span>
                                        <span class="tribe-event-date-end"><?php echo esc_attr( $remoteEventEndMonth ); ?></span> <span class="tribe-event-time"><?php echo esc_attr( $remoteEventEndDate  ); ?></span>  
                                        
                                        <?php 
                                            if($remoteEventAllDay){ ?>
                                            <span class="tribe-event-date-start"> | All Day Event</span>
                                            <?php }else{ ?>
                                                <span> | Time: </span>
                                        <span class="tribe-event-date-start"><?php echo esc_attr( $remoteEventStartTime ); ?></span> - <span class="tribe-event-time"><?php echo esc_attr( $remoteEventEndTime  ); ?></span>
                                           <?php }
                                        ?>
                                    </time>    
                            <?php }else{ ?>
                                <time class="tribe-events-widget-events-list__event-datetime" datetime="<?php echo esc_attr( $remoteEventDateTime ); ?>">
                                <span class="tribe-event-date-start"><?php echo esc_attr( $remoteEventStartTime ); ?></span> - <span class="tribe-event-time"><?php echo esc_attr( $remoteEventEndTime ); ?></span>	</time> <?php
                            }

                            ?>
                            
                        </div>
                    </header>
                </div>
            </article>
        </div>

    </div>
</li>