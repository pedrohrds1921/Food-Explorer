import { Container,Preview } from "./style"
import {BsUpload} from "react-icons/bs"
import { useState } from "react";



export default function InputImage({title ,className,onChange}){

    const [fileName, setFileName] = useState(title); 
   
    
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setFileName(file.name);
        };
    
    return onChange(file)
    };

    return(
        <Container className={className}>
          
            <p>Imagem do prato </p>
            <label htmlFor="image"><BsUpload/>{fileName}</label>
            <input type="file" name="image" id="image" onChange={handleFileChange}/>
        </Container>

    )

}


