//alert("you clicked me")
//dir( document.getElementById("eventClick") );
    //Create the XHR Object
    let xhr = new XMLHttpRequest;
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'https://api.github.com/orgs/HackYourFuture/repos', true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) 
                {
                    //return server response as an object with JSON.parse
                    console.log(JSON.parse(this.responseText));
        }
                }
    //call send
    xhr.send();
    document.getElementById("input").innerHTML=xhr[1];

function myfunction(apistring){
  return apistring; 
}
myfunction('')
const txt1 = document.getElementById("txt1");
const input = document.getElementById('input');
const result = document.getElementById("result");
input.addEventListener("click", function(){
   const value = input.value;
fetch(`https://api.github.com/users/${value}`)
.then(function(res){
   return res.json()})
.then(function(data){
   result.innerHTML = `
       ${data.id}
       ${data.login}
   `
})
})
 


async function getData() 
{
    //await the response of the fetch call
   let response = await fetch('https://api.github.com/users');
    //proceed once the first promise is resolved.
   let data = await response.json()
    //proceed only when the second promise is resolved
    return data;
}
//call getData function
getData()
.then(data =>  data.map(function(value, index){
    document.getElementById("name").innerHTML += "<td><b>" + data[index]['login'] + "</b></td>";
})
);//log the da

// first statement we loaded the json data from api inside the table 
// we used the map function on array
//document.getElementById("gipson")[0]

// document.querySelector("button").addEventListener('click',()=>{
//     console.log("button was clicked");
    
// });

// function getText() { 
//     console.log(123);
// document.getElementById("input").innerHTML=data;
    
// }

/*def "https://api.github.com/repos/HackYourFuture/"(searchTerm):
    course_list = []
    for key, value in COURSES.items():
        if topics.intersection(value):
            course_list.append(key)
    return course_list*/









