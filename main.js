let profile = document.querySelector(".profile");
let profileName = profile.querySelector(".profile__title");
let profileCopyright = profile.querySelector(".profile__subtitle");
let formElement = document.querySelector(".form");
// О том, как это делать, расскажем позже.
let profileEditBtn = profile.querySelector(".profile__edit-button");
let model = document.querySelector(".model");
// Находим поля формы в DOM
let nameInput = model.querySelector(".form__username");
let jobInput = model.querySelector(".form__copyright");
let modelClose = document.querySelector(".form__close");

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
}

function end(submitEvent){
    submitEvent.preventDefault();
    profileName.textContent = nameInput.value;
    profileCopyright.textContent = jobInput.value;
    modelHide();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileEditBtn.addEventListener("click", editProfile);
modelClose.addEventListener("click", modelHide);
formElement.addEventListener("submit", end);
 