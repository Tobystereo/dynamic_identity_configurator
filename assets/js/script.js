var threshold = .2;
var saturation = '75';
var lightness = '70';
var textcolor = '#000';
var alpha = 1;

window.onload = function() {
	setThreshold();
	updateSaturation();
	updateLightness();
	updateSVG();
	setBackgroundColor();
	setTextColor();

	$(':input').each(function() {
		var currentvalue = $(this).val();
		$(this).attr('data-value', currentvalue);
	});

	sizeSVG();
}

window.onresize = sizeSVG;

function sizeSVG() {
	var svg_height = window.innerHeight-100;
	var svg_width = svg_height / 1.414285714;
	$('.svg-wrap').attr('style', 'width: ' + svg_width + 'px; height: ' + svg_height + 'px');
}

if(typeof escapeHtmlEntities == 'undefined') {
    escapeHtmlEntities = function (text) {
        return text.replace(/[\u00A0-\u2666<>\&]/g, function(c) {
        	var unicode = '&#x' + c.charCodeAt(0) + ';';
        	return unicode;
        });
    };
}


// render the image in our view
function renderImage(file) {

  // generate a new FileReader object
  var reader = new FileReader();

  // inject an image with the src url
  reader.onload = function(event) {
    the_url = event.target.result

    var svgWidth = 595.3;
    var svgHeight = 841.9;
    var svgAspectRatio = svgWidth/svgHeight;

    $('.backgroundimagecontainer').html("<img src='" + the_url + "' class='backgroundimage'/>");

    var imgWidth = $('.backgroundimage').width();
    var imgHeight = $('.backgroundimage').height();

    var imageLength = 100;
    var xOffset = 0;
    var yOffset = 0;
    var newImageWidth, newImageHeight;
    
    var imgAspectRatio = imgWidth / imgHeight;

    $('svg #background_image').attr('xlink:href', '');

    if(imgWidth > imgHeight) {
    	newImageWidth = svgHeight * imgAspectRatio;
    	newImageHeight = svgHeight;
    	$('svg #background_image').attr('xlink:href', the_url).attr('width', newImageWidth).attr('height', newImageHeight);
    } else {
    	if(imgAspectRatio > svgAspectRatio) {
	    	newImageWidth = svgHeight * imgAspectRatio;
	    	newImageHeight = svgHeight;
    	} else {
	    	newImageWidth = svgWidth;
	    	newImageHeight = svgWidth / imgAspectRatio;
    	}
    	
    	$('svg #background_image').attr('xlink:href', the_url).attr('width', newImageWidth).attr('height', newImageHeight);
    }

    // $('svg #background_image').attr('xlink:href', the_url).attr('x', xOffset).attr('y', yOffset).attr('width', imageLength).attr('height', imageLength);
  }
 
  // when the file is read it triggers the onload event above.
  reader.readAsDataURL(file);
}
 
// handle input changes
$("#the-file-input").change(function() {
    console.log(this.files)
    
    // grab the first image in the FileList object and pass it to the function
    renderImage(this.files[0])
});

$('.update').click(function(){
	setThreshold();
	setSaturation();
	setLightness();
	setAlpha();
	updateSVG();
});

$('.saturationslider').change(function() {
	updateDynamicColorRange();
});

$('.lightnessslider').change(function() {
	updateDynamicColorRange();
});

$('.alphaslider').change(function() {
	updateDynamicColorRange();
	setAlpha();
});

function updateDynamicColorRange() {
	var saturation = $('.saturationslider').val();
	var lightness = $('.lightnessslider').val();
	var alpha = $('.alphaslider').val();
	var css = "linear-gradient(to right, hsla(0, " + saturation + "%, " + lightness + "%, " + alpha + ") 0%, hsla(60, " + saturation + "%, " + lightness + "%, " + alpha + ") 16%, hsla(120, " + saturation + "%, " + lightness + "%, " + alpha + ") 32%, hsla(180, " + saturation + "%, " + lightness + "%, " + alpha + ") 50%, hsla(240, " + saturation + "%, " + lightness + "%, " + alpha + ") 68%, hsla(300, " + saturation + "%, " + lightness + "%, " + alpha + ") 84%, hsla(360, " + saturation + "%, " + lightness + "%, " + alpha + ") 100%);";
	console.log(css);
	$('.colorrange_dynamic').attr('style', 'background: ' + css);
}

