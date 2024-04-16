function stringChop(str, size) {
  // your code here
	let arr=[];
  let s="";
  let n=size;
  for(let i=0;i<str.length;i++){
      s="";
      n=size;
      while(n!=0 && i<str.length){
          s=s+str[i];
          i++;
          n--;
      }
      i--;
      arr.push(s);
  }
  return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
