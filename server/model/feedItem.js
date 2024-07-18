// Function named feedItem with 4 parameters
function feedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

// Function createFeed with 4 parameters
exports.createFeed = function(title, body, linkUrl, imageUrl) {
    return new feedItem(title, body, linkUrl, imageUrl);
};