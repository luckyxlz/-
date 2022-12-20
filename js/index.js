window.onload = function(){
    var play = document.getElementById("play")
    const music = document.getElementById("music")


    
    var end = document.getElementById("end")
    var start = document.getElementById("start")
    var duration = parseInt(music.duration)
    var front = Math.floor(duration/60)
    var back = duration%60
    var endTime = front +":"+back
    end.innerText = endTime
    

    var paly_bar = document.getElementById("play_bar")

    // 划动进度条，设置绑定事件
    paly_bar.oninput = function(){
        music.currentTime = paly_bar.value
    }

    paly_bar.setAttribute("min",0)
    paly_bar.setAttribute("max",duration)
    
    music.ontimeupdate = function(){
        var currentTime = music.currentTime
        // 更新进度条
        paly_bar.setAttribute('value', currentTime)
        // 更新开始时间
        var front = Math.floor((currentTime/60))
        var back = Math.floor(currentTime%60)
        if (back < 10){
            back = "0"+back
        }
        var startTime = front + ":" + back
        start.innerText = startTime

    }

    // 播放按钮点击时间绑定
    play.onclick = function(){
        // 当点击的时候且类为播放时，切换按钮
        classValue = play.getAttribute('class')
        playImg = document.getElementById("play_img")
        if (classValue == 'play'){
            playImg['src'] = "./images/icon/zanting-2.png"
            play.setAttribute('class', 'pause')
            music.play();
        }else{
            playImg['src'] = "./images/icon/bofang.png"
            play.setAttribute('class', 'play')
            music.pause();
        }
    }


    //绑定操作图片经过特效
    updateImg("search","./images/icon/sousuo-3.png","./images/icon/sousuo.png")
    updateImg("music_stock","./images/icon/cangkuguanli.png","./images/icon/cangkuguanli-2.png")
    // updateImg("create_list","./images/icon/liebiao-4.png","./images/icon/liebiao-2.png")
    updateImg("love_music_list","./images/icon/aixin-3.png","./images/icon/aixin.png")
    function updateImg(idName, preSrc, postSrc){
        var img = document.getElementById(idName).firstElementChild;
        img.onmouseover = function(){
            img.setAttribute('src', postSrc)
         }
         img.onmouseleave = function(){
            img.setAttribute('src', preSrc)
         }
    }


   // 展示歌曲列表 
    var show_list = document.getElementById("show_list");
    var list = document.getElementById("list")

    show_list.onclick = function(){
        list.style.visibility = "visible"
    }

    list.onmouseleave = function(){
        list.style.visibility = "hidden";
    }


}

