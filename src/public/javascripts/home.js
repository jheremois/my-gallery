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
        event.path[3].style.display = 'flex'
        event.path[4].innerHTML = `
            <div class='back'>
                <a href="/">
                    <img src='icons/back.png'>
                </a>
                <a class='delete' href="/delete/${event.path[1].childNodes[3].innerHTML}">
                    Delete
                </a>
            </div>
            
            <div class='bigpo'>
                <div class='card'>
                    <div class='opened'>
                        <h2 class='pitle'>${event.path[1].childNodes[1].innerHTML}</h2>
                        <br>
                    </div>
                    
                    <div class='bigpo'>
                        <img src='${event.path[0].src}' id='inbig'>
                    </div>
                </div>
            </div>
        `

    })

}

const cambiar = ()=>{
    let pdrs = document.getElementById('file-upload').files[0].name;
    document.getElementById('info').innerHTML = pdrs;
}
