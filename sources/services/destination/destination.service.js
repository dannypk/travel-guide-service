const listingsAndReviews = require('../../models/listingAndReviews');

class DestinationService {
  async getAvailableAccommodation(destination) {
    if (!destination) {
      return [];
    }
    
    const list = await listingsAndReviews.find({
      "address.market": {
        $regex: new RegExp('^' + destination, 'i')
      }
    }, {
      listing_url: 1,
      room_type: 1,
      house_rules: 1,
      name: 1,
      price: 1,
      accommodates: 1,
      review_scores: 1,
      property_type: 1,
      reviews: 1,
      'images.picture_url': 1
    }, { sort: { 'review_scores.review_scores_rating': -1 }, limit: 10 });
    
    return list.map(item => item.toJSON());
  }
}

module.exports = new DestinationService();