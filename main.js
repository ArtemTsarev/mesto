let profile = document.querySelector(".profile");
let profile_name = profile.querySelector(".profile__title");
let profile_copyright = profile.querySelector(".profile__copyright");
let formElement = document.querySelector(".form__element");
// О том, как это делать, расскажем позже.
let profileEdit_btn = profile.querySelector(".profile__edit-button");
let model = document.querySelector(".model");
// Находим поля формы в DOM
let nameInput = model.querySelector(".model__username").value;
let jobInput = model.querySelector(".model__copyright").value;

model.classList.add("model-hide");
// Выберите элементы, куда должны быть вставлены значения полей
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
    // Вставьте новые значения с помощью textContent
    profile_name.textContent = nameInput;
    profile_copyright.textContent = jobInput;
}

function edit_profile(){
    model.classList.add("model-block");
    model.classList.remove("model-hide");
}

function model_hide(){
    model.classList.remove("model-block");
}

function end(){
    model.classList.remove("model-block");
    profile_name.textContent = nameInput.value;
    profile_copyright.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
profileEdit_btn.addEventListener("click", edit_profile);
modelClose.addEventListener("click", model_hide);
formElement.addEventListener('click', end);