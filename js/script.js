window.addEventListener('load', function (e) {
  var btn = document.querySelector('button');
  var inp1 = document.querySelector('input[name = "num1"]');
  var inp2 = document.querySelector('input[name = "num2"]');
  var select = document.querySelector('select');
  var res = document.querySelector('.res');


  btn.addEventListener("click", function(){
    var a = +inp1.value
    var b = +inp2.value
    console.log(select.value);

    switch (select.value){
      case 'sum' :
        res.innerHTML = a + b
        break;
      case 'sub' :
        res.innerHTML = a - b
        break;
      case 'mul' :
        res.innerHTML = a * b
        break;
      case 'div' :
        res.innerHTML = a / b
        break;
      default:
        break;
    }
    btn.disabled = true
  })


  var arr = [inp1, inp2, select]

  for (var i = 0; i < arr.length; i++){
    arr[i].addEventListener("input", function(){
      this.disabled = false
    })
  }


  inp1.addEventListener('input', checkValue)

  function checkValue(){
    var pattern = /^(-){0,1}([0-9])*(\.){0,1}([0-9])*$/
    if(!pattern.test(this.value)){
      var num = this.value.replace(/[^0-9\.]/g, "")
      if (this.value[0] == "-"){
        num = "-" + num
      }
      if (pattern.test(num)){
        this.value = num
      }
    }
  }
});