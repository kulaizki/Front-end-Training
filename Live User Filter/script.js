const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData();

filter.addEventListener('input', (e) => filterData(e.target.value)); // 'e' stand for event, gives us what is typed in

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50');

    const { results } = await res.json();
    // console.log(data);  use this to test

    // clear result
    result.innerHTML = '';

    results.forEach(user => { // user is an object
        // console.log(user); for test
        const li = document.createElement('li'); // creates an li

        listItems.push(li); // pushes each of the li

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li);
    });
}

function filterData(searchTerm) {
    // console.log(searchTerm); captures what we type
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) { // lowercase to still detect uppercase
            item.classList.remove('hide'); // shows the object if its included
        } else {
            item.classList.add('hide'); // hides the object if its not included
        }
    })
}
