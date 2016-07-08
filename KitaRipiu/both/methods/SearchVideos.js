Meteor.methods({
    searchVideo: function(search) {
        videoList = new Mongo.Collection('videoList');

        YoutubeApi.search.list({
            part: "id",
            type: "video",
            maxResults: 5,
            q: 'xiaomi',
        }, function(err, data) {


            for (let i = 0; i < 5; i++) {
                let video = { 'videoId': data.items[i].id.videoId };
                videoList.insert(video);
            };
        });
        console.log(videoList.find());
        return videoList.find();
    }
});
