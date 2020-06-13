



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
