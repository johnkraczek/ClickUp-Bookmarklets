
async function getTask({ thisID, StartDate = 0, auth }) {
  try {
    const res = await axios({
      url: 'https://api.clickup.com/api/v2/task/' + thisID + '/',
      method: 'get',
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json'
      }
    })
    if (StartDate == 0) {
      StartDate = res.data.start_date;
    }

    EndDate = getEstimate(+StartDate, res.data.time_estimate)
    updateTask({ thisID, StartDate, EndDate, auth });
  } catch (err) {
    toast('Something went wrong, check console log', 'error');
    console.log(err)
  }
}

async function updateTask({ thisID, StartDate, EndDate, auth }) {
  try {
    const res = await axios({
      url: 'https://api.clickup.com/api/v2/task/' + thisID + '/',
      method: 'put',
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json'
      },
      data: {
        start_date: StartDate,
        due_date: EndDate
      }
    })
    toast('Updated: ' + thisID, 'success');

    for (dep in res.data.dependencies) {
      if (res.data.dependencies[dep].depends_on == thisID) {
        getTask({
          thisID: res.data.dependencies[dep].task_id,
          StartDate: EndDate + 86400000,
          auth
        })
      }
    }
  } catch (err) {
    console.log(err);
    toast('Something went wrong, check console log', 'error');
  }
}

function getEstimate(start, estimate) {
  if (estimate > 28800000) {
    workday = Math.round(estimate / 28800000) - 1;
    left = estimate % 28800000;
    estimate = (workday * 86400000) + left;
  }
  return (start + estimate);
}

(async () => {
  let correctLocation = await checkBrowser();
  if (!correctLocation) {
    return false;
  }
  addOptions();
  let apikey = await getApiKeyFromStorage();
  var thisID = window.location.href.substring(window.location.href.lastIndexOf("/")).substring(1);
  if (thisID.length != 7) {
    var tasks = document.querySelectorAll('.cu-task-row__container');
    if (tasks.length > 0) {
      toast("Start Task Found.", 'info');
      thisID = tasks[0].closest('cu-task-row').getAttribute('data-id');
    } else {
      Swal.fire({
        title: 'Couldn\'t Identify Start Task<br>Try viewing Start Task<br>And Try Again.',
        icon: 'error',
        toast: true,
        confirmButtonText: 'Learn More',
        timerProgressBar: true,
        position: 'top-end',
        timer: 6000
      }).then((res) => {
        if (res.isConfirmed) {
          window.open("https://www.geeksforgeeks.org", "_blank");
        }
      })
      return false;
    }
  }
  getTask({
    thisID,
    auth: apikey
  });
})()

