window.addEventListener("DOMContentLoaded", function() {
    
    //JSONファイルを読み込んで表示する
    var exportJson = document.getElementById("exportJson");
    var table = document.createElement("table");
    table.innerHTML = "<thead><tr><th>打順</th><th>ポジション</th><th>選手</th></tr></thead>";
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);

    let xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "tigers.json", true);
    xhr1.onreadystatechange = function() {
        if (xhr1.readyState === 4 && xhr1.status === 200) {
            let data = JSON.parse(xhr1.responseText);
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    let tr = document.createElement("tr");
                    tr.innerHTML = "<td>" + data[key]["打順"] + "</td><td>" + data[key]["ポジション"] + "</td><td>" + data[key]["選手"] + "</td>";
                    tbody.appendChild(tr);
                    table.appendChild(tbody);
                    exportJson.appendChild(table);
                }
            }
        }
    }
    xhr1.send();

    //Markdownファイルを読み込んで表示する
    var exportMarkdown = document.getElementById("exportMarkDown");

    let xhr2 = new XMLHttpRequest();
    xhr2.open("GET", "tigers.md", true);
    xhr2.onreadystatechange = function(){
        if(xhr2.readyState === 4 && xhr2.status === 200){
            let data = xhr2.responseText;
            exportMarkdown.innerHTML = marked.parse(data);
        }
    }
    xhr2.send();
});


