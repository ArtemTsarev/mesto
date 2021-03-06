let profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile__title");
let profileCopyright = profile.querySelector(".profile__subtitle");
let formElement = document.querySelector(".form");
// О том, как это делать, расскажем позже.
let profileEditBtn = profile.querySelector(".profile__edit-button");
let model = document.querySelector(".model");
// Находим поля формы в DOM
let nameInput = model.querySelector(".model__input_type_username");
let jobInput = model.querySelector(".model__input_type_copyright");
let modelClose = document.querySelector(".form__close");
let page = document.querySelector(".page");
let content = page.querySelector(".content");

// Выберите элементы, куда должны быть вставлены значения полей
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет


function modelHide(){
    model.classList.remove("model_status_visiable");
}

function editProfile(){
    model.classList.add("model_status_visiable");
//    model.style.display = "block";
    nameInput.value = profileName.textContent;
    jobInput.value = profileCopyright.textContent;
    content.classList.add("content_type_dark");

}

function hideOpacity(){
    content.classList.remove("content_type_dark");
}

function end(submitEvent){
    submitEvent.preventDefault();
    profileName.textContent = nameInput.value;
    profileCopyright.textContent = jobInput.value;
    modelHide();
    hideOpacity();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
modelClose.addEventListener("click", hideOpacity);
profileEditBtn.addEventListener("click", editProfile);
modelClose.addEventListener("click", modelHide);
formElement.addEventListener("submit", end);
