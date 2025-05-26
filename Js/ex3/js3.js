//Questio from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

/* 
***7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. 
***
*/


                /*Code answer*/








    let append = document.querySelector('.answer');
    let daysss = ['Dom','Seg','Terc','Quar','Quin', 'Sex', 'Sab']
    for (x = 2014; x < 2050; x ++)
    {
        let dat = new Date(x, 0, 1);

        if (daysss[dat.getDay()] === 'Dom')
        {
           let answer = document.createElement("p");
           answer.textContent = 'First january will be on ' + x + ' year';
           append.appendChild(answer);

        }
    }
    
