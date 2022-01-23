//tree型json转换
export const transData = (a, idStr, pidStr) => {
    var r = [],
      hash = {},
      id = idStr,
      pid = pidStr,
      i = 0,
      j = 0,
      len = a.length;
  
    for (; i < len; i++) {
      hash[a[i][id]] = a[i];
    }
  
    for (; j < len; j++) {
      var aVal = a[j],
        hashVP = hash[aVal[pid]];
  
      if (hashVP) {
        !hashVP['children'] && (hashVP['children'] = []);
  
        hashVP['children'].push(aVal);
      } else {
        r.push(aVal);
      }
    }
  
    return r;
  };