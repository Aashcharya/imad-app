var button= document.getElementById('counter');
button.onclick=function ()
{
    // create request
    var request = new XMLHttpRequest();
    //Response
    request.onreadystatechange = function()
    {
        if(request.readystate === XMLHttpRequest.DONE)
        //Action
        {
          if(request.status === 200)
          {
             var counter = request.responseText;
               var span=document.getElementById('count');
    span.innerHTML= counter.toString();
          }
        }
    };
  //make request
  request.open('GET','http://foresightartista.imad.hasura-app.io/counter',true);
  request.send(null);
};