/* ====================================== _____________ Variables Styles _____________ ====================================== */
/* ====================================== _____________ Variables Styles _____________ ====================================== */
/* ====================================== _____________ Functions Styles _____________ ====================================== */
/* ====================================== _____________ Functions Styles _____________ ====================================== */
/* ====================================== _____________ Mixin Styles _____________ ====================================== */
/* ====================================== _____________ Mixin Styles _____________ ====================================== */
/* ====================================== _____________ Classes Styles _____________ ====================================== */
.container_manual {
  width: 95%;
  margin: auto;
  padding: 15px 0;
}
.navbar .container_manual {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
@media (max-width: 767px) {
  .container_manual {
    width: 98%;
  }
}

.mainColor {
  color: #9d182a;
}

.mainBgColor {
  background-color: #9d182a;
}

/* ====================================== _____________ Classes Styles _____________ ====================================== */
/* ====================================== _____________ Reset Styles _____________ ====================================== */
* {
  outline: 0 !important;
  box-shadow: none !important;
}

html {
  font-size: 100%;
}
@media (max-width: 576px) {
  html {
    font-size: 85%;
  }
}
@media (min-width: 576px) and (max-width: 767px) {
  html {
    font-size: 88%;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  html {
    font-size: 90%;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  html {
    font-size: 95%;
  }
}

body {
  font-family: "Avenir LT Std";
}

a,
a:hover {
  text-decoration: none;
  color: inherit;
}

button {
  border: none;
  background-color: transparent;
}

/* ====================================== _____________ Reset Styles _____________ ====================================== */
/* ====================================== _____________ Fonts Styles _____________ ====================================== */
@font-face {
  font-family: "Avenir LT Std";
  src: url("fonts/AvenirLTStd-Black.eot");
  src: url("fonts/AvenirLTStd-Black.eot?#iefix") format("embedded-opentype"), url("fonts/AvenirLTStd-Black.woff2") format("woff2"), url("fonts/AvenirLTStd-Black.woff") format("woff"), url("fonts/AvenirLTStd-Black.ttf") format("truetype"), url("fonts/AvenirLTStd-Black.svg#AvenirLTStd-Black") format("svg");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Avenir LT Std";
  src: url("fonts/AvenirLTStd-BlackOblique.eot");
  src: url("fonts/AvenirLTStd-BlackOblique.eot?#iefix") format("embedded-opentype"), url("fonts/AvenirLTStd-BlackOblique.woff2") format("woff2"), url("fonts/AvenirLTStd-BlackOblique.woff") format("woff"), url("fonts/AvenirLTStd-BlackOblique.ttf") format("truetype"), url("fonts/AvenirLTStd-BlackOblique.svg#AvenirLTStd-BlackOblique") format("svg");
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Avenir LT Std";
  src: url("fonts/AvenirLTStd-Book.eot");
  src: url("fonts/AvenirLTStd-Book.eot?#iefix") format("embedded-opentype"), url("fonts/AvenirLTStd-Book.woff2") format("woff2"), url("fonts/AvenirLTStd-Book.woff") format("woff"), url("fonts/AvenirLTStd-Book.ttf") format("truetype"), url("fonts/AvenirLTStd-Book.svg#AvenirLTStd-Book") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Avenir LT Std";
  src: url("fonts/AvenirLTStd-Book_1.eot");
  src: url("fonts/AvenirLTStd-Book_1.eot?#iefix") format("embedded-opentype"), url("fonts/AvenirLTStd-Book_1.woff2") format("woff2"), url("fonts/AvenirLTStd-Book_1.woff") format("woff"), url("fonts/AvenirLTStd-Book_1.ttf") format("truetype"), url("fonts/AvenirLTStd-Book_1.svg#AvenirLTStd-Book") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Avenir LT Std";
  src: url("fonts/AvenirLTStd-Oblique.eot");
  src: url("fonts/AvenirLTStd-Oblique.eot?#iefix") format("embedded-opentype"), url("fonts/AvenirLTStd-Oblique.woff2") format("woff2"), url("fonts/AvenirLTStd-Oblique.woff") format("woff"), url("fonts/AvenirLTStd-Oblique.ttf") format("truetype"), url("fonts/AvenirLTStd-Oblique.svg#AvenirLTStd-Oblique") format("svg");
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Avenir LT Std";
  src: url("fonts/AvenirLTStd-Medium.eot");
  src: url("fonts/AvenirLTStd-Medium.eot?#iefix") format("embedded-opentype"), url("fonts/AvenirLTStd-Medium.woff2") format("woff2"), url("fonts/AvenirLTStd-Medium.woff") format("woff"), url("fonts/AvenirLTStd-Medium.ttf") format("truetype"), url("fonts/AvenirLTStd-Medium.svg#AvenirLTStd-Medium") format("svg");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Avenir LT Std";
  src: url("fonts/AvenirLTStd-Heavy.eot");
  src: url("fonts/AvenirLTStd-Heavy.eot?#iefix") format("embedded-opentype"), url("fonts/AvenirLTStd-Heavy.woff2") format("woff2"), url("fonts/AvenirLTStd-Heavy.woff") format("woff"), url("fonts/AvenirLTStd-Heavy.ttf") format("truetype"), url("fonts/AvenirLTStd-Heavy.svg#AvenirLTStd-Heavy") format("svg");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Avenir LT Std";
  src: url("fonts/AvenirLTStd-LightOblique.eot");
  src: url("fonts/AvenirLTStd-LightOblique.eot?#iefix") format("embedded-opentype"), url("fonts/AvenirLTStd-LightOblique.woff2") format("woff2"), url("fonts/AvenirLTStd-LightOblique.woff") format("woff"), url("fonts/AvenirLTStd-LightOblique.ttf") format("truetype"), url("fonts/AvenirLTStd-LightOblique.svg#AvenirLTStd-LightOblique") format("svg");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Avenir LT Std";
  src: url("fonts/AvenirLTStd-HeavyOblique.eot");
  src: url("fonts/AvenirLTStd-HeavyOblique.eot?#iefix") format("embedded-opentype"), url("fonts/AvenirLTStd-HeavyOblique.woff2") format("woff2"), url("fonts/AvenirLTStd-HeavyOblique.woff") format("woff"), url("fonts/AvenirLTStd-HeavyOblique.ttf") format("truetype"), url("fonts/AvenirLTStd-HeavyOblique.svg#AvenirLTStd-HeavyOblique") format("svg");
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Avenir LT Std";
  src: url("fonts/AvenirLTStd-Light.eot");
  src: url("fonts/AvenirLTStd-Light.eot?#iefix") format("embedded-opentype"), url("fonts/AvenirLTStd-Light.woff2") format("woff2"), url("fonts/AvenirLTStd-Light.woff") format("woff"), url("fonts/AvenirLTStd-Light.ttf") format("truetype"), url("fonts/AvenirLTStd-Light.svg#AvenirLTStd-Light") format("svg");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Avenir LT Std";
  src: url("fonts/AvenirLTStd-MediumOblique.eot");
  src: url("fonts/AvenirLTStd-MediumOblique.eot?#iefix") format("embedded-opentype"), url("fonts/AvenirLTStd-MediumOblique.woff2") format("woff2"), url("fonts/AvenirLTStd-MediumOblique.woff") format("woff"), url("fonts/AvenirLTStd-MediumOblique.ttf") format("truetype"), url("fonts/AvenirLTStd-MediumOblique.svg#AvenirLTStd-MediumOblique") format("svg");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Avenir LT Std";
  src: url("fonts/AvenirLTStd-BookOblique.eot");
  src: url("fonts/AvenirLTStd-BookOblique.eot?#iefix") format("embedded-opentype"), url("fonts/AvenirLTStd-BookOblique.woff2") format("woff2"), url("fonts/AvenirLTStd-BookOblique.woff") format("woff"), url("fonts/AvenirLTStd-BookOblique.ttf") format("truetype"), url("fonts/AvenirLTStd-BookOblique.svg#AvenirLTStd-BookOblique") format("svg");
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Avenir LT Std";
  src: url("fonts/AvenirLTStd-Roman.eot");
  src: url("fonts/AvenirLTStd-Roman.eot?#iefix") format("embedded-opentype"), url("fonts/AvenirLTStd-Roman.woff2") format("woff2"), url("fonts/AvenirLTStd-Roman.woff") format("woff"), url("fonts/AvenirLTStd-Roman.ttf") format("truetype"), url("fonts/AvenirLTStd-Roman.svg#AvenirLTStd-Roman") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
/* ====================================== _____________ Fonts Styles _____________ ====================================== */
/* ====================================== _____________ Global Styles _____________ ====================================== */
/* ====================================== _____________ Global Styles _____________ ====================================== */
/* ====================================== _____________ Grids Styles _____________ ====================================== */
/* ====================================== _____________ Grids Styles _____________ ====================================== */
/* ====================================== _____________ Header Styles _____________ ====================================== */
header .navbar_brand img {
  width: 150px;
}
header .navbar_list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
header .navbar_list_item {
  margin: 0 8px;
}
header .navbar_list_item_link {
  color: #a7a3a2;
}
.country_lang header .navbar_list_item_link {
  color: #fff;
}
header .navbar_list_item.dropdown .dropdown-menu {
  right: 0;
  left: auto;
  min-width: 350px;
  padding: 12px 18px;
  background-color: black;
  color: #fff;
}
header .navbar_list_item.dropdown .dropdown-menu .dropdown_content_title {
  font-size: 0.9rem;
  padding-bottom: 5px;
  position: relative;
}
header .navbar_list_item.dropdown .dropdown-menu .dropdown_content_title::before {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  width: 15%;
  height: 1.5px;
  background-color: #9d182a;
  z-index: 1;
}
header .navbar_list_item.dropdown .dropdown-menu .dropdown_content .dropdown-item {
  padding: 0;
  margin: 10px 0;
  color: #fff;
}

/* ====================================== _____________ Header Styles _____________ ====================================== */
/* ====================================== _____________ Footer Styles _____________ ====================================== */
/* ====================================== _____________ Footer Styles _____________ ====================================== */
/* ====================================== _____________ Sidebar Styles _____________ ====================================== */
/* ====================================== _____________ Sidebar Styles _____________ ====================================== */
/* ====================================== _____________ Forms Styles _____________ ====================================== */
/* ====================================== _____________ Forms Styles _____________ ====================================== */
/* ====================================== _____________ Buttons Styles _____________ ====================================== */
/* ====================================== _____________ Buttons Styles _____________ ====================================== */
/* ====================================== _____________ Slider Styles _____________ ====================================== */
/* ====================================== _____________ Slider Styles _____________ ====================================== */
/* ====================================== _____________ Slider Styles _____________ ====================================== */
/* ====================================== _____________ Slider Styles _____________ ====================================== */
/* ====================================== _____________ Home Page Styles _____________ ====================================== */
/* ====================================== _____________ Home Page Styles _____________ ====================================== */
/* ====================================== _____________ Theme Styles _____________ ====================================== */
/* ====================================== _____________ Theme Styles _____________ ====================================== */

/*# sourceMappingURL=style.cs.map */
