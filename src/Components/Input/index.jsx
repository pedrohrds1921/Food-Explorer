import { Container } from "./style"

export default function Input({type,title,placeholder,value,onChange}){


    return(
        <Container>
            <label htmlFor={title}>{title}</label>
            <input type={type}
             name="name" id={title}
              placeholder={placeholder}
              value={value}
              onChange={onChange}/>
        </Container>

    )

}