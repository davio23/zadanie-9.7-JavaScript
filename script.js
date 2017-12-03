function drawTree(n) {
 
    for (i = 1; i <= n; i++)
    { 
        for (j = i; j < n; j++)
        {
            document.write("");
        }
        for (j = 1; j <= (2*i-1); j++)
        {
            document.write("*");
        }
 
        	document.write("*");

        }

    }
drawTree(prompt("Z ilu pięter ma być choinka? Wpisz liczbę całkowitą"));