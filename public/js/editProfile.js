var sizeFalse1,sizeFalse2,sizeFalse3;
$(document).ready(function(){

	var _URL = window.URL || window.webkitURL;

	$('#img').change(function () {
		var file  =  $(this)[0].files[0];

		img = new Image();
		var imgwidth = 0;
		var imgheight = 0;
		var maxwidth = 80;
		var maxheight = 80;
		var minwidth = 15;
		var minheight = 15;

		img.src = _URL.createObjectURL(file);
		img.onload = function() {
			imgwidth = this.width;
			imgheight = this.height;
			
			$("#width").text(imgwidth);
			$("#height").text(imgheight);
			if(imgwidth <= maxwidth && imgheight <= maxheight && imgwidth >= minwidth  && imgheight >= minheight ){
				
				var formData = new FormData();
				formData.append('fileToUpload', $('#img')[0].files[0]);
				sizeFalse1=0;
				$.ajax({
					url: 'upload_image.php',
					type: 'POST',
					data: formData,
					processData: false,
					contentType: false,
					dataType: 'json',
					success: function (response) {
						if(response.status == 1){
							// Setting Image for Preview
							$("#prev_img").attr("src","upload/"+response.returnText);
							$("#prev_img").show();
							$("#response").text("Upload successfully");
						}else{
							$("#response").text(response.returnText);
						} 
					}
				});
			}else
			{
				swal("Image size must be \n"+maxwidth+"X"+maxheight+" between " +minwidth +"x"
				+ minheight ) ;
				sizeFalse1=1;
			}
		};
		img.onerror = function() {             
			$("#response").text("not a valid file: " + file.type);
		}

    });
    $('#img2').change(function () {
		var file  =  $(this)[0].files[0];

		img = new Image();
		var imgwidth = 0;
		var imgheight = 0;
		var maxwidth = 1500;
		var maxheight = 1000;
		var minwidth = 1024;
		var minheight = 640;

		img.src = _URL.createObjectURL(file);
		img.onload = function() {
			imgwidth = this.width;
			imgheight = this.height;
			
			$("#width").text(imgwidth);
			$("#height").text(imgheight);
			if(imgwidth <= maxwidth && imgheight <= maxheight && imgwidth >= minwidth  && imgheight >= minheight ){
				
				var formData = new FormData();
				formData.append('fileToUpload', $('#img')[0].files[0]);
				sizeFalse2=0;
				$.ajax({
					url: 'upload_image.php',
					type: 'POST',
					data: formData,
					processData: false,
					contentType: false,
					dataType: 'json',
					success: function (response) {
						if(response.status == 1){
							// Setting Image for Preview
							$("#prev_img").attr("src","upload/"+response.returnText);
							$("#prev_img").show();
							$("#response").text("Upload successfully");
						}else{
							$("#response").text(response.returnText);
						} 
					}
				});
			}else
			{
				swal("Image size must be \n"+maxwidth+"X"+maxheight+" between " +minwidth +"x"
				+ minheight ) ;
				sizeFalse2=1;
			}
		};
		img.onerror = function() {             
			$("#response").text("not a valid file: " + file.type);
		}

    });
    $('#img3').change(function () {
		var file  =  $(this)[0].files[0];

		img = new Image();
		var imgwidth = 0;
		var imgheight = 0;
		var maxwidth = 1500;
		var maxheight = 1000;
		var minwidth = 1024;
		var minheight = 640;

		img.src = _URL.createObjectURL(file);
		img.onload = function() {
			imgwidth = this.width;
			imgheight = this.height;
			
			$("#width").text(imgwidth);
			$("#height").text(imgheight);
			if(imgwidth <= maxwidth && imgheight <= maxheight && imgwidth >= minwidth  && imgheight >= minheight ){
				
				var formData = new FormData();
				formData.append('fileToUpload', $('#img')[0].files[0]);
				sizeFalse3=0;
				$.ajax({
					url: 'upload_image.php',
					type: 'POST',
					data: formData,
					processData: false,
					contentType: false,
					dataType: 'json',
					success: function (response) {
						if(response.status == 1){
							// Setting Image for Preview
							$("#prev_img").attr("src","upload/"+response.returnText);
							$("#prev_img").show();
							$("#response").text("Upload successfully");
						}else{
							$("#response").text(response.returnText);
						} 
					}
				});
			}else
			{
				swal("Image size must be \n"+maxwidth+"X"+maxheight+" between " +minwidth +"x"
				+ minheight ) ;
				sizeFalse3=1;
			}
		};
		img.onerror = function() {             
			$("#response").text("not a valid file: " + file.type);
		}

	});
});

