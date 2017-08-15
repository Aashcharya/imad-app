var button= document.getElementById('counter');
button.onclick=function ()
{
    // create request
    var req = new XMLHttpRequest();
    //Response
    req.onreadystatechange = function()
    {
        if(request.readystate === XMLHttpRequest.DONE)
        //Action
        {
          if(request.status === 200)
          {
             var counter = req.responseText;
               var span=document.getElementById('count');
    span.innerHTML= counter.toString();
          }
        }
    };
  //make request
  request.open('GET','http://foresight.artista.imad.hasura.io/counter',true);
  request.send(null);
};