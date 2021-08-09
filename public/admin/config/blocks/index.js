import HeroBanner from './heroBanner.js';
import Paragraph from './Paragraph.js';
import Downloads from './Downloads.js';
import ContentImage from './Contentimage.js';
import Secondary from './SecondaryImage.js';

export default {
  label: "Sections",
  name: "sections",
  widget: "list",
  types: [
    HeroBanner,
    Paragraph,
    Downloads,
    ContentImage,
    SecondaryImage,
  ]
}
