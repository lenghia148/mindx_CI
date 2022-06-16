// viết một function đảo ngược 1 string bất kì 



function reverse()
{   let str = prompt("input string")
    let myArray = str.split("");
    let reverseArray = [];
    for(let i = myArray.length-1; i >=0;i--)
            {
                reverseArray.push(myArray[i])
            }
    let reverseStr = reverseArray.join("")
    console.log(reverseStr)
}

reverse()