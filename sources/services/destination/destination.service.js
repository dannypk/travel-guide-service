const COLLECTION_NAME = 'listingsAndReviews';

class DestinationService {
  getAvailableAccommodation(destination, db) {
    if (!destination) {
      return [];
    }
    
    return db.collection(COLLECTION_NAME).find({ "address.market": destination })
      .project({
        listing_url: 1,
        room_type: 1,
        house_rules: 1,
        property_type: 1
      }).limit(10).toArray();
  }
}

module.exports = new DestinationService();