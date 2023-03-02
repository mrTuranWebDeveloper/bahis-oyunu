let rndSayilar = [];


for (let i=0;i<3;i++)
{
    let rndSayi = Math.round(Math.random() * 10);
    rndSayilar.push(rndSayi)
}

console.log(rndSayilar);


let oyna = document.querySelector(".oyna");
oyna.addEventListener("click",function(){
    let tahminler = [];
    let tahmin = document.getElementsByClassName("sayi");
    let bahis = Number(document.querySelector(".bahis").value);
    for (let i=0;i<tahmin.length;i++){
        tahminler.push(Number(tahmin[i].value))
    }
    
    sayac = 0
    for(let i=0;i<tahminler.length;i++){
        if (rndSayilar[i]==tahminler[i]){
            sayac++;
        }
    } 
    if (sayac==0){
        alert("Kasa Kazandı!")
    }
    else if (sayac==1){
        alert('Amorti! Miktar: ${bahis}')
    }
    else if (sayac==2){
        alert('2 adet bildiniz Miktar: ${bahis * 2}')
    }
    else if (sayac==3){
        alert('3 adet bildiniz Miktar: ${bahis * 3}')
    }

})

