function locationController() {
    // Selecting all the location property container elements (HTML elements, where the location data needs to be injected)
    const locationPropertyContainers = document.querySelectorAll('[data-location-property]');
    // Geting the value from the Toggle Brand choice input (which is set as the data-toggle-brand attribute on <body> element)
    const location = document.body.dataset.toggleBrand || 'belmont-oasis-leisure-centre';
    // Grabbing the master object with all the facility properties from snippet
    const locationsObj = JSON.parse(document.body.dataset.locationsObject) || {};       

    for ( const locationPropertyContainer of locationPropertyContainers ) {
      const locationProperty = locationPropertyContainer.dataset.locationProperty;
      const imageCheck = locationPropertyContainer.nodeName.toLowerCase() === 'img';

      if ( imageCheck ) {
        // Exception for image elements (like logo) where we are setting src attribute
        locationPropertyContainer.src = locationsObj[location][locationProperty];
      } else {
        locationPropertyContainer.innerText = locationsObj[location][locationProperty];
      }
    }
  }
      
  locationController();