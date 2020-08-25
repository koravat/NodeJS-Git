var i,h,m,Open,Close;

var firebaseRefT = firebase.database().ref("StoreDes/b91PbnxQRdUyVCbNV11XUrVJln02");
firebaseRefT.once('value').then(function(dataSnapshot){
Open=dataSnapshot.child('Open').val();
Close=dataSnapshot.child('Close').val();
});

function timeNow() {
  var d = new Date(),
    h = (d.getHours()<10?'0':'') + d.getHours(),
    m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    i = h + ':' + m;
    console.log(i);
    
}




var tableAll=[];
var counttable=0;
var syntax =[" ","*","/","+","-","=","(",")","_","&","%","@","#","%","!","฿",">","<","?","(",")","|","{","}","[","]"];
var ber =["0","1","2","3","4","5","6","7","8","9"];
      $(document).ready(function(){
        var firebaseRef=firebase.database().ref("Booking/Aoudom");
        firebaseRef.once('value').then(function(dataSnapshot){
              dataSnapshot.forEach(function(childSnapshot){
              var childKey = childSnapshot.key;
              var tableRef=firebase.database().ref("Booking/Aoudom/"+ childKey+"/table");
             tableRef.once('value').then(function(dataSnapshot){
              dataSnapshot.forEach(function(childSnapshot){
              var childData = childSnapshot.val();
              $("#"+childData).attr("src" ,"Aoudom-3D-Pic/true.png");
              tableAll.push(childData);
              });
            });
            });
          });

      });
      $('#Book').ready(function(){
      var style1=`style="margin-top: 10px;"`;
      var a = `
      <div class="block-main1" >
        <div class="block-1" >`;


          for(var i=1 ;i<=3;i++)
            {
              a=a+ `<img src= Aoudom-3D-Pic/s`+i+`.png id = s`+i+` onclick=changePic1(this.id) width= 35 height=35`+style1+`>`;
              a=a+ `<br>`;
            }
        a=a+`</div><div class="block-2">`;

          for(var i=4 ;i>=1;i--)
            {
              a=a+ `<img src= Aoudom-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35 `+style1+`>`;
              a=a+ `<br>`;
            }
        a=a+`
        </div>
        <div class="block-3">`;

          for(var i=5 ;i<=8;i++)
            {
              a=a+ `<img src= Aoudom-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35 `+style1+`>`;
              a=a+ `<br>`;
            }
        a=a+`
        </div>
        <br>
        <div class="block-5">`;

            a=a+`<img src= Aoudom-3D-Pic/9.png id = '9' onclick=changePic1(this.id) width= 35 height=35 `+style1+`>`;
      a=a+`
        </div>
      </div >

      <div class=" block-main2" >`

        var style2=`style="margin-top: 10px;margin-left: 10px;"`;
        var count=10;
          for(var i=0 ;i<4;i++)
            {
              for(var j=0 ;j<2;j++)
              {
                a=a+`<img src= Aoudom-3D-Pic/`+count+`.png id = `+count+` onclick=changePic1(this.id) width= 35 height=35 `+style2+`>`;
                count=count+1;
              }
              a=a+`<br>`;
            }
            a=a+`
      </div>
      <div class="block-main3">
        <div>`;

          var style3=`style="margin-left: 60px;"`;
          var count=24;
            a=a+`<img src= Aoudom-3D-Pic/`+count+`.png id ='`+count+`' onclick=changePic1(this.id) width= 35 height=35 >`;
                count=count+1;
            a=a+`<img src= Aoudom-3D-Pic/`+count+`.png id = '`+count+`' onclick=changePic1(this.id) width= 35 height=35 `+style3+`>`;
              a=a+`<br>`;

        a=a+`
        </div>
        <div class="block-6">`;

            a=a+`<img src= Aoudom-3D-Pic/2311.png id = '2311' onclick=changePic1(this.id) width= 35 height=35 >`;
        a=a+`
        </div>
        <br>
        <br>
        <br>
        <div>`;


              a=a+`<img src= Aoudom-3D-Pic/26.png id = '26' onclick=changePic1(this.id) width= 35 height=35 >`;

              a=a+`<img src= Aoudom-3D-Pic/36.png id = '36' onclick=changePic1(this.id) width= 35 height=35 `+style3+`>`;

              a=a+`<br>`;

a=a+`
        </div>
        <br>
        <br>
        <div>`;
          var count=27;
          var style4=`style="margin-left: 10px;margin-top: 10px;"`;
          for(var i=0 ;i<3;i++)
            {
              for(var j=0 ;j<3;j++)
              {
                a=a+`<img src= Aoudom-3D-Pic/`+count+`.png id = '`+count+`' onclick=changePic1(this.id) width= 35 height=35 `+style4+`>`;
                count=count+1;
              }
              a=a+`<br>`;
            }
        a=a+`
        </div>
        <br>
        <br>

        <div>`;

          var count=18;
          var style5=`style="margin-left: 10px;margin-top: 10px;"`;
          for(var i=0 ;i<2;i++)
            {
              for(var j=0 ;j<3;j++)
              {
                a=a+`<img src= Aoudom-3D-Pic/`+count+`.png id = '`+count+`' onclick=changePic1(this.id) width= 35 height=35 `+style5+`>`;
                count=count+1;
              }
              a=a+`<br>`;
            }
          a=a+`
        </div>
      </div>
      <div class="block-main4">`

          for(var i=2511 ;i<=2512;i++)
            {
              a=a+ `<img src= Aoudom-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35 `+style1+`>`;
              a=a+`<br>`;
            }
            a=a+`<br>`;
          for(var i=37 ;i<=39;i++)
            {
              a=a+ `<img src= Aoudom-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35 `+style1+`>`;
              a=a+`<br>`;
              a=a+`<br>`;
            }
    a=a+`
      </div>
      <div class="block-main5">`;

        var count=40;
        var style6='style="margin-left: 30px;margin-top: 15px;"';
        for(var i=0 ;i<5;i++)
          {
            for(var j=0 ;j<4;j++)
            {
            a=a+`<img src= Aoudom-3D-Pic/`+count+`.png id = '`+count+`' onclick=changePic1(this.id) width= 35 height=35 `+style6+`>`;
              count=count+1;
            }
              a=a+`<br>`;
          }
          a=a+`
      </div>
      <div class="block-main6">
        <div>`;


          var style7='style="margin-top: 5px;"';
          a=a+`<img src= Aoudom-3D-Pic/64.png id = '64' onclick=changePic1(this.id) width= 35 height=35 `+style7+`>`;

a=a+`
        </div>
        <br>
        <div>`;


              for(var j=63 ;j>=62;j--)
              {

                a=a+ `<img src= Aoudom-3D-Pic/`+j+`.png id = '`+j+`' onclick=changePic1(this.id) width= 35 height=35 `+style1+`>`;
                  a=a+`<br>`;
              }


    a=a+`
        </div>
        <br>
        <div >`

              for(var j=61 ;j>=60;j--)
              {
                a=a+ `<img src= Aoudom-3D-Pic/`+j+`.png id = '`+j+`' onclick=changePic1(this.id) width= 35 height=35 `+style1+`>`;
                  a=a+`<br>`;
              }
        a=a+`
        </div>

      </div>
      <div class="block-7">`;

              a=a+`<img src= Aoudom-3D-Pic/65.png id = '65' onclick=changePic1(this.id) width= 35 height=35 >`;
            a=a+`<br>

      </div>`;

      $('#Book').append(a);
});
      function changePic(id)
      {
        var state=1;
        var i;
        for(i=0;i<tableAll.length;i++)
        {
          if(id==tableAll[i])
          {
            state=0;
          }
        }
        if ($("#"+id).attr("src")==="Aoudom-3D-Pic/true.png" && state==1 )
        {
           $("#"+id).attr("src" ,"Aoudom-3D-Pic/"+id+".png");
           counttable--;
        }
        else
        {
         $("#"+id).attr("src" ,"Aoudom-3D-Pic/true.png");
         counttable++;
        }
      }
      function changePic1(id)
      {
        var state=1;
        var i;
        for(i=0;i<tableAll.length;i++)
        {
          if(id==tableAll[i])
          {
            state=0;
          }
        }
        if ($("#"+id).attr("src")==="Aoudom-3D-Pic/true.png" && state==1 )
        {
           $("#"+id).attr("src" ,"Aoudom-3D-Pic/"+id+".png");
           counttable--;
        }
        else
        {
         $("#"+id).attr("src" ,"Aoudom-3D-Pic/true.png");
         counttable++;
        }
      }

      function changePic2()
      {
        timeNow();
        
        var name =  $('#name').val();
        var number = $('#phone').val();
        
        var i , count  = 1;
       
        if (name!="" && number!="" && counttable>0) 
        {
          if (number.length == 10) 
          {
            if(number[0]=="0")
            {
              for (var i = 0; i < number.length; i++) 
              {
                if(!ber.includes(number[i]))
                {
                  swal("Please Enter Your Phone Number!!");
                  return 0;
                }
              }
              for (var i = 0; i < name.length; i++) 
              {
                if(syntax.includes(name[i]))
                {
                  swal("Please Enter Your Name!!");
                  return 0;
                }
              }
            }
            else
            {
              swal("Please Enter Your Phone Number!!")
              return 0;
            }
          }
          else
          {
            swal("Please Enter Your Phone Number!!")
            return 0;
          }
          var firebaseRef=firebase.database().ref("Booking/Aoudom").push({
          name:name,
          phone:number});
          
        }
        else
        {
          if(name=="")
          {
            swal("Please Enter Your Name!!");
            return 0;
          }
          if(number==""||number[0]!=0||number.length!=10)
          {
            swal("Please Enter Your Phone number!!");
            return 0;
          }
          if(counttable<=0)
          {
            swal("Please Select table!!");
            return 0;
          }
        }
        var check=0;
        
        var tablecount="";
        var firebaseRef2 = firebase.database().ref("Booking/Aoudom/"+ firebaseRef.getKey() + "/table");
        var firebaseRef3 = firebase.database().ref("Booking/Aoudom/"+ firebaseRef.getKey() + "/tablename");
        
        for(i=1;i<=65;i++)
        {
            if ($("#"+i).attr("src")==="Aoudom-3D-Pic/true.png")
            {
              
               if(!tableAll.includes(i))
               {
                firebaseRef2.child(count).set(i);
                check=1;
                if(tablecount!="")
                {
                  tablecount=tablecount+", "+i;
                }
                else
                {
                  tablecount=tablecount+i;
                }
                
                count++;
               }
               

            }
        }
        for(i=1;i<=3;i++)
        {
             if ($("#"+i).attr("src")==="Aoudom-3D-Pic/true.png")
            {
               
               if(!tableAll.includes(i))
               {
                firebaseRef2.child(count).set(i);
                check=1;
               count++;
              if(tablecount!="")
                {
                  tablecount=tablecount+",s"+i;
                }
                else
                {
                  tablecount=tablecount+"s"+i;
                }
               }
            }
        }
        
         if ($("#2311").attr("src")==="Aoudom-3D-Pic/true.png")
            {
               
               if(!tableAll.includes(2311))
               {
                firebaseRef2.child(count).set(2311);
                check=1;
               count++;
               if(tablecount!="")
                {
                  tablecount=tablecount+","+"23/1";
                }
                else
                {
                  tablecount=tablecount+"23/1";
                }
               }
            }
             if ($("#2511").attr("src")==="Aoudom-3D-Pic/true.png")
            {
               
               if(!tableAll.includes(2511))
               {
                firebaseRef2.child(count).set(2511);
                check=1;
               count++;if(tablecount!="")
                {
                  tablecount=tablecount+","+"25/1";
                }
                else
                {
                  tablecount=tablecount+"25/1";
                }
               }
               

            }
        if ($("#2512").attr("src")==="Aoudom-3D-Pic/true.png")
        {
               
               if(!tableAll.includes(2512))
               {
                firebaseRef2.child(count).set(2512);
                check=1;
               count++;
               if(tablecount!="")
                {
                  tablecount=tablecount+","+"25/2";
                }
                else
                {
                  tablecount=tablecount+"25/2";
                }
               }
        }
        if ($("#3911").attr("src")==="Aoudom-3D-Pic/true.png")
        {
             
              
               if(!tableAll.includes(3911))
               {
                firebaseRef2.child(count).set(3911);
                check=1;
               count++;
               if(tablecount!="")
                {
                  tablecount=tablecount+","+"39/1";
                }
                else
                {
                  tablecount=tablecount+"39/1";
                }
               }
        }
        firebaseRef3.set(tablecount);
        if(check==1)
        {
          swal("Thankyou!", "Your table was booked!", "success");
        }
        location.reload();
      }
      
      





      