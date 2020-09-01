let profile = document.querySelector(".profile");
let profile_edit = profile.querySelector(".profile__edit-button");
let model = document.querySelector(".model");
let name = profile.querySelector(".profile__title");
let copyright = profile.querySelector(".profile__subtitle");
let model_close = model.querySelector(".model__close");
let username = model.querySelector(".model__username");
let usercopyright = model.querySelector(".model__copyright");
let complete_btn = model.querySelector(".model__complete");
let newName;
let newCopyright;


model.classList.add("model-hide");

function edit_profile(){
    model.classList.remove("model-hide");
    model.classList("model-visiable");
}

function model_hide(){
    model.classList.remove("model-visiable");
    model.classList.add("model-hide");
}

function complete(){
    newName = username.value;
    name.textContent = newName;
    newCopyright = usercopyright.value;
    copyright.textContent = newCopyright;
    model.classList.remove("model-visiable");
    model.classList.add("model-hide");
}