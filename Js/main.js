require.config({
    baseUrl: "./Js",
    paths: {
        Get: './Get',
        show_1: './show_1',
        V:'./velocity.min',
        att:'./attract_吸',
        Show_button:'./Show_button',
        show_2:'./Every day_Show'
    }
})
require(['show_1','att','show_2'], function (show_1,att,show_2) {
    show_1()
    att()
    show_2()
})
