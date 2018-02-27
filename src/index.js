module.exports = function solveEquation(equation) {
  // your implementation
  var a=0;
  var b=0;
  var c=0;
  var D;
  var i = equation.indexOf(" * x^2");
  a = equation.slice(0,i);
  a = +(a);
  i = equation.indexOf("x^2") + 3;
  i = +(i);
  var i2 = equation.indexOf("* x ");
  b = equation.slice(i,i2);
  b = b.replace(/\s+/g, '');
  b = +(b);
  i = equation.indexOf("* x ")+4;
  i2 = equation.length;
  c = equation.slice(i,i2);
  c = c.replace(/\s+/g, '');
  c = +(c);
  D=Math.round(Math.pow(b,2) - 4*a*c);
  if(D > 0){
      var x1 = Math.round(b*-1 - Math.sqrt(D))/(2*a);
      var x2 = Math.round(b*-1 + Math.sqrt(D))/(2*a);
      var res=[];
      var res2=[];
      if(x1<x2){
        res.push(x1,x2);
        return res;
      }
      if(x1>x2){
        res.push(x2,x1);
        return res;
      }
      
  }
}
