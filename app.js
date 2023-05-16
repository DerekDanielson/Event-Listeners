const clearBtn = document.querySelector('#clear');


function onClear(){
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    //itemList.innerHTML = '';
    //items.forEach((item) => item.remove());

    while (itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}

// JavaScript Event Listener
clearBtn.onclick = function(){
    alert('Clear Items');
};

// Add event listener
clearBtn.addEventListener('click', function(){
    alert('Clear Items');
});
// Or
clearBtn.addEventListener('click', () => alert('Clear Items'));
clearBtn.addEventListener('click', () => console.log('Clear Items'));
clearBtn.addEventListener('click', onClear);


setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

setTimeout(() => clearBtn.click(),5000);