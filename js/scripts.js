



/*function drawTree(treeHeight) {


	for (var i = 1; i <= treeHeight; i++) {
		var star = '';

		for (var j = i - 1; j < 1; j--) {
			star = ' ' + star; 
			

			for (var j = 1; j < (i + 1); j++) {
			star += '* ';

			}		
		}
		console.log(star);
	}
}

drawTree(5);*/


function drawTree(treeHeight) {


	for (var i = 1; i <= treeHeight; i++) {
		var star = '';

		for (var j = 1; j < (i + 1); j++) {
			star += '*';
			}

		console.log(star);
	}
}

drawTree(1);
drawTree(2);
drawTree(5);

// Bardzo się starałam coś wykombinować z tymi spacjami, ale bezowocnie do tej pory. Postaram się do tego wrócić albo może możemy omówić to w poniedziałek?


