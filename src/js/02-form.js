const feedbackFormData = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

const massageFromStorage = localStorage.getItem(feedbackFormData);

if(massageFromStorage) {
    textarea.value = massageFromStorage;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    localStorage.removeItem(feedbackFormData)
    form.reset();
});

textarea.addEventListener("input", (event) => {
    const massage = event.target.value;

    localStorage.setItem(feedbackFormData, massage)
})