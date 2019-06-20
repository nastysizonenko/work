//1 задание
var o = {};
Object.defineProperty(o, 'a', {value:1});


//2 задание

function Archiver(){
	var temperature = null;
	this.archive = [];

	Object.defineProperty(this, 'temperature', {
		get(){//функция, которая возращает значение свойтсва
			console.log("get!");
			return temperature;},
		set(value){//функция, которая записывает значение свойства
			temperature = value;
			this.archive.push({val: temperature});}});//ДОБОВЛЯТЬ
	this.getArchive = function(){return this.archive;}}
var arc = new Archiver();//ОБРАЩЕНИЕ К ФУНКЦИИ КОНСТРУКТОРА
arc.temperature;
arc.temperature = 11;
arc.temperature = 13;
console.log(arc.getArchive());


Задание 3:
function User(fullName){
  firstName = fullName.split(' ')[0];
  lastName =  fullName.split(' ')[1];
  Object.defineProperty(this, 'firstName',{
	get(){
		return lastName ;},
	set(value){
	lastName=value;
  return  firstName;
	}
	})
	}

var nastya = new User("Сизоненко Анастасия");
//alert(nastya.firstName= 'Сизоненкo');
//alert(nastya.lastName= 'Анастасия');
console.log(nastya.firstName+' '+nastya.lastName);
