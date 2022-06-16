// xóa các phần tử bị lặp của mảng

const myArr = ["a","b","c","d","b","c",12,32,12,12];
function noDuplicates()
{
let  yourArr = [];
 yourArr = myArr.filter((element,index)=>
 {
      return  yourArr.includes(element) ? '' : yourArr.push(element);

 })
 console.log(yourArr);
}
noDuplicates();