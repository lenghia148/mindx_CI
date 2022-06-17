let personName = document.querySelector('#name');
let phoneNumber = document.querySelector('#phone-number');
let addButton = document.querySelector('#add');
let search = document.querySelector('#search');

let searchBnt = document.querySelector('#search-bnt');
let deleteBnt = document.querySelector('#delete');

let list = document.querySelector('#list-persons');

let persons = [];



addButton.addEventListener('click',()=>
{
    let person = {}
    person.name = personName.value;
    person.phone = phoneNumber.value;
    persons.push(person);
    let personHTML = persons.map((value)=>
        {
            return `<li>${value.name} ${value.phone}</li>`
        })
 
    
    list.innerHTML = personHTML.sort().join("");
    
})

searchBnt.addEventListener('click',()=>
    {   
         let person = persons.filter((element)=>
         {
             if (search.value===element.name || search.value === element.phone)
             {
                 return element;
             }
         })
         let personHTML = person.map((value)=>
         {
             return `<li>${value.name} ${value.phone}</li>`
         })
         list.innerHTML = personHTML.sort().join("");
    })


    deleteBnt.addEventListener('click',()=>
    {   

        let person=[];
        let personNameSort=[]
        for(let i =0; i<persons.length;i++)

            {
                for(let j=i+1; j<persons.length;j++)
                   {
                        if (persons[i].phone === persons[j].phone)
                            {
                                personNameSort.push(persons[i].name)
                                personNameSort.push(persons[j].name)
                                personNameSort.sort();
                                persons.splice(j,1)
                            }
                            let newPerson = {
                                name : personNameSort[0],
                                phone: persons[i].phone
                            }
                            person.push(newPerson)
                            persons.splice(i,1)
                   }
            }

        
            let personHTML = persons.map((value)=>
            {
                return `<li>${value.name} ${value.phone}</li>`
            })
     
        
        list.innerHTML = personHTML.sort().join("");
    })