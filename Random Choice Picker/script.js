const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus(); // automatically focuses the cursor on the text area when opened

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }) 

        randomSelect();
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() 
    !== '').map(tag => tag.trim()); // splits the strings into an array with a comma

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}

function randomSelect() {
    const times = 30; // this will run 30 times since the clearInterval timeout will reac its limit
    const interval = setInterval(() => {
        const randomTag = pickRandomTag() // highlights and unhighlights the tags

        highlightTag(randomTag);

        setTimeout(() => { // unhighlights the tag after 100 millisecond
            unHighlightTag(randomTag);
        }, 100); 
    }, 100); // interval for every 100 milliseconds

    setTimeout(() => {
        clearInterval(interval); // to stop the interval

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100)
    }, times * 100) // 30 times then clearInterval
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight'); // adds to classlist
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight'); // removes from classlist
}   
