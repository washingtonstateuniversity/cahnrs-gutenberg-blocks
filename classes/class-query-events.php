<?php namespace CAHNRS\Plugin\Gutenberg;


class CAHNRS_Events_Query_Posts {

	public $rest_api;
	public $post_type;
	public $events_per_page;
	public $post__in;
	public $offset;
	public $order;
	public $taxonomy;
	public $terms;
	public $tax_query;
	public $host;
	public $exclude_posts;
	public $image_size;
	public $show_sticky;
	public $require_image;
	public $require_first_image;
	public $hide_shown_posts;
	public $use_and_logic;
	public $exclude_shown_posts;


	public function __construct( $attrs ) {

		$this->set_args( $attrs );

	}

	public function set_args( $attrs ) {

		$this->rest_api             = ( ! empty( $attrs['restApi'] ) ) ? $attrs['restApi'] : 'wp-json/tribe/events/v1/events/';
		$this->post_type            = ( ! empty( $attrs['postType'] ) ) ? explode( ',', $attrs['postType'] ) : array( 'post' );
		$this->posts_per_page       = ( ! empty( $attrs['count'] ) ) ? (int) $attrs['count'] : 5;
		$this->post__in             = ( ! empty( $attrs['postIn'] ) ) ? array_filter( explode( ',', $attrs['postIn'] ) ) : array();
		$this->offset               = ( ! empty( $attrs['offset'] ) ) ? (int) $attrs['offset'] : 0;
		$this->order                = ( ! empty( $attrs['order'] ) ) ? $attrs['order'] : 'ASC';
		$this->taxonomy             = ( ! empty( $attrs['taxonomy'] ) ) ? $attrs['taxonomy'] : 'category';
		$this->terms                = ( ! empty( $attrs['terms'] ) ) ? explode( ',', $attrs['terms'] ) : array();
		$this->host                 = ( ! empty( $attrs['host'] ) ) ? $attrs['host'] : '';
		$this->exclude_posts        = ( ! empty( $attrs['exclude_posts'] ) ) ? explode( ',', $attrs['exclude_posts'] ) : array();
		$this->image_size           = ( ! empty( $attrs['imageSize'] ) ) ? $attrs['imageSize'] : 'large';
		$this->show_sticky          = ( ! empty( $attrs['showSticky'] ) ) ? $attrs['showSticky'] : false;
		$this->require_image        = ( ! empty( $attrs['requireImage'] ) ) ? $attrs['requireImage'] : false;
		$this->require_first_image  = ( ! empty( $attrs['requireFirstImage'] ) ) ? $attrs['requireFirstImage'] : false;
		$this->hide_shown_posts     = ( ! empty( $attrs['hideShownPosts'] ) ) ? $attrs['hideShownPosts'] : false;
		$this->use_and_logic        = ( ! empty( $attrs['useAndLogic'] ) ) ? $attrs['useAndLogic'] : false;
		$this->exclude_shown_posts  = ( ! empty( $attrs['hideShownPosts'] ) ) ? $attrs['hideShownPosts'] : false;
		$this->tax_query            = ( ! empty( $attrs['queryTerms'] ) ) ? $attrs['queryTerms'] : false;

	}


	public function cahnrs_events_get_posts() {

		$query_args = $this->get_local_query_args();

		$events = ( $this->require_first_image ) ? $this->get_first_image_post( $query_args ) : array();

		$events = array_merge( $events, $this->get_local_posts( $query_args ) );

		return $events;

	}


