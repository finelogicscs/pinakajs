// pnk_appinit_1_1 code Starts Here
HOMEURL = "index.php/home";
DEBUG = true;


var ajaxSmallLoadingAnimation = "<span id='smallSizedLoader' align='center' style='position:absolute;left:0px;top:0px;'><img id='imgSmallLoader' src='assets/script/loading/1.gif'></span>";
var ajaxLargeLoadingAnimation = "<span id='largeSizedLoader' align='center'><img id='imgLargeLoader' src='assets/script/loading/1.gif'></span>";
var projectDialog = "<div id='divProjectDialog'></div>";
var inLineSpanFiller = "<span id='inLineSpanFiller'></span>";
var wetherAjaxSlideAnimation = false;

//initialize framework
var pnk = {};
pnk.Framework = {};
pnk.Framework.Name = "Pinaka";
pnk.Framework.Version = "0.8";
//pnk.Framework.ReserveQueryParameters = ("BUILDINDEX","PUBLISH","DEBUGMODE");
pnk.Project = {};
pnk.Project.Name = "Testing Framework";
pnk.Project.Title = "Testing Framework";
pnk.Project.Type = "WEB";
pnk.Project.IsDevMode = true;

pnk.ServerController = project_root + "/application";
pnk.RootController = project_root;
pnk.ServiceController = project_root + "/application/services";
pnk.ClientDebugMode = "dev";

/*for apache with htaccess*****************************************/

//pnk.ServerController = "/testgooroo/"; //for apache with htaccess
//pnk.AssetIndirectPath = "../";
//var curr_url = window.location.href;
/*if(curr_url.match('localhost') != null){
	pnk.ServerController = "http://localhost/fantasy_sport/application";
	pnk.RootController = "http://localhost/fantasy_sport";
	pnk.ServiceController = "http://localhost/fantasy_sport/application/services";
	pnk.ClientDebugMode = "dev";
}
else{
	pnk.ServerController = "http://dedicatedresources.org/fantasy_sport/application";
	pnk.RootController = "http://dedicatedresources.org/fantasy_sport";
	pnk.ServiceController = "http://dedicatedresources.org/fantasy_sport/application/services";
	pnk.ClientDebugMode = "dev";
}
*/
pnk.PrettyErrorMessage = "Sorry server not Responding";
//pnk.AssetIndirectPath = "../";


/******************************************************************/

//************************** for iis with no htaccess *************/

/*pnk.ServerController = "/sd_rnd/pnk/index.php/";
pnk.AssetIndirectPath = "/sd_rnd/pnk/";

pnk.ServerController = "/testgooroo/index.php/";
pnk.AssetIndirectPath = "/testgooroo/"; */

/************************************************************/
pnk.ClientData = {'WIDTH': ''};
pnk.FrameworkData = {'CALLBACKTYPE': 'AJAX', 'APPTYPE': 'wa'}; //apptype can be ma/wa/rw
pnk.Core = {};
pnk.Constants = {};
pnk.Debug = {};
pnk.Debug.DEBUG = true;
pnk.Debug.OPENAJAXRESULT = false;
pnk.Debug.OPENAJAXREQUEST = false;
pnk.Data = {};
pnk.Store = {};
pnk.Url = {};
pnk.Js = {};
pnk.Css = {};
pnk.GlobalVars = {};
pnk.VTransformators = {};
pnk.Proxy = {};
pnk.Controls = {};

// pnk_appinit_1_1 code Ends Here

// pnk_jshelper code Starts Here

pnk.Js.LoadAsync = function (filename, callBackFunc) {
    //gets document head element
    var oHead = document.getElementsByTagName('head')[0];
    if (oHead) {
        //creates a new script tag
        var oScript = document.createElement('script');
        //adds src and type attribute to script tag
        oScript.setAttribute('src', filename);
        oScript.setAttribute('type', 'text/javascript');
        //calling a function after the js is loaded (IE)
        var loadFunction = function () {
            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                if ((callBackFunc != undefined) || (callBackFunc != null)) callBackFunc();
            }
        };
        oScript.onreadystatechange = loadFunction;
        //calling a function after the js is loaded (Firefox)
        if ((callBackFunc != undefined) || (callBackFunc != null)) oScript.onload = callBackFunc;
        //append the script tag to document head element
        oHead.appendChild(oScript);
    }
};

/*
//Uncomment this code to make the LoadAsync_NonBlockWinLoad behave as it should be
 if (window.attachEvent)
         window.attachEvent('onload', pnk.Js.LoadAsync_NonBlockWinLoad);
     else
         window.addEventListener('load', pnk.Js.LoadAsync_NonBlockWinLoad, false);

*/


pnk.Js.LoadAsync_NonBlockWinLoad = function (filename, callBackFunc) {
    var oHead = document.getElementsByTagName('head')[0];
    if (oHead) {
        //creates a new script tag
        var oScript = document.createElement('script');
        //adds src and type attribute to script tag
        oScript.setAttribute('src', filename);
        oScript.setAttribute('type', 'text/javascript');
        //calling a function after the js is loaded (IE)
        var loadFunction = function () {
            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                if ((callBackFunc != undefined) || (callBackFunc != null)) callBackFunc();
            }
        };
        oScript.onreadystatechange = loadFunction;
        //calling a function after the js is loaded (Firefox)
        if ((callBackFunc != undefined) || (callBackFunc != null)) {
            oScript.onload = callBackFunc;
        }
        //append the script tag to document head element
        oHead.appendChild(oScript);
    }
};

pnk.Js.GetBrowserCurrentUrl = function () {
    var url = document.URL;
    return url;
};

pnk.Js.GetBrowserCurrentPage = function () {
};

pnk.Js.GetBrowserCurrentQParameters = function (){
    var vars = [], hash;
    var q = document.URL.split('?')[1];
    if (q != undefined) {
        q = q.split('&');
        for (var i = 0; i < q.length; i++) {
            hash = q[i].split('=');
            vars.push(hash[1]);
            vars[hash[0]] = hash[1];
        }
    }
    return vars;
};

pnk.Js.GetBrowserCurrentHParameter = function () {
    var param = document.URL.split('#')[1];
    return param;
};

pnk.Js.AddDynamicScript = function (ScriptString) {

    var s = document.createElement("script");
    s.type = "text/javascript";

    s.innerHTML = ScriptString;
    document.getElementsByTagName("head")[0].appendChild(s);
};

function ReplaceAll(Source, stringToFind, stringToReplace) {

    var temp = Source;

    var index = temp.indexOf(stringToFind);

    while (index != -1) {
        temp = temp.replace(stringToFind, stringToReplace);
        index = temp.indexOf(stringToFind);
    }
    return temp;
}

function FullHtml(jqSelector) {
    //alert(jqSelector);
    str = $('<div>').append($(jqSelector).clone()).remove().html();
    //alert (str);
    return str;
}

pnk.Js.Sleep = function (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        };
    }
};
pnk.Js.GetControlsQueryString = function(jqueyContainerSelector)
{
    //alert(jqueyContainerSelector);
    serialize = $(jqueyContainerSelector).find('select, textarea, input').serialize();
    return serialize;

};
pnk.Js.ConvertGetStringToPost = function(getstr) {
    postStr = getstr.replace(/=/gi, '":"');
    postStr = postStr.replace(/&/gi, '","');
    postStr = '"' + postStr + '"';
    //postStr = "'" + postStr + "'";
    return postStr;
};

// pnk_jshelper code Ends Here

// pnk_proxy_1_0_3 code Starts Here

//version : 1_0_3
function getCookie(name)
{
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}
// for Laravel

pnk.Proxy.Http = {};

pnk.Proxy.Trigger = {};
pnk.Framework.FastAjax = function(routingUrl,method,receiverId,senderId,extraData,successFunc,ErrorFunc,whetherAsynchronous){
    var  opt = new pnk.Proxy.Ajax.Options();
    opt.Url = routingUrl;
    opt.Method = method; //post put get delete
    //opt.ExtraData
    opt.Data =  "";
    opt.ResponseFormatType = ""; //text-plain/json/jsonP
    opt.FormatTypeSentToServer = ""; //html/json
    opt.ErrorFunc = pnk.Proxy.Ajax.DefaultErrorFunc;
    opt.SuccesFunc = pnk.Proxy.Ajax.DefaultSuccessFunc;
    opt.SetCallBacks = function(SuccessCallBackFunc, ErrorCallBack)
    {
        this.SuccesFunc  = SuccessCallBackFunc || pnk.Proxy.Ajax.DefaultSuccessFunc;
        this.ErrorFunc = ErrorCallBack || pnk.Proxy.Ajax.DefaultErrorFunc;
    }

    opt.SenderId = senderId ;
    opt.whetherFetchingAnimation = true;
    opt.ReceiverId  = receiverId;
    opt.whetherSynchronous = false;
    opt.ExtraData = "";

}

pnk.Proxy.Trigger.Get = function(containerId,serverComponent,sender,e){
    if ((containerId == "") || (containerId == null))
    {
        var frm = "<form id='frameworkGetForm' method='get'></form>";
        $("body").append(frm);
        filter = "#frameworkGetForm";
    }
    else
        filter = "#"  + containerId ;
    //$(filter).append("<input type='hidden' id='_callBackType' name='_callBackType' value='GET'>");
    pnk.Proxy.Trigger.Do(filter,serverComponent, sender, e );

}

pnk.Proxy.Trigger.Post = function(containerId,serverComponent,sender,e){
    var filter = "#"  + containerId ;
    // $("#frmId").append("<input type='hidden' id='_omethod' name='_omethod' value='" + serverSideHandler + "'>");
    // alert(filter);
    $(filter).append("<input type='hidden' id='_callBackType' name='_callBackType' value='POST'>");
    pnk.Proxy.Trigger.Do(filter,serverComponent, sender, e );

}

pnk.Proxy.Trigger.Put = function(containerId,serverComponent,sender,e){
    var filter = "#"  + containerId ;
    $(filter).append("<input type='hidden' id='_callBackType' name='_callBackType' value='PUT'>");
    pnk.Proxy.Trigger.Do(filter,serverComponent, sender, e );
}

pnk.Proxy.Trigger.Delete = function(containerId,serverComponent,sender,e){
    var filter = "#"  + containerId
    $(filter).append("<input type='hidden' id='_callBackType' name='_callBackType' value='DELETE'>");
    pnk.Proxy.Trigger.Do(filter,serverComponent, sender, e );

}

pnk.Proxy.Trigger.Do = function(filter,serverComponent, sender, e ){

    // $(filter ).append("<input type='hidden' id='event' name='event' value='" + e + "'>");
    // $(filter ).append("<input type='hidden' id='_sender' name='_sender' value='" + sender.id + "'>");

    //alert(serverComponent);

    //alert(serverSidePage);

    if ((serverComponent == undefined) || (serverComponent == null)) {
        //document.getElementById('_callBackType').value =  "POST";
        //  alert(document.getElementById('_callBackType').value);
        // alert(document.getElementById('_sender').value);
        // alert(document.getElementById('method').value);

        // document.getElementById(frmId).submit();
        // alert("hi...");
        //alert("hi..");
        //document.forms[0].submit();
        //$(filter ).attr("action", serverComponent);
        //alert("servercomp=null" + $(filter).html());
        $(filter).submit();
    }
    else {

        // alert(serverComponent);


        //alert($(filter).html());
        $(filter).attr("action", serverComponent);
        //document.forms[0].submit();
        $(filter).submit();
        //$(filter ).attr("action", serverComponent);
    }

}
pnk.Proxy.Ajax = {};
pnk.Form = {};

pnk.Component = function(){

    this.Url = "";
    var _Method = "";  //post put get delete
    this.Data =  "";
    this.DataPost = {};
    this.ResponseFormatType = "html"; //text-plain/json/jsonP
    var _FormatTypeSentToServer = ""; //html/json
    this.Loader = null;
    this.Headers = {};
    this.SetLoader = function(loader)
    {

        this.Loader = loader;
    }



    this.DefaultSuccessFunc = function(resp,response){





    }



    this.ErrorFunc = pnk.Proxy.Ajax.DefaultErrorFunc;
    this.SuccesFunc = pnk.Proxy.Ajax.DefaultSuccessFunc;
    this.SetCallBacks = function(SuccessCallBackFunc, ErrorCallBack)
    {
        this.SuccesFunc  = SuccessCallBackFunc || pnk.Proxy.Ajax.DefaultSuccessFunc;
        this.ErrorFunc = ErrorCallBack || pnk.Proxy.Ajax.DefaultErrorFunc;

    }

    this.GetMethod = function()
    {
        return _Method;
    }

    this.GetResponseFormatType = function()
    {
        return this.ResponseFormatType;
    }

    this.SetResponseFormatType = function($format)
    {
        this.ResponseFormatType = $format;
    }
    this.GetFormatTypeSentToServer = function()
    {
        return _FormatTypeSentToServer;
    }

    this.SenderId = "" ;
    this.whetherFetchingAnimation = true;
    this.ReceiverId  = "";
    this.whetherSynchronous = false;

    this.ExtraData = "";
    this.SenderId = "";


    this.Get = function(){
        _Method = "GET";

        this.Headers = {"X-CallBack-Type":"AJAXGET"};

        //_ResponseFormatType = "html";

        _FormatTypeSentToServer = "text/plain";
        var strCtrl ="";
        if (this.SenderId != "")
        { if ($(this.SenderId).length > 0) { alert("Please check for the selector(s) in '" + this.SenderId + "' .  Atleast one may be misspelled or missing."); return;}}
        // alert(this.SenderId);
        if (this.SenderId != "")
            strCtrl = pnk.Controls.GetDataString(this.SenderId);
        // alert(receiverId+","+ senderId +","+ url+","+ extraData+","+ successMethod+","+ failureMethod+","+ methodType+","+synchronous);
        //alert(strCtrl);
        var data = "";
        if (strCtrl != "") {
            if (this.ExtraData != "") {
                data = strCtrl + "&" + this.ExtraData;
            }
            else {
                data = strCtrl;

            }
        }
        this.Data =  data; // + "&_callBackType=AJAXGET";
        //alert(this.Data);
        if ((this.Data).indexOf("&") == 0)
        { this.Data = this.Data.substr(1);}
        //this.Data =  data + "&_callBackType=AJAXGET";

        pnk.Framework.Ajax.Do(this);

    }



    this.Post = function()
    {
        _Method = "POST";
        //_ResponseFormatType = "html";

        this.Headers = {"X-CallBack-Type":"AJAXPOST"};

        _FormatTypeSentToServer = "text/plain";

        if (this.SenderId != "")
        { if ($(this.SenderId).length > 0) { alert("Please check for the selector(s) in '" + this.SenderId + "' .  Atleast one may be misspelled or missing."); return;}}

        if ((this.DataPost == {}) || (this.DataPost == null) || (this.DataPost == undefined) || (this.DataPost == ""))
        {
            // this.ExtraData = {};
            //this.DataPost.event = "";
            //this.DataPost._callBackType="AJAXPOST";
            //this.DataPost.firstTime=true;
        }
        else
        {
            // alert("hi...");
            //this.DataPost.event = "";
            //this.DataPost._callBackType="AJAXPOST";
            //this.DataPost.firstTime=true;

        }



        ext = this.DataPost;
        var data = {};
        if (this.SenderId != "") {
            pData = pnk.Controls.GetPostDataObject(this.SenderId);
            //this.Data = pnk.Controls.GetPostDataObject(this.SenderId);
            that = this.Data;


            Object.keys(pData).forEach(function (key) {
                data[key] = pData[key];

                //console.log(key);
            });
        }
        Object.keys(ext).forEach(function (key) {
            data[key] = ext[key];

            //console.log(key);
        });
        // alert(pData["artName"]);
        //  alert(data["artName"]);
        this.Data = {};
        this.Data = data;

        //alert(this.Data["artName"]);
        //  alert(this.Data["_callBackType"]);
        pnk.Framework.Ajax.Do(this);
    }

    this.Put = function()
    {
        //alert("hi");
        _Method = "PUT";

        this.Headers = {"X-CallBack-Type":"AJAXPUT"};

        //_ResponseFormatType = "html";
        _FormatTypeSentToServer = "text/plain";
        // _FormatTypeSentToServer = "json";

        /*  if (this.SenderId != "")
         { if ($(this.SenderId).length > 0) { alert("Please check for the selector(s) in '" + this.SenderId + "' .  Atleast one may be misspelled or missing."); return;}}



         if ((this.ExtraData == null) || (this.ExtraData == undefined) || (this.ExtraData == ""))
         {
         this.ExtraData = {};
         //this.ExtraData.event = "";
         //this.ExtraData._callBackType="AJAXPUT";
         //this.ExtraData.firstTime=true;
         }
         else
         {
         //this.ExtraData.event = "";
         //this.ExtraData._callBackType="AJAXPUT";
         //this.ExtraData.firstTime=true;

         }



         ext = this.ExtraData;
         var data = {};
         if (this.SenderId != "") {
         pData = pnk.Controls.GetPostDataObject(this.SenderId);
         //this.Data = pnk.Controls.GetPostDataObject(this.SenderId);
         that = this.Data;


         Object.keys(pData).forEach(function (key) {
         data[key] = pData[key];

         //console.log(key);
         });
         }
         Object.keys(ext).forEach(function (key) {
         data[key] = ext[key];

         //console.log(key);
         });
         // alert(pData["artName"]);
         //  alert(data["artName"]);
         this.Data = {};
         this.Data = data;

         */
        if (this.SenderId != "")
        { if ($(this.SenderId).length > 0) { alert("Please check for the selector(s) in '" + this.SenderId + "' .  Atleast one may be misspelled or missing."); return;}}

        if ((this.DataPost == {}) || (this.DataPost == null) || (this.DataPost == undefined) || (this.DataPost == ""))
        {
            // this.ExtraData = {};
            //this.DataPost.event = "";
            //this.DataPost._callBackType="AJAXPOST";
            //this.DataPost.firstTime=true;
        }
        else
        {
            // alert("hi...");
            //this.DataPost.event = "";
            //this.DataPost._callBackType="AJAXPOST";
            //this.DataPost.firstTime=true;

        }



        ext = this.DataPost;
        var data = {};
        if (this.SenderId != "") {
            pData = pnk.Controls.GetPostDataObject(this.SenderId);
            //this.Data = pnk.Controls.GetPostDataObject(this.SenderId);
            that = this.Data;


            Object.keys(pData).forEach(function (key) {
                data[key] = pData[key];

                //console.log(key);
            });
        }
        Object.keys(ext).forEach(function (key) {
            data[key] = ext[key];

            //console.log(key);
        });
        // alert(pData["artName"]);
        //  alert(data["artName"]);
        this.Data = {};
        this.Data = data;

        //alert(this.Data.editRegularhours);

        pnk.Framework.Ajax.Do(this);
    }


    this.Delete = function()
    {
        _Method = "DELETE";
        //_ResponseFormatType = "html";

        this.Headers = {"X-CallBack-Type":"AJAXDELETE"};

        _FormatTypeSentToServer = "text/plain";

        if (this.SenderId != "")
        { if ($(this.SenderId).length > 0) { alert("Please check for the selector(s) in '" + this.SenderId + "' .  Atleast one may be misspelled or missing."); return;}}


        ext = this.ExtraData;
        var data = {};
        if (this.SenderId != "") {
            pData = pnk.Controls.GetPostDataObject(this.SenderId);
            //this.Data = pnk.Controls.GetPostDataObject(this.SenderId);
            that = this.Data;


            Object.keys(pData).forEach(function (key) {
                data[key] = pData[key];

                //console.log(key);
            });
        }
        Object.keys(ext).forEach(function (key) {
            data[key] = ext[key];

            //console.log(key);
        });
        // alert(pData["artName"]);
        //  alert(data["artName"]);
        this.Data = {};
        this.Data = data;
        pnk.Framework.Ajax.Do(this);
    }
}


var ajaxLargeLoadingAnimation = "<span class='smallSizedLoader' id='loading_{loaderPanelId}' style='box-shadow: 0 0 11px 2px; background-color: #000000; opacity: 0.8; padding: 10px; border-radius: 6px; position:absolute; text-align: center; z-index: 92147483647;'><img id='imgSmallLoader' height='80px' width='200px' src='"+pnk.RootController+"/application/script/pinakajs/loading/4.gif'><br>Please wait.</span>";
var ajaxSmallLoadingAnimation = "<span class='smallSizedLoader' id='loading_{loaderPanelId}' style='box-shadow: 0 0 11px 2px; background-color: #cccccc; padding: 0; border-radius: 6px; position:absolute; text-align: center; z-index: 92147483647;'><img id='imgSmallLoader' height='50px' width='50px' src='"+pnk.RootController+"/application/script/pinakajs/loading/1.gif'><br></span>";
var ajaxSearchLoadingAnimation = "<span class='smallSizedLoader' id='loading_{loaderPanelId}' style='box-shadow: 0 0 11px 2px; background-color: #cccccc; padding: 0; border-radius: 6px; position:absolute; text-align: center; z-index: 92147483647;'><img id='imgSmallLoader' height='50px' width='50px' src='"+pnk.RootController+"/application/script/pinakajs/loading/magnify.gif'><br></span>";
//var ajaxSmallLoadingAnimation = "<span id='largeSizedLoader' align='center' style='box-shadow: 0 0 11px 2px; background-color: #000000; opacity: 0.8; padding: 10px; border-radius: 6px; position:absolute; text-align: center; z-index: 92147483647;'><img id='imgLargeLoader' src="+pnk.RootController+"/application/script/pinakajs/loading/4.gif'></span>";
var projectDialog = "<div id='divProjectDialog'></div>";
var inLineSpanFiller = "<span id='inLineSpanFiller'></span>";
pnk.Framework.Loader = function(panel)
{
    var _panel = panel;
    this.Show = function()
    {
        width = $("#" + _panel).width();
        height = $("#" + _panel).height();
        x = $("#" + _panel).offset();
        // alert(x);
        lft = x.left;
        tp = x.top;
        posX = Math.floor(lft + width / 2);
        posY = Math.floor(tp + height / 2);
        // alert(posX);
        // alert(posY);
        posX = (width/2) - 100;
        $("#" + _panel).fadeTo('fast', 0.5);
        var str = ajaxLargeLoadingAnimation.replace("{loaderPanelId}",_panel);
//        alert(str);
        $("body").append(str);
        $(".smallSizedLoader").css("left", posX + "px");
        $(".smallSizedLoader").css("top", posY + "px");
    }
    this.Hide = function(){
        //      alert(_panel);
        $("#loading_" + _panel ).remove();
        $("#" + _panel).fadeTo("slow", 1);
    }
}
pnk.Framework.SmallLoader = function(panel){
    var _panel = panel;
    this.Show = function()
    {
        width = $("#" + _panel).width();
        height = $("#" + _panel).height();

        x = $("#" + _panel).offset();
        // alert(x);
        lft = x.left;
        tp = x.top;
        posX = Math.floor(lft + width / 2);
        posY = Math.floor(tp + height / 2);
        // alert(posX);
        // alert(posY);
        //posX = (width/2) - 100;
        $("#" + _panel).fadeTo('fast', 0.5);
        var str = ajaxSmallLoadingAnimation.replace("{loaderPanelId}",_panel);
//        alert(str);
        $("body").append(str);
        $(".smallSizedLoader").css("left", posX + "px");
        $(".smallSizedLoader").css("top", posY + "px");
    }
    this.Hide = function(){
        //      alert(_panel);
        $("#loading_" + _panel ).remove();
        $("#" + _panel).fadeTo("slow", 1);
    }
}
pnk.Framework.SearchLoader = function(panel){
    var _panel = panel;
    this.Show = function()
    {
        width = $("#" + _panel).width();
        height = $("#" + _panel).height();

        x = $("#" + _panel).offset();
        // alert(x);
        lft = x.left;
        tp = x.top;
        posX = Math.floor(lft + width / 2);
        posY = Math.floor(tp + height / 2);
        // alert(posX);
        // alert(posY);
        //posX = (width/2) - 100;
        $("#" + _panel).fadeTo('fast', 0.5);
        var str = ajaxSearchLoadingAnimation.replace("{loaderPanelId}",_panel);
//        alert(str);
        $("body").append(str);
        $(".smallSizedLoader").css("left", posX + "px");
        $(".smallSizedLoader").css("top", posY + "px");
    }
    this.Hide = function(){
        //      alert(_panel);
        $("#loading_" + _panel ).remove();
        $("#" + _panel).fadeTo("slow", 1);
    }
}


