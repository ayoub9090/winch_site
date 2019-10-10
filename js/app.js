$(document).ready(function () {    
	
    initializeTabs();
	//For submenu
	if($(window).width() > 767){
	 $('li.dropdown-submenu').hover(function(event) { 
		  event.stopPropagation(); 
		  if ($(this).hasClass('open')){
			  $(this).removeClass('open');
		  }else{
			  $('li.dropdown-submenu').removeClass('open');
			  $(this).addClass('open');
		 }
	  });
	}else{
			 $('li.dropdown-submenu').on('click', function(event) {
				  event.stopPropagation(); 
				  if ($(this).hasClass('open')){
					  $(this).removeClass('open');
				  }else{
					  $('li.dropdown-submenu').removeClass('open');
					  $(this).addClass('open');
				 }
			  });
	}
  //End For submenu
  
    AOS.init({
		duration: 700
	});
    $('.selectpicker').selectpicker();
    initializeSliderClick()
    getTotalPrive();
    initializeInputFile();
    changeServiceStatus();
    initialzeTable();
	    if($('#the_map').length >= 1){
			the_map();
		}
	
	//profile scripts
    var btnCust = ''; 
	if($("#avatar-1").length >= 1){
$("#avatar-1").fileinput({
    overwriteInitial: true,
    maxFileSize: 1500,
    showClose: false,
    showCaption: false,
    browseLabel: '',
    removeLabel: '',
    browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
    removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
    removeTitle: 'Cancel or reset changes',
    elErrorContainer: '#kv-avatar-errors-1',
    msgErrorClass: 'alert alert-block alert-danger',
    defaultPreviewContent: '<img src="./images/default_avatar.png" alt="Your Avatar" style="width:100%">',
    layoutTemplates: {main2: '{preview} ' +  btnCust + ' {remove} {browse}'},
    allowedFileExtensions: ["jpg", "png", "gif"]
    });
	
	$('#avatar-1').change(function(){
		if($('.upload-avatar').val()==''){
			$('.upload-avatar').hide();
		}else{
			$('.upload-avatar').show();
		}
	});
	}
//end profile scripts

    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity(e.target.getAttribute("message-on-validation") == null ? 'please fill this data' : e.target.getAttribute("message-on-validation") == null);
            }
        };
        elements[i].oninput = function (e) {
            e.target.setCustomValidity("");
        };
    }
    
    $('form').find('.check_Box_Content > input[type=checkbox]').change(function () {
        if ($(this).is(':checked')) {
            $(this).parents('form').find('input[type=submit]').removeAttr('disabled');
        } else {
            $(this).parents('form').find('input[type=submit]').attr('disabled','true');
        }
    });

    $('.totalPrice').find('.check_Box_Content > input[type=checkbox]').change(function () {
        if ($(this).is(':checked')) {
            $(this).parents('.totalPrice').find('input[type=button]').removeAttr('disabled');
        } else {
            $(this).parents('.totalPrice').find('input[type=button]').attr('disabled', 'true');
        }
    });
    
	$('.steps_Container a').click(function(){
		$('.steps_Container a.active').removeClass('active');
		$(this).addClass('active');
	});
	
	
 });




 function the_map() {
    
        if($(window).width() > 767){
            var mapHeight = $(window).height() - (198);//footer height 124 + header heigh 74
            if(mapHeight > 400){
                $('#the_map').css('height',mapHeight);
            }
        }
 
        var myLatLng = {lat: 31.9710975, lng:  35.8409157};
        
        var iconBase = './images/map-icons/';
        var icons = {
          truck: {
            icon: iconBase + 'truck.png'
          },
          marker: {
            icon: iconBase + 'marker.png'
          }
        };
         var features = [
          {
            position: new google.maps.LatLng(31.884768, 35.8702973),
            type: 'truck',
            content:'hello bbb'
          }, {
            position: new google.maps.LatLng(31.9710975, 35.8409157),
            type: 'marker',
            content:'hello bbb'
          }];
    
          
        var map = new google.maps.Map(document.getElementById('the_map'), {
          zoom: 10,
          center: myLatLng,
          mapTypeId: 'roadmap',
        
        });
         
        function addMarker(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        }
        
        function addInfoWindow(feature) {
          var infowindow = new google.maps.InfoWindow({
                content: feature.content
            });
        }
        
        for (var i = 0, feature; feature = features[i]; i++) {
          addMarker(feature);
          addInfoWindow(feature);
            google.maps.event.addListener(feature, 'click', function () {
// where I have added .html to the marker object.
infowindow.setContent(this.html);
infowindow.open(map, this);
});
        }
        
 
        
    
      var line = new google.maps.Polyline({
            path: [new google.maps.LatLng(31.884768, 35.8702973), new google.maps.LatLng(31.9710975, 35.8409157)],
            strokeColor: "#29b99c",
            strokeOpacity: 1.0,
            strokeWeight: 6,
            geodesic: true,
            map: map
        });
 
            
 
} 
 
 
var header = $(".fixed_header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 32) {
            header.addClass('NuntTransperant');
        } else {
			header.removeClass('NuntTransperant');
        }
    });
	
