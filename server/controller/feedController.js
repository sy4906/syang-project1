const feedAllItem = require('../model/feedItem');
// Function named feedItem with 4 parameters
function feedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

// Creates an array named currentStories
var currentStories = [];

var feedItem1 = new feedItem("Marist: Story 1", "This is the body for story 1.", "https://www.marist.edu/", "images/campus.png");
var feedItem2 = new feedItem("Marist: Story 2", "This is the body for story 2.", "https://www.marist.edu/", "images/campus.png");
var feedItem3 = new feedItem("Marist: Story 3", "This is the body for story 3.", "https://www.marist.edu/", "images/campus.png");
currentStories.push(feedItem1);
currentStories.push(feedItem2);
currentStories.push(feedItem3);

// 1. Function to get a list of all feedItems
exports.getFeeds = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories);
}

// 2. Function to save a new feedItem to the list
exports.saveFeed = function(req, res) {
    let newFeedItem = feedAllItem.createFeed(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
    currentStories.push(newFeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories);
}

// 3. Function to get a particular feedItem by id
exports.getFeed = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories[req.params.feedId]);
}

// 4. Function to delete a particular feedItem by id
exports.deleteFeed = function(req, res) {
    currentStories.splice(req.params.feedId, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories);
}

// 5. Function to update provided members of a feedItem by id
exports.updateFeed = function(req, res) {
    // get the existing feed from the array
    var updatedFeed = currentStories[req.params.feedId];

    if (req.body.title)
        updatedFeed.title = req.body.title;
    if (req.body.body)
        updatedFeed.body = req.body.body;
    if (req.body.linkUrl)
        updatedFeed.linkUrl = req.body.linkUrl;
    if (req.body.imageUrl)
        updatedFeed.imageUrl = req.body.imageUrl;

    // save the local copy of the feed back into the array
    currentStories[req.params.feedId] = updatedFeed;

    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories[req.params.feedId]);
}