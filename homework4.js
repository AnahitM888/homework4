//Impliment the methods below:
//1. string.includes
function myStrIncludes(originalStr, searchStr) {  
    for (let i = 0; i <= originalStr.length - searchStr.length; i++) {
      let res = true;
      for (let j = 0; j < searchStr.length; j++) {
        if (originalStr[i + j] !== searchStr[j]) {
          res = false;
          break;
        }
      }
      if (res == true) {
        return true;
      }else{
        return false
      }
    }
}

//2. indexOf

function myIndexOf(originalStr, searchStr, startIndex = 0) {
  
    for (let i = startIndex; i <= originalStr.length - searchStr.length; i++) {
      let res = true;
      for (let j = 0; j < searchStr.length; j++) {
        if (originalStr[i + j] !== searchStr[j]) {
          res = false;
          break;
        }
      }
      if (res == true) {
        return i;
      }else{
        return -1;
      }
    }
  }

//3. replace

function myReplace(originalStr, searchStr, newStr) {
    let result = "";
    let i = 0;
  
    while (i < originalStr.length) {
      if (originalStr.slice(i, i + searchStr.length) === searchStr) {
        result += newStr;
        i += searchStr.length;
      } else {
        result += originalStr[i];
        i++;
      }
    }
  
    return result;
  }

//4.  replaceAll

function myReplaceAll(originalStr, searchStr, newStr) {
    let result = "";
    let i = 0;
  
    while (i < originalStr.length) {
      if (originalStr.slice(i, i + searchStr.length) === searchStr) {
        result += newStr;
        i += searchStr.length;
      } else {
        result += originalStr[i];
        i++;
      }
    }
  
    if (result === originalStr) {
      return result;
    } else {
      return customReplaceAll(result, searchStr, newStr);
    }
  }

//5. arr.includes

function myIncludes(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return true;
      }
    }
    return false;
  }

//6. indexOf 

function myIndexOf(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
    return -1;
  }

//7 slice

function mySlice(arr) {
    const slicedArr = [];
    let startIndex = 0 < 0 ? Math.max(arr.length + start, 0) : Math.min(start, arr.length);
    let endIndex = arr.length < 0 ? Math.max(arr.length + end, 0) : Math.min(end, arr.length);
  
    for (let i = startIndex; i < endIndex; i++) {
      slicedArr.push(arr[i]);
    }
  
    return slicedArr;
  }
  