function hideTowingPopup(){
    $('.full__fader').fadeOut(400);
    $('#towing-popup').fadeOut(500);
}
 
function showTowingPopup(){
    $('.full__fader').fadeIn(400);
    $('#towing-popup').fadeIn(500);
}
 
function hideRatingPopup(){
    $('.full__fader').fadeOut(400);
    $('#rating-popup').fadeOut(500);
}
 
function showRatingPopup(){
    $('.full__fader').fadeIn(400);
    $('#rating-popup').fadeIn(500);
}
 
 
function hideChoseCar(){
    $('.full__fader').fadeOut(400);
    $('#chose-car').fadeOut(500);
}
 
function showChoseCar(){
    $('.full__fader').fadeIn(400);
    $('#chose-car').fadeIn(500);
}
 
$('.closePopup .close').click(function () {
    $('.full__fader').fadeOut(400);
    $('.map-notification.with-fade').each(function () {
        $(this).fadeOut();
    });

});
    $('.full__fader').click(function () {
        $('.map-notification.with-fade').each(function () {
            $(this).fadeOut();

        });
        $(this).fadeOut();
    });
function toggleMobileMenu() {
    $(".hide_Mobile_Menu").slideToggle("slow", function () {
        // Animation complete.
    });
}

//make heights fixed in rows
function setHeight(el) {
    $.fn.matchHeight._maintainScroll = true; //this is to stop jumping to top from hight plugin add by soos
    if ($(window).width() > 767) {
        $(el).matchHeight(
        {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
    }

}
$(window).load(function () {
    /**
        DESC: fixed colums equals height in detail page
    **/
    setHeight($('.winch_Team_container .SingleWinchCard,.driver_Team_container .SingleWinchCard'));
	/** 
		fixing the footer position in small screens
	**/
	if($(window).width() > 767){
        var fHeight = $(window).height() - (198);//footer height 124 + header heigh 74
			if($('.content-container').height() < fHeight){
				$('.content-container-fixed-footer-at-bottom').css('min-height',fHeight);
			}
        }
		
});

function initializeTabs() {
    if ($(".tab_and_child_Container").length > 0) {
        $(".tab_and_child_Container .switch_Container").find("input[type=radio]").bind("click", function () {
            //if ($(this).is(':checked')) { }
            $(this).parents(".tab_and_child_Container").find(".tab_Content_Container>.active").hide().removeClass("active");
            $(this).parents(".tab_and_child_Container").find(".tab_Content_Container>div[data-to-show=" + $(this).attr("data-to-show") + "]").fadeIn(function () { tabsChanges_slider_initialize();}).addClass("active");
            
        });
    }
}


//owl slider modifid functions
$.fn.distroyOwelSlider = function () {
	
    if ($(this).hasClass("owl-carousel")) {
        if($(this).is(":visible")){
    $(this).data('owlCarousel').destroy()
    $(this).removeClass('owl-carousel owl-loaded');
    $(this).find('.owl-stage-outer').children().unwrap();
        }
    }
}

$.fn.AddCardSlider = function (html, appendBefor, CallBackFunction) {
    
    $(this).distroyOwelSlider();
    if (appendBefor != "") {
        $("." + appendBefor).before(html)
    }
    else{
        $(this).append(html)
    }
    if (typeof CallBackFunction == "function") { CallBackFunction() };
    
}

$.fn.RemoveCardSlider = function (className, CallBackFunction) {
    $(this).bind("click", function () {
		
	$(this).parents(".owl-carousel").addClass("tempInitialize")
    $(".tempInitialize").distroyOwelSlider();
    $(this).parents("." + className).remove();
    if (className == "single_Card")
    { getTotalPrive(); }
    if ($(".tempInitialize").find("." + className).length > 0) {
        if (typeof CallBackFunction == "function") { CallBackFunction() };
        //$(".tempInitialize").initializeSliderCard();
    }
    else {
        $(".tempInitialize").parent().find(".viweAllLink").remove();
    }
	$(".tempInitialize").removeClass("tempInitialize");
	

    });
}

$.fn.initializeSliderCard = function () {
    if ($(this).is(":visible")) { 
    if ($(this).find(".single_Card").length == 0) { return false;}
    $(this).owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        navText: '',
        autoplay: false,
        pagination:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    if ($(this).find(".owl-dot").length <= 1) {
        $(this).find(".owl-nav").hide();
    }
    var obj = $(this);
    $(this).find(".trans_btn").each(function () { $(this).unbind(); $(this).RemoveCardSlider("single_Card", function () { obj.initializeSliderCard() }); })
    }
}
$.fn.initializeSliderSingle = function (cardToRemoveName,linkForall) {
    if ($(this).is(":visible")) {
        if ($(this).find("." + cardToRemoveName).length == 0) { return false; }
        if ($(this).parent().find(".viweAllLink").length == 0) { $(this).after('<div class="viweAllLink"><a href="' + linkForall + '" >VIEW ALL</a></div>') }
        $(this).owlCarousel({
            loop: false,
            margin: 30,
            nav: true,
            navText: '',
            autoplay: false,
            pagination: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
        if ($(this).find(".owl-dot").length <= 1) {
            $(this).find(".owl-nav").hide();
        }
        var obj = $(this);
        $(this).find(".trans_btn").each(function () { $(this).unbind(); $(this).RemoveCardSlider("SingleWinchCard", function () { obj.initializeSliderSingle("SingleWinchCard","#") }); })
    }
}
//owl slider modifid functions

function initializeSliderClick() {

    $(".Cards_slider").initializeSliderCard();
    $(".winchSider").initializeSliderSingle("SingleWinchCard", "#");
    $(".driverSider").initializeSliderSingle("SingleWinchCard", "#");
}

function getTotalPrive() {
    if ($(".Price_Tag_containr").length>0){
    var TotalPrice = 0;
    $(".Price_Tag_containr").each(function () {
        if ($(this).parents(".totalPrice").length == 0) {
            TotalPrice = TotalPrice + parseInt($(this).html())
        }
        $(".totalPrice").find(".Price_Tag_containr").html(TotalPrice);
    });
    $(".totalPrice").find(".Price_Tag_containr").html(TotalPrice);
    }
}

/*Big Card slider*/
function AddCardToSlider()
{
    $(".Cards_slider").AddCardSlider('<div class="single_Card"><div class="image"><div><img src="./images/kia.png" alt="" /></div></div><div class="cards_Info_Container"><div class="Price_Tag_containr" >150</div><div class="card_car_info" ><ul><li><ul><li>KIA</li><li>Optima</li><li>black</li><li>2016</li></ul></li><li>Fuel type</li><li>Plate number</li></ul></div><input type="button" class="btn dflt_btn trans_btn" value="REMOVE"></div></div>', "", function () { $(".Cards_slider").initializeSliderCard() })
    getTotalPrive();
}

function AddWinchToSlider() {
    $(".winchSider").AddCardSlider('<div class="SingleWinchCard text-center"><div class="PlateNumber_container" ><div>000000</div><span>plate number</span></div><div class="links_container" ><ul><li><a href="#" target="_blank" >insurance image</a></li><li><a href="#" target="_blank">licen imagae</a></li><li><a href="#" target="_blank">winch images</a></li></ul></div><input type="button" class="btn dflt_btn trans_btn" value="REMOVE"></div>', "", function () { $(".winchSider").initializeSliderSingle("SingleWinchCard", "#") })
}

function AddDriverToSlider() {
    $(".driverSider").AddCardSlider('<div class="SingleWinchCard text-center changCardBG"><div class="PlateNumber_container" ><div>000000</div><span>Driver ID</span></div><div class="links_container" ><ul><li><a href="#" target="_blank" >full name</a></li><li><a href="#" target="_blank">Phone number</a></li><li><a href="#" target="_blank">driver images</a></li></ul></div><input type="button" class="btn dflt_btn trans_btn" value="REMOVE"></div>', "", function () { $(".driverSider").initializeSliderSingle("SingleWinchCard", "#") })
}

/*end Big Card slider*/



/*input file js*/

$.fn.initializeUpload = function () {
    var obj=$(this)
    obj.popover({
        trigger: 'manual',
        html: true,
        title: "<strong>Preview</strong>",
        content: "There's no image",
        placement: 'bottom'
    });
    // Create the preview image
    obj.find(".image-preview-input input:file").change(function () {
        var img = $('<img/>', {
            id: 'dynamic',
            width: 250,
            height: 200
        });
        var file = this.files[0];
        var reader = new FileReader();
        // Set preview image into the popover data-content
        reader.onload = function (e) {
            obj.find(".image-preview-input-title").text("");
            obj.find(".image-preview-clear").show();
            obj.find(".image-preview-filename").val(file.name);
            img.attr('src', e.target.result);
            obj.attr("data-content", $(img)[0].outerHTML).popover("show");
        }
        reader.readAsDataURL(file);
    });


    obj.popover('hide');
    // Hover befor close the preview
    obj.hover(
        function () {
            obj.popover('show');
        },
         function () {
             obj.popover('hide');
         }
    );
}
function initializeInputFile() {
    $(".image-preview").initializeUpload()
    $(".image-preview2").initializeUpload()
    $(".image-preview3").initializeUpload()

}

/*end input file js*/


function tabsChanges_slider_initialize()
{
    $(".owl-carousel").distroyOwelSlider()
    initializeSliderClick()
}






/*color picker js*/
function clickColor(hex, top, left) {
    console.log(hex)
	 $(".carLogo_container > div > .after").css("background", hex);
	 $(".carLogo_container > div > .before").css("background", hex);
    $("#selectedhexagon").css("top", top);
    $("#selectedhexagon").css("left", left);
}

function mouseOverColor(hex) {

}
/*End color picker js*/

/*table js*/
function initialzeTable() {
    $('.filterable .btn-filter').click(function () {
        //$(this).html("SAVE CHANGES")
        //var $panel = $(this).parents('.filterable'),
        //$filters = $panel.find('.editables input'),
        //$tbody = $panel.find('.table tbody');
        /*if ($filters.prop('disabled') == true) {
            $filters.prop('disabled', false);
            $filters.first().focus();
        } else {
            $(this).html("CHANGE RATING")
            $filters.prop('disabled', true);
            $tbody.find('.no-result').remove();
            $tbody.find('tr').show();
        }*/
    });

    $('.filterable .editables input').keyup(function (e) {
        ///* Ignore tab key */
        //var code = e.keyCode || e.which;
        //if (code == '9') return;
        ///* Useful DOM data and selectors */
        //var $input = $(this),
        //inputContent = $input.val().toLowerCase(),
        //$panel = $input.parents('.filterable'),
        //column = $panel.find('.filters th').index($input.parents('th')),
        //$table = $panel.find('.table'),
        //$rows = $table.find('tbody tr');
        ///* Dirtiest filter function ever ;) */
        //var $filteredRows = $rows.filter(function () {
        //    var value = $(this).find('td').eq(column).text().toLowerCase();
        //    return value.indexOf(inputContent) === -1;
        //});
        ///* Clean previous no-result if exist */
        //$table.find('tbody .no-result').remove();
        ///* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
        //$rows.show();
        //$filteredRows.hide();
        ///* Prepend no-result row if all rows are filtered */
        //if ($filteredRows.length === $rows.length) {
        //    $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="' + $table.find('.filters th').length + '">No result found</td></tr>'));
        //}
    });
}
/*end table js*/


/*home services funcions*/
function changeServiceStatus() {
    if ($(".imageHolder").length > 0) { 
        $(".imageHolder").click(function () { $(this).toggleClass("activeIcon"); })
    }
}

function removeCard(obj) {
    $(obj).parents(".col-lg-3").remove();
}


// mobile menu slide from the left
var isPadding = false;
$('.fixed_header [data-toggle="slide-collapse"]').on('click', function() {
    //$navMenuCont = $($(this).data('target'));
    
	//$('div#bs-example-navbar-collapse-1').animate({'width':'toggle'}, 200);
	$('div#bs-example-navbar-collapse-1').toggleClass("openMenu")
	
	if(!isPadding){
	//$('body').animate({'margin-left':'240'},160);
	isPadding = true;
	}else{
		//$('body').animate({'margin-left':'0'},160);
		isPadding = false;
	}
});


function showProfileForm(){
	$('.updates-profile-info .info-show').fadeOut(200);
	$('.updates-profile-info input').fadeIn(400);
	$('.updates-profile-info .close-form').fadeIn(400);
}

function hideProfileForm(){
	$('.updates-profile-info .info-show').fadeIn(400);
	$('.updates-profile-info input').fadeOut(200);
	$('.updates-profile-info .close-form').fadeOut(200);
}






