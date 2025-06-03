const reader = new XMLHttpRequest();
        reader.open('GET', 'text.txt', true);
        reader.onreadystatechange = function() {
            if(reader.readyState === 4 && reader.status === 200) {
                document.getElementById('fileDisplayArea').innerHTML = reader.responseText;
            }
        };
        reader.send();