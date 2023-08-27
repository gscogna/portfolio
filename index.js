const soundCloud = document.querySelector('.sound-cloud')
const off = document.querySelector('#off')
const on = document.querySelector('#on')
const myAudio = document.querySelector('#myAudio')

off.addEventListener('click', () => soundTrack('off'))
on.addEventListener('click', () => soundTrack('on'))

const soundTrack = (soundState) => {
  if (soundState === 'off') {
    on.style.display = 'block'
    off.style.display = 'none'
    soundCloud.style.color = '#08fdd8'
    myAudio.play()
  } else if (soundState === 'on') {
    on.style.display = 'none'
    off.style.display = 'block'
    soundCloud.style.color = '#f50057'
    myAudio.pause()
  }
}

// Play music functionality

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const SideNav = document.querySelector('.aside');
const navLinks = document.querySelectorAll('.nav-links a');

btnBars.addEventListener('click', () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    myFunc('close');
  });
});

const myFunc = (navCondition) => {
  if (navCondition === 'open') {
    SideNav.classList.add('show-nav');
    btnTimes.style.display = 'block';
    btnBars.style.display = 'none';
  } else if (navCondition === 'close') {
    SideNav.classList.remove('show-nav');
    btnTimes.style.display = 'none';
    btnBars.style.display = 'block';
  }
};

// Part 1 javascript functionality ends here
$(document).ready(function () {
  if (
    !$('#myCanvas').tagcanvas(
      {
        textColour: '#08fdd8',
        outlineColour: 'transparent',
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
      },
      'tags',
    )
  ) {
    // something went wrong hide the canvas container,
    $('#myCanvasContainer')
  }
})


// per impedire che al click vengano aperte nuove schede
const imageUrls = [
  "images/sartoria.png",
  "images/Ezzelino_Website.jfif",
  "images/Fratellinoviello_website.jfif",
  "images/Vincenzo_Website.png"
];

const links = [
  "https://sartoriadilusso.shop/",
  "https://ezzelinoofficial.it/",
  "https://fratellinoviello.it/",
  "https://www.vincenzodiruggiero.com/"
];

const magicWallList = document.getElementById("magic-wall-list");

// Genera dinamicamente gli elementi dell'elenco
imageUrls.forEach((imageUrl, index) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const hoverContent = document.createElement("div");
  const link = document.createElement("a");

  div.className = "magic-wall_item lazyload";
  img.src = imageUrl;
  img.alt = "image";
  hoverContent.className = "hover-content";
  link.href = links[index]; // Utilizza il link corrispondente dall'array "links"
  link.className = "colorbox";
  link.target = "_blank"; // Apri in una nuova scheda


  div.appendChild(img);
  div.appendChild(hoverContent);
  div.appendChild(link);
  li.appendChild(div);
  magicWallList.appendChild(li);
});

// parte finale del contact form

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const btn = document.getElementById('button');
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_agkanbm';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Sent!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });

const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const textareaInput = document.querySelector('.textarea')

const contactForm = document.querySelector('.contact-form')

contactForm.addEventListener('submit', (evt) => {
  evt.preventDefault()
  validateInput()
})

const validateInput = () => {
  let email = emailInput.value
  let textarea = textareaInput.value

  if (!email && !textarea) {
    setError(emailInput.parentElement)
    setError(textareaInput.parentElement)
    showMessage('Please fill in the required inputs')
  } else if (!email && textarea) {
    setError(emailInput.parentElement)
    showMessage("Oops Email can't be empty")
  } else if (!textarea && email) {
    setError(textareaInput.parentElement)
    showMessage('Please provide a message')
  } else if (email && textarea) {
    emailjs.sendForm(
      'service_rvlqach',
      'template_d32ix5s',
      contactForm,
      'lD25U1N6WN3XbKSFV',
    )
    setSuccess(emailInput.parentElement)
    setSuccess(textareaInput.parentElement)
    showMessage('Message sent successfully', 'green')
    textareaInput.value = ''
    emailInput.value = ''
    nameInput.value = ''
  }
}

const setError = (input) => {
  if (input.classList.contains('success')) {
    input.classList.remove('success')
  } else {
    input.classList.add('error')
  }
}
const setSuccess = (input) => {
  if (input.classList.contains('error')) {
    input.classList.remove('error')
  } else {
    input.classList.add('success')
  }
}

const messageDiv = document.querySelector('.message')
const showMessage = (message, updateColor) => {
  const divContent = document.createElement('div')
  divContent.textContent = message
  divContent.classList.add('message-content')
  divContent.style.backgroundColor = updateColor
  messageDiv.prepend(divContent)

  messageDiv.style.transform = `translate(${(0, 0)}%)`
  setTimeout(() => {
    divContent.classList.add('hide')
    divContent.addEventListener('transitionend', () => {
      divContent.remove()
    })
  }, 5000)
}
