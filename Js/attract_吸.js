define(['Get', 'V'], function (Get, V) {


    var scr = Get.get(".scroll")
    function attract() {
        document.onscroll = function () {
            if (document.documentElement.scrollTop > scr.offsetTop + scr.offsetHeight) {
                scr.style.height = "0px"
                setTimeout(function () {
                    scr.id = "sc_fx"
                    scr.style.height = "40px"
                }, 10)
            } else {
                scr.id = ""
                scr.style.height = "40px"
            }
        }

    }

    return attract
})