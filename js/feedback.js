let feedbackOpen = document.querySelector(".contacts .button");
let feedbackClose = document.querySelector(".close-button");
let feedback = document.querySelector(".feedback");
let feedbackForm = document.querySelector(".form-feedback");
let feedbackName = document.querySelector("[name=feedback-name]");
let feedbackEmail = document.querySelector("[name=feedback-email]");
let feedbackTextArea = document.querySelector("[name=custumer-appeal]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("feedbackName");
} catch (err) {
  isStorageSupport = false
}

feedbackOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("feedback-open");
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("feedback-open");

  feedback.classList.remove("feedback-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedback.classList.contains("feedback-open")) {
      evt.preventDefault();
      feedback.classList.remove("feedback-open");
      feedback.classList.remove("feedback-error");
    }
  }
});

feedbackForm.addEventListener("submit", function (evt) {

  if (!feedbackTextArea.value) {
    evt.preventDefault();
    feedback.classList.add("feedback-error")
    feedbackTextArea.focus();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("feedbackTextArea", feedbackTextArea.value);
    }
  }

  if (!feedbackEmail.value) {
    evt.preventDefault();
    feedback.classList.add("feedback-error")
    feedbackEmail.focus();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("feedbackEmail", feedbackEmail.value);
    }
  }

  if (!feedbackName.value) {
    evt.preventDefault();
    feedback.classList.add("feedback-error");
    feedbackName.focus();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("feedbackName", feedbackName.value);
    }
  }

  if (feedback.classList.contains("feedback-open")) {
    feedback.classList.remove("feedback-error");
  }
});
