<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">ClickUp Bookmarklet Links</h3>

  <p align="center">
    A weekend project you may find useful. 
    <a href="https://github.com/johnkraczek/ClickUp-Bookmarklets">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

As I was devleoping tasks and a project plan for my team inside the project management tool ClickUp, I was asked to develop a gantt chart to see where the tasks we have collected so far would take us time wise. We estimated a rough duration for each task and inserted those into the 'time estimate'. But we were unable to easily adjust start and end dates. I found [this feature request](https://clickup.canny.io/feature-requests/p/automatic-start-datedue-date-based-on-start-date-due-date-or-duration) and [this one](https://clickup.canny.io/feature-requests/p/calculate-due-date-based-on-dependencies) but both have not even been started yet. 

Not to be deterred, and deciding to add polish to some other bookmarklets I already had for ClickUp, I took a weekend and put this together. It leverages the ClickUp API to fetch tasks, Update Start & Due Dates, and more easily update task dependancies. 

Additionally, I wanted to play around with a better UI/UX experience when running a bookmarklet like this. Using the ClickUp API requires an api token to authenticate. Previously when running my bookmarklets for other tasks that API Token was hard-coded into the bookmarklet, Which I admit is bad practice. So the UI needed to be able to cleanly ask for user input, store the token in the browser's localStorage or sessionStorage (depending on your preference) and clean-up by removing the token when your done.  

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

Here are some of the libraries & frameworks used in the project. 

* [Nodejs](https://nodejs.org/en/)
* [Pug.js](https://github.com/pugjs/pug)
* [Bookmarklet](https://github.com/mrcoles/bookmarklet)
* [Readme Template](https://github.com/johnkraczek/ClickUp-Bookmarklets)


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Watch my << Video Pending >> Video for an explainer on what this does and how to use it. 

If you are not interested in compiling the bookmarklet on your own and just want to use it you can create a new bookmark and copy the bookmarklet to the URL. After you have the bookmarklet you can navigate to [ClickUp](https://app.clickup.com/) and click the bookmarklet[^1]. 

[^1]: Personally, I look to understand what is happening with any code I find on the internet. I would recommend looking through how these bookmarklets are put together and compile them yourself. This is especially important when dealing with your ClickUp Api key which should be treated like a password, and if you don't know how something works it could be compromized. 

<br>
<br>

### Due Dates:
----------

Copy and paste the following code into your bookmark to creat a bookmarklet. 

This bookmarklet will update the start and due dates of the blocked dependancies by adding the task estimate time to the start date. 

``` 
javascript:(function()%7Bfunction%20callback()%7Bfunction%20e()%7Bfunction%20e(e%2Ct%2Co%3D3e3)%7BSwal.fire(%7Bicon%3At%2Ctitle%3Ae%2Ctimer%3Ao%2CshowConfirmButton%3A!1%2CtimerProgressBar%3A!0%2Ctoast%3A!0%2Cposition%3A%22top-end%22%7D)%7Dasync%20function%20t(t)%7Bconst%20o%3DSwal.mixin(%7BprogressSteps%3A%5B%221%22%2C%222%22%5D%2CshowClass%3A%7Bbackdrop%3A%22swal2-noanimation%22%7D%2ChideClass%3A%7Bbackdrop%3A%22swal2-noanimation%22%7D%7D)%3Bt%7C%7C((t%3Dawait%20o.fire(%7Btitle%3A%22Need%20ClickUp%20API%20Key%22%2CshowDenyButton%3A!0%2CdenyButtonText%3A%22Um%2C%20Forever%22%2CconfirmButtonText%3A%22Until%20The%20Tab%20Is%20Closed%22%2Ctext%3A%22How%20long%20do%20you%20want%20to%20store%20your%20API%20Key%20in%20the%20browser%22%2Cfooter%3A'%3Ca%20href%3D%22%22%3EWhat%20does%20it%20mean%3F%3C%2Fa%3E'%2CcurrentProgressStep%3A0%7D)).isConfirmed%3F(t%3D%22session%22%2ClocalStorage.setItem(%22usr_apikey_choice%22%2C%22session%22))%3At.isDenied%26%26(t%3D%22forever%22%2ClocalStorage.setItem(%22usr_apikey_choice%22%2C%22forever%22)))%3Blet%20n%3Dawait%20o.fire(%7Btitle%3A%22Need%20ClickUp%20API%20Key%22%2CconfirmButtonText%3A%22Start%22%2Cinput%3A%22text%22%2Ctext%3A%22What%20is%20your%20ClickUp%20API%20KEY%22%2Cfooter%3A'%3Ca%20href%3D%22%22%3EWhat%20does%20it%20mean%3F%3C%2Fa%3E'%2CcurrentProgressStep%3A1%2CpreConfirm%3Ae%3D%3E%7Be%7C%7CSwal.showValidationMessage('%3Ci%20class%3D%22fa%20fa-info-circle%22%3E%3C%2Fi%3E%20Your%20API%20Key%20is%20required')%7D%7D)%3Breturn%22session%22%3D%3Dt%3FsessionStorage.setItem(%22cu_user_key%22%2Cn.value)%3A%22forever%22%3D%3Dt%26%26localStorage.setItem(%22cu_user_key%22%2Cn.value)%2Cn.value%3Fe(%22OK%2C%20API%20Key%20saved%20to%20browser.%22%2C%22success%22)%3Ae(%22Sorry%2C%20didn't%20catch%20that...%20Try%20again%22%2C%22error%22)%2Cn.value%7Dasync%20function%20o(%7BthisID%3At%2CStartDate%3Aa%3D0%2Cauth%3Ai%7D)%7Btry%7Bawait%20n(610)%3Bconst%20r%3Dawait%20axios(%7Burl%3A%22https%3A%2F%2Fapi.clickup.com%2Fapi%2Fv2%2Ftask%2F%22%2Bt%2B%22%2F%22%2Cmethod%3A%22get%22%2Cheaders%3A%7BAuthorization%3Ai%2C%22Content-Type%22%3A%22application%2Fjson%22%7D%7D)%3B0%3D%3Da%26%26(a%3Dr.data.start_date)%2CEndDate%3Dfunction(e%2Ct)%7Breturn%20t%3E288e5%26%26(workday%3DMath.round(t%2F288e5)-1%2Cleft%3Dt%25288e5%2Ct%3D864e5*workday%2Bleft)%2Ce%2Bt%7D(%2Ba%2Cr.data.time_estimate)%2Casync%20function(%7BthisID%3At%2CStartDate%3Aa%2CEndDate%3Ai%2Cauth%3Ar%7D)%7Btry%7Bawait%20n(610)%3Bconst%20s%3Dawait%20axios(%7Burl%3A%22https%3A%2F%2Fapi.clickup.com%2Fapi%2Fv2%2Ftask%2F%22%2Bt%2B%22%2F%22%2Cmethod%3A%22put%22%2Cheaders%3A%7BAuthorization%3Ar%2C%22Content-Type%22%3A%22application%2Fjson%22%7D%2Cdata%3A%7Bstart_date%3Aa%2Cdue_date%3Ai%7D%7D)%3Bfor(dep%20in%20e(%22Updated%3A%20%22%2Bt%2C%22success%22)%2Cs.data.dependencies)s.data.dependencies%5Bdep%5D.depends_on%3D%3Dt%26%26o(%7BthisID%3As.data.dependencies%5Bdep%5D.task_id%2CStartDate%3Ai%2B864e5%2Cauth%3Ar%7D)%7Dcatch(t)%7Bconsole.log(t)%2Ce(%22Something%20went%20wrong%2C%20check%20console%20log%22%2C%22error%22)%7D%7D(%7BthisID%3At%2CStartDate%3Aa%2CEndDate%3AEndDate%2Cauth%3Ai%7D)%7Dcatch(t)%7Be(%22Something%20went%20wrong%2C%20check%20console%20log%22%2C%22error%22)%2Cconsole.log(t)%7D%7Dconst%20n%3De%3D%3E%7Bnew%20Promise((t%3D%3EsetTimeout(t%2Ce)))%7D%3B(async()%3D%3E%7Bif(!await%20async%20function()%7Breturn%22app.clickup.com%22%3D%3Dwindow.location.hostname%7C%7C(Swal.fire(%7Bicon%3A%22info%22%2Ctitle%3A%22This%20bookmarklet%20only%20Works%20on%20clickup%20pages%22%2Ctext%3A%22You%20will%20need%20re-run%20the%20bookmarklet%20when%20you%20get%20over%20there%22%2CconfirmButtonText%3A%22Go%20To%20Clickup%22%2CshowCloseButton%3A!0%2CshowCancelButton%3A!0%2CcancelButtonText%3A%22Nevermind%22%2Cfooter%3A'%3Ca%20href%3D%22%22%3ELearn%20More%3F%3C%2Fa%3E'%7D).then((e%3D%3E%7Be.isConfirmed%26%26(window.location.href%3D%22https%3A%2F%2Fapp.clickup.com%2F%22)%7D))%2C!1)%7D())return!1%3B!function()%7Blet%20e%3Ddocument.getElementById(%22cuApiButton%22)%3Bnull%3D%3De%26%26(document.getElementsByClassName(%22cu-float-button__toggle-simple-container%22)%5B0%5D.insertAdjacentHTML(%22beforebegin%22%2C'%3Cdiv%20class%3D%22cu-float-button__toggle-simple-container-pinned%22%3E%3Cdiv%20class%3D%22cu-float-button__toggle-simple-container-pinned-item%22%20id%3D%22cuApiButton%22%20style%3D%22color%3A%2331679d%22%3E%3Cdiv%20class%3D%22cu-float-button__toggle-simple-container-pinned-item-icon%20icon%20ng-star-inserted%22%3E%3Csvg%20class%3D%22ng-star-inserted%22%3E%3Cuse%20xlink%3Ahref%3D%22https%3A%2F%2Fapp.clickup.com%2Fmap.6f2d0b6974d0feef5753.svg%23svg-sprite-activity-template-merged%22%3E%3C%2Fuse%3E%3C%2Fsvg%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E')%2Ce%3Ddocument.getElementById(%22cuApiButton%22)%2Ce.onclick%3Dfunction()%7BSwal.fire(%7Bicon%3A%22question%22%2Ctitle%3A%22Do%20you%20want%20to%20clear%20your%20API%20Key%20from%20the%20browser%3F%22%2Cfooter%3A%22Learn%20More%22%2CdenyButtonText%3A%22Nevermind%22%2CconfirmButtonText%3A%22Yeah!%22%2CshowDenyButton%3A!0%7D).then((t%3D%3E%7Bt.isConfirmed%26%26(localStorage.removeItem(%22cu_user_key%22)%2CsessionStorage.removeItem(%22cu_user_key%22)%2ClocalStorage.removeItem(%22usr_apikey_choice%22)%2Ce.remove())%7D))%7D)%7D()%3Blet%20n%3Dawait%20async%20function()%7Blet%20e%2Co%3DlocalStorage.getItem(%22usr_apikey_choice%22)%3Breturn%20o%3F(%22session%22%3D%3Do%3Fe%3DsessionStorage.getItem(%22cu_user_key%22)%3A%22forever%22%3D%3Do%26%26(e%3DlocalStorage.getItem(%22cu_user_key%22))%2Cnull!%3De%26%26%22undefined%22!%3D%3De%7C%7C(e%3Dawait%20t(o)))%3Ae%3Dawait%20t()%2Ce%7D()%3Bvar%20a%3Dwindow.location.href.substring(window.location.href.lastIndexOf(%22%2F%22)).substring(1)%3Bif(7!%3Da.length)%7Bvar%20i%3Ddocument.querySelectorAll(%22.cu-task-row__container%22)%3Bif(!(i.length%3E0))return%20Swal.fire(%7Btitle%3A%22Couldn't%20Identify%20Start%20Task%3Cbr%3ETry%20viewing%20Start%20Task%3Cbr%3EAnd%20Try%20Again.%22%2Cicon%3A%22error%22%2Ctoast%3A!0%2CconfirmButtonText%3A%22Learn%20More%22%2CtimerProgressBar%3A!0%2Cposition%3A%22top-end%22%2Ctimer%3A6e3%7D).then((e%3D%3E%7Be.isConfirmed%26%26window.open(%22https%3A%2F%2Fwww.geeksforgeeks.org%22%2C%22_blank%22)%7D))%2C!1%3Be(%22Start%20Task%20Found.%22%2C%22info%22)%2Ca%3Di%5B0%5D.closest(%22cu-task-row%22).getAttribute(%22data-id%22)%7Do(%7BthisID%3Aa%2Cauth%3An%7D)%7D)()%7Dif(document.getElementById(%22bookmarklet__script_787b643%22))e()%3Belse%7Bvar%20t%3Ddocument.createElement(%22script%22)%3Bt.addEventListener%3Ft.addEventListener(%22load%22%2Ce%2C!1)%3At.readyState%26%26(t.onreadystatechange%3De)%2Ct.id%3D%22bookmarklet__script_787b643%22%2Ct.src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Faxios%2Fdist%2Faxios.min.js%22%2Cdocument.body.appendChild(t)%7D%7Dif(document.getElementById(%22bookmarklet__script_c8895af%22))callback()%3Belse%7Bvar%20s%3Ddocument.createElement(%22script%22)%3Bs.addEventListener%3Fs.addEventListener(%22load%22%2Ccallback%2C!1)%3As.readyState%26%26(s.onreadystatechange%3Dcallback)%2Cs.id%3D%22bookmarklet__script_c8895af%22%2Cs.src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fsweetalert2%4011%22%2Cdocument.body.appendChild(s)%7D%7D)()

```

* Prior to clicking on this bookmarklet make sure you have setup your task dependancies & time estimates. 
* Next, open the first task and set a Start Date. 
* After clicking on the bookmarklet it will prompt you for your API-Key if it doesn't have it stored in the browser localStorage. It will then walk the dependancies of the task and calculate the due date by adding the start date and the estimated time. It will then set the start date of the next dependancy to the end date of the previous task. 

<br>
<br>

### Task Dependancy Manager
----------

This bookmarklet will add 2 columns to a ClickUp List. You can then click the task ID in the list and then click on the task that depends on it. The dependancy will then be created. Much simpler than having to search for a task in the popup dialogue. 


``` 
javascript:(function()%7Bfunction%20callback()%7Bfunction%20e()%7Bfunction%20e(e%2Ct%2Co%3D3e3)%7BSwal.fire(%7Bicon%3At%2Ctitle%3Ae%2Ctimer%3Ao%2CshowConfirmButton%3A!1%2CtimerProgressBar%3A!0%2Ctoast%3A!0%2Cposition%3A%22top-end%22%7D)%7Dasync%20function%20t(t)%7Bconst%20o%3DSwal.mixin(%7BprogressSteps%3A%5B%221%22%2C%222%22%5D%2CshowClass%3A%7Bbackdrop%3A%22swal2-noanimation%22%7D%2ChideClass%3A%7Bbackdrop%3A%22swal2-noanimation%22%7D%7D)%3Bt%7C%7C((t%3Dawait%20o.fire(%7Btitle%3A%22Need%20ClickUp%20API%20Key%22%2CshowDenyButton%3A!0%2CdenyButtonText%3A%22Um%2C%20Forever%22%2CconfirmButtonText%3A%22Until%20The%20Tab%20Is%20Closed%22%2Ctext%3A%22How%20long%20do%20you%20want%20to%20store%20your%20API%20Key%20in%20the%20browser%22%2Cfooter%3A'%3Ca%20href%3D%22%22%3EWhat%20does%20it%20mean%3F%3C%2Fa%3E'%2CcurrentProgressStep%3A0%7D)).isConfirmed%3F(t%3D%22session%22%2ClocalStorage.setItem(%22usr_apikey_choice%22%2C%22session%22))%3At.isDenied%26%26(t%3D%22forever%22%2ClocalStorage.setItem(%22usr_apikey_choice%22%2C%22forever%22)))%3Blet%20n%3Dawait%20o.fire(%7Btitle%3A%22Need%20ClickUp%20API%20Key%22%2CconfirmButtonText%3A%22Start%22%2Cinput%3A%22text%22%2Ctext%3A%22What%20is%20your%20ClickUp%20API%20KEY%22%2Cfooter%3A'%3Ca%20href%3D%22%22%3EWhat%20does%20it%20mean%3F%3C%2Fa%3E'%2CcurrentProgressStep%3A1%2CpreConfirm%3Ae%3D%3E%7Be%7C%7CSwal.showValidationMessage('%3Ci%20class%3D%22fa%20fa-info-circle%22%3E%3C%2Fi%3E%20Your%20API%20Key%20is%20required')%7D%7D)%3Breturn%22session%22%3D%3Dt%3FsessionStorage.setItem(%22cu_user_key%22%2Cn.value)%3A%22forever%22%3D%3Dt%26%26localStorage.setItem(%22cu_user_key%22%2Cn.value)%2Cn.value%3Fe(%22OK%2C%20API%20Key%20saved%20to%20browser.%22%2C%22success%22)%3Ae(%22Sorry%2C%20didn't%20catch%20that...%20Try%20again%22%2C%22error%22)%2Cn.value%7Dasync%20function%20o(%7BthisID%3At%2CStartDate%3An%3D0%2Cauth%3Aa%7D)%7Btry%7Bconst%20r%3Dawait%20axios(%7Burl%3A%22https%3A%2F%2Fapi.clickup.com%2Fapi%2Fv2%2Ftask%2F%22%2Bt%2B%22%2F%22%2Cmethod%3A%22get%22%2Cheaders%3A%7BAuthorization%3Aa%2C%22Content-Type%22%3A%22application%2Fjson%22%7D%7D)%3B0%3D%3Dn%26%26(n%3Dr.data.start_date)%2CEndDate%3Dfunction(e%2Ct)%7Breturn%20t%3E288e5%26%26(workday%3DMath.round(t%2F288e5)-1%2Cleft%3Dt%25288e5%2Ct%3D864e5*workday%2Bleft)%2Ce%2Bt%7D(%2Bn%2Cr.data.time_estimate)%2Casync%20function(%7BthisID%3At%2CStartDate%3An%2CEndDate%3Aa%2Cauth%3Ar%7D)%7Btry%7Bconst%20i%3Dawait%20axios(%7Burl%3A%22https%3A%2F%2Fapi.clickup.com%2Fapi%2Fv2%2Ftask%2F%22%2Bt%2B%22%2F%22%2Cmethod%3A%22put%22%2Cheaders%3A%7BAuthorization%3Ar%2C%22Content-Type%22%3A%22application%2Fjson%22%7D%2Cdata%3A%7Bstart_date%3An%2Cdue_date%3Aa%7D%7D)%3Bfor(dep%20in%20e(%22Updated%3A%20%22%2Bt%2C%22success%22)%2Ci.data.dependencies)i.data.dependencies%5Bdep%5D.depends_on%3D%3Dt%26%26o(%7BthisID%3Ai.data.dependencies%5Bdep%5D.task_id%2CStartDate%3Aa%2B864e5%2Cauth%3Ar%7D)%7Dcatch(t)%7Bconsole.log(t)%2Ce(%22Something%20went%20wrong%2C%20check%20console%20log%22%2C%22error%22)%7D%7D(%7BthisID%3At%2CStartDate%3An%2CEndDate%3AEndDate%2Cauth%3Aa%7D)%7Dcatch(t)%7Be(%22Something%20went%20wrong%2C%20check%20console%20log%22%2C%22error%22)%2Cconsole.log(t)%7D%7D(async()%3D%3E%7Bif(!await%20async%20function()%7Breturn%22app.clickup.com%22%3D%3Dwindow.location.hostname%7C%7C(Swal.fire(%7Bicon%3A%22info%22%2Ctitle%3A%22This%20bookmarklet%20only%20Works%20on%20clickup%20pages%22%2Ctext%3A%22You%20will%20need%20re-run%20the%20bookmarklet%20when%20you%20get%20over%20there%22%2CconfirmButtonText%3A%22Go%20To%20Clickup%22%2CshowCloseButton%3A!0%2CshowCancelButton%3A!0%2CcancelButtonText%3A%22Nevermind%22%2Cfooter%3A'%3Ca%20href%3D%22%22%3ELearn%20More%3F%3C%2Fa%3E'%7D).then((e%3D%3E%7Be.isConfirmed%26%26(window.location.href%3D%22https%3A%2F%2Fapp.clickup.com%2F%22)%7D))%2C!1)%7D())return!1%3B!function()%7Blet%20e%3Ddocument.getElementById(%22cuApiButton%22)%3Bnull%3D%3De%26%26(document.getElementsByClassName(%22cu-float-button__toggle-simple-container%22)%5B0%5D.insertAdjacentHTML(%22beforebegin%22%2C'%3Cdiv%20class%3D%22cu-float-button__toggle-simple-container-pinned%22%3E%3Cdiv%20class%3D%22cu-float-button__toggle-simple-container-pinned-item%22%20id%3D%22cuApiButton%22%20style%3D%22color%3A%2331679d%22%3E%3Cdiv%20class%3D%22cu-float-button__toggle-simple-container-pinned-item-icon%20icon%20ng-star-inserted%22%3E%3Csvg%20class%3D%22ng-star-inserted%22%3E%3Cuse%20xlink%3Ahref%3D%22https%3A%2F%2Fapp.clickup.com%2Fmap.6f2d0b6974d0feef5753.svg%23svg-sprite-activity-template-merged%22%3E%3C%2Fuse%3E%3C%2Fsvg%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E')%2Ce%3Ddocument.getElementById(%22cuApiButton%22)%2Ce.onclick%3Dfunction()%7BSwal.fire(%7Bicon%3A%22question%22%2Ctitle%3A%22Do%20you%20want%20to%20clear%20your%20API%20Key%20from%20the%20browser%3F%22%2Cfooter%3A%22Learn%20More%22%2CdenyButtonText%3A%22Nevermind%22%2CconfirmButtonText%3A%22Yeah!%22%2CshowDenyButton%3A!0%7D).then((t%3D%3E%7Bt.isConfirmed%26%26(localStorage.removeItem(%22cu_user_key%22)%2CsessionStorage.removeItem(%22cu_user_key%22)%2ClocalStorage.removeItem(%22usr_apikey_choice%22)%2Ce.remove())%7D))%7D)%7D()%3Blet%20n%3Dawait%20async%20function()%7Blet%20e%2Co%3DlocalStorage.getItem(%22usr_apikey_choice%22)%3Breturn%20o%3F(%22session%22%3D%3Do%3Fe%3DsessionStorage.getItem(%22cu_user_key%22)%3A%22forever%22%3D%3Do%26%26(e%3DlocalStorage.getItem(%22cu_user_key%22))%2Cnull!%3De%26%26%22undefined%22!%3D%3De%7C%7C(e%3Dawait%20t(o)))%3Ae%3Dawait%20t()%2Ce%7D()%3Bvar%20a%3Dwindow.location.href.substring(window.location.href.lastIndexOf(%22%2F%22)).substring(1)%3Bif(7!%3Da.length)%7Bvar%20r%3Ddocument.querySelectorAll(%22.cu-task-row__container%22)%3Bif(!(r.length%3E0))return%20Swal.fire(%7Btitle%3A%22Couldn't%20Identify%20Start%20Task%3Cbr%3ETry%20viewing%20Start%20Task%3Cbr%3EAnd%20Try%20Again.%22%2Cicon%3A%22error%22%2Ctoast%3A!0%2CconfirmButtonText%3A%22Learn%20More%22%2CtimerProgressBar%3A!0%2Cposition%3A%22top-end%22%2Ctimer%3A6e3%7D).then((e%3D%3E%7Be.isConfirmed%26%26window.open(%22https%3A%2F%2Fwww.geeksforgeeks.org%22%2C%22_blank%22)%7D))%2C!1%3Be(%22Start%20Task%20Found.%22%2C%22info%22)%2Ca%3Dr%5B0%5D.closest(%22cu-task-row%22).getAttribute(%22data-id%22)%7Do(%7BthisID%3Aa%2Cauth%3An%7D)%7D)()%7Dif(document.getElementById(%22bookmarklet__script_787b643%22))e()%3Belse%7Bvar%20t%3Ddocument.createElement(%22script%22)%3Bt.addEventListener%3Ft.addEventListener(%22load%22%2Ce%2C!1)%3At.readyState%26%26(t.onreadystatechange%3De)%2Ct.id%3D%22bookmarklet__script_787b643%22%2Ct.src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Faxios%2Fdist%2Faxios.min.js%22%2Cdocument.body.appendChild(t)%7D%7Dif(document.getElementById(%22bookmarklet__script_c8895af%22))callback()%3Belse%7Bvar%20s%3Ddocument.createElement(%22script%22)%3Bs.addEventListener%3Fs.addEventListener(%22load%22%2Ccallback%2C!1)%3As.readyState%26%26(s.onreadystatechange%3Dcallback)%2Cs.id%3D%22bookmarklet__script_c8895af%22%2Cs.src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fsweetalert2%4011%22%2Cdocument.body.appendChild(s)%7D%7D)()

```



### Installation

1. clone this repo into a folder on your computer. 
    ```sh
    git clone https://github.com/johnkraczek/ClickUp-Bookmarklets.git
    ```
2. Install npm dependancies:
    ```sh
    npm install
    ```
3. Install Bookmarklet as global object
    ```
    npm install bookmarklet -g
    ```
4. Install Pug-CLI
    ```
    npm install pug-cli -g
    ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Check out my YouTube video on these bookmarklets. I cover the process start to finish of using & hacking on this project. 

<< Video Pending >>

After changing anything or updating the code, you can run 

``` 
  npm run build
```

to compile your javascript into the two bookmarklets. 

You will find the compiled code under build/bookmarks, or you can check the updated readme.md which will have also been updated using that command.


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

John Kraczek - [@johnkraczek](https://twitter.com/johnkraczek)

YouTube - [@johnkraczek][youtubeChannel] [![Youtube][youtubeSubs]][youtubeChannel]

Project Link: [https://github.com/johnkraczek/ClickUp-Bookmarklets](https://github.com/johnkraczek/ClickUp-Bookmarklets)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/johnkraczek/ClickUp-Bookmarklets?style=for-the-badge
[contributors-url]: https://github.com/johnkraczek/ClickUp-Bookmarklets/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/johnkraczek/ClickUp-Bookmarklets?style=for-the-badge
[forks-url]: https://github.com/johnkraczek/ClickUp-Bookmarklets/network/members
[stars-shield]: https://img.shields.io/github/stars/johnkraczek/ClickUp-Bookmarklets?style=for-the-badge
[stars-url]: https://github.com/johnkraczek/ClickUp-Bookmarklets/stargazers
[issues-shield]: https://img.shields.io/github/issues/johnkraczek/ClickUp-Bookmarklets?style=for-the-badge
[issues-url]: https://github.com/johnkraczek/ClickUp-Bookmarklets/issues
[license-shield]: https://img.shields.io/github/license/johnkraczek/ClickUp-Bookmarklets?style=for-the-badge
[license-url]: https://github.com/johnkraczek/ClickUp-Bookmarklets/blob/master/LICENSE.txt


[youtubeSubs]: https://img.shields.io/youtube/channel/subscribers/UCIxGChidvUMOwedA8tIB7JQ?style=for-the-badge
[youtubeChannel]: https://youtube.com/johnkraczek

 