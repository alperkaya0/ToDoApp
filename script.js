var itemIndex = 0;

function AddItem () {
	
	var content = document.getElementById("textinput").value;
	var body = document.getElementsByTagName("body")[0];
	
	document.getElementById("textinput").value = "";
	
	if (content.length < 1) {
		alert("Input can not be empty");
		return;
	}
	
	var item = document.createElement("div");
	item.id = "item_" + itemIndex;
	item.className = "class1";
	
	var itemTitle = document.createElement("h3");
	itemTitle.innerHTML = content;
	
	var itemDelete = document.createElement("button");
	itemDelete.innerHTML = "Delete";
	itemDelete.addEventListener("click", function() { DeleteItem(item); });
	
	item.appendChild(itemTitle);
	item.appendChild(itemDelete);
	body.appendChild(item);
	
	itemIndex++;
	
	console.log("Added " + item.id + " (" + item.childNodes[0].innerHTML + ")");
}

function DeleteItem (item) {
	
	console.log("Deleted " + item.id + " (" + item.childNodes[0].innerHTML + ")");
	item.remove();
}

function DeleteAll () {

	document.querySelectorAll(".class1").forEach(e => {
		
		DeleteItem(e);
	});
}