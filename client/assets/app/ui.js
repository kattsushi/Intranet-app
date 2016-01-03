'use strict'

jQuery(document).ready(function(){

    //Accordion Nav
    jQuery('.mainNav').navAccordion({
      expandButtonText: '<md-buttom data-ng-show="menu.Submenu != 0" class="fa fa-plus" style="color:black"></md-buttom>',  //Text inside of buttons can be HTML
      collapseButtonText: '<i data-ng-show="menu.Submenu != 0" class="fa fa-minus" style="color:black"></i>'
    },
    function(){
      console.log('Callback')
    });

  });



/*
$(document).ready( function() {
	var $submenu = $('.submenu');
	var $mainmenu = $('.mainmenu');
	$submenu.hide();
	$submenu.first().delay(400).slideDown(700);
	$submenu.on('click','li', function() {
		$submenu.siblings().find('li').removeClass('chosen');
		$(this).addClass('chosen');
	});
	$mainmenu.on('click', 'li', function() {
		$(this).next('.submenu').slideToggle().siblings('.submenu').slideUp();
	});
	$mainmenu.children('li:last-child').on('click', function() {
		$mainmenu.fadeOut().delay(500).fadeIn();
	});
});



$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
 $(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el,
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion'), false);
});
  }) */
