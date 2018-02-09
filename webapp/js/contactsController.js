var contactsData;



console.log('test');

function resetValues(){

	//getElementById('firstName').value="";


	//One way is using names
	var inputElements = document.getElementsByName('inputField');

	for(i=0; i<inputElements.length; i++){
		var input= inputElements[i];
		input.value="";
	}

	//Try capturing the dom elemetns using names, css classes;

}

function getElementById(inputId) {

	return document.getElementById(inputId);
}