	public function cahnrs_get_remote_posts() {

		$events = array();

		$request_url = $this->get_remote_query_url();

		$response = wp_remote_get( $request_url );

		if( is_wp_error( $request ) ) {

			return $events;

		}

		$body = wp_remote_retrieve_body( $response );

		$post_array = json_decode( $body, true );

		if ( ! is_array( $post_array ) ) {

			return $events;

		}

		$date_format = get_option( 'date_format' );


		foreach ( $post_array['events'] as $api_post ) {
		// 			echo "<pre>";
		// print_r($api_post);
		// echo "</pre>";



			$event = array();
			$event['id']     			= $api_post['id'];
			$event['title']   			= $api_post['title'];
			$event['caption'] 			= $api_post['excerpt'];
			$event['content'] 			= $api_post['content'];
			$event['link']    			= $api_post['link'];
			$event['date']    			= date_i18n( $date_format, strtotime( $api_post['date'] ) );
			$event['allDay'] 			= $api_post['all_day'];
			$event['timeZone'] 			= $api_post['timezone_abbr'];
			$event['startDate'] 		= $api_post['start_date'];
			$event['endDate'] 			= $api_post['end_date'];
			$event['url'] 				= $api_post['url'];
			$event['dateTimeSeparator'] = $api_post['_EventDateTimeSeparator'];
			$event['timeRangeSeparator'] = $api_post['_EventTimeRangeSeparator'];
			$event['organizerID'] 		= $api_post['_EventOrganizerID'];
			$event['venueID'] 			= $api_post['_EventVenueID'];
			$event['organizerEmail'] 	= $api_post['_OrganizerEmail'];
			$event['organizerPhone'] 	= $api_post['_OrganizerPhone'];
			$event['organizerWebsite'] 	= $api_post['_OrganizerWebsite'];
			$event['venueAddress'] 		= $api_post['_VenueAddress'];
			$event['venueCity'] 		= $api_post['_VenueCity'];
			$event['venueCountry'] 		= $api_post['_VenueCountry'];
			$event['venueProvince'] 	= $api_post['_VenueProvince'];
			$event['venueZip'] 			= $api_post['_VenueZip'];
			$event['venuePhone'] 		= $api_post['_VenuePhone'];
			$event['venueURL'] 			= $api_post['_VenueURL'];
			$event['venueState'] 		= $api_post['_VenueStateProvince'];
			$event['venueLat'] 			= $api_post['_VenueLat'];
			$event['venueLng'] 			= $api_post['_VenueLng'];
			


			if ( isset( $api_post['_embedded']['wp:featuredmedia'][0] ) && ! empty( $api_post['_embedded']['wp:featuredmedia'][0] ) ) {

				$media = $api_post['_embedded']['wp:featuredmedia'][0];

				$image_id             = get_post_thumbnail_id();
				$image_src_array      = wp_get_attachment_image_src( $image_id, $this->image_size );
				$event['imageId']      = $media['id'];
				$event['imageSrc']     = $image_src_array[0];
				$event['imageAlt']     = $media['alt_text'];
				$event['imageCaption'] = $media['caption']['rendered'];

				if ( ! empty( $media['media_details']['sizes'][ $this->image_size ] ) ) {

					$event['imageSrc'] = $media['media_details']['sizes'][ $this->image_size ]['source_url'];

				} else {

					$event['imageSrc'] = $media['source_url'];

				}
			}

			$events[] = $event;

		}

		return $events;

	}


	public function get_local_query_args() {

		$query_args = array(
			'post_type'           => $this->post_type,
			'posts_per_page'      => $this->posts_per_page,
			'offset'              => $this->offset,
			'order'               => $this->order,
			'ignore_sticky_posts' => $this->show_sticky,
			'orderby' =>'meta_value',
			'meta_key'=>'_EventStartDate',
			'order' => 'ASC',
			'eventDisplay' => 'custom',
			'meta_query' => array( array(
				'key' => '_EventEndDate',
				'value' => date('Y-m-d H:i:s'),
				'compare' => '>=',
				'type' => 'DATE'
			) )
		);

		if ( ! empty( $this->terms ) && empty( $this->tax_query ) ) {

			$query_args['tax_query'] = array(
				array(
					'taxonomy' => $this->taxonomy,
					'field'    => 'term_id',
					'terms'    => $this->terms,
					'operator' => ( ! empty( $this->use_and_logic ) ) ? 'AND' : 'IN',
				),
			);
		} else if ( ! empty( $this->tax_query ) ) {

			$tax_queries = $this->get_tax_query_sorted();
			$query_args['tax_query'] = array();

			foreach ( $tax_queries as $taxonomy => $terms  ) {

				$query_args['tax_query'][] = array(
					'taxonomy' => $taxonomy,
					'field'    => 'term_id',
					'terms'    => $terms,
					'operator' => ( ! empty( $this->use_and_logic ) ) ? 'AND' : 'IN',
				);

			}

			if ( 1 < count( $tax_queries ) ) {
				$query_args['tax_query']['relation'] = 'AND';
			}

		}

		if ( ! empty( $this->post__in ) ) {

			$query_args['post__in'] = $this->post__in;

		}


		if ( ! empty( $this->hide_shown_posts ) ) {


			$this->exclude_posts = array_merge( $this->exclude_posts, Query::get_show_posts() );

		}

		if ( ! empty( $this->exclude_posts ) ) {

			$query_args['post__not_in'] = $this->exclude_posts;

		}

		if ( ! empty( $this->exclude_shown_posts ) ) {

			$shown_posts = Query::get_show_posts();

			if ( ! empty( $shown_posts ) ) {

				$query_args['post__not_in'] = array_merge( $this->exclude_posts, $shown_posts );

			}
		}


		return $query_args;

	}


