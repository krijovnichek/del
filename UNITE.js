// UNITE

function unite(A, B)
	{
		var unt = [];
		// console.log(A);
		// console.log(B);
		for( var i = 0; i < A.length; i++){
			
			if (B.indexOf(A[i] != -1)) {
                if (unt.indexOf(A[i])) {
                   unt.push(A[i])
                }
            }
            if (A.indexOf(B[i] != -1)) {
                if (unt.indexOf(B[i])) {
                   unt.push(B[i])
                }
            } 
            
		}
        console.log(unt);
		return ("Результат объединения: "+unt);
	}