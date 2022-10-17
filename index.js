var navImgAll=document.querySelectorAll('.nav-img img');
var arrowRight=document.querySelector('.arrow-right')
var arrowLeft=document.querySelector('.arrow-left');
 var navList=document.querySelector('.nav-list')
 var navImg=document.querySelector('.nav-img')
var Nav=document.querySelector('nav')
var navImgLeng=navImgAll.length;
var sothutu=0;
  var indexx=0;
   
  arrowRight.addEventListener('click',function(){
    checkArrow(2)
  })
  arrowLeft.addEventListener('click',function(){
    checkArrow(1)
  })
  var stt=0;
 function checkArrow(test){
  
      if(test === 2){
        stt++;
       indexx++;
       if(indexx > navImgLeng-1){
        indexx  = navImgLeng - 1;

        return;
       }
      //  if(indexx == 1){
      //   Nav.style.background=`rgb(255, 198, 2)`;
      // } 

      console.log(navImgAll[0])
      sothutu=sothutu - navImgAll[0].offsetWidth;
    navImg.style=`left:${sothutu}px`
    
    if(stt > navImgLeng-1){
     stt = navImgLeng - 1;
     return;
    }else if(stt = 1){
      Nav.style.background=`rgb(255, 198, 2)`;
    }
      
      }else if(test === 1){
        stt--;
        console.log(stt)
        indexx--;
        console.log(indexx)
        
        if(indexx < 0){
         indexx = 0;
         console.log(indexx)
         
         return;
         
        }
         
         console.log(navImgAll[0])
         sothutu=sothutu + navImgAll[0].offsetWidth;
       navImg.style=`left:${sothutu}px`
      
       if(stt <= 0){
        Nav.style.background=`black`;
       }
      }
  }
  // adress-form
  var adressForm=document.querySelector('.adress-form');
   var navItemBox=document.querySelector('.nav-item-box')
  var close=document.querySelector('.adress-form-infor-icon')
  var adressFormList=document.querySelectorAll(".adress-form-list li")
 //
  navItemBox.addEventListener('click',function(){
    adressForm.classList.remove('xoa')
  })
  close.addEventListener('click',function(){
    adressForm.classList.add('xoa')
  })
  //
 var navItemBox=document.querySelector('.nav-item-box')
 var navItemBoxP=document.querySelector('.nav-item-box p')
 var loatAll=document.querySelector('.loatAll')
  
  adressFormList.forEach(function(el){
    el.addEventListener('click',function(){
      adressForm.classList.add('xoa')
       document.querySelector('.adress-form-list li.active').classList.remove('active')
       el.classList.add('active')
  console.log(el.innerText)
  navItemBoxP.innerHTML=`${el.innerText}`
  loatAll.classList.remove('an')
  setTimeout(function(){
    loatAll.classList.add('an')
  },1000)
          })
  })
  // slider-img
  var sliderImgs=document.querySelectorAll(".slider-img");
  var sliderArrowLeft=document.querySelector(".slider-arrow-left")
  var sliderArrowRight=document.querySelector(".slider-arrow-right")
  var sliderHeadList=document.querySelector('.slider-head-list')
  var sliderHead=document.querySelector('.slider-head')
  var sliderImgWidths=sliderHeadList.offsetWidth;
   var index=0;
   var stt=0;
  //  console.log(sliderArrowRight)
     
      function flex(){
        index++;
        // console.log('one'+index)
        if(index <= 2){    
          stt=stt - sliderImgWidths;
              sliderHead.style=`left:${stt}px`
              // console.log(sliderHead.style=`left:${stt}px`)
        }else{
          index = 0;
          stt=0;
          sliderHead.style=`left:${stt}px`
        }
      }
      
    
    var t;
    function one(){
     
     setInterval(function(){
      // console.log(1)
      flex();
     },3000)
              
     setInterval(function(){
      // console.log(1)
      flex1();
     },5000)
    }
    // function one(){
     
    //   setInterval(function(){
    //    // console.log(1)
    //    flex1();
    //   },5000)
               
       
    //  }
    sliderArrowLeft.addEventListener('click',function(){
      console.log(index)
      index--;
       
      if(index >= 0){
        
        stt=stt + sliderImgWidths;
        console.log(stt)
            sliderHead.style=`left:${stt}px`
            console.log(sliderHead.style=`left:${stt}px`)
      }else{
         index = 0;
        // stt=-2400;
        // sliderHead.style=`left:${stt}px`
      }
      console.log(index)
    })
    
    // hotdeal-slider-move
    var hotdealSliderMove=document.querySelector(".hotdeal-slider-move");
    var  hotdealArrowLeft=document.querySelector(".hotdeal-arrow-left")
    var  hotdealArrowRight=document.querySelector(".hotdeal-arrow-right")
    var hotdealSliderStts=document.querySelectorAll('.hotdeal-slider-stt')
    // console.log(hotdealSliderStts.length)
    var add=0;
    hotdealSliderStts.forEach(function(el,stt){
      // console.log(stt)
          var hotdealWidth=(stt + 1)*el.offsetWidth
    })
    var hotdealSliderTong=hotdealSliderStts.length;
    var so=0;
    var sott=0;
    
    hotdealArrowRight.addEventListener("click",function(){
           checkSliderHotdeal(2)    
    })
    hotdealArrowLeft.addEventListener("click",function(){
      checkSliderHotdeal(1)    
})
    function checkSliderHotdeal(move){
            
            if(move === 2){
              sott++;
              if(sott > hotdealSliderTong -1){
                so = 0;
                sott=0;
                hotdealSliderMove.style=`left:${so}px`
                
              }else{
                so=so - hotdealSliderMove.offsetWidth;
                hotdealSliderMove.style=`left:${so}px`
              }
             

            }else if(move === 1){  
                    sott--;
                    if(sott < 0){
                      sott = hotdealSliderTong -1;
                      so= -(hotdealSliderTong * hotdealSliderMove.offsetWidth) + 1200;
                      hotdealSliderMove.style=`left:${so}px`
                    }else{
                      so=so + hotdealSliderMove.offsetWidth;
                      hotdealSliderMove.style=`left:${so}px`
                    }
                    
             
              
            }
    }
  var xiaomiArrowLeft=document.querySelector('.xiaomi-arrow-left')
  var xiaomiArrowRight=document.querySelector('.xiaomi-arrow-right')
  var sliderXiaomItem=document.querySelector('.slider-xiaom-item')
  var sliderXiaomiStt=document.querySelectorAll('.slider-xiaomi-stt')
  var widthXiaomiImg=sliderXiaomiStt[0].offsetWidth;
  var widthXiaomiLeng= sliderXiaomiStt.length;
  var moveWidth=0;
  var sttMove=0;
  moveWidth=moveWidth - widthXiaomiImg;
 function flex1(){
   
  sttMove++;
  // console.log(sttMove)
   
  if(sttMove > widthXiaomiLeng - 1){
    sttMove = 0;
    // console.log(moveWidth +"dk")
    sliderXiaomItem.style=`transform:translateX(${sttMove*moveWidth}px)`  
    return;
  }
  // console.log(moveWidth +"kdk")
  sliderXiaomItem.style=`transform:translateX(${sttMove*moveWidth}px)`
   
}
 
