define(['V'], function (V) {


    function Show_button(p,l,r,tim,R) {
        p.onmouseenter = function () {
            clearInterval(tim)
            V(l, {
                width: 30
            })
            V(r, {
                width: 30
            }, 500)
            l.style.display = "block"
            r.style.display = "block"
        }
        p.onmouseleave = function () { // 移出
            tim = setInterval(function () {
                R()
            }, 6000)
            V(r, {
                width: 0
            }, 500)
            V(l, {
                width: 0
            })
        }
        l.style.display = "none"
        r.style.display = "none"
    }

    return Show_button
})