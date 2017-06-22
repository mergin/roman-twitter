import { Component } 		from '@angular/core';
import { NavController } 	from 'ionic-angular';
import { Http, RequestOptions }   from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    posts: any;

    constructor(public navCtrl: NavController, private http: Http) {

        //this.posts = {"statuses":[{"created_at":"Thu Jun 22 15:39:07 +0000 2017","id":877913851911692289,"id_str":"877913851911692289","text":"Plot twist: They're supposed to be titties.\nhttps:\/\/t.co\/k3iknMalAO https:\/\/t.co\/jy8KdE8PAn","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[{"url":"https:\/\/t.co\/k3iknMalAO","expanded_url":"https:\/\/9gag.com\/gag\/aXqDGB9?ref=tp","display_url":"9gag.com\/gag\/aXqDGB9?re\u2026","indices":[44,67]}],"media":[{"id":877913848929550337,"id_str":"877913848929550337","indices":[68,91],"media_url":"http:\/\/pbs.twimg.com\/media\/DC75_oTXgAE_72P.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC75_oTXgAE_72P.jpg","url":"https:\/\/t.co\/jy8KdE8PAn","display_url":"pic.twitter.com\/jy8KdE8PAn","expanded_url":"https:\/\/twitter.com\/9GAG\/status\/877913851911692289\/photo\/1","type":"photo","sizes":{"large":{"w":700,"h":600,"resize":"fit"},"small":{"w":680,"h":583,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"medium":{"w":700,"h":600,"resize":"fit"}}}]},"extended_entities":{"media":[{"id":877913848929550337,"id_str":"877913848929550337","indices":[68,91],"media_url":"http:\/\/pbs.twimg.com\/media\/DC75_oTXgAE_72P.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC75_oTXgAE_72P.jpg","url":"https:\/\/t.co\/jy8KdE8PAn","display_url":"pic.twitter.com\/jy8KdE8PAn","expanded_url":"https:\/\/twitter.com\/9GAG\/status\/877913851911692289\/photo\/1","type":"photo","sizes":{"large":{"w":700,"h":600,"resize":"fit"},"small":{"w":680,"h":583,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"medium":{"w":700,"h":600,"resize":"fit"}}}]},"source":"\u003ca href=\"http:\/\/bufferapp.com\" rel=\"nofollow\"\u003eBuffer\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":16548023,"id_str":"16548023","name":"9GAG","screen_name":"9GAG","location":"Universe","description":"9GAG is the best content platform for millennials \u2022 Share your content with our 150M global audience \u2022 email creation@9gag.com \u2022 https:\/\/t.co\/aMQ9pLLhWB","url":"http:\/\/t.co\/B5GZFPUXYM","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/B5GZFPUXYM","expanded_url":"http:\/\/9gag.com","display_url":"9gag.com","indices":[0,22]}]},"description":{"urls":[{"url":"https:\/\/t.co\/aMQ9pLLhWB","expanded_url":"http:\/\/9gag.com\/apps","display_url":"9gag.com\/apps","indices":[129,152]}]}},"protected":false,"followers_count":9794011,"friends_count":10,"listed_count":10202,"created_at":"Wed Oct 01 18:46:32 +0000 2008","favourites_count":1164,"utc_offset":28800,"time_zone":"Hong Kong","geo_enabled":false,"verified":true,"statuses_count":37460,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"000000","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/663470724\/wcc0dvt5nfi4k8j5twsb.jpeg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/663470724\/wcc0dvt5nfi4k8j5twsb.jpeg","profile_background_tile":true,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/852355177260621824\/UsIvWpWX_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/852355177260621824\/UsIvWpWX_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/16548023\/1496478934","profile_link_color":"0099FF","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"111111","profile_text_color":"666666","profile_use_background_image":false,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"regular"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":6,"favorite_count":16,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"},{"created_at":"Thu Jun 22 15:38:45 +0000 2017","id":877913758445608960,"id_str":"877913758445608960","text":"Get ready for #SteamSummerSale https:\/\/t.co\/lRHnITG1oC","truncated":false,"entities":{"hashtags":[{"text":"SteamSummerSale","indices":[14,30]}],"symbols":[],"user_mentions":[],"urls":[],"media":[{"id":877913453654093825,"id_str":"877913453654093825","indices":[31,54],"media_url":"http:\/\/pbs.twimg.com\/ext_tw_video_thumb\/877913453654093825\/pu\/img\/yF_NYSz2qFgzojAU.jpg","media_url_https":"https:\/\/pbs.twimg.com\/ext_tw_video_thumb\/877913453654093825\/pu\/img\/yF_NYSz2qFgzojAU.jpg","url":"https:\/\/t.co\/lRHnITG1oC","display_url":"pic.twitter.com\/lRHnITG1oC","expanded_url":"https:\/\/twitter.com\/9GAG\/status\/877913758445608960\/video\/1","type":"photo","sizes":{"small":{"w":340,"h":255,"resize":"fit"},"medium":{"w":480,"h":360,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":480,"h":360,"resize":"fit"}}}]},"extended_entities":{"media":[{"id":877913453654093825,"id_str":"877913453654093825","indices":[31,54],"media_url":"http:\/\/pbs.twimg.com\/ext_tw_video_thumb\/877913453654093825\/pu\/img\/yF_NYSz2qFgzojAU.jpg","media_url_https":"https:\/\/pbs.twimg.com\/ext_tw_video_thumb\/877913453654093825\/pu\/img\/yF_NYSz2qFgzojAU.jpg","url":"https:\/\/t.co\/lRHnITG1oC","display_url":"pic.twitter.com\/lRHnITG1oC","expanded_url":"https:\/\/twitter.com\/9GAG\/status\/877913758445608960\/video\/1","type":"video","sizes":{"small":{"w":340,"h":255,"resize":"fit"},"medium":{"w":480,"h":360,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":480,"h":360,"resize":"fit"}},"video_info":{"aspect_ratio":[4,3],"duration_millis":11534,"variants":[{"content_type":"application\/x-mpegURL","url":"https:\/\/video.twimg.com\/ext_tw_video\/877913453654093825\/pu\/pl\/R_F8boMEvt6N-AYb.m3u8"},{"bitrate":832000,"content_type":"video\/mp4","url":"https:\/\/video.twimg.com\/ext_tw_video\/877913453654093825\/pu\/vid\/480x360\/-U4MoK5lL3tACif-.mp4"},{"bitrate":320000,"content_type":"video\/mp4","url":"https:\/\/video.twimg.com\/ext_tw_video\/877913453654093825\/pu\/vid\/240x180\/shKutwltE2EFmEDo.mp4"}]},"additional_media_info":{"monetizable":false}}]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":16548023,"id_str":"16548023","name":"9GAG","screen_name":"9GAG","location":"Universe","description":"9GAG is the best content platform for millennials \u2022 Share your content with our 150M global audience \u2022 email creation@9gag.com \u2022 https:\/\/t.co\/aMQ9pLLhWB","url":"http:\/\/t.co\/B5GZFPUXYM","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/B5GZFPUXYM","expanded_url":"http:\/\/9gag.com","display_url":"9gag.com","indices":[0,22]}]},"description":{"urls":[{"url":"https:\/\/t.co\/aMQ9pLLhWB","expanded_url":"http:\/\/9gag.com\/apps","display_url":"9gag.com\/apps","indices":[129,152]}]}},"protected":false,"followers_count":9794011,"friends_count":10,"listed_count":10202,"created_at":"Wed Oct 01 18:46:32 +0000 2008","favourites_count":1164,"utc_offset":28800,"time_zone":"Hong Kong","geo_enabled":false,"verified":true,"statuses_count":37460,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"000000","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/663470724\/wcc0dvt5nfi4k8j5twsb.jpeg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/663470724\/wcc0dvt5nfi4k8j5twsb.jpeg","profile_background_tile":true,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/852355177260621824\/UsIvWpWX_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/852355177260621824\/UsIvWpWX_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/16548023\/1496478934","profile_link_color":"0099FF","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"111111","profile_text_color":"666666","profile_use_background_image":false,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"regular"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":62,"favorite_count":65,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"},{"created_at":"Thu Jun 22 15:38:37 +0000 2017","id":877913726057238529,"id_str":"877913726057238529","text":"Piden a la ONU un embargo de armas contra Venezuela https:\/\/t.co\/M4WD5kUvMI v\u00eda @DLasAmericas","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"DLasAmericas","name":"Diario Las Am\u00e9ricas","id":1000699344,"id_str":"1000699344","indices":[80,93]}],"urls":[{"url":"https:\/\/t.co\/M4WD5kUvMI","expanded_url":"http:\/\/www.diariolasamericas.com\/c4124847","display_url":"diariolasamericas.com\/c4124847","indices":[52,75]}]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":209676645,"id_str":"209676645","name":"Alejandro Tarazona","screen_name":"ElCompuWookie","location":"Venezuela","description":"Ing. en Computaci\u00f3n. \nMi filosof\u00eda: Vive y deja vivir. \nNovum calles pervenire ad mea destinatio","url":"https:\/\/t.co\/PwfnfhKyKL","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/PwfnfhKyKL","expanded_url":"http:\/\/alejandrotarazona.blogspot.com","display_url":"alejandrotarazona.blogspot.com","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":239,"friends_count":400,"listed_count":13,"created_at":"Fri Oct 29 17:36:46 +0000 2010","favourites_count":566,"utc_offset":-14400,"time_zone":"Caracas","geo_enabled":false,"verified":false,"statuses_count":2892,"lang":"es","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"CF942D","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/261128330\/5593475_werewolf.jpg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/261128330\/5593475_werewolf.jpg","profile_background_tile":true,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/705644729845751809\/SRJi_nSh_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/705644729845751809\/SRJi_nSh_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/209676645\/1359947069","profile_link_color":"E32A09","profile_sidebar_border_color":"525252","profile_sidebar_fill_color":"000000","profile_text_color":"1DC228","profile_use_background_image":true,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":0,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"es"},{"created_at":"Thu Jun 22 15:37:54 +0000 2017","id":877913544959729664,"id_str":"877913544959729664","text":"RT @isotopp: How to turn on the light at home, Philips Version https:\/\/t.co\/7aQ9z4ypUK","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"isotopp","name":"Kristian K\u00f6hntopp","id":2202066412,"id_str":"2202066412","indices":[3,11]}],"urls":[],"media":[{"id":877444172982009856,"id_str":"877444172982009856","indices":[63,86],"media_url":"http:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg","url":"https:\/\/t.co\/7aQ9z4ypUK","display_url":"pic.twitter.com\/7aQ9z4ypUK","expanded_url":"https:\/\/twitter.com\/isotopp\/status\/877444175708475393\/photo\/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"small":{"w":680,"h":510,"resize":"fit"},"large":{"w":2048,"h":1536,"resize":"fit"},"medium":{"w":1200,"h":900,"resize":"fit"}},"source_status_id":877444175708475393,"source_status_id_str":"877444175708475393","source_user_id":2202066412,"source_user_id_str":"2202066412"}]},"extended_entities":{"media":[{"id":877444172982009856,"id_str":"877444172982009856","indices":[63,86],"media_url":"http:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg","url":"https:\/\/t.co\/7aQ9z4ypUK","display_url":"pic.twitter.com\/7aQ9z4ypUK","expanded_url":"https:\/\/twitter.com\/isotopp\/status\/877444175708475393\/photo\/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"small":{"w":680,"h":510,"resize":"fit"},"large":{"w":2048,"h":1536,"resize":"fit"},"medium":{"w":1200,"h":900,"resize":"fit"}},"source_status_id":877444175708475393,"source_status_id_str":"877444175708475393","source_user_id":2202066412,"source_user_id_str":"2202066412"}]},"source":"\u003ca href=\"https:\/\/about.twitter.com\/products\/tweetdeck\" rel=\"nofollow\"\u003eTweetDeck\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":2468699718,"id_str":"2468699718","name":"Fiora Aeterna","screen_name":"FioraAeterna","location":"San Jose, CA","description":"ace alchemist cat, cosplayer, Atelier fangirl, GPU compiler dev, and terrible punster. Ask me: https:\/\/t.co\/Wu4AlRnJTx Cosplays: https:\/\/t.co\/pmRNEA9I2a","url":null,"entities":{"description":{"urls":[{"url":"https:\/\/t.co\/Wu4AlRnJTx","expanded_url":"http:\/\/ask.fm\/FioraAeterna","display_url":"ask.fm\/FioraAeterna","indices":[95,118]},{"url":"https:\/\/t.co\/pmRNEA9I2a","expanded_url":"https:\/\/goo.gl\/VF8Uxt","display_url":"goo.gl\/VF8Uxt","indices":[129,152]}]}},"protected":false,"followers_count":14383,"friends_count":466,"listed_count":457,"created_at":"Tue Apr 29 04:08:22 +0000 2014","favourites_count":81394,"utc_offset":-25200,"time_zone":"Pacific Time (US & Canada)","geo_enabled":true,"verified":false,"statuses_count":69215,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"7E46AF","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/471153837374316544\/qFiiVZqH.png","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/471153837374316544\/qFiiVZqH.png","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/876100777403494400\/WxinlBvu_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/876100777403494400\/WxinlBvu_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/2468699718\/1497713657","profile_link_color":"7E46AF","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"7AC3EE","profile_text_color":"3D1957","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Wed Jun 21 08:32:48 +0000 2017","id":877444175708475393,"id_str":"877444175708475393","text":"How to turn on the light at home, Philips Version https:\/\/t.co\/7aQ9z4ypUK","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[],"media":[{"id":877444172982009856,"id_str":"877444172982009856","indices":[50,73],"media_url":"http:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg","url":"https:\/\/t.co\/7aQ9z4ypUK","display_url":"pic.twitter.com\/7aQ9z4ypUK","expanded_url":"https:\/\/twitter.com\/isotopp\/status\/877444175708475393\/photo\/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"small":{"w":680,"h":510,"resize":"fit"},"large":{"w":2048,"h":1536,"resize":"fit"},"medium":{"w":1200,"h":900,"resize":"fit"}}}]},"extended_entities":{"media":[{"id":877444172982009856,"id_str":"877444172982009856","indices":[50,73],"media_url":"http:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg","url":"https:\/\/t.co\/7aQ9z4ypUK","display_url":"pic.twitter.com\/7aQ9z4ypUK","expanded_url":"https:\/\/twitter.com\/isotopp\/status\/877444175708475393\/photo\/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"small":{"w":680,"h":510,"resize":"fit"},"large":{"w":2048,"h":1536,"resize":"fit"},"medium":{"w":1200,"h":900,"resize":"fit"}}}]},"source":"\u003ca href=\"https:\/\/friendsplus.me\" rel=\"nofollow\"\u003eFriends Me\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":2202066412,"id_str":"2202066412","name":"Kristian K\u00f6hntopp","screen_name":"isotopp","location":"Berlin, Germany ","description":"This account is the retweet target for my G+ account. If you follow me on G+ this will be boring for you.","url":"http:\/\/t.co\/ZI47fDmMc1","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/ZI47fDmMc1","expanded_url":"http:\/\/google.com\/+kristiankohntopp","display_url":"google.com\/+kristiankohnt\u2026","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":1393,"friends_count":383,"listed_count":61,"created_at":"Sat Nov 30 18:01:34 +0000 2013","favourites_count":2935,"utc_offset":7200,"time_zone":"Ljubljana","geo_enabled":false,"verified":false,"statuses_count":14976,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"C0DEED","profile_background_image_url":"http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png","profile_background_image_url_https":"https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/720658526972973057\/K4tI74gJ_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/720658526972973057\/K4tI74gJ_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/2202066412\/1385840267","profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":true,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":213,"favorite_count":254,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"},"is_quote_status":false,"retweet_count":213,"favorite_count":0,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"},{"created_at":"Thu Jun 22 15:34:33 +0000 2017","id":877912701443375108,"id_str":"877912701443375108","text":"RT @SimonHallNews: Boys at Isca Academy in Exeter wear skirts to school in protest at not being allowed to wear shorts in hot weather. http\u2026","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"SimonHallNews","name":"Simon Hall","id":260655588,"id_str":"260655588","indices":[3,17]}],"urls":[]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":104026801,"id_str":"104026801","name":"David Prieto","screen_name":"Strongdave","location":"Detr\u00e1s de ti, tomando una foto","description":"Ingeniero de Computaci\u00f3n. Sapiosexual confundido. Perfeccionista mediocre. Mis\u00e1ntropo compulsivo. Ateo flexible. Asperger survivor.","url":"https:\/\/t.co\/Pwe3DwH6Cl","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/Pwe3DwH6Cl","expanded_url":"http:\/\/instagram.com\/davidusb","display_url":"instagram.com\/davidusb","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":275,"friends_count":251,"listed_count":14,"created_at":"Tue Jan 12 01:18:44 +0000 2010","favourites_count":5653,"utc_offset":-14400,"time_zone":"Georgetown","geo_enabled":true,"verified":false,"statuses_count":36155,"lang":"es","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"C0DEED","profile_background_image_url":"http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png","profile_background_image_url_https":"https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/460968966928609280\/RIB8G7AU_normal.png","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/460968966928609280\/RIB8G7AU_normal.png","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/104026801\/1351688493","profile_link_color":"0084B4","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"regular"},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Thu Jun 22 07:44:05 +0000 2017","id":877794305766772736,"id_str":"877794305766772736","text":"Boys at Isca Academy in Exeter wear skirts to school in protest at not being allowed to wear shorts in hot weather. https:\/\/t.co\/XHrffnSQEN","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[],"media":[{"id":877794284782710784,"id_str":"877794284782710784","indices":[116,139],"media_url":"http:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg","url":"https:\/\/t.co\/XHrffnSQEN","display_url":"pic.twitter.com\/XHrffnSQEN","expanded_url":"https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1","type":"photo","sizes":{"small":{"w":680,"h":510,"resize":"fit"},"large":{"w":2048,"h":1536,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"medium":{"w":1200,"h":900,"resize":"fit"}}}]},"extended_entities":{"media":[{"id":877794284782710784,"id_str":"877794284782710784","indices":[116,139],"media_url":"http:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg","url":"https:\/\/t.co\/XHrffnSQEN","display_url":"pic.twitter.com\/XHrffnSQEN","expanded_url":"https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1","type":"photo","sizes":{"small":{"w":680,"h":510,"resize":"fit"},"large":{"w":2048,"h":1536,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"medium":{"w":1200,"h":900,"resize":"fit"}}},{"id":877794284791099392,"id_str":"877794284791099392","indices":[116,139],"media_url":"http:\/\/pbs.twimg.com\/media\/DC6NQFLXcAALT5K.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC6NQFLXcAALT5K.jpg","url":"https:\/\/t.co\/XHrffnSQEN","display_url":"pic.twitter.com\/XHrffnSQEN","expanded_url":"https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1","type":"photo","sizes":{"medium":{"w":900,"h":1200,"resize":"fit"},"small":{"w":510,"h":680,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":1536,"h":2048,"resize":"fit"}}}]},"source":"\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":260655588,"id_str":"260655588","name":"Simon Hall","screen_name":"SimonHallNews","location":"Exeter, Devon, UK","description":"Author and BBC News Correspondent, lover of words, thoughts, feelings and dear Devon.","url":"http:\/\/t.co\/oF4t0gk09q","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/oF4t0gk09q","expanded_url":"http:\/\/www.thetvdetective.com\/","display_url":"thetvdetective.com","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":4118,"friends_count":404,"listed_count":181,"created_at":"Fri Mar 04 09:27:10 +0000 2011","favourites_count":0,"utc_offset":3600,"time_zone":"London","geo_enabled":true,"verified":true,"statuses_count":10066,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"344D52","profile_background_image_url":"http:\/\/abs.twimg.com\/images\/themes\/theme4\/bg.gif","profile_background_image_url_https":"https:\/\/abs.twimg.com\/images\/themes\/theme4\/bg.gif","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/852539640972275712\/_c4lAqTJ_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/852539640972275712\/_c4lAqTJ_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/260655588\/1374503977","profile_link_color":"0099B9","profile_sidebar_border_color":"5ED4DC","profile_sidebar_fill_color":"95E8EC","profile_text_color":"3C3940","profile_use_background_image":true,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":11436,"favorite_count":26439,"favorited":true,"retweeted":true,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"},"is_quote_status":false,"retweet_count":11436,"favorite_count":0,"favorited":true,"retweeted":true,"lang":"en"},{"created_at":"Thu Jun 22 15:33:02 +0000 2017","id":877912319304417282,"id_str":"877912319304417282","text":"A Five Year Old Boy Asks to Get the Same Short Haircut as His Best Friend To Fool Their Teacher\u2026 https:\/\/t.co\/kgvLrjYHQn","truncated":true,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[{"url":"https:\/\/t.co\/kgvLrjYHQn","expanded_url":"https:\/\/twitter.com\/i\/web\/status\/877912319304417282","display_url":"twitter.com\/i\/web\/status\/8\u2026","indices":[97,120]}]},"source":"\u003ca href=\"http:\/\/bufferapp.com\" rel=\"nofollow\"\u003eBuffer\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":2172,"id_str":"2172","name":"Laughing Squid","screen_name":"LaughingSquid","location":"New York City","description":"\ud83d\ude02\ud83e\udd91 An art, culture & technology blog\nand hosting company @LS_Hosting\nfounded in 1995 by @ScottBeale.","url":"http:\/\/t.co\/3Rw9oSSmY4","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/3Rw9oSSmY4","expanded_url":"http:\/\/laughingsquid.com","display_url":"laughingsquid.com","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":584328,"friends_count":10,"listed_count":12059,"created_at":"Tue Jul 18 02:46:45 +0000 2006","favourites_count":83,"utc_offset":-14400,"time_zone":"Eastern Time (US & Canada)","geo_enabled":true,"verified":true,"statuses_count":71375,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"131516","profile_background_image_url":"http:\/\/abs.twimg.com\/images\/themes\/theme14\/bg.gif","profile_background_image_url_https":"https:\/\/abs.twimg.com\/images\/themes\/theme14\/bg.gif","profile_background_tile":true,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/418456260971732992\/By5KkDKn_normal.jpeg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/418456260971732992\/By5KkDKn_normal.jpeg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/2172\/1483679110","profile_link_color":"008B45","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"EFEFEF","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":2,"favorite_count":17,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"},{"created_at":"Thu Jun 22 15:30:40 +0000 2017","id":877911724812361730,"id_str":"877911724812361730","text":"RT @chess24com: Stop whatever else you're doing as Nakamura-Carlsen is about to start! https:\/\/t.co\/oF8leM7Cjz #c24live #GrandChessTour htt\u2026","truncated":false,"entities":{"hashtags":[{"text":"c24live","indices":[111,119]},{"text":"GrandChessTour","indices":[120,135]}],"symbols":[],"user_mentions":[{"screen_name":"chess24com","name":"chess24.com","id":1617972740,"id_str":"1617972740","indices":[3,14]}],"urls":[{"url":"https:\/\/t.co\/oF8leM7Cjz","expanded_url":"https:\/\/chess24.com\/en\/watch\/live-tournaments\/paris-grand-chess-tour-2017\/6\/1\/3","display_url":"chess24.com\/en\/watch\/live-\u2026","indices":[87,110]}]},"source":"\u003ca href=\"https:\/\/about.twitter.com\/products\/tweetdeck\" rel=\"nofollow\"\u003eTweetDeck\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":449588356,"id_str":"449588356","name":"Garry Kasparov","screen_name":"Kasparov63","location":"New York","description":"Chairman of the Human Rights Foundation (@HRF). Visiting Fellow at Oxford Martin. Author, speaker, 13th World Chess Champion https:\/\/t.co\/dJTDTCn37c","url":"http:\/\/t.co\/VNcDSzgHvk","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/VNcDSzgHvk","expanded_url":"http:\/\/kasparov.com","display_url":"kasparov.com","indices":[0,22]}]},"description":{"urls":[{"url":"https:\/\/t.co\/dJTDTCn37c","expanded_url":"https:\/\/www.facebook.com\/GKKasparov","display_url":"facebook.com\/GKKasparov","indices":[125,148]}]}},"protected":false,"followers_count":348952,"friends_count":392,"listed_count":5462,"created_at":"Thu Dec 29 08:17:34 +0000 2011","favourites_count":32,"utc_offset":-10800,"time_zone":"Atlantic Time (Canada)","geo_enabled":false,"verified":true,"statuses_count":16805,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"C0DEED","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/390910020\/twitter-background-dark.jpg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/390910020\/twitter-background-dark.jpg","profile_background_tile":true,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/839580537589284865\/0x9sTWYT_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/839580537589284865\/0x9sTWYT_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/449588356\/1493833489","profile_link_color":"0084B4","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Thu Jun 22 15:00:27 +0000 2017","id":877904120274878464,"id_str":"877904120274878464","text":"Stop whatever else you're doing as Nakamura-Carlsen is about to start! https:\/\/t.co\/oF8leM7Cjz #c24live\u2026 https:\/\/t.co\/0ygJMVBIBg","truncated":true,"entities":{"hashtags":[{"text":"c24live","indices":[95,103]}],"symbols":[],"user_mentions":[],"urls":[{"url":"https:\/\/t.co\/oF8leM7Cjz","expanded_url":"https:\/\/chess24.com\/en\/watch\/live-tournaments\/paris-grand-chess-tour-2017\/6\/1\/3","display_url":"chess24.com\/en\/watch\/live-\u2026","indices":[71,94]},{"url":"https:\/\/t.co\/0ygJMVBIBg","expanded_url":"https:\/\/twitter.com\/i\/web\/status\/877904120274878464","display_url":"twitter.com\/i\/web\/status\/8\u2026","indices":[105,128]}]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":1617972740,"id_str":"1617972740","name":"chess24.com","screen_name":"chess24com","location":"","description":"The world's most advanced chess platform","url":"http:\/\/t.co\/afYTxIhvak","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/afYTxIhvak","expanded_url":"http:\/\/chess24.com","display_url":"chess24.com","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":22317,"friends_count":549,"listed_count":447,"created_at":"Wed Jul 24 15:06:46 +0000 2013","favourites_count":79,"utc_offset":7200,"time_zone":"Berlin","geo_enabled":false,"verified":false,"statuses_count":30954,"lang":"en-gb","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"266AB1","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/378800000173121833\/MSkU184q.jpeg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/378800000173121833\/MSkU184q.jpeg","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/854336397376880640\/WpbAOWVr_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/854336397376880640\/WpbAOWVr_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/1617972740\/1400506781","profile_link_color":"0084B4","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":11,"favorite_count":21,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"},"is_quote_status":false,"retweet_count":11,"favorite_count":0,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"},{"created_at":"Thu Jun 22 15:30:18 +0000 2017","id":877911632055341056,"id_str":"877911632055341056","text":"#Entrevistas de la semana \u27a1 Estado desmantelado con @LilianaOrtegaM y el Dr Carlos Ayala Corao  https:\/\/t.co\/1TtCYXb6za","truncated":false,"entities":{"hashtags":[{"text":"Entrevistas","indices":[0,12]}],"symbols":[],"user_mentions":[{"screen_name":"LilianaOrtegaM","name":"Liliana OrtegaM","id":56790332,"id_str":"56790332","indices":[52,67]}],"urls":[{"url":"https:\/\/t.co\/1TtCYXb6za","expanded_url":"http:\/\/ow.ly\/1arJ30cNUR1","display_url":"ow.ly\/1arJ30cNUR1","indices":[96,119]}]},"source":"\u003ca href=\"http:\/\/www.hootsuite.com\" rel=\"nofollow\"\u003eHootsuite\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":76947892,"id_str":"76947892","name":"C\u00e9sar Miguel Rond\u00f3n","screen_name":"cmrondon","location":"Venezuela ","description":"Periodista http:\/\/t.co\/XtoCh3dmfv. Autor: El Libro de la Salsa,Pais de Estreno, Ellos que se conocen tanto. Armando el rompecabezas de un pa\u00eds.","url":"https:\/\/t.co\/yJ54AyOMNW","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/yJ54AyOMNW","expanded_url":"http:\/\/cesarmiguelrondon.com","display_url":"cesarmiguelrondon.com","indices":[0,23]}]},"description":{"urls":[{"url":"http:\/\/t.co\/XtoCh3dmfv","expanded_url":"http:\/\/Exitosfm.com","display_url":"Exitosfm.com","indices":[11,33]}]}},"protected":false,"followers_count":2411902,"friends_count":1303,"listed_count":7944,"created_at":"Thu Sep 24 14:11:15 +0000 2009","favourites_count":734,"utc_offset":-14400,"time_zone":"Caracas","geo_enabled":true,"verified":false,"statuses_count":87189,"lang":"es","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"1A1B1F","profile_background_image_url":"http:\/\/abs.twimg.com\/images\/themes\/theme9\/bg.gif","profile_background_image_url_https":"https:\/\/abs.twimg.com\/images\/themes\/theme9\/bg.gif","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/718170918011465733\/i-lfcsUj_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/718170918011465733\/i-lfcsUj_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/76947892\/1460060220","profile_link_color":"2F84EB","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"252429","profile_text_color":"666666","profile_use_background_image":true,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":3,"favorite_count":0,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"es"},{"created_at":"Thu Jun 22 15:29:23 +0000 2017","id":877911399103569921,"id_str":"877911399103569921","text":"RT @GrandChessTour: Can you find the tactic that Wesley So missed? #GrandChessTour https:\/\/t.co\/cyLj4eLWu1","truncated":false,"entities":{"hashtags":[{"text":"GrandChessTour","indices":[67,82]}],"symbols":[],"user_mentions":[{"screen_name":"GrandChessTour","name":"Grand Chess Tour","id":3161912605,"id_str":"3161912605","indices":[3,18]}],"urls":[],"media":[{"id":877873458230644736,"id_str":"877873458230644736","indices":[83,106],"media_url":"http:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg","url":"https:\/\/t.co\/cyLj4eLWu1","display_url":"pic.twitter.com\/cyLj4eLWu1","expanded_url":"https:\/\/twitter.com\/GrandChessTour\/status\/877873465017028609\/photo\/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":749,"h":791,"resize":"fit"},"medium":{"w":749,"h":791,"resize":"fit"},"small":{"w":644,"h":680,"resize":"fit"}},"source_status_id":877873465017028609,"source_status_id_str":"877873465017028609","source_user_id":3161912605,"source_user_id_str":"3161912605"}]},"extended_entities":{"media":[{"id":877873458230644736,"id_str":"877873458230644736","indices":[83,106],"media_url":"http:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg","url":"https:\/\/t.co\/cyLj4eLWu1","display_url":"pic.twitter.com\/cyLj4eLWu1","expanded_url":"https:\/\/twitter.com\/GrandChessTour\/status\/877873465017028609\/photo\/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":749,"h":791,"resize":"fit"},"medium":{"w":749,"h":791,"resize":"fit"},"small":{"w":644,"h":680,"resize":"fit"}},"source_status_id":877873465017028609,"source_status_id_str":"877873465017028609","source_user_id":3161912605,"source_user_id_str":"3161912605"}]},"source":"\u003ca href=\"https:\/\/about.twitter.com\/products\/tweetdeck\" rel=\"nofollow\"\u003eTweetDeck\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":449588356,"id_str":"449588356","name":"Garry Kasparov","screen_name":"Kasparov63","location":"New York","description":"Chairman of the Human Rights Foundation (@HRF). Visiting Fellow at Oxford Martin. Author, speaker, 13th World Chess Champion https:\/\/t.co\/dJTDTCn37c","url":"http:\/\/t.co\/VNcDSzgHvk","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/VNcDSzgHvk","expanded_url":"http:\/\/kasparov.com","display_url":"kasparov.com","indices":[0,22]}]},"description":{"urls":[{"url":"https:\/\/t.co\/dJTDTCn37c","expanded_url":"https:\/\/www.facebook.com\/GKKasparov","display_url":"facebook.com\/GKKasparov","indices":[125,148]}]}},"protected":false,"followers_count":348952,"friends_count":392,"listed_count":5462,"created_at":"Thu Dec 29 08:17:34 +0000 2011","favourites_count":32,"utc_offset":-10800,"time_zone":"Atlantic Time (Canada)","geo_enabled":false,"verified":true,"statuses_count":16805,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"C0DEED","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/390910020\/twitter-background-dark.jpg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/390910020\/twitter-background-dark.jpg","profile_background_tile":true,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/839580537589284865\/0x9sTWYT_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/839580537589284865\/0x9sTWYT_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/449588356\/1493833489","profile_link_color":"0084B4","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Thu Jun 22 12:58:38 +0000 2017","id":877873465017028609,"id_str":"877873465017028609","text":"Can you find the tactic that Wesley So missed? #GrandChessTour https:\/\/t.co\/cyLj4eLWu1","truncated":false,"entities":{"hashtags":[{"text":"GrandChessTour","indices":[47,62]}],"symbols":[],"user_mentions":[],"urls":[],"media":[{"id":877873458230644736,"id_str":"877873458230644736","indices":[63,86],"media_url":"http:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg","url":"https:\/\/t.co\/cyLj4eLWu1","display_url":"pic.twitter.com\/cyLj4eLWu1","expanded_url":"https:\/\/twitter.com\/GrandChessTour\/status\/877873465017028609\/photo\/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":749,"h":791,"resize":"fit"},"medium":{"w":749,"h":791,"resize":"fit"},"small":{"w":644,"h":680,"resize":"fit"}}}]},"extended_entities":{"media":[{"id":877873458230644736,"id_str":"877873458230644736","indices":[63,86],"media_url":"http:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg","url":"https:\/\/t.co\/cyLj4eLWu1","display_url":"pic.twitter.com\/cyLj4eLWu1","expanded_url":"https:\/\/twitter.com\/GrandChessTour\/status\/877873465017028609\/photo\/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":749,"h":791,"resize":"fit"},"medium":{"w":749,"h":791,"resize":"fit"},"small":{"w":644,"h":680,"resize":"fit"}}}]},"source":"\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":3161912605,"id_str":"3161912605","name":"Grand Chess Tour","screen_name":"GrandChessTour","location":"","description":"Watch the 2017 Paris #GrandChessTour and enjoy live commentary in French, English, and Spanish beginning June 21.","url":"https:\/\/t.co\/AXC79ULki1","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/AXC79ULki1","expanded_url":"http:\/\/grandchesstour.org","display_url":"grandchesstour.org","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":4968,"friends_count":149,"listed_count":113,"created_at":"Sat Apr 18 03:59:12 +0000 2015","favourites_count":907,"utc_offset":-18000,"time_zone":"Central Time (US & Canada)","geo_enabled":true,"verified":false,"statuses_count":3497,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"000000","profile_background_image_url":"http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png","profile_background_image_url_https":"https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/877283967078158339\/O-tToXBR_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/877283967078158339\/O-tToXBR_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/3161912605\/1497901170","profile_link_color":"7D212B","profile_sidebar_border_color":"000000","profile_sidebar_fill_color":"000000","profile_text_color":"000000","profile_use_background_image":false,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":4,"favorite_count":12,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"},"is_quote_status":false,"retweet_count":4,"favorite_count":0,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"},{"created_at":"Thu Jun 22 15:21:51 +0000 2017","id":877909506537041920,"id_str":"877909506537041920","text":"RT @JulianAssange: LIVE: Julian #Assange y Baltasar Garz\u00f3n en @ciespal https:\/\/t.co\/nFzMAdqkhw https:\/\/t.co\/TyZS1st7il","truncated":false,"entities":{"hashtags":[{"text":"Assange","indices":[32,40]}],"symbols":[],"user_mentions":[{"screen_name":"JulianAssange","name":"Julian Assange","id":388983706,"id_str":"388983706","indices":[3,17]},{"screen_name":"ciespal","name":"CIESPAL","id":46700541,"id_str":"46700541","indices":[62,70]}],"urls":[{"url":"https:\/\/t.co\/nFzMAdqkhw","expanded_url":"http:\/\/ciespaltv.org\/","display_url":"ciespaltv.org","indices":[71,94]}],"media":[{"id":877908110186303488,"id_str":"877908110186303488","indices":[95,118],"media_url":"http:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg","url":"https:\/\/t.co\/TyZS1st7il","display_url":"pic.twitter.com\/TyZS1st7il","expanded_url":"https:\/\/twitter.com\/JulianAssange\/status\/877908134647431168\/photo\/1","type":"photo","sizes":{"small":{"w":680,"h":156,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":824,"h":189,"resize":"fit"},"medium":{"w":824,"h":189,"resize":"fit"}},"source_status_id":877908134647431168,"source_status_id_str":"877908134647431168","source_user_id":388983706,"source_user_id_str":"388983706"}]},"extended_entities":{"media":[{"id":877908110186303488,"id_str":"877908110186303488","indices":[95,118],"media_url":"http:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg","url":"https:\/\/t.co\/TyZS1st7il","display_url":"pic.twitter.com\/TyZS1st7il","expanded_url":"https:\/\/twitter.com\/JulianAssange\/status\/877908134647431168\/photo\/1","type":"photo","sizes":{"small":{"w":680,"h":156,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":824,"h":189,"resize":"fit"},"medium":{"w":824,"h":189,"resize":"fit"}},"source_status_id":877908134647431168,"source_status_id_str":"877908134647431168","source_user_id":388983706,"source_user_id_str":"388983706"}]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":16589206,"id_str":"16589206","name":"WikiLeaks","screen_name":"wikileaks","location":"Everywhere","description":"We open governments. Contact: https:\/\/t.co\/676V6mG02v  PGP: A04C 5E09 ED02 B328 03EB 6116 93ED 732E \n\n@WLArtForce @WLTaskForce @WikiLeaksShop","url":"https:\/\/t.co\/maw0wih6t6","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/maw0wih6t6","expanded_url":"https:\/\/wikileaks.org","display_url":"wikileaks.org","indices":[0,23]}]},"description":{"urls":[{"url":"https:\/\/t.co\/676V6mG02v","expanded_url":"https:\/\/wikileaks.org\/#submit","display_url":"wikileaks.org\/#submit","indices":[30,53]}]}},"protected":false,"followers_count":4767894,"friends_count":7564,"listed_count":56570,"created_at":"Sat Oct 04 06:41:05 +0000 2008","favourites_count":38,"utc_offset":3600,"time_zone":"Dublin","geo_enabled":false,"verified":true,"statuses_count":47184,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":true,"profile_background_color":"9AE4E8","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/3147857\/WL_Hour_Glass.jpg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/3147857\/WL_Hour_Glass.jpg","profile_background_tile":true,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/512138307870785536\/Fe00yVS2_normal.png","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/512138307870785536\/Fe00yVS2_normal.png","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/16589206\/1402313050","profile_link_color":"0084B4","profile_sidebar_border_color":"BDDCAD","profile_sidebar_fill_color":"DDFFCC","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Thu Jun 22 15:16:24 +0000 2017","id":877908134647431168,"id_str":"877908134647431168","text":"LIVE: Julian #Assange y Baltasar Garz\u00f3n en @ciespal https:\/\/t.co\/nFzMAdqkhw https:\/\/t.co\/TyZS1st7il","truncated":false,"entities":{"hashtags":[{"text":"Assange","indices":[13,21]}],"symbols":[],"user_mentions":[{"screen_name":"ciespal","name":"CIESPAL","id":46700541,"id_str":"46700541","indices":[43,51]}],"urls":[{"url":"https:\/\/t.co\/nFzMAdqkhw","expanded_url":"http:\/\/ciespaltv.org\/","display_url":"ciespaltv.org","indices":[52,75]}],"media":[{"id":877908110186303488,"id_str":"877908110186303488","indices":[76,99],"media_url":"http:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg","url":"https:\/\/t.co\/TyZS1st7il","display_url":"pic.twitter.com\/TyZS1st7il","expanded_url":"https:\/\/twitter.com\/JulianAssange\/status\/877908134647431168\/photo\/1","type":"photo","sizes":{"small":{"w":680,"h":156,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":824,"h":189,"resize":"fit"},"medium":{"w":824,"h":189,"resize":"fit"}}}]},"extended_entities":{"media":[{"id":877908110186303488,"id_str":"877908110186303488","indices":[76,99],"media_url":"http:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg","url":"https:\/\/t.co\/TyZS1st7il","display_url":"pic.twitter.com\/TyZS1st7il","expanded_url":"https:\/\/twitter.com\/JulianAssange\/status\/877908134647431168\/photo\/1","type":"photo","sizes":{"small":{"w":680,"h":156,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":824,"h":189,"resize":"fit"},"medium":{"w":824,"h":189,"resize":"fit"}}}]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":388983706,"id_str":"388983706","name":"Julian Assange","screen_name":"JulianAssange","location":"Ecuadorian embassy, London","description":"Publisher @WikiLeaks; Detained without charge for the last seven years in violation of two UN rulings. No wars without lies no peace without truth.","url":"https:\/\/t.co\/QY4OF0f41J","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/QY4OF0f41J","expanded_url":"https:\/\/justice4assange.com\/","display_url":"justice4assange.com","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":232933,"friends_count":1,"listed_count":1425,"created_at":"Tue Oct 11 17:17:44 +0000 2011","favourites_count":9,"utc_offset":-25200,"time_zone":"Pacific Time (US & Canada)","geo_enabled":false,"verified":false,"statuses_count":726,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"C0DEED","profile_background_image_url":"http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png","profile_background_image_url_https":"https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/841283762914656256\/2AyBiX8E_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/841283762914656256\/2AyBiX8E_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/388983706\/1489412882","profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":true,"default_profile":true,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":75,"favorite_count":91,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"es"},"is_quote_status":false,"retweet_count":75,"favorite_count":0,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"es"},{"created_at":"Thu Jun 22 15:21:50 +0000 2017","id":877909501197692928,"id_str":"877909501197692928","text":"Cuando me preguntan si soy de Charallave\nhttps:\/\/t.co\/sCZMuuZwdP","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[],"media":[{"id":877743401386496000,"id_str":"877743401386496000","indices":[41,64],"media_url":"http:\/\/pbs.twimg.com\/tweet_video_thumb\/DC5e-RuV0AAugjL.jpg","media_url_https":"https:\/\/pbs.twimg.com\/tweet_video_thumb\/DC5e-RuV0AAugjL.jpg","url":"https:\/\/t.co\/sCZMuuZwdP","display_url":"pic.twitter.com\/sCZMuuZwdP","expanded_url":"https:\/\/twitter.com\/mighttalksports\/status\/877743424945897472\/photo\/1","type":"photo","sizes":{"medium":{"w":480,"h":268,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":480,"h":268,"resize":"fit"},"small":{"w":340,"h":190,"resize":"fit"}},"source_status_id":877743424945897472,"source_status_id_str":"877743424945897472","source_user_id":4144782326,"source_user_id_str":"4144782326"}]},"extended_entities":{"media":[{"id":877743401386496000,"id_str":"877743401386496000","indices":[41,64],"media_url":"http:\/\/pbs.twimg.com\/tweet_video_thumb\/DC5e-RuV0AAugjL.jpg","media_url_https":"https:\/\/pbs.twimg.com\/tweet_video_thumb\/DC5e-RuV0AAugjL.jpg","url":"https:\/\/t.co\/sCZMuuZwdP","display_url":"pic.twitter.com\/sCZMuuZwdP","expanded_url":"https:\/\/twitter.com\/mighttalksports\/status\/877743424945897472\/photo\/1","type":"animated_gif","sizes":{"medium":{"w":480,"h":268,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":480,"h":268,"resize":"fit"},"small":{"w":340,"h":190,"resize":"fit"}},"source_status_id":877743424945897472,"source_status_id_str":"877743424945897472","source_user_id":4144782326,"source_user_id_str":"4144782326","video_info":{"aspect_ratio":[120,67],"variants":[{"bitrate":0,"content_type":"video\/mp4","url":"https:\/\/video.twimg.com\/tweet_video\/DC5e-RuV0AAugjL.mp4"}]}}]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":806043,"id_str":"806043","name":"Luis Carlos D\u00edaz","screen_name":"LuisCarlos","location":"Caracas, Venezuela","description":"Hackeando el periodismo en Venezuela. Glocal | Tejedor de redes | Hablo de tecnolog\u00edas, pol\u00edtica e infociudadan\u00eda donde me llamen | #HangoutPol\u00edtico | BOBs2013","url":"https:\/\/t.co\/4g9jTtfnAu","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/4g9jTtfnAu","expanded_url":"http:\/\/instagram.com\/periodismodepaz","display_url":"instagram.com\/periodismodepaz","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":175289,"friends_count":13722,"listed_count":2786,"created_at":"Fri Mar 02 13:33:17 +0000 2007","favourites_count":85175,"utc_offset":-14400,"time_zone":"Caracas","geo_enabled":false,"verified":true,"statuses_count":99216,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"709397","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/4941042\/1235837786.jpg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/4941042\/1235837786.jpg","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/874038884220403714\/9vhJnHkw_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/874038884220403714\/9vhJnHkw_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/806043\/1497222005","profile_link_color":"414141","profile_sidebar_border_color":"0066CC","profile_sidebar_fill_color":"A0C5C7","profile_text_color":"333366","profile_use_background_image":true,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"regular"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":26,"favorite_count":76,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"es"},{"created_at":"Thu Jun 22 15:20:27 +0000 2017","id":877909154253463555,"id_str":"877909154253463555","text":"Embajadores de la OEA celebran la salida de Delcy Eloina. Todos rechazaban su discurso violento y grosero.","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[]},"source":"\u003ca href=\"http:\/\/twitter.com\/download\/android\" rel=\"nofollow\"\u003eTwitter for Android\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":75883996,"id_str":"75883996","name":"Alberto Ravell","screen_name":"AlbertoRavell","location":"Venezuela","description":"Periodista venezolano.\nhttps:\/\/t.co\/kT3Te43bVr","url":"http:\/\/t.co\/kb8jHJJlSy","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/kb8jHJJlSy","expanded_url":"http:\/\/lapatilla.com","display_url":"lapatilla.com","indices":[0,22]}]},"description":{"urls":[{"url":"https:\/\/t.co\/kT3Te43bVr","expanded_url":"http:\/\/instagram.com\/albertofedericoravell","display_url":"instagram.com\/albertofederic\u2026","indices":[23,46]}]}},"protected":false,"followers_count":1851889,"friends_count":1795,"listed_count":11422,"created_at":"Sun Sep 20 21:51:46 +0000 2009","favourites_count":10,"utc_offset":-14400,"time_zone":"Caracas","geo_enabled":false,"verified":true,"statuses_count":191990,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":true,"profile_background_color":"C0DEED","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/572298787\/huz8bjeobneexw5fn9in.jpeg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/572298787\/huz8bjeobneexw5fn9in.jpeg","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/873615320358899713\/LmtoKmE0_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/873615320358899713\/LmtoKmE0_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/75883996\/1398287291","profile_link_color":"0084B4","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":109,"favorite_count":87,"favorited":false,"retweeted":false,"lang":"es"},{"created_at":"Thu Jun 22 15:19:50 +0000 2017","id":877908997109501954,"id_str":"877908997109501954","text":"\u00a1Uesebista! El d\u00eda de hoy estamos en PROTOCOLO VERDE. Los servicios funcionar\u00e1n con normalidad. #USBve #22Jun","truncated":false,"entities":{"hashtags":[{"text":"USBve","indices":[96,102]},{"text":"22Jun","indices":[103,109]}],"symbols":[],"user_mentions":[],"urls":[]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":51412475,"id_str":"51412475","name":"FCEUSB","screen_name":"FCEUSB","location":"Universidad Sim\u00f3n Bol\u00edvar","description":"Junta Directiva de la Federaci\u00f3n de Centros de Estudiantes de la Universidad Sim\u00f3n Bol\u00edvar (JD-FCEUSB) | Correo: fceusb@usb.ve","url":"https:\/\/t.co\/SofCwGU0iT","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/SofCwGU0iT","expanded_url":"http:\/\/fceusb.org\/","display_url":"fceusb.org","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":37093,"friends_count":323,"listed_count":637,"created_at":"Sat Jun 27 11:17:01 +0000 2009","favourites_count":212,"utc_offset":-14400,"time_zone":"Caracas","geo_enabled":true,"verified":false,"statuses_count":31351,"lang":"es","contributors_enabled":false,"is_translator":false,"is_translation_enabled":true,"profile_background_color":"429942","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/20151304\/marcha.jpg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/20151304\/marcha.jpg","profile_background_tile":true,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/823712665637888004\/NizVkJAd_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/823712665637888004\/NizVkJAd_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/51412475\/1395286905","profile_link_color":"0600B3","profile_sidebar_border_color":"31A65A","profile_sidebar_fill_color":"F2E943","profile_text_color":"0A0A0A","profile_use_background_image":false,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":3,"favorite_count":0,"favorited":false,"retweeted":false,"lang":"es"},{"created_at":"Thu Jun 22 15:18:11 +0000 2017","id":877908582443786240,"id_str":"877908582443786240","text":"RT @mayraestuvoaqui: \"\u00bfA d\u00f3nde ir\u00e1s en estas vacaciones?\" https:\/\/t.co\/zyeQszmrWR","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"mayraestuvoaqui","name":"\ufe0f\ufe0f","id":1948452967,"id_str":"1948452967","indices":[3,19]}],"urls":[],"media":[{"id":877602177337786368,"id_str":"877602177337786368","indices":[58,81],"media_url":"http:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg","url":"https:\/\/t.co\/zyeQszmrWR","display_url":"pic.twitter.com\/zyeQszmrWR","expanded_url":"https:\/\/twitter.com\/mayraestuvoaqui\/status\/877602185231704068\/photo\/1","type":"photo","sizes":{"medium":{"w":621,"h":529,"resize":"fit"},"small":{"w":621,"h":529,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":621,"h":529,"resize":"fit"}},"source_status_id":877602185231704068,"source_status_id_str":"877602185231704068","source_user_id":1948452967,"source_user_id_str":"1948452967"}]},"extended_entities":{"media":[{"id":877602177337786368,"id_str":"877602177337786368","indices":[58,81],"media_url":"http:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg","url":"https:\/\/t.co\/zyeQszmrWR","display_url":"pic.twitter.com\/zyeQszmrWR","expanded_url":"https:\/\/twitter.com\/mayraestuvoaqui\/status\/877602185231704068\/photo\/1","type":"photo","sizes":{"medium":{"w":621,"h":529,"resize":"fit"},"small":{"w":621,"h":529,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":621,"h":529,"resize":"fit"}},"source_status_id":877602185231704068,"source_status_id_str":"877602185231704068","source_user_id":1948452967,"source_user_id_str":"1948452967"}]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":806043,"id_str":"806043","name":"Luis Carlos D\u00edaz","screen_name":"LuisCarlos","location":"Caracas, Venezuela","description":"Hackeando el periodismo en Venezuela. Glocal | Tejedor de redes | Hablo de tecnolog\u00edas, pol\u00edtica e infociudadan\u00eda donde me llamen | #HangoutPol\u00edtico | BOBs2013","url":"https:\/\/t.co\/4g9jTtfnAu","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/4g9jTtfnAu","expanded_url":"http:\/\/instagram.com\/periodismodepaz","display_url":"instagram.com\/periodismodepaz","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":175289,"friends_count":13722,"listed_count":2786,"created_at":"Fri Mar 02 13:33:17 +0000 2007","favourites_count":85175,"utc_offset":-14400,"time_zone":"Caracas","geo_enabled":false,"verified":true,"statuses_count":99216,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"709397","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/4941042\/1235837786.jpg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/4941042\/1235837786.jpg","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/874038884220403714\/9vhJnHkw_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/874038884220403714\/9vhJnHkw_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/806043\/1497222005","profile_link_color":"414141","profile_sidebar_border_color":"0066CC","profile_sidebar_fill_color":"A0C5C7","profile_text_color":"333366","profile_use_background_image":true,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"regular"},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Wed Jun 21 19:00:40 +0000 2017","id":877602185231704068,"id_str":"877602185231704068","text":"\"\u00bfA d\u00f3nde ir\u00e1s en estas vacaciones?\" https:\/\/t.co\/zyeQszmrWR","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[],"media":[{"id":877602177337786368,"id_str":"877602177337786368","indices":[37,60],"media_url":"http:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg","url":"https:\/\/t.co\/zyeQszmrWR","display_url":"pic.twitter.com\/zyeQszmrWR","expanded_url":"https:\/\/twitter.com\/mayraestuvoaqui\/status\/877602185231704068\/photo\/1","type":"photo","sizes":{"medium":{"w":621,"h":529,"resize":"fit"},"small":{"w":621,"h":529,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":621,"h":529,"resize":"fit"}}}]},"extended_entities":{"media":[{"id":877602177337786368,"id_str":"877602177337786368","indices":[37,60],"media_url":"http:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg","url":"https:\/\/t.co\/zyeQszmrWR","display_url":"pic.twitter.com\/zyeQszmrWR","expanded_url":"https:\/\/twitter.com\/mayraestuvoaqui\/status\/877602185231704068\/photo\/1","type":"photo","sizes":{"medium":{"w":621,"h":529,"resize":"fit"},"small":{"w":621,"h":529,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":621,"h":529,"resize":"fit"}}}]},"source":"\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":1948452967,"id_str":"1948452967","name":"\ufe0f\ufe0f","screen_name":"mayraestuvoaqui","location":"M\u00e9xico","description":"My crush is lava, no lo toquen.","url":"https:\/\/t.co\/7GHEhwHtZY","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/7GHEhwHtZY","expanded_url":"http:\/\/fb.com\/ifollowmydreams","display_url":"fb.com\/ifollowmydreams","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":82833,"friends_count":16867,"listed_count":325,"created_at":"Wed Oct 09 02:44:32 +0000 2013","favourites_count":6432,"utc_offset":-25200,"time_zone":"Pacific Time (US & Canada)","geo_enabled":true,"verified":false,"statuses_count":1576,"lang":"es","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"000000","profile_background_image_url":"http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png","profile_background_image_url_https":"https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/875906717472755712\/v4Wm_YDm_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/875906717472755712\/v4Wm_YDm_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/1948452967\/1497376492","profile_link_color":"000000","profile_sidebar_border_color":"000000","profile_sidebar_fill_color":"000000","profile_text_color":"000000","profile_use_background_image":false,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"regular"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":20980,"favorite_count":17880,"favorited":true,"retweeted":true,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"es"},"is_quote_status":false,"retweet_count":20980,"favorite_count":0,"favorited":true,"retweeted":true,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"es"},{"created_at":"Thu Jun 22 15:17:46 +0000 2017","id":877908478483767297,"id_str":"877908478483767297","text":"Con un mes de pensi\u00f3n s\u00f3lo puede comprar 3 tubos de pasta de dientes al mes. https:\/\/t.co\/3yNI0Fsy3g","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[{"url":"https:\/\/t.co\/3yNI0Fsy3g","expanded_url":"https:\/\/twitter.com\/Agye24\/status\/877908025755009025","display_url":"twitter.com\/Agye24\/status\/\u2026","indices":[77,100]}]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":806043,"id_str":"806043","name":"Luis Carlos D\u00edaz","screen_name":"LuisCarlos","location":"Caracas, Venezuela","description":"Hackeando el periodismo en Venezuela. Glocal | Tejedor de redes | Hablo de tecnolog\u00edas, pol\u00edtica e infociudadan\u00eda donde me llamen | #HangoutPol\u00edtico | BOBs2013","url":"https:\/\/t.co\/4g9jTtfnAu","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/4g9jTtfnAu","expanded_url":"http:\/\/instagram.com\/periodismodepaz","display_url":"instagram.com\/periodismodepaz","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":175289,"friends_count":13722,"listed_count":2786,"created_at":"Fri Mar 02 13:33:17 +0000 2007","favourites_count":85175,"utc_offset":-14400,"time_zone":"Caracas","geo_enabled":false,"verified":true,"statuses_count":99216,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"709397","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/4941042\/1235837786.jpg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/4941042\/1235837786.jpg","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/874038884220403714\/9vhJnHkw_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/874038884220403714\/9vhJnHkw_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/806043\/1497222005","profile_link_color":"414141","profile_sidebar_border_color":"0066CC","profile_sidebar_fill_color":"A0C5C7","profile_text_color":"333366","profile_use_background_image":true,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"regular"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":true,"quoted_status_id":877908025755009025,"quoted_status_id_str":"877908025755009025","quoted_status":{"created_at":"Thu Jun 22 15:15:58 +0000 2017","id":877908025755009025,"id_str":"877908025755009025","text":"@Em_DeEmmentine @LuisCarlos Ayer mi pap\u00e1 compr\u00f3 una Colgate de Vietnam en Bs. 17.000 en un local de la Candelaria De Ccs","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"Em_DeEmmentine","name":"Em, dale a play","id":83952806,"id_str":"83952806","indices":[0,15]},{"screen_name":"LuisCarlos","name":"Luis Carlos D\u00edaz","id":806043,"id_str":"806043","indices":[16,27]}],"urls":[]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":877671798648786945,"in_reply_to_status_id_str":"877671798648786945","in_reply_to_user_id":83952806,"in_reply_to_user_id_str":"83952806","in_reply_to_screen_name":"Em_DeEmmentine","user":{"id":258415935,"id_str":"258415935","name":"Ermis Gil A.","screen_name":"Agye24","location":"","description":"Sin alarde, pero.... Feliz y agradecida!!!","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":230,"friends_count":366,"listed_count":1,"created_at":"Sun Feb 27 17:42:07 +0000 2011","favourites_count":219,"utc_offset":-14400,"time_zone":"Caracas","geo_enabled":true,"verified":false,"statuses_count":4979,"lang":"es","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"472269","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/350574351\/tatoo_hada.jpg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/350574351\/tatoo_hada.jpg","profile_background_tile":true,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/519502524408410113\/r4TZvUXS_normal.jpeg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/519502524408410113\/r4TZvUXS_normal.jpeg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/258415935\/1396267082","profile_link_color":"FF691F","profile_sidebar_border_color":"88E843","profile_sidebar_fill_color":"6D2C7A","profile_text_color":"470D47","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":1,"favorite_count":0,"favorited":false,"retweeted":false,"lang":"es"},"retweet_count":32,"favorite_count":4,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"es"},{"created_at":"Thu Jun 22 15:16:43 +0000 2017","id":877908215241089029,"id_str":"877908215241089029","text":"RT @lumos: Our CEO shares report w #Haiti Min Interior Dr Saint Albin. Find out how orphanage funding drives child trafficking https:\/\/t.co\u2026","truncated":false,"entities":{"hashtags":[{"text":"Haiti","indices":[35,41]}],"symbols":[],"user_mentions":[{"screen_name":"lumos","name":"Lumos","id":140011683,"id_str":"140011683","indices":[3,9]}],"urls":[]},"source":"\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":62513246,"id_str":"62513246","name":"J.K. Rowling","screen_name":"jk_rowling","location":"Scotland","description":"Author. Apologies, but I cannot guarantee answers to DMs.","url":"https:\/\/t.co\/7iaKMs3iC6","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/7iaKMs3iC6","expanded_url":"http:\/\/www.jkrowling.com","display_url":"jkrowling.com","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":10764292,"friends_count":499,"listed_count":35563,"created_at":"Mon Aug 03 13:23:45 +0000 2009","favourites_count":15536,"utc_offset":3600,"time_zone":"London","geo_enabled":false,"verified":true,"statuses_count":8111,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"1A1B1F","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/703701999540371458\/D7Ra4NMs.jpg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/703701999540371458\/D7Ra4NMs.jpg","profile_background_tile":true,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/870026547440353281\/FFWuo3oC_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/870026547440353281\/FFWuo3oC_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/62513246\/1496264912","profile_link_color":"009999","profile_sidebar_border_color":"000000","profile_sidebar_fill_color":"000000","profile_text_color":"000000","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"regular"},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Thu Jun 22 15:12:54 +0000 2017","id":877907252245667840,"id_str":"877907252245667840","text":"Our CEO shares report w #Haiti Min Interior Dr Saint Albin. Find out how orphanage funding drives child trafficking\u2026 https:\/\/t.co\/J7hIvEKYQx","truncated":true,"entities":{"hashtags":[{"text":"Haiti","indices":[24,30]}],"symbols":[],"user_mentions":[],"urls":[{"url":"https:\/\/t.co\/J7hIvEKYQx","expanded_url":"https:\/\/twitter.com\/i\/web\/status\/877907252245667840","display_url":"twitter.com\/i\/web\/status\/8\u2026","indices":[117,140]}]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":140011683,"id_str":"140011683","name":"Lumos","screen_name":"lumos","location":"London","description":"NGO founded by @jk_rowling & winner @Charity_Awards 2015. We work to end the harm of institutionalisation & help 8m children worldwide regain a family life.","url":"https:\/\/t.co\/aecH5BNx88","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/aecH5BNx88","expanded_url":"https:\/\/www.wearelumos.org","display_url":"wearelumos.org","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":140431,"friends_count":1227,"listed_count":445,"created_at":"Tue May 04 09:17:38 +0000 2010","favourites_count":3742,"utc_offset":3600,"time_zone":"London","geo_enabled":true,"verified":true,"statuses_count":9822,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"811B67","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/101445483\/Lumos_strap.png","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/101445483\/Lumos_strap.png","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/683975536218128384\/cSCZzXpF_normal.png","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/683975536218128384\/cSCZzXpF_normal.png","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/140011683\/1485191894","profile_link_color":"811B67","profile_sidebar_border_color":"F29122","profile_sidebar_fill_color":"F4B466","profile_text_color":"333333","profile_use_background_image":false,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":15,"favorite_count":187,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"},"is_quote_status":false,"retweet_count":15,"favorite_count":0,"favorited":false,"retweeted":false,"lang":"en"},{"created_at":"Thu Jun 22 15:14:41 +0000 2017","id":877907700209729536,"id_str":"877907700209729536","text":"RT @Doubt_: Algo as\u00ed pero en las oficinas p\u00fablicas de Venezuela por favor https:\/\/t.co\/H0ClsICS4h","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"Doubt_","name":"Luiscarlo Rivera A.","id":49800012,"id_str":"49800012","indices":[3,10]}],"urls":[{"url":"https:\/\/t.co\/H0ClsICS4h","expanded_url":"https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736","display_url":"twitter.com\/SimonHallNews\/\u2026","indices":[74,97]}]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":14596134,"id_str":"14596134","name":"Manuel G\u00f3mez","screen_name":"mgomezch","location":"Buenos Aires, Argentina","description":"Estepicursor lupolipaf\u00f3bico. Te audire no possum\u2014musa sapientum fixa est in aure. 42% scoundrel. fix (10\u00d7). Avoiding success at all costs. \ud83d\ude42\u270d\ud83c\udf93. FB094B00","url":"https:\/\/t.co\/onJ5cL7GVR","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/onJ5cL7GVR","expanded_url":"https:\/\/keybase.io\/mgomezch","display_url":"keybase.io\/mgomezch","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":861,"friends_count":1489,"listed_count":56,"created_at":"Wed Apr 30 04:36:36 +0000 2008","favourites_count":61178,"utc_offset":-14400,"time_zone":"Caracas","geo_enabled":true,"verified":false,"statuses_count":57454,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"000000","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/886079948\/c6fdf4c583eadf8d482579e3fdb75113.jpeg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/886079948\/c6fdf4c583eadf8d482579e3fdb75113.jpeg","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/3757076644\/ff229cafb26e7ad69fb70526cf7bef90_normal.png","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/3757076644\/ff229cafb26e7ad69fb70526cf7bef90_normal.png","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/14596134\/1370399763","profile_link_color":"7E13D6","profile_sidebar_border_color":"000000","profile_sidebar_fill_color":"95A4AB","profile_text_color":"3B464F","profile_use_background_image":true,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Thu Jun 22 14:55:53 +0000 2017","id":877902972650270720,"id_str":"877902972650270720","text":"Algo as\u00ed pero en las oficinas p\u00fablicas de Venezuela por favor https:\/\/t.co\/H0ClsICS4h","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[{"url":"https:\/\/t.co\/H0ClsICS4h","expanded_url":"https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736","display_url":"twitter.com\/SimonHallNews\/\u2026","indices":[62,85]}]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":49800012,"id_str":"49800012","name":"Luiscarlo Rivera A.","screen_name":"Doubt_","location":"Universidad Simon Bolivar","description":"The Metal is Pounding Inside My Soul. Estudiante Ing de la Computacion.","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":331,"friends_count":510,"listed_count":11,"created_at":"Mon Jun 22 23:01:26 +0000 2009","favourites_count":735,"utc_offset":-14400,"time_zone":"Caracas","geo_enabled":false,"verified":false,"statuses_count":7911,"lang":"es","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"1A1B1F","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/378800000103338806\/19950eaea4e0ac30942450d3e937b4b9.jpeg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/378800000103338806\/19950eaea4e0ac30942450d3e937b4b9.jpeg","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/3424370345\/2ee5210773ea1d5c0ebd63f2782be292_normal.jpeg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/3424370345\/2ee5210773ea1d5c0ebd63f2782be292_normal.jpeg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/49800012\/1364572903","profile_link_color":"2FC2EF","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"252429","profile_text_color":"666666","profile_use_background_image":true,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":true,"quoted_status_id":877794305766772736,"quoted_status_id_str":"877794305766772736","quoted_status":{"created_at":"Thu Jun 22 07:44:05 +0000 2017","id":877794305766772736,"id_str":"877794305766772736","text":"Boys at Isca Academy in Exeter wear skirts to school in protest at not being allowed to wear shorts in hot weather. https:\/\/t.co\/XHrffnSQEN","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[],"media":[{"id":877794284782710784,"id_str":"877794284782710784","indices":[116,139],"media_url":"http:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg","url":"https:\/\/t.co\/XHrffnSQEN","display_url":"pic.twitter.com\/XHrffnSQEN","expanded_url":"https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1","type":"photo","sizes":{"small":{"w":680,"h":510,"resize":"fit"},"large":{"w":2048,"h":1536,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"medium":{"w":1200,"h":900,"resize":"fit"}}}]},"extended_entities":{"media":[{"id":877794284782710784,"id_str":"877794284782710784","indices":[116,139],"media_url":"http:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg","url":"https:\/\/t.co\/XHrffnSQEN","display_url":"pic.twitter.com\/XHrffnSQEN","expanded_url":"https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1","type":"photo","sizes":{"small":{"w":680,"h":510,"resize":"fit"},"large":{"w":2048,"h":1536,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"medium":{"w":1200,"h":900,"resize":"fit"}}},{"id":877794284791099392,"id_str":"877794284791099392","indices":[116,139],"media_url":"http:\/\/pbs.twimg.com\/media\/DC6NQFLXcAALT5K.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC6NQFLXcAALT5K.jpg","url":"https:\/\/t.co\/XHrffnSQEN","display_url":"pic.twitter.com\/XHrffnSQEN","expanded_url":"https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1","type":"photo","sizes":{"medium":{"w":900,"h":1200,"resize":"fit"},"small":{"w":510,"h":680,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":1536,"h":2048,"resize":"fit"}}}]},"source":"\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":260655588,"id_str":"260655588","name":"Simon Hall","screen_name":"SimonHallNews","location":"Exeter, Devon, UK","description":"Author and BBC News Correspondent, lover of words, thoughts, feelings and dear Devon.","url":"http:\/\/t.co\/oF4t0gk09q","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/oF4t0gk09q","expanded_url":"http:\/\/www.thetvdetective.com\/","display_url":"thetvdetective.com","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":4118,"friends_count":404,"listed_count":181,"created_at":"Fri Mar 04 09:27:10 +0000 2011","favourites_count":0,"utc_offset":3600,"time_zone":"London","geo_enabled":true,"verified":true,"statuses_count":10066,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"344D52","profile_background_image_url":"http:\/\/abs.twimg.com\/images\/themes\/theme4\/bg.gif","profile_background_image_url_https":"https:\/\/abs.twimg.com\/images\/themes\/theme4\/bg.gif","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/852539640972275712\/_c4lAqTJ_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/852539640972275712\/_c4lAqTJ_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/260655588\/1374503977","profile_link_color":"0099B9","profile_sidebar_border_color":"5ED4DC","profile_sidebar_fill_color":"95E8EC","profile_text_color":"3C3940","profile_use_background_image":true,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":11436,"favorite_count":26439,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"},"retweet_count":1,"favorite_count":2,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"es"},"is_quote_status":true,"quoted_status_id":877794305766772736,"quoted_status_id_str":"877794305766772736","retweet_count":1,"favorite_count":0,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"es"},{"created_at":"Thu Jun 22 15:11:47 +0000 2017","id":877906972338671616,"id_str":"877906972338671616","text":"RT @MovesLikeZagger: Quite possibly the best pair of T-Shirts i have ever seen https:\/\/t.co\/40R3K6DmjA","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"MovesLikeZagger","name":"Brad","id":83871460,"id_str":"83871460","indices":[3,19]}],"urls":[],"media":[{"id":877816440744800256,"id_str":"877816440744800256","indices":[79,102],"media_url":"http:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg","url":"https:\/\/t.co\/40R3K6DmjA","display_url":"pic.twitter.com\/40R3K6DmjA","expanded_url":"https:\/\/twitter.com\/MovesLikeZagger\/status\/877816452803211264\/photo\/1","type":"photo","sizes":{"large":{"w":960,"h":960,"resize":"fit"},"small":{"w":680,"h":680,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"medium":{"w":960,"h":960,"resize":"fit"}},"source_status_id":877816452803211264,"source_status_id_str":"877816452803211264","source_user_id":83871460,"source_user_id_str":"83871460"}]},"extended_entities":{"media":[{"id":877816440744800256,"id_str":"877816440744800256","indices":[79,102],"media_url":"http:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg","url":"https:\/\/t.co\/40R3K6DmjA","display_url":"pic.twitter.com\/40R3K6DmjA","expanded_url":"https:\/\/twitter.com\/MovesLikeZagger\/status\/877816452803211264\/photo\/1","type":"photo","sizes":{"large":{"w":960,"h":960,"resize":"fit"},"small":{"w":680,"h":680,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"medium":{"w":960,"h":960,"resize":"fit"}},"source_status_id":877816452803211264,"source_status_id_str":"877816452803211264","source_user_id":83871460,"source_user_id_str":"83871460"}]},"source":"\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":14596134,"id_str":"14596134","name":"Manuel G\u00f3mez","screen_name":"mgomezch","location":"Buenos Aires, Argentina","description":"Estepicursor lupolipaf\u00f3bico. Te audire no possum\u2014musa sapientum fixa est in aure. 42% scoundrel. fix (10\u00d7). Avoiding success at all costs. \ud83d\ude42\u270d\ud83c\udf93. FB094B00","url":"https:\/\/t.co\/onJ5cL7GVR","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/onJ5cL7GVR","expanded_url":"https:\/\/keybase.io\/mgomezch","display_url":"keybase.io\/mgomezch","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":861,"friends_count":1489,"listed_count":56,"created_at":"Wed Apr 30 04:36:36 +0000 2008","favourites_count":61178,"utc_offset":-14400,"time_zone":"Caracas","geo_enabled":true,"verified":false,"statuses_count":57454,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"000000","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/886079948\/c6fdf4c583eadf8d482579e3fdb75113.jpeg","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/886079948\/c6fdf4c583eadf8d482579e3fdb75113.jpeg","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/3757076644\/ff229cafb26e7ad69fb70526cf7bef90_normal.png","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/3757076644\/ff229cafb26e7ad69fb70526cf7bef90_normal.png","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/14596134\/1370399763","profile_link_color":"7E13D6","profile_sidebar_border_color":"000000","profile_sidebar_fill_color":"95A4AB","profile_text_color":"3B464F","profile_use_background_image":true,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Thu Jun 22 09:12:06 +0000 2017","id":877816452803211264,"id_str":"877816452803211264","text":"Quite possibly the best pair of T-Shirts i have ever seen https:\/\/t.co\/40R3K6DmjA","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[],"media":[{"id":877816440744800256,"id_str":"877816440744800256","indices":[58,81],"media_url":"http:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg","url":"https:\/\/t.co\/40R3K6DmjA","display_url":"pic.twitter.com\/40R3K6DmjA","expanded_url":"https:\/\/twitter.com\/MovesLikeZagger\/status\/877816452803211264\/photo\/1","type":"photo","sizes":{"large":{"w":960,"h":960,"resize":"fit"},"small":{"w":680,"h":680,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"medium":{"w":960,"h":960,"resize":"fit"}}}]},"extended_entities":{"media":[{"id":877816440744800256,"id_str":"877816440744800256","indices":[58,81],"media_url":"http:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg","media_url_https":"https:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg","url":"https:\/\/t.co\/40R3K6DmjA","display_url":"pic.twitter.com\/40R3K6DmjA","expanded_url":"https:\/\/twitter.com\/MovesLikeZagger\/status\/877816452803211264\/photo\/1","type":"photo","sizes":{"large":{"w":960,"h":960,"resize":"fit"},"small":{"w":680,"h":680,"resize":"fit"},"thumb":{"w":150,"h":150,"resize":"crop"},"medium":{"w":960,"h":960,"resize":"fit"}}}]},"source":"\u003ca href=\"http:\/\/twitter.com\/download\/android\" rel=\"nofollow\"\u003eTwitter for Android\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":83871460,"id_str":"83871460","name":"Brad","screen_name":"MovesLikeZagger","location":"Dubai, United Arab Emirates","description":"I don't know why people are following me, it's not like i know where i'm going","url":"https:\/\/t.co\/TMt5sEM8EH","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/TMt5sEM8EH","expanded_url":"http:\/\/soundcloud.com\/movelikezagger","display_url":"soundcloud.com\/movelikezagger","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":958,"friends_count":363,"listed_count":26,"created_at":"Tue Oct 20 16:02:26 +0000 2009","favourites_count":1828,"utc_offset":3600,"time_zone":"London","geo_enabled":true,"verified":false,"statuses_count":69458,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"131516","profile_background_image_url":"http:\/\/abs.twimg.com\/images\/themes\/theme14\/bg.gif","profile_background_image_url_https":"https:\/\/abs.twimg.com\/images\/themes\/theme14\/bg.gif","profile_background_tile":true,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/877868462034616321\/W2pdAkJs_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/877868462034616321\/W2pdAkJs_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/83871460\/1461854650","profile_link_color":"009999","profile_sidebar_border_color":"EEEEEE","profile_sidebar_fill_color":"EFEFEF","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":3899,"favorite_count":9301,"favorited":true,"retweeted":true,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"},"is_quote_status":false,"retweet_count":3899,"favorite_count":0,"favorited":true,"retweeted":true,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"},{"created_at":"Thu Jun 22 15:07:29 +0000 2017","id":877905887859310592,"id_str":"877905887859310592","text":"Anyone know how can I buy an advertisement in the fdisk partition type list and how much? *sarc","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[]},"source":"\u003ca href=\"http:\/\/suso.suso.org\/xulu\/Command_Line_Magic\" rel=\"nofollow\"\u003eCLI Magic poster\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":91333167,"id_str":"91333167","name":"Command Line Magic","screen_name":"climagic","location":"BASHLAND","description":"Cool Unix\/Linux Command Line tricks you can use in 140 characters or less.","url":"http:\/\/t.co\/dUakp9EMPS","entities":{"url":{"urls":[{"url":"http:\/\/t.co\/dUakp9EMPS","expanded_url":"http:\/\/www.climagic.org\/","display_url":"climagic.org","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":137088,"friends_count":10754,"listed_count":3593,"created_at":"Fri Nov 20 12:49:35 +0000 2009","favourites_count":390,"utc_offset":3600,"time_zone":"London","geo_enabled":false,"verified":false,"statuses_count":10285,"lang":"en","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"C0DEED","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/60122174\/checkertermbackground.png","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/60122174\/checkertermbackground.png","profile_background_tile":true,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/535876218\/climagic-icon_normal.png","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/535876218\/climagic-icon_normal.png","profile_link_color":"0084B4","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":9,"favorite_count":25,"favorited":false,"retweeted":false,"lang":"en"},{"created_at":"Thu Jun 22 15:07:08 +0000 2017","id":877905802153132033,"id_str":"877905802153132033","text":"Reinventing my hairstyles! \ud83d\ude04 #braid #braidedbun #gettingbetter #loveit https:\/\/t.co\/1bBK4jUB50","truncated":false,"entities":{"hashtags":[{"text":"braid","indices":[29,35]},{"text":"braidedbun","indices":[36,47]},{"text":"gettingbetter","indices":[48,62]},{"text":"loveit","indices":[63,70]}],"symbols":[],"user_mentions":[],"urls":[{"url":"https:\/\/t.co\/1bBK4jUB50","expanded_url":"https:\/\/www.instagram.com\/p\/BVpXMs9gV5p\/","display_url":"instagram.com\/p\/BVpXMs9gV5p\/","indices":[71,94]}]},"source":"\u003ca href=\"http:\/\/instagram.com\" rel=\"nofollow\"\u003eInstagram\u003c\/a\u003e","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":90177542,"id_str":"90177542","name":"Solange Silva","screen_name":"Solange_SV","location":"","description":"100% Geeky Goober! Wicked fan of the fantastical & absurd :) I love my family more than anything in the world \u2665","url":"https:\/\/t.co\/x5lRFYk48I","entities":{"url":{"urls":[{"url":"https:\/\/t.co\/x5lRFYk48I","expanded_url":"http:\/\/instagram.com\/solange_sv","display_url":"instagram.com\/solange_sv","indices":[0,23]}]},"description":{"urls":[]}},"protected":false,"followers_count":103,"friends_count":69,"listed_count":5,"created_at":"Sun Nov 15 15:02:17 +0000 2009","favourites_count":90,"utc_offset":-14400,"time_zone":"La Paz","geo_enabled":true,"verified":false,"statuses_count":14276,"lang":"es","contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"FFFFFF","profile_background_image_url":"http:\/\/pbs.twimg.com\/profile_background_images\/776262954\/deb785c1ab1097ac08c69aa110153ff1.png","profile_background_image_url_https":"https:\/\/pbs.twimg.com\/profile_background_images\/776262954\/deb785c1ab1097ac08c69aa110153ff1.png","profile_background_tile":false,"profile_image_url":"http:\/\/pbs.twimg.com\/profile_images\/845131412877459456\/oLcPIG4C_normal.jpg","profile_image_url_https":"https:\/\/pbs.twimg.com\/profile_images\/845131412877459456\/oLcPIG4C_normal.jpg","profile_banner_url":"https:\/\/pbs.twimg.com\/profile_banners\/90177542\/1490330069","profile_link_color":"3DB7CC","profile_sidebar_border_color":"000000","profile_sidebar_fill_color":"090A0A","profile_text_color":"9BA7A8","profile_use_background_image":true,"has_extended_profile":true,"default_profile":false,"default_profile_image":false,"following":true,"follow_request_sent":false,"notifications":false,"translator_type":"none"},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":0,"favorited":false,"retweeted":false,"possibly_sensitive":false,"possibly_sensitive_appealable":false,"lang":"en"}]};
        this.posts = {
            "statuses": [{
                "created_at": "Thu Jun 22 15:39:07 +0000 2017",
                "id": 877913851911692289,
                "id_str": "877913851911692289",
                "text": "Plot twist: They're supposed to be titties.\nhttps:\/\/t.co\/k3iknMalAO https:\/\/t.co\/jy8KdE8PAn",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https:\/\/t.co\/k3iknMalAO",
                        "expanded_url": "https:\/\/9gag.com\/gag\/aXqDGB9?ref=tp",
                        "display_url": "9gag.com\/gag\/aXqDGB9?re\u2026",
                        "indices": [44, 67]
                    }],
                    "media": [{
                        "id": 877913848929550337,
                        "id_str": "877913848929550337",
                        "indices": [68, 91],
                        "media_url": "http:\/\/pbs.twimg.com\/media\/DC75_oTXgAE_72P.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC75_oTXgAE_72P.jpg",
                        "url": "https:\/\/t.co\/jy8KdE8PAn",
                        "display_url": "pic.twitter.com\/jy8KdE8PAn",
                        "expanded_url": "https:\/\/twitter.com\/9GAG\/status\/877913851911692289\/photo\/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 700,
                                "h": 600,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 583,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 700,
                                "h": 600,
                                "resize": "fit"
                            }
                        }
                    }]
                },
                "extended_entities": {
                    "media": [{
                        "id": 877913848929550337,
                        "id_str": "877913848929550337",
                        "indices": [68, 91],
                        "media_url": "http:\/\/pbs.twimg.com\/media\/DC75_oTXgAE_72P.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC75_oTXgAE_72P.jpg",
                        "url": "https:\/\/t.co\/jy8KdE8PAn",
                        "display_url": "pic.twitter.com\/jy8KdE8PAn",
                        "expanded_url": "https:\/\/twitter.com\/9GAG\/status\/877913851911692289\/photo\/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 700,
                                "h": 600,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 583,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 700,
                                "h": 600,
                                "resize": "fit"
                            }
                        }
                    }]
                },
                "source": "\u003ca href=\"http:\/\/bufferapp.com\" rel=\"nofollow\"\u003eBuffer\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 16548023,
                    "id_str": "16548023",
                    "name": "9GAG",
                    "screen_name": "9GAG",
                    "location": "Universe",
                    "description": "9GAG is the best content platform for millennials \u2022 Share your content with our 150M global audience \u2022 email creation@9gag.com \u2022 https:\/\/t.co\/aMQ9pLLhWB",
                    "url": "http:\/\/t.co\/B5GZFPUXYM",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/B5GZFPUXYM",
                                "expanded_url": "http:\/\/9gag.com",
                                "display_url": "9gag.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "https:\/\/t.co\/aMQ9pLLhWB",
                                "expanded_url": "http:\/\/9gag.com\/apps",
                                "display_url": "9gag.com\/apps",
                                "indices": [129, 152]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 9794011,
                    "friends_count": 10,
                    "listed_count": 10202,
                    "created_at": "Wed Oct 01 18:46:32 +0000 2008",
                    "favourites_count": 1164,
                    "utc_offset": 28800,
                    "time_zone": "Hong Kong",
                    "geo_enabled": false,
                    "verified": true,
                    "statuses_count": 37460,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/663470724\/wcc0dvt5nfi4k8j5twsb.jpeg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/663470724\/wcc0dvt5nfi4k8j5twsb.jpeg",
                    "profile_background_tile": true,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/852355177260621824\/UsIvWpWX_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/852355177260621824\/UsIvWpWX_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/16548023\/1496478934",
                    "profile_link_color": "0099FF",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "111111",
                    "profile_text_color": "666666",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "regular"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 6,
                "favorite_count": 16,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
            }, {
                "created_at": "Thu Jun 22 15:38:45 +0000 2017",
                "id": 877913758445608960,
                "id_str": "877913758445608960",
                "text": "Get ready for #SteamSummerSale https:\/\/t.co\/lRHnITG1oC",
                "truncated": false,
                "entities": {
                    "hashtags": [{
                        "text": "SteamSummerSale",
                        "indices": [14, 30]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [],
                    "media": [{
                        "id": 877913453654093825,
                        "id_str": "877913453654093825",
                        "indices": [31, 54],
                        "media_url": "http:\/\/pbs.twimg.com\/ext_tw_video_thumb\/877913453654093825\/pu\/img\/yF_NYSz2qFgzojAU.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/ext_tw_video_thumb\/877913453654093825\/pu\/img\/yF_NYSz2qFgzojAU.jpg",
                        "url": "https:\/\/t.co\/lRHnITG1oC",
                        "display_url": "pic.twitter.com\/lRHnITG1oC",
                        "expanded_url": "https:\/\/twitter.com\/9GAG\/status\/877913758445608960\/video\/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 340,
                                "h": 255,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 480,
                                "h": 360,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 480,
                                "h": 360,
                                "resize": "fit"
                            }
                        }
                    }]
                },
                "extended_entities": {
                    "media": [{
                        "id": 877913453654093825,
                        "id_str": "877913453654093825",
                        "indices": [31, 54],
                        "media_url": "http:\/\/pbs.twimg.com\/ext_tw_video_thumb\/877913453654093825\/pu\/img\/yF_NYSz2qFgzojAU.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/ext_tw_video_thumb\/877913453654093825\/pu\/img\/yF_NYSz2qFgzojAU.jpg",
                        "url": "https:\/\/t.co\/lRHnITG1oC",
                        "display_url": "pic.twitter.com\/lRHnITG1oC",
                        "expanded_url": "https:\/\/twitter.com\/9GAG\/status\/877913758445608960\/video\/1",
                        "type": "video",
                        "sizes": {
                            "small": {
                                "w": 340,
                                "h": 255,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 480,
                                "h": 360,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 480,
                                "h": 360,
                                "resize": "fit"
                            }
                        },
                        "video_info": {
                            "aspect_ratio": [4, 3],
                            "duration_millis": 11534,
                            "variants": [{
                                "content_type": "application\/x-mpegURL",
                                "url": "https:\/\/video.twimg.com\/ext_tw_video\/877913453654093825\/pu\/pl\/R_F8boMEvt6N-AYb.m3u8"
                            }, {
                                "bitrate": 832000,
                                "content_type": "video\/mp4",
                                "url": "https:\/\/video.twimg.com\/ext_tw_video\/877913453654093825\/pu\/vid\/480x360\/-U4MoK5lL3tACif-.mp4"
                            }, {
                                "bitrate": 320000,
                                "content_type": "video\/mp4",
                                "url": "https:\/\/video.twimg.com\/ext_tw_video\/877913453654093825\/pu\/vid\/240x180\/shKutwltE2EFmEDo.mp4"
                            }]
                        },
                        "additional_media_info": {
                            "monetizable": false
                        }
                    }]
                },
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 16548023,
                    "id_str": "16548023",
                    "name": "9GAG",
                    "screen_name": "9GAG",
                    "location": "Universe",
                    "description": "9GAG is the best content platform for millennials \u2022 Share your content with our 150M global audience \u2022 email creation@9gag.com \u2022 https:\/\/t.co\/aMQ9pLLhWB",
                    "url": "http:\/\/t.co\/B5GZFPUXYM",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/B5GZFPUXYM",
                                "expanded_url": "http:\/\/9gag.com",
                                "display_url": "9gag.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "https:\/\/t.co\/aMQ9pLLhWB",
                                "expanded_url": "http:\/\/9gag.com\/apps",
                                "display_url": "9gag.com\/apps",
                                "indices": [129, 152]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 9794011,
                    "friends_count": 10,
                    "listed_count": 10202,
                    "created_at": "Wed Oct 01 18:46:32 +0000 2008",
                    "favourites_count": 1164,
                    "utc_offset": 28800,
                    "time_zone": "Hong Kong",
                    "geo_enabled": false,
                    "verified": true,
                    "statuses_count": 37460,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/663470724\/wcc0dvt5nfi4k8j5twsb.jpeg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/663470724\/wcc0dvt5nfi4k8j5twsb.jpeg",
                    "profile_background_tile": true,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/852355177260621824\/UsIvWpWX_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/852355177260621824\/UsIvWpWX_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/16548023\/1496478934",
                    "profile_link_color": "0099FF",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "111111",
                    "profile_text_color": "666666",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "regular"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 62,
                "favorite_count": 65,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
            }, {
                "created_at": "Thu Jun 22 15:38:37 +0000 2017",
                "id": 877913726057238529,
                "id_str": "877913726057238529",
                "text": "Piden a la ONU un embargo de armas contra Venezuela https:\/\/t.co\/M4WD5kUvMI v\u00eda @DLasAmericas",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "DLasAmericas",
                        "name": "Diario Las Am\u00e9ricas",
                        "id": 1000699344,
                        "id_str": "1000699344",
                        "indices": [80, 93]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/M4WD5kUvMI",
                        "expanded_url": "http:\/\/www.diariolasamericas.com\/c4124847",
                        "display_url": "diariolasamericas.com\/c4124847",
                        "indices": [52, 75]
                    }]
                },
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 209676645,
                    "id_str": "209676645",
                    "name": "Alejandro Tarazona",
                    "screen_name": "ElCompuWookie",
                    "location": "Venezuela",
                    "description": "Ing. en Computaci\u00f3n. \nMi filosof\u00eda: Vive y deja vivir. \nNovum calles pervenire ad mea destinatio",
                    "url": "https:\/\/t.co\/PwfnfhKyKL",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/PwfnfhKyKL",
                                "expanded_url": "http:\/\/alejandrotarazona.blogspot.com",
                                "display_url": "alejandrotarazona.blogspot.com",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 239,
                    "friends_count": 400,
                    "listed_count": 13,
                    "created_at": "Fri Oct 29 17:36:46 +0000 2010",
                    "favourites_count": 566,
                    "utc_offset": -14400,
                    "time_zone": "Caracas",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 2892,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "CF942D",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/261128330\/5593475_werewolf.jpg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/261128330\/5593475_werewolf.jpg",
                    "profile_background_tile": true,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/705644729845751809\/SRJi_nSh_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/705644729845751809\/SRJi_nSh_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/209676645\/1359947069",
                    "profile_link_color": "E32A09",
                    "profile_sidebar_border_color": "525252",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "1DC228",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "es"
            }, {
                "created_at": "Thu Jun 22 15:37:54 +0000 2017",
                "id": 877913544959729664,
                "id_str": "877913544959729664",
                "text": "RT @isotopp: How to turn on the light at home, Philips Version https:\/\/t.co\/7aQ9z4ypUK",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "isotopp",
                        "name": "Kristian K\u00f6hntopp",
                        "id": 2202066412,
                        "id_str": "2202066412",
                        "indices": [3, 11]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 877444172982009856,
                        "id_str": "877444172982009856",
                        "indices": [63, 86],
                        "media_url": "http:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg",
                        "url": "https:\/\/t.co\/7aQ9z4ypUK",
                        "display_url": "pic.twitter.com\/7aQ9z4ypUK",
                        "expanded_url": "https:\/\/twitter.com\/isotopp\/status\/877444175708475393\/photo\/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 510,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1536,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 900,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 877444175708475393,
                        "source_status_id_str": "877444175708475393",
                        "source_user_id": 2202066412,
                        "source_user_id_str": "2202066412"
                    }]
                },
                "extended_entities": {
                    "media": [{
                        "id": 877444172982009856,
                        "id_str": "877444172982009856",
                        "indices": [63, 86],
                        "media_url": "http:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg",
                        "url": "https:\/\/t.co\/7aQ9z4ypUK",
                        "display_url": "pic.twitter.com\/7aQ9z4ypUK",
                        "expanded_url": "https:\/\/twitter.com\/isotopp\/status\/877444175708475393\/photo\/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 510,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1536,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 900,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 877444175708475393,
                        "source_status_id_str": "877444175708475393",
                        "source_user_id": 2202066412,
                        "source_user_id_str": "2202066412"
                    }]
                },
                "source": "\u003ca href=\"https:\/\/about.twitter.com\/products\/tweetdeck\" rel=\"nofollow\"\u003eTweetDeck\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2468699718,
                    "id_str": "2468699718",
                    "name": "Fiora Aeterna",
                    "screen_name": "FioraAeterna",
                    "location": "San Jose, CA",
                    "description": "ace alchemist cat, cosplayer, Atelier fangirl, GPU compiler dev, and terrible punster. Ask me: https:\/\/t.co\/Wu4AlRnJTx Cosplays: https:\/\/t.co\/pmRNEA9I2a",
                    "url": null,
                    "entities": {
                        "description": {
                            "urls": [{
                                "url": "https:\/\/t.co\/Wu4AlRnJTx",
                                "expanded_url": "http:\/\/ask.fm\/FioraAeterna",
                                "display_url": "ask.fm\/FioraAeterna",
                                "indices": [95, 118]
                            }, {
                                "url": "https:\/\/t.co\/pmRNEA9I2a",
                                "expanded_url": "https:\/\/goo.gl\/VF8Uxt",
                                "display_url": "goo.gl\/VF8Uxt",
                                "indices": [129, 152]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 14383,
                    "friends_count": 466,
                    "listed_count": 457,
                    "created_at": "Tue Apr 29 04:08:22 +0000 2014",
                    "favourites_count": 81394,
                    "utc_offset": -25200,
                    "time_zone": "Pacific Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 69215,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "7E46AF",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/471153837374316544\/qFiiVZqH.png",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/471153837374316544\/qFiiVZqH.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/876100777403494400\/WxinlBvu_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/876100777403494400\/WxinlBvu_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/2468699718\/1497713657",
                    "profile_link_color": "7E46AF",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "7AC3EE",
                    "profile_text_color": "3D1957",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "created_at": "Wed Jun 21 08:32:48 +0000 2017",
                    "id": 877444175708475393,
                    "id_str": "877444175708475393",
                    "text": "How to turn on the light at home, Philips Version https:\/\/t.co\/7aQ9z4ypUK",
                    "truncated": false,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 877444172982009856,
                            "id_str": "877444172982009856",
                            "indices": [50, 73],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg",
                            "url": "https:\/\/t.co\/7aQ9z4ypUK",
                            "display_url": "pic.twitter.com\/7aQ9z4ypUK",
                            "expanded_url": "https:\/\/twitter.com\/isotopp\/status\/877444175708475393\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "small": {
                                    "w": 680,
                                    "h": 510,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 2048,
                                    "h": 1536,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "w": 1200,
                                    "h": 900,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "extended_entities": {
                        "media": [{
                            "id": 877444172982009856,
                            "id_str": "877444172982009856",
                            "indices": [50, 73],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC1O05DUQAAzfFh.jpg",
                            "url": "https:\/\/t.co\/7aQ9z4ypUK",
                            "display_url": "pic.twitter.com\/7aQ9z4ypUK",
                            "expanded_url": "https:\/\/twitter.com\/isotopp\/status\/877444175708475393\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "small": {
                                    "w": 680,
                                    "h": 510,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 2048,
                                    "h": 1536,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "w": 1200,
                                    "h": 900,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "source": "\u003ca href=\"https:\/\/friendsplus.me\" rel=\"nofollow\"\u003eFriends Me\u003c\/a\u003e",
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 2202066412,
                        "id_str": "2202066412",
                        "name": "Kristian K\u00f6hntopp",
                        "screen_name": "isotopp",
                        "location": "Berlin, Germany ",
                        "description": "This account is the retweet target for my G+ account. If you follow me on G+ this will be boring for you.",
                        "url": "http:\/\/t.co\/ZI47fDmMc1",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http:\/\/t.co\/ZI47fDmMc1",
                                    "expanded_url": "http:\/\/google.com\/+kristiankohntopp",
                                    "display_url": "google.com\/+kristiankohnt\u2026",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 1393,
                        "friends_count": 383,
                        "listed_count": 61,
                        "created_at": "Sat Nov 30 18:01:34 +0000 2013",
                        "favourites_count": 2935,
                        "utc_offset": 7200,
                        "time_zone": "Ljubljana",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 14976,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                        "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/720658526972973057\/K4tI74gJ_normal.jpg",
                        "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/720658526972973057\/K4tI74gJ_normal.jpg",
                        "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/2202066412\/1385840267",
                        "profile_link_color": "1DA1F2",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": true,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false,
                        "translator_type": "none"
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 213,
                    "favorite_count": 254,
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "possibly_sensitive_appealable": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 213,
                "favorite_count": 0,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
            }, {
                "created_at": "Thu Jun 22 15:34:33 +0000 2017",
                "id": 877912701443375108,
                "id_str": "877912701443375108",
                "text": "RT @SimonHallNews: Boys at Isca Academy in Exeter wear skirts to school in protest at not being allowed to wear shorts in hot weather. http\u2026",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "SimonHallNews",
                        "name": "Simon Hall",
                        "id": 260655588,
                        "id_str": "260655588",
                        "indices": [3, 17]
                    }],
                    "urls": []
                },
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 104026801,
                    "id_str": "104026801",
                    "name": "David Prieto",
                    "screen_name": "Strongdave",
                    "location": "Detr\u00e1s de ti, tomando una foto",
                    "description": "Ingeniero de Computaci\u00f3n. Sapiosexual confundido. Perfeccionista mediocre. Mis\u00e1ntropo compulsivo. Ateo flexible. Asperger survivor.",
                    "url": "https:\/\/t.co\/Pwe3DwH6Cl",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/Pwe3DwH6Cl",
                                "expanded_url": "http:\/\/instagram.com\/davidusb",
                                "display_url": "instagram.com\/davidusb",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 275,
                    "friends_count": 251,
                    "listed_count": 14,
                    "created_at": "Tue Jan 12 01:18:44 +0000 2010",
                    "favourites_count": 5653,
                    "utc_offset": -14400,
                    "time_zone": "Georgetown",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 36155,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/460968966928609280\/RIB8G7AU_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/460968966928609280\/RIB8G7AU_normal.png",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/104026801\/1351688493",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "regular"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "created_at": "Thu Jun 22 07:44:05 +0000 2017",
                    "id": 877794305766772736,
                    "id_str": "877794305766772736",
                    "text": "Boys at Isca Academy in Exeter wear skirts to school in protest at not being allowed to wear shorts in hot weather. https:\/\/t.co\/XHrffnSQEN",
                    "truncated": false,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 877794284782710784,
                            "id_str": "877794284782710784",
                            "indices": [116, 139],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg",
                            "url": "https:\/\/t.co\/XHrffnSQEN",
                            "display_url": "pic.twitter.com\/XHrffnSQEN",
                            "expanded_url": "https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 680,
                                    "h": 510,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 2048,
                                    "h": 1536,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 1200,
                                    "h": 900,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "extended_entities": {
                        "media": [{
                            "id": 877794284782710784,
                            "id_str": "877794284782710784",
                            "indices": [116, 139],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg",
                            "url": "https:\/\/t.co\/XHrffnSQEN",
                            "display_url": "pic.twitter.com\/XHrffnSQEN",
                            "expanded_url": "https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 680,
                                    "h": 510,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 2048,
                                    "h": 1536,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 1200,
                                    "h": 900,
                                    "resize": "fit"
                                }
                            }
                        }, {
                            "id": 877794284791099392,
                            "id_str": "877794284791099392",
                            "indices": [116, 139],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC6NQFLXcAALT5K.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6NQFLXcAALT5K.jpg",
                            "url": "https:\/\/t.co\/XHrffnSQEN",
                            "display_url": "pic.twitter.com\/XHrffnSQEN",
                            "expanded_url": "https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "medium": {
                                    "w": 900,
                                    "h": 1200,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 510,
                                    "h": 680,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 1536,
                                    "h": 2048,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "source": "\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e",
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 260655588,
                        "id_str": "260655588",
                        "name": "Simon Hall",
                        "screen_name": "SimonHallNews",
                        "location": "Exeter, Devon, UK",
                        "description": "Author and BBC News Correspondent, lover of words, thoughts, feelings and dear Devon.",
                        "url": "http:\/\/t.co\/oF4t0gk09q",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http:\/\/t.co\/oF4t0gk09q",
                                    "expanded_url": "http:\/\/www.thetvdetective.com\/",
                                    "display_url": "thetvdetective.com",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 4118,
                        "friends_count": 404,
                        "listed_count": 181,
                        "created_at": "Fri Mar 04 09:27:10 +0000 2011",
                        "favourites_count": 0,
                        "utc_offset": 3600,
                        "time_zone": "London",
                        "geo_enabled": true,
                        "verified": true,
                        "statuses_count": 10066,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "344D52",
                        "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme4\/bg.gif",
                        "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme4\/bg.gif",
                        "profile_background_tile": false,
                        "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/852539640972275712\/_c4lAqTJ_normal.jpg",
                        "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/852539640972275712\/_c4lAqTJ_normal.jpg",
                        "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/260655588\/1374503977",
                        "profile_link_color": "0099B9",
                        "profile_sidebar_border_color": "5ED4DC",
                        "profile_sidebar_fill_color": "95E8EC",
                        "profile_text_color": "3C3940",
                        "profile_use_background_image": true,
                        "has_extended_profile": true,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false,
                        "translator_type": "none"
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 11436,
                    "favorite_count": 26439,
                    "favorited": true,
                    "retweeted": true,
                    "possibly_sensitive": false,
                    "possibly_sensitive_appealable": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 11436,
                "favorite_count": 0,
                "favorited": true,
                "retweeted": true,
                "lang": "en"
            }, {
                "created_at": "Thu Jun 22 15:34:33 +0000 2017",
                "id": 877912701443375108,
                "id_str": "877912701443375108",
                "text": "RT @SimonHallNews: Boys at Isca Academy in Exeter wear skirts to school in protest at not being allowed to wear shorts in hot weather. http\u2026",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "SimonHallNews",
                        "name": "Simon Hall",
                        "id": 260655588,
                        "id_str": "260655588",
                        "indices": [3, 17]
                    }],
                    "urls": []
                },
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 104026801,
                    "id_str": "104026801",
                    "name": "David Prieto",
                    "screen_name": "Strongdave",
                    "location": "Detr\u00e1s de ti, tomando una foto",
                    "description": "Ingeniero de Computaci\u00f3n. Sapiosexual confundido. Perfeccionista mediocre. Mis\u00e1ntropo compulsivo. Ateo flexible. Asperger survivor.",
                    "url": "https:\/\/t.co\/Pwe3DwH6Cl",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/Pwe3DwH6Cl",
                                "expanded_url": "http:\/\/instagram.com\/davidusb",
                                "display_url": "instagram.com\/davidusb",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 275,
                    "friends_count": 251,
                    "listed_count": 14,
                    "created_at": "Tue Jan 12 01:18:44 +0000 2010",
                    "favourites_count": 5653,
                    "utc_offset": -14400,
                    "time_zone": "Georgetown",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 36155,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/460968966928609280\/RIB8G7AU_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/460968966928609280\/RIB8G7AU_normal.png",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/104026801\/1351688493",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": false,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "regular"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "created_at": "Thu Jun 22 07:44:05 +0000 2017",
                    "id": 877794305766772736,
                    "id_str": "877794305766772736",
                    "text": "Boys at Isca Academy in Exeter wear skirts to school in protest at not being allowed to wear shorts in hot weather. https:\/\/t.co\/XHrffnSQEN",
                    "truncated": false,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 877794284782710784,
                            "id_str": "877794284782710784",
                            "indices": [116, 139],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg",
                            "url": "https:\/\/t.co\/XHrffnSQEN",
                            "display_url": "pic.twitter.com\/XHrffnSQEN",
                            "expanded_url": "https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 680,
                                    "h": 510,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 2048,
                                    "h": 1536,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 1200,
                                    "h": 900,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "extended_entities": {
                        "media": [{
                            "id": 877794284782710784,
                            "id_str": "877794284782710784",
                            "indices": [116, 139],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg",
                            "url": "https:\/\/t.co\/XHrffnSQEN",
                            "display_url": "pic.twitter.com\/XHrffnSQEN",
                            "expanded_url": "https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 680,
                                    "h": 510,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 2048,
                                    "h": 1536,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 1200,
                                    "h": 900,
                                    "resize": "fit"
                                }
                            }
                        }, {
                            "id": 877794284791099392,
                            "id_str": "877794284791099392",
                            "indices": [116, 139],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC6NQFLXcAALT5K.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6NQFLXcAALT5K.jpg",
                            "url": "https:\/\/t.co\/XHrffnSQEN",
                            "display_url": "pic.twitter.com\/XHrffnSQEN",
                            "expanded_url": "https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "medium": {
                                    "w": 900,
                                    "h": 1200,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 510,
                                    "h": 680,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 1536,
                                    "h": 2048,
                                    "resize": "fit"
                                }
                            }
                        }, {
                            "id": 877794284782710784,
                            "id_str": "877794284782710784",
                            "indices": [116, 139],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg",
                            "url": "https:\/\/t.co\/XHrffnSQEN",
                            "display_url": "pic.twitter.com\/XHrffnSQEN",
                            "expanded_url": "https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 680,
                                    "h": 510,
                                    "resize": "fit"
                                },
                                "large": {
                                    "w": 2048,
                                    "h": 1536,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 1200,
                                    "h": 900,
                                    "resize": "fit"
                                }
                            }
                        }, {
                            "id": 877794284791099392,
                            "id_str": "877794284791099392",
                            "indices": [116, 139],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC6NQFLXcAALT5K.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6NQFLXcAALT5K.jpg",
                            "url": "https:\/\/t.co\/XHrffnSQEN",
                            "display_url": "pic.twitter.com\/XHrffnSQEN",
                            "expanded_url": "https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "medium": {
                                    "w": 900,
                                    "h": 1200,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 510,
                                    "h": 680,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 1536,
                                    "h": 2048,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "source": "\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e",
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 260655588,
                        "id_str": "260655588",
                        "name": "Simon Hall",
                        "screen_name": "SimonHallNews",
                        "location": "Exeter, Devon, UK",
                        "description": "Author and BBC News Correspondent, lover of words, thoughts, feelings and dear Devon.",
                        "url": "http:\/\/t.co\/oF4t0gk09q",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http:\/\/t.co\/oF4t0gk09q",
                                    "expanded_url": "http:\/\/www.thetvdetective.com\/",
                                    "display_url": "thetvdetective.com",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 4118,
                        "friends_count": 404,
                        "listed_count": 181,
                        "created_at": "Fri Mar 04 09:27:10 +0000 2011",
                        "favourites_count": 0,
                        "utc_offset": 3600,
                        "time_zone": "London",
                        "geo_enabled": true,
                        "verified": true,
                        "statuses_count": 10066,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "344D52",
                        "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme4\/bg.gif",
                        "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme4\/bg.gif",
                        "profile_background_tile": false,
                        "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/852539640972275712\/_c4lAqTJ_normal.jpg",
                        "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/852539640972275712\/_c4lAqTJ_normal.jpg",
                        "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/260655588\/1374503977",
                        "profile_link_color": "0099B9",
                        "profile_sidebar_border_color": "5ED4DC",
                        "profile_sidebar_fill_color": "95E8EC",
                        "profile_text_color": "3C3940",
                        "profile_use_background_image": true,
                        "has_extended_profile": true,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false,
                        "translator_type": "none"
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 11436,
                    "favorite_count": 26439,
                    "favorited": true,
                    "retweeted": true,
                    "possibly_sensitive": false,
                    "possibly_sensitive_appealable": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 11436,
                "favorite_count": 0,
                "favorited": true,
                "retweeted": true,
                "lang": "en"
            }, {
                "created_at": "Thu Jun 22 15:33:02 +0000 2017",
                "id": 877912319304417282,
                "id_str": "877912319304417282",
                "text": "A Five Year Old Boy Asks to Get the Same Short Haircut as His Best Friend To Fool Their Teacher\u2026 https:\/\/t.co\/kgvLrjYHQn",
                "truncated": true,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https:\/\/t.co\/kgvLrjYHQn",
                        "expanded_url": "https:\/\/twitter.com\/i\/web\/status\/877912319304417282",
                        "display_url": "twitter.com\/i\/web\/status\/8\u2026",
                        "indices": [97, 120]
                    }]
                },
                "source": "\u003ca href=\"http:\/\/bufferapp.com\" rel=\"nofollow\"\u003eBuffer\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 2172,
                    "id_str": "2172",
                    "name": "Laughing Squid",
                    "screen_name": "LaughingSquid",
                    "location": "New York City",
                    "description": "\ud83d\ude02\ud83e\udd91 An art, culture & technology blog\nand hosting company @LS_Hosting\nfounded in 1995 by @ScottBeale.",
                    "url": "http:\/\/t.co\/3Rw9oSSmY4",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/3Rw9oSSmY4",
                                "expanded_url": "http:\/\/laughingsquid.com",
                                "display_url": "laughingsquid.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 584328,
                    "friends_count": 10,
                    "listed_count": 12059,
                    "created_at": "Tue Jul 18 02:46:45 +0000 2006",
                    "favourites_count": 83,
                    "utc_offset": -14400,
                    "time_zone": "Eastern Time (US & Canada)",
                    "geo_enabled": true,
                    "verified": true,
                    "statuses_count": 71375,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "131516",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme14\/bg.gif",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme14\/bg.gif",
                    "profile_background_tile": true,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/418456260971732992\/By5KkDKn_normal.jpeg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/418456260971732992\/By5KkDKn_normal.jpeg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/2172\/1483679110",
                    "profile_link_color": "008B45",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "EFEFEF",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 2,
                "favorite_count": 17,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
            }, {
                "created_at": "Thu Jun 22 15:30:40 +0000 2017",
                "id": 877911724812361730,
                "id_str": "877911724812361730",
                "text": "RT @chess24com: Stop whatever else you're doing as Nakamura-Carlsen is about to start! https:\/\/t.co\/oF8leM7Cjz #c24live #GrandChessTour htt\u2026",
                "truncated": false,
                "entities": {
                    "hashtags": [{
                        "text": "c24live",
                        "indices": [111, 119]
                    }, {
                        "text": "GrandChessTour",
                        "indices": [120, 135]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "chess24com",
                        "name": "chess24.com",
                        "id": 1617972740,
                        "id_str": "1617972740",
                        "indices": [3, 14]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/oF8leM7Cjz",
                        "expanded_url": "https:\/\/chess24.com\/en\/watch\/live-tournaments\/paris-grand-chess-tour-2017\/6\/1\/3",
                        "display_url": "chess24.com\/en\/watch\/live-\u2026",
                        "indices": [87, 110]
                    }]
                },
                "source": "\u003ca href=\"https:\/\/about.twitter.com\/products\/tweetdeck\" rel=\"nofollow\"\u003eTweetDeck\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 449588356,
                    "id_str": "449588356",
                    "name": "Garry Kasparov",
                    "screen_name": "Kasparov63",
                    "location": "New York",
                    "description": "Chairman of the Human Rights Foundation (@HRF). Visiting Fellow at Oxford Martin. Author, speaker, 13th World Chess Champion https:\/\/t.co\/dJTDTCn37c",
                    "url": "http:\/\/t.co\/VNcDSzgHvk",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/VNcDSzgHvk",
                                "expanded_url": "http:\/\/kasparov.com",
                                "display_url": "kasparov.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "https:\/\/t.co\/dJTDTCn37c",
                                "expanded_url": "https:\/\/www.facebook.com\/GKKasparov",
                                "display_url": "facebook.com\/GKKasparov",
                                "indices": [125, 148]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 348952,
                    "friends_count": 392,
                    "listed_count": 5462,
                    "created_at": "Thu Dec 29 08:17:34 +0000 2011",
                    "favourites_count": 32,
                    "utc_offset": -10800,
                    "time_zone": "Atlantic Time (Canada)",
                    "geo_enabled": false,
                    "verified": true,
                    "statuses_count": 16805,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/390910020\/twitter-background-dark.jpg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/390910020\/twitter-background-dark.jpg",
                    "profile_background_tile": true,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/839580537589284865\/0x9sTWYT_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/839580537589284865\/0x9sTWYT_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/449588356\/1493833489",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "created_at": "Thu Jun 22 15:00:27 +0000 2017",
                    "id": 877904120274878464,
                    "id_str": "877904120274878464",
                    "text": "Stop whatever else you're doing as Nakamura-Carlsen is about to start! https:\/\/t.co\/oF8leM7Cjz #c24live\u2026 https:\/\/t.co\/0ygJMVBIBg",
                    "truncated": true,
                    "entities": {
                        "hashtags": [{
                            "text": "c24live",
                            "indices": [95, 103]
                        }],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [{
                            "url": "https:\/\/t.co\/oF8leM7Cjz",
                            "expanded_url": "https:\/\/chess24.com\/en\/watch\/live-tournaments\/paris-grand-chess-tour-2017\/6\/1\/3",
                            "display_url": "chess24.com\/en\/watch\/live-\u2026",
                            "indices": [71, 94]
                        }, {
                            "url": "https:\/\/t.co\/0ygJMVBIBg",
                            "expanded_url": "https:\/\/twitter.com\/i\/web\/status\/877904120274878464",
                            "display_url": "twitter.com\/i\/web\/status\/8\u2026",
                            "indices": [105, 128]
                        }]
                    },
                    "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 1617972740,
                        "id_str": "1617972740",
                        "name": "chess24.com",
                        "screen_name": "chess24com",
                        "location": "",
                        "description": "The world's most advanced chess platform",
                        "url": "http:\/\/t.co\/afYTxIhvak",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "http:\/\/t.co\/afYTxIhvak",
                                    "expanded_url": "http:\/\/chess24.com",
                                    "display_url": "chess24.com",
                                    "indices": [0, 22]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 22317,
                        "friends_count": 549,
                        "listed_count": 447,
                        "created_at": "Wed Jul 24 15:06:46 +0000 2013",
                        "favourites_count": 79,
                        "utc_offset": 7200,
                        "time_zone": "Berlin",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 30954,
                        "lang": "en-gb",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "266AB1",
                        "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/378800000173121833\/MSkU184q.jpeg",
                        "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/378800000173121833\/MSkU184q.jpeg",
                        "profile_background_tile": false,
                        "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/854336397376880640\/WpbAOWVr_normal.jpg",
                        "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/854336397376880640\/WpbAOWVr_normal.jpg",
                        "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/1617972740\/1400506781",
                        "profile_link_color": "0084B4",
                        "profile_sidebar_border_color": "FFFFFF",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false,
                        "translator_type": "none"
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 11,
                    "favorite_count": 21,
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "possibly_sensitive_appealable": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 11,
                "favorite_count": 0,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
            }, {
                "created_at": "Thu Jun 22 15:30:18 +0000 2017",
                "id": 877911632055341056,
                "id_str": "877911632055341056",
                "text": "#Entrevistas de la semana \u27a1 Estado desmantelado con @LilianaOrtegaM y el Dr Carlos Ayala Corao  https:\/\/t.co\/1TtCYXb6za",
                "truncated": false,
                "entities": {
                    "hashtags": [{
                        "text": "Entrevistas",
                        "indices": [0, 12]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "LilianaOrtegaM",
                        "name": "Liliana OrtegaM",
                        "id": 56790332,
                        "id_str": "56790332",
                        "indices": [52, 67]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/1TtCYXb6za",
                        "expanded_url": "http:\/\/ow.ly\/1arJ30cNUR1",
                        "display_url": "ow.ly\/1arJ30cNUR1",
                        "indices": [96, 119]
                    }]
                },
                "source": "\u003ca href=\"http:\/\/www.hootsuite.com\" rel=\"nofollow\"\u003eHootsuite\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 76947892,
                    "id_str": "76947892",
                    "name": "C\u00e9sar Miguel Rond\u00f3n",
                    "screen_name": "cmrondon",
                    "location": "Venezuela ",
                    "description": "Periodista http:\/\/t.co\/XtoCh3dmfv. Autor: El Libro de la Salsa,Pais de Estreno, Ellos que se conocen tanto. Armando el rompecabezas de un pa\u00eds.",
                    "url": "https:\/\/t.co\/yJ54AyOMNW",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/yJ54AyOMNW",
                                "expanded_url": "http:\/\/cesarmiguelrondon.com",
                                "display_url": "cesarmiguelrondon.com",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "http:\/\/t.co\/XtoCh3dmfv",
                                "expanded_url": "http:\/\/Exitosfm.com",
                                "display_url": "Exitosfm.com",
                                "indices": [11, 33]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 2411902,
                    "friends_count": 1303,
                    "listed_count": 7944,
                    "created_at": "Thu Sep 24 14:11:15 +0000 2009",
                    "favourites_count": 734,
                    "utc_offset": -14400,
                    "time_zone": "Caracas",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 87189,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "1A1B1F",
                    "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme9\/bg.gif",
                    "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme9\/bg.gif",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/718170918011465733\/i-lfcsUj_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/718170918011465733\/i-lfcsUj_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/76947892\/1460060220",
                    "profile_link_color": "2F84EB",
                    "profile_sidebar_border_color": "FFFFFF",
                    "profile_sidebar_fill_color": "252429",
                    "profile_text_color": "666666",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 3,
                "favorite_count": 0,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "es"
            }, {
                "created_at": "Thu Jun 22 15:29:23 +0000 2017",
                "id": 877911399103569921,
                "id_str": "877911399103569921",
                "text": "RT @GrandChessTour: Can you find the tactic that Wesley So missed? #GrandChessTour https:\/\/t.co\/cyLj4eLWu1",
                "truncated": false,
                "entities": {
                    "hashtags": [{
                        "text": "GrandChessTour",
                        "indices": [67, 82]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "GrandChessTour",
                        "name": "Grand Chess Tour",
                        "id": 3161912605,
                        "id_str": "3161912605",
                        "indices": [3, 18]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 877873458230644736,
                        "id_str": "877873458230644736",
                        "indices": [83, 106],
                        "media_url": "http:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg",
                        "url": "https:\/\/t.co\/cyLj4eLWu1",
                        "display_url": "pic.twitter.com\/cyLj4eLWu1",
                        "expanded_url": "https:\/\/twitter.com\/GrandChessTour\/status\/877873465017028609\/photo\/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 749,
                                "h": 791,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 749,
                                "h": 791,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 644,
                                "h": 680,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 877873465017028609,
                        "source_status_id_str": "877873465017028609",
                        "source_user_id": 3161912605,
                        "source_user_id_str": "3161912605"
                    }]
                },
                "extended_entities": {
                    "media": [{
                        "id": 877873458230644736,
                        "id_str": "877873458230644736",
                        "indices": [83, 106],
                        "media_url": "http:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg",
                        "url": "https:\/\/t.co\/cyLj4eLWu1",
                        "display_url": "pic.twitter.com\/cyLj4eLWu1",
                        "expanded_url": "https:\/\/twitter.com\/GrandChessTour\/status\/877873465017028609\/photo\/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 749,
                                "h": 791,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 749,
                                "h": 791,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 644,
                                "h": 680,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 877873465017028609,
                        "source_status_id_str": "877873465017028609",
                        "source_user_id": 3161912605,
                        "source_user_id_str": "3161912605"
                    }]
                },
                "source": "\u003ca href=\"https:\/\/about.twitter.com\/products\/tweetdeck\" rel=\"nofollow\"\u003eTweetDeck\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 449588356,
                    "id_str": "449588356",
                    "name": "Garry Kasparov",
                    "screen_name": "Kasparov63",
                    "location": "New York",
                    "description": "Chairman of the Human Rights Foundation (@HRF). Visiting Fellow at Oxford Martin. Author, speaker, 13th World Chess Champion https:\/\/t.co\/dJTDTCn37c",
                    "url": "http:\/\/t.co\/VNcDSzgHvk",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/VNcDSzgHvk",
                                "expanded_url": "http:\/\/kasparov.com",
                                "display_url": "kasparov.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "https:\/\/t.co\/dJTDTCn37c",
                                "expanded_url": "https:\/\/www.facebook.com\/GKKasparov",
                                "display_url": "facebook.com\/GKKasparov",
                                "indices": [125, 148]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 348952,
                    "friends_count": 392,
                    "listed_count": 5462,
                    "created_at": "Thu Dec 29 08:17:34 +0000 2011",
                    "favourites_count": 32,
                    "utc_offset": -10800,
                    "time_zone": "Atlantic Time (Canada)",
                    "geo_enabled": false,
                    "verified": true,
                    "statuses_count": 16805,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/390910020\/twitter-background-dark.jpg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/390910020\/twitter-background-dark.jpg",
                    "profile_background_tile": true,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/839580537589284865\/0x9sTWYT_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/839580537589284865\/0x9sTWYT_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/449588356\/1493833489",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "created_at": "Thu Jun 22 12:58:38 +0000 2017",
                    "id": 877873465017028609,
                    "id_str": "877873465017028609",
                    "text": "Can you find the tactic that Wesley So missed? #GrandChessTour https:\/\/t.co\/cyLj4eLWu1",
                    "truncated": false,
                    "entities": {
                        "hashtags": [{
                            "text": "GrandChessTour",
                            "indices": [47, 62]
                        }],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 877873458230644736,
                            "id_str": "877873458230644736",
                            "indices": [63, 86],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg",
                            "url": "https:\/\/t.co\/cyLj4eLWu1",
                            "display_url": "pic.twitter.com\/cyLj4eLWu1",
                            "expanded_url": "https:\/\/twitter.com\/GrandChessTour\/status\/877873465017028609\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 749,
                                    "h": 791,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "w": 749,
                                    "h": 791,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 644,
                                    "h": 680,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "extended_entities": {
                        "media": [{
                            "id": 877873458230644736,
                            "id_str": "877873458230644736",
                            "indices": [63, 86],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC7VQlOU0AAwt7E.jpg",
                            "url": "https:\/\/t.co\/cyLj4eLWu1",
                            "display_url": "pic.twitter.com\/cyLj4eLWu1",
                            "expanded_url": "https:\/\/twitter.com\/GrandChessTour\/status\/877873465017028609\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 749,
                                    "h": 791,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "w": 749,
                                    "h": 791,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 644,
                                    "h": 680,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "source": "\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e",
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 3161912605,
                        "id_str": "3161912605",
                        "name": "Grand Chess Tour",
                        "screen_name": "GrandChessTour",
                        "location": "",
                        "description": "Watch the 2017 Paris #GrandChessTour and enjoy live commentary in French, English, and Spanish beginning June 21.",
                        "url": "https:\/\/t.co\/AXC79ULki1",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "https:\/\/t.co\/AXC79ULki1",
                                    "expanded_url": "http:\/\/grandchesstour.org",
                                    "display_url": "grandchesstour.org",
                                    "indices": [0, 23]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 4968,
                        "friends_count": 149,
                        "listed_count": 113,
                        "created_at": "Sat Apr 18 03:59:12 +0000 2015",
                        "favourites_count": 907,
                        "utc_offset": -18000,
                        "time_zone": "Central Time (US & Canada)",
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 3497,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "000000",
                        "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                        "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/877283967078158339\/O-tToXBR_normal.jpg",
                        "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/877283967078158339\/O-tToXBR_normal.jpg",
                        "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/3161912605\/1497901170",
                        "profile_link_color": "7D212B",
                        "profile_sidebar_border_color": "000000",
                        "profile_sidebar_fill_color": "000000",
                        "profile_text_color": "000000",
                        "profile_use_background_image": false,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false,
                        "translator_type": "none"
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 4,
                    "favorite_count": 12,
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "possibly_sensitive_appealable": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 4,
                "favorite_count": 0,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
            }, {
                "created_at": "Thu Jun 22 15:21:51 +0000 2017",
                "id": 877909506537041920,
                "id_str": "877909506537041920",
                "text": "RT @JulianAssange: LIVE: Julian #Assange y Baltasar Garz\u00f3n en @ciespal https:\/\/t.co\/nFzMAdqkhw https:\/\/t.co\/TyZS1st7il",
                "truncated": false,
                "entities": {
                    "hashtags": [{
                        "text": "Assange",
                        "indices": [32, 40]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "JulianAssange",
                        "name": "Julian Assange",
                        "id": 388983706,
                        "id_str": "388983706",
                        "indices": [3, 17]
                    }, {
                        "screen_name": "ciespal",
                        "name": "CIESPAL",
                        "id": 46700541,
                        "id_str": "46700541",
                        "indices": [62, 70]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/nFzMAdqkhw",
                        "expanded_url": "http:\/\/ciespaltv.org\/",
                        "display_url": "ciespaltv.org",
                        "indices": [71, 94]
                    }],
                    "media": [{
                        "id": 877908110186303488,
                        "id_str": "877908110186303488",
                        "indices": [95, 118],
                        "media_url": "http:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg",
                        "url": "https:\/\/t.co\/TyZS1st7il",
                        "display_url": "pic.twitter.com\/TyZS1st7il",
                        "expanded_url": "https:\/\/twitter.com\/JulianAssange\/status\/877908134647431168\/photo\/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 680,
                                "h": 156,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 824,
                                "h": 189,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 824,
                                "h": 189,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 877908134647431168,
                        "source_status_id_str": "877908134647431168",
                        "source_user_id": 388983706,
                        "source_user_id_str": "388983706"
                    }]
                },
                "extended_entities": {
                    "media": [{
                        "id": 877908110186303488,
                        "id_str": "877908110186303488",
                        "indices": [95, 118],
                        "media_url": "http:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg",
                        "url": "https:\/\/t.co\/TyZS1st7il",
                        "display_url": "pic.twitter.com\/TyZS1st7il",
                        "expanded_url": "https:\/\/twitter.com\/JulianAssange\/status\/877908134647431168\/photo\/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 680,
                                "h": 156,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 824,
                                "h": 189,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 824,
                                "h": 189,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 877908134647431168,
                        "source_status_id_str": "877908134647431168",
                        "source_user_id": 388983706,
                        "source_user_id_str": "388983706"
                    }]
                },
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 16589206,
                    "id_str": "16589206",
                    "name": "WikiLeaks",
                    "screen_name": "wikileaks",
                    "location": "Everywhere",
                    "description": "We open governments. Contact: https:\/\/t.co\/676V6mG02v  PGP: A04C 5E09 ED02 B328 03EB 6116 93ED 732E \n\n@WLArtForce @WLTaskForce @WikiLeaksShop",
                    "url": "https:\/\/t.co\/maw0wih6t6",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/maw0wih6t6",
                                "expanded_url": "https:\/\/wikileaks.org",
                                "display_url": "wikileaks.org",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "https:\/\/t.co\/676V6mG02v",
                                "expanded_url": "https:\/\/wikileaks.org\/#submit",
                                "display_url": "wikileaks.org\/#submit",
                                "indices": [30, 53]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 4767894,
                    "friends_count": 7564,
                    "listed_count": 56570,
                    "created_at": "Sat Oct 04 06:41:05 +0000 2008",
                    "favourites_count": 38,
                    "utc_offset": 3600,
                    "time_zone": "Dublin",
                    "geo_enabled": false,
                    "verified": true,
                    "statuses_count": 47184,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": true,
                    "profile_background_color": "9AE4E8",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/3147857\/WL_Hour_Glass.jpg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/3147857\/WL_Hour_Glass.jpg",
                    "profile_background_tile": true,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/512138307870785536\/Fe00yVS2_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/512138307870785536\/Fe00yVS2_normal.png",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/16589206\/1402313050",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "BDDCAD",
                    "profile_sidebar_fill_color": "DDFFCC",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "created_at": "Thu Jun 22 15:16:24 +0000 2017",
                    "id": 877908134647431168,
                    "id_str": "877908134647431168",
                    "text": "LIVE: Julian #Assange y Baltasar Garz\u00f3n en @ciespal https:\/\/t.co\/nFzMAdqkhw https:\/\/t.co\/TyZS1st7il",
                    "truncated": false,
                    "entities": {
                        "hashtags": [{
                            "text": "Assange",
                            "indices": [13, 21]
                        }],
                        "symbols": [],
                        "user_mentions": [{
                            "screen_name": "ciespal",
                            "name": "CIESPAL",
                            "id": 46700541,
                            "id_str": "46700541",
                            "indices": [43, 51]
                        }],
                        "urls": [{
                            "url": "https:\/\/t.co\/nFzMAdqkhw",
                            "expanded_url": "http:\/\/ciespaltv.org\/",
                            "display_url": "ciespaltv.org",
                            "indices": [52, 75]
                        }],
                        "media": [{
                            "id": 877908110186303488,
                            "id_str": "877908110186303488",
                            "indices": [76, 99],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg",
                            "url": "https:\/\/t.co\/TyZS1st7il",
                            "display_url": "pic.twitter.com\/TyZS1st7il",
                            "expanded_url": "https:\/\/twitter.com\/JulianAssange\/status\/877908134647431168\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 680,
                                    "h": 156,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 824,
                                    "h": 189,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "w": 824,
                                    "h": 189,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "extended_entities": {
                        "media": [{
                            "id": 877908110186303488,
                            "id_str": "877908110186303488",
                            "indices": [76, 99],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC70xl0W0AAJwaF.jpg",
                            "url": "https:\/\/t.co\/TyZS1st7il",
                            "display_url": "pic.twitter.com\/TyZS1st7il",
                            "expanded_url": "https:\/\/twitter.com\/JulianAssange\/status\/877908134647431168\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "small": {
                                    "w": 680,
                                    "h": 156,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 824,
                                    "h": 189,
                                    "resize": "fit"
                                },
                                "medium": {
                                    "w": 824,
                                    "h": 189,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 388983706,
                        "id_str": "388983706",
                        "name": "Julian Assange",
                        "screen_name": "JulianAssange",
                        "location": "Ecuadorian embassy, London",
                        "description": "Publisher @WikiLeaks; Detained without charge for the last seven years in violation of two UN rulings. No wars without lies no peace without truth.",
                        "url": "https:\/\/t.co\/QY4OF0f41J",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "https:\/\/t.co\/QY4OF0f41J",
                                    "expanded_url": "https:\/\/justice4assange.com\/",
                                    "display_url": "justice4assange.com",
                                    "indices": [0, 23]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 232933,
                        "friends_count": 1,
                        "listed_count": 1425,
                        "created_at": "Tue Oct 11 17:17:44 +0000 2011",
                        "favourites_count": 9,
                        "utc_offset": -25200,
                        "time_zone": "Pacific Time (US & Canada)",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 726,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "C0DEED",
                        "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                        "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/841283762914656256\/2AyBiX8E_normal.jpg",
                        "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/841283762914656256\/2AyBiX8E_normal.jpg",
                        "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/388983706\/1489412882",
                        "profile_link_color": "1DA1F2",
                        "profile_sidebar_border_color": "C0DEED",
                        "profile_sidebar_fill_color": "DDEEF6",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": true,
                        "default_profile": true,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false,
                        "translator_type": "none"
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 75,
                    "favorite_count": 91,
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "possibly_sensitive_appealable": false,
                    "lang": "es"
                },
                "is_quote_status": false,
                "retweet_count": 75,
                "favorite_count": 0,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "es"
            }, {
                "created_at": "Thu Jun 22 15:21:50 +0000 2017",
                "id": 877909501197692928,
                "id_str": "877909501197692928",
                "text": "Cuando me preguntan si soy de Charallave\nhttps:\/\/t.co\/sCZMuuZwdP",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [],
                    "media": [{
                        "id": 877743401386496000,
                        "id_str": "877743401386496000",
                        "indices": [41, 64],
                        "media_url": "http:\/\/pbs.twimg.com\/tweet_video_thumb\/DC5e-RuV0AAugjL.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/tweet_video_thumb\/DC5e-RuV0AAugjL.jpg",
                        "url": "https:\/\/t.co\/sCZMuuZwdP",
                        "display_url": "pic.twitter.com\/sCZMuuZwdP",
                        "expanded_url": "https:\/\/twitter.com\/mighttalksports\/status\/877743424945897472\/photo\/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 480,
                                "h": 268,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 480,
                                "h": 268,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 340,
                                "h": 190,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 877743424945897472,
                        "source_status_id_str": "877743424945897472",
                        "source_user_id": 4144782326,
                        "source_user_id_str": "4144782326"
                    }]
                },
                "extended_entities": {
                    "media": [{
                        "id": 877743401386496000,
                        "id_str": "877743401386496000",
                        "indices": [41, 64],
                        "media_url": "http:\/\/pbs.twimg.com\/tweet_video_thumb\/DC5e-RuV0AAugjL.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/tweet_video_thumb\/DC5e-RuV0AAugjL.jpg",
                        "url": "https:\/\/t.co\/sCZMuuZwdP",
                        "display_url": "pic.twitter.com\/sCZMuuZwdP",
                        "expanded_url": "https:\/\/twitter.com\/mighttalksports\/status\/877743424945897472\/photo\/1",
                        "type": "animated_gif",
                        "sizes": {
                            "medium": {
                                "w": 480,
                                "h": 268,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 480,
                                "h": 268,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 340,
                                "h": 190,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 877743424945897472,
                        "source_status_id_str": "877743424945897472",
                        "source_user_id": 4144782326,
                        "source_user_id_str": "4144782326",
                        "video_info": {
                            "aspect_ratio": [120, 67],
                            "variants": [{
                                "bitrate": 0,
                                "content_type": "video\/mp4",
                                "url": "https:\/\/video.twimg.com\/tweet_video\/DC5e-RuV0AAugjL.mp4"
                            }]
                        }
                    }]
                },
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 806043,
                    "id_str": "806043",
                    "name": "Luis Carlos D\u00edaz",
                    "screen_name": "LuisCarlos",
                    "location": "Caracas, Venezuela",
                    "description": "Hackeando el periodismo en Venezuela. Glocal | Tejedor de redes | Hablo de tecnolog\u00edas, pol\u00edtica e infociudadan\u00eda donde me llamen | #HangoutPol\u00edtico | BOBs2013",
                    "url": "https:\/\/t.co\/4g9jTtfnAu",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/4g9jTtfnAu",
                                "expanded_url": "http:\/\/instagram.com\/periodismodepaz",
                                "display_url": "instagram.com\/periodismodepaz",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 175289,
                    "friends_count": 13722,
                    "listed_count": 2786,
                    "created_at": "Fri Mar 02 13:33:17 +0000 2007",
                    "favourites_count": 85175,
                    "utc_offset": -14400,
                    "time_zone": "Caracas",
                    "geo_enabled": false,
                    "verified": true,
                    "statuses_count": 99216,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "709397",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/4941042\/1235837786.jpg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/4941042\/1235837786.jpg",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/874038884220403714\/9vhJnHkw_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/874038884220403714\/9vhJnHkw_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/806043\/1497222005",
                    "profile_link_color": "414141",
                    "profile_sidebar_border_color": "0066CC",
                    "profile_sidebar_fill_color": "A0C5C7",
                    "profile_text_color": "333366",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "regular"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 26,
                "favorite_count": 76,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "es"
            }, {
                "created_at": "Thu Jun 22 15:20:27 +0000 2017",
                "id": 877909154253463555,
                "id_str": "877909154253463555",
                "text": "Embajadores de la OEA celebran la salida de Delcy Eloina. Todos rechazaban su discurso violento y grosero.",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "source": "\u003ca href=\"http:\/\/twitter.com\/download\/android\" rel=\"nofollow\"\u003eTwitter for Android\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 75883996,
                    "id_str": "75883996",
                    "name": "Alberto Ravell",
                    "screen_name": "AlbertoRavell",
                    "location": "Venezuela",
                    "description": "Periodista venezolano.\nhttps:\/\/t.co\/kT3Te43bVr",
                    "url": "http:\/\/t.co\/kb8jHJJlSy",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/kb8jHJJlSy",
                                "expanded_url": "http:\/\/lapatilla.com",
                                "display_url": "lapatilla.com",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": [{
                                "url": "https:\/\/t.co\/kT3Te43bVr",
                                "expanded_url": "http:\/\/instagram.com\/albertofedericoravell",
                                "display_url": "instagram.com\/albertofederic\u2026",
                                "indices": [23, 46]
                            }]
                        }
                    },
                    "protected": false,
                    "followers_count": 1851889,
                    "friends_count": 1795,
                    "listed_count": 11422,
                    "created_at": "Sun Sep 20 21:51:46 +0000 2009",
                    "favourites_count": 10,
                    "utc_offset": -14400,
                    "time_zone": "Caracas",
                    "geo_enabled": false,
                    "verified": true,
                    "statuses_count": 191990,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": true,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/572298787\/huz8bjeobneexw5fn9in.jpeg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/572298787\/huz8bjeobneexw5fn9in.jpeg",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/873615320358899713\/LmtoKmE0_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/873615320358899713\/LmtoKmE0_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/75883996\/1398287291",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 109,
                "favorite_count": 87,
                "favorited": false,
                "retweeted": false,
                "lang": "es"
            }, {
                "created_at": "Thu Jun 22 15:19:50 +0000 2017",
                "id": 877908997109501954,
                "id_str": "877908997109501954",
                "text": "\u00a1Uesebista! El d\u00eda de hoy estamos en PROTOCOLO VERDE. Los servicios funcionar\u00e1n con normalidad. #USBve #22Jun",
                "truncated": false,
                "entities": {
                    "hashtags": [{
                        "text": "USBve",
                        "indices": [96, 102]
                    }, {
                        "text": "22Jun",
                        "indices": [103, 109]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 51412475,
                    "id_str": "51412475",
                    "name": "FCEUSB",
                    "screen_name": "FCEUSB",
                    "location": "Universidad Sim\u00f3n Bol\u00edvar",
                    "description": "Junta Directiva de la Federaci\u00f3n de Centros de Estudiantes de la Universidad Sim\u00f3n Bol\u00edvar (JD-FCEUSB) | Correo: fceusb@usb.ve",
                    "url": "https:\/\/t.co\/SofCwGU0iT",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/SofCwGU0iT",
                                "expanded_url": "http:\/\/fceusb.org\/",
                                "display_url": "fceusb.org",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 37093,
                    "friends_count": 323,
                    "listed_count": 637,
                    "created_at": "Sat Jun 27 11:17:01 +0000 2009",
                    "favourites_count": 212,
                    "utc_offset": -14400,
                    "time_zone": "Caracas",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 31351,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": true,
                    "profile_background_color": "429942",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/20151304\/marcha.jpg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/20151304\/marcha.jpg",
                    "profile_background_tile": true,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/823712665637888004\/NizVkJAd_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/823712665637888004\/NizVkJAd_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/51412475\/1395286905",
                    "profile_link_color": "0600B3",
                    "profile_sidebar_border_color": "31A65A",
                    "profile_sidebar_fill_color": "F2E943",
                    "profile_text_color": "0A0A0A",
                    "profile_use_background_image": false,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 3,
                "favorite_count": 0,
                "favorited": false,
                "retweeted": false,
                "lang": "es"
            }, {
                "created_at": "Thu Jun 22 15:18:11 +0000 2017",
                "id": 877908582443786240,
                "id_str": "877908582443786240",
                "text": "RT @mayraestuvoaqui: \"\u00bfA d\u00f3nde ir\u00e1s en estas vacaciones?\" https:\/\/t.co\/zyeQszmrWR",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "mayraestuvoaqui",
                        "name": "\ufe0f\ufe0f",
                        "id": 1948452967,
                        "id_str": "1948452967",
                        "indices": [3, 19]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 877602177337786368,
                        "id_str": "877602177337786368",
                        "indices": [58, 81],
                        "media_url": "http:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg",
                        "url": "https:\/\/t.co\/zyeQszmrWR",
                        "display_url": "pic.twitter.com\/zyeQszmrWR",
                        "expanded_url": "https:\/\/twitter.com\/mayraestuvoaqui\/status\/877602185231704068\/photo\/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 621,
                                "h": 529,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 621,
                                "h": 529,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 621,
                                "h": 529,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 877602185231704068,
                        "source_status_id_str": "877602185231704068",
                        "source_user_id": 1948452967,
                        "source_user_id_str": "1948452967"
                    }]
                },
                "extended_entities": {
                    "media": [{
                        "id": 877602177337786368,
                        "id_str": "877602177337786368",
                        "indices": [58, 81],
                        "media_url": "http:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg",
                        "url": "https:\/\/t.co\/zyeQszmrWR",
                        "display_url": "pic.twitter.com\/zyeQszmrWR",
                        "expanded_url": "https:\/\/twitter.com\/mayraestuvoaqui\/status\/877602185231704068\/photo\/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 621,
                                "h": 529,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 621,
                                "h": 529,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 621,
                                "h": 529,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 877602185231704068,
                        "source_status_id_str": "877602185231704068",
                        "source_user_id": 1948452967,
                        "source_user_id_str": "1948452967"
                    }]
                },
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 806043,
                    "id_str": "806043",
                    "name": "Luis Carlos D\u00edaz",
                    "screen_name": "LuisCarlos",
                    "location": "Caracas, Venezuela",
                    "description": "Hackeando el periodismo en Venezuela. Glocal | Tejedor de redes | Hablo de tecnolog\u00edas, pol\u00edtica e infociudadan\u00eda donde me llamen | #HangoutPol\u00edtico | BOBs2013",
                    "url": "https:\/\/t.co\/4g9jTtfnAu",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/4g9jTtfnAu",
                                "expanded_url": "http:\/\/instagram.com\/periodismodepaz",
                                "display_url": "instagram.com\/periodismodepaz",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 175289,
                    "friends_count": 13722,
                    "listed_count": 2786,
                    "created_at": "Fri Mar 02 13:33:17 +0000 2007",
                    "favourites_count": 85175,
                    "utc_offset": -14400,
                    "time_zone": "Caracas",
                    "geo_enabled": false,
                    "verified": true,
                    "statuses_count": 99216,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "709397",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/4941042\/1235837786.jpg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/4941042\/1235837786.jpg",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/874038884220403714\/9vhJnHkw_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/874038884220403714\/9vhJnHkw_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/806043\/1497222005",
                    "profile_link_color": "414141",
                    "profile_sidebar_border_color": "0066CC",
                    "profile_sidebar_fill_color": "A0C5C7",
                    "profile_text_color": "333366",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "regular"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "created_at": "Wed Jun 21 19:00:40 +0000 2017",
                    "id": 877602185231704068,
                    "id_str": "877602185231704068",
                    "text": "\"\u00bfA d\u00f3nde ir\u00e1s en estas vacaciones?\" https:\/\/t.co\/zyeQszmrWR",
                    "truncated": false,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 877602177337786368,
                            "id_str": "877602177337786368",
                            "indices": [37, 60],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg",
                            "url": "https:\/\/t.co\/zyeQszmrWR",
                            "display_url": "pic.twitter.com\/zyeQszmrWR",
                            "expanded_url": "https:\/\/twitter.com\/mayraestuvoaqui\/status\/877602185231704068\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "medium": {
                                    "w": 621,
                                    "h": 529,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 621,
                                    "h": 529,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 621,
                                    "h": 529,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "extended_entities": {
                        "media": [{
                            "id": 877602177337786368,
                            "id_str": "877602177337786368",
                            "indices": [37, 60],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC3eh9JUAAALj1m.jpg",
                            "url": "https:\/\/t.co\/zyeQszmrWR",
                            "display_url": "pic.twitter.com\/zyeQszmrWR",
                            "expanded_url": "https:\/\/twitter.com\/mayraestuvoaqui\/status\/877602185231704068\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "medium": {
                                    "w": 621,
                                    "h": 529,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 621,
                                    "h": 529,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "large": {
                                    "w": 621,
                                    "h": 529,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "source": "\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e",
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 1948452967,
                        "id_str": "1948452967",
                        "name": "\ufe0f\ufe0f",
                        "screen_name": "mayraestuvoaqui",
                        "location": "M\u00e9xico",
                        "description": "My crush is lava, no lo toquen.",
                        "url": "https:\/\/t.co\/7GHEhwHtZY",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "https:\/\/t.co\/7GHEhwHtZY",
                                    "expanded_url": "http:\/\/fb.com\/ifollowmydreams",
                                    "display_url": "fb.com\/ifollowmydreams",
                                    "indices": [0, 23]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 82833,
                        "friends_count": 16867,
                        "listed_count": 325,
                        "created_at": "Wed Oct 09 02:44:32 +0000 2013",
                        "favourites_count": 6432,
                        "utc_offset": -25200,
                        "time_zone": "Pacific Time (US & Canada)",
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 1576,
                        "lang": "es",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "000000",
                        "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                        "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme1\/bg.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/875906717472755712\/v4Wm_YDm_normal.jpg",
                        "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/875906717472755712\/v4Wm_YDm_normal.jpg",
                        "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/1948452967\/1497376492",
                        "profile_link_color": "000000",
                        "profile_sidebar_border_color": "000000",
                        "profile_sidebar_fill_color": "000000",
                        "profile_text_color": "000000",
                        "profile_use_background_image": false,
                        "has_extended_profile": true,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false,
                        "translator_type": "regular"
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 20980,
                    "favorite_count": 17880,
                    "favorited": true,
                    "retweeted": true,
                    "possibly_sensitive": false,
                    "possibly_sensitive_appealable": false,
                    "lang": "es"
                },
                "is_quote_status": false,
                "retweet_count": 20980,
                "favorite_count": 0,
                "favorited": true,
                "retweeted": true,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "es"
            }, {
                "created_at": "Thu Jun 22 15:17:46 +0000 2017",
                "id": 877908478483767297,
                "id_str": "877908478483767297",
                "text": "Con un mes de pensi\u00f3n s\u00f3lo puede comprar 3 tubos de pasta de dientes al mes. https:\/\/t.co\/3yNI0Fsy3g",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https:\/\/t.co\/3yNI0Fsy3g",
                        "expanded_url": "https:\/\/twitter.com\/Agye24\/status\/877908025755009025",
                        "display_url": "twitter.com\/Agye24\/status\/\u2026",
                        "indices": [77, 100]
                    }]
                },
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 806043,
                    "id_str": "806043",
                    "name": "Luis Carlos D\u00edaz",
                    "screen_name": "LuisCarlos",
                    "location": "Caracas, Venezuela",
                    "description": "Hackeando el periodismo en Venezuela. Glocal | Tejedor de redes | Hablo de tecnolog\u00edas, pol\u00edtica e infociudadan\u00eda donde me llamen | #HangoutPol\u00edtico | BOBs2013",
                    "url": "https:\/\/t.co\/4g9jTtfnAu",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/4g9jTtfnAu",
                                "expanded_url": "http:\/\/instagram.com\/periodismodepaz",
                                "display_url": "instagram.com\/periodismodepaz",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 175289,
                    "friends_count": 13722,
                    "listed_count": 2786,
                    "created_at": "Fri Mar 02 13:33:17 +0000 2007",
                    "favourites_count": 85175,
                    "utc_offset": -14400,
                    "time_zone": "Caracas",
                    "geo_enabled": false,
                    "verified": true,
                    "statuses_count": 99216,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "709397",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/4941042\/1235837786.jpg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/4941042\/1235837786.jpg",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/874038884220403714\/9vhJnHkw_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/874038884220403714\/9vhJnHkw_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/806043\/1497222005",
                    "profile_link_color": "414141",
                    "profile_sidebar_border_color": "0066CC",
                    "profile_sidebar_fill_color": "A0C5C7",
                    "profile_text_color": "333366",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "regular"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": true,
                "quoted_status_id": 877908025755009025,
                "quoted_status_id_str": "877908025755009025",
                "quoted_status": {
                    "created_at": "Thu Jun 22 15:15:58 +0000 2017",
                    "id": 877908025755009025,
                    "id_str": "877908025755009025",
                    "text": "@Em_DeEmmentine @LuisCarlos Ayer mi pap\u00e1 compr\u00f3 una Colgate de Vietnam en Bs. 17.000 en un local de la Candelaria De Ccs",
                    "truncated": false,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [{
                            "screen_name": "Em_DeEmmentine",
                            "name": "Em, dale a play",
                            "id": 83952806,
                            "id_str": "83952806",
                            "indices": [0, 15]
                        }, {
                            "screen_name": "LuisCarlos",
                            "name": "Luis Carlos D\u00edaz",
                            "id": 806043,
                            "id_str": "806043",
                            "indices": [16, 27]
                        }],
                        "urls": []
                    },
                    "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                    "in_reply_to_status_id": 877671798648786945,
                    "in_reply_to_status_id_str": "877671798648786945",
                    "in_reply_to_user_id": 83952806,
                    "in_reply_to_user_id_str": "83952806",
                    "in_reply_to_screen_name": "Em_DeEmmentine",
                    "user": {
                        "id": 258415935,
                        "id_str": "258415935",
                        "name": "Ermis Gil A.",
                        "screen_name": "Agye24",
                        "location": "",
                        "description": "Sin alarde, pero.... Feliz y agradecida!!!",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 230,
                        "friends_count": 366,
                        "listed_count": 1,
                        "created_at": "Sun Feb 27 17:42:07 +0000 2011",
                        "favourites_count": 219,
                        "utc_offset": -14400,
                        "time_zone": "Caracas",
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 4979,
                        "lang": "es",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "472269",
                        "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/350574351\/tatoo_hada.jpg",
                        "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/350574351\/tatoo_hada.jpg",
                        "profile_background_tile": true,
                        "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/519502524408410113\/r4TZvUXS_normal.jpeg",
                        "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/519502524408410113\/r4TZvUXS_normal.jpeg",
                        "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/258415935\/1396267082",
                        "profile_link_color": "FF691F",
                        "profile_sidebar_border_color": "88E843",
                        "profile_sidebar_fill_color": "6D2C7A",
                        "profile_text_color": "470D47",
                        "profile_use_background_image": true,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false,
                        "translator_type": "none"
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 1,
                    "favorite_count": 0,
                    "favorited": false,
                    "retweeted": false,
                    "lang": "es"
                },
                "retweet_count": 32,
                "favorite_count": 4,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "es"
            }, {
                "created_at": "Thu Jun 22 15:16:43 +0000 2017",
                "id": 877908215241089029,
                "id_str": "877908215241089029",
                "text": "RT @lumos: Our CEO shares report w #Haiti Min Interior Dr Saint Albin. Find out how orphanage funding drives child trafficking https:\/\/t.co\u2026",
                "truncated": false,
                "entities": {
                    "hashtags": [{
                        "text": "Haiti",
                        "indices": [35, 41]
                    }],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "lumos",
                        "name": "Lumos",
                        "id": 140011683,
                        "id_str": "140011683",
                        "indices": [3, 9]
                    }],
                    "urls": []
                },
                "source": "\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 62513246,
                    "id_str": "62513246",
                    "name": "J.K. Rowling",
                    "screen_name": "jk_rowling",
                    "location": "Scotland",
                    "description": "Author. Apologies, but I cannot guarantee answers to DMs.",
                    "url": "https:\/\/t.co\/7iaKMs3iC6",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/7iaKMs3iC6",
                                "expanded_url": "http:\/\/www.jkrowling.com",
                                "display_url": "jkrowling.com",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 10764292,
                    "friends_count": 499,
                    "listed_count": 35563,
                    "created_at": "Mon Aug 03 13:23:45 +0000 2009",
                    "favourites_count": 15536,
                    "utc_offset": 3600,
                    "time_zone": "London",
                    "geo_enabled": false,
                    "verified": true,
                    "statuses_count": 8111,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "1A1B1F",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/703701999540371458\/D7Ra4NMs.jpg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/703701999540371458\/D7Ra4NMs.jpg",
                    "profile_background_tile": true,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/870026547440353281\/FFWuo3oC_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/870026547440353281\/FFWuo3oC_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/62513246\/1496264912",
                    "profile_link_color": "009999",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "000000",
                    "profile_text_color": "000000",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "regular"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "created_at": "Thu Jun 22 15:12:54 +0000 2017",
                    "id": 877907252245667840,
                    "id_str": "877907252245667840",
                    "text": "Our CEO shares report w #Haiti Min Interior Dr Saint Albin. Find out how orphanage funding drives child trafficking\u2026 https:\/\/t.co\/J7hIvEKYQx",
                    "truncated": true,
                    "entities": {
                        "hashtags": [{
                            "text": "Haiti",
                            "indices": [24, 30]
                        }],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [{
                            "url": "https:\/\/t.co\/J7hIvEKYQx",
                            "expanded_url": "https:\/\/twitter.com\/i\/web\/status\/877907252245667840",
                            "display_url": "twitter.com\/i\/web\/status\/8\u2026",
                            "indices": [117, 140]
                        }]
                    },
                    "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 140011683,
                        "id_str": "140011683",
                        "name": "Lumos",
                        "screen_name": "lumos",
                        "location": "London",
                        "description": "NGO founded by @jk_rowling & winner @Charity_Awards 2015. We work to end the harm of institutionalisation & help 8m children worldwide regain a family life.",
                        "url": "https:\/\/t.co\/aecH5BNx88",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "https:\/\/t.co\/aecH5BNx88",
                                    "expanded_url": "https:\/\/www.wearelumos.org",
                                    "display_url": "wearelumos.org",
                                    "indices": [0, 23]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 140431,
                        "friends_count": 1227,
                        "listed_count": 445,
                        "created_at": "Tue May 04 09:17:38 +0000 2010",
                        "favourites_count": 3742,
                        "utc_offset": 3600,
                        "time_zone": "London",
                        "geo_enabled": true,
                        "verified": true,
                        "statuses_count": 9822,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "811B67",
                        "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/101445483\/Lumos_strap.png",
                        "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/101445483\/Lumos_strap.png",
                        "profile_background_tile": false,
                        "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/683975536218128384\/cSCZzXpF_normal.png",
                        "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/683975536218128384\/cSCZzXpF_normal.png",
                        "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/140011683\/1485191894",
                        "profile_link_color": "811B67",
                        "profile_sidebar_border_color": "F29122",
                        "profile_sidebar_fill_color": "F4B466",
                        "profile_text_color": "333333",
                        "profile_use_background_image": false,
                        "has_extended_profile": false,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false,
                        "translator_type": "none"
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 15,
                    "favorite_count": 187,
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "possibly_sensitive_appealable": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 15,
                "favorite_count": 0,
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "created_at": "Thu Jun 22 15:14:41 +0000 2017",
                "id": 877907700209729536,
                "id_str": "877907700209729536",
                "text": "RT @Doubt_: Algo as\u00ed pero en las oficinas p\u00fablicas de Venezuela por favor https:\/\/t.co\/H0ClsICS4h",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "Doubt_",
                        "name": "Luiscarlo Rivera A.",
                        "id": 49800012,
                        "id_str": "49800012",
                        "indices": [3, 10]
                    }],
                    "urls": [{
                        "url": "https:\/\/t.co\/H0ClsICS4h",
                        "expanded_url": "https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736",
                        "display_url": "twitter.com\/SimonHallNews\/\u2026",
                        "indices": [74, 97]
                    }]
                },
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 14596134,
                    "id_str": "14596134",
                    "name": "Manuel G\u00f3mez",
                    "screen_name": "mgomezch",
                    "location": "Buenos Aires, Argentina",
                    "description": "Estepicursor lupolipaf\u00f3bico. Te audire no possum\u2014musa sapientum fixa est in aure. 42% scoundrel. fix (10\u00d7). Avoiding success at all costs. \ud83d\ude42\u270d\ud83c\udf93. FB094B00",
                    "url": "https:\/\/t.co\/onJ5cL7GVR",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/onJ5cL7GVR",
                                "expanded_url": "https:\/\/keybase.io\/mgomezch",
                                "display_url": "keybase.io\/mgomezch",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 861,
                    "friends_count": 1489,
                    "listed_count": 56,
                    "created_at": "Wed Apr 30 04:36:36 +0000 2008",
                    "favourites_count": 61178,
                    "utc_offset": -14400,
                    "time_zone": "Caracas",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 57454,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/886079948\/c6fdf4c583eadf8d482579e3fdb75113.jpeg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/886079948\/c6fdf4c583eadf8d482579e3fdb75113.jpeg",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/3757076644\/ff229cafb26e7ad69fb70526cf7bef90_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/3757076644\/ff229cafb26e7ad69fb70526cf7bef90_normal.png",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/14596134\/1370399763",
                    "profile_link_color": "7E13D6",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "95A4AB",
                    "profile_text_color": "3B464F",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "created_at": "Thu Jun 22 14:55:53 +0000 2017",
                    "id": 877902972650270720,
                    "id_str": "877902972650270720",
                    "text": "Algo as\u00ed pero en las oficinas p\u00fablicas de Venezuela por favor https:\/\/t.co\/H0ClsICS4h",
                    "truncated": false,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [{
                            "url": "https:\/\/t.co\/H0ClsICS4h",
                            "expanded_url": "https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736",
                            "display_url": "twitter.com\/SimonHallNews\/\u2026",
                            "indices": [62, 85]
                        }]
                    },
                    "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 49800012,
                        "id_str": "49800012",
                        "name": "Luiscarlo Rivera A.",
                        "screen_name": "Doubt_",
                        "location": "Universidad Simon Bolivar",
                        "description": "The Metal is Pounding Inside My Soul. Estudiante Ing de la Computacion.",
                        "url": null,
                        "entities": {
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 331,
                        "friends_count": 510,
                        "listed_count": 11,
                        "created_at": "Mon Jun 22 23:01:26 +0000 2009",
                        "favourites_count": 735,
                        "utc_offset": -14400,
                        "time_zone": "Caracas",
                        "geo_enabled": false,
                        "verified": false,
                        "statuses_count": 7911,
                        "lang": "es",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "1A1B1F",
                        "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/378800000103338806\/19950eaea4e0ac30942450d3e937b4b9.jpeg",
                        "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/378800000103338806\/19950eaea4e0ac30942450d3e937b4b9.jpeg",
                        "profile_background_tile": false,
                        "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/3424370345\/2ee5210773ea1d5c0ebd63f2782be292_normal.jpeg",
                        "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/3424370345\/2ee5210773ea1d5c0ebd63f2782be292_normal.jpeg",
                        "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/49800012\/1364572903",
                        "profile_link_color": "2FC2EF",
                        "profile_sidebar_border_color": "FFFFFF",
                        "profile_sidebar_fill_color": "252429",
                        "profile_text_color": "666666",
                        "profile_use_background_image": true,
                        "has_extended_profile": true,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false,
                        "translator_type": "none"
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": true,
                    "quoted_status_id": 877794305766772736,
                    "quoted_status_id_str": "877794305766772736",
                    "quoted_status": {
                        "created_at": "Thu Jun 22 07:44:05 +0000 2017",
                        "id": 877794305766772736,
                        "id_str": "877794305766772736",
                        "text": "Boys at Isca Academy in Exeter wear skirts to school in protest at not being allowed to wear shorts in hot weather. https:\/\/t.co\/XHrffnSQEN",
                        "truncated": false,
                        "entities": {
                            "hashtags": [],
                            "symbols": [],
                            "user_mentions": [],
                            "urls": [],
                            "media": [{
                                "id": 877794284782710784,
                                "id_str": "877794284782710784",
                                "indices": [116, 139],
                                "media_url": "http:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg",
                                "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg",
                                "url": "https:\/\/t.co\/XHrffnSQEN",
                                "display_url": "pic.twitter.com\/XHrffnSQEN",
                                "expanded_url": "https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1",
                                "type": "photo",
                                "sizes": {
                                    "small": {
                                        "w": 680,
                                        "h": 510,
                                        "resize": "fit"
                                    },
                                    "large": {
                                        "w": 2048,
                                        "h": 1536,
                                        "resize": "fit"
                                    },
                                    "thumb": {
                                        "w": 150,
                                        "h": 150,
                                        "resize": "crop"
                                    },
                                    "medium": {
                                        "w": 1200,
                                        "h": 900,
                                        "resize": "fit"
                                    }
                                }
                            }]
                        },
                        "extended_entities": {
                            "media": [{
                                "id": 877794284782710784,
                                "id_str": "877794284782710784",
                                "indices": [116, 139],
                                "media_url": "http:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg",
                                "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6NQFJXcAAbN6A.jpg",
                                "url": "https:\/\/t.co\/XHrffnSQEN",
                                "display_url": "pic.twitter.com\/XHrffnSQEN",
                                "expanded_url": "https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1",
                                "type": "photo",
                                "sizes": {
                                    "small": {
                                        "w": 680,
                                        "h": 510,
                                        "resize": "fit"
                                    },
                                    "large": {
                                        "w": 2048,
                                        "h": 1536,
                                        "resize": "fit"
                                    },
                                    "thumb": {
                                        "w": 150,
                                        "h": 150,
                                        "resize": "crop"
                                    },
                                    "medium": {
                                        "w": 1200,
                                        "h": 900,
                                        "resize": "fit"
                                    }
                                }
                            }, {
                                "id": 877794284791099392,
                                "id_str": "877794284791099392",
                                "indices": [116, 139],
                                "media_url": "http:\/\/pbs.twimg.com\/media\/DC6NQFLXcAALT5K.jpg",
                                "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6NQFLXcAALT5K.jpg",
                                "url": "https:\/\/t.co\/XHrffnSQEN",
                                "display_url": "pic.twitter.com\/XHrffnSQEN",
                                "expanded_url": "https:\/\/twitter.com\/SimonHallNews\/status\/877794305766772736\/photo\/1",
                                "type": "photo",
                                "sizes": {
                                    "medium": {
                                        "w": 900,
                                        "h": 1200,
                                        "resize": "fit"
                                    },
                                    "small": {
                                        "w": 510,
                                        "h": 680,
                                        "resize": "fit"
                                    },
                                    "thumb": {
                                        "w": 150,
                                        "h": 150,
                                        "resize": "crop"
                                    },
                                    "large": {
                                        "w": 1536,
                                        "h": 2048,
                                        "resize": "fit"
                                    }
                                }
                            }]
                        },
                        "source": "\u003ca href=\"http:\/\/twitter.com\/download\/iphone\" rel=\"nofollow\"\u003eTwitter for iPhone\u003c\/a\u003e",
                        "in_reply_to_status_id": null,
                        "in_reply_to_status_id_str": null,
                        "in_reply_to_user_id": null,
                        "in_reply_to_user_id_str": null,
                        "in_reply_to_screen_name": null,
                        "user": {
                            "id": 260655588,
                            "id_str": "260655588",
                            "name": "Simon Hall",
                            "screen_name": "SimonHallNews",
                            "location": "Exeter, Devon, UK",
                            "description": "Author and BBC News Correspondent, lover of words, thoughts, feelings and dear Devon.",
                            "url": "http:\/\/t.co\/oF4t0gk09q",
                            "entities": {
                                "url": {
                                    "urls": [{
                                        "url": "http:\/\/t.co\/oF4t0gk09q",
                                        "expanded_url": "http:\/\/www.thetvdetective.com\/",
                                        "display_url": "thetvdetective.com",
                                        "indices": [0, 22]
                                    }]
                                },
                                "description": {
                                    "urls": []
                                }
                            },
                            "protected": false,
                            "followers_count": 4118,
                            "friends_count": 404,
                            "listed_count": 181,
                            "created_at": "Fri Mar 04 09:27:10 +0000 2011",
                            "favourites_count": 0,
                            "utc_offset": 3600,
                            "time_zone": "London",
                            "geo_enabled": true,
                            "verified": true,
                            "statuses_count": 10066,
                            "lang": "en",
                            "contributors_enabled": false,
                            "is_translator": false,
                            "is_translation_enabled": false,
                            "profile_background_color": "344D52",
                            "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme4\/bg.gif",
                            "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme4\/bg.gif",
                            "profile_background_tile": false,
                            "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/852539640972275712\/_c4lAqTJ_normal.jpg",
                            "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/852539640972275712\/_c4lAqTJ_normal.jpg",
                            "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/260655588\/1374503977",
                            "profile_link_color": "0099B9",
                            "profile_sidebar_border_color": "5ED4DC",
                            "profile_sidebar_fill_color": "95E8EC",
                            "profile_text_color": "3C3940",
                            "profile_use_background_image": true,
                            "has_extended_profile": true,
                            "default_profile": false,
                            "default_profile_image": false,
                            "following": false,
                            "follow_request_sent": false,
                            "notifications": false,
                            "translator_type": "none"
                        },
                        "geo": null,
                        "coordinates": null,
                        "place": null,
                        "contributors": null,
                        "is_quote_status": false,
                        "retweet_count": 11436,
                        "favorite_count": 26439,
                        "favorited": false,
                        "retweeted": false,
                        "possibly_sensitive": false,
                        "possibly_sensitive_appealable": false,
                        "lang": "en"
                    },
                    "retweet_count": 1,
                    "favorite_count": 2,
                    "favorited": false,
                    "retweeted": false,
                    "possibly_sensitive": false,
                    "possibly_sensitive_appealable": false,
                    "lang": "es"
                },
                "is_quote_status": true,
                "quoted_status_id": 877794305766772736,
                "quoted_status_id_str": "877794305766772736",
                "retweet_count": 1,
                "favorite_count": 0,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "es"
            }, {
                "created_at": "Thu Jun 22 15:11:47 +0000 2017",
                "id": 877906972338671616,
                "id_str": "877906972338671616",
                "text": "RT @MovesLikeZagger: Quite possibly the best pair of T-Shirts i have ever seen https:\/\/t.co\/40R3K6DmjA",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [{
                        "screen_name": "MovesLikeZagger",
                        "name": "Brad",
                        "id": 83871460,
                        "id_str": "83871460",
                        "indices": [3, 19]
                    }],
                    "urls": [],
                    "media": [{
                        "id": 877816440744800256,
                        "id_str": "877816440744800256",
                        "indices": [79, 102],
                        "media_url": "http:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg",
                        "url": "https:\/\/t.co\/40R3K6DmjA",
                        "display_url": "pic.twitter.com\/40R3K6DmjA",
                        "expanded_url": "https:\/\/twitter.com\/MovesLikeZagger\/status\/877816452803211264\/photo\/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 960,
                                "h": 960,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 680,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 960,
                                "h": 960,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 877816452803211264,
                        "source_status_id_str": "877816452803211264",
                        "source_user_id": 83871460,
                        "source_user_id_str": "83871460"
                    }]
                },
                "extended_entities": {
                    "media": [{
                        "id": 877816440744800256,
                        "id_str": "877816440744800256",
                        "indices": [79, 102],
                        "media_url": "http:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg",
                        "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg",
                        "url": "https:\/\/t.co\/40R3K6DmjA",
                        "display_url": "pic.twitter.com\/40R3K6DmjA",
                        "expanded_url": "https:\/\/twitter.com\/MovesLikeZagger\/status\/877816452803211264\/photo\/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 960,
                                "h": 960,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 680,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 960,
                                "h": 960,
                                "resize": "fit"
                            }
                        },
                        "source_status_id": 877816452803211264,
                        "source_status_id_str": "877816452803211264",
                        "source_user_id": 83871460,
                        "source_user_id_str": "83871460"
                    }]
                },
                "source": "\u003ca href=\"http:\/\/twitter.com\" rel=\"nofollow\"\u003eTwitter Web Client\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 14596134,
                    "id_str": "14596134",
                    "name": "Manuel G\u00f3mez",
                    "screen_name": "mgomezch",
                    "location": "Buenos Aires, Argentina",
                    "description": "Estepicursor lupolipaf\u00f3bico. Te audire no possum\u2014musa sapientum fixa est in aure. 42% scoundrel. fix (10\u00d7). Avoiding success at all costs. \ud83d\ude42\u270d\ud83c\udf93. FB094B00",
                    "url": "https:\/\/t.co\/onJ5cL7GVR",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/onJ5cL7GVR",
                                "expanded_url": "https:\/\/keybase.io\/mgomezch",
                                "display_url": "keybase.io\/mgomezch",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 861,
                    "friends_count": 1489,
                    "listed_count": 56,
                    "created_at": "Wed Apr 30 04:36:36 +0000 2008",
                    "favourites_count": 61178,
                    "utc_offset": -14400,
                    "time_zone": "Caracas",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 57454,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "000000",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/886079948\/c6fdf4c583eadf8d482579e3fdb75113.jpeg",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/886079948\/c6fdf4c583eadf8d482579e3fdb75113.jpeg",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/3757076644\/ff229cafb26e7ad69fb70526cf7bef90_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/3757076644\/ff229cafb26e7ad69fb70526cf7bef90_normal.png",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/14596134\/1370399763",
                    "profile_link_color": "7E13D6",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "95A4AB",
                    "profile_text_color": "3B464F",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "retweeted_status": {
                    "created_at": "Thu Jun 22 09:12:06 +0000 2017",
                    "id": 877816452803211264,
                    "id_str": "877816452803211264",
                    "text": "Quite possibly the best pair of T-Shirts i have ever seen https:\/\/t.co\/40R3K6DmjA",
                    "truncated": false,
                    "entities": {
                        "hashtags": [],
                        "symbols": [],
                        "user_mentions": [],
                        "urls": [],
                        "media": [{
                            "id": 877816440744800256,
                            "id_str": "877816440744800256",
                            "indices": [58, 81],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg",
                            "url": "https:\/\/t.co\/40R3K6DmjA",
                            "display_url": "pic.twitter.com\/40R3K6DmjA",
                            "expanded_url": "https:\/\/twitter.com\/MovesLikeZagger\/status\/877816452803211264\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "large": {
                                    "w": 960,
                                    "h": 960,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 680,
                                    "h": 680,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 960,
                                    "h": 960,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "extended_entities": {
                        "media": [{
                            "id": 877816440744800256,
                            "id_str": "877816440744800256",
                            "indices": [58, 81],
                            "media_url": "http:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg",
                            "media_url_https": "https:\/\/pbs.twimg.com\/media\/DC6hZuiXcAA_qKJ.jpg",
                            "url": "https:\/\/t.co\/40R3K6DmjA",
                            "display_url": "pic.twitter.com\/40R3K6DmjA",
                            "expanded_url": "https:\/\/twitter.com\/MovesLikeZagger\/status\/877816452803211264\/photo\/1",
                            "type": "photo",
                            "sizes": {
                                "large": {
                                    "w": 960,
                                    "h": 960,
                                    "resize": "fit"
                                },
                                "small": {
                                    "w": 680,
                                    "h": 680,
                                    "resize": "fit"
                                },
                                "thumb": {
                                    "w": 150,
                                    "h": 150,
                                    "resize": "crop"
                                },
                                "medium": {
                                    "w": 960,
                                    "h": 960,
                                    "resize": "fit"
                                }
                            }
                        }]
                    },
                    "source": "\u003ca href=\"http:\/\/twitter.com\/download\/android\" rel=\"nofollow\"\u003eTwitter for Android\u003c\/a\u003e",
                    "in_reply_to_status_id": null,
                    "in_reply_to_status_id_str": null,
                    "in_reply_to_user_id": null,
                    "in_reply_to_user_id_str": null,
                    "in_reply_to_screen_name": null,
                    "user": {
                        "id": 83871460,
                        "id_str": "83871460",
                        "name": "Brad",
                        "screen_name": "MovesLikeZagger",
                        "location": "Dubai, United Arab Emirates",
                        "description": "I don't know why people are following me, it's not like i know where i'm going",
                        "url": "https:\/\/t.co\/TMt5sEM8EH",
                        "entities": {
                            "url": {
                                "urls": [{
                                    "url": "https:\/\/t.co\/TMt5sEM8EH",
                                    "expanded_url": "http:\/\/soundcloud.com\/movelikezagger",
                                    "display_url": "soundcloud.com\/movelikezagger",
                                    "indices": [0, 23]
                                }]
                            },
                            "description": {
                                "urls": []
                            }
                        },
                        "protected": false,
                        "followers_count": 958,
                        "friends_count": 363,
                        "listed_count": 26,
                        "created_at": "Tue Oct 20 16:02:26 +0000 2009",
                        "favourites_count": 1828,
                        "utc_offset": 3600,
                        "time_zone": "London",
                        "geo_enabled": true,
                        "verified": false,
                        "statuses_count": 69458,
                        "lang": "en",
                        "contributors_enabled": false,
                        "is_translator": false,
                        "is_translation_enabled": false,
                        "profile_background_color": "131516",
                        "profile_background_image_url": "http:\/\/abs.twimg.com\/images\/themes\/theme14\/bg.gif",
                        "profile_background_image_url_https": "https:\/\/abs.twimg.com\/images\/themes\/theme14\/bg.gif",
                        "profile_background_tile": true,
                        "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/877868462034616321\/W2pdAkJs_normal.jpg",
                        "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/877868462034616321\/W2pdAkJs_normal.jpg",
                        "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/83871460\/1461854650",
                        "profile_link_color": "009999",
                        "profile_sidebar_border_color": "EEEEEE",
                        "profile_sidebar_fill_color": "EFEFEF",
                        "profile_text_color": "333333",
                        "profile_use_background_image": true,
                        "has_extended_profile": true,
                        "default_profile": false,
                        "default_profile_image": false,
                        "following": false,
                        "follow_request_sent": false,
                        "notifications": false,
                        "translator_type": "none"
                    },
                    "geo": null,
                    "coordinates": null,
                    "place": null,
                    "contributors": null,
                    "is_quote_status": false,
                    "retweet_count": 3899,
                    "favorite_count": 9301,
                    "favorited": true,
                    "retweeted": true,
                    "possibly_sensitive": false,
                    "possibly_sensitive_appealable": false,
                    "lang": "en"
                },
                "is_quote_status": false,
                "retweet_count": 3899,
                "favorite_count": 0,
                "favorited": true,
                "retweeted": true,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
            }, {
                "created_at": "Thu Jun 22 15:07:29 +0000 2017",
                "id": 877905887859310592,
                "id_str": "877905887859310592",
                "text": "Anyone know how can I buy an advertisement in the fdisk partition type list and how much? *sarc",
                "truncated": false,
                "entities": {
                    "hashtags": [],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": []
                },
                "source": "\u003ca href=\"http:\/\/suso.suso.org\/xulu\/Command_Line_Magic\" rel=\"nofollow\"\u003eCLI Magic poster\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 91333167,
                    "id_str": "91333167",
                    "name": "Command Line Magic",
                    "screen_name": "climagic",
                    "location": "BASHLAND",
                    "description": "Cool Unix\/Linux Command Line tricks you can use in 140 characters or less.",
                    "url": "http:\/\/t.co\/dUakp9EMPS",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "http:\/\/t.co\/dUakp9EMPS",
                                "expanded_url": "http:\/\/www.climagic.org\/",
                                "display_url": "climagic.org",
                                "indices": [0, 22]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 137088,
                    "friends_count": 10754,
                    "listed_count": 3593,
                    "created_at": "Fri Nov 20 12:49:35 +0000 2009",
                    "favourites_count": 390,
                    "utc_offset": 3600,
                    "time_zone": "London",
                    "geo_enabled": false,
                    "verified": false,
                    "statuses_count": 10285,
                    "lang": "en",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "C0DEED",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/60122174\/checkertermbackground.png",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/60122174\/checkertermbackground.png",
                    "profile_background_tile": true,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/535876218\/climagic-icon_normal.png",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/535876218\/climagic-icon_normal.png",
                    "profile_link_color": "0084B4",
                    "profile_sidebar_border_color": "C0DEED",
                    "profile_sidebar_fill_color": "DDEEF6",
                    "profile_text_color": "333333",
                    "profile_use_background_image": true,
                    "has_extended_profile": false,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 9,
                "favorite_count": 25,
                "favorited": false,
                "retweeted": false,
                "lang": "en"
            }, {
                "created_at": "Thu Jun 22 15:07:08 +0000 2017",
                "id": 877905802153132033,
                "id_str": "877905802153132033",
                "text": "Reinventing my hairstyles! \ud83d\ude04 #braid #braidedbun #gettingbetter #loveit https:\/\/t.co\/1bBK4jUB50",
                "truncated": false,
                "entities": {
                    "hashtags": [{
                        "text": "braid",
                        "indices": [29, 35]
                    }, {
                        "text": "braidedbun",
                        "indices": [36, 47]
                    }, {
                        "text": "gettingbetter",
                        "indices": [48, 62]
                    }, {
                        "text": "loveit",
                        "indices": [63, 70]
                    }],
                    "symbols": [],
                    "user_mentions": [],
                    "urls": [{
                        "url": "https:\/\/t.co\/1bBK4jUB50",
                        "expanded_url": "https:\/\/www.instagram.com\/p\/BVpXMs9gV5p\/",
                        "display_url": "instagram.com\/p\/BVpXMs9gV5p\/",
                        "indices": [71, 94]
                    }]
                },
                "source": "\u003ca href=\"http:\/\/instagram.com\" rel=\"nofollow\"\u003eInstagram\u003c\/a\u003e",
                "in_reply_to_status_id": null,
                "in_reply_to_status_id_str": null,
                "in_reply_to_user_id": null,
                "in_reply_to_user_id_str": null,
                "in_reply_to_screen_name": null,
                "user": {
                    "id": 90177542,
                    "id_str": "90177542",
                    "name": "Solange Silva",
                    "screen_name": "Solange_SV",
                    "location": "",
                    "description": "100% Geeky Goober! Wicked fan of the fantastical & absurd :) I love my family more than anything in the world \u2665",
                    "url": "https:\/\/t.co\/x5lRFYk48I",
                    "entities": {
                        "url": {
                            "urls": [{
                                "url": "https:\/\/t.co\/x5lRFYk48I",
                                "expanded_url": "http:\/\/instagram.com\/solange_sv",
                                "display_url": "instagram.com\/solange_sv",
                                "indices": [0, 23]
                            }]
                        },
                        "description": {
                            "urls": []
                        }
                    },
                    "protected": false,
                    "followers_count": 103,
                    "friends_count": 69,
                    "listed_count": 5,
                    "created_at": "Sun Nov 15 15:02:17 +0000 2009",
                    "favourites_count": 90,
                    "utc_offset": -14400,
                    "time_zone": "La Paz",
                    "geo_enabled": true,
                    "verified": false,
                    "statuses_count": 14276,
                    "lang": "es",
                    "contributors_enabled": false,
                    "is_translator": false,
                    "is_translation_enabled": false,
                    "profile_background_color": "FFFFFF",
                    "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/776262954\/deb785c1ab1097ac08c69aa110153ff1.png",
                    "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/776262954\/deb785c1ab1097ac08c69aa110153ff1.png",
                    "profile_background_tile": false,
                    "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/845131412877459456\/oLcPIG4C_normal.jpg",
                    "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/845131412877459456\/oLcPIG4C_normal.jpg",
                    "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/90177542\/1490330069",
                    "profile_link_color": "3DB7CC",
                    "profile_sidebar_border_color": "000000",
                    "profile_sidebar_fill_color": "090A0A",
                    "profile_text_color": "9BA7A8",
                    "profile_use_background_image": true,
                    "has_extended_profile": true,
                    "default_profile": false,
                    "default_profile_image": false,
                    "following": true,
                    "follow_request_sent": false,
                    "notifications": false,
                    "translator_type": "none"
                },
                "geo": null,
                "coordinates": null,
                "place": null,
                "contributors": null,
                "is_quote_status": false,
                "retweet_count": 0,
                "favorite_count": 0,
                "favorited": false,
                "retweeted": false,
                "possibly_sensitive": false,
                "possibly_sensitive_appealable": false,
                "lang": "en"
            }]
        };
    }    

}
