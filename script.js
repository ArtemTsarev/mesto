let profile = document.querySelector(".profile");
let profile_edit = profile.querySelector(".profile__edit-button");
let model = document.querySelector(".model");
let name = profile.querySelector(".profile__title");
let copyright = profile.querySelector(".profile__subtitle");
let model_close = model.querySelector(".model__close");
let username = model.querySelector(".model__username");
let usercopyright = model.querySelector(".model__copyright");
let complete_btn = model.querySelector(".model__complete");


username.setAttribute("value", "Жак-Ив Кусто");
usercopyright.setAttribute("value", "Исследователь океана");
model.classList.add("model-hide");
profile_edit.addEventListener("click", edit_profile);
complete_btn.addEventListener("click", complete);
model_close.addEventListener("click", model_hide);

function edit_profile(){
    model.classList.remove("model-hide");
    model.classList.add("model-visiable");
}


function model_hide(){
    model.classList.remove("model-visiable");
    model.classList.add("model-hide");
}

function complete(){
    name.textContent = username.value;
    copyright.textContent = usercopyright.value;
    model.classList.remove("model-visiable");
    model.classList.add("model-hide");
}