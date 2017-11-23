export class Util{
    /**
     * Converte um número para o formato real
     * 
     * @param {number} num: número
     * @param {number} n: length of decimal
     * @param {number} x: length of whole part
     * @param {string} s: sections delimiter
     * @param {string} c: decimal delimiter
     */
    static numberToCurrency(num: number, n = 2, x = 3, s = '.', c = ',') : string {
        const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')';
        const str = num.toFixed(Math.max(0, ~~n));
    
        return (c ? str.replace('.', c) : str).replace(new RegExp(re, 'g'), '$&' + (s || ','));
    };

    static currencyToNumber(value: string) : number {
        
        if(!isNaN(parseFloat(value))) return parseFloat(value);

        try{
          return Number(value.replace(/[^0-9\,-]+/g,"").replace(",","."));
        }catch(e) {
          return 0;
        }
    }
}