function randomSVGElement(required) {
	if(required == "required") {
		fill = textcolor;
	} else {
		var hue_min = $('.hue_min').val();
		var hue_max = $('.hue_max').val();
		var random = Math.random();
		var hue = randomhue(hue_min, hue_max);
		var color = 'hsl(' + Math.round(hue) + ', '+ saturation +'%, '+ lightness +'%)';
		color = chroma(color).hex();
		var fill = '';

		if(random < threshold) {
			fill = color;
		} else {
			fill = 'none';
		}
	}
	return fill;
}

function updateSVG() {

	$('svg circle').each(function() {
		var fill = randomSVGElement();
		$(this).attr('fill', fill);
		$(this).attr('fill-opacity', alpha);
	});

	$('svg path').each(function() {
		var fill = randomSVGElement();
		$(this).attr('fill', fill);
		$(this).attr('fill-opacity', alpha);
	});

	$('svg rect').each(function() {
		var fill = randomSVGElement();
		$(this).attr('fill', fill);
		$(this).attr('fill-opacity', alpha);
	});

	$('svg polygon').each(function() {
		var fill = randomSVGElement();
		$(this).attr('fill', fill);
		$(this).attr('fill-opacity', alpha);
	});

	$('svg #Logo *').each(function() {
		var fill = randomSVGElement("required");
		$(this).attr('fill', fill);
		$(this).attr('fill-opacity', alpha);
	});

	setBackgroundColor();
	setTextColor();
}

$('.thresholdslider').change(function() {
	var threshold_value = $(this).val();
	setThresholdToValue(threshold_value);
});

$('.text_color').change(function() {
	setTextColor();
});

function setTextColor() {
	var text_hue = $('.text_hue').val();
	var text_saturation = $('.text_saturation').val();
	var text_lightness = $('.text_lightness').val();
	var text_alpha = $('.text_alpha').val();
	var text_color = 'hsla(' + text_hue + ', '+ text_saturation +'%, '+ text_lightness +'%, ' + text_alpha + ')';
	$('.text_color_preview').css('background-color', text_color);

	text_color = 'hsl(' + text_hue + ', '+ text_saturation +'%, '+ text_lightness +'%)';
	text_color = chroma(text_color).hex();

	$('svg text').each(function() {
		$(this).attr('fill', text_color).attr('fill-opacity', text_alpha);
	});

	$('svg #Logo *').each(function() {
		$(this).attr('fill', text_color).attr('fill-opacity', text_alpha);
	});
}

$('.bg_color').change(function() {
	setBackgroundColor();
});

function setBackgroundColor() {
	var bg_hue = $('.bg_hue').val();
	var bg_saturation = $('.bg_saturation').val();
	var bg_lightness = $('.bg_lightness').val();
	var bg_alpha = $('.bg_alpha').val();
	var bg_color = 'hsla(' + bg_hue + ', '+ bg_saturation +'%, '+ bg_lightness +'%, ' + bg_alpha + ')';
	$('.bg_color_preview').css('background-color', bg_color);

	bg_color = 'hsl(' + bg_hue + ', '+ bg_saturation +'%, '+ bg_lightness +'%)';
	bg_color = chroma(bg_color).hex();
	$('svg #svg_x5F_background').attr('fill', bg_color).attr('fill-opacity', bg_alpha);
}

$('.bgimg_opacity').change(function() {
	var bgimg_opacity = $('.bgimg_opacity').val();
	$('.backgroundimage').css('opacity', bgimg_opacity);
	$('svg #background_image').attr('opacity', bgimg_opacity);
});

