//获取info
function getInfo() {
    $.ajax({
        method: 'GET',
        url: 'https://devapi.qweather.com/v7/weather/now?location=101010100&key=f24886bf42d44703944371c4597b1c1a',
        success: function (res) {
            var htmls = template('tpl-info', res);
            $('#info').html(htmls);
        }
    })
}
getInfo();
//获取三天天气
function getWeekWeather() {
    $.ajax({
        method: 'GET',
        url: 'https://devapi.qweather.com/v7/weather/3d?location=101010100&key=f24886bf42d44703944371c4597b1c1a',
        success: function (res) {
            var htmls = template('tpl-wee', res);
            $('#weather').html(htmls);
        }
    })
}
getWeekWeather();
//获取空气质量
function getSituation() {
    $.ajax({
        method: 'GET',
        url: 'https://devapi.qweather.com/v7/warning/now?location=101010100&key=f24886bf42d44703944371c4597b1c1a',
        success: function (res) {
            var htmls = template('tpl-sit', res);
            $('#situation').html(htmls);
        }
    })
}
getSituation();
//获取生活指数
function getCondition() {
    $.ajax({
        method: 'GET',
        url: 'https://devapi.qweather.com/v7/indices/1d?type=0&location=101010100&key=f24886bf42d44703944371c4597b1c1a',
        success: function (res) {
            var htmls = template('tpl-con', res);
            $('#condition').html(htmls);
        }
    })
}
getCondition();
//切换城市


