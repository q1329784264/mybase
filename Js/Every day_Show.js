define(['Get', 'Show_button'], function (Get, Show_button) {

    var box = Get.get(".Every_show")
    var u = Get.get(".Every_show_ul")
    var l = Get.get(".Every_show_l")
    var r = Get.get(".Every_show_r")
    var inner = ''
    for (var i = 1; i <= 10; i++) {
        inner += ` <li><a href="javascript:;"><img src="./images/1 (${i}).jpg" alt=""></a></li>`
    }
    u.innerHTML = inner // 渲染


    function show_2() {
        var dex = 0
        var w = u.children[0].offsetWidth
        function R() {
            dex++
            if (dex >= 7) {
                dex = 7
            }
            u.style.left = -dex * w + "px"
        }

        function L() {
            dex--
            if (dex <= 0) {
                dex = 0
            }
            u.style.left = -dex * w + "px"
        }

        l.onclick = function () {
            L()
        }
        r.onclick = function () {
            R()
        }

        var tim1
        var tim2
        var time

        function tim() {

            var m1 = function () {
                return tim1 = setInterval(function () {
                    time = tim1
                    dex++
                    if (dex >= 7) {
                        clearInterval(tim().m1)
                        dex = 7
                        m2()
                    }
                    u.style.left = -dex * w + "px"
                }, 6000)
            }
            var m2 = function () {
                return tim2 = setInterval(function () {
                    time = tim2
                    dex--
                    if (dex <= 1) {
                        clearInterval(tim().m2)
                        dex = 0
                        m1()
                    }
                    u.style.left = -dex * w + "px"

                }, 6000)
            }

            return {
                m1: m1,
                m2: m2
            }
        }
        tim().m1()



        Show_button(box, l, r, time, R)

    }


    return show_2
})