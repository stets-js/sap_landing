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
    }
}

changeLanguages()