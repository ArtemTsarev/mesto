let profile = document.querySelector(".profile");
let profile_edit = profile.querySelector(".profile__edit-button");
let model = document.querySelector(".model");
let name = profile.querySelector(".profile__title");
let copyright = profile.querySelector(".profile__subtitle");
let model_close = model.querySelector(".model__close");
let username = model.querySelector(".model__username");
let usercopyright = model.querySelector(".model__copyright");
let complete_btn = model.querySelector(".model__complete");


profile_edit.addEventListener("click", edit_profile);
complete_btn.addEventListener("click", end);
model_close.addEventListener("click", model_hide);

function edit_profile(){
    model.classList.add("model-visiable");
    username.setAttribute("value", "Жак-Ив Кусто");
    usercopyright.setAttribute("value", "Исследователь океана");
}


function model_hide(){
    model.classList.remove("model-visiable");
}

function end(){
    model.classList.remove("model-visiable");
    name.textContent = username.value;
    copyright.textContent = usercopyright.value;
}