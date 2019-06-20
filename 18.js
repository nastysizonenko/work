
///1 задание
  function User(firstname, secondname) {
    this.name = firstname;
    this.sName = secondname;
    this.sayHi = function () {
      alert("Hi, " + this.name + " " + this.sName)
    }
  }
  var a = new User("Nastya","Sizonenko")//для вывозова функции конструктора, через new

//2задание
  function Calc() {
    this.read = function(){
    this.a = +prompt("vvedite a","")
    this.b = +prompt("vvedite b","")
  }
    this.sum = function () {return this.a + this.b}
    this.mul = function () {return this.a * this.b}
    this.div = function () {
      if(this.b==0)return "error"
      else {return this.a/this.b}
    }
  }
  var calc = new Calc()
  console.log(calc.read());
  console.log("Сумма= "+calc.sum());
  console.log("Произведение = "+calc.mul());
  console.log("Частное ="+calc.div());
