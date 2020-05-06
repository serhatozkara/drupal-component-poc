---
title: Button Color Usage
---
In the 'Colors' section of Pattern Lab, you can see all of the different colors that exist as variables in the project.

Each color is given a different variable name, such as $green, $dark-brown, $orange, etc...

Using Bootstrap's mixins, we are able to use all the color variables for buttons. All you need to do is write 'btn-colorName' as a CSS class. Don't include the '$' in your class.

For a green button, type: 'btn btn-green'.
For a red button, type: 'btn btn-red'.

However, Bootstrap does ship with a color map named $theme-colors which has some default variables, such as '$primary', '$secondary', '$success', etc... We have changed the default color value $primary to Bookmark's green color, but have left the others alone. 