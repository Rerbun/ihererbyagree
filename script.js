var params = location.search;
var searchParams = new URLSearchParams(params);
var hidden_field = document.getElementById("hidden_field");

if (searchParams.has("text")){
  document.getElementById("agree_value").textContent = hidden_field.textContent = decodeURIComponent(searchParams.get("text"));
}

agree_field = document.getElementById("agree_field");
agree_field.setAttribute("style", "height:"+hidden_field.clientHeight+"px;width:"+hidden_field.clientWidth+"px;");

if (searchParams.has("title")){
  document.getElementById("title").textContent = decodeURIComponent(searchParams.get("title"));
}

if (searchParams.has("comment")){
  document.getElementById("comment").textContent = decodeURIComponent(searchParams.get("comment"));
}

if (searchParams.has("url")){
  var url_string = decodeURIComponent(searchParams.get("url"));
  var url = ((url_string.startsWith("http://") || url_string.startsWith("https://")) ? url_string : "http://"+url_string);
  agree_field.onkeyup = function(){ if (agree_field.textContent == hidden_field.textContent) { window.location.href = url; } }
}
