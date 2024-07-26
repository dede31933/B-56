const TestimonialData = [
  {
    image: "https://image.cnbcfm.com/api/v1/image/107363745-1706104978554-gettyimages-1852530283-161223_ama0961.jpeg?v=1721807948&w=929&h=523&vtcrop=y",
    quote: "jasanya sangat baguss",
    author: "Elon Musk",
    ranting: 1,
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWXUbTsFxlMrAXCQpKs_dQwq4h5PesutF7w&s",
    quote: "sini dokter bantu periksa",
    author: "jhonny sin",
    ranting: 3,
  },
  {
    image: "https://media.suara.com/pictures/970x544/2019/11/27/96566-maria-ozawa.jpg",
    quote: "saya bangga mejadi talenta indonseia",
    author: "maria ozawa",
    ranting: 3,
  },
  {
    image: "https://asset-2.tstatic.net/bogor/foto/bank/images/Selebgram-Meli-3gp-dkenal-sebagai-bom-seks.jpg",
    quote: "dia sangat handal dalam melakukan aktingg",
    author: "meli 3gp",
    ranting: 4,
  },
  {
    image: "https://s.yimg.com/ny/api/res/1.2/Konn2wHv8kWbLc8Yn6Vfpw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/motleyfool.com/7cae8ea934b6fbb6107cfd7a9bedab89",
    quote: "saya seorang Billioner",
    author: "Warren Buffett",
    ranting: 5,
  },
]
function Html(item) {
  return `<div class="testimonial">
           <img
             src="${item.image}" class="profile-testimonial">
           <p class="quote">"${item.quote}"</p>
           <p class="author">-${item.author} </p>
           <p class="author">${item.ranting} <i class="fa-solid fa-star"></i></p>
         </div>`
}
function allTestimonial() {
  let testimonialsHTML = ``;
  TestimonialData.forEach((item) => {
    testimonialsHTML += Html(item);
  })
  document.getElementById("testimonials").innerHTML = testimonialsHTML;
}
allTestimonial()

function filterTestimonial(ranting) {
  let testimonialHtml = ``;
  const testimonialFilter = TestimonialData.filter((item) => {
    return item.ranting === ranting;
  });

  if (testimonialFilter.length === 0) {
    testimonialHtml = `<h1> Data not found!</h1>`;
  } else {
    testimonialFilter.forEach((item) => {
      testimonialHtml += Html(item);
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHtml;
}