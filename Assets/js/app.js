// Page elements
const options = document.querySelectorAll('.option');
const current = document.querySelectorAll('.noCurrent');
const container = document.querySelector('.details-wrapper');

const src = ['./Assets/img/icon-work.svg', './Assets/img/icon-play.svg', './Assets/img/icon-study.svg','./Assets/img/icon-exercise.svg', './Assets/img/icon-social.svg', './Assets/img/icon-self-care.svg'];




// Storing data.json in variable
const info = 'Assets/js/data.json';

let displayDaily = () => {
    fetch(info)
    .then(response => response.json())
    .then(data => {
        let output = "";
        let num = 0;
        let x = -1;
        for (let item of data) {
            num++;
            x++;
            output += `
            <div class="time-wrapper time-${num}">
                <img class="icon" src="${src[x]}" alt="">
                <div class="time-details">
                    <div class="time-title work">
                        <p class="title">${item.title}</p>
                        <img class="ellipsis" src="Assets/img/icon-ellipsis.svg" alt="Ellipsis icon">
                    </div>
                    <div class="time-content">
                    <p class="time"><span class="noCurrent">${item.timeframes.daily.current}</span>hrs</p>
                    <p class="last-time">Last Week - <span class="noPrevious">${item.timeframes.daily.previous}</span>hrs</p>
                    </div>
                </div>
            </div>
            `;
        }
        container.innerHTML = output;
    })
    .catch(err => {
        console.log(err);
    });
}
 
let displayData = () => {
    fetch(info)
    .then(response => response.json())
    .then(data => {
        let output = "";
        let num = 0;
        let x = -1;
        for (let item of data) {
            num++;
            x++;
            output += `
            <div class="time-wrapper time-${num}">
                <img class="icon" src="${src[x]}" alt="">
                <div class="time-details">
                    <div class="time-title work">
                        <p class="title">${item.title}</p>
                        <img class="ellipsis" src="Assets/img/icon-ellipsis.svg" alt="Ellipsis icon">
                    </div>
                    <div class="time-content">
                    <p class="time"><span class="noCurrent">${item.timeframes.weekly.current}</span>hrs</p>
                    <p class="last-time">Last Week - <span class="noPrevious">${item.timeframes.weekly.previous}</span>hrs</p>
                    </div>
                </div>
            </div>
            `;
        }
        container.innerHTML = output;
    })
    .catch(err => {
        console.log(err);
    });
}

let displayMonthly = () => {
    fetch(info)
    .then(response => response.json())
    .then(data => {
        let output = "";
        let num = 0;
        let x = -1;
        for (let item of data) {
            num++;
            x++;
            output += `
            <div class="time-wrapper time-${num}">
                <img class="icon" src="${src[x]}" alt="">
                <div class="time-details">
                    <div class="time-title work">
                        <p class="title">${item.title}</p>
                        <img class="ellipsis" src="Assets/img/icon-ellipsis.svg" alt="Ellipsis icon">
                    </div>
                    <div class="time-content">
                    <p class="time"><span class="noCurrent">${item.timeframes.monthly.current}</span>hrs</p>
                    <p class="last-time">Last Week - <span class="noPrevious">${item.timeframes.monthly.previous}</span>hrs</p>
                    </div>
                </div>
            </div>
            `;
        }
        container.innerHTML = output;
    })
    .catch(err => {
        console.log(err);
    });
}

window.addEventListener('DOMContentLoaded', displayData);

// Toggle active state
options.forEach(option => {
    option.addEventListener('click', (e) => {
        options.forEach(opts => opts.classList.remove('active'));
        e.target.classList.toggle('active');
        if(e.target.innerText == 'Daily'){
            displayDaily();
        } else if (e.target.innerText == 'Weekly') {
            displayData();
        } else {
            displayMonthly();
        }
    });
});