function setup(){sizeSVG(),setThreshold(),updateSaturation(),updateLightness(),updateSVG(),setBackgroundColor(),updateTextColor(),$(":input").each(function(){var t=$(this).val();$(this).attr("data-value",t)}),makeTextEditable()}function makeTextEditable(){$(".text_container").empty();var t=$("svg text"),a=t.length,e=0;$("svg text").each(function(){var t=$(this).find("tspan").attr("font-size"),a=$(this).find("tspan:nth-of-type(2)").attr("y");null==a&&(a=1.5*t);var i=$(this).find("tspan").attr("font-family"),o=$(this).find("tspan").attr("font-style"),l=$(this).attr("transform");l=l.split(" ");var n=l[4].replace(/[^\w\s\.]/gi,""),r=l[5].replace(/[^\w\s\.]/gi,""),s="dynamicText_"+e;$(this).attr("class",s);var d="dynamicTextSource_"+e;$(".text_container").append('<div class="'+d+' textelement" data-target="'+s+'"></div>'),$("."+d).append("<p><strong>Text "+(e+1)+" Color</strong></p>"),$("."+d).append('<textarea class="text dynamicTextSourceInput_'+e+'" data-target="'+s+'" onkeyup="writeText();" data-numElement="'+e+'"></textarea>'),$("."+d).append('<label for="'+d+'_fontsize">Font Size: </label><input type="number" name="" class="fontsize" id="'+d+'_fontsize" value="'+t+'" onchange="writeText();"><br><br>'),$("."+d).append('<label for="'+d+'_lineheight">Line Height: </label><input type="number" name="" class="lineheight" id="'+d+'_lineheight" value="'+a+'" onchange="writeText();"><br><br>'),$("."+d).append('<label for="'+d+'_lineheight">Font Family: </label><select class="fontfamily" name="" id="'+d+'_fontfamily" onchange="writeText();"><option value="'+i+'">Default: '+i+'</option><option value="\'Futura-Medium\'">\'Futura-Medium\'</option><option value="\'AbrilFatface-Regular\'">AbrilFatface</option><option value="Georgia">Georgia</option><option value="GloberThin">Glober Thin</option><option value="GloberLight">Glober Light</option><option value="GloberBook">Glober Book</option><option value="Glober">Glober</option><option value="GloberSemiBold">Glober SemiBold</option><option value="GloberBold">Glober Bold</option><option value="GloberXBold">Glober xBold</option><option value="GloberHeavy">Glober Heavy</option><option value="GloberBlack">Glober Black</option></select><br><br>'),$("."+d).append('<label for="'+d+'_fontstyle">Font Style: </label><select class="fontstyle" name="" id="'+d+'_fontstyle" onchange="writeText();"><option value="'+o+'">Default: '+o+'</option><option value="normal">Normal</option><option value="italic">Italic</option></select><br><br>'),$("."+d).append('<label for="'+d+'_xPos">X Positioning: </label><input type="range" min="0" max="'+svgWidth+'" step="1" data-value="" name="" class="xpositioning" id="'+d+'_xpositioning" value="'+n+'" onmousemove="updateRangeValue(); positionTextInSVG();"><br><br>'),$("."+d).append('<label for="'+d+'_xPos">Y Positioning: </label><input type="range" min="0" max="'+svgHeight+'" step="1" data-value="" name="" class="ypositioning" id="'+d+'_ypositioning" value="'+r+'" onmousemove="updateRangeValue(); positionTextInSVG();"><br><br>'),$("."+d).append('<label>Hue</label><br><div class="text_color_preview"></div><div class="colorrange" id="'+d+'_xPos"></div>'),$("."+d).append('<input type="range" min="0" max="360" value="0" step="1" class="text_hue text_color '+d+'_text_hue" data-value="" onmousemove="updateRangeValue(); updateTextColor();"><br>'),$("."+d).append("<label>Saturation</label><br>"),$("."+d).append('<input type="range" min="0" max="100" value="100" step="1" class="text_saturation text_color '+d+'_text_saturation" data-value="" onmousemove="updateRangeValue(); updateTextColor();"><br>'),$("."+d).append("<label>Lightness</label><br>"),$("."+d).append('<input type="range" min="0" max="100" value="0" step="1" class="text_lightness text_color '+d+'_text_lightness" data-value="" onmousemove="updateRangeValue(); updateTextColor();"><br>'),$("."+d).append("<label>Alpha</label><br>"),$("."+d).append('<input type="range" min="0" max="1" value="1" step="0.05" class="text_alpha text_color '+d+'_text_alpha" data-value="" onmousemove="updateRangeValue(); updateTextColor();"><br>'),$(".text_container").append("<hr>"),$(this).find("tspan").each(function(){var t=$(this).text();$(".dynamicTextSourceInput_"+e).append(t+"\n")}),e++})}function updateTextColor(){$(".textelement").each(function(){var t=$(this).find(".text_hue").val(),a=$(this).find(".text_saturation").val(),e=$(this).find(".text_lightness").val(),i=$(this).find(".text_alpha").val(),o="hsla("+t+", "+a+"%, "+e+"%, "+i+")";$(this).find(".text_color_preview").css("background-color",o);var l=$(this).attr("data-target");o="hsl("+t+", "+a+"%, "+e+"%)",o=chroma(o).hex(),$("svg text."+l).attr("fill",o).attr("fill-opacity",i);var n=$(".logo_hue").val(),r=$(".logo_saturation").val(),s=$(".logo_lightness").val(),d=$(".logo_alpha").val(),h="hsla("+n+", "+r+"%, "+s+"%, "+d+")";$(".logo_color_preview").css("background-color",h),$("svg #Logo *").each(function(){$(this).attr("fill",h).attr("fill-opacity",d)})}),updateLogoColor()}function updateLogoColor(){var t=$(".logo_hue").val(),a=$(".logo_saturation").val(),e=$(".logo_lightness").val(),i=$(".logo_alpha").val(),o="hsla("+t+", "+a+"%, "+e+"%, "+i+")";$(".logo_color_preview").css("background-color",o),$("svg #Logo *").each(function(){$(this).attr("fill",o).attr("fill-opacity",i)})}function writeText(){$("textarea.text").each(function(){var t=$(this).attr("data-numElement"),a="dynamicTextSource_"+t,e=$(this).attr("data-target"),i=$("#"+a+"_fontsize").val(),o=$("#"+a+"_lineheight").val(),l=$("#"+a+"_fontfamily").val(),n=$("#"+a+"_fontstyle").val(),r=$(this).val().split("\n");$("svg ."+e).find("tspan").remove();for(var s=0;s<r.length;s++){var d=o*s,h=document.createElementNS("http://www.w3.org/2000/svg","tspan"),c=d3.select(h);c.text(r[s]).attr("class",s).attr("x",0).attr("y",d).attr("font-family",l).attr("font-size",i).attr("font-style",n),$("svg ."+e).append(h)}})}function positionTextInSVG(){$("svg text").each(function(){var t=$(this).attr("class");t=t.replace("dynamicText_","");var a=$("#dynamicTextSource_"+t+"_xpositioning").val(),e=$("#dynamicTextSource_"+t+"_ypositioning").val();$(this).attr("transform","matrix(1 0 0 1 "+a+" "+e+")")})}function addTextToSVG(){d3.select("svg").append("g").attr("class","text draggable").append("text").attr("transform","matrix(1 0 0 1 20 40)").append("tspan").text("New Text").attr("class",0).attr("x",0).attr("y",0).attr("font-family",defaultfont).attr("font-size",defaultfontsize),makeTextEditable()}function sizeSVG(){var t=window.innerHeight/100*svgDisplayHeight-100,a=t/svgAspectRatio;$(".svg-wrap").attr("style","width: "+a+"px; height: "+t+"px")}function loadSvg(t){var a=$(".svg-wrap");if("undefined"!=typeof SVGRect){var e=new XMLHttpRequest;e.open("GET",t,!0),e.send(),e.onload=function(t){$(".svg-wrap").html(e.responseText),setup()}}else alert("Sorry, I couldn't load the file, please try a different file.")}function renderImage(t){var a=new FileReader;a.onload=function(t){the_url=t.target.result,svgAspectRatio=svgWidth/svgHeight,$(".backgroundimagecontainer").html("<img src='"+the_url+"' class='backgroundimage'/>");var a=$(".backgroundimage").width(),e=$(".backgroundimage").height(),i=100,o=0,l=0,n,r,s=a/e;$("svg #background_image").attr("xlink:href",""),a>e?(n=svgHeight*s,r=svgHeight,$("svg #background_image").attr("xlink:href",the_url).attr("width",n).attr("height",r)):(s>svgAspectRatio?(n=svgHeight*s,r=svgHeight):(n=svgWidth,r=svgWidth/s),$("svg #background_image").attr("xlink:href",the_url).attr("width",n).attr("height",r)),setBackgroundAlpha(.35)},a.readAsDataURL(t)}function updateDynamicColorRange(){var t=$(".saturationslider").val(),a=$(".lightnessslider").val(),e=$(".alphaslider").val(),i="linear-gradient(to right, hsla(0, "+t+"%, "+a+"%, "+e+") 0%, hsla(60, "+t+"%, "+a+"%, "+e+") 16%, hsla(120, "+t+"%, "+a+"%, "+e+") 32%, hsla(180, "+t+"%, "+a+"%, "+e+") 50%, hsla(240, "+t+"%, "+a+"%, "+e+") 68%, hsla(300, "+t+"%, "+a+"%, "+e+") 84%, hsla(360, "+t+"%, "+a+"%, "+e+") 100%);";$(".colorrange_dynamic").attr("style","background: "+i)}function randomSVGElement(t){var a=randomColor(),e=Math.random();return"required"==t?fill=textcolor:"hidden"==t?fill="none":"visible"==t?fill=a:threshold>e?fill=a:fill="none",fill}function updateSVGColors(){$("svg circle").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor()).attr("fill-opacity",alpha)}),$("svg path").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor()).attr("fill-opacity",alpha)}),$("svg rect").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor()).attr("fill-opacity",alpha)}),$("svg polygon").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor()).attr("fill-opacity",alpha)}),setBackgroundColor(),updateTextColor()}function randomizeSVGColors(){$("svg circle").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor())}),$("svg path").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor())}),$("svg rect").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor())}),$("svg polygon").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor())}),updateTextColor();var t=$("#svg_x5F_background").attr("fill"),a=chroma(t).hsl();$(".bg_hue").attr("value",a[0]).attr("data-value",a[0]),$(".bg_saturation").attr("value",100*a[1]).attr("data-value",100*a[1]),$(".bg_lightness").attr("value",100*a[2]).attr("data-value",100*a[2])}function updateSVG(){$("svg circle").each(function(){if("hidden"==$(this).attr("data-visibility"))var t=randomSVGElement("hidden");else if("visible"==$(this).attr("data-visibility"))var t=randomSVGElement("visible");else var t=randomSVGElement();$(this).attr("fill",t),$(this).attr("fill-opacity",alpha)}),$("svg path").each(function(){if("hidden"==$(this).attr("data-visibility"))var t=randomSVGElement("hidden");else if("visible"==$(this).attr("data-visibility"))var t=randomSVGElement("visible");else var t=randomSVGElement();$(this).attr("fill",t),$(this).attr("fill-opacity",alpha)}),$("svg rect").each(function(){if("hidden"==$(this).attr("data-visibility"))var t=randomSVGElement("hidden");else if("visible"==$(this).attr("data-visibility"))var t=randomSVGElement("visible");else var t=randomSVGElement();$(this).attr("fill",t),$(this).attr("fill-opacity",alpha)}),$("svg polygon").each(function(){if("hidden"==$(this).attr("data-visibility"))var t=randomSVGElement("hidden");else if("visible"==$(this).attr("data-visibility"))var t=randomSVGElement("visible");else var t=randomSVGElement();$(this).attr("fill",t),$(this).attr("fill-opacity",alpha)}),$("svg #Logo *").each(function(){var t=randomSVGElement("required");$(this).attr("fill",t),$(this).attr("fill-opacity",alpha)}),setBackgroundColor(),updateTextColor()}function setBackgroundColor(){var t=$(".bg_hue").val(),a=$(".bg_saturation").val(),e=$(".bg_lightness").val(),i=$(".bg_alpha").val(),o="hsla("+t+", "+a+"%, "+e+"%, "+i+")";$(".bg_color_preview").css("background-color",o),o="hsl("+t+", "+a+"%, "+e+"%)",o=chroma(o).hex(),$("svg #svg_x5F_background").attr("fill",o).attr("fill-opacity",i)}function setBackgroundAlpha(t){$(".bg_alpha").val(t).attr("data-value",t),setBackgroundColor()}function updateRangeValue(){$("[type=range]").each(function(){var t=$(this).val();$(this).attr("data-value",t)})}function setThreshold(){$(".threshold").val(threshold)}function setThresholdToValue(t){threshold=t}function refreshThreshold(){threshold=$(".threshold").val()}function setSaturation(t){saturation=t?t:$(".saturationslider").val()}function updateSaturation(t){t?$(".saturationslider").val(t):(t=saturation,$(".saturationslider").val(t))}function setLightness(t){lightness=t?t:$(".lightnessslider").val()}function updateLightness(t){t?$(".lightnessslider").val(t):(t=saturation,$(".lightnessslider").val(t))}function setAlpha(t){alpha=t?t:$(".alphaslider").val()}function randomhue(){var t=$(".hue_min").val(),a=$(".hue_max").val();if(t=parseFloat(t),a=parseFloat(a),a>t)var e=a-t,i=t+e*Math.random();else var e=t-a,i=a+e*Math.random();return i}function randomColor(){var t=$(".hue_min").val(),a=$(".hue_max").val(),e=randomhue(t,a);lightness=$(".lightnessslider").val(),saturation=$(".saturationslider").val();var i="hsl("+Math.round(e)+", "+saturation+"%, "+lightness+"%)";i=chroma(i).hex();var o="";return i}var threshold=.2,saturation="75",lightness="70",textcolor="#000",alpha=1,svgAspectRatio=1.414285714,svgWidth=595.3,svgHeight=841.9,svgDisplayHeight=100,defaultfont="Futura-Medium",defaultfontsize=20;window.onload=function(){loadSvg("./sources/A4Poster.svg")},window.onresize=sizeSVG,$(".addNewText").click(function(){addTextToSVG()}),$(".choose_format").change(function(){$(".svg-wrap").html("");var t=$(this).attr("data-source");svgWidth=$(this).attr("data-width"),svgHeight=$(this).attr("data-Height"),svgDisplayHeight=$(this).attr("data-display-height"),svgAspectRatio=svgHeight/svgWidth,loadSvg(t)}),$(".applyfilter").click(function(){var t=$(this).attr("data-target");t=$("svg ").find(t),console.log(t);var a=$(this).attr("data-filter");console.log(a),a=this.checked?"url(#"+a+")":"",t.attr("filter",a)}),$("#the-file-input").change(function(){console.log(this.files),renderImage(this.files[0])}),$(".update").click(function(){setThreshold(),setSaturation(),setLightness(),setAlpha(),updateSVG()}),$(":input").mousemove(function(){var t=$(this).val();$(this).attr("data-value",t)}),$(".saturationslider").change(function(){updateDynamicColorRange(),updateSVGColors()}),$(".saturationslider").mousemove(function(){updateDynamicColorRange()}),$(".lightnessslider").change(function(){updateDynamicColorRange(),updateSVGColors()}),$(".lightnessslider").mousemove(function(){updateDynamicColorRange()}),$(".alphaslider").change(function(){updateDynamicColorRange(),setAlpha(),updateSVGColors()}),$(".hue_min").change(function(){updateSVGColors()}),$(".hue_max").change(function(){updateSVGColors()}),$(".refresh_colors").click(function(){updateDynamicColorRange(),updateSVGColors()}),$(".randomize_colors").click(function(){updateDynamicColorRange(),randomizeSVGColors()}),$(".thresholdslider").change(function(){var t=$(this).val();setThresholdToValue(t),updateSVG()}),$(".text_color").change(function(){updateTextColor()}),$(".bg_color").change(function(){setBackgroundColor()}),$("#show_headline_bg").click(function(){var t=$("svg .headline").attr("data-visibility");"hidden"==t?$("svg rect.headline").attr("data-visibility","visible").attr("fill",randomColor).attr("fill-opacity",alpha):$("svg rect.headline").attr("data-visibility","hidden").attr("fill","none")}),$("#show_subtitle_bg").click(function(){var t=$("svg .subtitle").attr("data-visibility");"hidden"==t?$("svg rect.subtitle").attr("data-visibility","visible").attr("fill",randomColor).attr("fill-opacity",alpha):$("svg rect.subtitle").attr("data-visibility","hidden").attr("fill","none")}),$("#show_description_bg").click(function(){var t=$("svg .description").attr("data-visibility");"hidden"==t?$("svg rect.description").attr("data-visibility","visible").attr("fill",randomColor).attr("fill-opacity",alpha):$("svg rect.description").attr("data-visibility","hidden").attr("fill","none")}),$(".download").click(function(){var t=d3.select("svg").attr("title","test2").attr("version",1.1).attr("xmlns","http://www.w3.org/2000/svg").node().parentNode.innerHTML;$("#svgcache").append(t),$("#svgcache svg").attr("id","generatedSVG"),$("#svgcache svg *").each(function(){var t=$(this).attr("fill");console.log(t),"none"==t&&$(this).remove()});var a=d3.select("svg#generatedSVG").attr("title","test2").attr("version",1.1).attr("xmlns","http://www.w3.org/2000/svg").node().parentNode.innerHTML;d3.select(".resultscontainer").append("div").attr("class","download").append("img").attr("src","data:image/svg+xml;base64,"+btoa(a)).attr("width","210").attr("height","297"),$("#svgcache svg").remove(),$(".tab_4").attr("checked","checked")}),$(".bgimg_opacity").change(function(){var t=$(".bgimg_opacity").val();$(".backgroundimage").css("opacity",t),$("svg #background_image").attr("opacity",t)}),$(".text").change(function(){updateText()}),"undefined"==typeof escapeHtmlEntities&&(escapeHtmlEntities=function(t){return t.replace(/[\u00A0-\u2666<>\&]/g,function(t){var a="&#x"+t.charCodeAt(0)+";";return a})});