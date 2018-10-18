$(function() {
		$('nav.debug').on('click', function(){
			$('.cms').toggleClass('open');
		})
  });

var shopApp = angular.module('shopApp', []);

shopApp.controller('ShopController', function($scope, $http) {

  	var shop = this;

		shop.header = {
			background: {
				'xs': 'images/001/header-xs.png',
				'sm': 'images/001/header-sm.png',
				'md': 'images/001/header-md.png',
				'lg': 'images/001/header-lg.png',
				'xls': 'images/001/header-xls.png',
				'xlr': 'images/001/header-xlr.png',
				'xlt': 'images/001/header-xlt.png',
				'video': 'https://d2q63o9r0h0ohi.cloudfront.net/videos/expansion-headers/kobolds-and-catacombs-bg-wide-cefda038f25aa9cd53b1eafa43526ea71cddf5100bfb5a8654a7f4c3471e61561a6039361e5bd3497d1c95c59a59dc20374ebaa4cc76edd93c7accee965f6ee8.webm',
				'color': '#0d0d19'
			},
			content: {
				'alignment': 'center',
				'mainTitle': 'The main title goes here',
				'subTitle': 'Sub title goes here',
				'logo': 'http://bnetproduct-a.akamaihd.net//fb0/28ce8e0e4a282859ebe28e4a3d0ef61b-kobolds-and-catacombs-x1000-en.png',
				'cta': {
					'location': "#",
					'copy': "call to action"
				}
			}
		}


  });