function goBack() {
    window.history.back();
}

function check_null_key(params) {
    if(params == null || params == ''){ 
        goBack()
    } 
}

// key is UID post from setting button
var Eng=['A','B','C','D','E','F','G','H','I','K','J','L','M','N','O','P','Q','R','S','T','U','V','W','S','Y','Z',
     'a','b','c','d','e','f','g','h','i','k','j','l','m','n','o','p','q','r','s','t','u','v','w','s','y','z',' '];
var check=0;
var check1=0;
var check2=0;
var check3=0;
var key
var ber =["0","1","2","3","4","5","6","7","8","9"];
$('.container').ready(function() {
    key = $('#key').val();
    check_null_key(key)

    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        // No User is signed in.  
        $( "#main-top-contact").show();
        $( "#main-top-bar" ).hide();
      }
      else{
        // User is signed in.
        $( "#main-top-contact" ).hide();
        $( "#main-top-bar").show();

        var uid=user.uid;
        var storageRef = firebase.storage().ref("Head/"+key+"_2.png");
        storageRef.getDownloadURL().then(function(url) {
        $("#blah").attr("src", url);
        }).catch(function(error) {
        });
        var storageRef = firebase.storage().ref("Head/"+key+"_1.png");
        storageRef.getDownloadURL().then(function(url) {
        $("#blah2").attr("src", url);
        }).catch(function(error) {
        });
        var storageRef = firebase.storage().ref("Picture/"+key+"_.png");
        storageRef.getDownloadURL().then(function(url) {
        $("#blah3").attr("src", url);
        }).catch(function(error) {
        });
        var firebaseRef = firebase.database().ref("StoreDes/"+key);
        firebaseRef.once('value').then(function(dataSnapshot){
        $('#Storenameeng').val(dataSnapshot.child('Storenameeng').val());
        $('#Storenameth').val(dataSnapshot.child('Storenameth').val());
        $('#Address').val(dataSnapshot.child('Address').val());
        $('#Phone').val(dataSnapshot.child('Phone').val());
        $('#Poem').val(dataSnapshot.child('Poem').val()); 
	    $('#OpenTime').val(dataSnapshot.child('Open').val());
        $('#CloseTime').val(dataSnapshot.child('Close').val());
             
    });
      }
    });
});

