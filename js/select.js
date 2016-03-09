$(document).ready(function(){
	
	$('.select-par li').click(function(){
		var obj_jq = $(this);
		var object_li = this;
		object_li.val = obj_jq.text();
		object_li.index = obj_jq.index();
		alert(object_li.val);
	});
})
