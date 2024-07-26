class testimonials {
  constructor(images, quote, author) {
    this.images = images
    this.quote = quote
    this.author = author
  }
  html() {
    return ` <div class="testimonial">
          <img
            src="${this.images}" class="profile-testimonial">
          <p class="quote">${this.quote} </p>
          <p class="author">${this.author} </p>
        </div>`
  }
}
const Mamahmuda = new testimonials("https://asset-2.tstatic.net/wartakota/foto/bank/images/20170414-bintang-porno-tertua_20170414_232711.jpg", "ayo kakek bantuu", "sugiono saputra");
const PapahMuda = new testimonials("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWXUbTsFxlMrAXCQpKs_dQwq4h5PesutF7w&s", "dokter bantu periksa ya", "jhonny sins");
const MbahDukun = new testimonials("https://cdn.medcom.id/dynamic/content/2023/09/19/1614333/rcMDZhjpHR.jpg?w=480", "wahh manjur pokonya", "Virly Virginia");
const testimonial = [Mamahmuda, PapahMuda, MbahDukun];

let testimonialsHTML = ``
for (let i = 0; i < testimonial.length; i++) {
  testimonialsHTML += testimonial[i].html()
}
document.getElementById("testimonials").innerHTML = testimonialsHTML