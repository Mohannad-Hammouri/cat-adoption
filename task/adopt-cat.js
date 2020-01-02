
	function addRow(form) {
		
		var name = document.getElementById('name').value;
		var breed = document.getElementById('breed').value;
		var age = document.getElementById('age').value;
		var color = document.getElementById('color').value;

		console.log(age);
		if (name == "" || breed == "" || age == "" || color == "") {
			alert("Please fill the fields and make sure \"Age\" field should contain numbers");
		}
		else{
		    var table = document.getElementById("table");
		    
		    var row = document.createElement("tr");
		    
		    var td1 = document.createElement("td");
		    var td2 = document.createElement("td");
		    var td3 = document.createElement("td");  
		    var td4 = document.createElement("td");  

		    td1.innerHTML = document.getElementById("name").value;
		    td2.innerHTML = document.getElementById("breed").value;
		    td3.innerHTML = document.getElementById("age").value;
		    td4.innerHTML = document.getElementById("color").value;

		    row.appendChild(td1);
		    row.appendChild(td2);
		    row.appendChild(td3);
		    row.appendChild(td4);

		    table.children[0].appendChild(row);
		}
	};