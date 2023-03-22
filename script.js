totalAll = 0;
function dodaj(element) {
    let mainEl = element.closest('.stolovi');
    
    let price1 = document.getElementsByTagName('span')[0].innerHTML;
    let price2 = document.getElementsByTagName('span')[1].innerHTML;
    let price3 = document.getElementsByTagName('span')[2].innerHTML;
    let price4 = document.getElementsByTagName('span')[3].innerHTML;
    let price5 = document.getElementsByTagName('span')[4].innerHTML;
    let price6 = document.getElementsByTagName('span')[5].innerHTML;
    let price7 = document.getElementsByTagName('span')[6].innerHTML;

    let price = [price1, price2, price3, price4, price5, price6, price7];
    
        let quantity = mainEl.querySelector('.broj').value;
        let cena = mainEl.querySelector('.cena').value;
        let total = price[cena] * quantity;
    console.log(total);
    
    price = parseInt(total);
    let suma = mainEl.querySelector('p');
    
    totalAll += total;
    suma.innerHTML = `${total} DINARA;`
    let ceh = mainEl.querySelector('.totalno');
    ceh.innerHTML = totalAll;
}
    function izbrisi(element) {
      let mainEl = element.closest('.stolovi');
      let suma = mainEl.querySelector('p');
      let ceh = mainEl.querySelector('.totalno');
      totalAll = 0;
      ceh.innerHTML = 0;
      suma.innerHTML = 0;

       
    }
    
    
    
    
