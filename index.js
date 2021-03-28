let url = 'https://api.ipify.org/?format=json';

let container = document.querySelector('.cont');

async function fetchIp(url) {
    const response = await fetch(url);
    let ip = await response.json();
    return ip;
}

class DetectById {
    constructor(btn, url, ip) {
        this.btn = document.querySelector('#btn');
        this.ip = '';
        this.ipCheck = '';
    }
   
    print() {
        const p = document.createElement('p');
        this.btn.addEventListener('click', ()=> {
            fetchIp(url).then(dataip => {
                this.ipCheck = `http://ip-api.com/json/${dataip.ip}?fields=continent,country,regionName,city,district&lang=ru`;
                console.log(this.ipCheck);
                fetchIp(this.ipCheck)
                .then(res => {
                    container.innerHTML=''
                    container.innerHTML+=`
                    <p class="p">${res.city}</p>
                    <p class="p">${res.continent}</p>
                    <p class="p">${res.country}</p>
                    <p class="p">${res.regionName}</p>
                `
                })
            })
            
        })
    }
}

let detectById = new DetectById();
detectById.print()