pnk.Services = function(){
    this.Url = "";
    var _Method = ""; //post put get delete
    this.Data =  "";
    var _ResponseFormatType = ""; //text-plain/json/jsonP
    var _FormatTypeSentToServer = ""; //html/json
    this.ErrorFunc = pnk.Proxy.Ajax.DefaultErrorFunc;
    this.SuccesFunc = pnk.Proxy.Ajax.DefaultSuccessFunc;

    this.SetCallBacks = function(SuccessCallBackFunc, ErrorCallBack)
    {
        this.SuccesFunc  = SuccessCallBackFunc || pnk.Proxy.Ajax.DefaultSuccessFunc;
        this.ErrorFunc = ErrorCallBack || pnk.Proxy.Ajax.DefaultErrorFunc;

    }

    this.GetMethod = function()
    {
        return _Method;
    }

    this.GetResponseFormatType = function()
    {
        return _ResponseFormatType;
    }
    this.GetFormatTypeSentToServer = function()
    {
        return _FormatTypeSentToServer;
    }

    this.SenderId = "" ;
    this.whetherFetchingAnimation = true;
    this.ReceiverId  = "";
    this.whetherSynchronous = false;

    this.ExtraData = "";
    this.SenderId = "";


    this.Get = function(){
        this._Method = "GET";
        this._ResponseFormatType = "json";

        this._FormatTypeSentToServer = "html";

        if (this.SenderId == "") { alert("Sender Id is mandatory"); return; }

        var filter = "#"  + this.SenderId +" .pnkform" + " [data-pnk-form]";
        if ($(filter).length > 0) { alert("Either class pnkform(framework) or data-pnk-form(user) is missing."); return;}
        strCtrl = pnk.Controls.Populate_Get_String(filter);
        // alert(receiverId+","+ senderId +","+ url+","+ extraData+","+ successMethod+","+ failureMethod+","+ methodType+","+synchronous);
        if (strCtrl != "") {
            if (this.ExtraData != "") {
                data = strCtrl + "&" + this.ExtraData;
            }
            else {
                data = strCtrl;

            }
        }
        this.Data =  data + "&_callBackType=AJAXGET";

        pnk.Framework.Ajax.Do(this);

    }

    this.Post = function()
    {
        this._Method = "POST";
        this._ResponseFormatType = "json";

        this._FormatTypeSentToServer = "json";

        if (this.SenderId == "") { alert("Sender Id is mandatory"); return; }

        var filter = "#"  + this.SenderId +" .pnkform" + " [data-pnk-form]";
        if ($(filter).length > 0) { alert("Either class pnkform(framework) or data-pnk-form(user) is missing."); return;}

        if ((this.ExtraData == null) || (this.ExtraData == undefined) || (this.ExtraData == ""))
        {
            this.ExtraData = {};
            this.ExtraData.event = "";
            this.ExtraData._callBackType="AJAXPOST";
            this.ExtraData.firstTime=true;
        }
        else
        {
            this.ExtraData.event = "";
            this.ExtraData._callBackType="AJAXPOST";
            this.ExtraData.firstTime=true;

        }



        pData = pnk.Controls.GetPostDataObject(filter);

        Object.keys(pData).forEach(function(key) {
            this.Data[ key ] = pData[key];

            //console.log(key);
        });
        Object.keys(this.ExtraData).forEach(function(key) {
            this.Data[ key ] = pData[key];

            //console.log(key);
        });

        pnk.Framework.Ajax.Do(this);
    }

    this.Put = function()
    {
        this._Method = "PUT";
        this._ResponseFormatType = "json";

        this._FormatTypeSentToServer = "json";

        if (this.SenderId == "") { alert("Sender Id is mandatory"); return; }

        var filter = "#"  + this.SenderId +" .pnkform" + " [data-pnk-form]";
        if ($(filter).length > 0) { alert("Either class pnkform(framework) or data-pnk-form(user) is missing."); return;}

        if ((this.ExtraData == null) || (this.ExtraData == undefined) || (this.ExtraData == ""))
        {
            this.ExtraData = {};
            this.ExtraData.event = "";
            this.ExtraData._callBackType="AJAXPUT";
            this.ExtraData.firstTime=true;
        }
        else
        {
            this.ExtraData.event = "";
            this.ExtraData._callBackType="AJAXPUT";
            this.ExtraData.firstTime=true;

        }



        pData = pnk.Controls.GetPostDataObject(filter);

        Object.keys(pData).forEach(function(key) {
            this.Data[ key ] = pData[key];

            //console.log(key);
        });
        Object.keys(this.ExtraData).forEach(function(key) {
            this.Data[ key ] = pData[key];

            //console.log(key);
        });

        pnk.Framework.Ajax.Do(this);
    }


    this.Delete = function()
    {
        this._Method = "DELETE";
        this._ResponseFormatType = "json";

        this._FormatTypeSentToServer = "json";

        if (this.SenderId == "") { alert("Sender Id is mandatory"); return; }

        var filter = "#"  + this.SenderId +" .pnkform" + " [data-pnk-form]";
        if ($(filter).length > 0) { alert("Either class pnkform(framework) or data-pnk-form(user) is missing."); return;}

        if ((this.ExtraData == null) || (this.ExtraData == undefined) || (this.ExtraData == ""))
        {
            this.ExtraData = {};
            this.ExtraData.event = "";
            this.ExtraData._callBackType="AJAXDELETE";
            this.ExtraData.firstTime=true;
        }
        else
        {
            this.ExtraData.event = "";
            this.ExtraData._callBackType="AJAXDELETE";
            this.ExtraData.firstTime=true;

        }



        pData = pnk.Controls.GetPostDataObject(filter);

        Object.keys(pData).forEach(function(key) {
            this.Data[ key ] = pData[key];

            //console.log(key);
        });
        Object.keys(this.ExtraData).forEach(function(key) {
            this.Data[ key ] = pData[key];

            //console.log(key);
        });

        pnk.Framework.Ajax.Do(this);
    }









}

pnk.Framework.Ajax = {};
pnk.Framework.Resource = function(routingUrl){
    var _Url =  routingUrl;
    this.ContainerId = "";
    this.SenderId = "";
    this.ReceverId = "";
    this.GetUrl = function(){
        return _Url;

    }
    this.LoadEntryView = function(extraData){

        var opt = new pnk.Component();
        opt.ExtraData = {};
        opt.ExtraData = extraData;
        opt.SenderId = this.SenderId;
        // action = $("#"+ opt.SenderId).data("pnkAction");
        opt.Url =pnk.ServerController + "/" + _Url;
        opt.ReceiverId = this.ReceverId;
        opt.Post();
        opt = null;
    }
    this.SaveEntry = function(extraData){

        var opt = new pnk.Component();
        opt.ExtraData = {};
        opt.ExtraData = extraData;
        opt.SenderId = this.SenderId;

        opt.Url =pnk.ServerController + "/" + _Url + ".json";
        opt.ReceiverId = this.ReceverId;
        opt.SetResponseFormatType = "json";
        opt.Post();
        opt = null;

    }
    this.LoadEditView = function(extraData){

        var opt = new pnk.Component();
        opt.ExtraData = {};
        opt.ExtraData = extraData;
        opt.SenderId = this.SenderId;
        opt.Url = pnk.ServerController + "/" +_Url;
        opt.ReceiverId = this.ReceverId;
        opt.Put();
        opt = null;
    }
    this.SaveEdit = function(extraData){

        var opt = new pnk.Component();
        opt.ExtraData = {};
        opt.ExtraData = extraData;
        opt.Url = pnk.ServerController + "/" +_Url + ".json";
        opt.SenderId = this.SenderId;
        opt.ReceiverId = this.ReceverId;
        opt.SetResponseFormatType = "json";
        opt.Put();
        opt = null;
    }
    this.LoadDeleteView = function(extraData){

        var opt = new pnk.Component();
        opt.ExtraData = {};
        opt.ExtraData = extraData;
        opt.Url = pnk.ServerController + "/" +_Url;
        opt.ReceiverId = this.ReceverId;
        opt.Delete();
        opt = null;
    }
    this.Delete = function(extraData){

        var opt = new pnk.Component();
        opt.ExtraData = {};
        opt.ExtraData = extraData;
        opt.Url = pnk.ServerController + "/" + _Url + ".json";
        opt.ReceiverId = this.ReceverId;
        opt.SetResponseFormatType = "json";
        opt.Delete();
        opt = null;
    }

    this.LoadDetailView = function(extraDataQueryString){
        var opt = new pnk.Component();
        opt.SenderId = this.SenderId;
        opt.ExtraData = extraDataQueryString;
        // action = $("#"+ opt.SenderId).data("pnkAction");
        opt.Url = pnk.ServerController + "/" + _Url;
        opt.ReceiverId = this.ReceverId;
        opt.Get();
        opt = null;

    }
    this.GetDetailData = function(extraDataQueryString){
        var opt = new pnk.Component();
        opt.SenderId = this.SenderId;
        opt.ExtraData = extraDataQueryString;
        opt.Url = pnk.ServerController + "/" +_Url + ".json";
        opt.ReceiverId = this.ReceverId;
        opt.SetResponseFormatType = "json";
        opt.Get();
        opt = null;


    }

    this.LoadAll = function(extraDataQueryString){
        var opt = new pnk.Component();
        opt.SenderId = this.SenderId;
        opt.ExtraData = extraDataQueryString;
        // action = $("#"+ opt.SenderId).data("pnkAction");
        opt.Url = pnk.ServerController + "/" + _Url;
        opt.ReceiverId = this.ReceverId;
        opt.Get();
        opt = null;

    }
    this.LoadAllData = function(extraDataQueryString){
        var opt = new pnk.Component();
        opt.SenderId = this.SenderId;
        opt.ExtraData = extraDataQueryString;
        opt.Url = pnk.ServerController + "/" +_Url + ".json";
        opt.ReceiverId = this.ReceverId;
        opt.SetResponseFormatType = "json";
        opt.Get();
        opt = null;


    }

    // this.LoadSearchView = function() {}

}

pnk.Framework.Ajax.Do = function(opt){
//var opt = new pnk.Component();

    //alert(varData);

    varHeaders = opt.Headers ;
    varType = opt.GetMethod() || "POST";
    varUrl = opt.Url || document.URL;
    if(opt.GetMethod() == "GET"){
        varData = opt.Data;
    }
    else{
        varData = opt.Data || '{}';
    }

    varDataType = opt.GetResponseFormatType() || "html";
    varContentType = opt.GetFormatTypeSentToServer() || "text/plain";
    // varProcessData = varProcessData || true;
    resultPanel = opt.ReceiverId || "SELF";
    SuccessCallBackFunc = opt.SuccesFunc ;
    ErrorCallBackFunc = opt.ErrorFunc ;

    //alert("headers=" + varHeaders + "," + varType + ",data=" + varData + "," + varUrl + "," + resultPanel + "," + SuccessCallBackFunc + "," + varDataType + "," + varContentType + "," );


    $.ajax({
        type: varType, //GET or POST or PUT or DELETE verb

        url: varUrl, // Location of the service
        data: varData, //Data sent to server
        //     contentType: varContentType, // content type sent to server
        dataType: varDataType, //Expected data format from server
        //  processdata: varProcessData || true, //True or False
        processdata: false, //True or False

        headers : varHeaders,

        success: function (msg) {//On Successfull service call
            // alert(msg);
            SuccessCallBackFunc(msg, resultPanel);
        },
        error: function (result) { // When Service call fails
            // alert('Service call failed: ' + result.status + '' + result.statusText);
            ErrorCallBackFunc(result, resultPanel);
        }
    });



}

pnk.Proxy.Ajax.Options = function(){

    this.Url = "";
    this.Method = ""; //post put get delete
    this.Data =  "";
    this.ResponseFormatType = ""; //text-plain/json/jsonP
    this.FormatTypeSentToServer = ""; //html/json
    this.ErrorFunc = pnk.Proxy.Ajax.DefaultErrorFunc;
    this.SuccesFunc = pnk.Proxy.Ajax.DefaultSuccessFunc;
    this.SetCallBacks = function(SuccessCallBackFunc, ErrorCallBack)
    {
        this.SuccesFunc  = SuccessCallBackFunc || pnk.Proxy.Ajax.DefaultSuccessFunc;
        this.ErrorFunc = ErrorCallBack || pnk.Proxy.Ajax.DefaultErrorFunc;

    }

    this.SenderId = "" ;
    this.whetherFetchingAnimation = true;
    this.ReceiverId  = "";
    this.whetherSynchronous = false;
    this.ExtraData = "";


}

/**************************************** for shweta and archie *************************************/

var pnkHttp = {


    //myHttp =

};

pnkHttp.GetCORS = function (url, success) {
    _defaultSuccessFunc = success;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = pnkHttp.CorsSuccess;
    xhr.send();
    return xhr;
}

pnkHttp.CorsSuccess = function(request){
    resp = request.currentTarget.response || request.target.responseText;
    _defaultSuccessFunc(resp);

}

pnkHttp.Get = function(url){
    //alert(url+"##############");
    _myHttp = new pnk.Proxy.Http1();
    // alert("hhhh");
    _myHttp._responseType = "json";
    _myHttp._url = url;
    _myHttp._methodType = "GET";

    _myHttp._Headers.push({"name":"X-CallBack-Type","value": "AJAXGET"});

//    alert("gggg");
    return _myHttp;
    /*
     this.As = function(_responseFormatType)
     {
     this._myHttp._responseType = _responseFormatType;
     return this;

     }

     this.WithExtraData = function(name,value){
     //this._myHttp._
     }
     this.WithExtraHeader = function(name,value) {

     this._myHttp.AddHeader("X-CallBack-Type","AJAXGET");

     }


     this.Do = function(){
     alert("calling do");
     this._myHttp.AddHeader("X-CallBack-Type","AJAXGET");
     return this._myHttp.Do();

     }
     */

}

pnkHttp.Post= function(url) {

    _myHttp = new pnk.Proxy.Http1();
    _myHttp._responseType = "json";
    _myHttp._url = url;
    _myHttp._methodType = "POST";
    _myHttp._Headers.push({"name":"X-CallBack-Type","value": "AJAXPOST"});
    return _myHttp;

}

pnkHttp.Put= function(url) {

    _myHttp = new pnk.Proxy.Http1();
    _myHttp._responseType = "json";
    _myHttp._url = url;
    _myHttp._methodType = "PUT";
    _myHttp._Headers.push({"name":"X-CallBack-Type","value": "AJAXPUT"});
    return _myHttp;
}

pnkHttp.Delete= function(url){

    _myHttp = new pnk.Proxy.Http1();
    _myHttp._responseType = "json";
    _myHttp._url = url;
    _myHttp._methodType = "DELETE";
    _myHttp._Headers.push({"name":"X-CallBack-Type","value": "AJAXDELETE"});
    return _myHttp;
}

pnk.Proxy.Http1 = function() {


    var _url = "";
    _whetherLoader = true;
    _loaderContainerId = "";
    var _methodType = "";
    var _data = null;
    var _senderId = "";
    var _receiverId = "";
    var _resolve = "";
    var _reject = "";
    var _responseType = "json";
    var _ExtraData = "";
    var _DataPost = {};
    var _Data = {};
    var _loader;
    this._Headers = [];
    var loaderType = '';


    this.Async= true;




    this.Abort = function()
    {
        if (this.XhrObject)
            this.XhrObject.abort();

    }

    this.Do = function()
    {


        console.log("hi in do..");
        this.FinalizeRequestData();
        //that = this;
        //console.log(this._senderId);

        //alert(_whetherLoader);
        if (_whetherLoader) {
            this._loader = new pnk.Proxy.Http1.prototype.Loader();
            // var pnkLoader = new pnk.Proxy.Http1.prototype.Loader();
        }

        //  alert("method="+this._methodType + ", url=" + this._url + ","+ this.Async + ", dta ="+ this.Data);
        console.log("method="+this._methodType + ", url=" + this._url + ","+ this.Async + ", dta ="+ this.Data);

        that = this;
        promiseObj = new Promise(function(resolve,reject){
            var XhrObject = new XMLHttpRequest();

            //alert("method="+that._methodType + ", url=" + that._url + ","+ that.Async + ", dta ="+ that.Data);
            XhrObject.open(that._methodType, that._url, that.Async);
            //set headers
            if (that._Headers.length > 0) {
                for (var i = 0; i < that._Headers.length; i++) {
                    XhrObject.setRequestHeader(that._Headers[i].name, that._Headers[i].value);
                }
            }
            XhrObject.setRequestHeader( "X-Requested-With","XMLHttpRequest");
            XhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			XhrObject.setRequestHeader("X-XSRF-TOKEN", getCookie('XSRF-TOKEN'));

            //that = this;
            if (_whetherLoader) {
                that._loader.Show();
            }
            XhrObject.onload = function (e) {
                if (this.status === 200) {
                    if (_whetherLoader) {
                        that._loader.Hide();
                    }

                    console.log("xhr done successfully for" + that._url);
                    var resp = this.responseText;
                    //alert(resp);
                    //alert(that._responseType);
                    if (that._responseType.toLowerCase() == "html"){
                        /*
                        try {
                           // resolve(resp);
                        }
                        catch (e) {
                            pnk.OnAjaxParseError(e);
                        }
                        */
                        if (resp) {
                            resolve(resp);

                        }
                        /*
                    else{
                        //pnk.Framework.AlertModal("Info", "OOPs server Error.");
                        XhrObject.onerror("OOPs server Error.");
                    }*/

                    }
                    else{
                        //alert("json");
                        try {
                            //alert(JSON.stringify(resp,null,4));
                            resp = resp.replace(/<script.*?>.*?<\/script>/igm,'');
                            respJson = jQuery.parseJSON(resp);
                            //alert(respJson);
                        }
                        catch (e) {
                            // alert("catch")
                            pnk.Proxy.Http1.prototype.OnAjaxParseError(e);
                            reject("Parsing Error");
                        }
                        // alert("ddd"+respJson);
                        if(respJson) {
                            if (respJson.PinakaResponse.ServerStatus.value == "SUCCESS") {
                                //alert(respJson.PinakaResponse.ServerStatus.value);
                                resolve(respJson);
                                if (_whetherLoader) {
                                    that._loader.Hide();                                }
                            }
                            else{
                                //pnk.Proxy.Http1.prototype.HandlePinakaError(respJson.PinakaResponse);
                                // XhrObject.onerror(respJson.PinakaResponse);
                            }
                        }
                        else{
                            //alert("network error");
                            //XhrObject.onerror("OOPs server Error.");
                            pnk.Proxy.Http1.prototype.OnAjaxParseError("object null");
                            //pnk.Framework.AlertModal("Info", "OOPs server Error.");
                        }
                    }
                }
                else
                {
                    XhrObject.onerror("Network Error");
                }
            };



            XhrObject.onerror = function (e) {

                if (_whetherLoader) {
                    that._loader.Hide();
                }


                pnk.Framework.AlertModal("Info","Network Error");
                //most probably network error.... handle gracefuly and reject...
                console.log("xhr failed for " + that._url);
                reject(this.status);

            };



            if ((that._methodType.toLowerCase() == "post") || (that._methodType.toLowerCase() == "put"))
            {
                //alert(that.Data);
                XhrObject.send(that.Data);
            }
            else {
                // alert("method="+that._methodType + ", url=" + that._url + ","+ that.Async + ", dta ="+ that.Data);
                XhrObject.send();
            }
            /*
             that.XhrObject.onreadystatechange = function(){
             if (that.XhrObject.readyState === 4){
             if (that.XhrObject.status === 200){

             //call defaultSuccess .... stop loading if any animation
             //callDefaultHtmlOrJson depending upon _responseType parameter
             //if no application or pinaka error then resolve



             console.log("xhr done successfully for" + that._url);
             var resp = that.XhrObject.responseText;
             if (that._responseType.toLowerCase() == "html")
             promiseObj.resolve(resp);
             else
             var respJson = JSON.parse(resp);
             promiseObj.resolve(respJson);
             } else {
             //most probably network error.... handle gracefuly and reject...
             console.log("xhr failed for " + that._url);
             promiseObj.reject(that.XhrObject.status);

             }
             } else {
             console.log("xhr processing going on " + that._url);
             }
             }
             console.log("request sent succesfully");
             */




        });

        return promiseObj;

    }

    /*this.Do = function(){
     //alert("hi in do..");
     console.log("hi in do..");
     this.FinalizeRequestData();
     that = this;
     var promiseObj = new Promise(function(resolve,reject){

     // alert("method="+that._methodType + ", url=" + that._url + ","+ that.Async + ", dta ="+ that.Data);
     console.log("method="+that._methodType + ", url=" + that._url + ","+ that.Async + ", dta ="+ that.Data);
     that.XhrObject.open(that._methodType, that._url, that.Async);
     //set headers
     if (that._Headers.length > 0) {
     for (var i = 0; i < that._Headers.length; i++) {
     that.XhrObject.setRequestHeader(that._Headers[i].name, that._Headers[i].value);


     }
     }
     that.XhrObject.setRequestHeader( "X-Requested-With","XMLHttpRequest");
     that.XhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     if ((that._methodType.toLowerCase() == "post") || (that._methodType.toLowerCase() == "put"))
     {
     //alert(that.Data);
     that.XhrObject.send(that.Data);
     }
     else
     that.XhrObject.send();
     that.XhrObject.onreadystatechange = function(){
     if (that.XhrObject.readyState === 4){
     if (that.XhrObject.status === 200){

     //call defaultSuccess .... stop loading if any animation
     //callDefaultHtmlOrJson depending upon _responseType parameter
     //if no application or pinaka error then resolve



     console.log("xhr done successfully for" + that._url);
     var resp = that.XhrObject.responseText;
     if (that._responseType.toLowerCase() == "html")
     resolve(resp);
     else
     var respJson = JSON.parse(resp);
     resolve(respJson);
     } else {
     //most probably network error.... handle gracefuly and reject...
     console.log("xhr failed for " + that._url);
     reject(that.XhrObject.status);

     }
     } else {
     console.log("xhr processing going on " + that._url);
     }
     }
     console.log("request sent succesfully");
     });
     return promiseObj;
     */

    /*
     var promiseObj = new Promise(function(){
     var xhr = new XMLHttpRequest();
     xhr.open(_methodType, _url, true);
     xhr.send();
     xhr.onreadystatechange = function(){
     if (xhr.readyState === 4){
     if (xhr.status === 200){
     console.log("xhr done successfully");
     var resp = xhr.responseText;
     var respJson = JSON.parse(resp);

     resolve(respJson);
     } else {
     reject(xhr.status);
     console.log("xhr failed");
     }
     } else {
     console.log("xhr processing going on");
     }
     }
     console.log("request sent succesfully");
     });
     return prpnkiseObj;

     */



    /*
     return $.ajax({
     url : _url,
     method : _methodType,
     dataType : _responseType,
     data: this.Data, //Data sent to server
     //     contentType: varContentType, // content type sent to server
     processdata: false, //True or False
     headers : _headers,



     })


     }
     */



}

