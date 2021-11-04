let sendmsg = () => {
  var msg = document.getElementById("msg");
  var msgbox = document.getElementById("msgbox")
  var li = document.createElement("li")
  li.setAttribute("id","li")
 if(msg.value){
  var text = document.createTextNode(msg.value)
  var dltbtn = document.createElement("button");
  dltbtn.setAttribute("id","dltb")
  var i = document.createElement("i")
  i.className = "fa fa-trash"
  li.className = "list-group-item col-lg-12"
  dltbtn.appendChild(i)
  dltbtn.className = "btn-danger btn btn-sm float-right delete"
  dltbtn.setAttribute("onclick", "dltitem(this)")

  var editbtn = document.createElement("h1");

  var i1 = document.createElement("i")
  i1.className = "fa fa-edit"
  editbtn.appendChild(i1)
  editbtn.setAttribute("onclick", "edititem(this)")
  editbtn.className = "btn-danger btn btn-sm float-right edit"
  li.appendChild(text)
  li.appendChild(dltbtn)
  li.appendChild(editbtn)
  msgbox.appendChild(li);
 }
 else{
   alert("Please enter a TODO")
 }
  msg.value = ''

}
let Alldeletebtn = () => {
  let msgbox = document.getElementById("msgbox")
  msgbox.innerHTML = '';
}
let = dltitem = e => e.parentNode.remove();

let = edititem = e =>{
 let val = e.parentNode.firstChild.nodeValue;
let editvalue = prompt("update your Todo ", val)

  e.parentNode.firstChild.nodeValue = editvalue

}
