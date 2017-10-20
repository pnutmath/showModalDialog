//If window.showModalDialog is not supported by browser

if(window.showModalDialog === undefined){
    window.showModalDialog = function(){
        console.log('window.showModalDialog is not working');
        
    };
    console.log('ss');
}