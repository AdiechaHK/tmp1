$(document).ready(function(){
    var subMenuItems = {};

    subMenuItems["menu-cell-1"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-cutlery"></i> Restaurant</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-cutlery"></i> Snacks/Fast food</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-glass"></i> Bar/Pub</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-coffee"></i> Coffee/Tea</span></div>'+
        '</div>';
    subMenuItems["menu-cell-2"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> 24-7/Convenience Store</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Shopping Center</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Department Store</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Food & Drink</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Book Shop</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Pharmacy</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Electronics</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> DIY/garden center</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Clothing & Accessories</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Outdoor Sports</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Store</span></div>'+
        '</div>';
    subMenuItems["menu-cell-3"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-music"></i> Dance or Nightclub</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-video-camera"></i> Cinema</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-music"></i> Theater, Music & Culture</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-star"></i> Casino</span></div>'+
        '</div>';
    subMenuItems["menu-cell-4"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-bed"></i> Hotel</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-bed"></i> Motel</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-bed"></i> Hostel</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-bed"></i> Camping</span></div>'+
        '</div>';
    subMenuItems["menu-cell-5"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-camera-retro"></i> Landmark/Attraction</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-camera-retro"></i> Museum</span></div>'+
        '</div>';
    subMenuItems["menu-cell-6"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-plane"></i> Airport</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-train"></i> Railway Station</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-subway"></i> Public Transit</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-ship"></i> Ferry Terminal</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-taxi"></i> Taxi Stand</span></div>'+
        '</div>';
    subMenuItems["menu-cell-7"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> ATM/Bank/Exchange</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Police/Emergency</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Post Office</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Tourist Information</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Gasoline Station</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Car Rental</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Car Dealer/Repair</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Travel Agency</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Communications/Media</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Business/Industry</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Service</span></div>'+
        '</div>';
    subMenuItems["menu-cell-8"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-hospital-o"></i> Hospital or Healthcare Facility</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Government or Community Facility</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-pencil"></i> Educational Facility</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-book"></i> Library</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Expo & Convention Facility</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-car"></i> Parking Facility</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Public Bathroom/Rest Area</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-soccer-ball-o"></i> Sport Facility/Venue</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Facility</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Religious Place</span></div>'+
        '</div>';

    subMenuItems["menu-cell-9"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-umbrella"></i> Recreation</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-umbrella"></i> Theme Park</span></div>'+
        '</div>';
    subMenuItems["menu-cell-10"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-leaf"></i> Recreation</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-leaf"></i> Body of Water</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-leaf"></i> Mountain or Hill</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-leaf"></i> Underwater Feature</span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-leaf"></i> Forest, Heath</span></div>'+
        '</div>';


    $('.menu').hide(400);
    $('.sub-menu-map').hide(400);
    $('#pac-input').focusin(function(){
        $('.menu').show(400);
    });
    $('#pac-input').focusout(function(){
        $('.menu').hide(400);
        $('.sub-menu-map').hide(400);
    });
    $('.menu-cell').hover(function(){
        $('.sub-menu-map').html('');
        $('.sub-menu-map').html(subMenuItems[$(this).attr('id')]);
        $('.sub-menu-map').show(400);
    });
});