xiaomiArrowLeft.addEventListener('click',function(){
   
  sttMove--;
  // console.log(sttMove)
   
  if(sttMove < 0){
    sttMove = widthXiaomiLeng - 1;
    sliderXiaomItem.style=`transform:translateX(${sttMove*moveWidth}px)`
    // console.log("dyx" +sttMove)
    // console.log(sttMove)
    return;
  }
  console.log(moveWidth)
  sliderXiaomItem.style=`transform:translateX(${sttMove*moveWidth}px)`
})


// listproduct
var listproductOver=document.querySelector('.listproduct-over');
var listproductArrowLeft=document.querySelector(".listproduct-arrow-left")
var listproductArrowRight=document.querySelector(".listproduct-arrow-right")
var listproductStts=document.querySelectorAll(".listproduct-stt")
var listproductSttLeng=listproductStts.length;
var listproductWidth=-listproductOver.offsetWidth;
var listproductSTT=0;
listproductArrowRight.addEventListener("click",function(){
  listproductSTT++;
        if(listproductSTT > listproductSttLeng - 1){
          listproductSTT = 0;
          listproductOver.style=`transform:translateX(${listproductSTT * listproductWidth}px)`
          return;
        }
        listproductOver.style=`transform:translateX(${listproductSTT * listproductWidth}px)`
})
listproductArrowLeft.addEventListener("click",function(){
  listproductSTT--;
  console.log(listproductSTT)
        if(listproductSTT < 0){
          listproductSTT = listproductSttLeng - 1;
          listproductOver.style=`transform:translateX(${listproductSTT * listproductWidth}px)`
          return;
        }
        console.log(listproductSTT)
        listproductOver.style=`transform:translateX(${listproductSTT * listproductWidth}px)`
})


// form-showPromoteBHX-content
var showPromoteEmail=document.getElementById('showPromoteEmail')
var showPromoteSDT=document.getElementById('showPromoteSDT')
var formShowPromoteBHX=document.getElementById('form-showPromoteBHX')
var showPromoteInput=document.querySelectorAll('.showPromoteBHX-content-item-1 input');
console.log(showPromoteInput)
var checkShowPromoteBHX=document.querySelector('.checkShowPromoteBHX')
var voucherSuccess=document.querySelector('.voucher-success')
var checkShowContent=checkShowPromoteBHX.innerHTML=``;
var voucherSuccessItem=document.querySelector('.voucher-success-item')
   var voucherSuccessItem2=document.querySelector('.voucher-success-item2')
