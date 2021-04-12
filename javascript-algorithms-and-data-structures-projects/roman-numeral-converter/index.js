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


  for(let i in Object.keys(ro)){
    
      if(Object.keys(ro)[i]>num){
        return Object.keys(ro)[i]
      }



    
    //if(Object.keys(ro)[i] == num){
    //  return ro[Object.keys(ro)[i]]
    //}else{
    //  let inte = Number(Object.keys(ro)[i])
    //  console.log(inte)
    //  return inte
    //  //while(ini == )
    //}
  }
  
  return "";

  }
  
  const q = convertToRoman(30);
  console.log(q)