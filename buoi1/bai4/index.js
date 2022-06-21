let personName = document.querySelector('#name');
let phoneNumber = document.querySelector('#phone-number');
let addButton = document.querySelector('#add');
let search = document.querySelector('#search');

let searchBnt = document.querySelector('#search-bnt');
let deleteBnt = document.querySelector('#delete');

let list = document.querySelector('#list-persons');
let names = document.querySelectorAll('.listname').innerText

let persons = [];



addButton.addEventListener('click',()=>
{   
    
    let person = {}
    person.name = personName.value;
    person.phone = phoneNumber.value;
    persons.push(person);
    let personHTML = persons.map((value)=>
        {
            return `<li ><span class="listname">${value.name}</span> <span class="list-phone">${value.phone}</span></li>`
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
             return `<li><span class="list-name">${value.name}</span> <span class="list-phone">${value.phone}</span></li>`
         })
         list.innerHTML = personHTML.sort().join("");
    })

    
    deleteBnt.addEventListener('click',()=>
<<<<<<< HEAD
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
                                var newPerson = {
                                    name : personNameSort[0],
                                    phone: persons[i].phone
                                }
                                persons.splice(i,1)
                            }
                           
                            persons.push(newPerson)
                           
                   }
            }

=======
    {     
>>>>>>> 13aa6342c57bbf92ff6c20ba4cc7888b6119505a
        
        persons.sort((a, b) => (a.phone > b.phone) ? 1 : (a.phone === b.phone) ? ((a.name > b.name) ? -1 : 1) : -1 )
        console.log(persons);
            let  newPerson =[];
            for (let i = 0;i<persons.length-1;i++)

                    {               
                        if (persons[i].phone != persons[i+1].phone)
                        {
                            newPerson.push(persons[i])
                        }
                    }
            if (persons[persons.length-1]===persons[persons.length-2])
                    {   
                        newPerson.pop()
                        newPerson.push(persons[persons.length-1])
                    }
            else 
            {
                newPerson.push(persons[persons.length-1])
            }        
        persons = newPerson;
        let personHTML = persons.map((value)=>
        {
            return `<li><span class="list-name">${value.name}</span> <span class="list-phone">${value.phone}</span></li>`
        })
        list.innerHTML = personHTML.sort().join("");

    })

    //  function callName()
    //  {
    //     names = document.querySelectorAll('.listname');
    //  }

    //  setInterval(callName,1000);