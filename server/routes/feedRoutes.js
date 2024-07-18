// Express is being imported
const express = require ('express');
// Router object created using express
const router = express.Router( );

// Code imports feedController and feedItems
let feedController = require("../controller/feedController");
let feedItem = require("../model/feedItems");

router.route("/")
    .get(feedItem.getFeeds)
    .post(feedController.saveFeed);

router.route("/:feedId")
    .get(feedController.getFeed)
    .delete(feedController.deleteFeed)
    .patch(feedController.updateFeed)

module.exports = router;