pnk.Proxy.Http1.prototype.AttachLoader = function(whetherLoader,loaderContainerId, size, text, Image ){
    if (!(whetherLoader)) _whetherLoader = false;
    _loaderContainerId = loaderContainerId;
    if(size == undefined){
        loaderType = 'large';
    }
    else{
        loaderType = size;
    }
    return this;


}

pnk.Proxy.Http1.prototype.As = function(_responseFormatType){
    this._responseType = _responseFormatType;
    return this;

}

pnk.Proxy.Http1.prototype.AddRequiredParams = function(name,value){

    // alert(this._ExtraData +  "kkkk");
    if ((this._methodType == "" ) || (this._methodType == undefined )) {
        alert("Method Of Request Not Set In Proxy");
        return;
    }

    switch (this._methodType.toUpperCase())
    {

        case "GET":
        {
            //alert(this._ExtraData + "in required params get");
            if ((value == undefined) && (name != ""))
            {
                //alert(this._senderId + "in required params get value not given");
                this._senderId = name;
                //this._GetFormValues();
            }
            else {

                if ((this._ExtraData == undefined) || (this._ExtraData == "")) {
                    this._ExtraData = name + "="+value;
                }
                else {
                    this._ExtraData = "&" + name + "="+value;
                }


            }

            break;
        }

        case "POST" :
        case "PUT" :
        case "DELETE" :
        {

            //alert(this._ExtraData + "in required params get");
            if ((value == undefined) && (name != ""))
            {
                //alert(this._senderId + "in required params get value not given");
                this._senderId = name;
                //this._GetFormValues();
            }
            else {

                if ((this._ExtraData == undefined) || (this._ExtraData == "")) {
                    this._ExtraData = name + "="+value;
                }
                else {
                    this._ExtraData = "&" + name + "="+value;
                }


            }

            break;

            /*if ((value == undefined) && (name != ""))
             {
             this._senderId = name;
             //this._GetFormValues();
             }
             else {
             //alert(this._DataPost + "jjjjjj");
             if (this._DataPost)
             //this._DataPost[name] = value;
             this._DataPost.push({"name":name,"value":value});
             else
             {
             this._DataPost = [];
             this._DataPost.push({"name":name,"value":value});
             }
             }


             break;
             */
        }

    }

    //alert(this._ExtraData);
    return this;


}

pnk.Proxy.Http1.prototype.AddReqParamObject = function(dataObj){

    if ((this._methodType == "" ) || (this._methodType == undefined ))
        alert("Method Of Request Not Set In Proxy");
    return ;

    switch (this._methodType.toUpperCase())
    {

        case "GET":
        {


            if (this._ExtraData = "") {
                this._ExtraData = dataObj;
            }
            else {
                this._ExtraData += "&" + dataObj;
            }
            break;

        }

        case "POST" :
        case "PUT" :
        case "DELETE" :
        {
            //alert(JSON.stringify(dataObj,null,4));
            this._DataPost = dataObj;

            break;
        }

    }


}

pnk.Proxy.Http1.prototype.AddHeader = function(name,value) {

    // alert("Add Header Called" + name+"=" + value);
    var _header = {"name":name, "value":value};
    this._Headers.push(_header);

    return this;

}

pnk.Proxy.Http1.prototype.FinalizeRequestData = function() {
    var strCtrl = "";
    if (this._senderId != "") {
        //alert($(this.SenderId).length);
        if ($(this.SenderId).length > 0) {

            alert("Please check for the selector(s) in '" + this.SenderId + "' .  Atleast one may be misspelled or missing.");
            return null;
        }
    }
    switch (this._methodType.toLowerCase()) {

        case "get":
        {
            //alert(this._senderId);
            if (this._senderId != undefined && this._senderId != "")
                strCtrl = pnk.Controls.GetDataString(this._senderId);

            //alert(strCtrl);
            var data = "";
            if (strCtrl != "") {
                if ((this._ExtraData != undefined) && (this._ExtraData != "")) {
                    data = strCtrl + "&" + this._ExtraData;
                }
                else {
                    data = strCtrl;

                }
            }
            else {
                if ((this._ExtraData != undefined) && this._ExtraData != "") {
                    data = this._ExtraData;
                }

            }
            this.Data = data; // + "&_callBackType=AJAXGET";
            //alert(this.Data);
            if ((this.Data).indexOf("&") == 0) {
                this.DataData = this.Data.substr(1);

            }
            if (this.Data != "")
                this._url = this._url + "?" + this.Data;
            //alert("hi finalizing data" + this._url);
            break;
        }
        case "post":
        case "put":
        case "delete":
        {

            /*

             if (this._senderId != "")
             { if ($(this._senderId).length > 0) { alert("Please check for the selector(s) in '" + this._senderId + "' .  Atleast one may be misspelled or missing."); return;}}


             ext = this.DataPost;
             var data = {};
             if (this._senderId != "") {
             pData = pnk.Controls.GetPostDataObject(this._senderId);
             //this.Data = pnk.Controls.GetPostDataObject(this.SenderId);
             that = this.Data;


             Object.keys(pData).forEach(function (key) {
             data[key] = pData[key];

             //console.log(key);
             });
             }
             Object.keys(ext).forEach(function (key) {
             data[key] = ext[key];

             //console.log(key);
             });
             // alert(pData["artName"]);
             //  alert(data["artName"]);
             this.Data = {};
             this.Data = data;


             break;
             }
             */

            if (this._senderId != undefined && this._senderId != "")
                strCtrl = pnk.Controls.GetDataString(this._senderId);
            // alert(receiverId+","+ senderId +","+ url+","+ extraData+","+ successMethod+","+ failureMethod+","+ methodType+","+synchronous);
            //alert(strCtrl);
            var data = "";
            if (strCtrl != "") {
                if ((this._ExtraData != undefined) && (this._ExtraData != "")) {
                    data = strCtrl + "&" + this._ExtraData;
                }
                else {
                    data = strCtrl;

                }
            }
            else {
                if ((this._ExtraData != undefined) && this._ExtraData != "") {
                    data = this._ExtraData;
                }

            }
            this.Data = data; // + "&_callBackType=AJAXGET";
            //alert(this.Data);
            if ((this.Data).indexOf("&") == 0) {
                this.Data = this.Data.substr(1);
            }
            break;
        }
    }
}

pnk.Proxy.Http1.HandleDeafaultFunc = function() {

}
pnk.Proxy.Http1.prototype.HandleDefaultSuccess = function()
{


}
pnk.Proxy.Http1.prototype.HandleDefaultSuccess = function()
{


}
pnk.Proxy.Http1.prototype.HandleDefaultSuccessJson = function()
{
}
pnk.Proxy.Http1.prototype.DefaultNetworError = function()
{

}
pnk.Proxy.Http1.prototype.DefaultApplicationError = function() {
}

pnk.Proxy.Http1.prototype.OnAjaxParseError = function (error) {
    // alert("hjug");
    if(pnk.ClientDebugMode.toLowerCase() == "dev"){
        //alert("dev");
        pnk.Framework.AlertModal("Information", error);
    }
    else{
        // alert("jkh");
        pnk.Framework.AlertModal("Information",pnk.PrettyErrorMessage);
    }
}

pnk.Proxy.Http1.prototype.OnAjaxTimeOutError = function () {
    pnk.Framework.AlertModal("Information", "Oops! Its taking too time to response. Please try again later.");
}

pnk.Proxy.Http1.prototype.HandlePinakaError = function (pinakaResp) {
    //pnk.Framework.AlertModal("Information", "111Oops! Server error. Please try again later.");
    if (pinakaResp.ERROR.ProjectMode.value == "DEV") {
        // alert("Parse Error. Please check. Error: type" + resolve.PinakaResponse.ERROR.Type);
        pnk.Framework.AlertModal("Information","Error : " + pinakaResp.ERROR.Message.value);

    }
    else
    {
        pnk.Framework.AlertModal("Information", pinakaResp.ERROR.PrettyMessage.value);

    }
}

pnk.Proxy.Http1.prototype.Loader = function(panel)
{
    //alert(_loaderContainerId);

    if ((_loaderContainerId == undefined ) || (_loaderContainerId == "" )  )
    {
        if ((this._senderId == undefined) || (this._senderId == ""))
        {
            _panel = "body";
        }
        else _panel = this._senderId;


    }
    else
        _panel = _loaderContainerId;


    //  alert("panel="+_panel);
    if ((_panel == undefined) || (_panel == "")) _panel = "body";
    this.Show = function()
    {
        if (_panel == "body")
        {
            width = $(_panel)[0].width();
            height = $(_panel)[0].height();

            x = $(_panel)[0].offset();

        }
        else {
            width = $("#" + _panel).width();
            height = $("#" + _panel).height();

            x = $("#" + _panel).offset();
        }
        // alert(x);
        lft = x.left;
        tp = x.top;
        posX = Math.floor(lft + width / 2);
        posY = Math.floor(tp + height / 2);
        // alert(posX);
        // alert(posY);

        if (_panel == "body")
        {
            $(_panel)[0].fadeTo('fast', 0.5);
        }
        else
            $("#" + _panel).fadeTo('fast', 0.5);
        if(loaderType == 'small')
            var str = ajaxSmallLoadingAnimation.replace("{loaderPanelId}",_panel);
        else if(loaderType == 'search')
            var str = ajaxSearchLoadingAnimation.replace("{loaderPanelId}",_panel);
        else
            var str = ajaxLargeLoadingAnimation.replace("{loaderPanelId}",_panel);
//        alert(str);
        $("body").append(str);
        //$(".smallSizedLoader").css("left", posX + "px");
        //$(".smallSizedLoader").css("left", posX + "px");
        $(".smallSizedLoader").css("left", "50%");
        $(".smallSizedLoader").css("top", "40%");

    }
    this.Hide = function(){
        //      alert(_panel);
        _panel = _loaderContainerId;
        if (_panel != "body") {
            $("#loading_" + _panel).remove();

            $("#" + _panel).fadeTo("slow", 1);

        }
        else
        {
            $("#loading_" + _panel).remove();

            $(_panel)[0].fadeTo("slow", 1);
        }
    }
}

/**************************************** for shweta and archi End*************************************/
//var OHttp = new pnk.Proxy.Http();


pnk.Proxy.Ajax.Do = function(opt){
//var opt = new pnk.Proxy.Ajax.Options();



    if ((opt.GetMethod != undefined) && (opt.Method == "POST")) {

        //alert(varData);
        // varData = '{' + varData + '}'; //working for get perfectly
        //alert(varData);
        //varData = "'{ " + varData + "}'";
        // varData = eval("("+varData+")");


    }


    //alert(varData);
    varType = opt.Method || "POST";
    varUrl = opt.Url || document.URL;
    varData = opt.Data || '{}';
    varDataType = opt.ResponseFormatType || "html";
    varContentType = opt.FormatTypeSentToServer || "text/plain";
    // varProcessData = varProcessData || true;
    resultPanel = opt.ReceiverId || "SELF";
    SuccessCallBackFunc = opt.SuccesFunc ;
    ErrorCallBackFunc = opt.ErrorFunc ;

    alert(varData + "," + varUrl + "," + resultPanel + "," + SuccessCallBackFunc + "," + varDataType + "," + varContentType + "," );


    $.ajax({
        type: varType, //GET or POST or PUT or DELETE verb

        url: varUrl, // Location of the service
        data: varData, //Data sent to server
        //     contentType: varContentType, // content type sent to server
        dataType: varDataType, //Expected data format from server
        //processdata: varProcessData, //True or False

        success: function (msg) {//On Successfull service call
            SuccessCallBackFunc(msg, resultPanel);
        },
        error: function (result) { // When Service call fails
            ErrorCallBackFunc(result, resultPanel);
        }
    });
}

pnk.Proxy.Ajax.DefaultSuccessFunc = function(result, resultPanel){
    // alert(result);
    //  alert(resultPanel);
    $("#"+resultPanel).html(result);
}

pnk.Proxy.Ajax.DefaultErrorFunc = function(err, resultPanel){

    if (pnk.Project.IsDevMode)
    {
        //pnk.Framework.AlertModal("Sorry",err);
    }
    else
        console.log("AJAX error in request: " + JSON.stringify(err, null, 2));

    this.Loader.Hide();
}

pnk.Framework.AlertModal = function(title, message, id, onCloseCallback){
    if (id == undefined || id == "") {

        var alertModalStr = '<div class="modal fade" data-pnk-componenttype="modal" id="alertModal" role="dialog">' +
            '<div class="modal-dialog" style=" height: 600px; margin: 200px auto auto;vertical-align: middle; width: 500px;" >' +
            '<div class="modal-content " style="min-height: 220px;width:400px;" >' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" >&times;</button>' +
            '<span id="alertModalHeading" style="font-weight: bold; display: none">Information</span>' +
            '</div>' +
            '<div id="alertModalBody" class="modal-body" style="padding:20px; max-height:400px; text-align: center;">' +
            '<img src="'+pnk.RootController+'/application/images/logo-header.png" style="margin-bottom:10px; height:80px; border-radius:5px;">' +
            '<h4 class="" id="alertModalTitle">SubHeading</h4>' +
            '<div id="alertModalMessage">Hello this is Information Modal content.</div>' +
            '</div>' +
            '<div class="modal-footer" style="text-align: center;">' +
            '<button class="btn btn-primary" type="button" data-dismiss="modal" style="padding-top:5px;" onclick="" >Ok</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        id="alertModal";
    }
    else
    {
        var alertModalStr = '<div class="modal fade" data-pnk-componenttype="modal" id="'+id+'" role="dialog">' +
            '<div class="modal-dialog" style=" height: 600px; margin: 200px auto auto;vertical-align: middle; width: 500px;" >' +
            '<div class="modal-content " style="min-height: 220px;width:400px;" >' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" >&times;</button>' +
            '<span id="alertModalHeading" style="font-weight: bold; display: none">Information</span>' +
            '</div>' +
            '<div id="alertModalBody" class="modal-body" style="padding:20px; max-height:400px; text-align: center;">' +
            '<img src="'+pnk.RootController+'/application/img/header/icon.png" style="margin-bottom:10px; height:80px; border-radius:5px;">' +
            '<h4 class="" id="alertModalTitle">SubHeading</h4>' +
            '<div id="alertModalMessage">Hello this is Information Modal content.</div>' +
            '</div>' +
            '<div class="modal-footer" style="text-align: center;">' +
            '<button class="btn btn-primary" type="button" data-dismiss="modal" style="padding-top:5px;" onclick="this.Hide()" >Ok</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

    }

    //  alert(alertModalStr);
    $('[data-pnk-componenttype="modal"]').remove();
    $("body").append(alertModalStr);
    $("#"+id+" #alertModalTitle").html(title);
    $("#"+id+" #alertModalMessage").html(message);
    $("#"+id).modal('show');

    this.Show = function() {
        //alert("hllo")

        $('[data-pnk-componenttype="modal"]').remove();
        $("body").append(alertModalStr);
        $("#"+id+" #alertModalHeading").html(title);
        $("#"+id+" #alertModalBody").html(message);
        $("#"+id).modal('show');

    }

    this.Hide = function () {
        alert("hide method");
    }
    //if(onCloseCallback != undefined || onCloseCallback != ""){
    /*    $( "#"+id )
     .on('hide', function() {
     console.log('hide');
     onCloseCallback();
     })
     .on('hidden', function(){
     console.log('hidden');
     onCloseCallback();
     })
     .on('show', function() {
     console.log('show');
     })
     .on('shown', function(){
     console.log('shown' )
     });
     */

    $(document).on('hide.bs.modal','#'+id, function () {
        //alert('closing='+onCloseCallback);
        if(onCloseCallback != undefined && onCloseCallback != "") {
            // alert("not undefined");
            onCloseCallback();

        }
        //Do stuff here
    });
    //  }


    //   alert(message);

}

