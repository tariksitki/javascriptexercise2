



              // Exercise 60




function without_first_end(str) {


    return str.substring(1, str.length - 1);

  }

  console.log(without_first_end('JavaScript'));

  console.log(without_first_end('JS'));

  console.log(without_first_end('PHP'));





        // Exercise 61


        function concatenate(str1, str2) {

            str1 = str1.substring(1, str1.length);

            str2 = str2.substring(1, str2.length);

            return str1 + str2;
          }
          
          console.log(concatenate("PHP","JS"));

          console.log(concatenate("A","B"));

          console.log(concatenate("AA","BB"));







          // Exercise 62    


              function right_three(str) {

                if (str.length > 1) 
                
                  {
                      return str.slice(-3) + str.slice(0, -3);  // Notiz: Burada -3 dedigi sey, 0 ve 3 . eleman dahil;  -3 dedigi sey de 3. eleman haric ondan sonrakiler basa gelsin + digerleri gelsin

                }
                      return str;
                
              }

              console.log(right_three("Python"));

              console.log(right_three("JavaScript"));

              console.log(right_three("Hi"));
















              function right_three(str) {

                if (str.length > 1) {

                  return str.slice(-3) + str.slice(0,-3);
                  
                }

                  return str;
              }

                console.log(right_three("Tarik"));
                
              
              
