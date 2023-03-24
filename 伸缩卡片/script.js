const pictures = document.querySelectorAll('.picture')

pictures.forEach(picture=>{
    picture.addEventListener('click',() => {
                                    removeActiveClasses()
                                    picture.classList.add('active')
    })
})

function removeActiveClasses(){
    pictures.forEach(picture => {
        picture.classList.remove('active')
    })
}