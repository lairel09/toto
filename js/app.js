$(function(){
 var search = $('#search');
 var items = $('#item-list');
 var dataitems;


 search.on('click',function(e){
var selected = $('#selected').val()
var data;
if(selected==="France"){
    var data = "fr"
}

if(selected==="United States"){
    var data = "us"
}

if(selected==="United Kingdom"){
    var data = "gb"
}

if(selected==="Canada"){
    var data = "ca"
}

if(selected==="China"){
    var data = "cn"
}

if(selected==="Russia"){
    var data = "ru"
}

if(selected==="Philippines"){
    var data = "ph"
}

if(selected==="United Arab Emirates"){
    var data = "ae"
}

if(selected==="Australia"){
    var data = "au"
}

if(selected==="Argentina"){
    var data = "ar"
}

if(selected==="South Korea"){
    var data = "kr"
}

if(selected==="Indonesia"){
    var data = "id"
}


         $.ajax({
             method: 'GET',
             url: 'https://newsapi.org/v2/top-headlines?apiKey=d39a7a2aecc547dca38556b77245d992&country=' + data, 
          }).then(function(res){
               var fetch = res.articles
                fetch.forEach(function(element) {
                var resimage;
                 var  dataimage
                console.log(element)
                  dataitems = `<li> <img  src="${element.urlToImage}" alt="" style="height:200px"><h5>${element.title}</h5>
                     <h7>${element.author}</h7>
                    <h6>${element.content}</h6>
                </li>`
              });
             items.append(dataitems);
         }   )
       
 })

})