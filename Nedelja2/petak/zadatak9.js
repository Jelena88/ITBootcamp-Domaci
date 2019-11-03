{
    var m = 6;
    
     for(let n=1; n<= m; n++){
       let str = ' '.repeat(m-n);
       let str2 = '#'. repeat(n -1);
       let str0 = ' '.repeat(m-5);
          
       console.log(str + str2 + str0 + str2 + str);
     }
  }