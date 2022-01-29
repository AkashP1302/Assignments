var size=prompt("Enter size of array");
var arr=[];
  for(var i=0;i<size;i++)
    {	  
      arr[i]=prompt("Enter the array:");
	}
	// console.log(arr);
      var max;
	    for(var i=0;i<arr.length;i++)
		{
            for(var j= i+1;j<arr.length-1;j++){
                
                if(arr[i]>arr[j]){
                    alert("hii")
                    max=arr[i];
                }
            }
			// if(arr[i]>max)
			// {
            //     max=arr[i];
            // }
		}
		 alert("The maximum is:"+" "+max);
		//  console.log(max);


        //  5
        //  4 5 22 1 6