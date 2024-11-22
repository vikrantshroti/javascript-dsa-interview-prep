const str1 = 'wwwaabbbb';
const str2 = 'kkkkj';
const str3 = 'aab';
const compressString = (str = '') => {
   let res = '';
   let count = 1;
   for(let i = 0; i < str.length; i++){
      let cur = str[i];
      let next = str[i + 1];
      if(cur === next){
         count++;
      }else{
         res += cur + String(count);
         count = 1;
      };
   }
   return res.length < str.length ? res : str;
};
console.log(compressString(str1));
console.log(compressString(str2));
console.log(compressString(str3));