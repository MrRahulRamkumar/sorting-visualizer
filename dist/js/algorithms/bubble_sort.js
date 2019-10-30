async function bubbleSort() {
    var len = values.length,
    i, j, stop;
  
    for (i=0; i < len; i++){
      for (j=0, stop=len-i; j < stop; j++){
        if (values[j] > values[j+1]) {
          await swap(values, j, j+1);
        }
      }  
    }
  }