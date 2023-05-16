const clearBtn = document.querySelector('#clear');

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