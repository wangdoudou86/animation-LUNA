!function(){
    var music = document.getElementById('bgmusic')
    var musicIcon = document.getElementById('musicIcon')
    var iconWrapper = document.getElementById('iconWrapper')
    music.volume = 0.2
    music.loop = true
    musicIcon.onclick = function(){
        if(iconWrapper.className === 'stop'){
           music.play()
           iconWrapper.className = 'play'
           this.classList.add('active')
        }else if(iconWrapper.className === 'play'){
          music.pause()
          iconWrapper.className = 'stop'
          this.classList.remove('active') 
        }
    }
    musicIcon.onmouseover = function(){
      if(iconWrapper.className === 'stop'){
        this.title = '放点音乐来听吧'
      }else if(iconWrapper.className === 'play'){
        this.title = '暂停音乐'
      }
    }
    var duration = 50
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch(speed){
           case 'slow':
            duration = 100
            break;
           case 'normal':
            duration = 50
            break;
           case 'fast':
            duration = 1
            break;
        }
    })
    function writeCode(code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function run(){
            n += 1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight //让它滚动
            if(n < code.length){
                id = setTimeout(run,duration)
            }else{
                fn && fn.call() // fn不为空或者fn不为fasle时，执行fn.call()
            }
        },duration)
    }

    let code = `
    /*
    *我们现在来画美少女战士里的露娜
    *首先勾勒出脸型
    */
    .upperFace{
        width:208px;
        height:188px;
        background:#3f3847;
        border-radius:88px/94px;
        position:absolute;
        top:45px;
        left:50%;
        margin-left:-104px;
    }
    /*
    *其次画鼓鼓的腮帮子
    */
    .belowFace{   
        width:208px;
        height:144px;
        background:#3f3847;
        border-radius:104px/72px;
        position:absolute;
        top:98px;
        left:50%;
        margin-left:-104px;
    }
    /*
    *接着画额头上的小月牙
    */
    .moon{
        width:30px;
        height:30px;
        background:#e8bb54;
        border-radius:50%;
        position:absolute;
        top:15px;
        left:50%;
        margin-left:-15px;   
    }
    .moon::after{
        content:'';
        display:block;
        width:22px;
        height:22px;
        background:#3f3847;
        border-radius:50%;
        position:absolute;
        left:50%;
        top:-2px;
        margin-left:-11px;
    }
    /*
    *然后画猫点睛
    *画眼睛
    */ 
    .eyes{
        width:60px;
        height:75px;
        background:#dddddd;
        position:absolute;
        top:94px;
     }
    .leftEye{
        right:50%;
        margin-right:21px;
        border-radius:33px 33px 30px 25px/40px 38px 40px 30px;
     } 
    .rightEye{
        left:50%;
        margin-left:21px;
        border-radius:33px 33px 25px 30px/38px 40px 30px 40px; 
     }
    /*
    *接着补上亮亮的瞳孔
    */
    .leftMeye{
        width:44px;
        height:58px;
        background:#993331;
        border-radius:50%;
        position:absolute;
        right:1px;
        top:2px;
    }
    .leftMeye::after{
        display:block;
        content:'';
        width:28px;
        height:38px;
        background:#dddddd;
        border-radius:50%;
        position:absolute;
        right:2px;
        top:8px;
    }
    .rightMeye{
        width:44px;
        height:58px;
        background:#993331;
        border-radius:50%;
        position:absolute;
        left:1px;
        top:2px;
    }
    .rightMeye::after{
        display:block;
        content:'';
        width:28px;
        height:38px;
        background:#dddddd;
        border-radius:50%;
        position:absolute;
        left:2px;
        top:8px;
    }
    /*
    *接着瞳孔里的反光点
    */
    .leftSmallEye{
        width:8px;
        height:13px;
        background:#dddddd;
        border-radius:50%;
        position:absolute;
        bottom:1px;
        left:10px;
        transform:rotate(40deg)
    }
    .rightSmallEye{
        width:8px;
        height:13px;
        background:#dddddd;
        border-radius:50%;
        position:absolute;
        bottom:1px;
        right:10px;
        transform:rotate(-40deg)
    }
    /*
    *然后粉粉的小鼻子
    */
    .nose{
        width:10px;
        height:6px;
        background:#de99ae;
        border-radius:0px 0px 8px 8px;
        position:absolute;
        left:50%;
        margin-left:-6px;
        top:172px;
    }
    /*
    *接着围笑的嘴唇
    */
    .mouth{
        width:1px;
        height:6px;
        background:#261f2e;
        position:absolute;
        left:50%;
        margin-left:-1px;
        top:187px;
    }
    .mouth::before{
        content:'';
        display:block;
        width:49px;
        height:41px;
        border-radius:50%;
        border-bottom:1.5px solid #261f2e;
        position:absolute;
        left:-47px;
        top:-23px;
    }
    .mouth::after{
        content:'';
        display:block;
        width:49px;
        height:41px;
        border-radius:50%;
        border-bottom:1.5px solid #261f2e;
        position:absolute;
        right:-47px;
        top:-23px;
    }
    /*
    *然后用来测距的小胡须
    */ 
    .whisker{
        width:80px;
        height:1px;
        background:#261f2e;
        position:absolute;
        top:180px;
    }
    .lWhisker{
        right:50%;
        margin-right:85px;
        transform:rotate(-1deg);
    }
    .rWhisker{
        left:50%;
        margin-left:85px;
        transform:rotate(1deg);
    }
    .lWhisker::before{
        content:'';
        display:block;
        width:80px;
        height:1px;
        background:#261f2e;
        position:absolute;
        top:-15px;
        transform:rotate(10deg);
    }
    .rWhisker::before{
        content:'';
        display:block;
        width:80px;
        height:1px;
        background:#261f2e;
        position:absolute;
        top:-15px;
        transform:rotate(-10deg);
    }
    .lWhisker::after{
        content:'';
        display:block;
        width:80px;
        height:1px;
        background:#261f2e;
        position:absolute;
        top:15px;
        transform:rotate(-10deg);
    }
    .rWhisker::after{
        content:'';
        display:block;
        width:80px;
        height:1px;
        background:#261f2e;
        position:absolute;
        top:15px;
        transform:rotate(10deg);
    } 
    /*
    *接着软软的小耳朵
    */
    .ears{
        width:150px;
        height:120px;
        background:#de99ae;
        position:absolute;
        border-radius:1000px 30px 1000px 30px;
        top:25px;
    }
    .leftEar{
        right:50%;
        margin-right:-19px;
        border-top:5px solid #3f3847;
        border-right:15px solid #3f3847;
        border-bottom:5px solid #3f3847;
        border-left:15px solid #3f3847;
        transform:rotate(-85deg);
        animation: leftear 5s infinite;
    }
    .rightEar{
        left:50%;
        margin-left:-28px;
        border-top:15px solid #3f3847;
        border-right:5px solid #3f3847;
        border-bottom:15px solid #3f3847;
        border-left:5px solid #3f3847;
        transform:rotate(-25deg);
        animation: rightear 5s infinite;
    }
    /*
    *最后让耳朵摇摆起来吧
    */
    @keyframes leftear{
        0%{transform:rotate(-85deg)}
        50%{transform:rotate(-95deg)}
        100%{transform:rotate(-85deg)}
    }
    @keyframes rightear{
        0%{transform:rotate(-25deg)}
        50%{transform:rotate(-15deg)}
        100%{transform:rotate(-25deg)}
    }
    /*
    *好啦！露娜就画出来啦~
    */
    `
    writeCode(code)
}.call()













