$(function() {
    "use strict";
    var url = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

    $("#textarea").on("keyup", function( e ) {
        var urls, output = "";
        var array_url = new Array();
        if ( e.keyCode !== 32) {
            // Return is backspace, tab, enter, space or delete was not pressed.
            return;
        }

        var count = 0;
        while ((urls = url.exec(this.value)) !== null) {
          // output += urls[0] + ", ";
            output = urls[0];
            array_url[count] = output;
            count++;
            // console.log(output);
        }
        // console.log(array_url[0]);
        for (var i = 0; i < array_url.length; i++) {
          // console.log(array_url[i]);
          is_url(array_url[i]);
        }
        // console.log("URLS: " + output.substring(0, output.length - 2));
        // checkUrl(output.substring(0, output.length - 2));
        // console.log(output.substring(0, output.length - 2));
    });
});

function is_url(str)
{
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(str))
        {
          console.log(str);
          passVal(str);
          return true;
        }
        else
        {
          // console.log("error");
          return false;
        }
}

function passVal(str){
        var data = {
            fn: str,
        };

        $.post("read.php", data);
    }
