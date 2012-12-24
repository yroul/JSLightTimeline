(function($)
{ 
  $.fn.jsLightTimeline=function(options)
	{
	   //defaults
           var defauts = {               
               dots :[],
               orientation :"vertical"
           };  
           
           //Merge defaults and options
           var params=$.extend(defauts, options); 
           
           //add class set to orientation value
           $(this).addClass("timeline timeline-"+params.orientation);
           
           
           var timeline = this;
           console.log($(timeline).attr('id'));
           var cpt = 0;
           $.each(params.dots,function(){
               if( cpt == 0){
                   if( params.orientation == 'horizontal'){
                       timeline.append("<div id='"+$(timeline).attr('id')+"-dot"+cpt+"' class='dot-"+params.orientation+" dot dotStart-"+params.orientation+"' ><span class='date date-"+params.orientation+"'>"+this.date+"</span></div>")
                   }
                   else{
                       timeline.append("<div id='"+$(timeline).attr('id')+"-dot"+cpt+"' class='dot-"+params.orientation+" dot dotEnd-"+params.orientation+" ' ><span class='date date-"+params.orientation+"'>"+this.date+"</span></div>")
                   }
                    
               }
               else if ( cpt == params.dots.length-1 ){
                   if( params.orientation == 'horizontal'){
                       timeline.append("<div id='"+$(timeline).attr('id')+"-dot"+cpt+"' class='dot-"+params.orientation+" dot dotEnd-"+params.orientation+"' ><span class='date date-"+params.orientation+"' >"+this.date+"</span></div>")
                   }else{
                      timeline.append("<div id='"+$(timeline).attr('id')+"-dot"+cpt+"' class='dot-"+params.orientation+" dot dotEnd-"+params.orientation+"' ><span class='date date-"+params.orientation+"'>"+this.date+"</span></div>")
                    
                   }
                   
               }
               else{
                   timeline.append("<div id='"+$(timeline).attr('id')+"-dot"+cpt+"' class='dot-"+params.orientation+" dot' ><span class='date date-"+params.orientation+"'>"+this.date+"</span></div>")
                   
               }
               
               if( params.orientation == 'horizontal'){                   
                   this.placement = "top";
               }
               console.log("#"+$(timeline).attr('id')+"-dot"+cpt);
               $("#"+$(timeline).attr('id')+"-dot"+cpt).popover(this);
               
               cpt ++;
               
               
           });
	   	
           return this;
	};
})(jQuery);
