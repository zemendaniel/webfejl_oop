function fun(param) {
    console.log(param.nev);
}
fun({nev: "Cirmi"});

const alma = fun;
alma({nev: "Cirmi"});

// ------------------------------------

function funA() {
    console.log(this.nev);
}
const korte = funA.bind({nev: "Cirmi"});
korte();

// ------------------------------------

const funB = function (param) {
    console.log(param.nev);
}
funB({nev: "Cirmi"});


// ------------------------------------
const funC = (param) => {
    console.log(param.nev);
}

funC({nev: "Cirmi"});

// ------------------------------------

const obj = {
    funA: (param) => {
        console.log(param.nev);
    },
    funB: (param) => {
        console.log(param.eletkor);
    }
}

obj.funA({nev: "Cirmi"});
obj.funB({eletkor: Number.MAX_VALUE ** 2});