$('.text').change(function(){
	updateText();
});

function updateText(unicode) {
	var headline_line1 = $('.headline_line1').val();
	var headline_line2 = $('.headline_line2').val();
	var headline_line3 = $('.headline_line3').val();
	var headline_line4 = $('.headline_line4').val();

	var subtitle_line1 = $('.subtitle_line1').val();
	var subtitle_line2 = $('.subtitle_line2').val();

	var description_line1 = $('.description_line1').val();
	var description_line2 = $('.description_line2').val();
	var description_line3 = $('.description_line3').val();

	if(unicode) {
		headline_line1 = escapeHtmlEntities (headline_line1);
		headline_line2 = escapeHtmlEntities (headline_line2);
		headline_line3 = escapeHtmlEntities (headline_line3);
		headline_line4 = escapeHtmlEntities (headline_line4);

		subtitle_line1 = escapeHtmlEntities (subtitle_line1);
		subtitle_line2 = escapeHtmlEntities (subtitle_line2);

		description_line1 = escapeHtmlEntities (description_line1);
		description_line2 = escapeHtmlEntities (description_line2);
		description_line3 = escapeHtmlEntities (description_line3);
	}
	
	$('svg #text_x5F_headline tspan:nth-of-type(1)').text(headline_line1);
	$('svg #text_x5F_headline tspan:nth-of-type(2)').text(headline_line2);
	$('svg #text_x5F_headline tspan:nth-of-type(3)').text(headline_line3);
	$('svg #text_x5F_headline tspan:nth-of-type(4)').text(headline_line4);
	
	$('svg #text_x5F_subtitle tspan:nth-of-type(1)').text(subtitle_line1);
	$('svg #text_x5F_subtitle tspan:nth-of-type(2)').text(subtitle_line2);
	
	$('svg #text_x5F_description tspan:nth-of-type(1)').text(description_line1);
	$('svg #text_x5F_description tspan:nth-of-type(2)').text(description_line2);
	$('svg #text_x5F_description tspan:nth-of-type(3)').text(description_line3);
}

$(':input').change(function() {
	var currentvalue = $(this).val();
	$(this).attr('data-value', currentvalue);
});
	
function setThreshold() {
	$('.threshold').val(threshold);
}

function setThresholdToValue(threshold_value) {
	threshold = threshold_value;
}

function refreshThreshold() {
	threshold = $('.threshold').val();
}

function setSaturation(value) {
	if(value) {
		saturation = value;	
	} else {
		saturation = $('.saturationslider').val();
	}
	
}

function updateSaturation(value) {
	if(value) {
		$('.saturationslider').val(value);	
	} else {
		value = saturation;
		$('.saturationslider').val(value);	
	}
	
}

function setLightness(value) {
	if(value) {
		lightness = value;	
	} else {
		lightness = $('.lightnessslider').val();
	}
	
}

function updateLightness(value) {
	if(value) {
		$('.lightnessslider').val(value);	
	} else {
		value = saturation;
		$('.lightnessslider').val(value);	
	}
}

function setAlpha(value) {
	if(value) {
		alpha = value;	
	} else {
		alpha = $('.alphaslider').val();
	}
	
}

function randomhue() {
	var hue_min = $('.hue_min').val();
	var hue_max = $('.hue_max').val();

	hue_min = parseFloat(hue_min);
	hue_max = parseFloat(hue_max);
	if(hue_max > hue_min) {
		var hue_range = hue_max - hue_min;	
		var hue_value = hue_min + (hue_range * Math.random());
	} else {
		var hue_range = hue_min - hue_max;	
		var hue_value = hue_max + (hue_range * Math.random());
	}	
	
	return hue_value;	
	
}

$('.download').click(function() {

	updateText(true);

	var html = d3.select("svg#Layer_1")
        .attr("title", "test2")
        .attr("version", 1.1)
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;
	d3.select(".resultscontainer").append("div")
	        .attr("class", "download")
	        .append("img")
	        .attr("src", "data:image/svg+xml;base64,"+ btoa(html))
	        .attr("width", "210")
	        .attr("height", "297");

	updateText();
});

