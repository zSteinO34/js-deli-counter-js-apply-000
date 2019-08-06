function takeANumber(arr, str) {
  var current = arr.length + 1
  arr.push(str);
  return `Welcome, ${str}. You are number ${current} in line.`;
}

var current = 0;

function takeANumber(arr) {
  arr.push(++current);
  return `Welcome, You are number ${current}.`;
}

function nowServing(arr) {
  var next = arr[0];
  if(next) {
    arr.shift();
    return `Currently serving ${next}.`;
  } else {
    return "There is nobody waiting to be served!"; 
  }
}

function currentLine(arr) {
  for(var i = 0; i < arr.length; i++) {
    arr[i] = `${(i + 1)}. ${arr[i]}`;
  }
  if(arr.length > 0) {
    return `The line is currently: ${arr.join(', ')}`;    
  }
  else {
    return `The line is currently empty.`;
  }
}