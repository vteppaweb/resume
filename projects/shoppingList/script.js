const item = document.querySelector('[item]');
const containerList = document.querySelector('.items-container');
const totalSpan = document.querySelector('.total-span');
const total = document.querySelector('.total');
const addBtn = document.querySelector('[add-item]');
const clearBtn = document.querySelector('[clear]');
const printBtn = document.querySelector('[print]');

addBtn.addEventListener('click', () => {

        // Add Item to the List:
        let itemToAdd = item.value;

        // Make First Letter UpperCase:
        let productToAdd = itemToAdd.charAt(0).toUpperCase() + itemToAdd.slice(1);

        // Create Parent Element '<ol>'
        let label = document.createElement('ul');
        label.setAttribute('id','my01');
        label.setAttribute('class','clsItem');

        // Append Element 'label' to 'containerList'
        containerList.appendChild(label);

        // Create Child Element '<li>'
        let child = document.createElement('li');
        let y = document.createTextNode(productToAdd);

        child.appendChild(y);
        document.getElementById('my01').appendChild(child);

        // Get Total Items in the List
        totalSpan.textContent = 'Total items: ';
        total.textContent = totalSpan.textContent + containerList.getElementsByTagName('li').length;

        // disable button 'add'
        addBtn.disabled = true;
        // clear input
        item.value=''; 
        // show Clear and Print button
        clearBtn.style.display = "flex";
        printBtn.style.display = "flex";
        
        child.style.cursor = "pointer";

        // Mark item with line-through
        child.addEventListener('click', ()=>{           
            child.style.textDecoration = "line-through";
            child.style.textDecorationColor = "darkred"; 
        })

})

// Button Clear All Items in List
clearBtn.addEventListener('click', () => {
    // remove node child elements and parents:
    const items = document.querySelector('li:last-child');
    items.parentElement.remove(items);   
    total.textContent = "";
    clearBtn.style.display = "none";
    printBtn.style.display = "none";
})

// Disable button when window.load()
window.addEventListener('load', () => {
    addBtn.disabled = true;
    clearBtn.style.display = "none";
    printBtn.style.display = "none";
})

// Enable or Disable Button
function enableBtn(){
    if(item.value){
        addBtn.disabled = false;
    }
    else if(!item.value){
        addBtn.disabled = true;
    }
}
