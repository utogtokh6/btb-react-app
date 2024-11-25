import slideImage1 from '../../assets/images/SwiperGallery/5.png'; // Жишээ зураг 1
import slideImage2 from '../../assets/images/SwiperGallery/6.png'; // Жишээ зураг 2
import slideImage3 from '../../assets/images/SwiperGallery/7.png'; // Жишээ зураг 3

const slidesData = [
  {
    id: 1,  // ID-г нэмж байна
    title: "ABOUT US",
    subtitle: "OUR STORY & VISION",
    description: "We strive to be the top contractor for wind turbine foundation construction, driving success in renewable energy ventures.",
    imageUrl: slideImage1,
    imagePosition: "right",  // Зураг баруун талд
  },
  {
    id: 2,  // ID-г нэмж байна
    title: "OUR SERVICES",
    subtitle: "WHAT WE DO",
    description: "We specialize in delivering innovative and sustainable concrete products that meet the diverse needs of our clients.",
    imageUrl: slideImage2,
    imagePosition: "left",  // Зураг зүүн талд
  },
  {
    id: 3,  // ID-г нэмж байна
    title: "OUR COMMITMENT",
    subtitle: "QUALITY & SAFETY",
    description: "Our commitment to excellence is evident in every project we undertake, as we strive to exceed expectations.",
    imageUrl: slideImage3,
    imagePosition: "right",  // Зураг баруун талд
  },
];

export default slidesData;
