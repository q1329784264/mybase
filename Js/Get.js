define(function () {


    var get = function (name, Dad) {
        var dad = Dad || document
        return typeof name === "string" ? dad.querySelector(name) : name
    }

    var gets = function (name, Dad) {
        var dad = Dad || document
        return typeof name === "string" ? Array.from(dad.querySelectorAll(name)) : name
    }

    return {
        get: get,
        gets: gets
    }
})