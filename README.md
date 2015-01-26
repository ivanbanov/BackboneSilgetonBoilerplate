# Backbone Silgeton v1.0.0

A singleton boilerplate for Backbone applications.

## Installation
The singleton can be installed by bower
```
bower install backbone-singleton --save-dev
```

## Usage
To use the BackboneSingleton you just need to add to your project the script and dependencies (jQuery, Backbone and Underscore) as well.
```
<script src="path/jquery.js"></script>
<script src="path/underscore.js"></script>
<script src="path/backbone.js"></script>
<script src="path/backbone-singleton.js"></script>
```

## Initialization
You can initialize the app passing trough the parameters a object of configs.
```
App(config);
App._instance; // instance of the App
App.config; // general configs of the App
```

## Setting Modules
The App can append modules using the method setModule() wich recive three parameters.
<br / >1. The type of module that can be any Backbone module that you could extend (Module, Collection, View, Route).
<br / >2. The name of your module.
<br / >3. The object with the configs of the extension or a function with return of the object. Note that when used as a function the scope used inside of that is the App.

__Note:__ All the parameters are going to be camlized to avoid any crash in our modules files and standardization of the modules name.

```
App.setModule("Model", "Gallery", {
    defaults: {}
})

// or

App.setModule("Collection", "Galleries", function() {
    console.log(this); // App

    return {
        model: Gallery
    };
})
```

## Using EventBus
Knowing that Backbone doesn't have a controller, so we use a EventBus to the communication between the views.
<br / >The EventBus is going to be available after the App being instanced.
```
App.eventBus.on("someEvent", function(){
  // ...
});

App.eventBus.on("anotherEvent", function(){
  // ...
});
```
