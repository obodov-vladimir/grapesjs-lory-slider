import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('grapesjs-tiny-slider', (editor, opts = {}) => {
  const options = { ...{
    // Object to extend the default slider block, eg. `{ label: 'Slider', attributes: { ... } }`
    // Pass a falsy value to avoid adding the block
    sliderBlock: {},

    // Script to load dynamically in case no lory instance found
    script: 'https://cdnjs.cloudflare.com/ajax/libs/lory.js/2.3.4/lory.min.js',
  },  ...opts };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);

  // TODO Remove
  editor.on('load', () => editor.addComponents(`<div style="margin:0 100px; padding:25px;">Content loaded from the plugin</div>`))
});
