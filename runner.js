var color = "green"; var x,l,b;
function tablecreate()
{
    l = document.getElementById("height").value;
    b = document.getElementById("width").value;
  color = document.getElementById("color").value;
  var sub = document.getElementById("submit");
  sub.style.display="none";
   var content = document.getElementById("grid");
   var table = document.createElement('table');
   table.id="drawingplane";
   table.border = '2';
   var tableBody = document.createElement('tbody');
   table.appendChild(tableBody);
   for(var i=0;i<l/10;i++){
       var tr = document.createElement('tr');
       tableBody.appendChild(tr);
       for(var j=0;j<b/10;j++)
       {
           var td = document.createElement('td');
           td.height="10px";
           td.width ="10px";
           td.style.backgroundColor="white";
           td.onclick = function(){
               console.log("click happened");
               this.style.backgroundColor = color;
           }
          

           
          
           
           tr.appendChild(td);

       }
   }
   content.appendChild(table);
   
   x.addEventListener("mousedown",function(){
    var y = document.getElementById("drawingplane");
    
    for(let m=0;m<l/10;m++)
    {
        for(let n=0;n<b/10;n++)
        {
            color = document.getElementById("color").value;
            y.rows[m].cells[n].onmouseover=function(){
                this.style.backgroundColor=color;
                
            }
        }
    }
   

})
x.addEventListener("drag",function(){
    y = document.getElementById("drawingplane");
    for(let m=0;m<l/10;m++)
    {
        for(let n=0;n<b/10;n++)
        {
            y.rows[m].cells[n].onmouseover=function(){
                
                
            }
        }
    }
    
})  
x.addEventListener("mouseup",function(){
    y = document.getElementById("drawingplane");
    for(let m=0;m<l/10;m++)
    {
        for(let n=0;n<b/10;n++)
        {
            y.rows[m].cells[n].onmouseover=function(){
                
                
            }
        }
    }
    
})  
}

function message()
{
    console.log("successful load");
    x = document.getElementById("body");
}




function cleartable()
{
   var t = document.getElementById("drawingplane");
    console.log("clear called");
   for(let i=0;i<l/10;i++)
    {
        for(let j=0;j<b/10;j++)
        t.rows[i].cells[j].style.backgroundColor="white";
    }
}
