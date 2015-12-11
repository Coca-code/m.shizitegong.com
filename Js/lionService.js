/***********************************************************
 * @description : animation for lionService.js
 * @author   : ymf_wx1981@hotmail.com
 * @date     : 2015-12-10
 ***********************************************************/
window.onload = function() {

    var oWapper = document.getElementById('pageContain');
    var w = oWapper.offsetWidth;
    // alert(w);

oWapper.style.marginLeft = (screen.width -w)/2 + 'px';
    



    //禁止窗口的默认滑动
    document.ontouchmove = function(e) {
        e.preventDefault();
    }

    //框架
    var runPage,
        interval,
        autoPlay;

    autoPlay = function(to) {
        clearTimeout(interval);
        interval = setTimeout(function() {
            runPage.go(to);
        }, 5000);

    }



    runPage = new FullPage({
        id: 'pageContain', // id of contain
        slideTime: 1000, // time of slide
        continuous: true, // create an infinite feel with no endpoints
        effect: { // slide effect
            transform: {
                translate: 'Y', // 'X'|'Y'|'XY'|'none'
                scale: [1, 1], // [scalefrom, scaleto]
                rotate: [0, 0] // [rotatefrom, rotateto]
            },
            opacity: [0, 1] // [opacityfrom, opacityto]
        },
        mode: 'wheel,touch', // mode of fullpage
        easing: 'ease', // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1] )
        // callback : function(index, thisPage) {

        //     index = index + 1 > 3 ? 0 : index + 1;
        //     autoPlay(index);
        // }
    });

    // interval = setTimeout(function() {
    //     runPage.go(runPage.thisPage() + 1);
    // }, 5000);





};
