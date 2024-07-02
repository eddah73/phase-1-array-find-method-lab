
  // function superbowlWin(array) {
  //   for (let element of array) {
  //     if(element.result === "W"){
  //       return element.year;
  //     }
      
  //   }
  // }
  // record.find(superbowlWin);
  // superbowlWin(record);
  const superbowlWin = (array) => {
    const firstWin = array.find((element) => element.result === "W");
      if (firstWin){
        return firstWin.year;
      }else {
        return undefined
      }
    }
    

  // superbowlWin();
  // const superbowlWin = (array) => {
  //   const firstWin = array.find((element) => element.result === "W");
  //   return firstWin.year
  // }