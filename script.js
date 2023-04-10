let listVideo =  document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');

let title = document.querySelector('.main-video .title');


listVideo.forEach(video => {
    video.onclick = () =>{
    listVideo.forEach(vid => vid.classList.remove('active'))      
    video.classList.add('active');
    if(video.classList.contains('active')){
        let SRC = video.children[0].getAttribute('src');
        mainVideo.src = SRC ;
        console.log(mainVideo);

        let text = video.children[1].innerHTML;
        title.innerHTML = text ;
    };
    };
});


/* 

git remote add origin https://github.com/omkeshborse/VideoPlayer.git
git branch -M main
git push -u origin main

*/