pnk.Framework.ConfirmModal = function(title, message, id, onCloseCallback, onConfirmCallback){
    if (id == undefined || id == "") {
        var confirmModalStr = '<div class="modal fade" id="confirmModal" data-pnk-componenttype="modal" role="dialog">' +
            '<div class="modal-dialog" style=" min-height: 600px; margin: 200px auto auto;vertical-align: middle;width: 500px;" >' +
            '<div class="modal-content " style="min-height: 220px;width:400px;" >' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" >&times;</button>' +
            '<span id="confirmModalHeading" style="font-weight: bold;">Information</span>' +
            '</div>' +
            '<div class="modal-body" style="padding:20px; max-height:400px; text-align: center;">' +
            '<img src="'+pnk.RootController+'/application/img/header/icon.png" style="margin-bottom:10px; height:80px; border-radius:5px;">' +
            '<h4 class="" id="confirmModalTitle">SubHeading</h4>' +
            '<div id="confirmModalMessage">Hello this is Information Modal content.</div>' +
            '</div>' +
            '<div class="modal-footer" style="text-align: center;">' +
            '<button class="btn btn-warning" type="button" data-dismiss="modal" style="padding-top:5px;" onclick="btnClicked(conf)" >Continue</button>' +
            '<button class="btn btn-default" type="button" data-dismiss="modal" style="padding-top:5px;" onclick="btnClicked(can)" >Cancel</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        id="confirmModal";
    }
    else
    {
        var confirmModalStr = '<div class="modal fade" id="'+id+'" data-pnk-componenttype="modal" role="dialog">' +
            '<div class="modal-dialog" style=" min-height: 600px; margin: 200px auto auto;vertical-align: middle;width: 500px;" >' +
            '<div class="modal-content " style="min-height: 220px;width:400px;" >' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal" >&times;</button>' +
            '<span id="confirmModalHeading" style="font-weight: bold;">Information</span>' +
            '</div>' +
            '<div class="modal-body" style="padding:20px; max-height:400px; text-align: center;">' +
            '<img src="'+pnk.RootController+'/application/img/header/icon.png" style="margin-bottom:10px; height:80px; border-radius:5px;">' +
            '<h4 class="" id="confirmModalTitle">SubHeading</h4>' +
            '<div id="confirmModalMessage">Hello this is Information Modal content.</div>' +
            '</div>' +
            '<div class="modal-footer" style="text-align: center;">' +
            '<button class="btn btn-warning" type="button" data-dismiss="modal" style="padding-top:5px;" onclick="this.btnClicked(confirm)" >Continue</button>' +
            '<button class="btn btn-default" type="button" data-dismiss="modal" style="padding-top:5px;" onclick="this.btnClicked(cancel)" >Cancel</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    $('[data-pnk-componenttype="modal"]').remove();
    $("body").append(confirmModalStr);
    $("#confirmModal #confirmModalTitle").html(title);
    $("#confirmModal #confirmModalMessage").html(message);
    $('#confirmModal').modal('show');
    this.Show = function() {
        //alert("hllo")
        $('[data-pnk-componenttype="modal"]').remove();
        $("body").append(confirmModalStr);
        $("#confirmModal #confirmModalTitle").html(title);
        $("#confirmModal #confirmModalMessage").html(message);
        $('#confirmModal').modal('show');

    }

    //if(onCloseCallback != undefined || onConfirmCallback != undefined){
    /*    $( "#"+id )
     .on('hide', function() {
     console.log('hide');
     onCloseCallback();
     })
     .on('hidden', function(){
     console.log('hidden');
     onCloseCallback();
     })
     .on('show', function() {
     console.log('show');
     })
     .on('shown', function(){
     console.log('shown' )
     });
     */

    /* $(document).on('hide.bs.modal','#'+id, function () {
     if((onCloseCallback != undefined && onCloseCallback != "") ||  (onConfirmCallback != undefined && onConfirmCallback != "")) {
     // alert("not undefined");
     onCloseCallback();

     }
     });*/
    // }
}
function btnClicked (clickedBtn) {
    alert("clickedBtn:"+clickedBtn);
    $(document).on('hide.bs.modal','#'+id, function () {
        if((onCloseCallback != undefined && onCloseCallback != "") ||  (onConfirmCallback != undefined && onConfirmCallback != "")) {
            // alert("not undefined");
            onCloseCallback();

        }
    });
}
pnk.Framework.InputModal = function(){

    var inputModalStr = '<div class="modal fade" id="inputModal" data-pnk-componenttype="modal" role="dialog">' +
        '<div class="modal-dialog" style=" height: 600px; margin: 200px auto auto;vertical-align: middle;width: 500px;" >' +
        '<div class="modal-content " style="min-height: 220px;width:400px;" >' +
        '<!--div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" >&times;</button>' +
        '<span id="inputModalHeading" style="font-weight: bold;">Information</span>' +
        '</div-->' +
        '<div class="modal-body" style="padding:20px; max-height:400px; text-align: center;">' +
        '<button type="button" class="close" data-dismiss="modal" >&times;</button>' +
        '<img src="img/logoImg.png" style="height:80px; border-radius:5px;">' +
        '<h4 class="" id="inputModalTitle">SubHeading</h4>' +
        '<div id="inputModalMessage">' +
        '<input type="text" class="form-control" name="txtZip" id="txtCountry" placeholder="Enter Your Country" style="margin:5px;"/>' +
        '<input type="text" class="form-control" name="txtZip" id="txtZip" placeholder="Enter Your Zip" style="margin:5px;"/>' +
        '</div>' +
        '</div>' +
        '<div class="modal-footer" style="text-align: center;">' +
        '<button class="btn btn-primary" type="button" data-dismiss="modal" style="padding-top:5px;" onclick="ProcessFromModal()" >Ok</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

    this.Show = function() {
        //alert("hllo")
        $('[data-pnk-componenttype="modal"]').remove();
        $("body").append(inputModalStr);
        $("#inputModal #inputModalTitle").html("hello");
        // $("#inputModal #inputModalMessage").html("Hello this is demo message");
        $('#inputModal').modal('show');
    }
}

pnk.Proxy.Ajax.Do1 = function(varType, varUrl, varData, varContentType, varDataType, varProcessData, resultPanel, SuccessCallBackFunc, ErrorCallBackFunc) {

    if ((varData != undefined) && (varType == "POST")) {

        //alert(varData);
        // varData = '{' + varData + '}'; //working for get perfectly
        //alert(varData);
        //varData = "'{ " + varData + "}'";
        // varData = eval("("+varData+")");
    }


    //alert(varData);
    varType = varType || "POST";
    varUrl = varUrl || document.URL;
    varData = varData || '{}';
    varDataType = varDataType || "html";
    varContentType = varContentType || "text/plain";
    //varProcessData = varProcessData || true;
    resultPanel = resultPanel || "SELF";
    SuccessCallBackFunc = SuccessCallBackFunc || ServiceSucceeded;
    ErrorCallBackFunc = ErrorCallBackFunc || ServiceFailed;

    //alert(varData + "," + varUrl + "," + resultPanel + "," + SuccessCallBackFunc + "," + varDataType + "," + varContentType + "," + varProcessData);


    $.ajax({
        type: varType, //GET or POST or PUT or DELETE verb

        url: varUrl, // Location of the service
        data: varData, //Data sent to server
        //     contentType: varContentType, // content type sent to server
        dataType: varDataType, //Expected data format from server
        processdata: varProcessData, //True or False

        success: function (msg) {//On Successfull service call
            SuccessCallBackFunc(msg, resultPanel);
        },
        error: function (result) { // When Service call fails
            ErrorCallBackFunc(result, resultPanel);
        }
    });
}

/*
 ajh.Post= function(url, data, success) {
 var params = typeof data == 'string' ? data : Object.keys(data).map(
 function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
 ).join('&');

 var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
 xhr.open('POST', url);
 xhr.onreadystatechange = function() {
 if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
 };
 xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
 xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
 xhr.setRequestHeader('Content-length', params.length);
 xhr.send(params);
 return xhr;
 }
 //Making CORS Ajax GET requests Asynchronous loading of data from a server in a different domain with modern browsers.
 //Retrieving data asynchronously from a server in a different domain in vanilla JavaScript is straight forward and very similar to same-origin Ajax GET requests. The following helper works in modern browsers and Internet Explorers 9+:
 //Instead of onreadystatechange, the onload callback is used in CORS for receiving the returned data. The callback gets passed as single argument, the request object. Depending on the browser, the actual response is found in currentTarget.response or target.responseText.
 pnk.Proxy.GetCORS = function (url, success) {
 var xhr = new XMLHttpRequest();
 xhr.open('GET', url);
 xhr.onload = success;
 xhr.send();
 return xhr;
 }

 Modify Cors To
 var createCORSRequest = function(method, url) {
 var xhr = new XMLHttpRequest();
 if ("withCredentials" in xhr) {
 // Most browsers.
 xhr.open(method, url, true);
 } else if (typeof XDomainRequest != "undefined") {
 // IE8 & IE9
 xhr = new XDomainRequest();
 xhr.open(method, url);
 } else {
 // CORS not supported.
 xhr = null;
 }
 return xhr;
 };

 var url = 'http://server.test-cors.org/server?id=6109096&enable=true&status=200&credentials=false';
 var method = 'GET';
 var xhr = createCORSRequest(method, url);

 xhr.onload = function() {
 // Success code goes here.
 };

 xhr.onerror = function() {
 // Error code goes here.
 };


 xhr.withCredentials = true;
 xhr.send();
 */


// example request
/*ajh.GetCORS('http://foo.bar/?p1=1&p2=Hello+World', function(request){
 var response = request.currentTarget.response || request.target.responseText;
 console.log(response);
 });
 */

// JSONP Ajax requests JSONP allows asynchronous loading of data, even from servers in a different domain. JSONP is used for requesting data asynchronously from a server in a different domain:
// define a callback function, which accepts the returned JSON data as its only argument
/*    function response(data) {
 // JSON data in form of a JavaScript object
 console.log(data);
 }
 */
// create a script tag with the external request URL
// include "response" as value of the GET param "callback" in the URL
pnk.Proxy.GetJsonP = function(url,respFunction) {
    var script = document.createElement('script');
    script.src = url + '?callback='+respFunction;
    document.body.appendChild(script);
}
//The function "response" gets called as soon as the data is successfully retrieved. It accepts as its first and only argument the parsed JSON data returned form the server.
//In general it's recommended to use cross-origin resource sharing (CORS) for such requests instead (IE8+). Yet, JSONP is simple to implement and it's cross-browser safe.


// Load a script file asynchronously. How to load a JavaScript file asynchronously from the server and automatically execute it.
//Loading an external script asynchronously is simple. Create a script tag, set its src attribute, and inject it into the DOM tree:
//The returned JavaScript file is executed automatically by the browser.
// Loading the Facebook Like button and Google Analytics are two examples that make use of this technique.
// Tip: When such script files are requested on page load, it's recommended to use a standard script tag with the async (and defer) attribute included:
/*
 ajh.LoadDynamicScript = function(url) {
 var script = document.createElement('script'),
 scripts = document.getElementsByTagName('script')[0];
 script.src = url;
 scripts.parentNode.insertBefore(script, scripts);
 }
 */
//<script src="https://platform.twitter.com/widgets.js" async defer></script>
//The HTML5 attribute async tells the browser to load this script without blocking the page. defer does essentially the same, but works on several older browsers, too.



//Serialize form data into a query string. //Encode a set of form elements as a string for submission.
//The following helper function serialize() takes one argument, a form node, and returns the form data as URL-encoded query string:
pnk.Form.Serialize = function(form) {
    var field, l, s = [];
    if (typeof form == 'object' && form.nodeName == "FORM") {
        var len = form.elements.length;
        for (var i=0; i<len; i++) {
            field = form.elements[i];
            if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
                if (field.type == 'select-multiple') {
                    l = form.elements[i].options.length;
                    for (var j=0; j<l; j++) {
                        if(field.options[j].selected)
                            s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
                    }
                } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
                    s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
                }
            }
        }
    }
    return s.join('&').replace(/%20/g, '+');
}

//Serialize form data into an array. Encode a set of form elements as an array of names and values.
//The following helper function serializeArray() takes one argument, a form node, and returns the form data as an array of name/value pairs:

pnk.Form.SerializeArray = function(form) {
    var field, l, s = [];
    if (typeof form == 'object' && form.nodeName == "FORM") {
        var len = form.elements.length;
        for (i=0; i<len; i++) {
            field = form.elements[i];
            if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
                if (field.type == 'select-multiple') {
                    l = form.elements[i].options.length;
                    for (j=0; j<l; j++) {
                        if(field.options[j].selected)
                            s[s.length] = { name: field.name, value: field.options[j].value };
                    }
                } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
                    s[s.length] = { name: field.name, value: field.value };
                }
            }
        }
    }
    return s;
}

pnk.OnAjaxParseError = function (error) {
    pnk.Framework.AlertModal("Information", error);
}

pnk.OnAjaxTimeOutError = function () {
    pnk.Framework.AlertModal("Information", "Oops! Its taking too time to response. Please try again later.");
}
pnk.HandlePinakaError = function (pinakaResp) {
    //pnk.Framework.AlertModal("Information", "111Oops! Server error. Please try again later.");
    if (pinakaResp.ERROR.ProjectMode.value == "DEV") {
        // alert("Parse Error. Please check. Error: type" + resolve.PinakaResponse.ERROR.Type);
        pnk.Framework.AlertModal("Information","Error : " + pinakaResp.ERROR.Message.value);

    }
    else
    {
        pnk.Framework.AlertModal("Information", pinakaResp.ERROR.PrettyMessage.value);

    }
}

// pnk_proxy_1_0_3 code Ends Here

// pnk_detailview code Starts Here

/**
 * Created by Shiva on 8/6/2016.
 */
//alert("hi....");
pnk.VTransformators.DetailView = function () {
    this.ViewDataSetId = "";
    this.ModifyView = _ModifyView;
    this.ViewBoundFunc = "";
    this.ContainerId = "";

    this.ModifyDefaultView = _ModifyDefaultView;
    this.Initialize = function () {
        //this.ContainerId = containerId;
        //  $(this.ContainerId + " [data-pnk-submit-type]").click(function () { this.submit(); });

    };
    this.Submit = function () {



    };

    this.Bind = function (dataset) {
        //alert(dataset.articles.rows[0].artId);
        row = dataset.rows[0];


        //alert($("#" + this.ContainerId + " .pnkform").html());
        $("#" + this.ContainerId + " .generatedtemplate").remove();



        //alert(row);
        row = this.ModifyView(row);

        if (this.ViewBoundFunc != "")
        {
            row =  this.ViewBoundFunc(row);
        }

        cl = $("#" + this.ContainerId + " [data-pnk-viewdatamembers]").attr("data-pnk-viewdatamembers");

        cls = cl.split(",");

        str = "";
        //l = $("#" + this.ContainerId + " [data-pnk-viewdatamembers]").html();
        l = FullHtml($("#" + this.ContainerId + " [data-pnk-viewdatamembers]").clone().addClass('generatedtemplate').css('display', ''));
        /*alert(l);*/
        for (i = 0; i < cls.length; i++) {
            k = "\{" + (i) + "\}";


            //alert("Row's field " + cls[i] + "getting modified with" + row[cls[i]]);

            if (row[cls[i]] == undefined) row[cls[i]] = " ";
            //  l = l.replace(k, row[cls[i]])
            l = ReplaceAll(l, k, row[cls[i]])



        }
        /*  alert(l); */
        //$("#" + this.ContainerId + " [data-pnk-viewdatamembers]").html(l);
        $("#" + this.ContainerId ).append(l);


    };

    this.MoveNext = function () {


    };

    function _ModifyView(view) {

        view = this.ModifyDefaultView(view);
        if (this.ViewBoundFunc != "")
            view = this.ViewBoundFunc(view);
        return view;
    };

    function _ModifyDefaultView(view) {
        return view;
    };
};

// pnk_detailview code Ends Here

// pnk_editview code Starts Here

/**
 * Created by Shiva on 8/6/2016.
 */
//alert("hi....");
pnk.EditEntryView = function (mode) {
    //alert("const called");
    this.mode = mode;
    this.ViewDataSetId = "";
    this.ModifyBeforeViewBound = "";
    this.OverrideModifyDefaultBeforeViewBound = false;
    this.OverrideModifyDefaultAfterViewBound = false;
    this.ModifyAfterViewBound = "";
    var  _ModifyDefaultBeforeViewBound = function(row)
    {
        //alert("_ModifyDefaultBeforeViewBound" + row);
        //alert(row.member_id);
        return row;

    }
    _ModifyDefaultAfterViewBound = function(containerId)
    {
        //alert(this.ContainerId);
        //default for checkbox
        //var tempRowHtml = rowHtml;
        //$("[data-pnk-rad-selected-value]" , rowHtml).each(function(){
        $("#" + containerId + " .generatedtemplate [data-pnk-checked-value]").each(function(){
            if ($(this).attr("value"))
            {
                //alert("value=" + $(this).attr("value") + " , data-pnk-checked-value="+$(this).attr("data-pnk-checked-value"));
                if ($(this).attr("value") == $(this).attr("data-pnk-checked-value"))
                {
                    //alert("setting");
                    $(this).prop( "checked", true );
                }
            }

        });
        //$("#" + this.containerId).html(rowHtml);
        //alert("_ModifyDefaultAfterViewBound");
        //return rowHtml;
    }
    this.ViewBoundFunc = "";
    this.ContainerId = "";

    // this.ModifyDefaultView = _ModifyDefaultView;
    this.Initialize = function () {
        //this.ContainerId = containerId;
        //  $(this.ContainerId + " [data-pnk-submit-type]").click(function () { this.submit(); });

    };
    this.Submit = function () {
    };

    this.Bind = function (dataset1) {
        //al1ert(dataset1.articles.rows[0].artId);
        //alert("bind called");
        // $("#" + this.ContainerId + " .generatedtemplate").remove();
        //alert(mode);
        var row;
        if (mode == "edit") {
            $("#" + this.ContainerId + " [data-pnk-input-value]").each(function() {
                //alert($(this).attr("data-pnk-input-value"));
                $(this).attr("value","{" + $(this).attr("data-pnk-input-value") + "}");

            });
            //alert("hi");
            row = dataset1.rows[0];
            //alert($("#" + this.ContainerId + " .pnkform").html());
            //  l = l.replace(k, row[cls[i]])
            if (this.OverrideModifyDefaultBeforeViewBound) {
            }
            else{
                row = _ModifyDefaultBeforeViewBound(row);
                //alert("after calling _ModifyDefaultBeforeViewBound "+row.member_id);
            }
            // alert(this.ModifyBeforeViewBound);

            if (this.ModifyBeforeViewBound != "")
            {
                // alert("calling ModifyBeforeViewBound" + row.member_id);
                row = this.ModifyBeforeViewBound(row);
                //alert("after calling ModifyBeforeViewBound" + row.member_id);
            }
        }
        cl = $("#" + this.ContainerId + " [data-pnk-viewdatamembers]").attr("data-pnk-viewdatamembers");
        cls = cl.split(",");
        str = "";
        //l = $("#" + this.ContainerId + " [data-pnk-viewdatamembers]").html();
        var   l = FullHtml($("#" + this.ContainerId + " [data-pnk-viewdatamembers]").clone().addClass('generatedtemplate').css('display', ''));
        // alert(l);

        if (mode == "edit") {
            //alert(l);
            //alert("fields length"+ cls.length);
            for (i = 0; i < cls.length; i++) {
                k = "\{" + (i) + "\}";
                // alert("Row's field " + cls[i] + "getting modified with" + row[cls[i]]);
                if (row[cls[i]] == undefined) row[cls[i]] = " ";

                //  if ((i == 0) )
                //    alert(k + "=" + row[cls[i]] + "," + l );

                l = ReplaceAll(l, k, row[cls[i]]);
                //if ((i == 0) )
                //  alert(k + "=" + row[cls[i]] + "," + l );

                $("#" + this.ContainerId ).html(l);

                //_ModifyDefaultAfterViewBound();
            }
            if (this.OverrideModifyDefaultAfterViewBound)
            {

            }
            else
            {
                _ModifyDefaultAfterViewBound(this.ContainerId);
                //alert("after calling _ModifyDefaultAfterViewBound ");

            }
        }
        else
        {
            for (i = 0; i < cls.length; i++) {
                k = "\{" + (i) + "\}";

                //alert(cls[i]);
                //alert("Row's field " + cls[i] + "getting modified with" + row[cls[i]]);

                //if (row[cls[i]] == undefined) row[cls[i]] = " ";
                //  l = l.replace(k, row[cls[i]])
                l = ReplaceAll(l, k, "");


            }


            /*
            for (i = 0; i < cls.length; i++) {
                k = "\{" + (i) + "\}";


                 //alert("Row's field " + cls[i] + "getting modified with" + row[cls[i]]);

                 //if (row[cls[i]] == undefined) row[cls[i]] = " ";
                //  l = l.replace(k, row[cls[i]])
                l = ReplaceAll(l, k, "");
            }
            */
        }
        /*  alert(l); */
        //$("#" + this.ContainerId + " [data-pnk-viewdatamembers]").html(l);
        //$("#" + this.ContainerId ).append(l);
    };

    this.MoveNext = function () {
    };

    function _ModifyBeforeViewBound(row, fieldsArray){
        //for eliminating duplicated modification on the rowset if called again
        for (i = 0 ; i < this.arrCalledSets.length; i++)
        {
            if (this.CurrentRowSet == this.arrCalledSets[i]) return row;

        }
        row = this.ModifyDefaultRow(row, fieldsArray);

        // alert(row);

        if (this.DataRowBound != "")
        {
            row = this.DataRowBound(row);
        }
        return row;
    }
    this._ModifyView = function(view) {

        view = this.ModifyDefaultView(view);
        if (this.ViewBoundFunc != "")
            view = this.ViewBoundFunc(view);
        return view;
    };

    this._ModifyDefaultView = function(view) {
        return view;
    };
};

// pnk_editview code Ends Here


// pnk_ctrl_1_0_2 code Starts Here

pnk.Controls.ClearListFromSelect = function(id) {
    element = "#" + id;
    //list = $(element).html();
    //list = "<option value='" + value + "'>" + text + "</option>";
    $(element).html("");
    //$(element).html(list);
}

pnk.Controls.InsertListItemToSelect = function(id, value, text) {
    element = "#" + id;
    list = $(element).html();
    list = "<option value='" + value + "'>" + text + "</option>" + list;
    $(element).html(list);
}

pnk.Controls.AddListItemToSelect =function(id, value, text) {
    element = "#" + id;
    list = $(element).html();
    list = list + "<option value='" + value + "'>" + text + "</option>";
    $(element).html(list);
}

pnk.Controls.SetSelectedItem = function (id, value) {
    element = "#" + id + " option";
    $(element).each(function() {
        if( $(this).prop('value') == value ) { $(this).prop('selected','selected'); }
    });
}

pnk.Controls.SetCheckBoxChecked = function (id) {
    element = "#" + id;
    //alert(element);
    $(element).attr('checked','checked');
}

pnk.Controls.get_tagname = function(id){
    //id should contain # to be searched in jquery
    //  alert(id);
    var tagname = $("#"+id).get(0).tagName.toUpperCase(); //to get d tagname of the given id;

    //  var tagname = $("#"+id)[0].tagName.toUpperCase(); //to get d tagname of the given id;
    //   alert(tagname);
    return tagname;
}

pnk.Controls.get_value = function(id){
    var pnk_ctrl_id = "#" + id;
    var return_val = [];
    var pnk_tagname = pnk.Controls.get_tagname(id);
    if(pnk_tagname == "INPUT"){

        var pnk_type = $(pnk_ctrl_id).attr("type").toUpperCase();         //to get d input type;

        if(pnk_type == "RADIO"){
            var rad_name = $(pnk_ctrl_id).attr("name"); //alert(rad_name);
            return_val = $("input:radio[name="+rad_name+"]:checked").val();
            // var chkd_val = $("input[@name=" +rad_name+"]:checked").val();
            //  $("input:radio[name="+name+"]:checked").each(function(){
            //          if($(this).attr("name") == rad_name){
            //           return_val =this.value;
            //      }

            //});
        }


        if(pnk_type == "CHECKBOX"){
            var chk_name = $(pnk_ctrl_id).attr("name");//alert(chk_name);
            if ($(pnk_ctrl_id).prop('checked'))
            {
                // id_val.push(this.value);
                return_val = $(pnk_ctrl_id).val()  ;

            }



        }


        if(pnk_type == "TEXT" || pnk_type == "PASSWORD" || pnk_type == "FILE" || pnk_type == "HIDDEN"){
            return_val = encodeURIComponent($(pnk_ctrl_id).val());
        }
    }

    if(pnk_tagname == "TEXTAREA"){
        return_val = encodeURIComponent($(pnk_ctrl_id).val());
    }

    if(pnk_tagname == "SELECT"){
        return_val = $(pnk_ctrl_id+ " option:selected").val();
    }

    if(pnk_tagname == "DIV" || pnk_tagname == "SPAN" || pnk_tagname == "P" || pnk_tagname == "TABLE" || pnk_tagname == "TBODY" || pnk_tagname == "TR" ||pnk_tagname == "TD"){
        return_val = $(pnk_ctrl_id).html();
    }
    if(pnk_tagname == "TD"){
        // alert($(pnk_ctrl_id).html());
    }


    if(pnk_tagname == "A"){
        return_val = $(pnk_ctrl_id).attr("href");                      //gives d href value
    }

    if(return_val == "")
    {
        return " ";
    }
    else{
        return return_val;
    }



}

pnk.Controls.set_value = function(id,value) {
    var pnk_ctrl_id = "#" + id;
    var pnk_value = value;
    var pnk_tagname = $(pnk_ctrl_id).get(0).tagName.toUpperCase();

    if(pnk_tagname == "INPUT"){                var pnk_type = $(pnk_ctrl_id).attr("type").toUpperCase();

        if(pnk_type == "RADIO"){
            var rad_name = $(pnk_ctrl_id).attr("name");
            $("input:radio[name="+rad_name+"]:checked").removeAttr("checked");
            $("input:radio[name="+rad_name+"][value="+pnk_value+"]").attr("checked","checked");

        }


        if(pnk_type == "CHECKBOX"){
            var chk_name = $(pnk_ctrl_id).attr("name");
            $("input:checkbox[name="+chk_name+"]:checked").removeAttr("checked");
            $("input:checkbox[name="+chk_name+"][value="+pnk_value+"]").attr("checked","checked"); //wll chk only one value
        }




        if(pnk_type == "TEXT" || pnk_type == "PASSWORD"  || pnk_type == "HIDDEN"){
            $(pnk_ctrl_id).val(pnk_value);
        }
    }
    if(pnk_tagname == "TEXTAREA"){
        $(pnk_ctrl_id).val(pnk_value);
    }


    if(pnk_tagname == "SELECT"){
        $(pnk_ctrl_id+ "> option[value="+pnk_value+"]").attr("selected","selected");
    }

    if(pnk_tagname == "DIV" || pnk_tagname == "SPAN" || pnk_tagname == "P" || pnk_tagname == "TABLE" || pnk_tagname == "TBODY" || pnk_tagname == "TR" || pnk_tagname == "TD"){
        $(pnk_ctrl_id).html(pnk_value);
    }
}

pnk.Controls.get_text = function(id){
    var pnk_ctrl_id = "#" + id;
    var return_text = new Array();
    var pnk_tagname = $(pnk_ctrl_id).get(0).tagName.toUpperCase();

    if(pnk_tagname == "INPUT"){
        var pnk_type = $(pnk_ctrl_id).attr("type").toUpperCase();

        if(pnk_type == "RADIO"){
            var rad_name = $(pnk_ctrl_id).attr("name");
            return_text = $("input:radio[name="+rad_name+"]:checked").next().html();

        }


        if(pnk_type == "CHECKBOX"){
            var chk_name = $(pnk_ctrl_id).attr("name");
            $("input:checkbox[name="+chk_name+"]:checked").each(function(){
                return_text.push($(this).next().html());

            });
        }

    }

    if(pnk_tagname == "SELECT"){
        return_text = $(pnk_ctrl_id+ " option:selected").text();
    }
    return return_text;
}

