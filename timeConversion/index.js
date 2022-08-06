function timeConversion(str) {
    // example1: '12:01:00AM' => '12:01:00' => if it is AM 
    // remain time format 
    // and if hour to be 12, it should change to 00 format
    
    // example2: '12:01:00PM' => '12:01:00' => if it is PM 
    // remain time format
    // add 12 hours ex: 11pm => 11+12 = 23
    // if hour to be 24 => it should change to 12 format
    
    // 1. get PM/AM
    // 2. if it is AM and hour to be 12, change 00 format
    // 3. if it is PM,  add 12 hours, and addedHour is equal 24, change 12 format
    const aMpM = str[8] + str[9];
    const prefixHour = parseInt(str[0]+str[1]);
    const suffixStr = str.slice(2,8);
    if (aMpM === "AM") {
        if (prefixHour === 12) {
            return "00" + suffixStr;
        }
        return str.slice(0, 8);
    }
    if (aMpM === "PM") {
        const addedHour = prefixHour + 12;
        if (addedHour === 24) {
            return "12" + suffixStr;
        }
        return addedHour + suffixStr;
    }
}
console.log(timeConversion('12:01:00AM'));
