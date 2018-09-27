// $(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '192657074',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '192657074.1677ed0.85d359ff01ac4af6bc5d3f717d36327e',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


//     // This will create a single gallery from all elements that have class "gallery-item"
//     $('.gallery').magnificPopup({
//         type: 'image',
//         delegate: 'a',
//         gallery: {
//             enabled: true
//         }
//     });
//
//
// });
