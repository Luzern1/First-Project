//XMLHttpRequest的使用(xhr)

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://cloud-music.pl-fe.cn/personalized?limit=10');
// xhr.send();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         // console.log(xhr.responseText);
//         var res = JSON.parse(xhr.responseText);
//         // console.log(res);
//         var htmls = template('tpl-song',res);
//         $('#songlist').html(htmls)
//     }
// }

//获取歌单列表的方法

function getSongList() {
    $.ajax({
        method:'GET',
        url:'http://cloud-music.pl-fe.cn/personalized?limit=10',
        success:function(res) {
            var htmls = template('tpl-song',res);
            $('#songlist').html(htmls);
        }
    })
}
getSongList();

