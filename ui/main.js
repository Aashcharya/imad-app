var button= document.getElementById('counter');
button.onclick=function ()
{
    // create request
    var req = new XMLHttpRequest();
    //Response
    req.onreadystatechange = function()
    {
        if(req.readystate === XMLHttpRequest.DONE)
        //Action
        {
          if(req.status === 200)
          {
             var counter = req.responseText;
               var span=document.getElementById('count');
    span.innerHTML= counter.toString();
          }
        }
    };
  //make request
  req.open('GET','http://foresightartista.imad.hasura-app.io/counter',true);
  req.send(null);
};