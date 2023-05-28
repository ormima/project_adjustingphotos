const zdj = document.querySelectorAll("img");

//console.log(zdj);

for(let i=0; i < zdj.length; i++){
    //console.log(zdj[i]);
    zdj[i].addEventListener("mouseover", () => {
        let zdjs = zdj[i].src;
        //console.log(zdjs);

        let zdjl = zdjs.length;
        //console.log(zdjl);

        let zdjs1r = zdjs.slice(0, zdjl - 4);
        //console.log(zdjs1r);
        let zdjs1rl = zdjs1r.length;
        let zdjs1 = zdjs1r.slice(zdjs1rl - 4);
        //console.log(zdjs1);

        if (zdjs1 == "kot1") {
            let zdjs1f = "./" + zdjs1 + "-szary.jpg";
            console.log(zdjs1f);
            zdj[i].src = zdjs1f;
        } else {
            let zdjs1p = "p" + zdjs1;
            let zdjs1f = "./" + zdjs1p + "-szary.jpg";
            console.log(zdjs1f);
            zdj[i].src = zdjs1f;
        }
    })

    zdj[i].addEventListener("mouseout", () => {
        let zdjs = zdj[i].src;
        //console.log(zdjs);

        let zdjl = zdjs.length;
        //console.log(zdjl);

        let zdjs1r = zdjs.slice(0, zdjl - 10);
        //console.log(zdjs1r);
        let zdjs1rl = zdjs1r.length;
        let zdjs1 = zdjs1r.slice(zdjs1rl - 4);
        //console.log(zdjs1);

        if (zdjs1 == "kot1") {
            let zdjs1f = "./" + zdjs1 + ".jpg";
            console.log(zdjs1f);
            zdj[i].animate(animShow, animTime);
            zdj[i].src = zdjs1f;
        } else {
            let zdjs1p = "p" + zdjs1;
            let zdjs1f = "./" + zdjs1p + ".jpg";
            console.log(zdjs1f);
            zdj[i].src = zdjs1f;
        }
    })
}