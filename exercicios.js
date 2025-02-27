function simpleArraySum(ar) {

    let soma = 0
    
    for (let i=0; i < ar.length; i++) {   
          soma+=ar[i];   
    }
    
    return soma
    
    }
    
    function compareTriplets(a, b) {
        let pontosA = 0;
        let pontosB = 0;
        
        for (let i = 0; i < 3; i++) {
            if (a[i] > b[i]) {
                pontosA++;
            } else if (a[i] < b[i]) {
                pontosB++;
            }
        }
        
        return [pontosA, pontosB];
    
    }
    
    function aVeryBigSum(ar) {
         let soma = 0;
        for (let i = 0; i < ar.length; i++) {
            soma += ar[i];
        }
        return soma;
    
    }
    
    function plusMinus(arr) {
        let positivos = 0;
        let negativos = 0;
        let zeros = 0;
        let total = arr.length;
        
        for (let i = 0; i < total; i++) {
            if (arr[i] > 0) {
                positivos++;
            } else if (arr[i] < 0) {
                negativos++;
            } else {
                zeros++;
            }
        }
        
        console.log((positivos / total).toFixed(6));
        console.log((negativos / total).toFixed(6));
        console.log((zeros / total).toFixed(6));
    }
    
    function birthdayCakeCandles(candles) {
        let maior = Math.max(...candles);
        let contagem = 0;
        
        for (let i = 0; i < candles.length; i++) {
            if (candles[i] === maior) {
                contagem++;
            }
        }
        
        return contagem;
    }
    
    
    
    