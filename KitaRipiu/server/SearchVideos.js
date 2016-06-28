Meteor.methods({
    searchVideo: function(search) {

        YoutubeApi.search.list({
            part: "id",
            type: "video",
            maxResults: 5,
            q: search,
        }, function (err, data) {
            for(let i=0; i<5; i++) {
                console.log(data.items[i].id.videoId);
            }


            Meteor.publish('videoList', () => {
                return data.items   ;
            });
        });
    }
});
