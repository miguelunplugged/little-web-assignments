

function f1() {
  var result = f2();
}

function f2() {
  var a =  7;
  var result = f3(a);
  return result;
}


function f3(parm) {
  return "salad";
}

function f4() {


}

f1();
