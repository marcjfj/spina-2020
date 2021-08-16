import HeroBanner from './heroBanner.js';
import Paragraph from './Paragraph.js';
import Downloads from './Downloads.js';
import ContentImage from './Contentimage.js';
import SecondaryImage from './SecondaryImage.js';
import Calendar from './Calendar.js';
import Mappy from './map.js';
import Form from './Form.js';
import HomeHero from './HomeHero.js';

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
    Calendar,
    Mappy,
    Form,
    HomeHero
  ]
}
