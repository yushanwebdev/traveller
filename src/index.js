import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'slick-carousel';

import './newsletter.jpg';
import './style.scss';


$(document).ready(function() {
	$('.slick-slider-variable').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>'
	});

	$('.section-two-slider').slick({
		speed: 300,
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>'
	});
});