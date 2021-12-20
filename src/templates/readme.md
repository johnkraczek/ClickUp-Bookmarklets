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
{{{dates}}}
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
{{{deps}}}
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

 