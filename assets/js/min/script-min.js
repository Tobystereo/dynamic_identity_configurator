function sizeSVG(){var t=window.innerHeight-100,e=t/1.414285714;$(".svg-wrap").attr("style","width: "+e+"px; height: "+t+"px")}function renderImage(t){var e=new FileReader;e.onload=function(t){the_url=t.target.result;var e=595.3,a=841.9,i=e/a;$(".backgroundimagecontainer").html("<img src='"+the_url+"' class='backgroundimage'/>");var n=$(".backgroundimage").width(),l=$(".backgroundimage").height(),r=100,s=0,o=0,c,d,h=n/l;$("svg #background_image").attr("xlink:href",""),n>l?(c=a*h,d=a,$("svg #background_image").attr("xlink:href",the_url).attr("width",c).attr("height",d)):(h>i?(c=a*h,d=a):(c=e,d=e/h),$("svg #background_image").attr("xlink:href",the_url).attr("width",c).attr("height",d))},e.readAsDataURL(t)}function updateDynamicColorRange(){var t=$(".saturationslider").val(),e=$(".lightnessslider").val(),a=$(".alphaslider").val(),i="linear-gradient(to right, hsla(0, "+t+"%, "+e+"%, "+a+") 0%, hsla(60, "+t+"%, "+e+"%, "+a+") 16%, hsla(120, "+t+"%, "+e+"%, "+a+") 32%, hsla(180, "+t+"%, "+e+"%, "+a+") 50%, hsla(240, "+t+"%, "+e+"%, "+a+") 68%, hsla(300, "+t+"%, "+e+"%, "+a+") 84%, hsla(360, "+t+"%, "+e+"%, "+a+") 100%);";$(".colorrange_dynamic").attr("style","background: "+i)}function randomSVGElement(t){var e=randomColor(),a=Math.random();return"required"==t?fill=textcolor:"hidden"==t?fill="none":"visible"==t?fill=e:threshold>a?fill=e:fill="none",fill}function updateSVGColors(){$("svg circle").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor())}),$("svg path").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor())}),$("svg rect").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor())}),$("svg polygon").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor())}),setBackgroundColor(),setTextColor()}function randomizeSVGColors(){$("svg circle").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor())}),$("svg path").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor())}),$("svg rect").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor())}),$("svg polygon").each(function(){var t=$(this).attr("fill");"none"!=t&&$(this).attr("fill",randomColor())}),setTextColor();var t=$("#svg_x5F_background").attr("fill"),e=chroma(t).hsl();$(".bg_hue").attr("value",e[0]).attr("data-value",e[0]),$(".bg_saturation").attr("value",100*e[1]).attr("data-value",100*e[1]),$(".bg_lightness").attr("value",100*e[2]).attr("data-value",100*e[2])}function updateSVG(){$("svg circle").each(function(){if("hidden"==$(this).attr("data-visibility"))var t=randomSVGElement("hidden");else if("visible"==$(this).attr("data-visibility"))var t=randomSVGElement("visible");else var t=randomSVGElement();$(this).attr("fill",t),$(this).attr("fill-opacity",alpha)}),$("svg path").each(function(){if("hidden"==$(this).attr("data-visibility"))var t=randomSVGElement("hidden");else if("visible"==$(this).attr("data-visibility"))var t=randomSVGElement("visible");else var t=randomSVGElement();$(this).attr("fill",t),$(this).attr("fill-opacity",alpha)}),$("svg rect").each(function(){if("hidden"==$(this).attr("data-visibility"))var t=randomSVGElement("hidden");else if("visible"==$(this).attr("data-visibility"))var t=randomSVGElement("visible");else var t=randomSVGElement();$(this).attr("fill",t),$(this).attr("fill-opacity",alpha)}),$("svg polygon").each(function(){if("hidden"==$(this).attr("data-visibility"))var t=randomSVGElement("hidden");else if("visible"==$(this).attr("data-visibility"))var t=randomSVGElement("visible");else var t=randomSVGElement();$(this).attr("fill",t),$(this).attr("fill-opacity",alpha)}),$("svg #Logo *").each(function(){var t=randomSVGElement("required");$(this).attr("fill",t),$(this).attr("fill-opacity",alpha)}),setBackgroundColor(),setTextColor()}function setTextColor(){var t=$(".text_hue").val(),e=$(".text_saturation").val(),a=$(".text_lightness").val(),i=$(".text_alpha").val(),n="hsla("+t+", "+e+"%, "+a+"%, "+i+")";$(".text_color_preview").css("background-color",n),n="hsl("+t+", "+e+"%, "+a+"%)",n=chroma(n).hex(),$("svg text").each(function(){$(this).attr("fill",n).attr("fill-opacity",i)}),$("svg #Logo *").each(function(){$(this).attr("fill",n).attr("fill-opacity",i)})}function setBackgroundColor(){var t=$(".bg_hue").val(),e=$(".bg_saturation").val(),a=$(".bg_lightness").val(),i=$(".bg_alpha").val(),n="hsla("+t+", "+e+"%, "+a+"%, "+i+")";$(".bg_color_preview").css("background-color",n),n="hsl("+t+", "+e+"%, "+a+"%)",n=chroma(n).hex(),$("svg #svg_x5F_background").attr("fill",n).attr("fill-opacity",i)}function updateText(t){var e=$(".headline_line1").val(),a=$(".headline_line2").val(),i=$(".headline_line3").val(),n=$(".headline_line4").val(),l=$(".subtitle_line1").val(),r=$(".subtitle_line2").val(),s=$(".description_line1").val(),o=$(".description_line2").val(),c=$(".description_line3").val();t&&(e=escapeHtmlEntities(e),a=escapeHtmlEntities(a),i=escapeHtmlEntities(i),n=escapeHtmlEntities(n),l=escapeHtmlEntities(l),r=escapeHtmlEntities(r),s=escapeHtmlEntities(s),o=escapeHtmlEntities(o),c=escapeHtmlEntities(c)),$("svg #text_x5F_headline tspan:nth-of-type(1)").text(e),$("svg #text_x5F_headline tspan:nth-of-type(2)").text(a),$("svg #text_x5F_headline tspan:nth-of-type(3)").text(i),$("svg #text_x5F_headline tspan:nth-of-type(4)").text(n),$("svg #text_x5F_subtitle tspan:nth-of-type(1)").text(l),$("svg #text_x5F_subtitle tspan:nth-of-type(2)").text(r),$("svg #text_x5F_description tspan:nth-of-type(1)").text(s),$("svg #text_x5F_description tspan:nth-of-type(2)").text(o),$("svg #text_x5F_description tspan:nth-of-type(3)").text(c)}function setThreshold(){$(".threshold").val(threshold)}function setThresholdToValue(t){threshold=t}function refreshThreshold(){threshold=$(".threshold").val()}function setSaturation(t){saturation=t?t:$(".saturationslider").val()}function updateSaturation(t){t?$(".saturationslider").val(t):(t=saturation,$(".saturationslider").val(t))}function setLightness(t){lightness=t?t:$(".lightnessslider").val()}function updateLightness(t){t?$(".lightnessslider").val(t):(t=saturation,$(".lightnessslider").val(t))}function setAlpha(t){alpha=t?t:$(".alphaslider").val()}function randomhue(){var t=$(".hue_min").val(),e=$(".hue_max").val();if(t=parseFloat(t),e=parseFloat(e),e>t)var a=e-t,i=t+a*Math.random();else var a=t-e,i=e+a*Math.random();return i}function randomColor(){var t=$(".hue_min").val(),e=$(".hue_max").val(),a=randomhue(t,e);lightness=$(".lightnessslider").val(),saturation=$(".saturationslider").val();var i="hsl("+Math.round(a)+", "+saturation+"%, "+lightness+"%)";i=chroma(i).hex();var n="";return i}function removeDragging(){var t=document.getElementsByClassName("dragging");for(i=0;i<t.length;i++)t[i].classList.remove("dragging")}function selectElement(t){selectedElement=t.target,selectedElement=selectedElement.parentNode,selectedElement=selectedElement.parentNode,t.preventDefault(),currentX=t.clientX,currentY=t.clientY,currentMatrix=selectedElement.getAttributeNS(null,"transform").slice(7,-1).split(" ");for(var e=0;e<currentMatrix.length;e++)currentMatrix[e]=parseFloat(currentMatrix[e]);selectedElement.setAttributeNS(null,"onmousemove","moveElement(evt)"),selectedElement.setAttributeNS(null,"onmouseout","deselectElement(evt)"),selectedElement.setAttributeNS(null,"onmouseup","deselectElement(evt)")}function moveElement(t,e){switch(t){case 1:t=t.parentNode;break;case 2:t=t.parentNode,t=t.parentNode;break;default:t=t}dx=t.clientX-currentX,dy=t.clientY-currentY,currentMatrix[4]+=dx,currentMatrix[5]+=dy,newMatrix="matrix("+currentMatrix.join(" ")+")",selectedElement.setAttributeNS(null,"transform",newMatrix),currentX=t.clientX,currentY=t.clientY}function deselectElement(t){0!=selectedElement&&(selectedElement.removeAttributeNS(null,"onmousemove"),selectedElement.removeAttributeNS(null,"onmouseup"),selectedElement=0)}var threshold=.2,saturation="75",lightness="70",textcolor="#000",alpha=1;window.onload=function(){setThreshold(),updateSaturation(),updateLightness(),updateSVG(),setBackgroundColor(),setTextColor(),$(":input").each(function(){var t=$(this).val();$(this).attr("data-value",t)}),sizeSVG()},window.onresize=sizeSVG,"undefined"==typeof escapeHtmlEntities&&(escapeHtmlEntities=function(t){return t.replace(/[\u00A0-\u2666<>\&]/g,function(t){var e="&#x"+t.charCodeAt(0)+";";return e})}),$("#the-file-input").change(function(){console.log(this.files),renderImage(this.files[0])}),$(".update").click(function(){setThreshold(),setSaturation(),setLightness(),setAlpha(),updateSVG()}),$(".saturationslider").change(function(){updateDynamicColorRange(),updateSVGColors()}),$(".lightnessslider").change(function(){updateDynamicColorRange(),updateSVGColors()}),$(".alphaslider").change(function(){updateDynamicColorRange(),setAlpha(),updateSVGColors()}),$(".hue_min").change(function(){updateSVGColors()}),$(".hue_max").change(function(){updateSVGColors()}),$(".refresh_colors").click(function(){updateDynamicColorRange(),updateSVGColors()}),$(".randomize_colors").click(function(){updateDynamicColorRange(),randomizeSVGColors()}),$(".thresholdslider").change(function(){var t=$(this).val();setThresholdToValue(t)}),$(".text_color").change(function(){setTextColor()}),$(".bg_color").change(function(){setBackgroundColor()}),$(".bgimg_opacity").change(function(){var t=$(".bgimg_opacity").val();$(".backgroundimage").css("opacity",t),$("svg #background_image").attr("opacity",t)}),$(".text").change(function(){updateText()}),$(":input").change(function(){var t=$(this).val();$(this).attr("data-value",t)}),$("#show_headline_bg").click(function(){var t=$("svg .headline").attr("data-visibility");"hidden"==t?$("svg rect.headline").attr("data-visibility","visible").attr("fill",randomColor).attr("fill-opacity",alpha):$("svg rect.headline").attr("data-visibility","hidden").attr("fill","none")}),$("#show_subtitle_bg").click(function(){var t=$("svg .subtitle").attr("data-visibility");"hidden"==t?$("svg rect.subtitle").attr("data-visibility","visible").attr("fill",randomColor).attr("fill-opacity",alpha):$("svg rect.subtitle").attr("data-visibility","hidden").attr("fill","none")}),$("#show_description_bg").click(function(){var t=$("svg .description").attr("data-visibility");"hidden"==t?$("svg rect.description").attr("data-visibility","visible").attr("fill",randomColor).attr("fill-opacity",alpha):$("svg rect.description").attr("data-visibility","hidden").attr("fill","none")}),$(".download").click(function(){updateText(!0);var t=d3.select("svg#A4poster").attr("title","test2").attr("version",1.1).attr("xmlns","http://www.w3.org/2000/svg").node().parentNode.innerHTML;$("#svgcache").append(t),$("#svgcache svg").attr("id","generatedSVG"),$("#svgcache svg *").each(function(){var t=$(this).attr("fill");console.log(t),"none"==t&&$(this).remove()});var e=d3.select("svg#generatedSVG").attr("title","test2").attr("version",1.1).attr("xmlns","http://www.w3.org/2000/svg").node().parentNode.innerHTML;d3.select(".resultscontainer").append("div").attr("class","download").append("img").attr("src","data:image/svg+xml;base64,"+btoa(e)).attr("width","210").attr("height","297"),updateText(),$("#svgcache svg").remove()}),$("svg *").mousedown(function(t){var e=t.target,a=e.classList.contains("draggable"),i=e.parentNode.classList.contains("draggable"),n=e.parentNode.parentNode.classList.contains("draggable");if(removeDragging(),a){var e=t.target;e.classList.add("dragging"),moveElement(t,0)}else if(i){var e=t.target,l=e.parentNode;l.classList.add("dragging"),moveElement(t,1)}else if(n){var e=t.target,l=e.parentNode,r=l.parentNode;r.classList.add("dragging"),moveElement(t,2)}dx=t.clientX-currentX,dy=t.clientY-currentY,currentMatrix[4]+=dx,currentMatrix[5]+=dy,newMatrix="matrix("+currentMatrix.join(" ")+")",selectedElement.setAttributeNS(null,"transform",newMatrix),currentX=t.clientX,currentY=t.clientY}),$(window).mouseup(function(){removeDragging()});var selectedElement=0,currentX=0,currentY=0,currentMatrix=0;