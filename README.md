dynamic_identity_configurator

# Generative Identity Church

A dynamic identity generation tool pitched for a Berlin church.
The church was using a beautiful old church building with a signature look and a lot of architectural detail.

![St. Johannes Evangelist Church on Gallery Row](/assets/img/location.png)
![](/assets/img/churchphoto.png)

The church also ran a gallery across the street (gallery row).

As part of the brand expression one direction was to focus in on the architecture and the local art scene and craft a generative design that can be applied to posters, invitations and any other medium easily while also allowing for some customizability for the different types of events offered.
The idea was to find inspiration in the architecture but express church as a mosaic of a diverse group of people with different walks of life but one common spirituality community.

This would be expressed by separating the building into separate vector shapes and adding randomness into the display of the elements as well as choosing different (randomized) colors for each element.

The church shape was drawn as a vector based on photography and then isolated into separate elements.
![Vectorized Church Front](/assets/img/vectorshape.png)

Then multiple formats were developed, including an A4 poster option.
![Poster Layout](/assets/img/mockup.png)

The configurator allows for a threshold to be set which then determines how many elements are shown. The script goes through each element and generates a random number. If the number is below the determined threshold, the element will be displayed, otherwise it won’t. The ‘Regenerate Design’ will restart the process leading to different results every time.
![Code Snipper](/assets/img/code.png)
![Cnfiguration Screen](/assets/img/tool.png)

Other features include text edit and control as well as background color or image as well as downloading the configuration as a PDF.

[toby@oratio.co]
