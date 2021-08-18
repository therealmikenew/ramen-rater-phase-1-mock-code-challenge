// write your code here
fetch(' http://localhost:3000/ramens')
    .then(r => r.json())
    .then(arr => {
        arr.forEach(ramen => {
            renderNewRamen(ramen)
        });
    })


function renderNewRamen(ramen) {
    const img = document.createElement('img')
    img.src = ramen.image
    document.querySelector('#ramen-menu').append(img)

    img.addEventListener('click', e => {
        const ramenDetail = document.querySelector("#ramen-detail")
        const detailImg = ramenDetail.querySelector('.detail-image')
        detailImg.src = ramen.image

        const h2 = ramenDetail.querySelector('h2.name')
        h2.textContent = ramen.name

        const h3 = ramenDetail.querySelector('h3.restaurant')
        h3.textContent = ramen.restaurant

        const rating = document.querySelector("body > p:nth-child(5) > span")
        rating.textContent = ramen.rating

        const comment = document.querySelector("body > p:nth-child(7)")
        comment.textContent = ramen.comment
    })
}
// document.querySelector('#ramen-menu').addEventListener('click', e => {
//     if(e.target.matches('')) {

//     }
// })




const form = document.querySelector("#new-ramen")
form.addEventListener('submit', e => {
    e.preventDefault()
    const name = e.target[0].value
    const restaurant = e.target[1].value
    const image = e.target[2].value
    const rating = e.target[3].value
    const comment = e.target[4].value

    const ramen = { name, restaurant, image, rating, comment }
    console.log(ramen)
    renderNewRamen(ramen)
    e.target.reset()
})


