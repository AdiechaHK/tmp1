
/*!jQuery FA multi button  Modern toggle, push button, dimmer or just a signal indicator SOURCE= https://github.com/knowthelist/fa-multi-button  >>> minified manually online https://jscompress.com/
 Version: 1.1.1 >>>> Requires: jQuery v1.7+  >>>> Copyright (c) 2015 Mario Stephan  >>>>  Under MIT License (http://www.opensource.org/licenses/mit-license.php) >>>>  Thanks to phoxoey*/

!function(a){a.fn.famultibutton=function(b){function s(){d=!0,c.children().first().css("color",q.onBackgroundColor),c.children().last().css("color",q.onColor)}function t(){d=!1,c.children().first().css("color",q.offBackgroundColor),c.children().last().css("color",q.offColor)}function u(){d&&(d=!1,a("<div />").animate({width:100},{duration:700,easing:"swing",step:function(a,b){var d=(a-b.start)/(b.end-b.start);c.children().first().css("color",getGradientColor(q.onBackgroundColor,q.offBackgroundColor,d)),c.children().last().css("color",getGradientColor(q.onColor,q.offColor,d))}}))}function v(){clearTimeout(f),j=k>0?j-=1:j+=1,j>100&&(j=100),j<0&&(j=0),w();var a=h[Math.abs(k)];f=setTimeout(function(){v()},500-a)}function w(){var a=e[0];if(a.height=c.innerHeight(),a.width=c.innerWidth(),a.getContext){var b=a.getContext("2d");b.strokeStyle=q.offBackgroundColor;for(var f=a.height-Math.round(a.height*j/100),g=0;g<a.height;g+=4)b.lineWidth=1,b.beginPath(),b.moveTo(5,g),b.lineTo(25,g),b.stroke();b.strokeStyle=d?q.onBackgroundColor:getGradientColor(q.offBackgroundColor,"#ffffff",.4),b.lineWidth=3,b.beginPath(),b.moveTo(5,f),b.lineTo(25,f),b.stroke(),b.fillStyle=getGradientColor(q.offBackgroundColor,"#ffffff",.4),b.font="10px sans-serif",b.fillText(j,30,a.height)}}function x(){e.css({position:"absolute","z-index":-1}),n?e.animate({left:.6*-c.innerWidth()+"px"}):e.animate({left:c.innerWidth()/5+"px",top:l})}if(this.length>1)return this.each(function(){a(this).famultibutton(b)}),this;var e,f,c=this,d=!1,g=!1,h=[0,10,40,80,120,140,150,160,180,200,240,260,280,300,320,420,430,440,450,460,470],i=0,j=0,k=0,l=0,m=0,n=!1,o=!1,p={backgroundIcon:"fa-circle",classes:["fa-2x"],icon:"fa-power-off",offColor:"#2A2A2A",offBackgroundColor:"#505050",onColor:"#2A2A2A",onBackgroundColor:"#aa6900",mode:"toggle",toggleOn:null,toggleOff:null,valueChanged:null},q=a.extend({},p,b),r=function(){if(q=a.extend({},q,c.data()),c.addClass("fa-stack"),jQuery("<i/>",{id:"bg",class:"fa fa-stack-2x"}).addClass(q.backgroundIcon).appendTo(c),jQuery("<i/>",{id:"fg",class:"fa fa-stack-1x"}).addClass(q.icon).appendTo(c),q.classes&&q.classes.length>0)for(var b=0;b<q.classes.length;b++)c.addClass(q.classes[b]);return t(),"dimmer"==q.mode&&(a("<canvas>").attr({id:"scale"}).appendTo(c),e=c.find("canvas#scale"),e.css({height:c.innerHeight()+4}),l=parseInt(e.offset().top)-parseInt(c.offset().top),w(),x()),c.data("famultibutton",c),c};if(getGradientColor=function(a,b,c){a=a.replace(/^\s*#|\s*$/g,""),b=b.replace(/^\s*#|\s*$/g,""),3==a.length&&(a=a.replace(/(.)/g,"$1$1")),3==b.length&&(b=b.replace(/(.)/g,"$1$1"));var d=parseInt(a.substr(0,2),16),e=parseInt(a.substr(2,2),16),f=parseInt(a.substr(4,2),16),g=parseInt(b.substr(0,2),16),h=parseInt(b.substr(2,2),16),i=parseInt(b.substr(4,2),16),j=g-d,k=h-e,l=i-f;return j=(j*c+d).toString(16).split(".")[0],k=(k*c+e).toString(16).split(".")[0],l=(l*c+f).toString(16).split(".")[0],1==j.length&&(j="0"+j),1==k.length&&(k="0"+k),1==l.length&&(l="0"+l),"#"+j+k+l},"push"==q.mode){var y=null!==document.ontouchstart?"mousedown":"touchstart",z=null!==document.ontouchend?"mouseup":"touchend",A=null!==document.ontouchleave?"mouseout":"touchleave";this.bind(y,function(a){s(),"function"==typeof q.toggleOn&&q.toggleOn.call(this)}),this.bind(z,function(a){u()}),this.bind(A,function(a){u()})}else if("toggle"==q.mode){var y=null!==document.ontouchstart?"click":"touchstart";this.bind(y,function(a){d?(t(),"function"==typeof q.toggleOff&&q.toggleOff.call(this)):(s(),"function"==typeof q.toggleOn&&q.toggleOn.call(this)),a.preventDefault()})}else if("dimmer"==q.mode){var y=null!==document.ontouchstart?"mousedown":"touchstart",B=null!==document.ontouchmove?"mousemove":"touchmove",z=null!==document.ontouchend?"mouseup":"touchend",A=null!==document.ontouchleave?"mouseout":"touchleave";this.bind(y,function(a){var b=a.originalEvent;i=b.touches?b.touches[0].clientY:a.pageY,k=0,o=!0,a.preventDefault()}),this.bind(A,function(a){n&&(n=!1,c.animate({top:0}),clearInterval(f),g=!1,x()),o=!1,a.preventDefault()}),this.bind(z,function(a){n?(n=!1,c.animate({top:0}),clearTimeout(f),g=!1,"function"==typeof q.valueChanged&&q.valueChanged.call(this,j)):d?(t(),"function"==typeof q.toggleOff&&q.toggleOff.call(this)):(s(),"function"==typeof q.toggleOn&&q.toggleOn.call(this)),n=!1,o=!1,x(),w(),a.preventDefault()}),this.bind(B,function(a){o&&(n=!0);var b=a.originalEvent;m=b.touches?b.touches[0].clientY:a.pageY,k=m-i,k>20&&(k=20),k<-20&&(k=-20),n&&(this.style.top=k+"px",g||(x(),v(),g=!0),e.css({top:-k+"px"})),a.preventDefault()})}return this.setOn=function(){s()},this.setOff=function(){t()},this.getState=function(){return d},this.getValue=function(){return j},this.setValue=function(a){j=a,w()},r()}}(jQuery);