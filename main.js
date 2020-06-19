



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







          // Exercise 62    (Stringin son 3 rakamini basa gecirme)


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














              //   Exercise 63    Verilen bir dizenin ortadaki 3 elemanini kullanarak bir dize olusturma 






              function middle_three(str) {

                if (str.length % 2 != 0) {

                    mid = (str.length + 1) / 2 ;

                    return str.slice(mid - 2, mid + 1);
                  
                }

                    return str;
              }




                    console.log(middle_three("Tarik"));

                    console.log(middle_three("HTML5"));

                    console.log(middle_three("Exercises"));

                    console.log(middle_three("Tarikcim"));  //  Burada söyle özel bir durum var. Tarikcim da harf adedi 8 oldugundan ortasini alamiyor. Buna bir cözüm bulmaliyiz








                      // Exercise 64   



                      function str_con_cat(str1, str2) {
                        const m = Math.min(str1.length, str2.length);
                      
                        return str1.substring(str1.length - m) + str2.substring(str2.length - m);
                      }
                      
                      console.log(str_con_cat("Python", "JS"));
                      console.log(str_con_cat("ab", "cdef"));





                          // Exercise 65


                          function end_script(str) {
                            if (str.substring(str.length - 6, str.length) == 'Script') 
                            {
                              return true;
                            } 
                            else 
                            {
                              return false;
                            }
                          }
                          console.log(end_script("JavaScript"));
                          console.log(end_script("Java Script"));
                          console.log(end_script("Java Scripts"));
                          








                          // Exercise 66    Write a Java Script program to display the city name if the string begins with "Los" or "New" otherwise return blank.




                              function city_name(str) {

                                if (str.length >= 3 && ((str.substring(0,3) == 'Los') || (str.substring(0,3) == "New")))

                                  {    
                                    return str;
                                  
                                }
                                    return ""  ;
                              

                              }


                                  console.log(city_name("New York"));

                                  console.log(city_name("Los Angeles"));

                                  console.log(city_name("London"));





                              // Exercise 67        Create a new string from a given string, removing the first and last characters of the string if the first or last character are "P";




                                  function nop(str) {

                                    let start_pos = 0 ;

                                    let end_pos = str.length;

                                    if (str.length > 0 && str.charAt(0) == "P") 
                                    
                                    {
                                        start_pos = 1;
                                      
                                    }

                                    if (str.length > 1 && str.charAt(str.length - 1) == "P")
                                    
                                    {
                                      end_pos--;           // Buradaki -- sondaki harfin okunmamasini komut verir.
                                      
                                    }
                                      return str.substring(start_pos, end_pos) ;
                                  }

                                  
                                  console.log(nop("PythonP"));   // Sonu P ile bittigi icin sondaki harf -- den dolayi okunmaz.

                                  console.log(nop("Python"));

                                  console.log(nop("JavaScript"));



                                  // Exercise 68      Write a JavaScript program to create a new string taking the first and last n characters from a given string. The string length must be greater or equal to n.
                                  
                                  //  Verilen string in bastan ve sondan ikiser karakterini alarak yeni string olusturma





                                    function two_string(str,n) {

                                        first_part = str.substring(0,n);

                                        last_part = str.substring(str.length - n);

                                        return first_part + last_part;
                                      
                                    }


                                    console.log(two_string("JavaScript", 2));

                                    console.log(two_string("JavaScript" , 3));



                                      //  Exercise 68 selbstgemacht


                                    function two_string(str,n) {

                                      first_part = str.substring(0,n);

                                      last_part = str.substring(str.length - n);    //  Burada str.length - 2   normalde bakildigi zaman geriya kalan kisim bas kisim gibi geliyor ama bu bir kalip.
                                      
                                      return str.substring = first_part + last_part ;    // Notiz:  Burada return yazarken bir önceki örnekte oldugu gibi direkt return yazip formulü de yazabiliz. Ikinci secenek return str.substring yazmak.

                                    }


                                    console.log(two_string("JavaScript" , 4));

                                    console.log(two_string("JavaScript" , 1));     
                                    
                                    
                                    
                                  
                                  
                                  

                                  
                                  
                                  







           

                  
                  
                    
                    
                    












             
                
              
              
