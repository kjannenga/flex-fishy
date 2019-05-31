var form = document.getElementById('moveFish')

var next = document.getElementById("pageName").className
console.log(next)


form.addEventListener('submit', function (e) {
     e.preventDefault();

     document.getElementById("fishy").className = "d-flex "
     var directions = document.getElementById("directions").value

     document.getElementById('fishy').className += directions

     if (document.getElementById('fishy').className === document.getElementById('fishbowl').className){
         var d = document.getElementById('finished')
         var p = document.createElement('p')
         var a = document.createElement('a')
         var next = document.getElementById("pageName").className
         console.log(next)

         
         a.setAttribute("class", "btn btn-primary")
         a.href = next
         a.innerHTML = "Next Problem!"

         p.innerHTML = "Good job! Fishy is back in his bowl."

         d.append(p)
         d.append(a)

     }

})