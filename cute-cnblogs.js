function miluframe(b) {
    var d = {
        Youself: "https://www.cnblogs.com/busyboxs/",
        Friends_of_the: "p/11633791.html",
        custom: [{
            name: "相册",
            link: "https://www.cnblogs.com/elkyo/gallery.html",
            istarget: false
        },
        {
            name: "技能树",
            link: "https://miluluyo.github.io/",
            istarget: false
        },
        {
            name: "留言板",
            link: "https://miluluyo.github.io/p/11578505.html",
            istarget: false
        }],
        resume: {
            "name": "麋鹿鲁哟",
            "link": "https://www.cnblogs.com/miluluyo/",
            "headurl": "https://images.cnblogs.com/cnblogs_com/elkyo/1558759/o_o_my.jpg",
            "introduction": "大道至简，知易行难。"
        },
        unionbox: [{
            "name": "麋鹿鲁哟",
            "introduction": "生活是没有标准答案的。",
            "url": "https://www.cnblogs.com/miluluyo",
            "headurl": "https://images.cnblogs.com/cnblogs_com/elkyo/1558759/o_o_my.jpg"
        },
        {
            "name": "麋鹿鲁哟的技能树",
            "introduction": "大道至简，知易行难。",
            "url": "https://miluluyo.github.io/",
            "headurl": "https://images.cnblogs.com/cnblogs_com/elkyo/1558759/o_o_my.jpg"
        }],
        details: [{
            field: "name",
            literal: "昵称",
        },
        {
            field: "introduction",
            literal: "标语",
        },
        {
            field: "url",
            literal: "链接地址",
        },
        {
            field: "headurl",
            literal: "头像地址",
        }],
        clicktext: new Array("ヾ(◍°∇°◍)ﾉﾞ加油哟~ ——麋鹿鲁哟", "生活是没有标准答案的。  ——麋鹿鲁哟"),
        ThemeVersion: "https://github.com/miluluyo/cute-cnblogs/",
        githuburl: "https://github.com/miluluyo",
    };
    $.extend(d, b);
    allpage(d);
    var a = window.location.href;
    if (a.indexOf(d.Friends_of_the) != -1) {
        Friends_of_the(d)
    }
}
function allpage(j) {
    var h = $("#blogTitle").html();
    $("#blogTitle").html("<div class='vertical'>" + h + "</div>");
    var e = "";
    for (var d = 0; d < j.custom.length; d++) {
        if (j.custom[d].istarget == true) {
            e = e + '<li><a href="' + j.custom[d].link + '" target="_black">' + j.custom[d].name + "</a></li>"
        } else {
            e = e + '<li><a href="' + j.custom[d].link + '">' + j.custom[d].name + "</a></li>"
        }
    }
    if (j.Youself + j.Friends_of_the) {
        e = e + '<li><a href="' + j.Youself + j.Friends_of_the + '">友链</a></li>'
    }
    $("#navList").append(e);
    $("#mobile-style").remove();
    $("#footer").before('<div id="jsi-flying-fish-container" class="container"></div>');
    $("#navigator").after('<div class="poem-wrap"><div class="poem-border poem-left"></div><div class="poem-border poem-right"></div><h1>念两句诗</h1><div id="poem_sentence"></div><div id="poem_info"></div></div>');
    jinrishici.load(function(c) {
        var i = document.querySelector("#poem_sentence");
        var k = document.querySelector("#poem_info");
        i.innerHTML = c.data.content;
        k.innerHTML = "【" + c.data.origin.dynasty + "】" + c.data.origin.author + "《" + c.data.origin.title + "》"
    });
    var b = $(".feedbackItem").length;
    for (var d = 0; d < b; d++) {
        var f = $(".feedbackItem").eq(d).find(".feedbackCon").find("span").text();
        $(".feedbackCon").eq(d).prepend('<img class="comment-avatar" src="' + $.trim(f) + '">')
    }
    $("#tbCommentBody").attr("placeholder", "请乖乖填写哦！ ...");
    $("#tbCommentBody").after('<div class="OwO" onclick="load_face(this)"><div class="OwO-logo"><span>OωO<space><space>表情</span></div></div>');
    $("#commentbox_opt").nextAll().remove();
    $("#btn_comment_submit").val("提交评论 (Ctrl + Enter)");
    var a = 0;
    jQuery(document).ready(function(c) {
        c("body").click(function(m) {
            var k = j.clicktext;
            var l = Math.ceil(Math.random() * k.length);
            var o = c("<span></span>").text(k[l]);
            a = (a + 1) % k.length;
            var i = m.pageX,
            n = m.pageY;
            o.css({
                "z-index": 1e + 69,
                "top": n - 20,
                "left": i,
                "position": "absolute",
                "font-weight": "bold",
                "color": "rgb(" + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + ")"
            });
            c("body").append(o);
            o.animate({
                "top": n - 180,
                "opacity": 0
            },
            2000,
            function() {
                o.remove()
            })
        })
    });
    // var g = '<a class="github" href="' + j.githuburl + '" target="_blank"><img width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_darkblue_121621.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"></a>';
    // $("body").append(g);
    $("#poweredby").html('ThemeVersion: <a href="' + j.ThemeVersion + '">cute-cnblogs</a>')
}
function load_face(b) {
    var c = new OwO({
        logo: "OωO表情",
        container: document.getElementsByClassName("OwO")[0],
        target: document.getElementById("tbCommentBody"),
        api: "https://miluluyo.github.io/OwO.json",
        position: "down",
        width: "70%",
        maxHeight: "250px"
    });
    b.classList.add("OwO-open");
    b.onclick = null
}
$(function() {
    $("#main").append('<div class="back-to-top cd-top faa-float animated cd-is-visible" style="top: -999px;"></div>');
    $(window).scroll(function() {
        var a = $(window).scrollTop();
        if (a > 500) {
            $(".back-to-top").css("top", "-200px")
        } else {
            $(".back-to-top").css("top", "-999px")
        }
    });
    $(".back-to-top").click(function() {
        $("body,html").animate({
            scrollTop: 0
        },
        600)
    })
});
function Friends_of_the(j) {
    var a = j;
    var e = '<div id="app"><h6 style="text-align:center;color:#2daebf;">展示本站所有友情站点，排列不分先后，均匀打乱算法随机渲染的喔！</h6><div class="unionbox-box" style="display: flex;flex-wrap: wrap;justify-content: space-between;margin-bottom:1.5rem;margin-top:1.5rem"></div><hr style="position: relative;margin: 1rem 0;border: 2px dashed #b8dcfd;width: calc(100%);height: 0;"><h2 style="text-align:center;">友链信息</h2><h6 style="text-align:left;line-height: 30px;">博客名称：<a href="javascript:void(0)"> ' + a.resume.name + ' </a><br/>博客网址：<a href="javascript:void(0)"> ' + a.resume.link + ' </a><br/>博客头像：<a href="javascript:void(0)"> ' + a.resume.headurl + ' </a><br/>博客介绍：<a href="javascript:void(0)"> ' + a.resume.introduction + ' </a></h6><h2 style="text-align:center;">join us</h2><h6 style="text-align:center;color:#2daebf;">如需友链，请留言，格式如下</h6><table class="table friendstable" style="margin:0 auto;"><tr><th><b>字段</b></th><th><b>字义</b></th></tr></table></div>';
    $(".friendsbox").html(e);
    var h = a.unionbox;
    var d = shuffle(h);
    var f = "";
    for (var b = 0; b < d.length; b++) {
        f = f + '<div class="unionbox"><div class="info"><div class="headimg"><img src="' + d[b].headurl + '" alt=""></div><div class="content"><h3 class="title">' + d[b].name + '</h3><p class="desc">' + d[b].introduction + '</p><a class="btn" target="_black" href="' + d[b].url + '">直达</a></div></div></div>'
    }
    $(".unionbox-box").html(f);
    var g = "";
    for (var b = 0; b < a.details.length; b++) {
        g = g + "<tr><td>" + a.details[b].field + "</td><td>" + a.details[b].literal + "</td></tr>"
    }
    $(".friendstable").append(g)
}
function shuffle(e) {
    var d = e;
    var a = d.length,
    c, b;
    while (a) {
        b = Math.floor(Math.random() * a--);
        c = d[a];
        d[a] = d[b];
        d[b] = c
    }
    return d
};