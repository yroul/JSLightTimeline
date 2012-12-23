README
======

What is JSLightTimeline?
-----------------

JSLightTimeline is a very simple JQuery plugin for create timeline. 

Requirements
------------

JSLightTimeline require :  
      + [Twitter Bootstrap](https://github.com/twitter/bootstrap)'s css and javscript 2.2.2  
      + [JQuery](https://github.com/jquery/jquery) >=1.8.3  

Installation
------------
1. Make sure you have include all required dependencies to your page  
	```html
	<head>
	<!-- Your code -->	
	<link type="text/css" href="assets/bootstrap/css/bootstrap.css" rel="stylesheet" media="screen" />    
	<link type="text/css" href="assets/jsLightTimeline.css" rel="stylesheet" media="screen" />  
	</head>  
	<body>
	<!-- Your code -->	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>  
	<script type="text/javascript" src="assets/bootstrap/js/bootstrap.min.js"></script>  
	<script type="text/javascript" src="js/jsLightTimeline.js"></script>  
	</body>
	```

2. Add a div element to your page. Create some dots object for the timeline and then use jsLightTimeline function  
	```html
	<body>
		<div id="myTimeline"></div>
		<script type="text/javascript">
			$(document).ready(function(){
				var dot0 = {
					title: "My Title",
					content: "Popover's content",
					trigger : "hover",
					date : "now"
				};
				var dot1 = {
					title: "My second Title",
					content: "Another Popover's content",
					trigger : "hover",
					date : "2012"
				};
				$("#myTimeline").jsLightTimeline({dots[dot0,dot1]});
			});	
		</script>
	
	</body>
	```  

Documentation
-------------

#### Dot object ####
Dot object are just Twitter Bootstrap popover object wich i added a 'date' attribute  
See [Twitter Bootstrap Popover Documenation](http://twitter.github.com/bootstrap/javascript.html#popovers "Popover Documentation") for more informations

Contributing
------------

JSLightTimeline is an open source project.
If you'd like to contribute, fork, improve and send me a pull request.

License
----------------------

JSLightTimeline is release under MIT Licence conditions.  
See License file.  
Copyright (c) 2012 Yoan Roullard  
