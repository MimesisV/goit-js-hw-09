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

    // Array.from(form.elements).forEach (element => {
    //     const storageValue = dataFromStorage[element.name];
        
    //     if (storageValue) {
    //         element.value = storageValue;
    //     }
    // })
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
        formObject[key] = value;
    })

    localStorage.setItem(feedbackFormData, JSON.stringify(formObject))
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(feedbackFormData)));

    localStorage.removeItem(feedbackFormData)
    form.reset();
 });