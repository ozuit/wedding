// Switch field for Visual Composer
(function ( $ ) {

   // instagram feed
   if ($(".instagram-feed").length) {
       var instaUserId = $(".instagram-feed").data('id'),
       instaToken = $(".instagram-feed").data('token');
       var instaLimit = $(".instagram-feed").data('limit');
       var instaFeed = new Instafeed({
       get: 'user',
       userId: instaUserId,
       accessToken: instaToken,
       resolution: 'standard_resolution',
           limit: instaLimit,
           template: '<div class="instagram-items"><a href="{{link}}"><img src="{{image}}"/></a></div>',
       });
       instaFeed.run();
   }

})( window.jQuery );