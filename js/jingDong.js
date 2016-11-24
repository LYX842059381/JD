
$(function  () {
	console.log(document.cookie);
//	removeCookie('shangpin+y');
//	removeCookie('shangpinm');
//	removeCookie('jiage');
	//顶部的一些hover事件
	$('.top li').hover(function  () {
		$(this).find('a').css('color','#cc2f3b');
	},function  () {
		$(this).find('a:not(.fix)').css('color','#6b6b6b');
	})
	
	$('.mtop1').hover(function  () {
		$('.top1').css('display','block')
	},function  () {
		$('.top1').css('display','none')
	})
	
	$('.spcli').hover(function  () {
		$('.top2').css('display','block')
	},function  () {
		$('.top2').css('display','none')
	})
	$('.mtop3').hover(function  () {
		$('.top3').css('display','block')
	},function  () {
		$('.top3').css('display','none')
	})
	$('.mtop4').hover(function  () {
		$('.top4').css('display','block')
	},function  () {
		$('.top4').css('display','none')
	})
	$('.mtop5').hover(function  () {
		$('.top5').css('display','block')
	},function  () {
		$('.top5').css('display','none')
	})
	
	
	
	
	
	$('.region').hover(function  () {
		$('.region').css('background','white')
		$('.diqu').css('display','block')
	},function  () {
		$('.region').css('background','#f1f1f1')
		$('.diqu').css('display','none')
	})
	
	$('.diqu').hover(function  () {
		$('.region').css('background','white')
		$('.diqu').css('display','block')
		
	},function  () {
		$('.region').css('background','#f1f1f1')
		$('.diqu').css('display','none')
	})
	

	
	
	$('.top .dengLu').hover(function  () {
		$(this).css('color','#cc2f3b');
	},function(){
		$(this).css('color','#6b6b6b');
	})
	
	//json生成轮播右边的小模块
	$.get('json/little.json',function  (res) {
			
				for(var i=0;i<res.length;i++) {
				var mDiv = $('<div class="little"><img src="img/'+res[i].url+'"/><p>'+res[i].txt+'</p></div>')
					$('.lunRight1').append(mDiv);
				}
				
				$('.little:eq(0)').hover(function  () {
					
					$('.lunRight1 .bg2').css('display','block')
				})
				$('.lunRight1 .bg2').hover(function  () {
					
					$('.lunRight1 .bg2').css('display','block')
				},function  () {
					$('.lunRight1 .bg2').css('display','none')
				})
				
				$('.little:eq(1)').hover(function  () {
					
					$('.lunRight1 .bg3').css('display','block')
				})
				$('.lunRight1 .bg3').hover(function  () {
					
					$('.lunRight1 .bg3').css('display','block')
				},function  () {
					$('.lunRight1 .bg3').css('display','none')
				})
				
				$('.little:eq(2)').hover(function  () {
					
					$('.lunRight1 .bg4').css('display','block')
				})
				$('.lunRight1 .bg4').hover(function  () {
					
					$('.lunRight1 .bg4').css('display','block')
				},function  () {
					$('.lunRight1 .bg4').css('display','none')
				})
				
				$('.little:eq(3)').hover(function  () {
					
					$('.lunRight1 .bg5').css('display','block')
				})
				$('.lunRight1 .bg5').hover(function  () {
					
					$('.lunRight1 .bg5').css('display','block')
				},function  () {
					$('.lunRight1 .bg5').css('display','none')
				})
				
				
			})
	
	
	//子菜单hover事件
	$('.left1 dd').hover(function  () {
		$(this).find('a').css('color','red')
	},function  () {
		$(this).find('a').css('color','#666666')
	})
	
	$('.mydiv2 dd:eq(0)').find('a').css({'color':'red','border':'1px solid red'})
	
	$('.mydiv7 dd:eq(0)').find('a').css({'color':'red','border':'1px solid red'})
	
	$('.mydiv1 .myul1 div').hover(function  () {
		$(this).css('background','red')
		$(this).find('span').css('background','red')
	},function  () {
		$(this).css('background','#7c7171')
		$(this).find('span').css('background','#5c5251')
	})
	
	
	
	$('.lunBo .zuodaohang li:eq(0)').hover(function  () {
		$('.left1').toggle();
	})
	$('.left1').hover(function  () {
		$('.left1').toggle();
	})
	
	$('.lunBo .zuodaohang li:eq(1)').hover(function  () {
		$('.left2').toggle();
	})
	$('.left2').hover(function  () {
		$('.left2').toggle();
	})
	
	$('.lunBo .zuodaohang li:eq(2)').hover(function  () {
		$('.left3').toggle();
	})
	$('.left3').hover(function  () {
		$('.left3').toggle();
	})
	$('.lunBo .zuodaohang li:eq(3)').hover(function  () {
		$('.left4').toggle();
	})
	$('.left4').hover(function  () {
		$('.left4').toggle();
	})
	
	$('.lunBo .zuodaohang li:eq(4)').hover(function  () {
		$('.left5').toggle();
	})
	$('.left5').hover(function  () {
		$('.left5').toggle();
	})
	
	
	$('.lunBo .zuodaohang li:eq(5)').hover(function  () {
		$('.left6').toggle();
	})
	$('.left6').hover(function  () {
		$('.left6').toggle();
	})
	
	
	$('.lunBo .zuodaohang li:eq(6)').hover(function  () {
		$('.left7').toggle();
	})
	$('.left7').hover(function  () {
		$('.left7').toggle();
	})
	
	$('.lunBo .zuodaohang li:eq(7)').hover(function  () {
		$('.left8').toggle();
	})
	$('.left8').hover(function  () {
		$('.left8').toggle();
	})
	
	$('.lunBo .zuodaohang li:eq(8)').hover(function  () {
		$('.left9').toggle();
	})
	$('.left9').hover(function  () {
		$('.left9').toggle();
	})
	
	$('.lunBo .zuodaohang li:eq(9)').hover(function  () {
		$('.left10').toggle();
	})
	$('.left10').hover(function  () {
		$('.left10').toggle();
	})

	//头部地区
	$.get('json/region.json',function  (res) {
				
				for(var i=0;i<res.length;i++) {
				var mDiv = $('<span><a href="#">'+res[i].txt+'</a></span>')
					$('.diqu').append(mDiv);
				}
				$('.diqu span').click(function  () {
					$(this).css('background','red').siblings().css('background','white')
					$(this).find('a').css('color','white').removeClass('qwe').parent().siblings().find('a').addClass('qwe');
					var diming = $(this).text();
					$('.mregion').text(diming);
				})
				
			})
	
	//轮播图
		var i = 0;
		var size = $('#list li').size();

		var timer = setInterval(move,3000)
		function move () {
			i++;
			if (i==size) {
				i=0;
			}
			$("#list li").find('img').eq(i)
			.css("opacity",1).parent().siblings().find('img').css("opacity",0);
		//圆点跟随添加样式numA
		$('#btn li').eq(i).addClass('mon').siblings().removeClass('mon');

		}
		
		function moveLeft () {
			i--;
			if (i==-1) {
				i=size-1;
			}
			$("#list li").find('img').eq(i)
			.css("opacity",1).parent().siblings().find('img').css("opacity",0);
		//圆点跟随添加样式numA
		$('#btn li').eq(i).addClass('mon').siblings().removeClass('mon');
		}
		
		$('#xia').click(function  () {
					move();
					
				})
		$('#shang').click(function  () {
					moveLeft();
					
				})
		$('#btn li').hover(function  () {
					i=$(this).index();
					$("#list li").find('img').eq(i)
					.css("opacity",1).parent().siblings().find('img').css("opacity",0);
					$('#btn li').eq(i).addClass('mon').siblings().removeClass('mon');
				})
		
		$('.lunBoTu').hover(function(){
				clearInterval(timer);
				$('#shang').css('display','block');
				$('#xia').css('display','block');
			},function(){
				timer=setInterval(move,3000);
				$('#shang').css('display','none');
				$('#xia').css('display','none');
			})
		
//右轮
				var kel= $('.tuijiantu>li:lt(4)').clone(true)
				$('.tuijiantu').append(kel)
				var q = 0;
				var size1 = ($('.tuijiantu li').size())/4;
				//点击下一页，每点击一次根据全局变量与定位图片的宽度乘积，移动相应的距离			
				$('.youlun #xia1').click(function  () {
					q++;
				
					if (q==size1) {

						$('.tuijiantu').css('left','0px')
						q=1;
					} 
					$('.tuijiantu').stop(true).animate({left:-1004*q},500)
					
				})
				$('.youlun #shang1').click(function  () {
					q--;
				//如果是第一张的上一张，先瞬间调至克隆的尾张
					if (q==-1) {
//						i=size-1;
						$('.tuijiantu').css('left',-(size1-1)*1004)
						q=size1-2;//克隆尾张的上一张为点击三次后的宽度，所以i=3
					} 
					$('.tuijiantu').stop(true).animate({left:-1004*q},500)
					
				})
				
				
				//商品
				$.get('json/shangpin.json',function  (res) {
				
				for(var i=0;i<res.length;i++) {
				var mDiv = $('<div class="gouwuche"><a href="#"><img src="img/'+res[i].url+'"/><br/><span>'+res[i].txt+'</span><br /><b>'+res[i].price+'</b></a></div>')
					$('.goods').append(mDiv);
				}
					var imgarr=[]
					var spanarr=[]
					var barr=[]
				
					$('.gouwuche').click(function  () {						
						var d = new Date();
			 			d.setDate(d.getDate()+10);
			 			var myimg = $(this).find('img')
			 			var myspan = $(this).find('span')
			 			var myb = $(this).find('b')
			 			imgarr.push(myimg.attr("src"))
			 			spanarr.push(myspan.text())
			 			barr.push(myb.text())
						
						setCookie('imgsz',imgarr,d)
						setCookie('spansz',spanarr,d)
						setCookie('bsz',barr,d)
			 		

					})
				
					
				
					
					
				
				
				
					
			})
				
				$('.huantu').click(function  () {
					$('.goods>div').css('display','none')
				$.get('json/shangpin1.json',function  (res) {
				console.log(res);
				for(var i=0;i<res.length;i++) {
				var mDiv = $('<div><a href="#"><img src="img/'+res[i].url+'"/><br/><span>'+res[i].txt+'</span><br /><b>'+res[i].price+'</b></a></div>')
					$('.goods').append(mDiv);
				}
				})
				})
				
				
				//主体轮播
				var zhuti = $('.zhutiLunBoul>li').eq(0).clone(true)
				$('.zhutiLunBoul').append(zhuti)
				
				//设置一个全局变量i,以及获取图片#list的长度（多少个元素）
				var m = 0;
				var zhutisize = $('.zhutiLunBoul li').size();
				$('.zhutixia').click(function  () {
					m++;
				
					if (m==zhutisize) {
//						i=0;
						$('.zhutiLunBoul').css('left','0px')
						m=1;
					} 
					$('.zhutiLunBoul').stop(true).animate({left:-439*m},500)
					//点击第四次的时候i==4，实际是第五张图片，所以用长度减一size-1
					//使按钮下标在第五张的时候默认显示第一个索引，（图片相同）
					if (m==zhutisize-1) {
						$('.zhutibtn li').eq(0).addClass('zhution').siblings().removeClass('zhution');
					} else{
						//i是几，就代表按钮的第几个加上样式
						$('.zhutibtn li').eq(m).addClass('zhution').siblings().removeClass('zhution');
						
					}
					
				})
				
				$('.zhutishang').click(function  () {
					m--;
				//如果是第一张的上一张，先瞬间调至克隆的尾张
					if (m==-1) {
//						i=size-1;
						$('.zhutiLunBoul').css('left',-(zhutisize-1)*439)
						m=zhutisize-2;//克隆尾张的上一张为点击三次后的宽度，所以i=3
					} 
					$('.zhutiLunBoul').stop(true).animate({left:-439*m},500)
					$('.zhutibtn li').eq(m).addClass('zhution').siblings().removeClass('zhution');
				})
				
				$('.zhutibtn li').hover(function  () {
					m=$(this).index();
					$('.zhutiLunBoul').stop(true).animate({left:-439*m},500)
					$(this).addClass('zhution').siblings().removeClass('zhution');
				})
				
				function zhutimove () {
					m++;
				
					if (m==zhutisize) {
//						i=0;
						$('.zhutiLunBoul').css('left','0px')
						m=1;
					} 
					$('.zhutiLunBoul').stop(true).animate({left:-439*m},500)
					//点击第四次的时候i==4，实际是第五张图片，所以用长度减一size-1
					//使按钮下标在第五张的时候默认显示第一个索引，（图片相同）
					if (m==zhutisize-1) {
						$('.zhutibtn li').eq(0).addClass('zhution').siblings().removeClass('zhution');
					} else{
						//i是几，就代表按钮的第几个加上样式
						$('.zhutibtn li').eq(m).addClass('zhution').siblings().removeClass('zhution');
						
					}
				}
				
				var zhutitimer = setInterval(zhutimove,3000);
				
				$('.zhutiLunBo').hover(function(){
				clearInterval(zhutitimer)
				$('.zhutishang').css('display','block');
				$('.zhutixia').css('display','block');
			},function(){
				zhutitimer=setInterval(zhutimove,3000);
				$('.zhutishang').css('display','none');
				$('.zhutixia').css('display','none');
			})
				
//1L的事件
			
		$('.oneUl li').hover(function  () {
			$(this).css({'border-left':'1px solid red','border-right':'1px solid red','border-top':'3px solid red','border-bottom':'1px solid white'}).siblings().css('border','none')

			
			$(this).find('a').css('color','red')
			
		},function  () {


			$(this).find('a').css('color','#6f6f6f')

		})	
		$('.oneUl li:eq(1)').hover(function  () {
			$('.nanzhuang').css('display','block');
			
		},function  () {
			$('.nanzhuang').css('display','none');
		})
		
		$('.nanzhuang').hover(function  () {
			$('.nanzhuang').css('display','block');

			$(this).find('a').css('color','red')
			
		})
		
		
				
			//男装	
			$.get('json/nanzhuang.json',function  (res) {
				
				for(var i=0;i<res.length;i++) {
				var mDiv = $('<div><a href="#"><img src="img/'+res[i].url+'"/><br/><span>'+res[i].txt+'</span><br /><b>'+res[i].price+'</b></a></div>')
					$('.nanzhuang').append(mDiv);
				}
			})
			
			$('.zhutiLeftdiv2ul li a:eq(0)').css('color','red');
			$('.zhutiLeftdiv2ul span a:eq(2)').css('color','red');
			$('.zhutiLeftUl span a:eq(0)').css('color','red');
			$('.zhutiLeftUl span a:eq(2)').css('color','red');
			
			$('.zhutiLeftdiv a').hover(function  () {
				$(this).find('span').css('color','red')
			},function  () {
				$(this).find('span').css('color','black')
			})
			
			
			
			
	//底部a标签hover事件		
		$('.di dd').hover(function  () {
			$(this).find('a').css('color','red')
		},function  () {
			$(this).find('a').css('color','#969696')
		})	
		$('.di .ditu a').hover(function  () {
			$(this).css('color','red')
		},function  () {
			$(this).css('color','#969696')
		})	
		
		$('.wei li').hover(function  () {
			$(this).find('a').css('color','red')
		},function  () {
			$(this).find('a').css('color','black')
		})	
		$('.wei span a').hover(function  () {
			$(this).css('color','red')
		},function  () {
			$(this).css('color','black')
		})	
		
		
		
		
		
//滑动楼梯。。。
	
	var myClick = false;  //定义一个状态，用来判断是否处于点击状态下；
	$(window).on('scroll',function(){  //监听页面滚动变化
		var that = $(this);
		
		//当滚动条高度大于等于第一个DIV到文档最顶部的距离加此DIV的高度一半时，侧边楼梯出现；
		if($(window).scrollTop() >= 1400){
			$('#stair').slideDown(300,function(){
				//unbind()方法防止重复绑定点击事件
				$('#stair > li').unbind().on('click',function(){
					myClick = true; //每次点击都把myClick这个状态设置为true，这样防止下面代码跟随执行；
					if($(this).index() == $('#stair > li').size()-1){
						//最后一个楼梯特殊考虑。
						$('body,html').stop(true).animate({scrollTop:0},500,function(){
							myClick = false;  //动画执行完毕后将状态改为false；让滚动条事件来改变侧边楼梯的选中状态
						});
					}else if ($(this).index() == $('#stair > li').size()-2) {
						$('body,html').stop(true).animate({scrollTop:3600},500,function(){
						});
					}else if ($(this).index() == $('#stair > li').size()-3) {
						$('body,html').stop(true).animate({scrollTop:3000},500,function(){
						});
					}else if ($(this).index() == $('#stair > li').size()-4) {
						$('body,html').stop(true).animate({scrollTop:2300},500,function(){
						});
					}else{
						$('body,html').stop(true).animate({scrollTop:1500},500,function(){
						});
					}
					
				})
			});
		}else{
			//当滚动条高度小于第一个DIV到文档最顶部的距离加此DIV的高度一半时，侧边楼梯消失；
			$('#stair').slideUp(300);
		}
		
	})
	
		
})