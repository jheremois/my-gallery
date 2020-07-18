console.log('darling')

const pop = ()=>{
    setTimeout(() => {
        const publication = document.querySelectorAll('#publication')

        for (i = 0; i < publication.length; i++) {
            publication[i].style.transform = 'scale(1)'
        }

    }, 200)
}

pop()