

## About PinakaJs

PinakaJs is a Javascript Library with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. PinakaJs attempts to take the pain out of development by easing common tasks used in the majority of App and Web projects, such as:

- Simple, fast templating engine
- Supports Almost all Libraries Like AngularJs, ReactJs, NodeJs and All other Extensive JavaScript Libraries
- Easily Integratable in PHP Frameworks Like WordPress, Laravel, ASP.Net, Codeigniter, PinakaPHP.
- Elegent Grid System.
- Infinite Scroll, Pagination, Nested Grid Binding.
- Full Support For Rest API's Like GET, POST, PUT, DELETE.
- Fast XHR, To Build Asynchronous Applications.
- Simple and accurate Validation for Email, Phone Number, Date, Time, Password etc.

PinakaJs is accessible, yet powerful, providing tools needed for large, robust applications. A superb combination of simplicity, elegance, and innovation give you tools you need to build any application with which you are tasked.

## Installation and Usage

In browser:

```
 <script src="https://cdn.jsdelivr.net/npm/pinakajs@1.0.2/pinaka.js"></script>
```
Using npm:
``` 
npm install pinakajs 
``` 
## Documentation

- Ajax
- UI
### Ajax

- GET
- POST
- PUT 
- DELETE

#### GET
1. GET request for within Application request
```
function FunctionName() {
            // api_root is your trailing route 
            pnkHttp.Get(pnk.RootController + "api_root").AttachLoader(false, "divId", 'small').Do().then(function (response) {
                // Handle response                
            });

        }

```

2. GET request for within Application request for getting components as HTML
```
function FunctionName() {
            // api_root is your trailing route 
            pnkHttp.Get(pnk.RootController + "api_root").As("html").AttachLoader(false, "divId", 'small').Do().then(function (response) {
                // Handle response      
                if (response !== null) {
                    $('#divID').html(response).show();
                    /* or show in modal */
                    $('#divModalBody').html(response);
                    $('#divModal').modal('show');
                }else {
                    // else code
                }        
            });

        }

```

3. GET Request for third party api's or with CORS
```
pnkHttp.GetCORS("third party api",CallbackFunction);
```

#### POST
Note: AddRequiredParams('FormId') it is compulsory to send form data.
1. Post Request with data Validation
```
function AddNew() {
        /* Validated is used to validate form contents like Email, number etc. */
        if(Validated("formID")) {
            pnkHttp.Post(pnk.RootController + 'api_root').AddRequiredParams("formID").AttachLoader(true, "formID", 'small').Do().then(function (response) {
                // handle response
            });
        }else{
            // else code
        }
    }
```

2. Post Request without dat validation
```
function AddNew() {  
    pnkHttp.Post(pnk.RootController + 'api_root').AddRequiredParams("formID").AttachLoader(true, "formID", 'small').Do().then(function (response) {
        // handle response
    });
      
}
```
#### PUT
Note: AddRequiredParams('FormId') it is compulsory to send form data.
1. Put Request with data Validation
```
function Modify() {
        /* Validated is used to validate form contents like Email, number etc. */
        if(Validated("formID")) {
            pnkHttp.Put(pnk.RootController + 'api_root').AddRequiredParams("formID").AttachLoader(true, "formID", 'small').Do().then(function (response) {
                // handle response
            });
        }else{
            // else code
        }
    }
```

2. Put Request without data validation
```
function Modify() {  
    pnkHttp.Put(pnk.RootController + 'api_root').AddRequiredParams("formID").AttachLoader(true, "formID", 'small').Do().then(function (response) {
        // handle response
    });
      
}
```

### Delete
```
function Delete(id) {
        if (confirm("Are You Sure?") == true) {
            pnkHttp.Delete(pnk.RootController + "api_root" + id).AttachLoader(true, "divId",'small').Do().then(function (response) {
                if (response.PinakaResponse.ServerStatus.value == "SUCCESS") {
                    // handle response
                    pnk.Framework.AlertModal("INFO", "Deleted"); // framework's modal  
                }
            });
        }
    }
```
#### Note: Adding additional Header in request for secure connection
- AddHeader() : Can be added in all XHR requests. 
```
function Secure equest() {
    pnkHttp.Get(pnk.RootController + 'api_root').AddHeader('XAUTHTOKEN', 'your token')).AttachLoader(false, "formId", 'small').Do().then(function (response) {
        // handle response
    });
}

```
### UI

1. Form
2. Alert Modals

#### Working with Forms

A form Component can be openend in two modes 
- Entry 
- Edit
- Form Validation on code pen : https://codepen.io/finelogicscs/pen/jxPgbZ?editors=1010

