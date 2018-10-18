angular.module('shopApp', ['ngAnimate'])
  .controller('SearchResultsController', function($scope, $http) {
  	var searchResults = this;

		searchResults.title = "Some Random Shit ";
		searchResults.search = "";
		searchResults.sortOrder = "name";



		searchResults.orderTypes = [
			{
				"orderName": "Item Name",
				"order": "name"
			},
			{
				"orderName": "Franchise",
				"order": "franchise"
			},
			{
				"orderName": "Price Highest First",
				"order": "-price.cost"
			},
			{
				"orderName": "Price Lowest First",
				"order": "price.cost"
			},
			{
				"orderName": "Item Type",
				"order": "type"
			}
		];


		searchResults.locations = {};
		searchResults.locations.images = "images/";
		searchResults.locations.logos = searchResults.locations.images + "logos/";
		searchResults.locations.icons = searchResults.locations.images + "icons/";

		searchResults.logos = {};
		searchResults.logos.overwatch = {
			"name": "overwatch",
			"icon": "overwatch_icon.svg",
			"logo": "overwatch_logo.png"
		};
		searchResults.logos.wow = {
			"name": "wow",
			"icon": "wow_icon.svg",
			"logo": "wow_logo.png"
		};
		searchResults.logos.starcraft = {
			"name": "starcraft",
			"icon": "starcraft_icon.svg",
			"logo": "starcraft_logo.png"
		};
		searchResults.logos.diablo = {
			"name": "diablo",
			"icon": "diablo_icon.svg",
			"logo": "diablo_logo.png"
		};
		searchResults.logos.heroes = {
			"name": "heroes",
			"icon": "heros_icon.svg",
			"logo": "heroes_logo.png"
		};
		searchResults.logos.hearthstone = {
			"name": "hearthstone",
			"icon": "hearthstone_icon.svg",
			"logo": "hearthstone_logo.png"
		}

		searchResults.getIcon = function(franchise){
			if (franchise) {
				var location = searchResults.locations.icons;
				var icon = searchResults.logos[franchise].icon;
				return "" + location + icon + "";
			} else {
				console.log('error loading icon');
			}
		}
		searchResults.getLogo = function(franchise){
			if (franchise) {
				var location = searchResults.locations.logos;
				var logo = searchResults.logos[franchise].logo;
				return "" + location + logo + "";
			} else {
				console.log('error loading icon');
			}
		}
		$http.get("cards.json")
		.then(function(response) {
        searchResults.results = response.data.cards;
    });

  });
