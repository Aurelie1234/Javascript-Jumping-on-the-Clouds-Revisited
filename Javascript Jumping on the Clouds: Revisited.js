function jumpingOnClouds(c, k) {
    
let e = 100;
let i = 0;
    do {
        if(c[i] == 1) e -= 2;
        e--;
        i = (i + k) % c.length;
    } while(i !== 0)
    return e;


}
