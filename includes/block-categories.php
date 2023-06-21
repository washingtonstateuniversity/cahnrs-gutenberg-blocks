<?php namespace CAHNRS\Plugin\Gutenberg;

class CAHNRSBlockCategories {

    public static function init() {
      add_filter( 'block_categories_all', array( __CLASS__, 'register_block_categories' ), 10, 2 );
    }

    //Register the CAHNRS Gutenberg Block category
    public static function register_block_categories( $categories ) {
      $categories[] = array(
              'slug'  => 'cahnrs',
              'title' => 'CAHNRS'
          );

      return $categories;
	  }

}

CAHNRSBlockCategories::init();
