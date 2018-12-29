 /*упражнение 8.1*/
 var  i,s,o=0;
for ( i=0; i < 1; i++ ){
  s = "Yes";

 console.log (s)
}

/*упражнение 8.2*/
var i,j,k=0;
for ( i = 5,j = 20; i*j>=0; i--) {//i=100;i>=0;i=i-20 k=i
  k= i*j;
  console.log('Число:' + k)
}

/*упражнение 8.3*/
var A=[ 12, -45, 67, 1, 90, 666 ]
for ( i=0; i<A.length; i++ ){
  if (A[i] % 2==0){// остаток от деления на 2 равно 0(четные числа)
    console.log ( A[i] )
  }}


  var A=[ 12, -45, 67, 1, 90, 666 ]
  for ( i=0; i<A.length; i++ ){
    if ((i % 2==0) && (i != 0)){//   значение под четными индексами
      console.log ( A[i] )
    }}


  /*упражнение 8.4*/
  var A=[]
  for ( i=0; i<5; i++ ){
    if (i<5){
       A.unshift(i)// добавляет в начало массива
      console.log (A)
    }}
    // A.reverse() //в обратном порядке
    for ( i=0; i>5; i++ ){//в обратном порядке с помощью цикла
        console.log (A[i])
      }

    /*упражнение 8.5  */
    var S=0,A =[],i
    for (i=0;i<=4;i++){
      A[i]=+prompt("Введите A["+i+"]=" )//ввод элементов масива
     console.log("A["+i+"]=" + A[i]);
   }
     for (i=0; i<A.length;i++){
S = S + A[i];
console.log ("Сумма чисел = "+S)
}

  /*упражнение 8.6  */
  var S=0,A =[],i, P = 2
  for (i=0;i<=3;i++){
    A[i]=+prompt("Введите A["+i+"]=" )//ввод элементов масива
  }
  console.log (A);
   for (i=0; i<A.length;i++){
P= P * A[i];
console.log ("Р = "+P);
}

  /*упражнение 8.7  */
  var S=0,A =[],N =0,Sum=0
  for (i=0;i<=3;i++){
    A[i]=+prompt("Введите A["+i+"]=" )//ввод элементов масива
      console.log (A);
  }
  for(i=0;i<arr.length;i++)
   if ( A[i]<0){
      S=S+A[i]
      N++//увеличение на 1
   }
  console.log ("Среднее арифметическое отрицательных элементов массива А  = "+ Sum/N)

  /*упражнение 8.8  */
  var A=[], B = [], C=0
  var key = +prompt("Введите искомое значение", "")
  for(i=0;i<5;i++){
     A[i]=Math.floor(Math.random()*10)
  }
  for(i=0;i<A.length;i++){
    if(A[i] == key){
       B[C] = i
       C++//увеливает индекс на 1
      }
  }
  if (B.length==0)console.log("Искомого значения нет");
  else {
    console.log("Индекс искомого элемента = " + B);
  }
    console.log("Массив А = " + A);
    console.log("Искомое значение = " + key)


    /*упражнение 8.9  */
var A=[], B=[], C=[]
for (i=0;i<5;i++){
  A[i]=+prompt("Введите A["+i+"]=")
}
for(i=0;i<A.length;i++)
  if(A[i]>0) B.push(A[i])//положительные элементы добавляються в массив В
else {
  if (A[i]<0) C.push(A[i])//отрицательные  элементы добавляються в массив С
}
console.log("Исходный массив: " + A);
console.log("Положительные элементы массива: " + B);
console.log("Отрицательные элементы массива: " + C)

  /*упражнение 8.10  */
  var A=[], B=[], C=[]
for(i=0;i<5;i++){
   A[i]=Math.floor(Math.random()*10)//случайные числа
   B[i]=+prompt("Введите B["+i+"]=")
   C.push(A[i]+B[i])}//добаввление в массив С
   console.log("Массив случайных чисел: " + A);
   console.log("Введеный массива: " + B);
   console.log("Сумма элементов массива А и В: " + C)

     /*упражнение 8.11  */
 var A = [], min= 0, max = 0
var B = +prompt("Введите длину массива=","")
for (i=0;i<B;i++){
   A[i]=+prompt("Введите A["+i+"]=")
 }
for (i=0;i<B;i++){
  if(A[i]>0&&A[i]>max)
  max= A[i]
  else {
    if(A[i]<0&&A[i]<min)
     min= A[i]
  }
}
console.log("Массив А = "+ A);
console.log("Наибольшее число = " + max);
console.log("Наименьшее чилло  = " + min);