function editProfile(){
    var storenameeng = $('#Storenameeng').val();
	var storenameth = $('#Storenameth').val();
	var address = $('#Address').val();
    var phone = $('#Phone').val();
    var poem = $('#Poem').val();
    var open = $('#OpenTime').val();
    var close = $('#CloseTime').val();

    

    if(storenameeng=="")
    {
        swal("Please Enter English Store Name!!");
		return 0;
    }
    else if(storenameeng!="")
	{
		for(var i=0;i<storenameeng.length;i++)
		{
			if(storenameeng[i]!=" ")
			{
				check3=1;
				break;
			}
        }
        for(var i=0;i<storenameeng.length;i++)
        {
            if(!Eng.includes(storenameeng[i]))
            {
                swal("Please Enter English Store Name!!");
		        return 0;
            }
        }
	}
    if(check3==0)
	{
		swal("Please Enter English Store Name!!");
		return 0;
	}
    if(storenameth=="")
    {
        swal("Please Enter Thai Store Name!!");
		return 0;
    }
    else if(storenameth!="")
	{
		for(var i=0;i<storenameth.length;i++)
		{
			if(storenameth[i]!=" ")
			{
				check2=1;
				break;
			}
        }
        for(var i=0;i<storenameth.length;i++)
        {
            if(Eng.includes(storenameth[i]) || storenameth[i]==' ')
            {
                swal("Please Enter Thai Store Name!!");
		        return 0;
            }
        }
	}
    if(check2==0)
	{
		swal("Please Enter Thai Store Name!!");
		return 0;
	}
    if(address=="")
    {
        swal("Please Enter Store Address!!");
		return 0;
    }
    else if(address!="")
	{
		for(var i=0;i<address.length;i++)
		{
			if(address[i]!=" ")
			{
				check=1;
				break;
			}
		}
	}
	if(check==0)
	{
		swal("Please Enter Store Address!!");
		return 0;
	}
    if(phone=="")
    {
        swal("Please Enter Store Phone Number!!");
		return 0;
    }
    if (phone.length == 10) 
    {
        if(phone[0]=="0")
        {
            for (var i = 0; i < phone.length; i++) 
            {
                if(!ber.includes(phone[i]))
                {
                    swal("Please Enter Your Phone Number!!");
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
    if(poem=="")
    {
        swal("Please Enter Store Poem!!");
		return 0;
    }
    else if(poem!="")
	{
		for(var i=0;i<poem.length;i++)
		{
			if(poem[i]!=" ")
			{
				check1=1;
				break;
			}
		}
    }
    if(check1==0)
	{
		swal("Please Enter Store Address!!");
		return 0;
	}
    if(open>close)
    {
        swal("Please Enter Store Time!!");
		return 0;
    }
    
    if( document.getElementById("img").files.length != 0 )
	{
		// ถ้ามีการเปลี่ยนรูป
        var fileInput = document.getElementById('img');
        var filePath = fileInput.value;
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if(!allowedExtensions.exec(filePath)){
            swal("Please Upload Picture!!");
            fileInput.value = '';
            return 0;
        }
    }
    if( document.getElementById("img2").files.length != 0 )
	{
		// ถ้ามีการเปลี่ยนรูป
        var fileInput = document.getElementById('img2');
        var filePath = fileInput.value;
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if(!allowedExtensions.exec(filePath)){
            swal("Please Upload Picture!!");
            fileInput.value = '';
            return 0;
        }
    }
    if( document.getElementById("img3").files.length != 0 )
	{
		// ถ้ามีการเปลี่ยนรูป
        var fileInput = document.getElementById('img3');
        var filePath = fileInput.value;
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if(!allowedExtensions.exec(filePath)){
            swal("Please Upload Picture!!");
            fileInput.value = '';
            return 0;
        }
    }
    if(sizeFalse1==1)
	{
		swal("Please Upload Picture in range size!!");
		return 0;
    }
    if(sizeFalse2==1)
	{
		swal("Please Upload Picture in range size!!");
		return 0;
    }
    if(sizeFalse3==1)
	{
		swal("Please Upload Picture in range size!!");
		return 0;
	}
    if(storenameeng!=""&&storenameth!=""&&address!=""&&phone!=""&&poem!=""&&open!=""&&close!="")
    {
        var firebaseRef=firebase.database().ref("StoreDes/"+key).set({
        Storenameeng : storenameeng ,
        Storenameth : storenameth ,
        Address : address,
        Phone : phone,
        Poem : poem,
        Open : open,
        Close : close,
        });
        if( document.getElementById("img").files.length != 0 )
        {
            // ถ้ามีการเปลี่ยนรูปโลโก้
            var storageRef = firebase.storage().ref("Head/"+key+"_2");
            storageRef.put(document.getElementById("img").files[0]);
            
        }
        if( document.getElementById("img2").files.length != 0 )
        {
            // ถ้ามีการเปลี่ยนรูปพื้นหลัง
            var storageRef = firebase.storage().ref("Head/"+key+"_1");
            storageRef.put(document.getElementById("img2").files[0]);
           
        }
        if( document.getElementById("img3").files.length != 0 )
        {
            // ถ้ามีการเปลี่ยนรูปโชว์ร้าน
            var storageRef = firebase.storage().ref("Picture/"+key+"_");
            storageRef.put(document.getElementById("img3").files[0])
            
        }
        swal("Edit Profile Success!", "", "success").then((result) => {
            if (result.value) {
                storeProfile(key);
            }
            else{
                storeProfile(key);
                }
        });
    }
}
