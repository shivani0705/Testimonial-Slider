const testimonialslide = [
  {
    name : "user one",
    img : "https://img.freepik.com/premium-photo/flat-icon-design_1258715-207252.jpg",
    text: "Lorem ipsum dolor sit amet. Ea enim saepe et facilis odio sit magni quia vel laudantium odio est pariatur possimus ut doloremque quia aut eligendi facilis. Vel alias consequuntur rem molestiae cupiditate qui voluptas impedit. "
  } , 
  {
     name : "user two",
    img : "https://img.freepik.com/premium-photo/flat-icon-food-isolated-background_1111524-5686.jpg",
    text: "Lorem ipsum dolor sit amet. Ea enim saepe et facilis odio sit magni quia vel laudantium odio est pariatur possimus ut doloremque quia aut eligendi facilis. Vel alias consequuntur rem molestiae cupiditate qui voluptas impedit. "
  } ,
  {
   name : "user two",
    img : "https://img.freepik.com/premium-photo/character-design_1258715-203871.jpg",
    text: "Lorem ipsum dolor sit amet. Ea enim saepe et facilis odio sit magni quia vel laudantium odio est pariatur possimus ut doloremque quia aut eligendi facilis. Vel alias consequuntur rem molestiae cupiditate qui voluptas impedit. "
  }
]; 

const nameTS = document.querySelector(.name);
const textTS = document.querySelector(.text);
const imgTS = document.querySelector(img);

const index = 0;

testimonial();

function testimonial(){
  const {name, img, text} = testimonialslide[index];
  nameTS.innertext = name;
  textTS.innertext = text;
  imgTS.src = img;

  index++; 
  if (index === testimonialslide){
    index = 0;
  }

  setTimeout( ()=> {
    testimonial()
  }, 10000);
}
