/*упражнение 6.1*/
       var a = prompt('Введите а =', ' ')
       var  b= prompt('Ввелите b=', ' ')
       if (a > b)
         alert( 'Да,а > b' )
       else
         alert( 'Нет,a < b' )

         var a = prompt('Введите а =', ' ')
         var  b= prompt('Ввелите b=', ' ')
         var c;
         if (a > b)
           c = a;
         else
         c = b
           alert( c )


           /*упражнение 6.2*/

           var x = prompt('Введите x =', ' ')
           var  y= prompt('Ввелите y=', ' ')
           var c;
           if x > y
           {
           c = x;
           x = y;
           y = c;
         }
             alert(x)
             alert(y)

             /*упражнение 6.3*/

             console.log ( 'Привет&' );

             /*упражнение 6.4*/
             var a,b,c,d
             var a = prompt('Введите a =', ' ')
             var  b= prompt('Ввелите b=', ' ')
             var  c= prompt('Ввелите c=', ' ')
                 if (a > b)
                 {
                   d = a;
                 }
                  else
                  d = b;
                     if (c > d)
                     {
                       d =c;
                     }

                      alert(d);

                         /*упражнение 6.5*/

                         var ageFa = prompt('Введите возраст папы  = ', ' ')
                         var ageMa = prompt('Ввелите возраст мамы = ', ' ')
                             if (ageMa > ageFa )
                            {
                              console.log ( 'Мама старше папы' );
                            }
                             else
                               console.log ( 'Папа старше мамы' )



                             /*упражнение 6.6*/
                          var ageFa = prompt('Введите возраст папы  = ', ' ')
                          var ageMa = prompt('Ввелите возраст мамы = ', ' ')
                          if (ageMa < ageFa)
                          {
                            console.log ( 'Папа старше мамы' )
                          }
                          else
                              if (ageMa > ageFa )
                             {
                               console.log ( 'Мама старше папы' );
                             }
                              else
                              console.log ( 'Мои родители - ровесники' );


                             /*упражнение 6.7*/
                             var num1 = +prompt('Введите первое число  = ', ' ')
                             var sign = +prompt('Введите знак (+, -, *, /)  = ', ' ')
                             var num2 = +prompt('Введите второе число  = ', ' ')
                             var sum = (num1 + num2)
                             var sud = (num1 - num2)
                             var mult =(num1 * num2)
                             var div = (num1 / num2)
                              if (sign == "+")
                              {
                               console.log ('Ответ  = ',sum );
                                   }
                                   else
                                    if  (sign == "-")
                                   {
                                    console.log (' Ответ  = ',sud);
                                        }
                                        else
                                        if (sign == "*")
                                        {
                                         console.log ('Ответ  = ',mult );
                                             }
                                             else
                                             if ((sign == "/") && (num2 > 0))

                                             {
                                              console.log (' Ответ  = ',div);
                                                  }

                                                  else
                                                  if ((sign == "/") && (num2 = 0))

                                                  {
                                                   console.log (' Делить на ноль нельзя ' );
                                                       }
       /*упражнение 6.8*/
       var a = 5 + 9;
switch ( a ) {
case 9:
alert ( 'Это меньше');
break;
case 10:
alert ('Это a!' );
break;
case 11:
alert ('Это больше а' );
break;
default:
alert ('Это не a!');
}



/*упражнение 6.9*/
var lang, week
var lang = prompt('Выберете язык(ru,en)  = ', ' ')

switch (lang) {
case  'ru' :
{
 week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
alert (week);
break;
}
case 'en':
{
week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
alert (week);
break;
}
default:
alert ('Язык выбран не верно');
}

var lang, week
var lang = prompt('Выберете язык(ru,en)  = ', ' ')
if  (lang == "ru")
{
week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
alert (week);
}
else
{
week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
alert (week);
}


/*упражнение 6.10*/

var num1 = +prompt('Введите первое число  = ', ' ')
var sign = prompt('Введите знак (+, -, *, /)  = ', ' ')
var num2 = +prompt('Введите второе число  = ', ' ')

var sum = (num1 + num2)
var sud = (num1 - num2)
var mult =(num1 * num2)
var div = (num1 / num2)

switch (sign)
{
case '+':
{

 console.log ('Ответ  = ',sum );
 break;
}
case '-':
{

 console.log ('Ответ  = ',sud );
 break;
}
case '*':
{
    console.log ('Ответ  = ',mult );
 break;
}

case '/':
{
   (num2 > 0)
   console.log (' Ответ  = ',div);
   break;
 }
 case '/':
{
   ( num2 = 0)
   alert (' Делить на ноль нельзя ' );
    break;
  }
default:
 alert ('Проверте правильность ввода данных');
}

/*упражнение 6.11*/
var word = prompt('Введите слово ', ' ')
word.length;

if  (work[i] = 'a'&& 'e' && 'i' && '0')
{
alert(work);
}
