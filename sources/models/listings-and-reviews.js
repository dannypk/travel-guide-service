// This file is named like this because of the DB sample I am using (from MongoDB Cloud)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingsAndReviewsSchema = new Schema();

ListingsAndReviewsSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.price = ret.price.toString();
    return ret;
  },
});
module.exports = mongoose.model('ListingsAndReviewsSchema', ListingsAndReviewsSchema, 'listingsAndReviews');