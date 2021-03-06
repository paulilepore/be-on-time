// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
import { toggleInfo } from '../components/status';
import { toggleMenu } from '../components/menu';
import { changeStatus } from '../components/change_info_status';
import { gsap } from "gsap";
import { checkAnimation } from '../animations/checkmark';
import { addFavorites } from '../components/fav';
import { loadingPage } from '../animations/loading';





import { initIndexMapbox, initShowMapbox } from '../plugins/init_mapbox';
import { initAutocomplete } from '../plugins/init_autocomplete';
import { updateTime } from '../components/bus_arrival';

// import { panelTrigger } from '../animations/panel';

document.addEventListener('turbolinks:load', () => {

  addFavorites();
  initIndexMapbox();
  initShowMapbox();
  toggleInfo();
  toggleMenu();
  changeStatus();
  loadingPage();
  initAutocomplete();
  checkAnimation();
  updateTime();
})

import "controllers"
