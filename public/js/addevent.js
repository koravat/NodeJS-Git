
function addevent(){
	var title1 = $('#title').val();
	var description = $('#desc').val();
	var start = $('#datepickerS').val();
	var end = $('#datepickerE').val();
	var user = firebase.auth().currentUser;
	var uid;
	var check1 = start.split("/");
	var check2 = end.split("/");
	var check3 = 0;
	var check4 = 0;

	if (user)
	{
  		uid = user.uid;
  		// console.log("Login")
	}
	// else
	// {
	// 	console.log("Not Login")
	// }

	if(title1=="")
	{
		swal("Please Enter Title!!");
		return 0;
	}
	else if(title1!="")
	{
		for(i=0;i<title1.length;i++)
		{
			if(title1[i]!=" ")
			{
				check3=1;
				break;
			}
		}
	}
	if(check3==0)
	{
		swal("Please Enter Title!!");
		return 0;
	}
	if(description=="")
	{
		swal("Please Enter Description!!");
		return 0;
	}
	else if(description!="")
	{
		for(i=0;i<description.length;i++)
		{
			if(description[i]!=" ")
			{
				check4=1;
				break;
			}
		}
	}
	if(check4==0)
	{
		swal("Please Enter description!!");
		return 0;
	}
	if(start=="")
	{
		swal("Please Enter StartDay!!");
		return 0;
	}
	if(end=="")
	{
		swal("Please Enter EndDay!!");
		return 0;
	}
	if( document.getElementById("img").files.length == 0 )
	{
		swal("Please Upload Picture!!");
		return 0;
	}
	
	var fileInput = document.getElementById('img');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        swal("Please Upload Picture!!");
        fileInput.value = '';
        return 0;
    }
	if(title1!=""&&description!=""&&start!=""&&end!="")
	{
		// console.log(title1)
		// console.log(description)
		// console.log(start)
		// console.log(end)
		if(check1[2]<check2[2])
		{
			swal("Add Event Success!", "", "success").then((result) => {
                if (result.value) {
                    storeProfile(uid);
                }
                else{
                    storeProfile(uid);
                }
            });
			var firebaseRef=firebase.database().ref("Event").push({
			title : title1 ,
			desc : description ,
			start : start,
			end : end,
			uid : uid
			});
			var storageRef = firebase.storage().ref("Event/"+firebaseRef.getKey());
			storageRef.put(document.getElementById("img").files[0]);
		}
		else if(check1[2]>check2[2])
		{
			swal("Invalid Year!!");
			return 0;
		}
		else if(check1[2]<=check2[2]&&check1[1]>check2[1])
		{
			swal("Invalid Month!!");
			return 0;
		}
		else if(check1[2]<=check2[2]&&check1[1]<=check2[1]&&check1[0]>check2[0])
		{
			swal("Invalid Day!!");
			return 0;
		}
		else if(check1[2]<=check2[2]&&check1[1]<=check2[1]&&check1[0]<=check2[0])
		{
			swal("Add Event Success!", "", "success").then((result) => {
                if (result.value) {
                    storeProfile(uid);
                }
                else{
                    storeProfile(uid);
                }
            });
			var firebaseRef=firebase.database().ref("Event").push({
			title : title1 ,
			desc : description ,
			start : start,
			end : end,
			uid : uid
			});
			var storageRef = firebase.storage().ref("Event/"+firebaseRef.getKey());
			storageRef.put(document.getElementById("img").files[0]);
		}
	}
}