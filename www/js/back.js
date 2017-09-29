function onload() {
        document.addEventListener("deviceready", onDeviceReady, false);
        document.addEventListener("backbutton", onBackKeyDown, false);
       // alert("1");
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);
       // alert("2");
    }

    // Handle the back button
    //
    function onBackKeyDown() {
        //alert("3"); 
        location.href="9home_opc.html";
    }