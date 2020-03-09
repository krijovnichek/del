// cd UNITE

function unite(A, B)
	{
		var unt = [];
		for( var i = 0; i < A.length; i++){
                if (unt.indexOf(A[i])<0) {
                   unt.push(A[i])
                }
        }
        for (var j = 0; j < B.length; j++)
        {
            if (unt.indexOf(B[j])<0) {
                   unt.push(B[j])
                }
        }
		return ("Результат объединения: "+unt);
	}