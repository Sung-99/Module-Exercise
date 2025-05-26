
let stringg = document.querySelector('input');
let btn = document.querySelector('button');

btn.onclick = function(){
    let p = '', row = [''], ret = [row], i = 0, r = 0, s = !0, l;
    for (l of stringg.value) {
        if ('"' === l) {
            if (s && l === p) row[i] += l;
            s = !s;
        } else if (',' === l && s) l = row[++i] = '';
        else if ('\n' === l && s) {
            if ('\r' === p) row[i] = row[i].slice(0, -1);
            row = ret[++r] = [l = '']; i = 0;
        } else row[i] += l;
        p = l;
    }
    console.log(ret);

};





