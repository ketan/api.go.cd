//= require ./lib/_energize
//= require ./app/_toc
//= require ./app/_lang

// --- begin gocd includes
//= require ./app/_version_helper
//= require ./app/_popover
//= require ./app/_gdpr-banner
// --- end gocd includes

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};
