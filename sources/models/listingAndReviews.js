const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingsAndReviews = new Schema();

module.exports = mongoose.model('ListingsAndReviews', listingsAndReviews, 'listingsAndReviews');