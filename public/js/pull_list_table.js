function delOnClick_aou(Delkey){
  var firebaseRef=firebase.database().ref("Booking/Aoudom/" + Delkey);
  firebaseRef.remove();
  location.reload();
}

function DelAll_aou ()
{
	swal({
		title: "Are you sure?",
		text: "You will not be able to recover this imaginary seat!",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: '#DD6B55',
		confirmButtonText: 'Yes, delete it!',
		closeOnConfirm: false,
		//closeOnCancel: false
	},
	function() {
    swal("Deleted!", "Your imaginary seat has been deleted!", "success");
    var firebaseRef=firebase.database().ref("Booking/Aoudom/");
    firebaseRef.remove();
    location.reload();
	});
};

function delOnClick_sip(Delkey){
  var firebaseRef=firebase.database().ref("Booking/Sipsamhang/" + Delkey);
  firebaseRef.remove();
  location.reload();
}
function DelAll_sip(){
	swal({
		title: "Are you sure?",
		text: "You will not be able to recover this imaginary seat!",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: '#DD6B55',
		confirmButtonText: 'Yes, delete it!',
		closeOnConfirm: false,
		//closeOnCancel: false
	},
	function(){
    swal("Deleted!", "Your imaginary seat has been deleted!", "success");
    var firebaseRef=firebase.database().ref("Booking/Sipsamhang/");
    firebaseRef.remove();
    location.reload();
	});
};

$('#AoudomTable').ready(
  function(){
  var firebaseRef=firebase.database().ref("Booking/Aoudom");
  var num = 1;
  firebaseRef.once('value').then(function(dataSnapshot){
        dataSnapshot.forEach(function(childSnapshot){
        var childKey = childSnapshot.key;
        var tableRef=firebase.database().ref("Booking/Aoudom/"+ childKey);
        var data = { name: "car" , phone: "car" , tablename: "car"}

        tableRef.once('value').then(function(dataSnapshot){
            dataSnapshot.forEach(function(childSnapshot){
                if(childSnapshot.key ==='name')
                  {
                    data.name = childSnapshot.val();
   
                  }
                  if(childSnapshot.key === 'phone')
                  {
                    data.phone = childSnapshot.val();
                 
                  }
                  if(childSnapshot.key === 'tablename')
                  {
                    data.tablename = childSnapshot.val();
                   
                  }
        });
            var AoudomTable = 
            `<tr>
              <td>`+(num++)+`</td>
              <td>`+data.name+`</td>
              <td>`+data.phone+`</td>
              <td>`+data.tablename+`</td>
              <td> <button class="ui yellow button" type="button" value= `+childKey+ ` onclick="delOnClick_aou(this.value)">CANCLE</button></td>
            </tr>
          `
          $('#AoudomTable').append(AoudomTable);
      });
      });
    });

});

$('#SipsamhangTable').ready(
  function(){
  var firebaseRef=firebase.database().ref("Booking/Sipsamhang");
  var num = 1;
  firebaseRef.once('value').then(function(dataSnapshot){
        dataSnapshot.forEach(function(childSnapshot){
        var childKey = childSnapshot.key;
        var tableRef=firebase.database().ref("Booking/Sipsamhang/"+ childKey);
        var data = { name: "car" , phone: "car" , tablename: "car"}

        tableRef.once('value').then(function(dataSnapshot){
            dataSnapshot.forEach(function(childSnapshot){
                if(childSnapshot.key ==='name')
                  {
                    data.name = childSnapshot.val();
                    // console.log(data.des);
                  }
                  if(childSnapshot.key === 'phone')
                  {
                    data.phone = childSnapshot.val();
                  }
                  if(childSnapshot.key === 'tablename')
                  {
                    data.tablename = childSnapshot.val();
                  }
        });
            var SipsamhangTable = 
            `<tr>
              <td>`+(num++)+`</td>
              <td>`+data.name+`</td>
              <td>`+data.phone+`</td>
              <td>`+data.tablename+`</td>
              <td> <button class="ui yellow button" type="button" value= `+childKey+ ` onclick="delOnClick_sip(this.value)">CANCLE</button></td>
            </tr>
          `
          $('#SipsamhangTable').append(SipsamhangTable);
      });
      });
    });

});