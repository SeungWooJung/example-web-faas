

//// Click - Move 구현

// document.querySelector('.Menu_Button').addEventListener('click', ClickMove);

// function ClickMove() {
//     if (document.getElementById('cover')) {
//         window.scrollTo(0, 0);
//     }   else if (document.getElementById('about')) {
//         window.scrollTo(0, 300);
//     }   else if (document.getElementById('team')) {
//         window.scrollTo(0, 600);
//     }   else if (document.getElementById('contact')) {
//         window.scrollTo(0, 900);
//     }   else if (document.getElementById('faq')){
//         window.scrollTo(0, 1500);
//     }
// }

document.getElementById('cover').addEventListener('click', ClickMove);

function ClickMove() {
    window.scrollTo(0, 0);
}

document.getElementById('about').addEventListener('click', ClickMove_2);

function ClickMove_2() {
    window.scrollTo(0, 600);
}

document.getElementById('team').addEventListener('click', ClickMove_3);

function ClickMove_3() {
    window.scrollTo(0, 1600);
}

document.getElementById('contact').addEventListener('click', ClickMove_4);

function ClickMove_4() {
    window.scrollTo(0, 2527);
}

document.getElementById('faq').addEventListener('click', ClickMove_5);

function ClickMove_5() {
    window.scrollTo(0, 2960);
}
// 추가적으로 Code 정리작업 진행하기

//// Darken 구현

// document.getElementsByClassName('Top_Pannel').addEventListener('scroll', darken);
window.onscroll = function() {darken()}; //나중에 왜 위 쿼리는 작동하지 않는지 체크하기

function darken() {
    const Top_pan = document.querySelector('.Top_Pannel')
    if (document.documentElement.scrollTop > 100) {
        Top_pan.classList.add('Top_Pannel_darken');
    } else {
        Top_pan.classList.remove('Top_Pannel_darken');
    }
}

//// FAQ 구현
document.querySelectorAll('.FAQ_List_Item').forEach(function(field) {
    field.addEventListener('click', FAQClick);
});

//다른메뉴 클릭시 디테일 오픈 및 기존 클로즈


// function FAQClick() {
//     const mnu_faq = document.getElementsByClassName('FAQ_List_Item');
//     //클릭시 디테일 오픈, 재클릭시 디테일 클로즈
//     if (mnu_faq.classList.contains('active')) {
//         document.getElementsByClassName('FAQ_List_Item').classList.remove('active');
//         document.getElementsByClassName('FAQ_List_Item_Detail').classList.remove('active');
//     } else {
//         document.getElementsByClassName('FAQ_List_Item').classList.add('active');
//         document.getElementsByClassName('FAQ_List_Item_Detail').classList.add('active');
//     }
// }

function FAQClick() {
    const mnu_faq = document.querySelector('.FAQ_List_Item');
    //클릭시 디테일 오픈, 재클릭시 디테일 클로즈
    if (mnu_faq.classList.contains('active')) {
        document.querySelector('.FAQ_List_Item').classList.remove('active');
        document.querySelector('.FAQ_List_Item_Detail').classList.remove('active');
    } else {
        document.querySelector('.FAQ_List_Item').classList.add('active');
        document.querySelector('.FAQ_List_Item_Detail').classList.add('active');
    }
}