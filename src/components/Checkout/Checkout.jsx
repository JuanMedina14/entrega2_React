
import './Checkout.css'
import { useForm } from   "react-hook-form";

const Checkout = () => {

  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
      console.log(data);
  }

return (
  
  <div className='form_div' >
      <h1 className='contacto' >Contacto</h1>
      <form className='form' onSubmit={handleSubmit(enviar)}>

          <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} required />
          <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} required />
          <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} required/>

          <button className='botonEnviar' type="submit">Enviar</button>

      </form>
  </div>

)
}
export default Checkout;
