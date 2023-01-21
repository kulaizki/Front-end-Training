const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg'); // querySelectorAll for selecting more than one classes
const animated_bg_texts = document.querySelectorAll('.animated-bg-text'); // this is a nodeList similar to arrays with classes

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://wallpapercave.com/wp/wp6746682.jpg"alt="meepo"/>';
    title.innerHTML = 'Meepo';
    excerpt.innerHTML = 'High complexity hero, needing to control multiple clones but is insanely powerful.';
    profile_img.innerHTML = '<img src="https://i.pinimg.com/736x/62/d5/8d/62d58dcd4a2e8e696bd40ccd7bff01cb.jpg"alt="L"/>';
    name.innerHTML = 'kulaizki';
    date.innerHTML = 'Jan 21, 2023';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg')); // loops through the classList and removes all animation
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}
