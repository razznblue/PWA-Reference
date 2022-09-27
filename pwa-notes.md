# 3 Main components of a PWA

1) Web Application      |      The basic web application
2) Web App Manifest     |      A manifest file that contains required info for the app to be a PWA
3) Service Worker       |      



## Web App Manifest

1) "name" --> The Name of the app
2) "short_name" --> The Short Name of the app
   1) This name appears on the "add the app to home screen" pop up when a user clicks to install the app on their device. 
3) "start_url --> The root endpoint of the app
4) "orientation" --> The orientation of the app
5) "theme_color"
   1) This color is a fallback incase the app is not ready yet(ex. the html hasn't loaded yet before the splash screen appears).
   2) You can also add a meta tag to the html head and specify the color in the content property. You can control this value with JS to change the theme color for example, to red when there is an error.
6) "scope"
   1) Internal links that fall in the scope will be opened still in the standalone app. If a link is opened and the file is not in the scope it will be opened in the browser.
7) "display"
   1) possible values: [standalone, fullscreen, minimal-ui, browser]
      1) iOS does not support minimal-ui(defaults to browser)
      2) iOS and Desktop
      3)  does not support fullscreen(defaults to standalone)
8) "icons" --> an array of objects
   1) the official docs recommends not setting a size or type for your images. But in the real world, those values are needed.
   2) The AppIcon size needs to be at least 512x512 pixels and should be a square.
   3) The AppIcon should be a png(best choice). SCG is not always supported on every device.
   4) DO not add rounded corners to the icon.
   5) iOS does not support icons in safari in the "add the app to home screen" pop up. You need to add a link tag to the html had with a rel of "apple-touch-icon" and a href pointing to the desired icon for it to work on iOS.


## Service Worker

 - The Service Worker can install client-side resources
 - The Service worker acts as a middleware offering a local web server for the PWA.
 - It can perform http requests because it's a server, but this server runs client-side withins the browser's engine.
 - https is required, with the exception of localhost

 - You need to register the service_worker with it's own API. Do not add a script to the html head because if you do, the service_worker will be running on the main thread. We don not want that.
 - Service worker has a local cache