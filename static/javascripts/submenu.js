$(document).ready(function(){
    var subMenuItems = {};
    var menuAccordion = '<div id="accordion" role="tablist" aria-multiselectable="true" class="panel-group">'+
    '<div class="panel panel-default">'+
    '<div id="cat-1" role="tab" class="panel-heading accordion-panel" style="background-color: #071d32; color: white;">'+
    '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#cat-c-1" aria-expanded="false" aria-controls="cat-c-1" class="collapsed"><i class="fa fa-cutlery"></i> Eat and Drink</a><input type="checkbox" style="float:right"/></h4>'+
    '</div>'+
    '<div id="cat-c-1" role="tabpanel" aria-labelledby="cat-1" class="panel-collapse collapse">'+
    '<ul class="list-group">'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-cutlery"></i> Restaurant <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-cutlery"></i> Snacks/Fast food <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-glass"></i> Bar/Pub <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-coffee"></i> Coffee/Tea <input type="checkbox" style="float:right"></li>'+

    '</ul>'+
    '</div>'+
    '<div id="cat-2" role="tab" class="panel-heading accordion-panel" style="background-color: #071d32; color: white;">'+
    '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#cat-c-2" aria-expanded="false" aria-controls="cat-c-2" class="collapsed"><i class="fa fa-shopping-cart"></i> Shopping</a><input type="checkbox" style="float:right"/></h4>'+
    '</div>'+
    '<div id="cat-c-2" role="tabpanel" aria-labelledby="cat-2" class="panel-collapse collapse">'+
    '<ul class="list-group">'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-shopping-cart"></i> 24-7/Convenience Store <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-shopping-cart"></i> Shopping Center <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-shopping-cart"></i> Department Store <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-shopping-cart"></i> Food & Drink <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-shopping-cart"></i> Book Shop <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-shopping-cart"></i> Pharmacy <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-shopping-cart"></i> Electronics <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-shopping-cart"></i> DIY/garden center <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-shopping-cart"></i> Clothing & Accessories <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-shopping-cart"></i> Outdoor Sports <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-shopping-cart"></i> Store <input type="checkbox" style="float:right"></li>'+

    '</ul>'+
    '</div>'+
    '<div id="cat-3" role="tab" class="panel-heading accordion-panel" style="background-color: #071d32; color: white;">'+
    '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#cat-c-3" aria-expanded="false" aria-controls="cat-c-3" class="collapsed"><i class="fa fa-coffee"></i> Going out</a><input type="checkbox" style="float:right"/></h4>'+
    '</div>'+
    '<div id="cat-c-3" role="tabpanel" aria-labelledby="cat-3" class="panel-collapse collapse">'+
    '<ul class="list-group">'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-music"></i> Dance or Nightclub <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-video-camera"></i> Cinema <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-music"></i> Theater, Music & Culture <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-star"></i> Casino <input type="checkbox" style="float:right"></li>'+

    '</ul>'+
    '</div>'+
    '<div id="cat-4" role="tab" class="panel-heading accordion-panel" style="background-color: #071d32; color: white;">'+
    '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#cat-c-4" aria-expanded="false" aria-controls="cat-c-4" class="collapsed"><i class="fa fa-bed"></i> Accommodation</a><input type="checkbox" style="float:right"/></h4>'+
    '</div>'+
    '<div id="cat-c-4" role="tabpanel" aria-labelledby="cat-4" class="panel-collapse collapse">'+
    '<ul class="list-group">'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-bed"></i> Hotel <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-bed"></i> Motel <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-bed"></i> Hostel <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-bed"></i> Camping <input type="checkbox" style="float:right"></li>'+

    '</ul>'+
    '</div>'+
    '<div id="cat-5" role="tab" class="panel-heading accordion-panel" style="background-color: #071d32; color: white;">'+
    '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#cat-c-5" aria-expanded="false" aria-controls="cat-c-5" class="collapsed"><i class="fa fa-camera-retro"></i> Sights and Museums</a><input type="checkbox" style="float:right"/></h4>'+
    '</div>'+
    '<div id="cat-c-5" role="tabpanel" aria-labelledby="cat-5" class="panel-collapse collapse">'+
    '<ul class="list-group">'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-camera-retro"></i> Landmark/Attraction <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-camera-retro"></i> Museum <input type="checkbox" style="float:right"></li>'+

    '</ul>'+
    '</div>'+
    '<div id="cat-6" role="tab" class="panel-heading accordion-panel" style="background-color: #071d32; color: white;">'+
    '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#cat-c-6" aria-expanded="false" aria-controls="cat-c-6" class="collapsed"><i class="fa fa-taxi"></i> Transport</a><input type="checkbox" style="float:right"/></h4>'+
    '</div>'+
    '<div id="cat-c-6" role="tabpanel" aria-labelledby="cat-6" class="panel-collapse collapse">'+
    '<ul class="list-group">'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-plane"></i> Airport <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-train"></i> Railway Station <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-subway"></i> Public Transit <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-ship"></i> Ferry Terminal <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-taxi"></i> Taxi Stand <input type="checkbox" style="float:right"></li>'+

    '</ul>'+
    '</div>'+
    '<div id="cat-7" role="tab" class="panel-heading accordion-panel" style="background-color: #071d32; color: white;">'+
    '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#cat-c-7" aria-expanded="false" aria-controls="cat-c-7" class="collapsed"><i class="fa fa-building"></i> Business and Services</a><input type="checkbox" style="float:right"/></h4>'+
    '</div>'+
    '<div id="cat-c-7" role="tabpanel" aria-labelledby="cat-7" class="panel-collapse collapse">'+
    '<ul class="list-group">'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> ATM/Bank/Exchange <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Police/Emergency <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Post Office <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Tourist Information <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Gasoline Station <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Car Rental <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Car Dealer/Repair <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Travel Agency <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Communications/Media <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Business/Industry <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Service <input type="checkbox" style="float:right"></li>'+

    '</ul>'+
    '</div>'+
    '<div id="cat-8" role="tab" class="panel-heading accordion-panel" style="background-color: #071d32; color: white;">'+
    '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#cat-c-8" aria-expanded="false" aria-controls="cat-c-8" class="collapsed"><i class="fa fa-hospital-o"></i> Facilities</a><input type="checkbox" style="float:right"/></h4>'+
    '</div>'+
    '<div id="cat-c-8" role="tabpanel" aria-labelledby="cat-8" class="panel-collapse collapse">'+
    '<ul class="list-group">'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-hospital-o"></i> Hospital or Healthcare Facility <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Government or Community Facility <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-pencil"></i> Educational Facility <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-book"></i> Library <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Expo & Convention Facility <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-car"></i> Parking Facility <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Public Bathroom/Rest Area <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-soccer-ball-o"></i> Sport Facility/Venue <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Facility <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-building"></i> Religious Place <input type="checkbox" style="float:right"></li>'+

    '</ul>'+
    '</div>'+
    '<div id="cat-9" role="tab" class="panel-heading accordion-panel" style="background-color: #071d32; color: white;">'+
    '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#cat-c-9" aria-expanded="false" aria-controls="cat-c-9" class="collapsed"><i class="fa fa-umbrella"></i> Leisure & Outdoor</a><input type="checkbox" style="float:right"/></h4>'+
    '</div>'+
    '<div id="cat-c-9" role="tabpanel" aria-labelledby="cat-9" class="panel-collapse collapse">'+
    '<ul class="list-group">'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-umbrella"></i> Recreation <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-umbrella"></i> Theme Park <input type="checkbox" style="float:right"></li>'+

    '</ul>'+
    '</div>'+
    '<div id="cat-10" role="tab" class="panel-heading accordion-panel" style="background-color: #071d32; color: white;">'+
    '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#cat-c-10" aria-expanded="false" aria-controls="cat-c-10" class="collapsed"><i class="fa fa-leaf"></i> Natural or Geographical</a><input type="checkbox" style="float:right"/></h4>'+
    '</div>'+
    '<div id="cat-c-10" role="tabpanel" aria-labelledby="cat-10" class="panel-collapse collapse">'+
    '<ul class="list-group">'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-leaf"></i> Recreation <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-leaf"></i> Body of Water <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-leaf"></i> Mountain or Hill <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-leaf"></i> Underwater Feature <input type="checkbox" style="float:right"></li>'+
    '<li class="list-group-item accordion-cell"><i class="fa fa-leaf"></i> Forest, Heath <input type="checkbox" style="float:right"></li>'+

    '</ul>'+
    '</div>'+
    '</div>'+
    '</div>';
    var menu = '<div class="col-md-3 menu-map">'+
        '<div class="row menu-map-container">'+
        '<div id="menu-cell-1" class="col-md-12 menu-cell"><span class="col-md-12"><i class="fa fa-cutlery"></i> Eat and Drink'+
            '<input type="checkbox" style="float:right"/></span></div>'+
        '<div id="menu-cell-2" class="col-md-12 menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Shopping'+
            '<input type="checkbox" style="float:right"/></span></div>'+
        '<div id="menu-cell-3" class="col-md-12 menu-cell"><span class="col-md-12"><i class="fa fa-coffee"></i> Going out'+
            '<input type="checkbox" style="float:right"/></span></div>'+
        '<div id="menu-cell-4" class="col-md-12 menu-cell"><span class="col-md-12"><i class="fa fa-bed"></i> Accommodation'+
            '<input type="checkbox" style="float:right"/></span></div>'+
        '<div id="menu-cell-5" class="col-md-12 menu-cell"><span class="col-md-12"><i class="fa fa-camera-retro"></i> Sights and Museums'+
            '<input type="checkbox" style="float:right"/></span></div>'+
        '<div id="menu-cell-6" class="col-md-12 menu-cell"><span class="col-md-12"><i class="fa fa-taxi"></i> Transport'+
            '<input type="checkbox" style="float:right"/></span></div>'+
        '<div id="menu-cell-7" class="col-md-12 menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Business and Services'+
            '<input type="checkbox" style="float:right"/></span></div>'+
        '<div id="menu-cell-8" class="col-md-12 menu-cell"><span class="col-md-12"><i class="fa fa-hospital-o"></i> Facilities'+
            '<input type="checkbox" style="float:right"/></span></div>'+
        '<div id="menu-cell-9" class="col-md-12 menu-cell"><span class="col-md-12"><i class="fa fa-umbrella"></i> Leisure & Outdoor'+
            '<input type="checkbox" style="float:right"/></span></div>'+
        '<div id="menu-cell-10" class="col-md-12 menu-cell"><span class="col-md-12"><i class="fa fa-leaf"></i> Natural or Geographical'+
            '<input type="checkbox" style="float:right"/></span></div>'+
        '</div>'+
        '</div>'+
        '<div class="col-md-3 sub-menu-map"></div>';
    subMenuItems["menu-cell-1"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-cutlery"></i> Restaurant <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-cutlery"></i> Snacks/Fast food <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-glass"></i> Bar/Pub <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-coffee"></i> Coffee/Tea <input type="checkbox" style="float:right"></span></div>'+
        '</div>';
    subMenuItems["menu-cell-2"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> 24-7/Convenience Store <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Shopping Center <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Department Store <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Food & Drink <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Book Shop <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Pharmacy <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Electronics <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> DIY/garden center <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Clothing & Accessories <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Outdoor Sports <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-shopping-cart"></i> Store <input type="checkbox" style="float:right"></span></div>'+
        '</div>';
    subMenuItems["menu-cell-3"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-music"></i> Dance or Nightclub <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-video-camera"></i> Cinema <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-music"></i> Theater, Music & Culture <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-star"></i> Casino <input type="checkbox" style="float:right"></span></div>'+
        '</div>';
    subMenuItems["menu-cell-4"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-bed"></i> Hotel <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-bed"></i> Motel <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-bed"></i> Hostel <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-bed"></i> Camping <input type="checkbox" style="float:right"></span></div>'+
        '</div>';
    subMenuItems["menu-cell-5"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-camera-retro"></i> Landmark/Attraction <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-camera-retro"></i> Museum <input type="checkbox" style="float:right"></span></div>'+
        '</div>';
    subMenuItems["menu-cell-6"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-plane"></i> Airport <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-train"></i> Railway Station <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-subway"></i> Public Transit <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-ship"></i> Ferry Terminal <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-taxi"></i> Taxi Stand <input type="checkbox" style="float:right"></span></div>'+
        '</div>';
    subMenuItems["menu-cell-7"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> ATM/Bank/Exchange <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Police/Emergency <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Post Office <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Tourist Information <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Gasoline Station <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Car Rental <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Car Dealer/Repair <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Travel Agency <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Communications/Media <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Business/Industry <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Service <input type="checkbox" style="float:right"></span></div>'+
        '</div>';
    subMenuItems["menu-cell-8"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-hospital-o"></i> Hospital or Healthcare Facility <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Government or Community Facility <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-pencil"></i> Educational Facility <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-book"></i> Library <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Expo & Convention Facility <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-car"></i> Parking Facility <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Public Bathroom/Rest Area <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-soccer-ball-o"></i> Sport Facility/Venue <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Facility <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-building"></i> Religious Place <input type="checkbox" style="float:right"></span></div>'+
        '</div>';

    subMenuItems["menu-cell-9"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-umbrella"></i> Recreation <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-umbrella"></i> Theme Park <input type="checkbox" style="float:right"></span></div>'+
        '</div>';
    subMenuItems["menu-cell-10"] = '<div class="row menu-map-container">'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-leaf"></i> Recreation <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-leaf"></i> Body of Water <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-leaf"></i> Mountain or Hill <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-leaf"></i> Underwater Feature <input type="checkbox" style="float:right"></span></div>'+
        '<div class="col-md-12 sub-menu-cell"><span class="col-md-12"><i class="fa fa-leaf"></i> Forest, Heath <input type="checkbox" style="float:right"></span></div>'+
        '</div>';
    var attachEvents = function(){
//        $('#pac-input').focusin(function(){
  //          $('.menu').show(400);
        });
        $('#pac-input').focusout(function(){
    //        $('.menu').hide(400);
      //      $('.sub-menu-map').hide(400);
        });
        $('.menu-cell').hover(function(){
            $('.sub-menu-map').html('');
            $('.sub-menu-map').html(subMenuItems[$(this).attr('id')]);
            $('.sub-menu-map').show(400);
        });

    };
    if($(window).width() < 1000){
        $('.menu').html(menuAccordion);
        attachEvents();
    }else{
        $('.menu').html(menu);
        $('.sub-menu-map').hide(400);
        attachEvents();
    }
    $('.menu').hide(400);


    $(window).resize(function(){
        if($(window).width() < 1000){
            $('.menu').html(menuAccordion);
            attachEvents();
        }else{
            $('.menu').html(menu);
            $('.sub-menu-map').hide(400);
            attachEvents();
        }
    });
    $('.add_fav').click(function(){
        if($('.menu').is(':hidden')){
            $('.menu').show(400);
        }else{
            $('.menu').hide(400);
        }
    });
});