console.log(checkShowContent)
formShowPromoteBHX.addEventListener('submit',function(e){
  e.preventDefault();
  console.log('ducdz')
  checkShowEmail()
  checkshowPromoteSDT();
   if(checkShowEmail() &&  checkshowPromoteSDT()){
    loatAll.classList.remove('an')
  setTimeout(function(){
    loatAll.classList.add('an')
  },1000)
    voucherSuccess.classList.remove('open')
    voucherSuccessItem.innerHTML=`Được gửi đến mail ${showPromoteEmail.value}`
    voucherSuccessItem2.innerHTML=`Chỉ sử dụng cho số ${showPromoteSDT.value}`
   
   }
    
  // if(showPromoteSDT.value && showPromoteEmail.value && checkShowContent){
  //   voucherSuccess.classList.remove('open')
  //   }
})
 
  var checkEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    showPromoteEmail.addEventListener('blur',function(){
      checkShowEmail()
     
  })
  showPromoteSDT.addEventListener('blur',function(){
    checkshowPromoteSDT();
    // if(showPromoteSDT.value || showPromoteEmail.value){
      
    // }
  })
  function checkShowEmail(){
    if(!showPromoteEmail.value){
      console.log('ducdz')
      checkShowPromoteBHX.innerHTML=`Email không được để trống`
      showPromoteEmail.classList.add('check-out')
    }else if(!checkEmail.test(showPromoteEmail.value)){
      checkShowPromoteBHX.innerHTML=`Email không đúng định dạng`
      showPromoteEmail.classList.add('check-out')
    }else{
      
      showPromoteEmail.classList.remove('check-out')
      checkShowPromoteBHX.innerHTML=` `
      return true;
    } 
    // return false;
  }
   
 
   function checkshowPromoteSDT(){
    if(!showPromoteSDT.value){
      console.log('ducdz')
      checkShowPromoteBHX.innerHTML=`SDT không được để trống`
      showPromoteSDT.classList.add('check-out')
      showPromoteBtn.classList.remove('check-btn')
        }else if(showPromoteSDT.value.length < 9 && isNaN(showPromoteSDT.value)){
          checkShowPromoteBHX.innerHTML=`Số ĐT không hợp lệ`
          showPromoteSDT.classList.add('check-out')
          showPromoteBtn.classList.remove('check-btn')
    }else{
      showPromoteSDT.classList.remove('check-out')
      checkShowPromoteBHX.innerHTML=` `
      return true;
    }
    // return false;
   }
  
  var showPromoteBtn=document.querySelector('.showPromoteBHX-content-item-1 button')
  showPromoteSDT.addEventListener('keydown',function(e){
    console.log('ducdz')
    showPromoteBtn.classList.add('check-btn')
  })
  // messages
  var messages=document.querySelector('.messages');
  var massagesForm=document.querySelector('.massages-form')
  var massagesX=document.querySelector('.massages-x')
  var massagesGender=document.querySelector('.massages-form-input input')
   
       messages.addEventListener('click',function(){
           massagesForm.classList.remove('xoa')
       })
       massagesX.addEventListener('click',function(){
        massagesForm.classList.add('xoa')
       })
  var massagesInputs=document.querySelectorAll('.massages-form-input input');
  var username=document.getElementById('username');
  var phone=document.getElementById('phone')
  var Form=document.getElementById('form')
  var checkbox=document.getElementById('checkbox')
  var massagesSelect=document.querySelector('.massages-select')
  function checkKytu(){
    massagesInputs.forEach(function(ele){
      ele.addEventListener('blur',function(){
       var checkMassages = ele.parentElement.querySelector('.check-error');
       
         if(!ele.value){           
           checkMassages.innerText=`chưa nhập dữ liệu`
         }else{    
          checkMassages.innerText=` `;
         }
       
             
   })
 })
 
   }
    
      username.addEventListener('blur',function(){
        console.log(username.parentElement.querySelector('.check-error'))
        checkUsername()
        })    
        function checkUsername(){
          if(username.value < 3){
            username.parentElement.querySelector('.check-error').innerText=`tối thiểu 3 ký tự`
           }else{
            username.parentElement.querySelector('.check-error').innerText=``
            return true;
           }
           
        }
   
    phone.addEventListener('blur',function(){
          console.log(username.parentElement.querySelector('.check-error'))
          checkPhone()
    })
    function checkPhone(){
      if(isNaN(phone.value)){
        phone.parentElement.querySelector('.check-error').innerText=`nhập sai ký tự`
       }else if(!phone.value){
        phone.parentElement.querySelector('.check-error').innerText=`chưa nhập dữ liệu`
       }else{
        phone.parentElement.querySelector('.check-error').innerText=``;
        return true;
       }
       
    }
    var massagesFormBtn=document.querySelector('.massages-form-btn')
       Form.addEventListener('submit',function(e){
           e.preventDefault();
           checkKytu();
          
         let checkUsernames=checkUsername();
         let checkPhones= checkPhone()
       if(checkPhones && checkUsernames && checkbox.checked){
        console.log('ducdz')
        loatAll.classList.remove('an')
           setTimeout(function(){
             loatAll.classList.add('an')
          },1000)
          massagesForm.classList.add('xoa')
       }
})
var translateWeb=document.querySelector('.translate-web a')

          function translates(){
              console.log('ducdz')
          }
  
       setInterval(function(){
        translates()
       },1000)

   
     

 