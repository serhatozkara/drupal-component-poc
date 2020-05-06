---
title: Gauge Dash Usage
---
One variant of the gauges is the 'Dash' gauge. Rather than displaying a precise value, it has only 3 states:

- 'good' (needle is green and points to green section)
- 'warning' (needle is yellow and points to yellow section)
- 'danger' (needle is red and points to red section)

Along with CSS, a JavaScript file (guage-animation.js) handles the animation and color changes. To set the 'state' of the gauge, all you need to change is the data-attribute, 'data-gauge-state' found on this template.

Note that this value should be set before the page loads. The JavaScript only applies the animations and color changes on page load.