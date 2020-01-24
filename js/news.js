
var  newsPlugin = (function(){
    var data = undefined;
    function init(){
        console.log("plugin module is init ");
        data = DataManager.sportsData;
        console.log(DataManager.sportsData);
        appendBigNews();
    }
    function appendBigNews(){
        var html = createTheBigNews();
        $('.bigNews ul').append(html);
    }
    function createTheBigNews(){
        var html = '';
        var newsCards = data.channel.item;
        for(var i= 0 ; i< 5 ; i++){
            html += '<li class="clearfix">'+ 
                        `<a href="${newsCards[i].link}">
                            <figure>
                                <img src="${newsCards[i].img}" />
                            </figure>
                            <div class="details">
                                <span class="secname">India</span>
                                <h2>${newsCards[i].title}</h2>
                                <p>${newsCards[i].description}</p>
                                <span class="authors"></span>
                                <span class="ag">TNN</span>
                                <span class="strlastupd">${newsCards[i].pubDate}</span>
                            </div>
                         </a>`+
                    '</li>'
        }
        return html;
    }

    return {
        init : init
    }
})();