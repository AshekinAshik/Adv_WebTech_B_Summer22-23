import Link from "next/link";
import React, { useState } from 'react';
import dynamic from "next/dynamic";


const Layout = dynamic(()=>import('../HLT/layout'),{
  ssr: false,
})

const Title = dynamic(()=>import('../HLT/title'),{
  ssr: false,
})


const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
       <Title page="upload"> </Title>
    
      <h1>Image Upload</h1>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      {selectedImage && (
        <div>
          <h2>Preview</h2>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '500px' }} /><br /><br />
        

        </div>
        
      )}
      <br/><br/>
          <input type="submit" name="upload" value="Upload"  />
          <br></br>
          <br></br>
          <Link href="/">Home page</Link>
          
    </div>
  );
};

export default ImageUpload;