1. Entry mode : 
```
<div class="container">
  <div id="divEntryEdit" data-nw>
    <form class="form-horizontal" id="frmEntryEdit" data-pnk-componenttype="form">
        <div data-pnk-viewdatamembers="name,number,email,password">
            <div class="form-group">
                <label for="txtName" class="col-sm-4 control-label"> Name :</label>
                <div class="col-sm-6">    
                    <input class="form-control" name="txtName" id="txtName" placeholder="Enter Name" type="text" pnkvalidate="forceentry"
                           displayfieldname="Name" data-pnk-input-value="0"/>
                
                </div>
            </div>
            <div class="form-group ">
                <label for="txtNumber" class="col-sm-4 control-label"> Number :</label>
                <div class="col-sm-6">
                    <input class="form-control" name="txtNumber" id="txtNumber" value=""
                       placeholder="Enter Number" type="text" pnkvalidate="forcenumber"
                       displayfieldname="Number" data-pnk-input-value="1"/>
                </div>
            </div>
            <div class="form-group ">
                <label for="txtEmail" class="col-sm-4 control-label"> Email :</label>
                <div class="col-sm-6">
                   <input class="form-control" name="txtEmail" id="txtEmail" value=""
                       placeholder="Enter Email" type="text" pnkvalidate="forceemail"
                       displayfieldname="Email" data-pnk-input-value="2"/>
                </div>
            </div>
            <div class="form-group ">
                <label for="txtPassword" class="col-sm-4 control-label"> Password :</label>
                <div class="col-sm-6">                   
                    <input class="form-control" name="txtPassword" id="txtPassword" value=""
                           placeholder="Enter Password" type="password" pnkvalidate="forcepassword" pnk=""
                           displayfieldname="Password" />                   
                </div>
            </div>
            <div class="form-group">
                <label for="btnSubmit" class="col-sm-3 control-label"></label>
                <div class="col-sm-5">
                    <button type="button" class="btn btn-info" id="btnSubmit" name="btnSubmit" onclick="AddNew();" >Submit</button>
                </div>
            </div>
        </div>
    </form>
</div>
</div>

``` 

###Setting things for diffrent modes

```
$(document).ready(function () {

        if (window.location.href.split('/').pop() === 'entry') {
            formUser = new pnk.EditEntryView("entry");
            formUser.ContainerId = "divEntryEdit";
            formUser.Bind("");
            $('#btnSubmit').attr('onclick','AddNew()');
        }else if(window.location.href.split('/').pop() === 'edit') {
                pnkHttp.Get(pnk.RootController + "api_root").AttachLoader(false, "divEntryEdit", 'small').Do().then(function (response) {
                    formUser = new pnk.EditEntryView("edit");
                    formUser.ContainerId = "divEntryEdit";
                    formUser.Bind(response.data_set);
                    $('#btnSubmit').attr('onclick','Modify()');
                });
        }
    });


```
2. Addnew() method for sending data to server 
```
function AddNew() {
        /* Validated is used to validate form contents like Email, number etc. */
        if(Validated("frmEntryEdit")) {
            pnkHttp.Post(pnk.RootController + 'addnewuser').AddRequiredParams("frmEntryEdit").AttachLoader(false, "formID", 'small').Do().then(function (response) {
                // handle response
                pnk.Framework.AlertModal("INFO", "Successfully Added"); // framework's modal
            });
        }else{
            // else code
        }
    }
```
3. Modify() method for modifiying data of user 
```
function Modify() {
        /* Validated is used to validate form contents like Email, number etc. */
        if(Validated("frmEntryEdit")) {
            pnkHttp.Put(pnk.RootController + 'modifyuser').AddRequiredParams("frmEntryEdit").AttachLoader(true, "frmEntryEdit", 'small').Do().then(function (response) {
                // handle response
                pnk.Framework.AlertModal("INFO", "Successfully Modified details"); // framework's modal
            });
        }else{
            // else code
        }
    }
```

## PinakaJs Sponsors

Finelogics Consulting is sole owner and developer of PinakaJs. Currently we are self Sponsored And Open For Collaboration from Global market.

## Contributing

Thank you for considering contributing to the PinakaJs framework! The contribution guide can be found in the [PinakaJs documentation](http://pinakajs.lokhittrust.in).

## Security Vulnerabilities

If you discover a security vulnerability within PinakaJs, please send an e-mail to Taylor Otwell at enquire@finelogix.com. All security vulnerabilities will be promptly addressed.

## License

The PinakaJs framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
