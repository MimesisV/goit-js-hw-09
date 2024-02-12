const feedbackFormData = "feedback-form-state";

const form = document.querySelector(".feedback-form");

function readFormData (form) {
    const email = form.email.value;
    const message = form.message.value;
    return {
        email,
        message
    }
}

try {
    const dataFromStorage = JSON.parse(localStorage.getItem(feedbackFormData));
    console.log(dataFromStorage.email);
    console.log(dataFromStorage.message);

    if(dataFromStorage) {
        form.email.value = dataFromStorage.email;
        form.message.value = dataFromStorage.message;
    };

} catch {
    if (!JSON.parse(localStorage.getItem(feedbackFormData))) {
        console.log();
    }else {
        console.log("Parse error!");
    }
}

form.addEventListener("input", (event) => {
    const formData = readFormData(event.currentTarget);

    localStorage.setItem(feedbackFormData, JSON.stringify(formData))
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