Meteor.subscribe("videoList");

Template.AddPhone.onCreated(function() {
    this.keyword = new ReactiveVar('');
    this.result = new ReactiveVar(0);

    console.log(videos.find().count());

});

Template.AddPhone.helpers({

});


Template.AddPhone.events({
    "submit form": (event, template) => {
        event.preventDefault();

        let merk = event.target.merk.value,
            nama = event.target.nama.value,
            judul = event.target.judul.value,
            size = event.target.size.value,
            weight = event.target.weight.value,
            color = event.target.color.value,
            height = event.target.height.value,
            description = event.target.description.value;

    },

    'change #search-keyword': (event, template) => {
        event.preventDefault();

        let keyword = event.target.value;

        template.keyword.set(keyword);

        Meteor.call('searchVideo', keyword, (error, result) => {
            if (result) {
                alert(result);
            } else if (err) {
                alert(err);
            }
        });

    },

    'change #search-result': (event, template) => {
        event.preventDefault();

        let result = event.target.value;

        template.result.set(result);
        console.log(template.result.get());

    }
});
