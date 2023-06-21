const { __ } = wp.i18n;

const { InnerBlocks } = wp.blockEditor;

const { InspectorControls, useBlockProps } = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl,
    IconButton,
    ToggleControl
} = wp.components; 

import { dispatch, select } from "@wordpress/data";

import {
  createBlock,
  createBlocksFromInnerBlocksTemplate,
  store as blocksStore,
} from "@wordpress/blocks";

import {
  PostTypeSelectControl,
  TaxonomyTypeSelectControl,
  TaxonomyTermSelectControl,
  CountControl,
  OffsetControl,
  HostControl,
  RequireImageControl,
  RequireFirstImageControl,
  HeadingTagControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import {
  ColorClassNameSelector,
  SpacingClassNameSelector,
} from "../../../assets/src/js/partials/block-controls/blockControls";
import { useEffect, useState } from "@wordpress/element";
import {
  PanelInsertPost,
  PanelDisplayOptions,
  PanelFeedPosts,
  PanelGeneralOptions,
  PanelFeedOptions,
  PanelAdvancedFeedOptions,
} from "../../../assets/src/js/partials/block-panels/blockPanels";
import { ApiRenderBlock } from "../../../assets/src/js/partials/block-components/blockComponents";
import {
  FeedPostTypeControl,
  FeedTaxonomyControl,
  FeedCountControl,
  FeedTermControl,
  FeedOffsetControl,
  FeedUseAndLogicControl,
  FeedHostControl,
  FeedPanel,
  FeedPanelAdvanced,
} from "../../../assets/src/js/partials/block-controls/feed-controls/feed-controls";


const Edit = (props) => {
  let { className, attributes, setAttributes } = props;
  

  const blockProps = useBlockProps({
    className: "wsu-news-list",
    style: {},
  });

  return (
    <>
      <InspectorControls key="setting">
        { <PanelDisplayOptions>
          <HeadingTagControl { ...props } allowedTags={ ['h2','h3','h4','h5','h6','div'] } />
        </PanelDisplayOptions> }
        <FeedPanel>
          <FeedTaxonomyControl
            label="Taxonomy"
            help="Select taxonomy to filter posts by"
            host={attributes.host || window.wsu.ROOT_URL}
            postType={attributes.postType}
            value={attributes.taxonomy}
            onChange={(taxonomy) => setAttributes({ taxonomy })}
          />
          {attributes.taxonomy && (
            <FeedTermControl
              label="Terms"
              help="Filter posts by searching and selecting terms in the selected taxonomy"
              host={attributes.host || window.wsu.ROOT_URL}
              taxonomy={attributes.taxonomy}
              value={attributes.termsSelected}
              onChange={ (terms) => setAttributes({ terms: terms.termsList, termsSelected: terms.termsSelected, queryTerms: terms.queryTerms } ) }
            />
          )}
          <FeedCountControl {...props} />
        </FeedPanel>
        <FeedPanelAdvanced>
          <FeedUseAndLogicControl {...props} />
          <FeedOffsetControl {...props} />
          <FeedHostControl {...props} />
        </FeedPanelAdvanced>
      </InspectorControls>
      <div {...blockProps}>
        <ApiRenderBlock
          attributes={attributes}
          blockName="cahnrs/events-list"
        >
          No Events Found
        </ApiRenderBlock>
      </div>
    </>
  );
};

export default Edit;
