$(function(){
	//--缁煎悎鏂伴椈
	$('.newsPart1').find('.bigImg:first').show();
	$('.newsPart1').find('li').each(function(i){
		$(this).hover(
		  function(){
			  $('.newsPart1').find('.bigImg').hide();
			  $('.newsPart1').find('.bigImg').eq(i).show();
			  $('.newsPart1').find('li').removeClass('liNow');
			  $(this).addClass('liNow');
			  },
		  function(){}
		)
		})
	//--棣栭〉閫夐」鍗�
	$('.tabContentDiv').find('.tabContent:first').show();
	$('.tab').each(function(i){
		$(this).find('li').each(function(ii){
			$(this).hover(
			function(){
				$('.tab').eq(i).find('li').removeClass('liNow');
				$(this).addClass('liNow');
				$('.tabContentDiv').eq(i).find('.tabContent').hide();
				$('.tabContentDiv').eq(i).find('.tabContent').eq(ii).show();
				},
			function(){}	
				)
			})
		})
	//--棣栭〉鐒︾偣鍥�
	var fadeFlashTime=new Array();
	$('.fadeFlash').find('li:first').fadeIn(500);
	$('.fadeFlash').each(function(i){
		fadeFlashTime[i] = setInterval("fadeFlashFun("+i+")",5000);
		$(this).find('.btnDiv').find('span').each(function(ii){
			$(this).hover(
			function(){
				clearInterval(fadeFlashTime[i]);
				$('.fadeFlash').eq(i).find('.btnDiv').find('span').removeClass('spanNow');
				$(this).addClass('spanNow');
				$('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).fadeOut(500);
				fadeFlashNow[i]=ii;
				$('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).fadeIn(500);
				fadeFlashTime[i] = setInterval("fadeFlashFun("+i+")",5000);
				},
			function(){}	
				)
			})
		$(this).find('.rightBtn').click(function(){
			clearInterval(fadeFlashTime[i]);
			$('.fadeFlash').eq(i).find('.btnDiv').find('span').removeClass('spanNow');
			$('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).fadeOut(500);
			if(fadeFlashNow[i]<$('.fadeFlash').eq(i).find('li').length-1){
				fadeFlashNow[i]++;
				}else{
					fadeFlashNow[i]=0;
					}
			$('.fadeFlash').eq(i).find('.btnDiv').find('span').eq(fadeFlashNow[i]).addClass('spanNow');
			$('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).fadeIn(500);
			fadeFlashTime[i] = setInterval("fadeFlashFun("+i+")",5000);
			})	
		$(this).find('.leftBtn').click(function(){
			clearInterval(fadeFlashTime[i]);
			$('.fadeFlash').eq(i).find('.btnDiv').find('span').removeClass('spanNow');
			$('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).fadeOut(500);
			if(fadeFlashNow[i]>0){
				fadeFlashNow[i]--;
				}else{
					fadeFlashNow[i]=$('.fadeFlash').eq(i).find('li').length-1;
					}
			$('.fadeFlash').eq(i).find('.btnDiv').find('span').eq(fadeFlashNow[i]).addClass('spanNow');
			$('.fadeFlash').eq(i).find('li').eq(fadeFlashNow[i]).fadeIn(500);
			fadeFlashTime[i] = setInterval("fadeFlashFun("+i+")",5000);
			})	
		})	
	//--涓嬫媺鑿滃崟
	$('.sNavA').each(function(i){
		$(this).hover(
		    function(){
				$('.sNav').eq(i).css('left',$(this).offset().left);
				$('.sNav').eq(i).show();
				},
			function(){
				$('.sNav').hide();
				}
		)
		})	
	$('.sNav').each(function(i){
		$(this).hover(
		    function(){
				$('.sNavA').eq(i).addClass('aNow');
				$(this).show();
				},
			function(){
				$('.sNavA').removeClass('aNow');
				$(this).hide();
				}
		)
		})	
	//
	})