pnk.Controls.set_text = function(id,text) {
    var pnk_ctrl_id = "#" + id;
    var pnk_text = text;
    var pnk_tagname = $(pnk_ctrl_id).get(0).tagName.toUpperCase();

    if(pnk_tagname == "INPUT"){
        var pnk_type = $(pnk_ctrl_id).attr("type").toUpperCase();

        if(pnk_type == "RADIO"){
            var rad_name = $(pnk_ctrl_id).attr("name");
            $("input:radio[name="+rad_name+"]:checked").next().html(pnk_text);

        }
        if(pnk_type == "CHECKBOX"){
            var chk_name = $(pnk_ctrl_id).attr("name");//alert(chk_name);
            $("input:checkbox[name="+chk_name+"]:checked").each(function(){
                $(this).next().html(pnk_text);

            });
        }
    }
    if(pnk_tagname == "SELECT"){
        $(pnk_ctrl_id+ " option:selected").text(pnk_text);
    }
}

pnk.Controls.populate_array = function(id){
    var input_name="";
    alert(id);
    var value =new Array();
    var i = 0;
    // alert($("#"+id).find("input,select,textarea").length);
    $("#"+id).find("input,select,textarea,.contentEditableDiv").each(function(){//alert("in loop")
        var name = $(this).attr("name");
        // alert(name);
        if ((pnk.Controls.get_tagname($(this).attr("id")) == "SELECT" ) || (pnk.Controls.get_tagname($(this).attr("id")) == "TEXTAREA" ))
        {
            var pnk_type = pnk.Controls.get_tagname($(this).attr("id"));

            //alert(pnk_type);
        }
        else if (pnk.Controls.get_tagname($(this).attr("id")) == "DIV" )         {

            var  pnk_type ="DIV";
        }
        else
        {

            //  alert(pnk.Controls.get_tagname($(this).attr("id"))) ;
            var pnk_type = $(this).attr("type").toUpperCase();

        }
        if(pnk_type == "CHECKBOX" || pnk_type == "RADIO" || $(this).get(0).tagName.toUpperCase() == "SELECT")   {
            if (pnk_type == "CHECKBOX")
            {
                //alert(name);
                //myel = "#" + id + ":checked";
                //$("#")
                //alert($(this).attr("checked"));
                if ($(this).attr("checked") == false)
                {
                    return ;

                }


            }
            if(name == input_name){return;}
            else{
                // alert($(this).attr("name"));



                value[i] = name + "=" +pnk.Controls.get_value($(this).attr("id"));
                //  alert(value[i]);

                input_name = name;
                i++;
            }
        }

        if(pnk_type == "TEXT" || pnk_type == "PASSWORD" || pnk_type == "HIDDEN"){
            value[i] = name + "=" +pnk.Controls.get_value($(this).attr("id"));
            i++;
        }
        if (pnk_type == "DIV")
        {
            //value[i] = name + "=" +  encodeURI($(this).cleanHtml());     //for content editor bootstrap-wysiwyg @ https://mindmup.github.io/bootstrap-wysiwyg/
            //alert (value[i]);
            i++;
        }

        if($(this).get(0).tagName.toUpperCase() == "TEXTAREA"){
            value[i] = name + "=" +pnk.Controls.get_value($(this).attr("id"));
            i++;
        }

        if(pnk_type == "button")
            return;
    });
    //alert (value);
    return value;
}

pnk.Controls.ConvertGetStringToPost = function(getstr) {
    postStr = getstr.replace(/=/gi, '":"');
    postStr = postStr.replace(/&nbsp;/gi, '%20');
    postStr = postStr.replace(/&lt;/gi, '%3c');
    postStr = postStr.replace(/&gt;/gi, '%3e');
    //postStr = postStr.replace(/&equals;/gi, '%3d');
    postStr = postStr.replace(/&/gi, '","');
    postStr = '"' + postStr + '"';
    //alert(postStr);
    //postStr = "'" + postStr + "'";
    return postStr;
}

pnk.Controls.Populate_Get_String = function(ide){


    y = 0;
    if (pnk.Controls.WetherControl(ide) == 1) {

        y = ide + "=" + pnk.Controls.get_value(ide);

    }

    else {

        var res = pnk.Controls.populate_array(ide);

        //  alert(res);

        //var result =[];
        y = res.join("&");
        //alert(y);
    }

    return y;
}

pnk.Controls.WetherControl = function(id) {

    elem = "#" + id;
    tagName = $(elem)[0].tagName.toUpperCase();
    if ((tagName == "INPUT") || (tagName == "SELECT") || (tagName == "TEXTAREA"))
        return 1;
    else
        return 0;
}

pnk.Controls.GetDataString = function (id) {
    var getDataStr = "";
    elem = "#" + id;
    tagName = $(elem)[0].tagName.toUpperCase();
    if ((tagName == "INPUT") || (tagName == "SELECT") || (tagName == "TEXTAREA"))
    {
        getDataStr += "&" + id + "=" + pnk.Controls.get_value(id);
    }
    else
    {
        var i = 0;
        //  alert($("#"+id).find("input,select,textarea").length);
        $("#"+id).find("input,select,textarea,.contentEditableDiv").each(function(){//alert("in loop")
            //var name = $(this).attr("name");
            //var id =   $(this).attr("id");
            // alert(name);


            //  alert($(this).get(0).tagName);
            if ( $(this).get(0).tagName.toUpperCase() == "INPUT" )
            {
                if (( $(this).attr("type").toUpperCase() == "TEXT" ) || ( $(this).attr("type").toUpperCase() == "PASSWORD") || ( $(this).attr("type").toUpperCase() == "HIDDEN") || ( $(this).attr("type").toUpperCase() == "EMAIL") || ($(this).attr("type").toUpperCase() == "DATETIME") )
                {
                    var txtStr = $(this).val();
                    txtStr = txtStr.replace('&','pnk_Amp');

                    getDataStr += "&" + $(this).attr("id") + "=" + txtStr;

                }
                else if (( $(this).attr("type").toUpperCase() == "BUTTON") || ($(this).attr("type").toUpperCase() == "SUBMIT"))
                {


                }
                else if ($(this).attr("type").toUpperCase() ==  "CHECKBOX")
                {
                    //alert("checkbox found");
                    if ($(this).prop('checked'))
                    {
                        getDataStr += "&" + $(this).attr("id") + "=" + $(this).val();
                        // postDataObj[$(this).attr("id")] = $(this).val();

                    }
                    /*
                     if ($(this).attr("checked") == false)
                     {
                     // continue ;

                     }
                     else
                     {
                     postDataObj[id] = $(this).val();

                     }
                     */

                }
                else if ($(this).attr("type").toUpperCase() ==  "RADIO")
                {

                    if ( ($(this).attr("checked") == undefined) ||  ($(this).attr("checked") == false) )
                    {
                        // continue ;

                    }
                    else
                    {

                        getDataStr += "&" + $(this).attr("name") + "=" + $(this).val();
                        //postDataObj[$(this).attr("id")] = $(this).val();

                    }


                }

            }
            else if ( $(this).get(0).tagName.toUpperCase() == "SELECT" )
            {
                //alert($(this).attr("id"));
                var option = $(this).find('option:selected').val();
                if (option != "-1")
                    getDataStr += "&" + $(this).attr("id") + "=" + option;
                //postDataObj[$(this).attr("id")] = option;

            }
            else if (($(this).get(0).tagName.toUpperCase() == "TEXTAREA") || ($(this).get(0).tagName.toUpperCase() == "DIV") || (($(this).get(0).tagName.toUpperCase() == "SPAN")) )
            {
                //alert(id + "=" +  $(this).val());
                getDataStr += "&" + $(this).attr("id") + "=" + $(this).val();
                //postDataObj[$(this).attr("id")] = $(this).val();
                //   alert(id + "=" +  postDataObj.id);


            }
        });
    }
    //    alert(getDataStr.substr(1));
    return getDataStr.substr(1);
}

pnk.Controls.GetPostDataObject = function(id){
    var postDataObj = {};
    elem = "#" + id;
    alert($(elem).length);
    tagName = $(elem)[0].tagName.toUpperCase();
    if ((tagName == "INPUT") || (tagName == "SELECT") || (tagName == "TEXTAREA"))
    {
        postDataObj.id = pnk.Controls.get_value(id);
    }
    else
    {
        var i = 0;
        //  alert($("#"+id).find("input,select,textarea").length);
        $("#"+id).find("input,select,textarea,.contentEditableDiv").each(function(){//alert("in loop")
            //var name = $(this).attr("name");
            //var id =   $(this).attr("id");
            // alert(name);


            //  alert($(this).get(0).tagName);
            if ( $(this).get(0).tagName.toUpperCase() == "INPUT" )
            {
                if (( $(this).attr("type").toUpperCase() == "TEXT" ) || ( $(this).attr("type").toUpperCase() == "PASSWORD") || ( $(this).attr("type").toUpperCase() == "HIDDEN") || ( $(this).attr("type").toUpperCase() == "EMAIL") || ($(this).attr("type").toUpperCase() == "DATETIME") )
                {

                    postDataObj[$(this).attr("id")] = $(this).val();

                }
                else if (( $(this).attr("type").toUpperCase() == "BUTTON") || ($(this).attr("type").toUpperCase() == "SUBMIT"))
                {


                }
                else if ($(this).attr("type").toUpperCase() ==  "CHECKBOX")
                {
                    //alert("checkbox found");
                    if ($(this).prop('checked'))
                    {

                        postDataObj[$(this).attr("id")] = $(this).val();

                    }
                    /*
                     if ($(this).attr("checked") == false)
                     {
                     // continue ;

                     }
                     else
                     {
                     postDataObj[id] = $(this).val();

                     }
                     */

                }
                else if ($(this).attr("type").toUpperCase() ==  "RADIO")
                {
                    if ($(this).attr("checked") == false)
                    {
                        // continue ;

                    }
                    else
                    {
                        postDataObj[$(this).attr("id")] = $(this).val();

                    }


                }

            }
            else if ( $(this).get(0).tagName.toUpperCase() == "SELECT" )
            {
                var option = $(this).find('option:selected').val();
                postDataObj[$(this).attr("id")] = option;

            }
            else if (($(this).get(0).tagName.toUpperCase() == "TEXTAREA") || ($(this).get(0).tagName.toUpperCase() == "DIV") || (($(this).get(0).tagName.toUpperCase() == "SPAN")) )
            {
                //alert(id + "=" +  $(this).val());
                postDataObj[$(this).attr("id")] = $(this).val();
                //   alert(id + "=" +  postDataObj.id);


            }
        });
    }
    // alert(postDataObj);
    return postDataObj;
}

// pnk_ctrl_1_0_2 code Ends Here

// pnk_datavalidation code Starts Here

// This file contains the data validation JavaScript functions
// It is included in the HTML pages with forms that need these
// data validation routines.


// DEFINE VARIABLES

// whitespace characters
//alert("hi file loaded");
var whitespace = " \t\n\r";
var errorStyle = "color:red;";
var $errorFieldBackColor = "";
var $clearFieldBackColor = "white";
var errorPrefix = "";


function Validated(myDiv){
    //get the elements with pnkvalidate
    $formValidatedflag = true;
    //set all the previous error not to be displayed

    $(".PnkErrorMessage").html("");
    id="#"+myDiv+" input[pnkvalidate]";
    //  alert(id);
    $(id).each(function() {

        $(this).css("background-color",$clearFieldBackColor);
        $validationType = $(this).attr("pnkvalidate");
        //forceentry,forcenumber,forcedate,forcetime,forceselect,forceemail
        //alert($validationType);
        switch ($validationType) {
            case "forceentry":

                $fl = ForceEntry($(this), $(this).attr("displayFieldName"));
                //alert($fl);
                break;
            case "forcenumber":

                $fl = ForceNumber($(this), $(this).attr("displayFieldName"));

                break;
            case "forcemobile":

                $fl = ForceMobile($(this), $(this).attr("displayFieldName"));

                break;
            case "forceRmobile":

                $fl = ForceRMobile($(this), $(this).attr("displayFieldName"));

                break;
            case "forcemoney":

                $fl = ForceMoney($(this), $(this).attr("displayFieldName"));

                break;
            case "forceemail":

                $fl = ForceEmail($(this), $(this).attr("displayFieldName"));

                break;
            case "forcedate":

                $fl = ForceDate($(this), $(this).attr("displayFieldName"));

                break;
            case "forceRdate":

                $fl = ForceRDate($(this), $(this).attr("displayFieldName"));

                break;
            case "forceRemail":

                $fl = ForceREmail($(this), $(this).attr("displayFieldName"));

                break;
            case "forceRnumber":
                //alert("hi");
                $fl = ForceRNumber($(this), $(this).attr("displayFieldName"));

                break;
            case "forceradio":

                $fl = ForceRadio($(this), $(this).attr("displayFieldName"));
                //alert($fl);
                break;
            case "forcepassword":

                $fl = ForcePassword($(this), $(this).attr("displayFieldName"));
                //alert($fl);
                break;
            case "forcerpassword":

                $fl = ForceRPassword($(this), $(this).attr("displayFieldName"));
                //alert($fl);
                break;
            case "forcegroupcheckbox":

                $fl = ForceGroupCheckbox($(this), $(this).attr("displayFieldName"));
                //alert($fl);
                break;
            case "forceterms":

                $fl = ForceCheckboxTerms($(this), $(this).attr("displayFieldName"));
                //alert($fl);
                break;
            case "forcecheckbox":

                $fl = ForceCheckbox($(this), $(this).attr("displayFieldName"));
                //alert($fl);
                break;
            case "forcefloat":

                $fl = ForceFloat($(this), $(this).attr("displayFieldName"));
                //alert($fl);
                break;
            case "forceRfloat":

                $fl = ForceRFloat($(this), $(this).attr("displayFieldName"));
                //alert($fl);
                break;
        }
        if ($fl == false) $formValidatedflag = false; //if a condition is not met then set the formflag to false.
    });

    id1="#"+myDiv+" select[pnkvalidate]";
    $(id1).each(function() {

        $(this).css("background-color",$clearFieldBackColor);
        $validationType = $(this).attr("pnkvalidate");
        //forceentry,forcenumber,forcedate,forcetime,forceselect,forceemail
        //alert($validationType);
        switch ($validationType) {

            case "forceselect":
                //alert("hi");
                $fl = ForceSelect($(this), $(this).attr("displayFieldName"));

                break;
        }
        if ($fl == false) $formValidatedflag = false; //if a condition is not met then set the formflag to false.
    });

    id2="#"+myDiv+" textarea[pnkvalidate]";
    //  alert(id);
    $(id2).each(function() {

        $(this).css("background-color",$clearFieldBackColor);
        $validationType = $(this).attr("pnkvalidate");
        //forceentry,forcenumber,forcedate,forcetime,forceselect,forceemail
        //alert($validationType);
        switch ($validationType) {

            case "forceentry":

                $fl = ForceEntry($(this), $(this).attr("displayFieldName"));
                //alert($fl);
                break;
        }
        if ($fl == false) $formValidatedflag = false; //if a condition is not met then set the formflag to false.
    });
    return $formValidatedflag;
}

/****************************************************************/

// PURPOSE:  Check to see if the string passed in is a valid time.
//	A valid time is defined as a string which is postfixed with either
//  "PM" or "AM".  Next it checks to see if there is a colon in the
//  string.  If there is, it makes sure that at least one digit preceeds
//  it and two proceed it.

function IsTime(strTime){
    var strTestTime = new String(strTime);
    strTestTime.toUpperCase();

    var bolTime = false;

    if (strTestTime.indexOf("PM",1) != -1 || strTestTime.indexOf("AM",1))
        bolTime = true;

    if (bolTime && strTestTime.indexOf(":",0) == 0)
        bolTime = false;

    var nColonPlace = strTestTime.indexOf(":",1);
    if (bolTime && ((parseInt(nColonPlace) + 5) < (strTestTime.length - 1) || (parseInt(nColonPlace) + 4) > (strTestTime.length - 1)))
        bolTime = false;


    return bolTime;
}

/****************************************************************/

function replaceAll (s, fromStr, toStr)
{
    var new_s = s;
    for (i = 0; i < 100 && new_s.indexOf (fromStr) != -1; i++)
    {
        new_s = new_s.replace (fromStr, toStr);
    }
    return new_s;
}

/****************************************************************/

/* PURPOSE:  Since we are using the single tick mark as the
	string delimiter to construct our SQL queries, a string with
	a tick mark in it will cause a SQL error.  Therefore we replace
	all "'" with "''", which eliminates the possibility of a SQL error.
*/

function sqlSafe (s)
{
    var new_s = s;
    new_s = replaceAll (new_s, "'", "|");
    new_s = replaceAll (new_s, "|", "''");
    new_s = replaceAll (new_s, "\"", "|");
    new_s = replaceAll (new_s, "|", "''");
    return new_s;
}

/****************************************************************/

function makeSafe (i)
{
    i.value = sqlSafe (i.value);
}

/****************************************************************/

// Check whether string s is empty.

function isEmpty(s)
{   return ((s == null) || (s.length == 0))
}

/****************************************************************/

// Returns true if string s is empty or
// whitespace characters only.

function isWhitespace (s)

{   var i;

    // Is s empty?
    if (isEmpty(s)) return true;

    // Search through string's characters one by one
    // until we find a non-whitespace character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {
        // Check that current character isn't whitespace.
        var c = s.charAt(i);

        if (whitespace.indexOf(c) == -1) return false;
    }

    // All characters are whitespace.
    return true;
}

/****************************************************************/

// isEmail (STRING s [, BOOLEAN emptyOK])
//
// Email address must be of form a@b.c ... in other words:
// * there must be at least one character before the @
// * there must be at least one character before and after the .
// * the characters @ and . are both required
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.
function ForceEmail(objField,displayFieldName){
    //alert("hi");
    //var strField = new String(objField.attr("value"));

    var strField = new String(objField.val());
    //alert(strField);

    if (!(isEmail(strField))) {
        //errorMessage = "Invalid Email for" + displayFieldName;
        errorMessage ="Invalid Email"  ;
        DisplayError(objField,errorMessage)
        objField.focus();
        objField.select();
        return false;
    }
    return true;

}
function isEmail (s){

    /*
    if (isEmpty(s))
       if (isEmail.arguments.length == 1) return defaultEmptyOK;
       else return (isEmail.arguments[1] == true);
   */
    // is s whitespace?
    if (isWhitespace(s)) return false;

    // there must be >= 1 character before @, so we
    // start looking at character position 1
    // (i.e. second character)
    var i = 1;
    var sLength = s.length;

    // look for @
    while ((i < sLength) && (s.charAt(i) != "@"))
    { i++
    }

    if ((i >= sLength) || (s.charAt(i) != "@")) return false;
    else i += 2;
    //alert("hi");
    // look for .
    while ((i < sLength) && (s.charAt(i) != "."))
    { i++
    }

    // there must be at least one character after the .
    if ((i >= sLength - 1) || (s.charAt(i) != ".")) return false;
    else return true;
}

/****************************************************************/

// Checks to see if a required field is blank.  If it is, a warning
// message is displayed...

function ForceEntry(objField, displayFieldName){
    var strField = new String(objField.val());
    if (isWhitespace(strField)) {
        errorMessage = displayFieldName + " cannot be left blank";
        DisplayError(objField,errorMessage)
        objField.focus();
        objField.select();
        return false;
    }
    return true;
}

/****************************************************************/

function ForceSelect(objField,displayFieldName){

    var strField = new String(objField.val());

    id = objField.attr("id");
    option = "#"+id  + " option[@selected]";
    //  alert(objField.attr("value"));
    //alert();
    //alert(option);
    //alert($(option));
    if (strField  < 0)
    {

        errorMessage = "Please select a " + displayFieldName;
        DisplayError(objField,errorMessage)
        objField.focus();
        return false;
    }
    return true;
}

// Returns true if the string passed in is a valid number
//  (no alpha characters), else it displays an error message

function ForceNumber(objField,displayFieldName) {   //alert("hi");
    var strField = new String(objField.val());

    if (isWhitespace(strField)) return true;

    var i = 0;

    for (i = 0; i < strField.length; i++)
        if (strField.charAt(i) < '0' || strField.charAt(i) > '9') {
            errorMessage = displayFieldName + " must be a valid numeric entry.  Please do not use commas or dollar signs or any non-numeric symbols.";
            DisplayError(objField,errorMessage)
            objField.focus();
            return false;
        }

    return true;

}

function ForceFloat(objField,displayFieldName) {
    var countminus = 0;
    var countplus = 0;
    var countpoint = 0;
    var strField = new String(objField.val());

    if (isWhitespace(strField)) return true;

    var i = 0;

    for (i = 0; i < strField.length; i++) {
        //alert(strField.charAt(i));
        if ((strField.charAt(i) < '0' || strField.charAt(i) > '9') && strField.charAt(i) != '.' && strField.charAt(i) != '-' && strField.charAt(i) != '+') {
            errorMessage = displayFieldName + " must be a valid numeric entry. Allowed speciel characters are (+, -, .)";
            DisplayError(objField, errorMessage)
            objField.focus();
            return false;
        }
        else if (strField.charAt(i) == '-') {
            countminus = countminus + 1;
        }
        else if (strField.charAt(i) == '+') {
            countplus = countplus + 1;
        }
        else if (strField.charAt(i) == '.') {
            countpoint = countpoint + 1;
        }
    }
    //alert(countminus);
    if(countminus >1 || countplus >1 || countpoint> 1){
        errorMessage = "Any Symbol should be used only once";
        DisplayError(objField, errorMessage)
        objField.focus();
        return false;
    }
    else if(countminus >=1 && countplus >=1){
        errorMessage = "+ and - Symbol should not be used same time.";
        DisplayError(objField, errorMessage)
        objField.focus();
        return false;
    }
    else
    {
        return true;
    }
}

