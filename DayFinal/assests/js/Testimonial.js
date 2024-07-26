function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onerror = () => {
      reject("ini erorr!")
    };
    xhr.onload = () => {
      resolve(JSON.parse(xhr.responseText))
    };
    xhr.send()
  })
}

async function allTestimonial() {
  try {
    const testimonial = await fetchUrl(
      "https://api.npoint.io/e2180a9b0f783ee33561"
    );
    if (testimonial.length === 0) {
      document.getElementById("testimonials").innerHTML = "<p>Tidak ada data</p>";
      return;
    }
    const testimonialsHTML = testimonial.map((item) => {
      return `<div class="testimonial">
           <img
             src="${item.image}" class="profile-testimonial">
           <p class="quote">"${item.quote}"</p>
           <p class="author">-${item.author} </p>
           <p class="author">${item.ranting} <i class="fa-solid fa-star"></i></p>
         </div>`;
    });
    document.getElementById("testimonials").innerHTML = testimonialsHTML.join(" ");
  } catch (erorr) {
    alert(erorr)
  }
}

async function filterTestimonial(ranting) {
  try {
    const testimonial = await fetchUrl(
      "https://api.npoint.io/e2180a9b0f783ee33561"
    );
    const testimonialFilter = testimonial.filter((item) => item.ranting === ranting);
    if (testimonialFilter.length === 0) {
      document.getElementById("testimonials").innerHTML = "<p>Tidak ada data</p>";
      return;
    }
    const testimonialsHTML = testimonialFilter.map((item) => {
      return `<div class="testimonial">
           <img
             src="${item.image}" class="profile-testimonial">
           <p class="quote">"${item.quote}"</p>
           <p class="author">-${item.author} </p>
           <p class="author">${item.ranting} <i class="fa-solid fa-star"></i></p>
         </div>`;
    })
    document.getElementById("testimonials").innerHTML = testimonialsHTML.join(" ");
  } catch (erorr) {
    alert(erorr)
  }
}
allTestimonial();