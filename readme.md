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
javascript:(function()%7Bfunction%20callback()%7Bfunction%20e()%7Basync%20function%20e(%7BthisID%3An%2CStartDate%3Aa%3D0%2Cauth%3Ai%7D)%7Btry%7Bawait%20t(610)%3Bconst%20r%3Dawait%20axios(%7Burl%3A%22https%3A%2F%2Fapi.clickup.com%2Fapi%2Fv2%2Ftask%2F%22%2Bn%2B%22%2F%22%2Cmethod%3A%22get%22%2Cheaders%3A%7BAuthorization%3Ai%2C%22Content-Type%22%3A%22application%2Fjson%22%7D%7D)%3B0%3D%3Da%26%26(a%3Dr.data.start_date)%2CEndDate%3Dfunction(e%2Ct)%7Breturn%20t%3E288e5%26%26(workday%3DMath.round(t%2F288e5)-1%2Cleft%3Dt%25288e5%2Ct%3D864e5*workday%2Bleft)%2Ce%2Bt%7D(%2Ba%2Cr.data.time_estimate)%2Casync%20function(%7BthisID%3An%2CStartDate%3Aa%2CEndDate%3Ai%2Cauth%3Ar%7D)%7Btry%7Bawait%20t(610)%3Bconst%20s%3Dawait%20axios(%7Burl%3A%22https%3A%2F%2Fapi.clickup.com%2Fapi%2Fv2%2Ftask%2F%22%2Bn%2B%22%2F%22%2Cmethod%3A%22put%22%2Cheaders%3A%7BAuthorization%3Ar%2C%22Content-Type%22%3A%22application%2Fjson%22%7D%2Cdata%3A%7Bstart_date%3Aa%2Cdue_date%3Ai%7D%7D)%3Bfor(dep%20in%20o(%22Updated%3A%20%22%2Bn%2C%22success%22)%2Cs.data.dependencies)s.data.dependencies%5Bdep%5D.depends_on%3D%3Dn%26%26e(%7BthisID%3As.data.dependencies%5Bdep%5D.task_id%2CStartDate%3Ai%2B864e5%2Cauth%3Ar%7D)%7Dcatch(n)%7Bconsole.log(n)%2Co(%22Something%20went%20wrong%2C%20check%20console%20log%22%2C%22error%22)%7D%7D(%7BthisID%3An%2CStartDate%3Aa%2CEndDate%3AEndDate%2Cauth%3Ai%7D)%7Dcatch(n)%7Bo(%22Something%20went%20wrong%2C%20check%20console%20log%22%2C%22error%22)%2Cconsole.log(n)%7D%7Dconst%20t%3De%3D%3Enew%20Promise((t%3D%3EsetTimeout(t%2Ce)))%3Bfunction%20o(e%2Ct%2Co%3D3e3)%7BSwal.fire(%7Bicon%3At%2Ctitle%3Ae%2Ctimer%3Ao%2CshowConfirmButton%3A!1%2CtimerProgressBar%3A!0%2Ctoast%3A!0%2Cposition%3A%22top-end%22%2Cwidth%3A500%7D)%7Dasync%20function%20n(e)%7Bconst%20t%3DSwal.mixin(%7BprogressSteps%3A%5B%221%22%2C%222%22%5D%2CshowClass%3A%7Bbackdrop%3A%22swal2-noanimation%22%7D%2ChideClass%3A%7Bbackdrop%3A%22swal2-noanimation%22%7D%7D)%3Be%7C%7C((e%3Dawait%20t.fire(%7Btitle%3A%22Need%20ClickUp%20API%20Key%22%2CshowDenyButton%3A!0%2CdenyButtonText%3A%22Um%2C%20Forever%22%2CconfirmButtonText%3A%22Until%20The%20Tab%20Is%20Closed%22%2Ctext%3A%22How%20long%20do%20you%20want%20to%20store%20your%20API%20Key%20in%20the%20browser%22%2Cfooter%3A'%3Ca%20href%3D%22https%3A%2F%2Fgithub.com%2Fjohnkraczek%2FClickUp-Bookmarklets%2Fblob%2Fmaster%2Ftroubleshooting.md%22%3EWhat%20does%20it%20mean%3F%3C%2Fa%3E'%2CcurrentProgressStep%3A0%7D)).isConfirmed%3F(e%3D%22session%22%2ClocalStorage.setItem(%22usr_apikey_choice%22%2C%22session%22))%3Ae.isDenied%26%26(e%3D%22forever%22%2ClocalStorage.setItem(%22usr_apikey_choice%22%2C%22forever%22)))%3Blet%20n%3Dawait%20t.fire(%7Btitle%3A%22Need%20ClickUp%20API%20Key%22%2CconfirmButtonText%3A%22Start%22%2Cinput%3A%22text%22%2Ctext%3A%22What%20is%20your%20ClickUp%20API%20KEY%22%2Cfooter%3A'%3Ca%20href%3D%22%22%3EWhat%20does%20it%20mean%3F%3C%2Fa%3E'%2CcurrentProgressStep%3A1%2CpreConfirm%3Ae%3D%3E%7Be%7C%7CSwal.showValidationMessage('%3Ci%20class%3D%22fa%20fa-info-circle%22%3E%3C%2Fi%3E%20Your%20API%20Key%20is%20required')%7D%7D)%3Breturn%22session%22%3D%3De%3FsessionStorage.setItem(%22cu_user_key%22%2Cn.value)%3A%22forever%22%3D%3De%26%26localStorage.setItem(%22cu_user_key%22%2Cn.value)%2Cn.value%3Fo(%22OK%2C%20API%20Key%20saved%20to%20browser.%22%2C%22success%22)%3Ao(%22Sorry%2C%20didn't%20catch%20that...%20Try%20again%22%2C%22error%22)%2Cn.value%7D(async()%3D%3E%7Bif(console.log(%22ran%20main%22)%2C!await%20async%20function()%7Breturn%22app.clickup.com%22%3D%3Dwindow.location.hostname%7C%7C(Swal.fire(%7Bicon%3A%22info%22%2Ctitle%3A%22This%20bookmarklet%20only%20Works%20on%20clickup%20pages%22%2Ctext%3A%22You%20will%20need%20re-run%20the%20bookmarklet%20when%20you%20get%20over%20there%22%2CconfirmButtonText%3A%22Go%20To%20Clickup%22%2CshowCloseButton%3A!0%2CshowCancelButton%3A!0%2CcancelButtonText%3A%22Nevermind%22%2Cfooter%3A'%3Ca%20href%3D%22%22%3ELearn%20More%3F%3C%2Fa%3E'%7D).then((e%3D%3E%7Be.isConfirmed%26%26(window.location.href%3D%22https%3A%2F%2Fapp.clickup.com%2F%22)%7D))%2C!1)%7D())return!1%3B!function()%7Blet%20e%3Ddocument.getElementById(%22cuApiButton%22)%3Bnull%3D%3De%26%26(document.getElementsByClassName(%22cu-float-button__toggle-simple-container%22)%5B0%5D.insertAdjacentHTML(%22beforebegin%22%2C'%3Cdiv%20class%3D%22cu-float-button__toggle-simple-container-pinned%22%3E%3Cdiv%20class%3D%22cu-float-button__toggle-simple-container-pinned-item%22%20id%3D%22cuApiButton%22%20style%3D%22color%3A%2331679d%22%3E%3Cdiv%20class%3D%22cu-float-button__toggle-simple-container-pinned-item-icon%20icon%20ng-star-inserted%22%3E%3Csvg%20class%3D%22ng-star-inserted%22%3E%3Cuse%20xlink%3Ahref%3D%22https%3A%2F%2Fapp.clickup.com%2Fmap.6f2d0b6974d0feef5753.svg%23svg-sprite-activity-template-merged%22%3E%3C%2Fuse%3E%3C%2Fsvg%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E')%2Ce%3Ddocument.getElementById(%22cuApiButton%22)%2Ce.onclick%3Dfunction()%7BSwal.fire(%7Bicon%3A%22question%22%2Ctitle%3A%22Do%20you%20want%20to%20clear%20your%20API%20Key%20from%20the%20browser%3F%22%2Cfooter%3A%22Learn%20More%22%2CdenyButtonText%3A%22Nevermind%22%2CconfirmButtonText%3A%22Yeah!%22%2CshowDenyButton%3A!0%7D).then((t%3D%3E%7Bt.isConfirmed%26%26(localStorage.removeItem(%22cu_user_key%22)%2CsessionStorage.removeItem(%22cu_user_key%22)%2ClocalStorage.removeItem(%22usr_apikey_choice%22)%2Ce.remove())%7D))%7D)%7D()%3Blet%20t%3Dawait%20async%20function()%7Blet%20e%2Ct%3DlocalStorage.getItem(%22usr_apikey_choice%22)%3Breturn%20t%3F(%22session%22%3D%3Dt%3Fe%3DsessionStorage.getItem(%22cu_user_key%22)%3A%22forever%22%3D%3Dt%26%26(e%3DlocalStorage.getItem(%22cu_user_key%22))%2Cnull!%3De%26%26%22undefined%22!%3D%3De%7C%7C(e%3Dawait%20n(t)))%3Ae%3Dawait%20n()%2Ce%7D()%3Bvar%20a%3Dwindow.location.href.substring(window.location.href.lastIndexOf(%22%2F%22)).substring(1)%3Bif(7!%3Da.length)%7Bvar%20i%3Ddocument.querySelectorAll(%22.cu-task-row__container%22)%3Bif(!(i.length%3E0))return%20Swal.fire(%7Btitle%3A%22Couldn't%20Identify%20Start%20Task%3Cbr%3ETry%20viewing%20Start%20Task%3Cbr%3EAnd%20Try%20Again.%22%2Cicon%3A%22error%22%2Ctoast%3A!0%2CconfirmButtonText%3A%22Learn%20More%22%2CtimerProgressBar%3A!0%2Cposition%3A%22top-end%22%2Ctimer%3A6e3%2Cwidth%3A600%7D).then((e%3D%3E%7Be.isConfirmed%26%26window.open(%22https%3A%2F%2Fgithub.com%2Fjohnkraczek%2FClickUp-Bookmarklets%2Fblob%2Fmaster%2Ftroubleshooting.md%22%2C%22_blank%22)%7D))%2C!1%3Bo(%22Start%20Task%20Found.%22%2C%22info%22)%2Ca%3Di%5B0%5D.closest(%22cu-task-row%22).getAttribute(%22data-id%22)%7De(%7BthisID%3Aa%2Cauth%3At%7D)%7D)()%7Dif(document.getElementById(%22bookmarklet__script_787b643%22))e()%3Belse%7Bvar%20t%3Ddocument.createElement(%22script%22)%3Bt.addEventListener%3Ft.addEventListener(%22load%22%2Ce%2C!1)%3At.readyState%26%26(t.onreadystatechange%3De)%2Ct.id%3D%22bookmarklet__script_787b643%22%2Ct.src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Faxios%2Fdist%2Faxios.min.js%22%2Cdocument.body.appendChild(t)%7D%7Dif(document.getElementById(%22bookmarklet__script_c8895af%22))callback()%3Belse%7Bvar%20s%3Ddocument.createElement(%22script%22)%3Bs.addEventListener%3Fs.addEventListener(%22load%22%2Ccallback%2C!1)%3As.readyState%26%26(s.onreadystatechange%3Dcallback)%2Cs.id%3D%22bookmarklet__script_c8895af%22%2Cs.src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fsweetalert2%4011%22%2Cdocument.body.appendChild(s)%7D%7D)()

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
javascript:(function()%7Bfunction%20callback()%7Bfunction%20e()%7Bfunction%20e(e)%7Bif(!e.classList.contains(%22addedDep%22))%7Be.classList.add(%22addedDep%22)%3Bvar%20t%3Ddocument.createElement(%22div%22)%3Bt.setAttribute(%22class%22%2C%22cu-task-row__id%20cu-task-dep__container%22)%3Bvar%20i%3Ddocument.createElement(%22div%22)%3Bi.setAttribute(%22class%22%2C%22cu-task-row__id-body%20dep_click%22)%2Ci.innerText%3D%22DEPS%20ON%22%2Ci.onclick%3Dfunction(e)%7Bif(window.depsID)%7Bvar%20t%3De.target.closest(%22cu-task-row%22).getAttribute(%22data-id%22)%3B!function(e%2Ct%2Ci)%7Bif(e!%3Dt)%7Bvar%20a%3Dnew%20XMLHttpRequest%3Ba.open(%22POST%22%2C%22https%3A%2F%2Fapi.clickup.com%2Fapi%2Fv2%2Ftask%2F%22%2Be%2B%22%2Fdependency%22)%2Ca.setRequestHeader(%22Authorization%22%2Cwindow.cu_apikey)%2Ca.setRequestHeader(%22Content-Type%22%2C%22application%2Fjson%22)%2Ca.onreadystatechange%3Dfunction()%7B4%3D%3D%3Dthis.readyState%26%26200%3D%3Dthis.status%26%26(s(%60Added%20%24%7Bt%7D%20as%20a%20dependancy%60%2C%22success%22)%2Ci.innerText%3D%22SUCCESS%22%2Ci.style.color%3D%22green%22%2CsetTimeout((()%3D%3E%7Bi.innerText%3D%22DEPS%20ON%22%2Ci.style.color%3D%22%2382868d%22%7D)%2C1500))%7D%3Bvar%20n%3D%7Bdepends_on%3At%7D%3Ba.send(JSON.stringify(n))%7D%7D(window.depsID%2Ct%2Ci)%7D%7D%2Ct.appendChild(i)%2Ct.style.width%3D%22100px%22%3Bvar%20a%3De.querySelector(%22.cu-task-row__main%22)%3Ba.insertAdjacentElement(%22afterend%22%2Ct)%3Bvar%20n%3Ddocument.createElement(%22div%22)%3Bn.setAttribute(%22class%22%2C%22cu-task-row__id%20cu-task-id__container%22)%3Bvar%20r%3Ddocument.createElement(%22div%22)%3Br.setAttribute(%22class%22%2C%22cu-task-row__id-body%20ng-star-inserted%20dep_id%22)%3Bvar%20o%3De.closest(%22cu-task-row%22).getAttribute(%22data-id%22)%3Br.innerText%3Do%2Cr.onclick%3Dfunction(e)%7Bvar%20t%2Cs%3Bfor(t%3Ddocument.querySelectorAll(%22.dep_id%22)%2Cs%3D0%3Bs%3Ct.length%3Bs%2B%2B)t%5Bs%5D.style.color%3D%22%2382868d%22%3Be.target.style.color%3D%22red%22%2Cwindow.depsID%3De.target.closest(%22cu-task-row%22).getAttribute(%22data-id%22)%7D%2Cn.appendChild(r)%2Cn.style.width%3D%22100px%22%2Ca.insertAdjacentElement(%22afterend%22%2Cn)%7D%7Dfunction%20t(e)%7Bdocument.getElementById(%60%24%7Be%7D-ID%60)%7C%7Cdocument.getElementsByClassName(%22cu-task-list-header__items%22)%5B0%5D.insertAdjacentHTML(%22afterbegin%22%2Cfunction(e)%7Bvar%20t%2Cs%3D%22%22%2Ci%3De%7C%7C%7B%7D%3Breturn%20function(e)%7Bs%3Ds%2B'%3Ccu-task-list-header-field%20class%3D%22cu-task-list-header-field%20cdk-drag%20cu-task-list-header__item%20ng-star-inserted%22%20mwlresizable%3D%22%22%20cdkdrag%3D%22%22%20data-test%3D%22task-list-header_column__Assignee%22%20style%3D%22width%3A%20100px%3B%22%3E%3Cdiv%20class%3D%22cu-task-list-header-field__handle%20icon%20ng-star-inserted%22%3E%3Csvg%20class%3D%22ng-star-inserted%22%3E%3Cuse%20xlink%3Ahref%3D%22https%3A%2F%2Fapp.clickup.com%2Fmap.6f2d0b6974d0feef5753.svg%23svg-sprite-handle3%22%3E%3C%2Fuse%3E%3C%2Fsvg%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22cu-task-list-header-field__resizer%20cu-task-list-header-field__resizer_left%20ng-star-inserted%22%20mwlresizehandle%3D%22%22%3E%3C%2Fdiv%3E%3Cdiv%20class%3D%22cu-task-list-header-field__resizer%20cu-task-list-header-field__resizer_right%20ng-star-inserted%22%20mwlresizehandle%3D%22%22%3E%3C%2Fdiv%3E%3Ccu-dropdown-list%20class%3D%22cu-dropdown-list%20cu-task-list-header-field__item%22%3E%3Cdiv%20class%3D%22cu-dropdown%22%20cudropdown%3D%22%22%3E%3Cdiv%20class%3D%22cu-dropdown__toggle%22%20cudropdowntoggle%3D%22%22%3E%3Ccu-editable%20class%3D%22cu-editable%22%3E%3Cdiv%20class%3D%22cu-task-list-header-field__title%20ng-star-inserted%22%3E%3Cdiv%20class%3D%22cu-task-list-header-field__title-text%22'%2Bfunction(e%2Ct%2Cs%2Ci)%7Bif(!1%3D%3D%3Dt%7C%7Cnull%3D%3Dt%7C%7C!t%26%26(%22class%22%3D%3D%3De%7C%7C%22style%22%3D%3D%3De))return%22%22%3Bif(!0%3D%3D%3Dt)return%22%20%22%2B(i%3Fe%3Ae%2B'%3D%22'%2Be%2B'%22')%3Bvar%20n%3Dtypeof%20t%3Breturn%22object%22!%3D%3Dn%26%26%22function%22!%3D%3Dn%7C%7C%22function%22!%3Dtypeof%20t.toJSON%7C%7C(t%3Dt.toJSON())%2C%22string%22%3D%3Dtypeof%20t%7C%7C(t%3DJSON.stringify(t)%2Cs%7C%7C-1%3D%3D%3Dt.indexOf('%22'))%3F(s%26%26(t%3Da(t))%2C%22%20%22%2Be%2B'%3D%22'%2Bt%2B'%22')%3A%22%20%22%2Be%2B%22%3D'%22%2Bt.replace(%2F'%2Fg%2C%22%26%2339%3B%22)%2B%22'%22%7D(%22id%22%2C%60%24%7Be%7D-ID%60%2C!0%2C!1)%2B%22%3E%20%22%2Ba(null%3D%3D(t%3De)%3F%22%22%3At)%2B'%3C%2Fdiv%3E%3Cdiv%20class%3D%22cu-task-list-header-field__dir%20ng-star-inserted%22%3E%3Cdiv%20class%3D%22cu-task-list-header-field__dir-icon%20cu-task-list-header-field__dir-icon_unsorted%20icon%20ng-star-inserted%22%3E%3Csvg%20class%3D%22ng-star-inserted%22%3E%3Cuse%20xlink%3Ahref%3D%22https%3A%2F%2Fapp.clickup.com%2Fmap.6f2d0b6974d0feef5753.svg%23svg-sprite-sort-menu%22%3E%3C%2Fuse%3E%3C%2Fsvg%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fcu-editable%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fcu-dropdown-list%3E%3C%2Fcu-task-list-header-field%3E'%7D.call(this%2C%22listName%22in%20i%3Fi.listName%3A%22undefined%22!%3Dtypeof%20listName%3FlistName%3Avoid%200)%2Cs%7D(%7BlistName%3Ae%7D))%7Dfunction%20s(e%2Ct%2Cs%3D3e3)%7BSwal.fire(%7Bicon%3At%2Ctitle%3Ae%2Ctimer%3As%2CshowConfirmButton%3A!1%2CtimerProgressBar%3A!0%2Ctoast%3A!0%2Cposition%3A%22top-end%22%2Cwidth%3A500%7D)%7Dasync%20function%20i(e)%7Bconst%20t%3DSwal.mixin(%7BprogressSteps%3A%5B%221%22%2C%222%22%5D%2CshowClass%3A%7Bbackdrop%3A%22swal2-noanimation%22%7D%2ChideClass%3A%7Bbackdrop%3A%22swal2-noanimation%22%7D%7D)%3Be%7C%7C((e%3Dawait%20t.fire(%7Btitle%3A%22Need%20ClickUp%20API%20Key%22%2CshowDenyButton%3A!0%2CdenyButtonText%3A%22Um%2C%20Forever%22%2CconfirmButtonText%3A%22Until%20The%20Tab%20Is%20Closed%22%2Ctext%3A%22How%20long%20do%20you%20want%20to%20store%20your%20API%20Key%20in%20the%20browser%22%2Cfooter%3A'%3Ca%20href%3D%22https%3A%2F%2Fgithub.com%2Fjohnkraczek%2FClickUp-Bookmarklets%2Fblob%2Fmaster%2Ftroubleshooting.md%22%3EWhat%20does%20it%20mean%3F%3C%2Fa%3E'%2CcurrentProgressStep%3A0%7D)).isConfirmed%3F(e%3D%22session%22%2ClocalStorage.setItem(%22usr_apikey_choice%22%2C%22session%22))%3Ae.isDenied%26%26(e%3D%22forever%22%2ClocalStorage.setItem(%22usr_apikey_choice%22%2C%22forever%22)))%3Blet%20i%3Dawait%20t.fire(%7Btitle%3A%22Need%20ClickUp%20API%20Key%22%2CconfirmButtonText%3A%22Start%22%2Cinput%3A%22text%22%2Ctext%3A%22What%20is%20your%20ClickUp%20API%20KEY%22%2Cfooter%3A'%3Ca%20href%3D%22%22%3EWhat%20does%20it%20mean%3F%3C%2Fa%3E'%2CcurrentProgressStep%3A1%2CpreConfirm%3Ae%3D%3E%7Be%7C%7CSwal.showValidationMessage('%3Ci%20class%3D%22fa%20fa-info-circle%22%3E%3C%2Fi%3E%20Your%20API%20Key%20is%20required')%7D%7D)%3Breturn%22session%22%3D%3De%3FsessionStorage.setItem(%22cu_user_key%22%2Ci.value)%3A%22forever%22%3D%3De%26%26localStorage.setItem(%22cu_user_key%22%2Ci.value)%2Ci.value%3Fs(%22OK%2C%20API%20Key%20saved%20to%20browser.%22%2C%22success%22)%3As(%22Sorry%2C%20didn't%20catch%20that...%20Try%20again%22%2C%22error%22)%2Ci.value%7Dfunction%20a(e)%7Bvar%20t%3D%22%22%2Be%2Cs%3Dn.exec(t)%3Bif(!s)return%20e%3Bvar%20i%2Ca%2Cr%2Co%3D%22%22%3Bfor(i%3Ds.index%2Ca%3D0%3Bi%3Ct.length%3Bi%2B%2B)%7Bswitch(t.charCodeAt(i))%7Bcase%2034%3Ar%3D%22%26quot%3B%22%3Bbreak%3Bcase%2038%3Ar%3D%22%26amp%3B%22%3Bbreak%3Bcase%2060%3Ar%3D%22%26lt%3B%22%3Bbreak%3Bcase%2062%3Ar%3D%22%26gt%3B%22%3Bbreak%3Bdefault%3Acontinue%7Da!%3D%3Di%26%26(o%2B%3Dt.substring(a%2Ci))%2Ca%3Di%2B1%2Co%2B%3Dr%7Dreturn%20a!%3D%3Di%3Fo%2Bt.substring(a%2Ci)%3Ao%7D(async()%3D%3E%7Bawait%20async%20function()%7Breturn%22app.clickup.com%22%3D%3Dwindow.location.hostname%7C%7C(Swal.fire(%7Bicon%3A%22info%22%2Ctitle%3A%22This%20bookmarklet%20only%20Works%20on%20clickup%20pages%22%2Ctext%3A%22You%20will%20need%20re-run%20the%20bookmarklet%20when%20you%20get%20over%20there%22%2CconfirmButtonText%3A%22Go%20To%20Clickup%22%2CshowCloseButton%3A!0%2CshowCancelButton%3A!0%2CcancelButtonText%3A%22Nevermind%22%2Cfooter%3A'%3Ca%20href%3D%22%22%3ELearn%20More%3F%3C%2Fa%3E'%7D).then((e%3D%3E%7Be.isConfirmed%26%26(window.location.href%3D%22https%3A%2F%2Fapp.clickup.com%2F%22)%7D))%2C!1)%7D()%26%26(document.getElementsByClassName(%22cu-dashboard-table__body%22).length%3F(window.cu_apikey%3Dawait%20async%20function()%7Blet%20e%2Ct%3DlocalStorage.getItem(%22usr_apikey_choice%22)%3Breturn%20t%3F(%22session%22%3D%3Dt%3Fe%3DsessionStorage.getItem(%22cu_user_key%22)%3A%22forever%22%3D%3Dt%26%26(e%3DlocalStorage.getItem(%22cu_user_key%22))%2Cnull!%3De%26%26%22undefined%22!%3D%3De%7C%7C(e%3Dawait%20i(t)))%3Ae%3Dawait%20i()%2Ce%7D()%2Ct(%22Target%22)%2Ct(%22Task%20ID%22)%2Cfunction()%7Blet%20e%3Ddocument.getElementById(%22cuApiButton%22)%3Bnull%3D%3De%26%26(document.getElementsByClassName(%22cu-float-button__toggle-simple-container%22)%5B0%5D.insertAdjacentHTML(%22beforebegin%22%2C'%3Cdiv%20class%3D%22cu-float-button__toggle-simple-container-pinned%22%3E%3Cdiv%20class%3D%22cu-float-button__toggle-simple-container-pinned-item%22%20id%3D%22cuApiButton%22%20style%3D%22color%3A%2331679d%22%3E%3Cdiv%20class%3D%22cu-float-button__toggle-simple-container-pinned-item-icon%20icon%20ng-star-inserted%22%3E%3Csvg%20class%3D%22ng-star-inserted%22%3E%3Cuse%20xlink%3Ahref%3D%22https%3A%2F%2Fapp.clickup.com%2Fmap.6f2d0b6974d0feef5753.svg%23svg-sprite-activity-template-merged%22%3E%3C%2Fuse%3E%3C%2Fsvg%3E%3C%2Fdiv%3E%3C%2Fdiv%3E%3C%2Fdiv%3E')%2Ce%3Ddocument.getElementById(%22cuApiButton%22)%2Ce.onclick%3Dfunction()%7BSwal.fire(%7Bicon%3A%22question%22%2Ctitle%3A%22Do%20you%20want%20to%20clear%20your%20API%20Key%20from%20the%20browser%3F%22%2Cfooter%3A%22Learn%20More%22%2CdenyButtonText%3A%22Nevermind%22%2CconfirmButtonText%3A%22Yeah!%22%2CshowDenyButton%3A!0%7D).then((t%3D%3E%7Bt.isConfirmed%26%26(localStorage.removeItem(%22cu_user_key%22)%2CsessionStorage.removeItem(%22cu_user_key%22)%2ClocalStorage.removeItem(%22usr_apikey_choice%22)%2Ce.remove())%7D))%7D)%7D()%2Cdocument.querySelectorAll(%22.cu-task-row__container%22).forEach((t%3D%3E%7Be(t)%7D)))%3ASwal.fire(%7Btitle%3A%22Please%20enter%20a%20list%20view%20to%20update%20dependancies%22%2Cicon%3A%22error%22%2Ctoast%3A!0%2CconfirmButtonText%3A%22Learn%20More%22%2CtimerProgressBar%3A!0%2Cposition%3A%22top-end%22%2Ctimer%3A6e3%2Cwidth%3A600%7D).then((e%3D%3E%7Be.isConfirmed%26%26window.open(%22https%3A%2F%2Fgithub.com%2Fjohnkraczek%2FClickUp-Bookmarklets%2Fblob%2Fmaster%2Ftroubleshooting.md%22%2C%22_blank%22)%7D)))%7D)()%3Bvar%20n%3D%2F%5B%22%26%3C%3E%5D%2F%7Dif(document.getElementById(%22bookmarklet__script_787b643%22))e()%3Belse%7Bvar%20t%3Ddocument.createElement(%22script%22)%3Bt.addEventListener%3Ft.addEventListener(%22load%22%2Ce%2C!1)%3At.readyState%26%26(t.onreadystatechange%3De)%2Ct.id%3D%22bookmarklet__script_787b643%22%2Ct.src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Faxios%2Fdist%2Faxios.min.js%22%2Cdocument.body.appendChild(t)%7D%7Dif(document.getElementById(%22bookmarklet__script_c8895af%22))callback()%3Belse%7Bvar%20s%3Ddocument.createElement(%22script%22)%3Bs.addEventListener%3Fs.addEventListener(%22load%22%2Ccallback%2C!1)%3As.readyState%26%26(s.onreadystatechange%3Dcallback)%2Cs.id%3D%22bookmarklet__script_c8895af%22%2Cs.src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fsweetalert2%4011%22%2Cdocument.body.appendChild(s)%7D%7D)()

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

 