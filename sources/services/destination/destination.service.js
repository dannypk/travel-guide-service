const listingsAndReviews = require('../../models/listingAndReviews');

class DestinationService {
  getAvailableAccommodation(destination, db) {
    if (!destination) {
      return [];
    }
    
    return listingsAndReviews.find({ "address.market": destination }, {
      listing_url: 1,
      room_type: 1,
      house_rules: 1,
      property_type: 1
    }, { limit: 10 }).lean();
  }
}

module.exports = new DestinationService();