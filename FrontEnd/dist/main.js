$('.menu .item')
  .tab()
;

$(document)
    .ready(function() {

      // fix menu when passed
      $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
          }
        })
      ;

      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;

    })
  ;

$("#showsearch1").click(function () {
            $('.ui.modal').modal('show');
        });

$("#showsearch2").click(function () {
            $('.ui.modal').modal('show');
        });

$("#showsearch3").click(function () {
            $('.ui.modal').modal('show');
        });