wp.domReady(function () {
    const allowedEmbedBlocks = [
      'vimeo',
      'youtube',
      'soundcloud'
    ];
    wp.blocks.getBlockVariations('core/embed').forEach(function (blockVariation) {
      if (-1 === allowedEmbedBlocks.indexOf(blockVariation.name)) {
        wp.blocks.unregisterBlockVariation('core/embed', blockVariation.name);
      }
    });
  });