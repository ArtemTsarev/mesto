let profile = document.querySelector(".profile");
let profileEdit = profile.querySelector(".profile__edit-button");
let model = document.querySelector(".model");
let name = profile.querySelector(".profile__title");
let copyright = profile.querySelector(".profile__subtitle");
let modelClose = model.querySelector(".model__close");
let userName = model.querySelector(".model__username");
// let userCopyright = model.querySelector(".model__copyright");
// let completeBtn = model.querySelector(".model__complete");
let formElement = model.querySelector(".form__element");

// function editProfile(){
//     model.classList.add("model-visiable");
//     userName.value = name.textContent;
//     userCopyright.value = copyright.textContent;
// }


// function modelHide(){
//     model.classList.remove("model-visiable");
// }

// function end(){
//     name.textContent = username.value;
//     copyright.textContent = usercopyright.value;
//     evt.preventSubmitHandler();
//     modelHide();
// }

// profileEdit.addEventListener("click", editProfile);
// modelClose.addEventListener("click", modelHide);
// formElement.addEventListener('submit', end);

// Находим форму в DOM
let formElement = model.querySelector(".form__element");

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    // Находим поля формы в DOM
    let nameInput = model.querySelector(".model__username").value;
    let jobInput = model.querySelector(".model__copyright").value;

    function editProfile(){
        model.classList.add("model-visiable");
        userName.value = name.textContent;
        userCopyright.value = copyright.textContent;
        }

        function modelHide(){
            model.classList.remove("model-visiable");
        }

        function end(){
            name.textContent = username.value;
            copyright.textContent = usercopyright.value;
            evt.preventSubmitHandler();
            modelHide();
        }
    
    
}

formElement.addEventListener('submit', formSubmitHandler);
profileEdit.addEventListener("click", editProfile);
modelClose.addEventListener("click", modelHide);
formElement.addEventListener('submit', end);