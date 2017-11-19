var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
document.addEventListener("offline", onOffline, false);
function onOffline() {
$('#BtnEnt').hide();
$('#inetOff').show();
var ref = cordova.InAppBrowser.open('http://smart-pavlodar.kz/pavlodar/smart/index.html', '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
ref.close();
}
document.addEventListener("online", onOnline, false);
 
function onOnline() {
var ref = cordova.InAppBrowser.open('http://smart-pavlodar.kz/pavlodar/smart/index.html'.ipush, '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
$('#inetOff').hide();
$('#BtnEnt').show();
}
	    
$("#BtnEnt" ).click(function() {
var ref = cordova.InAppBrowser.open('http://smart-pavlodar.kz/pavlodar/smart/index.html', '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
});
        
var ref = cordova.InAppBrowser.open('http://smart-pavlodar.kz/pavlodar/smart/index.html', '_blank', 'location=no,toolbar=no,disallowoverscroll=yes');
$('.loader2').show();

        

    }
};

app.initialize();
