import { Container } from "./style"

export default function Input({type,title,className,placeholder,value,onChange}){
console.log(className)

    return(
        <Container className={className}>
            <label htmlFor={title}>{title}</label>
            <input type={type}
             name="name" id={title}
              placeholder={placeholder}
              value={value}
              onChange={onChange}/>
        </Container>

    )

}