function ForceRFloat(objField,displayFieldName) {
    var countminus = 0;
    var countplus = 0;
    var countpoint = 0;
    var strField = new String(objField.val());

    if (isWhitespace(strField)) {
        errorMessage = displayFieldName + " cannot be left blank. Space Not Allowed";
        DisplayError(objField, errorMessage)
        objField.focus();
        objField.select();
        return false;
    }

    var i = 0;

    for (i = 0; i < strField.length; i++) {
        //alert(strField.charAt(i));
        if ((strField.charAt(i) < '0' || strField.charAt(i) > '9') && strField.charAt(i) != '.' && strField.charAt(i) != '-' && strField.charAt(i) != '+') {
            errorMessage = displayFieldName + " must be a valid numeric entry. Allowed speciel characters are (+, -, .)";
            DisplayError(objField, errorMessage)
            objField.focus();
            return false;
        }
        else if (strField.charAt(i) == '-') {
            countminus = countminus + 1;
        }
        else if (strField.charAt(i) == '+') {
            countplus = countplus + 1;
        }
        else if (strField.charAt(i) == '.') {
            countpoint = countpoint + 1;
        }
    }
    //alert(countminus);
    if(countminus >1 || countplus >1 || countpoint> 1){
        errorMessage = "Any Symbol should be used only once";
        DisplayError(objField, errorMessage)
        objField.focus();
        return false;
    }
    else if(countminus >=1 && countplus >=1){
        errorMessage = "+ and - Symbol should not be used same time.";
        DisplayError(objField, errorMessage)
        objField.focus();
        return false;
    }
    else
    {
        return true;
    }
}

function ForceRMobile(objField,displayFieldName){   //alert("hi");
                                                    //  var strField = new String(objField.attr("value"));
    var strField = new String(objField.val());

    if (isWhitespace(strField))
    {
        errorMessage = displayFieldName + " No. is required.";
        DisplayError(objField,errorMessage)
        objField.focus();
        return false;
    }
    else
    {
        var i = 0;
        for (i = 0; i < strField.length; i++)
        {
            if (strField.charAt(i) < '0' || strField.charAt(i) > '9')
            {
                errorMessage = displayFieldName + " No. must be a valid Numeric entry.";
                DisplayError(objField,errorMessage)
                objField.focus();
                return false;
            }
            else if(/\s/g.test(strField))
            {
                errorMessage = displayFieldName + " No. doesn't contain any blank Space .";
                DisplayError(objField,errorMessage)
                objField.focus();
                return false;
            }
            else if(strField.length !=10)
            {
                errorMessage = displayFieldName + " No. must be of 10 digits";
                DisplayError(objField,errorMessage)
                objField.focus();
                return false;
            }
        }
        return true;
    }
}

function ForceMobile(objField,displayFieldName){   //alert("hi");
                                                   //  var strField = new String(objField.attr("value"));
    var strField = new String(objField.val());

    var i = 0;
    for (i = 0; i < strField.length; i++)
    {
        if (strField.charAt(i) < '0' || strField.charAt(i) > '9')
        {
            errorMessage = displayFieldName + " No. must be a valid Numeric entry.";
            DisplayError(objField,errorMessage)
            objField.focus();
            return false;
        }
        else if(/\s/g.test(strField))
        {
            errorMessage = displayFieldName + " No. doesn't contain any blank Space .";
            DisplayError(objField,errorMessage)
            objField.focus();
            return false;
        }
        else if(strField.length !=10)
        {
            errorMessage = displayFieldName + " No. must be of 10 digits";
            DisplayError(objField,errorMessage)
            objField.focus();
            return false;
        }
    }
    return true;

}

function ForcePassword(objField, displayFieldName){
    //alert("hi");
    strPassField = new String(objField.val());
    //Make Global
    //window.strPassField = strPassField;
    if (isWhitespace(strPassField)) {
        errorMessage = displayFieldName + " cannot be left blank. Space Not Allowed";
        DisplayError(objField,errorMessage)
        objField.focus();
        objField.select();
        return false;
    }
    else {
        var len = strPassField.length;
        if(len>=6){
            return true;
        }
        else{
            errorMessage = displayFieldName + " Must be of Minimum 6 digit. Space Not Allowed";
            DisplayError(objField,errorMessage)
            objField.focus();
            objField.select();
            return false;
        }
    }
}

function ForceRPassword(objField, displayFieldName){
    //alert("hi");
    var strRPassField = new String(objField.val()).trim();
    if (isWhitespace(strRPassField)) {
        errorMessage = displayFieldName + " cannot be left blank. Space Not Allowed";
        DisplayError(objField,errorMessage)
        objField.focus();
        objField.select();
        return false;
    }
    else {
        var len = strRPassField.length;
        if(len>=6){
            if(strRPassField == strPassField) {
                return true;
            }
            else{
                errorMessage = "Password do not Matched.";
                DisplayError(objField,errorMessage)
                objField.focus();
                objField.select();
                return false;
            }
        }
        else{
            errorMessage = displayFieldName + " Must be of Minimum 6 digit. Space Not Allowed";
            DisplayError(objField,errorMessage)
            objField.focus();
            objField.select();
            return false;
        }
    }
}

/****************************************************************/

// Returns true if the string passed in is a valid money
//  (no alpha characters except a decimal place),
//   else it displays an error message

function ForceMoney(objField, FieldName){
    var strField = new String(objField.attr("value"));

    if (isWhitespace(strField)) return true;

    var i = 0;

    for (i = 0; i < strField.length; i++)
        if ((strField.charAt(i) < '0' || strField.charAt(i) > '9') && (strField.charAt(i) != '.')) {
            errorMessage = FieldName + " must be a valid numeric entry.Please do not use commas or dollar signs or any non-numeric symbols.";
            DisplayError(objField,errorMessage);
            objField.focus();
            return false;
        }

    return true;
}

/****************************************************************/

// Right trims the string...  Useful for SQL datatypes of CHAR

function RTrim(strTrim){
    var str = new String(strTrim);
    var i = 0;
    var c = "";
    var endpos = 0

    for (i = str.length; i >= 0 && endpos == 0; i = i - 1) {
        c = str.charAt(i);
        if (whitespace.indexOf(c) == -1)
            endpos = i;
    }

    return str.substring(0,endpos+1);
}

/****************************************************************/

/* PURPOSE:  Returns true if the string is a valid date number.
	A method is passed in (1 = month, 2 = day).  If the string is
	nonnumeric, false is passed back.  If the day in the date string
	is greater than 31, false is returned.  If the month is greater
	than 12, an error is returned.
*/

function isDateNumber(strNum,method){
    var str = new String(strNum);
    var i = 0;

    if (isNaN(parseInt(str)) || parseInt(str) < 0) return false;

    if (method == 2)
        if (parseInt(str) > 31)
            return false;
    if (method == 1)
        if (parseInt(str) > 12)
            return false;

    for (i = 0; i < str.length; i++)
        if (str.charAt(i) < '0' || str.charAt(i) > '9')
            return false;


    return true;
}

/****************************************************************/

// Displays an alert box with the passed in string...

function PromptErrorMsg(Field,fieldName){
    errorMessage = "Invalid Date. " + fieldName + "'s format should be in MM/DD/YYYY format.";
    DisplayError(Field,errorMessage);
    Field.focus();
}

/****************************************************************/

/* PURPOSE: Checks to see if the string is a valid date.  A valid
	date is defined as any of the following:

		MM/DD/YY, MM/DD/YYYY, M/D/YY, M/D/YYYY,
		MM-DD-YY, MM-DD-YYYY, M-D-YY, M-D-YYYY
*/

function ForceDate(objField,strField){
    var str = new String(objField.attr("value"));

    if (isWhitespace(str)) {
        return true;
        // if the field is empty, just return true...
    }

    var i = 0, count = str.length, j = 0;
    while ((str.charAt(i) != "/" && str.charAt(i) != "-") && i < count)
        i++;

    if (i == count || i > 2) {
        PromptErrorMsg(objField,strField);
        return false;
    }

    var addOne = false;
    if (i == 2) addOne = true;

    if (!isDateNumber(str.substring(0,i),1)) {
        PromptErrorMsg(objField,strField);
        return false;
    }

    j = i+1;
    i = 0;

    while ((str.charAt(i+j) != "/" && str.charAt(j+i) != "-") && i+j < count)
        i++;

    if (i+j == count || i > 2) {
        PromptErrorMsg(objField,strField);
        return false;
    }

    if (!isDateNumber(str.substring(j,i+j),2)) {
        PromptErrorMsg(objField,strField);
        return false;
    }

    j = i+3;
    i = 0;

    if (addOne) j++;

    while (i+j < count)
        i++;


    if (i != 2 && i != 4) {
        PromptErrorMsg(objField,strField);
        return false;
    }

    if (!isDateNumber(str.substring(j,i+j),3)) {
        PromptErrorMsg(objField,strField);
        return false;
    }

    return true;
}

/****************************************************************/

// This function determines if the string passed in is a valid
// US zip code.  It accepts either ##### or #####-####.  If the
// string is valid, it returns true, else false.

function isZipcode(objField,displayFieldName){
    var s = new String(objField.attr("value"));

    if (s.length != 5 && s.length != 10)
    // inappropriate length
        return false;


    for (var i=0; i < s.length; i++)
        if ((s.charAt(i) < '0' || s.charAt(s) > '9') && s.charAt(i) != '-')
        {
            errorMessage = "Invalid Zip Code for " + displayFieldName ;
            DisplayError(objField,errorMessage);
            return false;
        }
    return true;
}

/****************************************************************/

// This function ensures that a field is less than or equal to the
// Length passed in.  You must call this function with the element
// name in your form (for example: "ForceLength(document.forms[0].txtElement)"
// as opposed to "ForceLength(document.forms[0].txtElement.value)"
// If the field's value is too large, an error message is displayed
// and false is returned, else true is returned.

function ForceMaxLength(objField, nLength, strWarning){
    var strField = new String(objField.attr("value"));

    if (strField.length > nLength) {
        errorMessage = "Maximum Allowed Length is " + nLength ;
        DisplayError(objField,errorMessage);
        return false;
    } else
        return true;
}

function ForceMinLength(objField, nLength, strWarning){
    var strField = new String(objField.attr("value"));

    if (strField.length < nLength) {
        errorMessage = "Minimum Allowed Length is " + nLength ;
        DisplayError(objField,errorMessage);
        return false;
    } else
        return true;
}
// tobe modified
function ForceRange(objField, nLength, strWarning){
    var strField = new String(objField.attr("value"));

    if (strField.length > nLength) {
        errorMessage = "Maximum Allowed Length is " + nLength ;
        DisplayError(objField,errorMessage);
        return false;
    } else
        return true;
}

function DisplayError(objField,errorMessage){
    //alert( objField.offset().left  + "," + objField.width() );
    //get the x-y coordinates and width of the element
    objField.css("background-color",$errorFieldBackColor);
    xpos = objField.offset().left + objField.width()  ;
    xpos += 50;
    ypos = objField.offset().top ;
    //alert(xpos);

    //objField.after("<span id='err_"+ objField.attr("id") + "' class='PnkErrorMessage' style='font-size:11px;font-weight:normal;left:"+xpos + ";top:"+ypos + ";" + errorStyle + "'   >"+ errorPrefix + errorMessage + "</span>");
    objField.after("<span id='err_"+ objField.attr("id") + "' class='PnkErrorMessage' style='font-size:11px;font-weight:normal;left:"+xpos + ";top:"+ypos + ";" + errorStyle + "'   >"+ errorPrefix + errorMessage + "</span>");

    //  $('body').after("<span id='err_"+ objField.attr("id") + "' class='PnkValidationErrorMessage' style='position:absolute;" + errorStyle + "'>"+ errorPrefix + errorMessage + "</span>");

    //  $("#err_"+ objField.attr("id")).css({"left":xpos,"top":ypos});
    // $("#"+ objField.attr("id")).css({"margin-bottom":"15px"});
}

function DisplayCheckBoxError(objField,errorMessage){
    //alert( objField.offset().left  + "," + objField.width() );
    //get the x-y coordinates and width of the element
    objField.css("background-color",$errorFieldBackColor);
    xpos = objField.offset().left + objField.width()  ;
    xpos += 50;
    ypos = objField.offset().top ;
    //alert(xpos);
    //alert(ypos);

    objField.after("<span id='err_"+ objField.attr("id") + "' class='PnkErrorMessage' style='font-size:11px;position:absolute;top:20px;font-weight:normal;left:"+xpos + ";top:"+ypos + ";" + errorStyle + "'   >"+ errorPrefix + errorMessage + "</span>");

    //  $('body').after("<span id='err_"+ objField.attr("id") + "' class='PnkValidationErrorMessage' style='position:absolute;" + errorStyle + "'>"+ errorPrefix + errorMessage + "</span>");

    //  $("#err_"+ objField.attr("id")).css({"left":xpos,"top":ypos});
    // $("#"+ objField.attr("id")).css({"margin-bottom":"15px"});
}
//not presently called
function RemovePreviouslySetErrorIfAny(objField){
    errorId = "err_" + objField.attr("id") ;
    //alert($(errorId).html());


}

function ForceRNumber(objField,displayFieldName){
    //alert("hi");
    if (ForceEntry(objField,displayFieldName))
    {
        if (ForceNumber(objField,displayFieldName))
            return true;
        else
            return false;
    }
    else
        return false;

}

function ForceRDate(objField,displayFieldName){
    if (ForceEntry(objField,displayFieldName))
    {
        if (ForceDate(objField,displayFieldName))
            return true;
        else
            return false;
    }
    else
        return false;
}

function ForceREmail(objField,displayFieldName){
    if (ForceEntry(objField,displayFieldName))
    {
        if (ForceEmail(objField,displayFieldName))
            return true;
        else
            return false;
    }
    else
        return false;


}
// -->
/****************************************************************/

// Checks to see if a redio is checked or not.  If it is, a warning
// message is displayed...

function ForceRadio(objField, displayFieldName){
    //alert("hi");
    var strField = new String(objField.attr("name"));
    var flag = false;
    $(":radio[name='" + strField + "']").each(function () {
        if ($(this).attr("checked") == true) {
            flag = true;
            // alert("yes");
        }
    });
    if (flag==false) {
        errorMessage = "<br />"+displayFieldName + " Please select an option";
        DisplayError(objField,errorMessage)
        objField.focus();
        objField.select();
        return false;
    }
    return true;
}

/****************************************************************/

/****************************************************************/

// Checks to see if a checkbox is checked or not.  If is it not, a warning
// message is displayed...ForceSingleCheckbox

function ForceGroupCheckbox(objField, displayFieldName){
    //alert(displayFieldName);
    var strField = new String(objField.attr("pnkgroup"));
    //alert(strField);
    var flag = false;
    $(":checkbox[pnkgroup='" + strField + "']").each(function () {
        //alert($(this).prop("checked"));
        if ($(this).prop("checked") == true) {
            flag = true;
        }
    });
    if (flag==false) {
        errorMessage = displayFieldName + "Please select atleast one option";
        DisplayCheckBoxError(objField,errorMessage)
        objField.focus();
        objField.select();
        return false;
    }
    return true;
}

function ForceCheckboxTerms(objField, displayFieldName){
    //alert(displayFieldName);
    var strField = new String(objField.attr("pnkgroup"));
    //alert(strField);
    var flag = false;
    $(":checkbox[pnkgroup='" + strField + "']").each(function () {
        //alert($(this).prop("checked"));
        if ($(this).prop("checked") == true) {
            flag = true;
        }
    });
    if (flag==false) {
        errorMessage = "Please agree to Our "+displayFieldName;
        DisplayCheckBoxError(objField,errorMessage)
        objField.focus();
        objField.select();
        return false;
    }
    return true;
}

function ForceCheckbox(objField, displayFieldName){
    //alert(displayFieldName);
    var strField = new String(objField.attr("pnkgroup"));
    //alert(strField);
    var flag = false;
    $(":checkbox[pnkgroup='" + strField + "']").each(function () {
        //alert($(this).prop("checked"));
        if ($(this).prop("checked") == true) {
            flag = true;
        }
    });
    if (flag==false) {
        errorMessage = "Please select the Option to "+displayFieldName;
        DisplayCheckBoxError(objField,errorMessage)
        objField.focus();
        objField.select();
        return false;
    }
    return true;
}
/****************************************************************/

// pnk_datavalidation code Ends Here

// pnk_grid_1_0_1 code Starts Here

