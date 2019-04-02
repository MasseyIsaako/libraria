var books = [];

$(document).ready(function(){
	// localStorage.clear();
	// if (localStorage.getItem("BookSubmit") !== null) {
	// 	var storedItems = JSON.parse(localStorage.getItem("BookSubmit"));
	// 	books.push(storedItems);
	// }
});

$('#SubmitButton').click(function(){
	event.preventDefault();

	var bookTitle = $('#booktitle').val();

	if(bookTitle === 'The Wave'){
		books.push('true');
		localStorage.setItem("BookSubmit", JSON.stringify(books));
	}
	// console.log("test");
	$('#SubmitForm').submit();

});

$('.clear').click(function(){
	localStorage.clear();
	console.log("Clear");
})