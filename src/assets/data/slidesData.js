import slideImage1 from '../../assets/images/SwiperGallery/12.png'; // Жишээ зураг 1
import slideImage2 from '../../assets/images/SwiperGallery/10.png'; // Жишээ зураг 2

const slidesData = [
  {
    id: 1,  // ID-г нэмж байна
    // title: "OUR SERVICES",
    subtitle: "WHAT WE DO",
    description: "We specialize in delivering innovative and sustainable concrete products that meet the diverse needs of our clients.",
    imageUrl: slideImage1,
    imagePosition: "left",  // Зураг зүүн талд
  },
  {
    id: 2,  // ID-г нэмж байна
    // title: "OUR COMMITMENT",
    subtitle: "QUALITY & SAFETY",
    description: "Our commitment to excellence is evident in every project we undertake, as we strive to exceed expectations.",
    imageUrl: slideImage2,
    imagePosition: "right",  // Зураг баруун талд
  },
];

export default slidesData;