Grid = function(ContainerId,grdId){
    //_dataset = pnkDataset()
    this.WhetherFrameworkGrid = true;
    /***********88 Things To Be Set For Non-Framework Grid ******************/
    this.Metarow = {pkey:"",totalRecordsInDb:"",totalRecordsInSet:"",totalRecordsInCurrentSet:"",setNo:""};
    //this.metarow.pkey = "";
    //this.metarow.totalRecordsInDb = "";
    //this.metarow.totalRecordsInSet = "";
    //this.metarow.setNo = "";
    this.rowsName = "";
    this.nestedRowsName = "";
    /*******************************************************************************/
    // this.rows = "";
    var _beforeRowBoundArray;
    var _afterRowBoundArray;
    this.ItemTemplate = "";
    this.DataSet = null;
    this.CurrentSet = 0;
    //this.DataSetId = ""; //commented for future versions
    if (grdId == undefined) grdId = "";
    this.GridId = grdId;
    this.RowsId = "";
    this.SummaryRowBind = "";
    this.RowBoundFunc = "";
    this.DataRowBound = "";
    this.NestedDataRowBound = "";
    this.SummaryRowBound = "";
    this.AddNewRowsAt = "new";
    this.ContainerId = ContainerId;
    this.templateStr = FullHtml($("#" + this.ContainerId + " [data-pnk-repeat-rowtype='templaterow']").clone().removeAttr('data-pnk-repeat-rowtype').removeClass("templaterow").addClass('pnkrow new newlyadded'));;
    //alert(this.templateStr);
    //this.nestRowStructure = FullHtml($(" [data-pnk-repeat-rowtype='nestedtemplaterow']", myrow).clone().removeClass('[data-pnk-repeat-rowtype]').addClass("pnknrow").css('display', ''));
    this.nestRowStructure  = FullHtml($("#" + this.ContainerId +" [data-pnk-repeat-rowtype='nestedtemplaterow']").clone().removeAttr('data-pnk-repeat-rowtype').addClass("pnknrow").css('display', ''));
    //alert(this.nestRowStructure);
    this.ProcessRows = _ProcessRows;
    this.AddNewRowToStructure = _AddNewRowToStructure;
    //_ProcessNestedRows
    this.ProcessNestedRows = _ProcessNestedRows;
    this.ProcessNestedItemStartRows = _ProcessNestedItemStartRows;
    this.ProcessSummaryRow = _ProcessSummary;

    this.ModifyRow = _ModifyRow;
    this.ModifyDefaultRow = _ModifyDefaultRow;
    this.ModifyNestedRow = _ModifyNestedRow;
    this.ModifyNestedDefaultRow = _ModifyNestedDefaultRow;
    this.ModifySummaryRow = _ModifySummaryRow;
    this.ModifyDefaultSummaryRow = _ModifyDefaultSummaryRow;
    this.DigitNavigationStyle = true;
    this.DigitNavigationTabs = "";
    this.NavigationStyle = "";
    this.PrevNavText = "<";
    this.NextNavText = ">";
    this.FirstNavText = "<<";
    this.LastNavText = ">>";
    this.Url = "";
    this.DetailUrl = "";
    this.DeleteUrl = "";
    this.Load_SubSequent = _Load_SubSequent;
    this.CallBackFunc = "";
    this.CurrentRowSet = 0;
    this.arrCalledSets = new Array();
    this.Search = _Search;
    this.SearchUrl = "";
    this.SearchCallBackFunc = "";
    this.TemplateRowBound = "";
    //_Search();
    //this.AddFieldToDataRow = _AdFieldToDataRow;
    this.Init = function(){
        $("#" + this.ContainerId).append("<input type='hidden' id='grd_SearchField' name='grd_SearchField'>");
        $("#" + this.ContainerId).append("<input type='hidden' id='grd_SearchValue' name='grd_SearchValue'>");
        $("#" + this.ContainerId).append("<input type='hidden' id='grd_SortField' name='grd_SortField'>");
        $("#" + this.ContainerId).append("<input type='hidden' id='grd_Order' name='grd_Order'>");
        $("#" + this.ContainerId).append("<input type='hidden' id='grd_NoOfRec' name='grd_NoOfRec'>");

    };



    function AddFieldToDataRow(row,name, value)
    {
        row[name] = value;
        return row;

    }

    this.Bind = function (ds,total){
        //alert( "datasetid" +  this.DataSetId + "  currentrowset=" + this.CurrentRowSet );
        //alert(DataStore.GetDataSet(this.DataSetId).RowSet[this.CurrentRowSet]);
        //alert(DataStore.GetDataSet(this.DataSetId).GetRowSet(this.CurrentRowSet)[this.RowsId]);
        //this.DataSet = DataStore.GetDataSet(this.DataSetId).GetRowSet(this.CurrentRowSet)[this.RowsId];
        //alert("hi...");
        //this.DataSet = DataStore.GetDataSet(this.DataSetId).GetRowSet(this.CurrentRowSet);
        this.DataSet = ds;

        // alert(this.DataSet);
        //this.DataSet = $("#" + this.ContainerId).attr("data-pnk-bind-datasource");
        if (this.DataSet == "")
        {
            //alert("Dataset declaration missing in template"); return;
        }
        // alert("dataset =" + this.DataSet);
        //  this._ProcessBeforeEvents();
        if(total == undefined){
            this.ProcessRows('all');
        }
        else{
            this.ProcessRows(total);
        }
        this.ProcessSummaryRow();

        // _ProcessAfterEvents();
        // this.arrCalledSets.push(this.CurrentRowSet);
        this.arrCalledSets.push(this.CurrentRowSet);
    };
    this.Autogenerate = function ()
    {
    };
    this.Display = function (effect)
    {
    };

    function _AddNewRowToStructure(containerId, pos, noOfRowsAdded) {
        // alert(newRowStructure);
        //now add the new structure to existing container
        if (pos == "new") {
            //alert(newRowStructure);
            //alert($("#" + containerId + " .templaterow").html());
            //$("#" + containerId + ".templaterow").after();
            if (noOfRowsAdded == 0) {
                $("#" + containerId + " .pnkrow").remove();
                $("#" + containerId + " .templaterow").after(newRowStructure);
            }
            //alert($("#" + containerId).html());
        }
        if (pos == "top") {
            if (noOfRowsAdded == 0) {

                if ($("#" + containerId + " .pnkrow").length > 1)
                    $("#" + containerId + " .pnkrow:first").before(newRowStructure);
                else
                    $("#" + containerId + " .templaterow").after(newRowStructure);
            }
            //                $(newRowStructure).after("#" + containerId + " .templaterow");
        }
        if (pos == "bottom") {
            // alert('Rows added '+noOfRowsAdded);
            if (noOfRowsAdded == 0) {
                // alert();
                //  alert('length '+$("#" + containerId + " .pnkrow").length);
                if ($("#" + containerId + " .pnkrow").length >= 1)
                    $("#" + containerId + " .pnkrow:last").after(newRowStructure);
                else
                    $("#" + containerId + " .templaterow").after(newRowStructure);
            }
        }
        //for subsequent row's structure in any set (new,bottom,top) addition
        if (noOfRowsAdded != 0) {

            $("#" + containerId + " .pnkrow").filter(":last").after(newRowStructure);
            //$("#" + containerId + " .pnkrow.newlyadded").after(newRowStructure);
            //$("#" + containerId + " .pnkrow.newlyadded").filter(":first").removeClass("newlyadded");
        }
    }

    function _ProcessRows(totalRecord){
        //get grid template attributes
        //pos = $("#" + this.ContainerId).attr("data-pnk-newrows-position");
        //alert(pos);
        if (this.AddNewRowsAt != undefined)
            pos = this.AddNewRowsAt;
        if (pos == undefined) pos = "new";
        // alert(pos);
        //alert(this.DataSet);
        if (!(this.WhetherFrameworkGrid)) {
            if (this.Metarow.pkey != "") {
                pkey = this.Metarow.pkey;
            }
            else
            {
                alert("Metarow.pkey should be set." );
            }

            if (this.Metarow.totalrecordsinset != "")
            {
                var totalRecordsInSet = this.Metarow.totalrecordsinset;
            }
            else
            {
                alert("Metarow.totalrecordsinset should be set." );
            }

            /*
            if (this.metarow.t != "")
            {

                alert("this.metarow.totalrecordsinset should be set." );
            }
            else
            {
                var totalRecordsInSet = this.metarow.totalrecordsinset;
            }
            */

        }
        else {
            //alert(JSON.stringify(this.DataSet,null,4));
            pkey = this.DataSet.metarow.pkey;

            var totalRecordsInSet = this.DataSet.metarow.totalrecordsinset;

        }

        //alert(pkey);
        //return;
        $("#grd_NoOfRec").val(totalRecordsInSet);
        // rowStructure = FullHtml($("#" + this.ContainerId + " [data-pnk-repeat-rowtype='templaterow']").clone().removeAttr('data-pnk-repeat-rowtype').removeClass("templaterow").addClass('pnkrow new'));
        rowStructure = this.templateStr;
        //alert(rowStructure);
        //alert(rowStructure);
        //return;
        if (!(this.WhetherFrameworkGrid))
        {
            rowCount = this.DataSet.length;
        }
        else rowCount = this.DataSet.rows.length;
        //  alert(rowCount);
        if (rowCount <= 0)
        {
            //  alert(this.ContainerId);
            $("#" + this.ContainerId + ' .pnkrow').remove();
            return ;
        }
        //get the placement position
        //pos = resultObj.placement.at;
        i = 0; k = 0;
        //alert($("#" + this.ContainerId).html());
        cls = $("#" + this.ContainerId + " [data-pnk-bind-datamembers]").attr("data-pnk-bind-datamembers");
        // alert(this.ContainerId + "_main.." + cls);
        fieldsArray = cls.split(",");
        fieldNamesArray = new Array();
        for (i = 0; i < fieldsArray.length; i++) {
            //if ((i == 0) || (i == 1)) continue;
            fieldNamesArray[k] = fieldsArray[i];
            // alert(fieldNamesArray[k]);
            k++;
        }
        totalmainfields = fieldNamesArray.length;
        ////check whether the structure has nested rows
        wetherNested = false;
        //alert(this.ContainerId);
        if ($("#" + this.ContainerId + " [data-pnk-behavior-nested-repeat] [data-pnk-repeat-rowtype='nestedtemplaterow']").length > 0) {
            wetherNested = true;
            //get the nested structure
            //alert($("#" + this.ContainerId + " [data-pnk-repeat-rowtype='nestedtemplaterow']").length);
            //nestRowStructure = FullHtml($("#" + this.ContainerId + " [data-pnk-repeat-rowtype='templaterow'] [data-pnk-repeat-rowtype='nestedtemplaterow']").clone().removeAttr('data-pnk-repeat-rowtype').addClass("pnknrow").css('display', ''));
            //alert(nestRowStructure);
            i = 0; k = 0;
            cls = $("#" + this.ContainerId + " [data-pnk-behavior-nested-repeat][data-pnk-bind-nesteddatamembers]").attr("data-pnk-bind-nesteddatamembers");
            //alert(this.ContainerId + "_nested.." + cls);
            fieldsArray = cls.split(",");
            nestFieldNamesArray = new Array();
            for (i = 0; i < fieldsArray.length; i++) {
                if ((i == 0) || (i == 1)) continue;
                nestFieldNamesArray[k] = fieldsArray[i];
                //alert(fieldNamesArray[k]);
                k++;
            }
        }
        noOfItemStarts = 0;
        wetherDataList = false;
        if ($("#" + this.ContainerId + " [data-pnk-repeat-rowtype='templaterow'] [data-pnk-repeat-itemstart]").length > 0) {
            noOfItemStarts = ($("#" + this.ContainerId + " [data-pnk-repeat-rowtype='templaterow'] [data-pnk-repeat-itemstart]").length);
            //alert(noOfItemStarts);
            //itemTemplateStructure = FullHtml($("#" + this.ContainerId + " [data-pnk-repeat-rowtype='templaterow'] [data-pnk-repeat-itemstart=1]").clone().addClass('pnkrow new').css('display', ''));
            itemTemplateStructure = this.templateStr;
            //alert(itemTemplateStructure);
            wetherDataList = true;

        }
        noOfRowsAdded = 0;
        //alert(rowCount);
        //Modified by Prabhash
        if(totalRecord != 'all'){
            rowCount = totalRecord;
        }
        for (rowCounter = 0; rowCounter < rowCount;) {

            //alert(rowCounter);
            //alert(this.DataSet.rows);
            if (!(this.WhetherFrameworkGrid))
            {
                // alert("hi..");
                row = this.DataSet[rowCounter];
            }
            else {
                //alert("bye");
                row = this.DataSet.rows[rowCounter];
            }

            //make a new row structure
            newRowStructure = rowStructure;

            if (noOfItemStarts > 1) {

                this.AddNewRowToStructure(this.ContainerId, pos, noOfRowsAdded);
                that = this;
                $("#" + this.ContainerId + " .new [data-pnk-repeat-itemstart]").each(function ()
                {
                    //alert(that.ContainerId);

                    if (rowCounter < rowCount) {
                        //alert(rowCounter +"<"+ rowCount)
                        itemTempStr = $(this).html();

                        if (!(that.WhetherFrameworkGrid))
                        {
                            row = that.DataSet[rowCounter];
                        }
                        else
                            row = that.DataSet.rows[rowCounter];
                        //alert("going to call modify row");
                        //   newrow = row
                        // alert(row.index);
                        row.index = rowCounter;
                        // alert(row.index);
                        row = that.ModifyRow(row, fieldNamesArray);  //getback here
                        //alert(rowCounter + "  " +row.fName);
                        for (i = 0; i < fieldNamesArray.length; i++) {


                            //                    //replace strings in
                            k = "\{" + i + "\}";

                            if (row != undefined) {
                                // alert(rowCounter + ". Row's field " + fieldNamesArray[i] + "getting modified with" + row[fieldNamesArray[i]]);
                                if (row[fieldNamesArray[i]] == undefined) row[fieldNamesArray[i]] = " ";

                                itemTempStr = ReplaceAll(itemTempStr, k, row[fieldNamesArray[i]]);
                                // alert(itemTempStr);
                            }
                            else {
                                break;
                            }
                        }
                        alert(itemTempStr);
                        $(this).html(itemTempStr);

                        if(that.TemplateRowBound !="")
                        {
                            that.TemplateRowBound(row,$(this))
                        }
                        //to account for cases where noOfItemStarts > number of rows which can be incorporated into itemstarts

                        //catch hold of this item start structure and make its display none

                        //remove the empty itemtemplate structures from the row

                        //  alert("itemstart" + noOfItemStarts + " rowcount=" + rowCount);
                        if (noOfItemStarts > rowCount) {
                            for (i = rowCount + 1; i <= noOfItemStarts;i++ )
                            {
                                var elem = that.ContainerId + " .pnkrow [data-pnk-repeat-itemstart='" + i + "']";
                                //alert(elem);
                                $("#" + elem).remove();
                            }
                        }
                        rowBindCount = rowCount-noOfRowsAdded*noOfItemStarts;
                        if (rowBindCount < noOfItemStarts) {
                            //alert(rowBindCount);
                            for (i = noOfItemStarts ; i > rowBindCount;i-- )
                            {
                                var elem = that.ContainerId + " .pnkrow [data-pnk-repeat-itemstart='" + i + "']:last";
                                // alert(elem);
                                $("#" + elem).remove();
                            }
                        }
                        $(this).css('display', "");
                        $(this).attr("id", that.ContainerId + "_" + row[pkey]);
                        if (wetherNested) {
                            // alert(row);

                            that.ProcessNestedItemStartRows($(this), row, nestFieldNamesArray, totalmainfields);
                            //                //myrow, nestRowStructure, rowCounter, fieldNamesArray, totalmainfields, noOfItemStarts, resultObj
                        }
                        rowCounter++;
                        // alert(rowCounter);
                    }
                });
                noOfRowsAdded++;
            }
            else
            {
                newrow = row;
                // alert(newrow+ "," + fieldNamesArray);
                row.index = rowCounter;
                // alert(row.index);
                row = this.ModifyRow(newrow, fieldNamesArray);
                //alert(row);
                //replacement code for no itemstart or 1 itemstart
                //alert(rowCounter + "," + rowCount);
                for (i = 0; i < fieldNamesArray.length; i++) {
                    //replace strings in newrwstructure
                    k = "\{" + i + "\}";
                    // alert(rowCounter + ". Row's field " + fieldNamesArray[i] + "getting modified with" + row[fieldNamesArray[i]]);
                    if (row[fieldNamesArray[i]] == undefined) row[fieldNamesArray[i]] = " ";
                    newRowStructure = ReplaceAll(newRowStructure, k, row[fieldNamesArray[i]]);
                    //alert(row);
                    // alert(newRowStructure)
                }
                //alert(newRowStructure);
                // alert(rowCounter);
                //ADD THE NEW ROW TO STRUCTURE
                // alert(rowCounter);
                this.AddNewRowToStructure(this.ContainerId, pos, noOfRowsAdded);
                noOfRowsAdded++;
                // alert("before calling nested" + rowCounter + " for container "+ this.ContainerId);
                // alert(this.ContainerId + "_" + row[this.pkey]);
                $("#" + this.ContainerId + " .pnkrow.new").attr("id", this.ContainerId + "_" + row[this.pkey]);
                if (wetherNested) {
                    var nestRowStructure = "";
                    //  if(row.subStructure)
                    // alert("calling process nested rows");
                    this.ProcessNestedRows($("#" + this.ContainerId + " .pnkrow.new"), nestRowStructure, row, nestFieldNamesArray, totalmainfields, noOfItemStarts);
                }
                if(this.TemplateRowBound !="")
                {
                    this.TemplateRowBound(row,$("#" + this.ContainerId + " .pnkrow.new"));
                }
                // alert(rowCounter);
                rowCounter++;
            }
            $("#" + this.ContainerId + " .pnkrow.new").removeClass('new');
        }
        $("#" + this.ContainerId + " .pnkrow").css('display', '');
    }

    function _ModifyDefaultRow(row, fieldsArray){


        //default replacement for photo and image keywords

        for (i = 0; i < fieldsArray.length; i++)
        {
            if ((fieldsArray[i].toLowerCase().indexOf("photo") >= 0) && (row[fieldsArray[i]] != undefined))
            {


                row[fieldsArray[i]] = "<img src='" + pnk.AssetIndirectPath  + row[fieldsArray[i]] + "' />";

            }
            if ((fieldsArray[i].toLowerCase().indexOf("image") >= 0) && (row[fieldsArray[i]] != undefined)) {

                row[fieldsArray[i]] = "<img src='" + pnk.AssetIndirectPath + row[fieldsArray[i]] + "' />";

            }


        }
        /*9
        if (row.substructure) {
            row.totalsubrowsinset = row.substructure.metarow.totalrecordsinset;
            row.totalsubrowsindb = row.substructure.metarow.totalrecordsindb;
        }
        else {
            row.totalsubrowsinset = "";
            row.totalsubrowsindb = "";

        }

        */
        return row;
    }

    function _ModifyRow(row, fieldsArray){
        //for eliminating duplicated modification on the rowset if called again
        for (i = 0 ; i < this.arrCalledSets.length; i++)
        {
            if (this.CurrentRowSet == this.arrCalledSets[i]) return row;
        }
        row = this.ModifyDefaultRow(row, fieldsArray);

        // alert(row);

        if (this.DataRowBound != "")
        {
            row = this.DataRowBound(row);
        }


        return row;

    }

    function _ModifyNestedDefaultRow(row, fieldsArray){


        //default replacement for photo and image keywords

        for (i = 0; i < fieldsArray.length; i++)
        {

            if ((fieldsArray[i].toLowerCase().indexOf("photo") >= 0) && (row[fieldsArray[i]] != undefined) && (row[fieldsArray[i]] != ""))
            {
                //alert(row[fieldsArray[i]]);

                row[fieldsArray[i]] = "<img src='" + pnk.AssetIndirectPath  + row[fieldsArray[i]] + "' />";

            }
            if ((fieldsArray[i].toLowerCase().indexOf("image") >= 0) && (row[fieldsArray[i]] != undefined) && (row[fieldsArray[i]] != "")) {

                row[fieldsArray[i]] = "<img src='" + pnk.AssetIndirectPath + row[fieldsArray[i]] + "' />";

            }


        }
        /*
        if (row.substructure) {
            row.totalsubrowsinset = row.substructure.metarow.totalrecordsinset;
            row.totalsubrowsindb = row.substructure.metarow.totalrecordsindb;
        }
        else {
            row.totalsubrowsinset = "";
            row.totalsubrowsindb = "";

        }

        */
        return row;
    }

    function _ModifyNestedRow(row, fieldsArray){
        //for eliminating duplicated modification on the rowset if called again
        for (i = 0 ; i < this.arrCalledSets.length; i++)
        {
            if (this.CurrentRowSet == this.arrCalledSets[i]) return row;

        }

        row = this.ModifyNestedDefaultRow(row, fieldsArray);
        if (this.NestedDataRowBound != "")
        {
            row = this.NestedDataRowBound(row);
        }
        return row;
    }

    function _ProcessNestedItemStartRows(myrow, row, fieldNamesArray, totalmainfields) {
        alert("nested row object"+row);
        if (row.substructure) {
            subrows = row.substructure.rows;
            //alert(resultObj);
            //alert(rowCounter);
            //subrows = row.subrows;
            //alert(subrows);
            nrowCount = subrows.length;
            //alert("row=" + rowCount);
            //alert($(myrow).html());
            //j = 1;
            //selectorEl = "#" + containerId + " .templaterow .itemstart." + j + " .ntemplaterow";
            //alert("containerId"+ this.ContainerId);
            // nestRowStructure = FullHtml($(" [data-pnk-repeat-rowtype='nestedtemplaterow']", myrow).clone().removeClass('[data-pnk-repeat-rowtype]').addClass("pnknrow").css('display', ''));
            nestRowStructure = this.nestRowStructure;
//            alert(nestRowStructure);
            var cls = $("#" + this.ContainerId + " [data-pnk-repeat-itemstart='1'] [data-pnk-bind-nesteddatamembers]").attr("data-pnk-bind-nesteddatamembers");
            //alert(cls);
            var nestedFieldsArray = cls.split(",");
            //  alert(nestRowStructure);
            nrowCounter = 0;
            do {
                nrow = subrows[nrowCounter];
                // alert(nrow.percentage);
                //make a new row structure
                // alert(subrows);
                newRowStructure = nestRowStructure;
                for (i = 0; i < nestedFieldsArray.length; i++) {
                    //replace strings in newrwstructure
                    // k = "\{" + j + "_" + i + "\}";
                    k = "\{" + eval(i + totalmainfields ) + "\}";
                    //alert(k + "'s. Row's field " + nestedFieldsArray[i] + "getting modified with" + nrow[nestedFieldsArray[i]]);
                    if (nrow == undefined) {
                        newRowStructure = ReplaceAll(newRowStructure, k, " ");
                    }
                    else {
                        if (nrow[nestedFieldsArray[i]] == undefined) nrow[nestedFieldsArray[i]] = " ";
                        newRowStructure = ReplaceAll(newRowStructure, k, nrow[nestedFieldsArray[i]]);
                    }
                }
                //alert(newRowStructure);
                if (nrowCounter == 0) {
                    alert("Hi");
                    //selectorEl = " .itemstart. .ntemplaterow";
                    // alert(selectorEl);
                    $(" [data-pnk-repeat-rowtype='nestedtemplaterow']", myrow).after(newRowStructure);
                }
                else {
                    // alert("hi");
                    //selectorEl = " .itemstart. .pnknrow";
                    // alert(selectorEl);
                    alert("Bye");
                    $(" .pnknrow", myrow).filter(":last").after(newRowStructure);

                }
                nrowCounter++;
            }
            while (nrowCounter < nrowCount)
        }
    }

    function _ProcessNestedRows(myrow, nestRowStructure, row, fieldNamesArray, totalmainfields, noOfItemStarts) {
        //alert(nestRowStructure);
        //alert(row.products.length);
        //alert("nesting for new main row is called");
        // alert($("#" + this.ContainerId ).html());
        var newReplacedAllNestedStructure = "";
        var fieldsCountTillLastTemplate = totalmainfields;
        var allRowStructure = "";

        //length of nested repeats
        templateCount = $(" [data-pnk-behavior-nested-repeat][data-pnk-nesteddatasource]", myrow).length;

        //alert(myrow);
        that = this;
        templateCounter = 0;
        var k ;
        //  if (!(this.WhetherFrameworkGrid))
        // {
        k = $(" [data-pnk-behavior-nested-repeat][data-pnk-nesteddatasource]", myrow).attr("data-pnk-nesteddatasource");

        //}
        //else k = row;
        var vat =this;
        $(" [data-pnk-behavior-nested-repeat][data-pnk-nesteddatasource]",myrow).each(function () {
            templateCounter++;

            //archi confusion work with the other nested template str
            //newRowStructure = FullHtml($(" [data-pnk-repeat-rowtype='nestedtemplaterow']", this).clone().removeAttr('data-pnk-repeat-rowtype').addClass("pnknrow").css('display', ''));
            newRowStructure = vat.nestRowStructure;
            // alert(newRowStructure);
            //return;
            //alert("hi");
            datasource = $(this).attr("data-pnk-nesteddatasource");
            //alert(JSON.stringify(row,null,4));
            // alert(datasource);
            //  alert(row.substructure[datasource].metarow.pkey);
            //  alert("GGGGG"+vat.WhetherFrameworkGrid);
            if (!(vat.WhetherFrameworkGrid)) {
                subrows = row[datasource];
                //alert("kkkkk");
            }
            else
                subrows = row[datasource].rows;
            // alert(row.Categories.rows);

            // alert(JSON.stringify(subrows,null,4)) ;

            nrowCount = subrows.length;

            //alert("rowcount=" + nrowCount);
            //alert($(myrow).html());
            for (nrowCounter = 0; nrowCounter < nrowCount;) {

                //alert(nrowCounter);
                nrow = subrows[nrowCounter];

                //  alert("nrow counter =" + nrowCounter);
                //make a new row structure
                //newRowStructure = nestRowStructure;
                //alert(newRowStructure);
                thisRowStructure = newRowStructure;


                var cls = $(this).attr("data-pnk-bind-nesteddatamembers");
                // alert(cls);

                var nestedFieldsArray = cls.split(",");
                nrow = that.ModifyNestedRow(nrow, nestedFieldsArray);
                //var i;
                for (i = 0; i < nestedFieldsArray.length; i++) {

                    //replace strings in newrwstructure
                    //k = "\{" + (i + totalmainfields) + "\}";
                    k = "\{" + (i + fieldsCountTillLastTemplate) + "\}";

                    //alert(k + "'s. Row's field " + nestedFieldsArray[i] + "getting modified with" + nrow[nestedFieldsArray[i]]);
                    if (nrow[nestedFieldsArray[i]] == undefined) nrow[nestedFieldsArray[i]] = " ";
                    // alert(thisRowStructure + ","+k +"," +nrow[nestedFieldsArray[i]]);
                    thisRowStructure = ReplaceAll(thisRowStructure, k, nrow[nestedFieldsArray[i]]);
                    //alert("modified one template and one row and field nested structure  " + newRowStructure);
                    // alert("modified one template and one row and new structure  " + thisRowStructure);

                }

                //alert("modified one template and " + nrowCounter + " row nested structure" + thisRowStructure);
                allRowStructure += thisRowStructure;
                //alert("modified one template and "+ nrowCounter+ " row nested structure" + nestRowStructure);
                //alert("modified one template and "+ nrowCounter+ " row nested structure" + allRowStructure);

                //if (newRowStructure )
                nrowCounter++;
            }
            //    alert(nrowCounter);
            fieldsCountTillLastTemplate += i ;
            //alert("fieldcount after one template and all row exhausted should be 10 " + fieldsCountTillLastTemplate);

            elem = " [data-pnk-nesteddatasource='" + datasource + "'] [data-pnk-repeat-rowtype='nestedtemplaterow']";
            //alert(elem);
            //alert(myrow.html());
            //alert($(elem, myrow).html());
            if(nrowCount==0)
            {
                //allRowStructure = "<div>Not Available</div>"
                allRowStructure = "<div></div>"
            }

            if ($(" [data-pnk-nesteddatasource='" + datasource + "'] .pnknrow", myrow).length == 0)
            {
                $(elem, myrow).after(allRowStructure);
                $(" [data-pnk-repeat-rowtype='nestedtemplaterow']", myrow).remove();

            }
            else
            {
                // $(" .pnknrow", myrow).filter(":last").after(allRowStructure);
            }
            //  alert(myrow.html());
            //alert("templateCount ="+ templateCount + "templateCounter=" +templateCounter);
            if (templateCount == templateCounter) return false;
            allRowStructure = "";
        });
    }

    function _ProcessSummary(){
        if (!(this.WhetherFrameworkGrid))
        {
            row = this.Metarow;
        }
        else
            row = this.DataSet.metarow;
        row = this.ModifySummaryRow(row);
        // alert(row);
        //alert(row.previousNavigationStr);no
        id = this.ContainerId;
        //alert(id);
        // containerId = $("#" + id).closest(".pnkgrid").attr("id");
        //alert(containerId);
        //get the pnksummary template
        var that =this;
        // alert(containerId);
        $("#" +  that.ContainerId + " .pnksummary").remove();
        var newFinalTemplate = "";
        $("#" +  this.ContainerId + " [data-pnk-repeat-rowtype='summarytemplaterow']").each(function () {
            var self = this;
            // alert("hi");
            summaryHtmlStructure = FullHtml($(this).clone().removeAttr('data-pnk-repeat-rowtype').addClass('pnksummary').css('display', 'block'));
            // alert(summaryHtmlStructure);
            newFinalTemplate = summaryHtmlStructure;
            //$("#" +  that.ContainerId + " .pnksummary").remove();
            // $(this).after(summaryHtmlStructure);

            // alert(summaryHtmlStructure);
            // $(".pnksummary[data-pnk-bind-summarydatamembers]", summaryHtmlStructure).each(function () {
            //  alert("hii");
            cl = $(this).attr("data-pnk-bind-summarydatamembers");
            cls = cl.split(",");
            str = "";
            for (i = 0; i < cls.length; i++) {
                k = "\{" + (i) + "\}";
                // l = summaryHtmlStructure;
                //alert(row[cls[i]])
                //  alert("Row's field " + cls[i] + "getting modified with" + row[cls[i]]);
                if (row[cls[i]] == undefined) row[cls[i]] = " ";
                newFinalTemplate = newFinalTemplate.replace(k, row[cls[i]]);
                // alert("vgvghv"+newFinalTemplate);
            }
            // alert(newFinalTemplate);
            $(this).after(newFinalTemplate)
            //alert($(this).html());
            //});
            //alert(str);
        });
    }

    function _ModifySummaryRow(row){
        // alert("hiii");
        row = this.ModifyDefaultSummaryRow(row);

        if (this.SummaryRowBind != "")
        {
            row = this.SummaryRowBind(row);
            //alert(row);
        }

        return row;
    }

    function _ModifyDefaultSummaryRow(row){
        /*
                if (!(this.FrameworkGrid))
                {
                    var noOfSets = Math.ceil((row.totalRecordsInDb / row.totalRecordsInSet));

                }
                else
                {
                    var noOfSets = Math.ceil((row.totalRecordsInDb / row.totalRecordsInSet));
                }
        */

        //alert("hiui");
        // row.totalRecordsInSet =5;
        var noOfSets = Math.ceil((row.totalRecordsInDb / row.totalRecordsInSet));
        // alert(noOfSets);

        var noOfPages = noOfSets ; //to account for array starting from 1
        // alert(noOfPages);

        var currentSetNo = row.setNo;
        // alert(currentSetNo);
        row.currentSetNo = currentSetNo;
        row.noOfSets = noOfSets;
        row.firstNavigationStr = "";
        row.previousNavigationStr = "";
        row.nextNavigationStr = "";
        // row.firstNavigationStr = "";
        row.lastNavigationStr = "";
        row.digitNavigationStr = "";
        // row.startRecNo = row.initrecno;
        //row.lastRecNo = row.finalrecno;
        var noOfNewSets = Math.ceil((row.totalRecordsInDb / row.totalRecordsInCurrentSet));
        // alert(Sets);
        row.startRecNo = ((row.totalRecordsInSet)*(row.currentSetNo-1)+1);

        if(row.totalRecordsInSet == row.totalRecordsInCurrentSet) {
            row.lastRecNo = (row.totalRecordsInSet) * (row.currentSetNo);
        }
        else {
            row.lastRecNo = (noOfNewSets*(row.totalRecordsInCurrentSet));
        }
        //row.lastRecNo =;
        // alert( row.lastRecNo);  alert( row.startRecNo);

        // this.NavigationStyle ="both"
        // this.DataSetId="memberslist"

        if (this.NavigationStyle.toLowerCase() == "digit" || this.NavigationStyle.toLowerCase() == "both")
        {
            //alert("fvjebj");
            var digitNavigationStr = "";
            //digital Navigation

            requestedPage = eval(currentSetNo) ;
            // alert(requestedPage);

            initialDig = eval(requestedPage) - 1;
            if ((requestedPage == 2) || (requestedPage == 1)) initialDig = 1; //to implement 2nd page request from user, 1st page link is to be shown.

            finalDig = initialDig + this.DigitNavigationTabs - 1;
            if (finalDig > noOfPages) //for implementing the final digit logic
            {

                finalDig = noOfPages;
                // alert(finalDig)

                initialDig = finalDig - this.DigitNavigationTabs + 1;
                if (initialDig < 1)
                {
                    initialDig = 1;
                    finalDig = noOfPages;
                }
            }

            for (c = initialDig; c <= finalDig; c++)
            {
                if (c == requestedPage)
                {
                    digitNavigationStr += "<span class='SelectedDigitNavigationLink' pnkpageno='" + (c - 1) + "' >" + c + "</span>&nbsp;&nbsp;";
                    // alert("inn"+digitNavigationStr);
                }
                else
                    digitNavigationStr += "<span class='DigitNavigationLink' pnkpageno='" + (c ) + "' onclick=" + this.GridId +"_Load_SubSequent("+eval(c )+")>" + c + "</span>&nbsp;&nbsp;";
                // alert("inn"+digitNavigationStr);
            }
            //  general.Add("digitNavigationStr", str);

            row.digitNavigationStr = digitNavigationStr;
            // alert(row.digitNavigationStr);
        }
        if (this.NavigationStyle.toLowerCase() == "text" || this.NavigationStyle.toLowerCase() == "both") {
            //previous
            if (this.PrevNavText == "")
            {
                this.PrevNavText = "<u>Previous</u>";
            }
            if (currentSetNo == 1)
            {
                var previousNavigationStr = "";

            }
            else
            {
                var previousNavigationStr = "<span id='prev' class='gridnavigationLink' onclick="+this.GridId + "_Load_SubSequent(" + eval(currentSetNo - 1) + ")>" + this.PrevNavText + "</span>";
            }
            //next
            if (this.PrevNavText == "") {
                this.PrevNavText = "Previous";
            }
            // alert("p:"+currentSetNo);
            if (noOfPages > currentSetNo) {


                var nextNavigationStr = "<span id='next' class='gridnavigationLink' onclick=" + this.GridId + "_Load_SubSequent(" + (eval(currentSetNo) + 1) + ")>" + this.NextNavText + "</span>";

            }
            else
            {
                var nextNavigationStr = "";
            }
            //first
            if (currentSetNo == 1) var firstNavigationStr = "";
            else
                var firstNavigationStr = "<span id='first' class='gridnavigationLink' onclick=" + this.GridId + "_Load_SubSequent(" + 1 + ") >" + this.FirstNavText + "</span>";
            // var firstNavigationStr = ""
            //alert(firstNavigationStr);
            //last
            if (currentSetNo == noOfPages)
            {
                // alert(currentSetNo)
                // var firstNavigationStr = "";
                var firstNavigationStr = "<span id='first' class='gridnavigationLink' onclick=" + this.GridId + "_Load_SubSequent(" + 1 + ") >" + this.FirstNavText + "</span>";
            }
            else {
                // alert(currentSetNo)
                var lastNavigationStr = "<span id='last' class='gridnavigationLink' onclick=" + this.GridId + "_Load_SubSequent(" + noOfPages + ") >" + this.LastNavText + "</span>";
                //alert(lastNavigationStr);
            }
            row.previousNavigationStr = previousNavigationStr;
            row.nextNavigationStr = nextNavigationStr;
            row.firstNavigationStr = firstNavigationStr;
            //alert(row.firstNavigationStr);
            row.lastNavigationStr = lastNavigationStr;


        }
        if (this.NavigationStyle.toLowerCase() == "both") {

        }

        // alert(row.previousNavigationStr);
        return row;
    }


    /******************************* Grid Related Functions *****************************************************/
    /**
     To get the primary key associated with a particular field
     To get the cell of a particular field in the grid with a primary key
     To get all the cells of a particular column
     To get a row
     To Select a row
     To Replace old column value with new column value

     */

    function _GetDataSourcePKey(containerId) {
        //get $()
        //$("#" + containerId + "")

    }
    function _GetClickedCellPKeyValue() {

        if ($(clickedElement).closest('.itemstart').length > 0) {

            // alert("hi");
            str = $(clickedElement).closest('.itemstart').attr('id');
        }
        else {
            str = $(clickedElement).closest('.pnkrow').attr('id');
        }
        id = str.split("_")[1];
        //alert(id);
        return id;

    }

    function _GetClickedCellDbName() {

        //get the template row.
        //get the the cell corresponding to the
        str = $(clickedElement).closest('.repeat').attr('id');
        //to be implemented

    }
    function _GetClickedCellValue(cell) {

    }
    function _GetCellValue(containerId, pkname) {

    }

    /******************************general helper functions ******************************/



    function _Load_SubSequent(page)
    {
        this.CurrentRowSet = page;
        //alert("Actual Page=" + this.CurrentRowSet);
        //alert("new Request");
        var Res1 = new pnk.Cpnkponent();
        Res1.Url = pnk.RootController + "/"+ this.Url + "/"+page ;
        // alert(Res1.Url);
        Res1.SetCallBacks(this.CallBackFunc);
        //Res1.SenderId = this.ContainerId;
        Res1.Get();
    }
    function _Search()
    {
        //alert("nbvgghfghf");
        var Res1 = new pnk.Core.Resource("PAGE");
        alert(Res1);
        Res1.Page = this.SearchUrl;
        //alert(  Res1.Page);
        Res1.PassBackParameters = "cname=d";
        //  alert(this.CallBackFunc);
        Res1.OnProcessedSuccess = this.SearchCallBackFunc;
        Res1.Fetch("GET");
    }
};

