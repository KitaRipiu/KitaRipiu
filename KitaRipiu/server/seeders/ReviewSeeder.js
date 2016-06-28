if(reviews.find().count() === 0) {

  var dummy = {
    userId        : 'pxoDP8o6FcTTjyxPD',
    productName   : 'iPhone 7',
    specification : {
                        size  : '1 inch x 2 inch',
                        weight: '6 ounces',
                        color : 'Yellowish',
                        odor  : 'Not Much Usually'
                    },
    reviewBody    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    created       : null,
    updated       : null
  }

  for(let i=0; i<10; i++){
    reviews.insert(dummy);
  }
}
