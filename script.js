//darkmode on/off
const checkbox = document.getElementById('myCheckbox')
const main_ID = document.getElementById('main_ID')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    main_ID.classList.remove("dark_mode");
  } else {
    main_ID.classList.add("dark_mode");
  }
})

//show side menu on 800px
window.addEventListener('scroll', function() {
  if (window.scrollY > 800) {
      document.getElementById('sideMenu').classList.add('showMenu');
  } else {
      document.getElementById('sideMenu').classList.remove('showMenu');
  }
});

const ikia_btn = document.getElementById('ikia-btn')
const ikia_content = document.getElementById('ikia-content')

ikia_btn.addEventListener('click', (event) => {
  ikia_content.classList.toggle('show');
})

const aristos_btn = document.getElementById('aristos-btn')
const aristos_content = document.getElementById('aristos-content')

aristos_btn.addEventListener('click', (event) => {
  aristos_content.classList.toggle('show');
})

const creatiload_btn = document.getElementById('creatiload-btn')
const creatiload_content = document.getElementById('creatiload-content')

creatiload_btn.addEventListener('click', (event) => {
  creatiload_content.classList.toggle('show');
})

const grandauto_btn = document.getElementById('grandauto-btn')
const grandauto_content = document.getElementById('grandauto-content')

grandauto_btn.addEventListener('click', (event) => {
  grandauto_content.classList.toggle('show');
})

const timegement_btn = document.getElementById('timegement-btn')
const timegement_content = document.getElementById('timegement-content')

timegement_btn.addEventListener('click', (event) => {
  timegement_content.classList.toggle('show');
})

const tradewind_btn = document.getElementById('tradewind-btn')
const tradewind_content = document.getElementById('tradewind-content')

tradewind_btn.addEventListener('click', (event) => {
  tradewind_content.classList.toggle('show');
})


//form
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});


//inputs
document.querySelectorAll('input').forEach(function(input) {
  input.addEventListener('focus', function() {
      this.nextElementSibling.classList.add('moveUp');
  });
  input.addEventListener('focusout', function() {
      if (!this.value) {
          this.nextElementSibling.classList.remove('moveUp');
      }
  });
});

document.querySelectorAll('textarea').forEach(function(textarea) {
  textarea.addEventListener('focus', function() {
      this.nextElementSibling.classList.add('moveUp');
  });
  textarea.addEventListener('focusout', function() {
      if (!this.value) {
          this.nextElementSibling.classList.remove('moveUp');
      }
  });
});