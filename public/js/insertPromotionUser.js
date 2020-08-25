$('#insertPromo').ready(function() {
  var firebaseRef = firebase.database().ref("Promotion");
  // var description, title ,start , end;
  firebaseRef.once('value').then(function(dataSnapshot) {
      dataSnapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          // console.log(childKey);
          var tableRef = firebase.database().ref("Promotion/"+childKey);
          var data = { desc: "car" , title: "car" , start: "car" , end: "car" , uid: "car"}
          var dataE={day:"car",month:"car",year:"car"}
          var dataS={day:"car",month:"car",year:"car"}
          tableRef.once('value').then(function(dataSnapshot) {
               dataSnapshot.forEach(function(childSnapshot) {
                  if(childSnapshot.key=== 'uid')
                 {
                   data.uid = childSnapshot.val();
                   
                 }
                  if(childSnapshot.key ==='desc')
                 {
                   data.desc = childSnapshot.val();
                   // console.log(data.des);
                 }
                 if(childSnapshot.key === 'title')
                 {
                   data.title = childSnapshot.val();
                 }
                 if (childSnapshot.key === 'start')
                 {
                  var childKeyS = childSnapshot.key;
                  

                  var tableRefStart = firebase.database().ref("Promotion/"+childKey +"/"+ childKeyS);
                    tableRefStart.once('value').then(function(dataSnapshot) {
                      dataSnapshot.forEach(function(childSnapshot) {
                      if(childSnapshot.key === 'day')
                      {
                        dataS.day = childSnapshot.val();
                      }
                      if(childSnapshot.key === 'month')
                      {
                        dataS.month = childSnapshot.val();
                      }
                      if(childSnapshot.key === 'year')
                      {
                        dataS.year = childSnapshot.val();
                      }
                        
                                     });
                                    });
                     
                      }
                 if (childSnapshot.key === 'end') 
                 {
                    var childKeyE = childSnapshot.key;
                    
                  var tableRefStart = firebase.database().ref("Promotion/"+childKey +"/"+ childKeyE);
                    tableRefStart.once('value').then(function(dataSnapshot) {
                      dataSnapshot.forEach(function(childSnapshot) {
                      if(childSnapshot.key === 'day')
                      {
                        dataE.day = childSnapshot.val();
                      }
                      if(childSnapshot.key === 'month')
                      {
                        dataE.month = childSnapshot.val();
                      }
                      if(childSnapshot.key === 'year')
                      {
                        dataE.year = childSnapshot.val();
                      }
                      
                        
                                     });
                                    });
                 }
               });
               if(data.uid==55555)
               {
                  var storageRef = firebase.storage().ref('Aoudom/Promotion');
             storageRef.child(childKey).getDownloadURL().then(function(url) {
                 var test = url;

                 var promoCard1 =
               `<div class="col-md-4 p-3">
              <img class="img-fluid d-block w-100 mb-3" src="`+test+`" id="img">`;

                var titleInsert = ` <p class="lead mb-1 text-warning" >`+data.title+`</p>`;
                var desInsert = `<p class="mb-3 text-warning">`+ data.desc+`</p>`;
                var h=`<p class="text-warning">`+"START : "+dataS.day+"/"+dataS.month+"/"+dataS.year+`</p>`;
                var g=`<p class="text-warning">`+"END : "+dataE.day+"/"+dataE.month+dataE.year+"/"+`</p>
                </div>`;
            var insert = promoCard1+titleInsert+desInsert+h+g;

            $('#insertPromo').append(insert);

             }).catch(function(error) {

             });
               }

           });
      });
  });
});