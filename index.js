
  function superbowlWin(array) {
    for (let element of array) {
      if(element.result === "W"){
        return element.year;
      }
      
    }
  }
  record.find(superbowlWin);
  superbowlWin(record);
// const superbowlWin = array.find(item =>{
//     return item.result === 'w'
// })

//   superbowlWin();