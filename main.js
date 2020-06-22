



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
                                    
                                    





                                    // Exercise 69   Write a JavaScript Program to compute the sum of three elements of given array of integers of length 3.




                                        function sum_three(nums) {

                                          return nums[0] + nums[1] + nums[2];
                                          
                                        }


                                        console.log(sum_three([10, 32 , 20]));

                                        console.log(sum_three([5, 7, 9]));

                                        console.log(sum_three([0,8, -11]));












                                        // Exercise 70    Write a JavaScript program to rotate the elements left of a given array of integers of length 3.


                                        //  Verilen 3 ögel arrayin ögelerinin yerini degistiriyoruz. basa ikinci siradaki sona da bastaki gidiyor.
                                        
                                        


                                        function rotate_elements_left(array) {

                                          return [ array[1] , array[2] , array[0]  ] ; 
                                          
                                        }



                                        console.log(rotate_elements_left([3, 4, 5]));

                                        console.log(rotate_elements_left([0, -1, 2]));

                                        console.log(rotate_elements_left([7,6,5]));


                                        
                                        // Yukaridaki formulün aynisi sadece elemanlari topluyoruz
                                        
                                        function sum_elements_left(array) {

                                          return  [ array[1] + array[2] + array[0] ] ;
                                          
                                        }


                                        console.log(sum_elements_left([10, 11, 12]));









                                        // Exercise 71 Write a Js Program to check whether 1 appears in first or last position of given array of integers.

                                        //  1 Sayisinin basta yada sonda oldugunu kontrol et
                                        
                                        


                                        function first_last_1(nums) {


                                          var end_pos = nums.length - 1 ;  // Asagida uzun uzun yazmamak icin  tanimladi end_pos u

                                          return nums[0] == 1 || nums[end_pos] == 1 ;    // if condition kurmadan true false calistirdi bu sekilde. 
                                          
                                        }


                                        console.log(first_last_1([1, 3, 5]));

                                        console.log(first_last_1([1,3,5,1]));

                                        console.log(first_last_1([2,4,6]));




                                            //   Bu formulü yukaridakinin alternatifi oalrak yazdim. Yukarida if condition yok bunda if ile yapildi.

                                        function last(nums) {

                                          var end_pos = nums.length - 1;

                                          var start = nums[0];

                                          if ( start == 1 || end_pos == 1) {

                                            return true;
                                            
                                          }
                                          
                                            return false;
                                        }



                                        console.log(first_last_1([1, 3, 5]));

                                        console.log(first_last_1([1,3,5,1]));

                                        console.log(first_last_1([2,4,6]));






                                            // Exercise 72      Write a Js program to check whether the first and last elements are equal of a given array 



                                            function first_last_same(nums) {

                                              var end = nums.length - 1;

                                              if (nums.length >= 1) {

                                                    return nums[0] == nums[end];
                                                
                                              }
                                                    else {return false;}
                                              
                                            }


                                                console.log(first_last_same([10,20,30]));

                                                console.log(first_last_same([10,20,30,10]));

                                                console.log(first_last_same([20,20,20]));




                                                    //  Bu yukaridaki koda alternatif olarak yazdigim kod.


                                                function first_last_sa(nums) {

                                                  var start = nums[0] ;

                                                  var end  =  nums.length - 1 ;

                                                  if (nums[0] == nums[end]) {        //  if in icerisine if ( start == end ) yazdim calismadi. Bu seklide yazilmasi gerekiyor.  

                                                    return true
                                                    
                                                  }

                                                    else    
                                                    
                                                        {return false; }
                                                  
                                                }
                                                
                                                
                                                
                                                console.log(first_last_sa([10,20,40]));

                                                console.log(first_last_sa([10,20,30,10]));

                                                console.log(first_last_sa([20,20,20]));










                                                //  Exercise 73    Write a Js Program to reserve the elements of a given array of integers 

                                                //  Verilen 3 basamakli array i "3 4 5"   " 5 4 3 "  yapmak. Ters cevirme



                                                function reserve3(array) {

                                                  return array.map(( element, idx, arr ) => arr [(arr.length - 1) - idx]);
                                                  
                                                }

                                                console.log(reserve3 ([5,4,3]));

                                                console.log(reserve3 ([1,0,-1]));

                                                console.log(reserve3 ([2,3,1]));




                                                    // Yukaridaki koda alternatif olarak yazdim



                                                function x(nums) {

                                                  var first = nums[0];

                                                  var second = nums[-2];

                                                  var end = nums[-1];
                                                  
                                                  return nums[-1] , nums[-2], nums[0] ; 

                                                }



                                                console.log(reserve3 ([5,4,3]));

                                                console.log(reserve3 ([1,0,-1]));

                                                console.log(reserve3 ([2,3,1]));

                                                
                                                
                                                







                                                    // Exercise 74 Write a JavaScript Program to find the larger value 

                                                    // En Yüksek degeri bulmak




                                                    function all_max(nums) {

                                                      var max_val = nums[0] > nums[2] ? nums[0] : nums[2] ;

                                                    nums[0] = max_val ;

                                                    nums[1] = max_val;

                                                    nums[2] = max_val;


                                                      return nums;
                                                      
                                                    }

                                                    
                                                      console.log(all_max([20,30,40]));

                                                      console.log(all_max([-7,-9,0]));

                                                      console.log(all_max([12,10,3]));

                                                      
                                                      







                                                        // Exercise 75    To create a new array taking the middle elements of the two arrays 

                                                        // Verilen 2 Array in ortasindaki sayilari alarak  yeni element olusturma
                                                        
                                                        



                                                        function middle_elements(a,b) {

                                                            var new_array = [] 

                                                            new_array.push(a[1], b[1] ) ;

                                                                return new_array;
                                                          
                                                        }




                                                              console.log(middle_elements([1,2,3,], [1,5,6]));

                                                              console.log(middle_elements([3,3,3], [2,8,0]));

                                                              console.log(middle_elements([4,2,7], [2,4,5]));


                                                              
                                                              
                                                              
                                                      




                                        
                                        
                                        








                                        

                                        
















                                        
                                        
                                        
                                    
                                  
                                  
                                  

                                         


           

                  
                  
                    
                    
                    












             
                
              
              
