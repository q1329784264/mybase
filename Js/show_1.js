define(['Get', 'V', 'Show_button'], function (Get, V, Show_button) {

    function show_1() {
        var big = Get.get(".show_bg")
        var box = Get.get(".show_box")
        var img = Get.get(".show_img") //  图片
        var l = Get.get(".box_l") //  左按钮
        var r = Get.get(".box_r") //  右按钮
        var hr = Get.get(".hr") //  红线
        var imgs = Get.gets(".show_img") //图片组

        // _______________ 动动动 ___________________
        var dex = 0
        imgs[0].style.zIndex = 1

        function show() {
            imgs[0].style.zIndex = 0
            if (dex == 0) {
                Velocity(imgs[1], "fadeOut", 2000); //淡出，消失
                Velocity(imgs[0], "fadeIn", 2000); ////淡入，显示
                V(hr, {
                    left: 295
                }, 200)
            } else {
                Velocity(imgs[0], "fadeOut", 2000); //淡出，当元素存在的时候可以逐渐消失
                Velocity(imgs[1], "fadeIn", 2000); ////淡入，当元素不显示的时候可以逐渐显示
                V(hr, {
                    left: 495
                }, 200)
            }
        }

        function R() {
            dex++
            if (dex > 1) {
                dex = 0
            }
            show()
        }


        l.onclick = function () {
            R()
        }
        r.onclick = function () {
            R()
        }
        var tim = setInterval(function () {
            R()
        }, 6000)

        // _______________ 动动动 ___________________
        // -------移入---------------------------
        Show_button(box, l, r, tim, R)
        // -------移入---------------------------
    }
    return show_1
})