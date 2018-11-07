
async function getData () {
    let response = await fetch('https://api.keyvalue.xyz/aa6b42ba/isaiahkahler', {
        method: "GET"
    });
    let json = await response.json();
    return json;
}

let submitted = false;

async function postData(data) {
    if(!submitted){
        fetch('https://api.keyvalue.xyz/aa6b42ba/isaiahkahler', {
            method: "POST",
            body: JSON.stringify(data)
        })
    }
}

let list = document.getElementById('namelist');
function placeNames() {
    getData().then(response => {
        list.innerHTML = '';
        let names = response.map(item => {
            let li = document.createElement('li')
            let p = document.createElement('p');
            p.innerHTML = item
            li.appendChild(p);
            list.appendChild(li);
        })
    })
}

placeNames();

let form = document.getElementById('form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let names = await getData();
    names.push(event.srcElement[0].value)
    await postData(names);
    setTimeout(() => {submitted = true}, 50);
    setTimeout(() => placeNames(), 500);
    form.style.display = 'none';
    document.getElementById('label').style.display = 'none';
    document.getElementById('message').style.display = 'block';
})
