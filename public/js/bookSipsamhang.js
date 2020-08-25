var i,h,m,Open,Close;

var firebaseRefT = firebase.database().ref("StoreDes/Ce0oG5rdjKY9phcj5LsKrkYcNWM2");
firebaseRefT.once('value').then(function(dataSnapshot){
Open=dataSnapshot.child('Open').val();
Close=dataSnapshot.child('Close').val();
});

function timeNow() {
  var d = new Date(),
    h = (d.getHours()<10?'0':'') + d.getHours(),
    m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    i = h + ':' + m;
}



var tableAll=[];
var counttable=0;
var syntax =[" ","*","/","+","-","=","(",")","_","&","%","@","#","%","!","฿",">","<","?","(",")","|","{","}","[","]"];
var ber =["0","1","2","3","4","5","6","7","8","9"];
      $(document).ready(function(){
        var firebaseRef=firebase.database().ref("Booking/Sipsamhang");
        firebaseRef.once('value').then(function(dataSnapshot){
              dataSnapshot.forEach(function(childSnapshot){
              var childKey = childSnapshot.key;
              var tableRef=firebase.database().ref("Booking/Sipsamhang/"+ childKey+"/table");
             tableRef.once('value').then(function(dataSnapshot){
              dataSnapshot.forEach(function(childSnapshot){
              var childData = childSnapshot.val();
              $("#"+childData).attr("src" ,"Sipsamhang-3D-Pic/true.png");
              tableAll.push(childData);
              });
            });
            });
          });

      });
      $('#Book').ready(function(){
        var b;
        b=`<div class="block-main1">

            <img src=Sipsamhang-3D-Pic/45.png id = '45' onclick=changePic1(this.id) width= 35 height=35>
            <br>
        </div>
        <div class="block-main2">`;
            for(var i=41;i<=44;i++)
            {
              b=b+`<img src= Sipsamhang-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35>
              <br><br>`;
              
            }
        b=b+`</div>
        <div class="block-main2">`;
            for(var i=37;i<=40;i++)
            {
              b=b+`<img src= Sipsamhang-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35>
              <br><br>`;
            }
            b=b+`</div>
            <div class="block-main2">`;
            for(var i=34;i<=36;i++)
            {
              b=b+`<img src= Sipsamhang-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35>
              <br><br>`;
            }
            b=b+`</div>
            <div class="block-main2">`;
            for(var i=29;i<=33;i++)
            {
              b=b+`<img src= Sipsamhang-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35>
              <br><br>`;
            }
            b=b+`</div>
            <div class="block-main3">`;
            for($i=26;$i<=28;$i++)
            {
              b=b+`<img src= Sipsamhang-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35>
              <br><br>`;
            }
            b=b+`</div>
            <div class="block-main3">`;
            for(var i=23;i<=25;i++)
            {
              b=b+`<img src= Sipsamhang-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35>
              <br><br>`;
            }
            b=b+`</div>
            <div class="block-main3">`;
            for(var i=20;i<=22;i++)
            {
              b=b+`<img src= Sipsamhang-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35>
              <br><br>`;
            }b=b+`</div>
            <div class="block-main3">`;
            for(var i=17;i<=19;i++)
            {
              b=b+`<img src= Sipsamhang-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35>
              <br><br>`;
            }b=b+`</div>
            <div class="block-main3">`;
            for(var i=14;i<=16;i++)
            {
              b=b+`<img src= Sipsamhang-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35>
              <br><br>`;
            }
            b=b+`
        </div>
        <div class="block-main4">
          <br>

          `;
            for(var i=10;i<=13;i++)
            {
              b=b+`<img src= Sipsamhang-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35>
              <br><br>`;
            }b=b+`
        </div>
        <div class="block-main4">`;
            for(var i=5;i<=9;i++)
            {
              b=b+`<img src= Sipsamhang-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35>
              <br><br>`;
            }b=b+`
        </div>
        <div class="block-main4">
          <br>

          `;
            for(var i=1;i<=4;i++)
            {
              b=b+`<img src= Sipsamhang-3D-Pic/`+i+`.png id = '`+i+`' onclick=changePic1(this.id) width= 35 height=35>
              <br><br>`;
            }
            b=b+`
        </div>
      </div>
      </div>`;

      $('#Book').append(b);
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
        if ($("#"+id).attr("src")==="Sipsamhang-3D-Pic/true.png" && state==1 )
        {
           $("#"+id).attr("src" ,"Sipsamhang-3D-Pic/"+id+".png");
           counttable--;
        }
        else
        {
         $("#"+id).attr("src" ,"Sipsamhang-3D-Pic/true.png");
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
        if ($("#"+id).attr("src")==="Sipsamhang-3D-Pic/true.png" && state==1 )
        {
           $("#"+id).attr("src" ,"Sipsamhang-3D-Pic/"+id+".png");
           counttable--;
        }
        else
        {
         $("#"+id).attr("src" ,"Sipsamhang-3D-Pic/true.png");
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
          if (number.length == 10 ) 
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
          var firebaseRef=firebase.database().ref("Booking/Sipsamhang").push({
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
        var firebaseRef2 = firebase.database().ref("Booking/Sipsamhang/"+ firebaseRef.getKey() + "/table");
        var firebaseRef3 = firebase.database().ref("Booking/Sipsamhang/"+ firebaseRef.getKey() + "/tablename");
        for(i=1;i<=65;i++)
        {
            if ($("#"+i).attr("src")==="Sipsamhang-3D-Pic/true.png")
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
        
        firebaseRef3.set(tablecount);
        if(check==1)
        {
          swal("Thankyou!", "Your table was booked!", "success");
        }
        location.reload();
        }
        
