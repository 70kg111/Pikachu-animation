!function () {
    
    let code = `
/* 画一个皮卡丘吧 */

/* 先设置一些样式 */
.preview{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fee433;
    border: 1px solid black;
}
.wrapper{
    width: 100%;
    height: 165px;
    position: relative;
}
.wrapper :not(:last-child){
    z-index: 1;
}

/* 画一个鼻子 */
.nose{
    width: 0px;
    height: 0px;
    border-style: solid;
    border-color: black transparent transparent transparent;
    border-radius: 50%;
    border-width: 12px;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
}

/* 画眼睛 */
.eye{
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
}
.eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    margin: -1px 0 0 5px;
    border: 2px solid #000000;
}

/* 左边的眼睛放过去 */
.eye.left{
    right: 50%;
    margin-right: 80px;
}

/* 右边的眼睛放过去 */
.eye.right{
    left: 50%;
    margin-left: 80px;
}

/* 画脸上的腮红 */
.face{
    width: 68px;
    height: 68px;
    background: #fc0d1c;
    position: absolute;
    border-radius: 50%;
    border:2px solid #000000;
    top: 85px;
}

/* 左边的腮红放过去 */
.face.left{
    right: 50%;
    margin-right: 106px;
}

/* 右边的腮红放过去 */
.face.right{
    left: 50%;
    margin-left: 106px;
}

/* 嘴巴的上半部分 */
.upperLip{
    width: 64px;
    height: 20px;
    border: 3px solid black;
    position: absolute;
    top: 65px;
    background: #fee433;
}
.upperLip.left{
    right: 50%;
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 40px 25px;
    transform: rotate(-20deg);

}
.upperLip.right{
    left: 50%;
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 40px 25px;
    transform: rotate(20deg);
}

/* 嘴巴的下半部分 */
.lowerLip-wrapper{
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -100px;
    height: 91px;
    width: 200px;
    overflow: hidden;
}
.lowerLip{
    width: 200px;
    height: 1500px;
    background: #990515;
    border-radius: 100px/600px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

/* 小舌头 */
.lowerLip::after{
    content: '';
    position: absolute;
    bottom: -30px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fc4a62;
    left: 50%;
    margin-left: -50px;
}



/* 话已讲完，谁赞成，谁反对 */
`

    writeCode('', code,() => {
        playPika()
    })

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')

        let n = 0;
        let clock = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            container.innerHTML = Prism.highlight(container.innerHTML, Prism.languages.css)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight;
            if (n >= code.length) {
                window.clearInterval(clock)
                fn && fn.call()
            }
        }, 50)
    }

    function playPika(){
        var pika = document.getElementById("pika");
        pika.innerHTML=
        '<embed id="pika" src="./music/pikachu.mp3" type="application/x-mplayer2" hidden="true" autostart="true" loop="1">'

        console.log(1);
    }

}.call()