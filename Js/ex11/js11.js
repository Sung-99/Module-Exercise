//#Source https://bit.ly/2neWfJ2
let btn_var = document.querySelector('button');
let created_element = document.querySelector('.created-element');
let textarea = document.querySelector('textarea');

    
btn_var = document.addEventListener('click', triggered => {
    
    
    
    const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    textarea.select()
    console.log(selected);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }//Not filled with data

});
