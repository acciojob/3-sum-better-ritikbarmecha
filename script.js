function threeSum(arr, sum) {
// write your code here
	let l,r;
	arr.sort((a,b)=>a-b);
     let n=arr.length;
	for(let i=0;i<n-2;i++){
		l=i+1;
		r=n-1;
		while(l<r){
			if(arr[i]+arr[l]+arr[r]==sum){
				document.write(arr[i]+" "+arr[l]+" "+arr[r]);
			}else if(arr[i]+arr[l]+arr[r]<sum){
				l++;
			}else{
				r--;
			}
		}
	}
  
}

module.exports = threeSum;
