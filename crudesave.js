let myform=document.getElementById("form")

myform.addEventListener('submit',save)

async function save(event)
{
  event.preventDefault()
  var names=event.target.names.value
  var mail=event.target.mail.value
  var mobile=event.target.mobile.value

var object={
  names,
  mail,
  mobile
}
console.log(object)
try{
  const response =await axios.post("http://localhost:3000/add",object)

    onscreen(response.data)
    console.log(response)


}
catch(err){
    console.log(err)
}
//localStorage.setItem(object.myemail,JSON.stringify(object))
//onscreen(object)
}
window.document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await axios.get("http://localhost:3000/user");
    console.log(response);

    for (const item of response.data) {
      onscreen(item);
    }
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
  }
});


async function onscreen(user)
{

  try{ 
    const childHTML = ` 
    <li id=${ user.id}> 
      Name: ${user.Name}<br> 
      Email: ${ user.Email}<br>
      Mobile :${ user.Mobile}
      <button onclick="remove('${ user.id}')">DELETE</button></form> 
      <button onclick="  remove('${ user.id}');editUserDetails('${ user.id}');">EDIT</button> 
    </li> 
  ` 
  userList.innerHTML += childHTML 
  } catch (err) { 
    console.log(err) 
  }
}

async function remove(userId) { 
  try{ 
   await axios.delete(`http://localhost:3000/delete/${userId}`) 
      // const userLi = document.querySelector(`#${userId}`) 
      if (userId) { 

        userList.remove(userId) 
      } 
      window.location.reload()
  } catch (err) { 
    console.log(err) 
  } 
}  

