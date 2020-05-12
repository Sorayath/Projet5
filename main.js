/// CITATION  /////
let citationDebut1 = ["La beauté ",
                      "Fais de ta vie un rêve, ",
                      "L'éducation est l'arme ",
                      "Aucun de nous, ",
                      "La plus belle courbe "
                     ];
let citationMidle1 = ["est dans les yeux ",
                      "et d'un rêve, ",
                      "la plus puissante qu'on puisse utiliser ",
                      "en agissant seul, ",
                      "sur le corps d'une femme "
                      ];

let citationFin1 = ["de celui qui regarde. ",
                      "une réalité",
                      "pour changer le monde.",
                      "ne peut atteindre le succès.",
                      "est son sourire."
                     ];


let citationDebut = ["Garder toujours ",
                "La vie est un mystère ",
                "La vie sans musique ",
                "Soit A un succès dans la vie. ",
                "Personne n'est trop vieux ",
                "La seule façon de faire du bon travail ",
                "Pour réussir, ",
                "Un énorme succès ",
                "Je suis reconnaissant à tous ceux ",
                "La seule chose qui se dresse entre vous et votre rêve, ",
                " Un pessimiste voit la difficulté dans chaque opportunité, ",
                "Le succès c’est d’aller ",
                "Le succès n’est pas la clé du bonheur. ",
                "Les gagnants ",
                "Ce n’est pas parce que les choses sont difficiles ",
                "Certains veulent que ça arrive, ",
                "La plus grande erreur ",
                "Le génie est fait ",
                "Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. ",
                "Pour réussir, "];


let citationMidle = ["le sourire",
                " qu'il faut vivre, ",
                " est tout simplement une erreur",
                " alors A = x + y + z, ",
                " pour se fixer un nouvel objectif ",
                " est d’aimer ce que vous faites. ",
                " votre désir de réussite doit être plus grand ",
                " est la meilleure ",
                " qui m’ont dit NON. ",
                ", c’est la volonté d’essayer ",
                "  un optimiste voit l’opportunité ",
                " d’échec en échec ",
                " le bonheur est la clé du succès. ",
                " trouvent des moyens, ",
                " que nous n’osons pas,  ",
                " d’autres aimeraient que ça arrive ",
                " que puisse faire un homme ",
                " d’un pour cent d’inspiration ",
                " alors sortez des sentiers battus. ",
                " retenez bien ces trois maximes: "];

let citationFin = [" quoi qu'il arrive",
                " et non un problème à résoudre.",
                ", une fatigue, un exil",
                " où x = travailler, y = s'amuser, z = se taire.",
                " ou réaliser de nouveaux rêves",
                " si vous n’avez pas encore trouvé, continuez à chercher.",
                " que votre peur de l’échec.",
                " des vengeances.",
                " c’est à grâce à eux que je suis moi-même.",
                " et la conviction qu’il est réellement possible.",
                "  dans chaque difficulté.",
                " sans perdre son enthousiasme.",
                "  si vous aimez ce que vous faites, vous réussirez.",
                " les perdants des excuses.",
                " c’est parce que nous n’osons pas qu’elles sont difficiles. ",
                " et d’autres font que ça arrive.",
                " est d’avoir peur d’en faire une.",
                " et de quatre-vingt-dix-neuf pour cent de transpiration.",
                " mettez les voiles. Explorez. Rêvez. Découvrez.",
                " voir c’est savoir, vouloir c’est pouvoir, oser c’est avoir."];






let auteurs = ["Sorayath",
              "Gandhi",
              "Friedrich Nietzsche",
              "Albert Einstein",
              "Les Brown",
              "Steve Jobs",
              "Bill Cosby",
              "Frank Sinatra",
              "Albert Einstein",
              "Joel Brown",
              "Winston Churchill",
              "Winston Churchill",
              "Albert Schweitzer",
              "F. D. Roosevelt",
              "Sénèque",
              "Michael Jordan",
              "Elbert Hubbard",
              "Thomas Edison",
              'Mark Twain',
              "Alfred de Musset"
             ];
let aleatoire = null;
let g2citations = null;
let g1citations = null;
let quote = [];

const choisir  = document.querySelector('.choisir')
const btnnombre = document.querySelector('.btnnombre')

///////////////// DEBUT ETAPE 1 /////////////////////