// Interaction.JS

// target elements with the "draggable" class

function removeDragging() {
	var activeElements = document.getElementsByClassName('dragging');
	for(i=0;i<activeElements.length;i++){
		activeElements[i].classList.remove('dragging');
	}
}

$('svg *').mousedown(function(evt) {

	var el = evt.target;
	var isDraggable = el.classList.contains('draggable');
	var firstParentIsDraggable = el.parentNode.classList.contains('draggable');
	var secondParentIsDraggable = el.parentNode.parentNode.classList.contains('draggable');
	removeDragging();	

	if(isDraggable) {
		var el = evt.target;
		el.classList.add('dragging');

		moveElement(evt, 0);
	} else if (firstParentIsDraggable) {
		var el = evt.target;
		var firstparent = el.parentNode;
		firstparent.classList.add('dragging');
		moveElement(evt, 1);
	} else if (secondParentIsDraggable) {
		var el = evt.target;
		var firstparent = el.parentNode;
		var secondparent = firstparent.parentNode;
		secondparent.classList.add('dragging');
		moveElement(evt, 2);
	}

	dx = evt.clientX - currentX;
	dy = evt.clientY - currentY;
	currentMatrix[4] += dx;
	currentMatrix[5] += dy;
	newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
	        
	selectedElement.setAttributeNS(null, "transform", newMatrix);
	currentX = evt.clientX;
	currentY = evt.clientY;
});

$(window).mouseup(function() {
	removeDragging();	
});



// $('svg .draggable').mousedown(function(evt) {
// 	removeDragging();

// 	var el = evt.target;
// 	var firstparent = el.parentNode;
// 	var parent = firstparent.parentNode;
// 	parent.classList.add('dragging');

	
// 	selectElement(evt);
// 	// console.log(event);
// 	// moveElement(evt);
// });

// $('window').mousemove(function(){
// 	var el = $('.dragging');
// 	moveElement(el);
// });

// $('svg .draggable').mouseup(function(event) {
// 	$('this').removeClass('dragging');
// 	deselectElement(event);
// });

var selectedElement = 0;
var currentX = 0;
var currentY = 0;
var currentMatrix = 0;

function selectElement(evt) {
	selectedElement = evt.target;
	selectedElement = selectedElement.parentNode;
	selectedElement = selectedElement.parentNode;
	evt.preventDefault();
	currentX = evt.clientX;
	currentY = evt.clientY;
	currentMatrix = selectedElement.getAttributeNS(null, "transform").slice(7,-1).split(' ');

	for(var i=0; i<currentMatrix.length; i++) {
		currentMatrix[i] = parseFloat(currentMatrix[i]);
	}

	selectedElement.setAttributeNS(null, "onmousemove", "moveElement(evt)");
	
	selectedElement.setAttributeNS(null, "onmouseout", "deselectElement(evt)");
	selectedElement.setAttributeNS(null, "onmouseup", "deselectElement(evt)");	
}

function moveElement(evt, parent){
	switch(evt) {
		case 1:
			evt = evt.parentNode;
			break;
		case 2:
			evt = evt.parentNode
			evt = evt.parentNode;
			break;
		default: 
			evt = evt;
			break;
	}
	dx = evt.clientX - currentX;
	dy = evt.clientY - currentY;
	currentMatrix[4] += dx;
	currentMatrix[5] += dy;
	newMatrix = "matrix(" + currentMatrix.join(' ') + ")";
	        
	selectedElement.setAttributeNS(null, "transform", newMatrix);
	currentX = evt.clientX;
	currentY = evt.clientY;
  
}

function deselectElement(evt){
  if(selectedElement != 0){
    selectedElement.removeAttributeNS(null, "onmousemove");
    // selectedElement.removeAttributeNS(null, "onmouseout");
    selectedElement.removeAttributeNS(null, "onmouseup");
    selectedElement = 0;
  }
}