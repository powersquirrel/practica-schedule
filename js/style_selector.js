$(function() {
    // Constants setup
    var available_styles = ["colorful_palette.css", "pastel_palette.css", "butter_palette.css"];
    var as_pretty_names = ["Colorful Palette", "Pastel", "Butter"];
    var prefered_style;
    // Get HTML head element
    var head = document.getElementsByTagName('HEAD')[0]; 
    // Create new link Element
    var link = document.createElement('link');
    // set the attributes for link element 
    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    
        
    // Load available styles into select config
    var select = document.getElementById('styleselect');
    for(var i = 0; i < as_pretty_names.length; i++){
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = as_pretty_names[i];
        select.appendChild(opt);
    }
    if(getCookie("prefered_style")){
        console.log("Estilo definido:" + getCookie("prefered_style"));
        link.href = 'css/' + getCookie("prefered_style");
        
    }else{
        // console.log("No existe un estilo definido.");
        prefered_style = "pastel_palette.css";
        document.cookie = "prefered_style=" + prefered_style;
        link.href = 'css/' + getCookie("prefered_style");
    }
    
    // Append link element to HTML head
    head.appendChild(link); 
});
// Detect cookie existence
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // console.log(decodeURI(dc.substring(begin + prefix.length, end)));
    return decodeURI(dc.substring(begin + prefix.length, end));
} 
// Save config
function saveConfig(){
    var available_styles = ["colorful_palette.css", "pastel_palette.css", "butter_palette.css"];
    var select = document.getElementById('styleselect');
    var value = select.options[select.selectedIndex].value;
    console.log(available_styles[value]); 
    // Setting up cookie
    document.cookie = "prefered_style=" + available_styles[value];
    location.reload();
}