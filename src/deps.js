// ==Bookmarklet==
// @name Clickup Dependancy Management
// https://github.com/johnkraczek/ClickUp-Bookmarklets
// @author John Kraczek
// @script !loadOnce https://cdn.jsdelivr.net/npm/sweetalert2@11
// @script !loadOnce https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js
// ==/Bookmarklet==

function depsOn(task, deps, element) {
	if (task != deps) {
		var request = new XMLHttpRequest();
		request.open('POST', 'https://api.clickup.com/api/v2/task/' + task + '/dependency');
		request.setRequestHeader('Authorization', window.cu_apikey);
		request.setRequestHeader('Content-Type', 'application/json');
		request.onreadystatechange = function () {
			if (this.readyState === 4 && this.status == 200) {
				toast(`Added ${deps} as a dependancy`, 'success')
				element.innerText = 'SUCCESS';
				element.style.color = 'green';
				setTimeout(() => {
					element.innerText = 'DEPS ON'
					element.style.color = '#82868d'
				}, 1500);
			}
		};
		var body = {
			depends_on: deps
		}
		request.send(JSON.stringify(body));
	}
}

function addDependancyMgmt(taskRow) {
	let ad = taskRow.classList.contains('addedDep');
	if (!ad) {
		taskRow.classList.add('addedDep');
		// add the button for adding the dependancies. 
		var dep_container = document.createElement('div');
		dep_container.setAttribute('class', 'cu-task-row__id cu-task-dep__container');

		var dep = document.createElement('div');
		dep.setAttribute('class', 'cu-task-row__id-body dep_click');
		dep.innerText = 'DEPS ON';
		dep.onclick = function (e) {
			if (window.depsID) {
				var thisID = e.target.closest('cu-task-row').getAttribute('data-id');
				depsOn(window.depsID, thisID, dep);
			}
		}
		dep_container.appendChild(dep);
		dep_container.style.width = "100px";
		var row_main = taskRow.querySelector('.cu-task-row__main');
		row_main.insertAdjacentElement('afterend', dep_container);

		//Creating the Element ID to clickon . 
		var id_container = document.createElement('div');
		id_container.setAttribute('class', 'cu-task-row__id cu-task-id__container');

		var taskID = document.createElement('div');
		taskID.setAttribute('class', 'cu-task-row__id-body ng-star-inserted dep_id');

		var thisID = taskRow.closest('cu-task-row').getAttribute('data-id');


		taskID.innerText = thisID;
		taskID.onclick = function (e) {
			var x, i;
			x = document.querySelectorAll(".dep_id");
			for (i = 0; i < x.length; i++) {
				x[i].style.color = '#82868d';
			}
			e.target.style.color = 'red';
			window.depsID = e.target.closest('cu-task-row').getAttribute('data-id');
		};
		id_container.appendChild(taskID);
		id_container.style.width = "100px";
		row_main.insertAdjacentElement('afterend', id_container);
	}
}

function addCol(listName) {
	let taskHeader = document.getElementById(`${listName}-ID`);
	if (!taskHeader) {
		document.getElementsByClassName('cu-task-list-header__items')[0]
			.insertAdjacentHTML('afterbegin', colHeaderTemplate({ listName }))
	}
}

(async () => {
	let correctLocation = await checkBrowser();
	if (!correctLocation) {
		return false;
	}

	let isTable = document.getElementsByClassName('cu-dashboard-table__body').length;
	if (!isTable){
		// toast("Please enter a list view to update dependancies", 'error');
		// return false;
		Swal.fire({
			title: 'Please enter a list view to update dependancies',
			icon: 'error',
			toast: true,
			confirmButtonText: 'Learn More',
			timerProgressBar: true,
			position: 'top-end',
			timer: 6000,
			width: 600
		  }).then((res) => {
			if (res.isConfirmed) {
			  window.open("https://github.com/johnkraczek/ClickUp-Bookmarklets/blob/master/troubleshooting.md", "_blank");
			}
		  })
		  return false;
	}

	window.cu_apikey = await getApiKeyFromStorage();
	addCol("Target");
	addCol("Task ID");
	addOptions();
	var tasks = document.querySelectorAll('.cu-task-row__container');
	tasks.forEach((t) => { addDependancyMgmt(t) });

})()

