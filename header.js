if(window==top) {
    document.addEventListener("DOMContentLoaded",
        function(e) {
            e.currentTarget.removeEventListener(e.type,arguments.callee);
            var ghAccount = window.location.href.split(".github.io/")[0].split("//")[1];
            var reponame = window.location.href.split(ghAccount+".github.io/")[1].split("/")[0];
            var loc = window.location.href.split(reponame+"/")[1].split("/")[0];
            var table = document.createElement("table");
            table.id = "header";
            table.width="100%";
            table.style.maxWidth = "100%";
            table.border = 0;
            var tr = document.createElement("tr");
            table.appendChild(tr);
            //  Left cell
            var td = document.createElement("td");
            tr.appendChild(td);
            td.width = "33%";
            td.style.verticalAlign = "top";
            td.style.textAlign = "left";
            var backIcon = "data:image/png;base64,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";
            
            td.innerHTML = 
                (reponame==""?'':'<a href=".."><img width=25 height=25 src='+backIcon+' title="http://'+ghAccount+'.github.io/'+reponame+'"/></a>')+
                (reponame==""?'<a href="https://github.com/'+ghAccount+'/'+ghAccount+'.github.io">':loc==""?'<a href="https://github.com/'+ghAccount+'/'+reponame+'">':'<a href="https://github.com/'+ghAccount+'/'+reponame+'/tree/gh-pages/'+loc+'">')+
                '<img title="Source Code" width=25 height=25 src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"/>'+
                '</a>';
                

            //  Mid cell
            var td = document.createElement("td");
            tr.appendChild(td);
            td.width = "33%";
            td.align = "center";
            td.style.verticalAlign = "top";
            td.style.textAlign = "center";
            td.innerHTML = "<h2>"+document.title+"</h2>";
            //  Right cell
            var td = document.createElement("td");
            tr.appendChild(td);
            td.width = "33%";
            td.align = "right";
            td.style.textAlign = "right";
            td.style.verticalAlign = "top";
            td.innerHTML = '<a class="twitter-share-button" href="https://twitter.com/share">Tweet</a>&nbsp;'+
                '<iframe style="border:0px; height:20px; width:120px;" src="http://www.reddit.com/static/button/button1.html?url='+top.location.href+'"><iframe>';
                

            document.body.insertBefore(table,document.body.firstChild);
            if(window.noheader)
                table.style.display = "none";
        });



}
window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return t;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));
