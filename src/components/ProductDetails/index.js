import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../assets/data/productsData'; // Бүтээгдэхүүний мэдээллийг импортлох
import css from './style.module.css';
import emailjs from '@emailjs/browser';

const ProductDetail = () => {
  const { id } = useParams(); // URL-аас бүтээгдэхүүний ID-г авах
  const productId = parseInt(id); // id-г тоо болгон хөрвүүлэх
  const product = productsData.find(item => item.id === productId); // ID-ийг ашиглан бүтээгдэхүүн хайх

  // Захиалгын мэдээллийг хадгалах
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Захиалга амжилттай илгээлээ гэсэн байдал
  const [errors, setErrors] = useState({}); // Алдааны мэдээллийг хадгалах

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Захиалгын үйлдэл
  const handleOrder = async (e) => {
    e.preventDefault();

    // Формын шалгалт
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const orderData = {
        name,
        email,
        phone,
        quantity,
        product: product.name,
        comment,
      };

      try {
        // emailjs ашиглан захиалгын мэдээллийг илгээх
        const result = await emailjs.send(
          'your_service_id',    // Таны үйлчилгээний ID
          'your_template_id',   // Таны template ID
          orderData,            // Захиалгын өгөгдөл
          'your_user_id'        // Таны User ID буюу public key
        );

        console.log('Success:', result.text);
        setIsSubmitted(true); // Захиалга амжилттай илгээгдсэн
      } catch (error) {
        console.error('Error:', error.text);
      }
    } else {
      setErrors(validationErrors); // Алдааны мэдээллийг харуулах
    }
  };

  // Формын шалгалт
  const validateForm = () => {
    let errors = {};

    // Нэр шалгах
    if (!name) errors.name = 'Name is required';

    // Имэйл шалгах
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Утасны дугаар шалгах
    const phoneRegex = /^[+]?[0-9]{10,12}$/; // Жишээ: +1234567890 эсвэл 1234567890
    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    // Тайлбар шалгах
    if (!comment) errors.comment = 'Comment is required';

    return errors;
  };

  if (!product) {
    return <div>Бүтээгдэхүүн олдсонгүй</div>;
  }

  return (
    <div className={css.ProductDetail}>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} className={css.ProductImage} />
      <p>{product.description}</p>
      <p><strong>Size:</strong> {product.size}</p>
      <p><strong>Price:</strong> {product.price}</p>

      {/* Тоо ширхэг нэмэх/хасах */}
      <div className={css.QuantityControl}>
        <button onClick={decrement} className={css.QuantityButton}>-</button>
        <span>{quantity}</span>
        <button onClick={increment} className={css.QuantityButton}>+</button>
      </div>

      {/* Бүтээгдэхүүний нэр, имэйл, утасны дугаар, тайлбарын талбар */}
      <div className={css.Inputs}>
        <input
          type="text"
          placeholder="Таны нэр"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name && css.ErrorInput}
        />
        {errors.name && <p className={css.ErrorMessage}>{errors.name}</p>}

        <input
          type="email"
          placeholder="Таны имэйл"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email && css.ErrorInput}
        />
        {errors.email && <p className={css.ErrorMessage}>{errors.email}</p>}

        <input
          type="text"
          placeholder="Таны утасны дугаар"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={errors.phone && css.ErrorInput}
        />
        {errors.phone && <p className={css.ErrorMessage}>{errors.phone}</p>}

        <textarea
          placeholder="Тайлбар оруулна уу (заавал биш)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={errors.comment && css.ErrorInput}
        />
        {errors.comment && <p className={css.ErrorMessage}>{errors.comment}</p>}
      </div>

      {/* Захиалах товч */}
      <button onClick={handleOrder} className={css.OrderButton}>Захиалах</button>

      {/* Захиалгын хариу */}
      {isSubmitted && (
        <p className={css.ThankYouMessage}>Таны захиалга амжилттай илгээлээ!</p>
      )}
    </div>
  );
};

export default ProductDetail;


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import productsData from '../../assets/data/productsData'; // Бүтээгдэхүүний мэдээллийг импортлох
// import css from './style.module.css';
// import emailjs from '@emailjs/browser';

