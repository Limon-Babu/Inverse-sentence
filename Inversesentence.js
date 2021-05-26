function reversesentence(text){
	var reversetext=" ";
	var words=text.split(" ");
	for(var i=words.length-1;i>=0;i--){
		var word=words[i];
		reversetext=reversetext+" "+word;
	}
	return reversetext;
}