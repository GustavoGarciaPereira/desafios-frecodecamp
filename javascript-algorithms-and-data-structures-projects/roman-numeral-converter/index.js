/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

*/

function convertToRoman(num) {

    let ro = {
      1:'I',
      5:'V',
      10:'X',
      50:'L',
      100:'C',
      500:'D',
      1000:'M'
    }
  let ara = [1,
             5,
             10,
             50,
             100,
             500,
             1000
]
   
    let q = Object.keys(ro).filter((q)=>{

        if(q == num){
            return ro[q]
        }
        
    })

  return q;
  }
  
  const q = convertToRoman(10);
  console.log(q)