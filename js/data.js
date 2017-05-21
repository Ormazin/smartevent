

			  /*****************************************************************/
			  /* هذا الكائن مخصص للبوث */
			  /*****************************************************************/
			  var booth = {
			  
			  data:"",get:"",
				  
		  	  /*****************************************************************/
			  /* دالة مخصصة لتنفيذ عملية استيراد قائمة حدث */
			  /*****************************************************************/	  
			  list:(function( event_id ){
			  
 			  
 			  $.ajax({
			  url: "http://5.79.109.23/~smartevent/API/list_booth.php?event_id=" + event_id , 

			  crossDomain: true,
			  dataType: 'json',
			  
			  success: (function(data){
			  
			  booth.data =  data;
				  
				  
				 for(var i=0; i<data.length; i++){
				  
				  $("#booth_list"+i).fadeIn(300);
				  $("#booth_list"+i).attr("data-booth_id", data[i].booth_id);	  
				  $("#booth_name"+i).html( data[i].booth_name );
					  
				  }
				  
				  
				  
				  $("#loading").fadeOut();
				  
			  
			   
			   
			  }),/* End success */
			  error:(function(xhr, ajaxOptions, thrownError ){
			      
                   alert(xhr.status);
			  })
			  });/* End Ajax */	  
			  }), /* End function  */
			  
		      
				  
			  /*****************************************************************/
			  /*  دالة مخصصة لتنفيذ عملية استيراد  حدث واحد */
			  /*****************************************************************/	  
			  gets:(function( id ){
			  
 			  $.ajax({
			  url: "http://5.79.109.23/~smartevent/API/get_booth.php"  , 
 			  type: 'POST',

			  crossDomain: true,
			  dataType: 'json',
			  data:{booth_id: id},	  
			  success: (function(data){
			  
				
				  
			  booth.get = data;
				  
				    
				    /* إذا لم يصوت مسبقا */
				  if( booth.arr_vote.indexOf( data.booth_id  ) == -1 ){ 
				  $("#vote_button").fadeIn(1);
				  }
				  
				  /* إذا لم يصوت */
				  else { $("#vote_button").fadeOut(1);}
				  
			   
				  $("#show_booth_body").fadeIn(300);
				  $("#show_booth_name").html(data.booth_name); 

				  $("#vote_button").attr("data-booth_id", data.booth_id );
				  
				  
				
				   
				  
				  
				  $("#button-fav-booth").attr("data-booth_id", data.booth_id );
				  $("#button-fav-booth").attr("data-booth_name", data.booth_name );
				  
				   $("#loading").fadeOut();
				  
				  /* تلوين الفيفورت */
				  if( fav.arr_id.indexOf( data.booth_id ) != -1 ){
				  $("#button-fav-booth").addClass("ion-ios-star");
				  $("#button-fav-booth").removeClass("ion-ios-star-outline");
				  } 
				  
				  
			  }),/* End success */
			  error:(function( data ){alert( "error" )})
			  });/* End Ajax */	  
			  }), /* End function  */
				  
				  
			  /*****************************************************************/
			  /*  دالة مخصصة للتصويت  */
			  /*****************************************************************/
			  	
			  arr_vote:[], 
			  vote: (function( id ){
			  
				  /* إضافة الصوت للمصفوفة */
				  this.arr_vote.unshift(id);
				  
			  $("#votes_number").html( parseInt($("#votes_number").text()) + 1 );	  
			  $.ajax({
				  
			  url: "http://5.79.109.23/~smartevent/API/vote_booth.php"  , 
 			  type: 'POST',

			  crossDomain: true,
			  dataType: 'json',
			  data:{booth_id: id},	  
			  success: (function(data){
			  
				  
				  
 				  $("#vote_button").fadeOut(300);
				  
				  
			   
			  }),/* End success */
			  error:(function( data ){alert( "error" )})
			  });/* End Ajax */	 
				  
			  })	  
				  
				  
				  
			
				  
	
				  
			  }/* End Object  */
			  
			  
			  
			  /*******************************************************************/
			  
			  
			  /*****************************************************************/
			  /* هذا الكائن مخصص للإيفنت */
			  /*****************************************************************/
			  var events = {
			  
			  data:"", get:"", 
				  
				  
			  list:(function(){
			  
 			  $.ajax({
			  url: "http://5.79.109.23/~smartevent/API/list_event.php"  , 

			  crossDomain: true,
			  dataType: 'json',
			  success: (function(data){
			  
			  events.data =  data;
			  
				  for(var i=0; i<data.length; i++){
				  
				  $("#event_list"+i).fadeIn(300);
				  $("#event_list"+i).attr("data-event_id", data[i].event_id);	  
				  $("#event_name"+i).html( data[i].event_name );
				  $("#event_category"+i).html( data[i].category );
					  
				  }
				  
				  
				  
				  $("#loading").fadeOut();
				  
 				  
				  
			   
			  }),/* End success */
			  error:(function(xhr, ajaxOptions, thrownError ){
			      
			  })/* End error */
			  });/* End Ajax */	  
			  }), /* End function  */
			  
		      
				  
			  /*****************************************************************/
			  /*  دالة مخصصة لتنفيذ عملية استيراد  حدث واحد */
			  /*****************************************************************/	  
			  gets:(function( id ){
			  
 			  $.ajax({
			  url: "http://5.79.109.23/~smartevent/API/get_event.php"  , 
 			  type: 'POST',

			  crossDomain: true,
			  dataType: 'json',
			  data:{event_id: id},	  
			  success: (function(data){
			  
			  events.get = data;
			   
			  }),/* End success */
			  error:(function( data ){alert( "error" )})
			  });/* End Ajax */	  
			  }) , /* End function  */
			
				  
			  /*****************************************************************/
			  /*  دالة استيراد الأحداث الفعالة */
			  /*****************************************************************/		  
			  active:(function(){
			  
 			  $.ajax({
			  url: "http://5.79.109.23/~smartevent/API/active_event.php"  , 

			  crossDomain: true,
			  dataType: 'json',
			  success: (function(data){
			  
			  
			  
				  for(var i=0; i<data.length; i++){
				  
				  $("#active_event_list"+i).fadeIn(300);
				  $("#active_event_list"+i).attr("data-event_id", data[i].event_id);	  
				  $("#active_event_name"+i).html( data[i].event_name );
				  $("#active_event_end_date"+i).html( "End Date: " + data[i].end_date );
					  
				  }
				  
				  
				  
				  $("#loading").fadeOut();
				  
 				  
				  
			   
			  }),/* End success */
			  error:(function(xhr, ajaxOptions, thrownError ){
			      
			  })/* End error */
			  });/* End Ajax */	  
			  }), /* End function  */ 
			  
			  /*****************************************************************/
			  /*  دالة استيراد الأحداث الفعالة */
			  /*****************************************************************/		  
			  prev:(function(){
			  
 			  $.ajax({
			  url: "http://5.79.109.23/~smartevent/API/previous_event.php"  , 

			  crossDomain: true,
			  dataType: 'json',
			  success: (function(data){
			  
			  
			  
				  for(var i=0; i<data.length; i++){
				  
				  $("#pre_event_list"+i).fadeIn(300);
				  $("#pre_event_list"+i).attr("data-booth_id", data[i].winer_id);	  
				  $("#pre_event_name"+i).html( data[i].event_name );
				  $("#pre_event_winer"+i).html( "Winer: " + data[i].winer_name );
					  
				  }
				  
				  
				  
				  $("#loading").fadeOut();
				  
 				  
				  
			   
			  }),/* End success */
			  error:(function(xhr, ajaxOptions, thrownError ){
			      
			  })/* End error */
			  });/* End Ajax */	  
			  }), /* End function  */ 
	
				  
			  }/* End Object event */
			  
			  
			  
			  





			  /*****************************************************************/
			  /* هذا الكائن مخصص للفيزيتور */
			  /*****************************************************************/
			  var visitor = {
			  
			  
			  /*****************************************************************/
			  /* دالة مخصصة لتنفيذ عملية التسجيل */
			  /*****************************************************************/
			  register: (function(){
			  
			  
			  /* if(1) التأكد من أنّ الباسوردين متوافقين */
			  if( $("#visitor_password").val() == $("#confirmPass").val() ){
			  
			  /* تنفيذ عملية التسجيل بالأجاكس */
			  $.ajax({
			  url: "http://5.79.109.23/~smartevent/API/add_visitor.php"  , 
 			  type: 'POST',
			  data:{visitor_name: $("#visitor_name").val() ,visitor_email: $("#visitor_email").val() , visitor_password: $("#visitor_password").val() },
			  crossDomain: true,
			  dataType: 'json',
			  success: (function(data){
			  
			  
			  alert(data.status_message );
			  
			  /* if(2) إذا كان تسجيل صحيح، سيتم تحويله لصفحة تسجيل الدخول*/
			  if( data.success == "true" ){
			  
			  /* تنفيذ التحويل */
			  gotologin();
			  
			  }/* End if(2) */
			  
			  
			  })/* End success */
			  });/* End Ajax */
			  
			  }/* End if(1) */
			  
			  /* else(1) إذا لم يكن الباسوردين متوافقين */
			  else{
			  alert("Please rewrite confirm password");	  
			  }/* End Else(1) */
			  
			  }),/* End Function register */
			  
			  
			  /*****************************************************************/
			  /* دالة مخصصة لتنفيذ عملية الدخول */
			  /*****************************************************************/	
			  login:(function(){
			  
			  /* تنفيذ عملية التسجيل بالأجاكس */
			  $.ajax({
			  url: "http://5.79.109.23/~smartevent/API/login_visitor.php"  , 
 			  type: 'POST',
			  data:{visitor_email: $("#visitor_email_login").val() , visitor_password: $("#visitor_password_login").val(), remember: true },
			  crossDomain: true,
			  dataType: 'json',
			  success: (function(data){
			  
			  
			  
			  
			  /* if(2) إذا كان تسجيل صحيح، سيتم تحويله لصفحة تسجيل الدخول*/
			  if( data.success == "true" ){
			  
			  /* تنفيذ التحويل */
			   $("#nonlogin_body").slideUp(300);
				  
			   localStorage.setItem("login", "true");
			  
			  }/* End if(2) */
			  else { alert(data.status_message); }	  
			  
			  
			  })/* End success */
			  });/* End Ajax */
			  
			  
			  
			  
			  }),/* End Function login */
				  
			  logout:(function(){
			  	  
			  })	  
			    
				  
			  }/* End Object Admin */
			  
			  
			  
			   /*****************************************************************/
			  /* هذا الكائن مخصص للمفضلة */
			  /*****************************************************************/
			  var fav = {
			  i: 5,
			  arr_id:[],
			  arr_name:[],	  
				  
			  add:(function(id , name){
				  
				  
				  if( this.arr_id.indexOf( id ) == -1 ){
				  this.arr_id.unshift(id);
				  this.arr_name.unshift(name);
				  $("#button-fav-booth").addClass("ion-ios-star");
				  $("#button-fav-booth").removeClass("ion-ios-star-outline");
 
				  } 
				  else{
				  this.arr_id.splice(this.arr_id.indexOf( id ), 1);
				  this.arr_name.splice(this.arr_id.indexOf( id ), 1);	  
				  $("#button-fav-booth").addClass("ion-ios-star-outline");
				  $("#button-fav-booth").removeClass("ion-ios-star");
 				  }
				  
				  this.list();
 
				  
			  }),/* end add */
			  list:(function(){
			  
				  for(var i =0; i<6; i++ ) $("#fav_booth_list"+ i).fadeOut(1);
				  
				  for( i=0; i<this.arr_id.length; i++){
				  $("#fav_booth_list"+i).fadeIn(1);
				  $("#fav_booth_list"+i).attr("data-booth_id", this.arr_id[i] );	  
				  $("#fav_booth_name"+i).html( this.arr_name[i] );	  
				  }
				  
			  })	  
				  
				  
			  }
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			 
 
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			 
 
			  
			  
			  
			  
		  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  