function displayQuote() {

    //Construction des phrases de maniere aleatoire avec les 3 tableaux
    let citation1 = citationDebut[Math.floor(Math.random() * citationDebut.length)];

    let citation2 = citationMidle[Math.floor(Math.random() * citationMidle.length)];

    let citation3 = citationFin[Math.floor(Math.random() * citationFin.length)];

    let citations = [citation1 + citation2 + citation3];

    $('.citation').html(citations);

    aleatoire = Math.floor(Math.random() * auteurs.length);
    $('.auteur').html(auteurs[aleatoire]);
};



$('document').ready(function () {


    displayQuote();


    $('#generer').click(displayQuote);

});


///////////////// FIN ETAPE 1 /////////////////////





///////////////////////////////// DEBUT ETAPEEEEEEEEEEEEEE 2222222222222222222222222 ///////////////////////////////
function generateur1(){
    let nombre = document.getElementById('nombre').value; // recuperer la valeur saisi en input

            if (nombre <= 0 || nombre > 5) {       /// JARRIVE PAS à CONTROLER SI LE NOMBRE EST INFERIEURE OU EGALE à 0
             alert("veuillez saisir une valeur entre 1 et 5");
                

            } else {
                for (let i = 0; i < nombre; i++) {
                    let g1citation1 = citationDebut1[Math.floor(Math.random() * citationDebut1.length)];
                    let g1citation2 = citationMidle1[Math.floor(Math.random() * citationMidle1.length)];
                    let g1citation3 = citationFin1[Math.floor(Math.random() * citationFin1.length)];

                    let g1citations = [g1citation1] + [g1citation2] + [g1citation3];

                    quote[i] = 'citation ' + (i + 1) + ": " + [g1citations];

                    alert(quote[i]);
                }
                
            }
};


function generateur2(){
    let nombre = document.getElementById('nombre').value; // recuperer la valeur saisi en input
            if (nombre != null && nombre <= 5) {

                for (let i = 0; i < nombre; i++) {

                    let g2citation1 = citationDebut[Math.floor(Math.random() * citationDebut.length)];
                    let g2citation2 = citationMidle[Math.floor(Math.random() * citationMidle.length)];
                    let g2citation3 = citationFin[Math.floor(Math.random() * citationFin.length)];

                    let g2citations = [g2citation1] + [g2citation2] + [g2citation3];

                    quote[i] = 'citation ' + (i + 1) + ": " + [g2citations];

                    alert(quote[i]);

                }
            } else {
                alert("veuillez saisir une valeur entre 1 et 5");
            }
};



function quitter(){
    let quitter = document.getElementById('nombre').value;
        for (let i = 0; i < quitter; i++) {
            document.getElementById('divnombre').style.display = 'none'; // cacher la div nombre 
            document.getElementById('divquit').style.display = 'inline'; // afficher la div quitter ou generer une citation
        }
};


function choix(event) {

    let choix = document.getElementById('choix').value;

    if (choix != 1 && choix != 2) {
        alert("veuillez choisir entre 1 ou 2");
    } else {
        if (choix == 1) {
            document.getElementById('divchoix').style.display = 'none'; // cacher la div contenant le choix
            document.getElementById('divnombre').style.display = 'inline'; // afficher la div qui a l'ID Nombre    
            generateur1();
        } else {
            document.getElementById('divchoix').style.display = 'none'; // cacher la div contenant le choix
            document.getElementById('divnombre').style.display = 'inline'; //  Afficher le bouton qui à l'ID btnnombre
            generateur2();
        }

        quitter();
    }
};



 choisir.addEventListener('click', choix);
 btnnombre.addEventListener('click', choix);
        


///////////////////////// FIN ETAPE 222222222222222222/////////////////////









jQuery(function ($) {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 200) {
            $('.navbar').addClass('fixed-top');
        } else if ($(this).scrollTop() == 0) {
            $('.navbar').removeClass('fixed-top');
        }
    });

    function adjustNav() {
        var winWidth = $(window).width(),
            dropdown = $('.dropdown'),
            dropdownMenu = $('.dropdown-menu');

        if (winWidth >= 768) {
            dropdown.on('mouseenter', function () {
                $(this).addClass('show')
                    .children(dropdownMenu).addClass('show');
            });

            dropdown.on('mouseleave', function () {
                $(this).removeClass('show')
                    .children(dropdownMenu).removeClass('show');
            });
        } else {
            dropdown.off('mouseenter mouseleave');
        }
    }

    $(window).on('resize', adjustNav);

    adjustNav();
});