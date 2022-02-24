"use strict";
let a =[1,2,3,1,4,100,5,6,11,100];
let b =[1,2,3,7,8,11,9,10,5,100];
let c =[];
let d=[];

for(let i=0;i<a.length;i++){
  for(let j=0; j<b.length;j++){
    if(a[i]==b[j]){
      c.push(a[i]);
    }
  }
}
console.log(c);

label1: for (let k =0; k< c.length;k++){
    for(let l =0; l<k; l++){
        if(d[l]==c[k])
            continue label1;
    }
    d.push(c[k]);
}
console.log(d);