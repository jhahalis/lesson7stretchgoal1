function changeAll() {
    $(document).ready(function(){
        let header = $("#header");
        header.css({color: "red"});
        let footer = $("#footer");
        footer.css({color: "orange"});
    })
   const xhttp = new XMLHttpRequest ();
   xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           document.getElementById("yoga").innerHTML = this.responseText;
       }
   };
   xhttp.open("GET", "https://pixabay.com/en/yoga-yoga-pose-pose-body-fitness-2150140/", true);
   xhttp.send();
}