import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY))
const formData = {...savedMessage};

const inputRef = document.querySelector('input');
const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('textarea');


formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onForm, 500));

getText();

function onForm(evt) {
    formData[evt.target.name] = evt.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function onFormSubmit(evt) {
    evt.preventDefault()
    evt.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)

    try {
        console.log(savedMessage)
    } catch {(error)
    console.log(error.name)
    console.log(error.message)
}
};

function getText() {

    if (savedMessage) {
        formRef.email.value = savedMessage.email || '';
        formRef.message.value = savedMessage.message || '';
    }
}


