const feedbackFormData = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input");

try {
    const dataFromStorage = JSON.parse(localStorage.getItem(feedbackFormData));
    const {email, message} = dataFromStorage;

    if(dataFromStorage) {
        input.value = email;
        textarea.value = message;
    };

} catch {
    if (!JSON.parse(localStorage.getItem(feedbackFormData))) {
        console.log();
    }else {
        console.log("Parse error!");
    }
}

form.addEventListener("input", () => {
    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value.trim();
    })

    localStorage.setItem(feedbackFormData, JSON.stringify(formObject))
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = JSON.parse(localStorage.getItem(feedbackFormData));

    if (formData && formData.email !== "" && formData.message !== "") {
        console.log(formData);
        localStorage.removeItem(feedbackFormData);
        form.reset();
    } else {
        alert("Все поля формы должны быть заполнены");
    }
});