// const ProductDetail = () => {
//   const { id } = useParams(); // URL-аас бүтээгдэхүүний ID-г авах
//   const productId = parseInt(id); // id-г тоо болгон хөрвүүлэх
//   const product = productsData.find(item => item.id === productId); // ID-ийг ашиглан бүтээгдэхүүн хайх

//   // Захиалгын мэдээллийг хадгалах
//   const [quantity, setQuantity] = useState(1);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [comment, setComment] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false); // Захиалга амжилттай илгээлээ гэсэн байдал
//   const [errors, setErrors] = useState({}); // Алдааны мэдээллийг хадгалах

//   const increment = () => setQuantity(quantity + 1);
//   const decrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   // Захиалгын үйлдэл
//   const handleOrder = async (e) => {
//     e.preventDefault();

//     // Формын шалгалт
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       const orderData = {
//         name,
//         email,
//         phone,
//         quantity,
//         product: product.name,
//         comment,
//       };

//       try {
//         // emailjs ашиглан захиалгын мэдээллийг илгээх
//         const result = await emailjs.send(
//           'your_service_id',    // Таны үйлчилгээний ID
//           'your_template_id',   // Таны template ID
//           orderData,            // Захиалгын өгөгдөл
//           'your_user_id'        // Таны User ID буюу public key
//         );

//         console.log('Success:', result.text);
//         setIsSubmitted(true); // Захиалга амжилттай илгээгдсэн
//       } catch (error) {
//         console.error('Error:', error.text);
//       }
//     } else {
//       setErrors(validationErrors); // Алдааны мэдээллийг харуулах
//     }
//   };

//   const validateForm = () => {
//     let errors = {};
//     if (!name) errors.name = 'Name is required';
//     if (!email) errors.email = 'Email is required';
//     if (!phone) errors.phone = 'Phone number is required';
//     if (!comment) errors.comment = 'Comment is required';
//     return errors;
//   };

//   if (!product) {
//     return <div>Бүтээгдэхүүн олдсонгүй</div>;
//   }

//   return (
//     <div className={css.ProductDetail}>
//       <h1>{product.name}</h1>
//       <img src={product.imageUrl} alt={product.name} className={css.ProductImage} />
//       <p>{product.description}</p>
//       <p><strong>Size:</strong> {product.size}</p>
//       <p><strong>Price:</strong> {product.price}</p>

//       {/* Тоо ширхэг нэмэх/хасах */}
//       <div className={css.QuantityControl}>
//         <button onClick={decrement} className={css.QuantityButton}>-</button>
//         <span>{quantity}</span>
//         <button onClick={increment} className={css.QuantityButton}>+</button>
//       </div>

//       {/* Бүтээгдэхүүний нэр, имэйл, утасны дугаар, тайлбарын талбар */}
//       <div className={css.Inputs}>
//         <input
//           type="text"
//           placeholder="Таны нэр"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className={errors.name && css.ErrorInput}
//         />
//         {errors.name && <p className={css.ErrorMessage}>{errors.name}</p>}

//         <input
//           type="email"
//           placeholder="Таны имэйл"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className={errors.email && css.ErrorInput}
//         />
//         {errors.email && <p className={css.ErrorMessage}>{errors.email}</p>}

//         <input
//           type="text"
//           placeholder="Таны утасны дугаар"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className={errors.phone && css.ErrorInput}
//         />
//         {errors.phone && <p className={css.ErrorMessage}>{errors.phone}</p>}

//         <textarea
//           placeholder="Тайлбар оруулна уу (заавал биш)"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           className={errors.comment && css.ErrorInput}
//         />
//         {errors.comment && <p className={css.ErrorMessage}>{errors.comment}</p>}
//       </div>

//       {/* Захиалах товч */}
//       <button onClick={handleOrder} className={css.OrderButton}>Захиалах</button>

//       {/* Захиалгын хариу */}
//       {isSubmitted && (
//         <p className={css.ThankYouMessage}>Таны захиалга амжилттай илгээлээ!</p>
//       )}
//     </div>
//   );
// };

// export default ProductDetail;
