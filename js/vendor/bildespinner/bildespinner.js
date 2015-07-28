(function($) {
    $.fn.bildespinner = function(baseUrl, filListe) {
        var instillinger = {
            'animationHastighet': 1000, // Hvor raskt bilder bytter
            'tidMellomBilder': 10000 	// Hvor hurtig man veksler bilder 
     	};
	
        return this.each(function() {
            var bilder,
                valgtBilde = 0,
            	antallBilder = filListe.length,
                flereBilder = antallBilder > 1,
            	underAnimasjon,
                bildespinner = $(this).addClass('bildespinner'),         
            	bildespinnerWrapper = bildespinner.wrap('<div class="bildespinner-wrapper stort_bilde" />').parent();
            
            bildespinner.add(bildespinnerWrapper);
            bilder = bildespinner.children('div');
            
            bilder
                .eq(valgtBilde)
                .css({"z-index" : 3})
                .css({"display" : "block"})
                .css({"background-image" : "url('" + baseUrl + filListe[valgtBilde] +"')"});
            
// ==============
// ! Klokke  
// ==============

            function startKlokke() {
                pause.removeClass('active');
                klokkenGaar = true;
                clock = setInterval(function(e){
                    skiftBilde("neste");  
                }, instillinger.tidMellomBilder); 
	        }
            
	        function stansKlokke() {
                klokkenGaar = false;
                clearInterval(clock);
                pause.addClass('active');
	        }  
            
            //Timer Setup
            if(flereBilder) {         	
                var klokkeHTML = '<div class="klokke"><span class="pause"></span></div>';
                bildespinnerWrapper.append(klokkeHTML);
                var klokke = bildespinnerWrapper.children('div.klokke'),
                	klokkenGaar;
                var pause = $('div.klokke span.pause');
                startKlokke();
                klokke.click(function() {
                    if(klokkenGaar) {
                        stansKlokke();
                    } else { 
                        startKlokke();
                    }
                });
            }
            
// ==================
// ! Navigasjonspiler   
// ==================

            if(flereBilder) {
                var navigasjonsPilerHTML = '<div class="slider-nav"><span class="right">Right</span><span class="left">Left</span></div>';
                bildespinnerWrapper.append(navigasjonsPilerHTML);
                var leftBtn = bildespinnerWrapper.children('div.slider-nav').children('span.left'),
                	rightBtn = bildespinnerWrapper.children('div.slider-nav').children('span.right');
                leftBtn.click(function() { 
                    stansKlokke();
                    skiftBilde("forrige");
                });
                rightBtn.click(function() {
                    stansKlokke();
                    skiftBilde("neste");
                });
            }
            
// ==================
// ! Navigasjonsknapper
// ==================

            if(flereBilder) { 
            	var knappElement = $('<ul class="bildespinner-knapper"></ul>');
            	bildespinnerWrapper.append(knappElement);
            	var navigasjonsKnapper = bildespinnerWrapper.children('ul.bildespinner-knapper');
            	for(i = 0; i < antallBilder; i++) {
            		var liMarkup = $('<li>'+(i+1)+'</li>');
            		bildespinnerWrapper.children('ul.bildespinner-knapper').append(liMarkup);
            		liMarkup.data('index',i);
            		liMarkup.click(function() {
            			stansKlokke();
            			skiftBilde($(this).data('index'));
            		});
            	}
            	midtstillKnapper(knappElement);
            	markerValgteKnapp();
            }
            
        	function midtstillKnapper(knappElement) { 
                //Trenger bare gjøre dette om knappene opptart mindre enn 70% av bredden
                //Knapp er 13px, mellomrommet 15px
        		var 
                    bildeSpinnerBredde = bildespinner.width(),
                    maxBreddeKnapper = bildeSpinnerBredde * 0.7,
                    breddeKnapper = 28 * antallBilder;
                if(breddeKnapper < maxBreddeKnapper){
                    var venstremarginProsent = 50 - (((breddeKnapper / 2) / bildeSpinnerBredde) * 100);
                    knappElement.css({"left" : venstremarginProsent+"%"});
                }
        	}
            
        	function markerValgteKnapp() { 
        		if(flereBilder) {
	        		navigasjonsKnapper.children('li').removeClass('active').eq(valgtBilde).addClass('active');
	        	}
        	}
        	
// ====================
// ! Bildebytting 
// ====================
        
            function ferdigMedAnimasjon() {
                underAnimasjon = false;
            }
            function laasUnderAnimasjon() { 
                underAnimasjon = true;
            }
            
            function skiftBilde(retning) {
                var forrigeBilde = valgtBilde,
                	flyttTil = retning;
            
                if(forrigeBilde === flyttTil || !flereBilder) { 
                    return false; 
                }
                
                function resetAndUnlock() {
                    bilder
                    	.eq(forrigeBilde)
                    	.css({"z-index" : 1});
                    ferdigMedAnimasjon();
                }
                
                if(!underAnimasjon) {
                    laasUnderAnimasjon();
                    
                    if(retning === "neste") {
                        valgtBilde++;
                        if(valgtBilde === antallBilder) {
                            valgtBilde = 0;
                        }
                    } else if(retning === "forrige") {
                        valgtBilde--;
                        if(valgtBilde < 0) {
                            valgtBilde = antallBilder-1;
                        }
                    } else {
                        valgtBilde = retning;
                        if (forrigeBilde < valgtBilde) { 
                            flyttTil = "neste";
                        } else if (forrigeBilde > valgtBilde) { 
                            flyttTil = "forrige";
                        }
                    }
                    
                    markerValgteKnapp();  
                     
                    bilder
                    	.eq(forrigeBilde)
                    	.css({"z-index" : 2})
                        .animate({"opacity" : 0}, instillinger.animationHastighet);    
                    
                    bilder
                        .eq(valgtBilde)
                    	.css({"display" : "block"})
                        .css({"opacity" : 0, "z-index" : 3})
                        .css({"background-image": "url('" + baseUrl + filListe[valgtBilde] +"')"})
                        .animate({"opacity" : 1}, instillinger.animationHastighet, resetAndUnlock);
                }
            }
        });
    };
})(jQuery);