// pnk_grid_1_0_1 code Ends Here

// pnk_dataset_1_0_1 code Starts Here

/**
 * Created by Shweta on 21-03-2017.
 */

pnkDataset = function (dataset,whetherPinakaFrameworkDataSet) {
    _originalRowset = null;
    var newDataSet = null;
    var fanNewDataSet = null;
    if (whetherPinakaFrameworkDataSet  == undefined)
        whetherPinakaFrameworkDataSet = true;

    _whetherFrameworkDataSet = whetherPinakaFrameworkDataSet;
    _newRowset = null;
    var whetherFrameworkType;
    if(dataset) {
        if (_whetherFrameworkDataSet)

            _originalRowset = dataset.rows;
        else
            _originalRowset = dataset;
        //Prabhash and Archi only for Fantasy
        _newRowset = _originalRowset;
        /*
        var position_filter=[];

        for (var i = 0; i < _originalRowset.length; i++) {
            row = _originalRowset[i];
            if (row['player_pos'].toUpperCase().indexOf('QB'.toUpperCase()) >= 0) {
                position_filter.push(_originalRowset[i]);
            }
        }
        _newRowset = position_filter;
        */
        // alert(_newRowset);
    }
    this.Where = function() {
    }
    this.Filter = function() {
    }

    this.GetNRows = function(n,startRowNo) {
        // alert("calling getnrows");
        if ((startRowNo == undefined) || (startRowNo == ""))
        {
            startRowNo = 0;

        }

        var _items = [];
        for (var j = startRowNo ; j < (startRowNo + n) ; j++)
        {
            // alert(j + "=" + _newRowset[j]);
            if ((_newRowset[j] == null) || (_newRowset[j] == undefined))
            {
                break;
            }
            _items.push(_newRowset[j]);

        }

        // _newRowset = _items;
        // alert(_newRowset.length);
        return _items;

    }

    this.GetDataSetByRange = function(initRange, MaxRange, column){
        var filter_items =[];
        for(var i = 0 ; i < _originalRowset.length ; i++)
        {
            //alert(_newRowset[i][column]);
            if(_originalRowset[i][column]){

                if(initRange<=_originalRowset[i][column] && MaxRange>= _originalRowset[i][column]){
                    //alert(_newRowset[i][column]);
                    filter_items.push(_originalRowset[i]);
                }

            }
        }
        _newRowset =   filter_items ;
        //alert(_newRowset.length);
    }
    this.GetNewDataSet = function(){
        return _newRowset;
    }

    this.FanGetNewDataSet = function(){
        fanNewDataSet = _originalRowset;
        var position_filter=[];
        for (var i = 0; i < _originalRowset.length; i++) {
            row = _originalRowset[i];
            if (row['player_pos'].toUpperCase().indexOf('QB'.toUpperCase()) >= 0) {
                position_filter.push(_originalRowset[i]);
            }
        }
        _newRowset = position_filter;
    }
    this.ArticlesWithImages = function(){
        var news_filter=[];
        for (var i = 0; i < _originalRowset.length; i++) {
            row = _originalRowset[i];
            if (row['news_urlToImage'] != '') {
                news_filter.push(_originalRowset[i]);
            }
        }
        _newRowset = news_filter;
        //_newRowset = _originalRowset;
        return _newRowset;
    }

    this.Search =function (fieldname, fieldvalue, search) {
        var  search_filter= [];
        if(newDataSet == null)
        {
            newDataSet =_newRowset;
        }
        else {
            _newRowset = newDataSet;
        }
        if(search == 'apply'){
            for (var i = 0; i < _newRowset.length; i++) {
                row = _newRowset[i];
                if (row[fieldname].toUpperCase().indexOf(fieldvalue.toUpperCase()) >= 0) {
                    search_filter.push(_newRowset[i]);
                }
            }
        }
        else {
            search_filter = _newRowset;
        }
        //alert(JSON.stringify(_newRowset, null, 4));
        _newRowset = search_filter;
    }

    this.GetDataSetByName = function(fieldname,fieldvalue){
        alert(fieldname);
        alert(fieldvalue);
        var name_filter=[];
        var combine_filter=[];
        var str = fieldvalue;
        if(fieldvalue == 'ALL'){
            name_filter = fanNewDataSet;
        }
        else if(fieldvalue == 'DEF')
        {
            var tempData = [];
            //  alert("bhjbjkhjkhj");
            for (var i = 0; i < fanNewDataSet.length; i++) {

                if(fanNewDataSet[i].player_pos =='LB' || fanNewDataSet[i].player_pos =='OT' || fanNewDataSet[i].player_pos =='DT' )
                {
                    //alert(JSON.stringify(fanNewDataSet[i],null, 4));
                    tempData.push(fanNewDataSet[i]);
                    console.log(tempData);
                }

            }

            name_filter=tempData;
        }
        else {
            for (var i = 0; i < fanNewDataSet.length; i++) {
                row = fanNewDataSet[i];
                if (row[fieldname].toUpperCase().indexOf(fieldvalue.toUpperCase()) >= 0) {
                    name_filter.push(fanNewDataSet[i]);

                }
            }
        }
        //alert(JSON.stringify(name_filter, null, 4));
        _newRowset = [];
        _newRowset = name_filter;
        //return this._newRowset;
    }

    this.ModifyOriginalRowSet =function (fieldname,fieldvalue) {
        var name_filter=[];
        var str = fieldvalue;
        if(fieldvalue == 'ALL'){
            name_filter = _originalRowset;
        }
        else {
            for (var i = 0; i < _originalRowset.length; i++) {
                row = _originalRowset[i];
                if (row[fieldname] == fieldvalue) {
                    //name_filter.push(_originalRowset[i]);
                    row['status'] = 'old';
                }
                //alert(_originalRowset[i]['status']);
            }
        }
        _newRowset = _originalRowset;
        //alert(JSON.stringify(_newRowset, null, 4));

        // _newRowset = [];
        //_newRowset = name_filter;

    }
    this.ModifyOriginalRowSetAfterRemove =function (fieldname,fieldvalue) {
        var name_filter=[];
        var str = fieldvalue;
        if(fieldvalue == 'ALL'){
            name_filter = _originalRowset;
        }
        else {
            for (var i = 0; i < _originalRowset.length; i++) {

                row = _originalRowset[i];
                if (row[fieldname] == fieldvalue) {
                    //name_filter.push(_originalRowset[i]);

                    row['status'] = 'new';
                }
                //alert(_originalRowset[i]['status']);
            }
        }
        _newRowset = _originalRowset;
    }
    this.ResetFilters = function(){
        _newRowset = _originalRowset;
        //alert(JSON.stringify(_newRowset, null, 4));
        //return this._newRowset;
    }

    this.ResetFilters = function(){
        _newRowset = _originalRowset;
        //alert(JSON.stringify(_newRowset, null, 4));
        //return this._newRowset;
    }

    this.GetDataSetByAddress = function(fieldname,fieldvalue){
        var address_filter=[];
        var str = fieldvalue;

        for(var i=0 ; i < _originalRowset.length ; i++)
        {
            row =_originalRowset[i];
            //if(row[fieldname].indexOf(fieldvalue) > 0)
            //alert(row[fieldname].toUpperCase().indexOf(fieldvalue.toUpperCase()));
            if(row[fieldname].toUpperCase().indexOf(fieldvalue.toUpperCase()) >= 0)
            {
                //alert(row.Address + ","+ fieldvalue);
                address_filter.push(_originalRowset[i]);
            }
        }
        _newRowset = [];
        //alert(JSON.stringify(name_filter, null, 4));
        _newRowset = address_filter;
        //alert(JSON.stringify(_newRowset, null, 4));
        //return this._newRowset;


    }
    this.SortDataSetNumericaly = function (column,order) {
        if(_tempRowSet.length > 0){
            _newRowset = _tempRowSet;
            var filter_items =[];
            _newRowset.sort(function (a,b) {
                if(order.toLowerCase() === "asc") {
                    return parseFloat(a[column]) - parseFloat(b[column]);
                }
                else{
                    return parseFloat(b[column]) - parseFloat(a[column]);
                }

            })
        }
        else{
            _newRowset = _originalRowset;
            var filter_items =[];
            _newRowset.sort(function (a,b) {
                if(order.toLowerCase() === "asc") {
                    return parseFloat(a[column]) - parseFloat(b[column]);
                }
                else{
                    return parseFloat(b[column]) - parseFloat(a[column]);
                }

            })
        }
    }
    this.SortDatasetAlphabetically = function (column,order) {
        /*---- todo check its working--*/
        _newRowset = _originalRowset
        var filter_items =[];
        _newRowset.sort(function (a,b) {
            if(order.toLowerCase() == "asc") {
                return ((a[column] ==b[column]) ? 0 :((a[column]>b[column])? 1:-1));
            }
            else{
                return ((a[column] ==b[column]) ? 0 :((b[column]>a[column])? 1:-1));
            }

        })
    }
    _tempRowSet = [];
    this.GetDataSetByRating = function (fieldvalue,fieldname, functionality) {

        /*
         var chkBox = document.querySelectorAll('input[name="category[]"]:checked');
         var aIds = [];
         var l = chkBox.length;
         for (var x = 0; x < l; x++) {
         aIds.push(chkBox[x].value);
         }

         var str = aIds.join(', ');
         return str;
         */
        var items =[];
        //var filters = [];
        //alert(JSON.stringify(_originalRowset, null, 4));
        //_newRowset = [];
        _newRowset = _originalRowset;
        if(functionality == 'Add') {
            for (var i = 0; i < _newRowset.length; i++) {
                item = _newRowset[i];
                //for(var j=0 ;j<val.length;j++) {
                //alert(functionality);
                recordsPerSet = 50;
                if (item[fieldname] <= fieldvalue && item[fieldname] > (fieldvalue - 1)) {
                    items.push(item);
                }
            }
            _newRowset = _tempRowSet.concat(items);
            _tempRowSet = _tempRowSet.concat(items);
        }
        else {
            //alert(JSON.stringify(_tempRowSet, null, 4));
            function filterVal(value) {
                return value['Star'] !== fieldvalue;
            }
            var filtered = _tempRowSet.filter(filterVal);
            //_tempRowSet = arrayA.concat(arrayB);
            _newRowset = filtered;
            _tempRowSet =filtered;
            //_newRowset = _originalRowset;
        }
    }

    _Do = function(startRowNo,endRowNo,length) {


    }

    this.Load = function(url,type) {

    }
}

pnkDataset.prototype.Alias = function (aliasObj) {
    // alert(_rowset.rows[0].category_name);
    // alert(_rowset.rows.length);
    var items = [];
    //var keys = [];
    for (var i = 0; i < _rowset.rows.length; i++) {
        var item = {};
        for(var k in aliasObj)
        {
            // alert(aliasObj[k]);
            val = _rowset.rows[i][aliasObj[k]];
            // alert(val+"::key::"+k);
            //alert(_rowset.rows[0].val);
            item[k] = val;

        }
        items.push(item);
    }

    //  alert(JSON.stringify(items,null,4));
    return items;
}

pnkDataset.prototype.Sort = function (sortObj) {
    // alert(_rowset.rows.length);
    var sortedArr = [];
    var sortid = {};
    //  alert(JSON.stringify(_rowset,null,4));

    for(var i=0; i < _rowset.rows.length; i++){
        alert(_rowset.rows[i].id);
        if(_rowset.rows[i].id < _rowset.rows[i+1].id){
            sortedArr[i] = _rowset.rows[i].id;
        }
    }
}

pnkDataset.prototype.GroupBy = function (grpByObj,grpByColm) {
    var items = [];

    var item = {};
    var subitem = {};
    for(var val in grpByObj) {
        alert(grpByObj.item[0].category_name);
    }
    for(var i=0; i < _rowset.rows.length; i++) {
        for(var i=0; i < items.length; i++){


        }
    }
    /*
     for(var val in grpByObj){
     alert(grpByObj[val].length);
     for(var i=0;i<grpByObj[val].length;i++){
     alert(grpByObj[val]);
     }
     }
     alert(JSON.stringify(grpByObj,null,4));

     for(var i=0;i< count(grpByObj) ;i++)
     {
     alert((grpByObj.i));
     //alert(grpByObj[singleObj].length);
     for(var key in grpByObj[singleObj]) {
     alert()
     alert(grpByObj[singleObj].key);
     for(var j= 0;j<grpByObj[singleObj][i].length;j++){
     alert(grpByObj[singleObj][i].length);
     }
     //alert(ele);
     }
     }

     return;
     */
    // for(var i=0; i < _rowset.rows.length; i++){
    var j = 0 ;
    for(var singleObj in grpByObj)
    {
        //alert("objname="+singleObj);
        //********row
        alert(grpByObj[singleObj]);
        for(var ele in grpByObj[singleObj])
        {
            //********row members
            alert(grpByObj[singleObj][ele]);
            //alert(ele);
            //alert("given key ="+grpByColm+"::list data : "+grpByObj[singleObj][ele]);
            if(grpByObj[singleObj][ele] == grpByColm)
            {
                flag = true;
                alert("matched="+grpByObj[singleObj][ele]);
                // break;
                //item["subrow"] = item;
            }
            /*else{
             alert("not matched");
             // item[singleObj] = grpByObj[singleObj][ele];
             //  j = singleObj;
             }*/
            item[j] = grpByObj[singleObj][ele];
            j++;
        }

        if(flag){
            // item[singleObj] = grpByObj[singleObj][ele];
            items.push(item);
        }
        else{
            return grpByObj;
        }
        //items.push(item);

        // break;
    }
    // items.push(item);
    //  items.push(row);
    alert("items=");
    alert(JSON.stringify(items,null,4));
    // }

    return items;
}

pnkDataset.prototype.LoadSubsequent = function (id) {

}

// pnk_dataset_1_0_1 code Ends Here
