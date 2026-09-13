// =========================
// MENÚ PARA CELULAR
// =========================

const menuButton =
  document.getElementById("menuButton");

const navMenu =
  document.getElementById("navMenu");


if (menuButton && navMenu) {

  menuButton.addEventListener(
    "click",
    function () {

      navMenu.classList.toggle("nav-open");

    }
  );


  const navLinks =
    navMenu.querySelectorAll("a");


  navLinks.forEach(function (link) {

    link.addEventListener(
      "click",
      function () {

        navMenu.classList.remove("nav-open");

      }
    );

  });

}



// =========================
// FORMULARIO
// =========================

const contactForm =
  document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const nombre =
        document.getElementById("nombre").value;


      formMessage.textContent =
        "Gracias " +
        nombre +
        ". Tu solicitud fue registrada.";


      formMessage.classList.add(
        "form-message-success"
      );


      contactForm.reset();

    }
  );

}



// =========================
// BOTÓN VOLVER ARRIBA
// =========================

const backToTop =
  document.getElementById("backToTop");


if (backToTop) {

  window.addEventListener(
    "scroll",
    function () {

      if (window.scrollY > 400) {

        backToTop.classList.add(
          "back-to-top-visible"
        );

      } else {

        backToTop.classList.remove(
          "back-to-top-visible"
        );

      }

    }
  );


  backToTop.addEventListener(
    "click",
    function () {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}



// =========================
// ANIMACIONES
// =========================

const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(
    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "reveal-visible"
          );

        }

      });

    },
    {
      threshold: 0.1
    }
  );


revealElements.forEach(
  function (element) {

    observer.observe(element);

  }
);