	protected function get_local_posts( $query_args ) {

		$events = array();

		$the_query = new \WP_Query( $query_args );
		
		if ( $the_query->have_posts() ) {
			if(is_plugin_active( 'the-events-calendar/the-events-calendar.php' )){
				while ( $the_query->have_posts() ) {
					$the_query->the_post();

						$event['id']      = get_the_ID();
						$event['title']   = get_the_title();
						$event['caption'] = get_the_excerpt();
						$event['content'] = get_the_content();
						$event['link']    = get_permalink();
						$event['date']    = get_the_date();
						$event['startDay']  = tribe_get_start_date($event['id'], false, 'd');
						$event['startMonth']  = tribe_get_start_date($event['id'], false, 'M');
						$event['startTime']  = tribe_get_start_date($event['id'], false, 'g:i a');
						$event['endDay']  = tribe_get_end_date($event['id'], false, 'd');
						$event['endMonth']  = tribe_get_end_date($event['id'], false, 'M');
						$event['endTime']  = tribe_get_end_date($event['id'], false, 'g:i a');
						$event['Time']  = tribe_get_end_date($event['id'], false, 'Y-n-d');
						$event['isAllDay'] =  tribe_event_is_all_day();
						$event['isMultiDay'] = tribe_event_is_multiday();

						$events[] = $event;
					}
			}
			
		}

		wp_reset_postdata();

		return $events;

	}


	public function get_remote_query_url() {

		$query_args = $this->get_remote_query_args();

		$url = ( ! empty( $this->host ) ) ? $this->host : get_bloginfo( 'url' );

		$url = trailingslashit( $url ) . $this->rest_api;

		switch ( $this->post_type[0] ) {

			case 'post':
				$url .= 'events/';
				break;

			case 'page':
				$url .= 'pages/';
				break;
			default:
				$url .= $this->post_type[0] . '/';
		}

		$url = str_replace('tribe_events/','', $url);
		

		$url .= '?' . http_build_query( $query_args );

		$url .= '&_embed';

		return $url;

	}


	public function get_remote_query_args() {

		$query_args = array(
			'per_page'       => $this->posts_per_page,
			'offset'         => $this->offset,
			'order'          => strtolower( $this->order ),
			'orderby' 		 => $this->orderby ,
			'meta_key'  	 => $this->eventEndDate ,
			
		);

		if ( ! empty( $this->terms ) ) {

			switch ( $this->taxonomy ) {

				case 'tribe_events_cat':
					$query_args['categories'] = implode( ',', $this->terms );
					break;
				case 'post_tag':
					$query_args['tags'] = implode( ',', $this->terms );
					break;

			}
		}

		if ( ! empty( $this->use_and_logic ) ) {

			$query_args['term_relation'] = 'AND';

		}

		if ( ! empty( $this->exclude_posts ) ) {

			$query_args['exclude'] = implode( ',', $this->exclude_posts );

		}

		return $query_args;

	}


	protected function get_first_image_post( &$query_args ) {

		$temp_query = $query_args;
		$temp_query['posts_per_page'] = 1;

		$temp_query['meta_query'] = array(
			array(
				'key' => '_thumbnail_id',
			),
		);

		$events = $this->get_local_posts( $temp_query );

		if ( ! empty( $events[0]['id'] ) ) {

			$post_id = $events[0]['id'];

			if ( ! empty( $query_args['post__not_in'] ) && is_array( $query_args['post__not_in'] ) ) {

				$query_args['post__not_in'][] = $post_id;

			} else {

				$query_args['post__not_in'] = array( $post_id );

			}

			if ( '-1' !== $query_args['posts_per_page'] ) {

				$query_args['posts_per_page'] = ( (int) $query_args['posts_per_page'] - 1 );

			}

		}

		return $events;

	}


	protected function get_tax_query_sorted() {

		$sorted_query = array();

		foreach ( $this->tax_query as $tax_query ) {

			$taxonomy = $tax_query['taxonomy'];
			$term     = $tax_query['termID'];

			if ( array_key_exists( $taxonomy, $sorted_query ) ) {

				$sorted_query[ $taxonomy ][] = $term;

			} else {

				$sorted_query[ $taxonomy ] = array( $term );

			}

		}

		return $sorted_query;

	}

}