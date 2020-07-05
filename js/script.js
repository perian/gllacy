/*slider*/
let sliderButtons = document.querySelectorAll(".slider-button");
let sliderItems = document.querySelectorAll(".slider-item");
let body = document.querySelector("body");
/*feedback modal-window*/
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
    feedback.classList.remove("feedback-error")
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("feedback-error")
    feedbackTextArea.focus();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("feedbackTextArea", feedbackTextArea.value);
    }
  }

  if (!feedbackEmail.value) {
    evt.preventDefault();
    feedback.classList.remove("feedback-error")
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("feedback-error")
    feedbackEmail.focus();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("feedbackEmail", feedbackEmail.value);
    }
  }

  if (!feedbackName.value) {
    evt.preventDefault();
    feedback.classList.remove("feedback-error")
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("feedback-error");
    feedbackName.focus();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("feedbackName", feedbackName.value);
    }
  }
});

/*Slider*/
sliderButtons[0].onclick = function () {
  for (let sliderButton of sliderButtons ) {
    sliderButton.classList.remove("current");
  }

  for (let sliderItem of sliderItems ) {
    sliderItem.classList.remove("slider-item-current");
  }

  body.classList.add("slider-item-1");
  body.classList.remove("slider-item-2");
  body.classList.remove("slider-item-3");
  sliderButtons[0].classList.add("current");
  sliderItems[0].classList.add("slider-item-current");
}

sliderButtons[1].onclick = function () {
  for (let sliderButton of sliderButtons ) {
    sliderButton.classList.remove("current");
  }

  for (let sliderItem of sliderItems ) {
    sliderItem.classList.remove("slider-item-current");
  }

  body.classList.add("slider-item-2");
  body.classList.remove("slider-item-1");
  body.classList.remove("slider-item-3");
  sliderButtons[1].classList.add("current");
  sliderItems[1].classList.add("slider-item-current");
}

sliderButtons[2].onclick = function () {
  for (let sliderButton of sliderButtons ) {
    sliderButton.classList.remove("current");
  }

  for (let sliderItem of sliderItems ) {
    sliderItem.classList.remove("slider-item-current");
  }

  body.classList.add("slider-item-3");
  body.classList.remove("slider-item-1");
  body.classList.remove("slider-item-2");
  sliderButtons[2].classList.add("current");
  sliderItems[2].classList.add("slider-item-current");
}
