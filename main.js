let profile = document.querySelector(".profile");
let profile_name = profile.querySelector(".profile__title");
let profile_copyright = profile.querySelector(".profile__subtitle");
let formElement = document.querySelector(".form__element");
// О том, как это делать, расскажем позже.
let profileEdit_btn = profile.querySelector(".profile__edit-button");
let model = document.querySelector(".model");
// Находим поля формы в DOM
let nameInput = model.querySelector(".model__username");
let jobInput = model.querySelector(".model__copyright");
let modelClose = document.querySelector(".model__close");

model.classList.add("model-hide");
// Выберите элементы, куда должны быть вставлены значения полей
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет


function edit_profile(){
    model.classList.add("model-block");
    nameInput.value = profile_name.textContent;
    jobInput.value = profile_copyright.textContent;
}

function model_hide(){
    model.classList.remove("model-block");
}

function end(submitEvent){
    submitEvent.preventDefault();
    model.classList.remove("model-block");
    profile_name.textContent = nameInput.value;
    profile_copyright.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileEdit_btn.addEventListener("click", edit_profile);
modelClose.addEventListener("click", model_hide);
formElement.addEventListener("submit", end);
 