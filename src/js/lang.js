const select = document.querySelector('select')

select.addEventListener('change', changeHtmlHash);

function changeHtmlHash(){
    let lang = select.value;
    location.hash = window.location.pathname + lang
   location.reload()
}

function changeLanguages(){
    const langContent = {
        "menu1": {
            "en": "home",
        },
        "menu2": {
            "en": "about us",
        },
        "menu3": {
            "en": "our services",
        },
        "menu4": {
            "en": "advantages",
        },
        "hero1": {
            "en": "SAPIENTIS",
        },
        "hero2": {
            "en": "WE WORK FOR YOUR COMFORT",
        },
        'lng-about-us__title':{
            'en': 'about us',
        },
        'lng-about-us__text1':{
            'en': 'Our team of professionals, sharing the same values, was created with the purpose of providing legal support to businesses and manufacturers in the pharmaceutical industry. Our fundamental principles include consumer orientation, individual approach, creation of benefits and long-term relationships. Having many years of experience, we will develop the best strategy to meet your needs.',
        },
        'lng-about-us__text2':{
        "en": "Considerable experience of our team in such areas as registration/reregistration/amendment of registration dossiers of the pharmaceutical products, certification of medical devices, legalization of dietary supplements, baby food, registration of imported beauty products, certification of pharmaceutical products manufacturing, trademark registration, patenting of inventions, etc. ensures that we will be able to make your work significantly easier, save your time, money and take on a considerable amount of your urgent work with a guarantee of a successful result"
        },
        'lng-more':{
        "en":"Show more"        },
        'lng-less':{
        "en":"Show less"        },
        'lng-servises-title':{
        "en":"our services"
        },
        'lng-servises1':{
        "en":"registration"
        },
        'lng-servises1-card1':{
        "en":"Registration / re-registration / variations of the registration dossier"
        },
        'lng-servises1-card1--back':{
        "en":"Мanufacturing authorization (Registration certificate) for a registered / re-registered pharmaceutical products; changes to the registration dossier."
        },
        'lng-servises1-card2':{
        "en":"Legalization of imported beauty products"
        },
        'lng-servises1-card2--back':{
        "en":"Conclusion and Appendix to the Conclusion of the State Sanitary and Epidemiological Examination. Report on research work. Approved text for product labeling"
        },
        'lng-servises1-card3':{
        "en":"Legalization of dietary supplements, baby food"
        },
        'lng-servises1-card3--back':{
        "en":"Conclusion and Appendix to the Conclusion of the State Sanitary and Epidemiological Examination. Report on research work. Approved text for product labeling."
        },
        'lng-servises1-card4':{
        "en":"Certification of medical devices"
        },
        'lng-servises1-card4--back':{
        "en":"Declaration of Conformity with Annex / Certificate of Conformity / Entry of Information into the Register of Persons Responsible for Putting Medical Devices into Service."
        },
        'lng-servises2':{
        "en":"MARKET SURVEILLANCE"
        },
            'lng-servises2-card1':{
            "en":"Compliance with the requirements of quality and safety of medicines during circulation on the territory of Ukraine"
            },
            'lng-servises2-card1--back':{
            "en":"Permission for circulation of medicinal products, introduction of appropriate changes in the database of the State Service of Ukraine for Medicinal Products and Drug Control."
            },
            'lng-servises2-card2':{
            "en":"Development and approval of the quality certificate template for the manufacturer"
            },
            'lng-servises2-card2--back':{
            "en":"Certificate of quality analysis of a pharmaceutical product in accordance with the requirements of the legislation of Ukraine"
            },
            'lng-servises2-card3':{
            "en":"Implementation of packaging in the process of manufacture"
            },
            'lng-servises2-card3--back':{
            "en":"Permission for circulation of packaging in the territory of Ukraine"
            },
            'lng-servises2-card4':{
            "en":"Pharmacovigilance"
            },
            'lng-servises2-card4--back':{
            "en":"Рositive conclusion of specialized medical examination for pharmacovigilance, audit, etc."
            },
            'lng-servises3':{
                "en":"CERTIFICATION OF PHARMACEUTICAL PRODUCTS MANUFACTURING"
                },
                    'lng-servises3-card1':{
                    "en":"Changes to the list of medicines registered or scheduled for registration in Ukraine (GMP)"
                    },
                    'lng-servises3-card1--back':{
                    "en":"Updated list of medicines registered or scheduled for registration in Ukraine (Supplement to GMP Opinion)"
                    },
                    'lng-servises3-card2':{
                    "en":"Certification of pharmaceutical products manufacturing for compliance with the requirements of good manufacturing practice (GMP)"
                    },
                    'lng-servises3-card2--back':{
                    "en":"Updated list of medicines registered or scheduled for registration in Ukraine (Supplement to GMP Opinion)"
                    },
                    'lng-servises3-card3':{
                    "en":"Certification of pharmaceutical products manufacturing for compliance with the requirements of good manufacturing practice (GMP)"
                    },
                    'lng-servises3-card3--back':{
                    "en":"GMP Compliance Statement with a List of Medicines Registered or Scheduled for Registration in Ukraine (GMP)"
                    },
                    'lng-servises3-card4':{
                    "en":"Recognition of EC Certificate of Conformity on compliance of the manufacturing conditions of the pharmaceutical products with the requirements of good manufacturing practice (GMP)"
                    },
                    'lng-servises3-card4--back':{
                    "en":"Recognition of EC Certificate of Conformity on compliance"
                    },
            'lng-servises4':{
                "en":"other services"
                },
                    'lng-servises4-card1':{
                    "en":"Patenting inventions and utility models in Ukraine and abroad"
                    },
                    'lng-servises4-card1--back':{
                    "en":"Patent for Inventions and Utility Models in Ukraine and abroad"
                    },
                    'lng-servises4-card2':{
                    "en":"Trademark research in Ukraine and abroad"
                    },
                    'lng-servises4-card2--back':{
                    "en":"Trademark information in Ukraine and abroad"
                    },
                    'lng-servises4-card3':{
                    "en":"Medical translation: technical. documentation, manuals, licenses, GMP certificates"
                    },
                    'lng-servises4-card3--back':{
                    "en":"Medical translations: technical documentation, instructions, licenses, certificates and more"
                    },
                    'lng-servises4-card4':{
                    "en":"Trademark registration in Ukraine and abroad"
                    },
                    'lng-servises4-card4--back':{
                    "en":"TM in Ukraine and abroad"
                    },
    'lng-clients':{
        "en":"our clients"
        },
    'lng-advantages':{
        "en":"advantages"
        },
        'lng-advantages-card1':{
            "en":"RESULT GUARANTEE"
            },
            'lng-advantages-card1--text':{
            "en":"Professionalism and optimal solution of tasks are our credo"
            },
            'lng-advantages-card2':{
            "en":"INDIVIDUAL APPROACH"
            },
            'lng-advantages-card2--text':{
            "en":"Deep study of your needs and protection of interests according to the law"
            },
            'lng-advantages-card3':{
            "en":"TRANSPARENCY"
            },
            'lng-advantages-card3--text':{
            "en":"Understanding of each stage and reporting during the entire period of cooperation"
            },
            'lng-advantages-card4':{
            "en":"CONVENIENCE"
            },
            'lng-advantages-card4--text':{
            "en":"Saving your time and costs"
            },
    'lng-time':{
    "en":"MON-FRI: 09:00 - 20:00"
    },
    }

    let hash = window.location.hash.substring(2);
    console.log(hash)
    select.value = hash;

    if (hash == "en"){
       document.querySelector('.lng-mob-menu1').innerHTML = langContent['menu1']['en']; 
       document.querySelector('.lng-mob-menu2').innerHTML = langContent['menu2']['en']; 
       document.querySelector('.lng-mob-menu3').innerHTML = langContent['menu3']['en']; 
       document.querySelector('.lng-mob-menu4').innerHTML = langContent['menu4']['en']; 
       document.querySelector('.lng-menu1').innerHTML = langContent['menu1']['en']; 
       document.querySelector('.lng-menu2').innerHTML = langContent['menu2']['en']; 
       document.querySelector('.lng-menu3').innerHTML = langContent['menu3']['en']; 
       document.querySelector('.lng-menu4').innerHTML = langContent['menu4']['en']; 
       document.querySelector('.lng-hero1').innerHTML = langContent['hero1']['en']; 
       document.querySelector('.lng-hero2').innerHTML = langContent['hero2']['en']; 
       document.querySelector('.lng-about-us__title').innerHTML = langContent['lng-about-us__title']['en']; 
       document.querySelector('.lng-about-us__text1').innerHTML = langContent['lng-about-us__text1']['en']; 
       document.querySelector('.lng-about-us__text2').innerHTML = langContent['lng-about-us__text2']['en']; 
       document.querySelector('.lng-more').innerHTML = langContent['lng-more']['en']; 
       document.querySelector('.lng-less').innerHTML = langContent['lng-less']['en']; 
       document.querySelector('.lng-servises-title').innerHTML = langContent['lng-servises-title']['en']; 
       document.querySelector('.lng-servises1').innerHTML = langContent['lng-servises1']['en']; 
       document.querySelector('.lng-servises1-card1').innerHTML = langContent['lng-servises1-card1']['en']; 
       document.querySelector('.lng-servises1-card1--back').innerHTML = langContent['lng-servises1-card1--back']['en']; 
       document.querySelector('.lng-servises1-card2').innerHTML = langContent['lng-servises1-card2']['en']; 
       document.querySelector('.lng-servises1-card2--back').innerHTML = langContent['lng-servises1-card2--back']['en']; 
       document.querySelector('.lng-servises1-card3').innerHTML = langContent['lng-servises1-card3']['en']; 
       document.querySelector('.lng-servises1-card3--back').innerHTML = langContent['lng-servises1-card3--back']['en']; 
       document.querySelector('.lng-servises1-card4').innerHTML = langContent['lng-servises1-card4']['en']; 
       document.querySelector('.lng-servises1-card4--back').innerHTML = langContent['lng-servises1-card4--back']['en'];
        document.querySelector('.lng-servises2').innerHTML = langContent['lng-servises2']['en']; 
        document.querySelector('.lng-servises2-card1').innerHTML = langContent['lng-servises2-card1']['en']; 
       document.querySelector('.lng-servises2-card1--back').innerHTML = langContent['lng-servises2-card1--back']['en']; 
       document.querySelector('.lng-servises2-card2').innerHTML = langContent['lng-servises2-card2']['en']; 
       document.querySelector('.lng-servises2-card2--back').innerHTML = langContent['lng-servises2-card2--back']['en']; 
       document.querySelector('.lng-servises2-card3').innerHTML = langContent['lng-servises2-card3']['en']; 
       document.querySelector('.lng-servises2-card3--back').innerHTML = langContent['lng-servises2-card3--back']['en']; 
       document.querySelector('.lng-servises2-card4').innerHTML = langContent['lng-servises2-card4']['en']; 
       document.querySelector('.lng-servises2-card4--back').innerHTML = langContent['lng-servises2-card4--back']['en'];
        document.querySelector('.lng-servises3').innerHTML = langContent['lng-servises3']['en']; 
        document.querySelector('.lng-servises3-card1').innerHTML = langContent['lng-servises3-card1']['en']; 
       document.querySelector('.lng-servises3-card1--back').innerHTML = langContent['lng-servises3-card1--back']['en']; 
       document.querySelector('.lng-servises3-card2').innerHTML = langContent['lng-servises3-card2']['en']; 
       document.querySelector('.lng-servises3-card2--back').innerHTML = langContent['lng-servises3-card2--back']['en']; 
       document.querySelector('.lng-servises3-card3').innerHTML = langContent['lng-servises3-card3']['en']; 
       document.querySelector('.lng-servises3-card3--back').innerHTML = langContent['lng-servises3-card3--back']['en']; 
       document.querySelector('.lng-servises3-card4').innerHTML = langContent['lng-servises3-card4']['en']; 
       document.querySelector('.lng-servises3-card4--back').innerHTML = langContent['lng-servises3-card4--back']['en'];
        document.querySelector('.lng-servises4').innerHTML = langContent['lng-servises4']['en']; 
        document.querySelector('.lng-servises4-card1').innerHTML = langContent['lng-servises4-card1']['en']; 
       document.querySelector('.lng-servises4-card1--back').innerHTML = langContent['lng-servises4-card1--back']['en']; 
       document.querySelector('.lng-servises4-card2').innerHTML = langContent['lng-servises4-card2']['en']; 
       document.querySelector('.lng-servises4-card2--back').innerHTML = langContent['lng-servises4-card2--back']['en']; 
       document.querySelector('.lng-servises4-card3').innerHTML = langContent['lng-servises4-card3']['en']; 
       document.querySelector('.lng-servises4-card3--back').innerHTML = langContent['lng-servises4-card3--back']['en']; 
       document.querySelector('.lng-servises4-card4').innerHTML = langContent['lng-servises4-card4']['en']; 
       document.querySelector('.lng-servises4-card4--back').innerHTML = langContent['lng-servises4-card4--back']['en'];
       document.querySelector('.lng-clients').innerHTML = langContent['lng-clients']['en']; 
       document.querySelector('.lng-advantages').innerHTML = langContent['lng-advantages']['en'];
       document.querySelector('.lng-advantages-card1').innerHTML = langContent['lng-advantages-card1']['en']; 
       document.querySelector('.lng-advantages-card1--text').innerHTML = langContent['lng-advantages-card1--text']['en']; 
       document.querySelector('.lng-advantages-card2').innerHTML = langContent['lng-advantages-card2']['en']; 
       document.querySelector('.lng-advantages-card2--text').innerHTML = langContent['lng-advantages-card2--text']['en']; 
       document.querySelector('.lng-advantages-card3').innerHTML = langContent['lng-advantages-card3']['en']; 
       document.querySelector('.lng-advantages-card3--text').innerHTML = langContent['lng-advantages-card3--text']['en']; 
       document.querySelector('.lng-advantages-card4').innerHTML = langContent['lng-advantages-card4']['en']; 
       document.querySelector('.lng-advantages-card4--text').innerHTML = langContent['lng-advantages-card4--text']['en'];
       document.querySelector('.lng-time').innerHTML = langContent['lng-time']['en'];
 
    }
}

changeLanguages()