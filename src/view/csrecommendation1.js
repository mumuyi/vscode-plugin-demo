
//工具栏
function searchcontainer()
      {
      if(document.getElementById("searchcontainer").style.display=="none"){document.getElementById("searchcontainer").style.display="inline"}
      else{document.getElementById("searchcontainer").style.display="none"}
      }
      

 //右键
      !function(l){var e,s='<svg><symbol id="icon-jiantoushang" viewBox="0 0 1024 1024"><path d="M910.222222 796.444444c-17.066667 0-34.133333-5.688889-45.511111-17.066666L551.822222 409.6c-11.377778-5.688889-17.066667-11.377778-34.133333-11.377778-5.688889 0-22.755556 5.688889-28.444445 11.377778l-329.955555 364.088889c-22.755556 22.755556-56.888889 22.755556-79.644445 5.688889-22.755556-22.755556-22.755556-56.888889-5.688888-79.644445l329.955555-364.088889c28.444444-34.133333 73.955556-51.2 119.466667-51.2s85.333333 22.755556 119.466666 56.888889l312.888889 364.088889c22.755556 22.755556 17.066667 56.888889-5.688889 79.644445-11.377778 5.688889-28.444444 11.377778-39.822222 11.377777z"  ></path></symbol><symbol id="icon-jiantouxia" viewBox="0 0 1024 1024"><path d="M517.688889 796.444444c-45.511111 0-85.333333-17.066667-119.466667-51.2L73.955556 381.155556c-22.755556-22.755556-17.066667-56.888889 5.688888-79.644445 22.755556-22.755556 56.888889-17.066667 79.644445 5.688889l329.955555 364.088889c5.688889 5.688889 17.066667 11.377778 28.444445 11.377778s22.755556-5.688889 34.133333-17.066667l312.888889-364.088889c22.755556-22.755556 56.888889-28.444444 79.644445-5.688889 22.755556 22.755556 28.444444 56.888889 5.688888 79.644445L637.155556 739.555556c-28.444444 39.822222-68.266667 56.888889-119.466667 56.888888 5.688889 0 0 0 0 0z"  ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M474.453333 884.053333c-225.28 0-409.6-184.32-409.6-409.6s184.32-409.6 409.6-409.6 409.6 184.32 409.6 409.6-184.32 409.6-409.6 409.6z m0-68.266666c187.733333 0 341.333333-153.6 341.333334-341.333334s-153.6-341.333333-341.333334-341.333333-341.333333 153.6-341.333333 341.333333 153.6 341.333333 341.333333 341.333334z m252.586667 54.613333c-13.653333-13.653333-10.24-37.546667 3.413333-47.786667s37.546667-10.24 47.786667 3.413334l64.853333 78.506666c13.653333 13.653333 10.24 37.546667-3.413333 47.786667s-37.546667 10.24-47.786667-3.413333l-64.853333-78.506667z"  ></path></symbol></svg>',t=(e=document.getElementsByTagName("script"))[e.length-1].getAttribute("data-injectcss");if(t&&!l.__iconfont__svg__cssinject__){l.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}!function(e){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(e,0);else{var t=function(){document.removeEventListener("DOMContentLoaded",t,!1),e()};document.addEventListener("DOMContentLoaded",t,!1)}else document.attachEvent&&(n=e,o=l.document,i=!1,c=function(){i||(i=!0,n())},(s=function(){try{o.documentElement.doScroll("left")}catch(e){return void setTimeout(s,50)}c()})(),o.onreadystatechange=function(){"complete"==o.readyState&&(o.onreadystatechange=null,c())});var n,o,i,c,s}(function(){var e,t,n,o,i,c;(e=document.createElement("div")).innerHTML=s,s=null,(t=e.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",n=t,(o=document.body).firstChild?(i=n,(c=o.firstChild).parentNode.insertBefore(i,c)):o.appendChild(n))})}(window);

//分页table

$(document).ready( function() {
      var total = Math.ceil($("ul li").length / 3);
      var current = 1;
      $("ul li:gt(2)").hide();
      $("#btnPrev").attr("disabled", "disabled").click( function() {
          $("#btnNext").removeAttr("disabled");
          current -= 1;
          $("ul li").show();
          var indexStart = (current - 1) * 3;
          var indexEnd = indexStart + 2;
          $("li:lt(" + indexStart + "), li:gt(" + indexEnd + ")", $("ul")).hide();
          if (current == 1) $(this).attr("disabled", "disabled");
      });
      $("#btnNext").click( function() {
          $("#btnPrev").removeAttr("disabled");
          current += 1;
          $("ul li").show();
          var indexStart = (current - 1) * 3;
          var indexEnd = current * 3 - 1 > $("ul li").length - 1 ? $("ul li").length - 1 : current * 3 - 1;
          $("li:lt(" + indexStart + "), li:gt(" + indexEnd +")", $("ul")).hide();
          if (current == total) $(this).attr("disabled", "disabled");
      });
  });
 
  
//搜索栏

function search()
{
    var context=document.getElementById("context").value;;
    if(context!=undefined)
    {
        $.ajax({
            type: 'POST',
            url: "localhost/test.php",//url
            contentType: "application/json",
            data: JSON.stringify({qustion:context}),//JSON.stringify()
            dataType: "jsonp",//期待返回的数据类型
            success: function(data){
                document.getElementsByClassName('block')[0].innerHTML("right!");
            },
            error:function(data){
                alert("error!!!"); 
            }
          });

    }
    else{
        alert("wrong");
    }
    
    const callbacks = {}; // 存放所有的回调函数
    /**
     * 调用vscode原生api
     * @param data 可以是类似 {cmd: 'xxx', param1: 'xxx'}，也可以直接是 cmd 字符串
     * @param cb 可选的回调函数
     */
    function callVscode(data, cb) {
        if (typeof data === 'string') {
            data = { cmd: data };
        }
        if (cb) {
            // 时间戳加上5位随机数
            const cbid = Date.now() + '' + Math.round(Math.random() * 100000);
            // 将回调函数分配一个随机cbid然后存起来，后续需要执行的时候再捞起来
            callbacks[cbid] = cb;
            data.cbid = cbid;
        }
        vscode.postMessage(data);
    }
    window.addEventListener('message', event => {
        const message = event.data;
        switch (message.cmd) {
            // 来自vscode的回调
            case 'vscodeCallback':
                console.log(message.data);
                (callbacks[message.cbid] || function () { })(message.data);
                delete callbacks[message.cbid]; // 执行完回调删除
                break;
            default: break;
        }
    });
}