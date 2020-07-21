const pop = ()=>{
    setTimeout(() => {
        const feed = document.getElementById('sect')

        feed.style.transform = 'scale(1)'
    }, 100)
    
}

pop()


const publication = document.querySelectorAll('#poto')

for(i = 0; i < publication.length; i++){

    publication[i].addEventListener('click',()=> {
        console.log(event.path)
        event.path[3].style.display = 'flex'
        event.path[3].style.justify_content = 'center'
        event.path[4].innerHTML = `
            <div class='back'>
                <a href="/">
                    <img src='icons/back.png'>
                </a>
                <h3>${event.path[1].childNodes[1].innerHTML}</h3>
            </div>

            <div class='bigpo'>
                <img src='${event.path[0].src}' id='inbig'>
            </div>
        `

    })

}

function cambiar(){
    var pdrs = document.getElementById('file-upload').files[0].name;
    document.getElementById('info').innerHTML = pdrs;
}