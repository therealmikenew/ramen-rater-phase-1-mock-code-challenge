
// - See all ramen images in the `div` with the id of `ramen-menu`. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an an `img` tag inside the `#ramen-menu` div.
const ramenMenu = document.querySelector('#ramen-menu');

fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(ramenData => ramenData.forEach(ramen => renderRamen(ramen)))

function renderRamen(ramen){
    //for each object from ramenData, grabs div element, creates and img tag, updates URL (src) and then appends ramenImg to ramenMenu
    
    const ramenImg = document.createElement('img')

    ramenImg.src = ramen.image;
    ramenMenu.append(ramenImg);

    // - Click on an image from the `#ramen-menu` div and see all the info about that ramen displayed inside the `#ramen-detail` div, as well as the current rating and comment for the ramen displayed in the `#ramen-rating` form.

    ramenImg.addEventListener('click', () => {
        const detailImg = document.querySelector('.detail-image');
        const name = document.querySelector('.name')
        const restaurant = document.querySelector('.restaurant');
    
        detailImg.src = ramen.image;
        name.textContent = ramen.name;
        restaurant.textContent = ramen.restaurant;
    
        const rating = document.querySelector('span')
        rating.textContent = ramen.rating;

        const comment = document.querySelectorAll('p');
        comment[1].textContent = ramen.comment;
    })    
}

// - Create a new ramen after submiting the `new-ramen` form. The new ramen should be added to the`#ramen-menu` div.  The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
    
const newRamen = document.querySelector('input[type=submit]');

newRamen.addEventListener('click', (e) => {
    e.preventDefault()
    const newName = document.querySelector('#new-name');
    const newRest = document.querySelector('#new-restaurant');
    const newImg = document.querySelector('#new-image');
    const newRating = document.querySelector('#new-rating');
    const newComment = document.querySelector('#new-comment');

    const addImg = document.createElement('img');
    addImg.src = newImg.value

    ramenMenu.append(addImg);


    ramenMenu.addEventListener('click', () => {
        const detailImg = document.querySelector('.detail-image');
        const name = document.querySelector('.name')
        const restaurant = document.querySelector('.restaurant');
    
        detailImg.src = newImg.value;
        name.textContent = newName.value;
        restaurant.textContent = newRest.value;
    
        const rating = document.querySelector('span')
        rating.textContent = newRating.value

        const comment = document.querySelectorAll('p');
        //document.querySelector("body > p:nth-child(7)")
        comment[1].textContent = newComment.value;
    })
})




