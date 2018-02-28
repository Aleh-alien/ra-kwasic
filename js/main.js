"use strict";

/* Code for i18next
 *
 */
$(document).ready(function(){
    var browserLanguage = navigator.language;

    //set default language
    setLanguage(browserLanguage);
    
    //action change language
    $(this).on("click","#languages",function(event){
        var language = $(event.target).attr("language");
        setLanguage(language);
    });
});

function setLanguage(language){
    
    // if (language !== "ca") {
    //     language = "en";
    // }else if(language ){

    // }
    switch(language)
    {
        case "ca":
          
          break;
        case "en":
        
          break;
        default:
          language = "es"
    }

    i18n.init({
        lng: language,
        fallbackLng: false,
        debug: true
    }, function() {
        $(".header").i18n();
        $(".services").i18n();
        $(".about").i18n();
        $(".footer").i18n();
    });
}
