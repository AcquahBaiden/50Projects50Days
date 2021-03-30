const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".user-name");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Miles",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo amet perspiciatis in eaque vel ipsa minima vero ullam adipisci distinctio expedita commodi aliquid blanditiis laudantium provident, corrupti, beatae ipsum voluptatibus molestias accusamus a accusantium possimus voluptas? Reprehenderit, impedit. Atque fugiat repudiandae veritatis impedit quibusdam nostrum deleniti quis architecto a reprehenderit.",
  },
  {
    name: "June Cha",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/43.jpg",
    text:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo amet perspiciatis in eaque vel ipsa minima vero ullam adipisci distinctio expedita commodi aliquid blanditiis laudantium provident, corrupti, beatae ipsum voluptatibus molestias accusamus a accusantium possimus voluptas? Reprehenderit, impedit. Atque fugiat repudiandae veritatis impedit quibusdam nostrum deleniti quis architecto a reprehenderit.",
  },
  {
    name: "Frank Meter",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    text:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo amet perspiciatis in eaque vel ipsa minima vero ullam adipisci distinctio expedita commodi aliquid blanditiis laudantium provident, corrupti, beatae ipsum voluptatibus molestias accusamus a accusantium possimus voluptas? Reprehenderit, impedit. Atque fugiat repudiandae veritatis impedit quibusdam nostrum deleniti quis architecto a reprehenderit.",
  },
  {
    name: "Florence Smith",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/16.jpg",
    text:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo amet perspiciatis in eaque vel ipsa minima vero ullam adipisci distinctio expedita commodi aliquid blanditiis laudantium provident, corrupti, beatae ipsum voluptatibus molestias accusamus a accusantium possimus voluptas? Reprehenderit, impedit. Atque fugiat repudiandae veritatis impedit quibusdam nostrum deleniti quis architecto a reprehenderit.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
