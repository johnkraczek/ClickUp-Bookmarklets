// ==Bookmarklet==
// @name Clickup Authentication
// @author John Kraczek
// @script !loadOnce https://cdn.jsdelivr.net/npm/sweetalert2@11
// @script !loadOnce https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js
// ==/Bookmarklet==


function toast(msg, status, timer = 3000) {
    Swal.fire({
      icon: status,
      title: msg,
      timer: timer,
      showConfirmButton: false,
      timerProgressBar: true,
      toast: true,
      position: 'top-end'
    })
  }
  
  async function getAPIKeyFromUser(location) {
    const steps = ['1', '2']
    const Queue = Swal.mixin({
      progressSteps: steps,
      showClass: { backdrop: 'swal2-noanimation' },
      hideClass: { backdrop: 'swal2-noanimation' }
    })
    if (!location) {
      location = await Queue.fire({
        title: 'Need ClickUp API Key',
        showDenyButton: true,
        denyButtonText: 'Um, Forever',
        confirmButtonText: 'Until The Tab Is Closed',
        text: 'How long do you want to store your API Key in the browser',
        footer: '<a href="">What does it mean?</a>',
        currentProgressStep: 0
      })
      if (location.isConfirmed) {
        location = 'session';
        localStorage.setItem('usr_apikey_choice', 'session');
      } else if (location.isDenied) {
        location = 'forever';
        localStorage.setItem('usr_apikey_choice', 'forever');
      }
    }
  
    let cu_apikey = await Queue.fire({
      title: 'Need ClickUp API Key',
      confirmButtonText: 'Start',
      input: 'text',
      text: 'What is your ClickUp API KEY',
      footer: '<a href="">What does it mean?</a>',
      currentProgressStep: 1,
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> Your API Key is required'
          )
        }
      }
    })
    if (location == 'session') {
      sessionStorage.setItem('cu_user_key', cu_apikey.value);
    } else if (location == 'forever') {
      localStorage.setItem('cu_user_key', cu_apikey.value);
    }
  
    if (cu_apikey.value) {
      toast('OK, API Key saved to browser.', 'success');
    } else {
      toast('Sorry, didn\'t catch that... Try again', 'error');
    }
    return cu_apikey.value;
  }
  
  async function getApiKeyFromStorage() {
    let apikey_location_choice = localStorage.getItem('usr_apikey_choice');
    let cu_user_key;
  
    if (!apikey_location_choice) {
      cu_user_key = await getAPIKeyFromUser();
    } else {
      if (apikey_location_choice == 'session') {
        cu_user_key = sessionStorage.getItem('cu_user_key');
      } else if (apikey_location_choice == 'forever') {
        cu_user_key = localStorage.getItem('cu_user_key');
      }
      if (cu_user_key == null || cu_user_key === 'undefined') {
        cu_user_key = await getAPIKeyFromUser(apikey_location_choice);
      }
    }
    return cu_user_key
  }
  
  async function checkBrowser() {
    if (window.location.hostname != 'app.clickup.com') {
      Swal.fire({
        icon: 'info',
        title: 'This bookmarklet only Works on clickup pages',
        text: 'You will need re-run the bookmarklet when you get over there',
        confirmButtonText: 'Go To Clickup',
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: 'Nevermind',
        footer: '<a href="">Learn More?</a>'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'https://app.clickup.com/'
        }
      })
      return false;
    } else {
      return true;
    }
  }

  function addOptions() {
    let optbtn = document.getElementById('cuApiButton');
    if (optbtn == null) {
      let btn = document.getElementsByClassName('cu-float-button__toggle-simple-container')[0]
        .insertAdjacentHTML('beforebegin', optionTemplate());
      optbtn = document.getElementById('cuApiButton');
      optbtn.onclick = function () {
        Swal.fire({
          icon: 'question',
          title: 'Do you want to clear your API Key from the browser?',
          footer: 'Learn More',
          denyButtonText: "Nevermind",
          confirmButtonText: "Yeah!",
          showDenyButton: true,
        }).then((res) => {
          if (res.isConfirmed) {
            localStorage.removeItem('cu_user_key');
            sessionStorage.removeItem('cu_user_key');
            localStorage.removeItem('usr_apikey_choice');
            optbtn.remove();
          }
        })
      }
    }
  }