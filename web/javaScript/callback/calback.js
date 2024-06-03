function mul(a,b,cd) {

    var pro=a*b;
    cd(pro)
}

function sqr(s) {
    var sq=s*s
    console.log(sq);
}

mul(2,3,sqr)
