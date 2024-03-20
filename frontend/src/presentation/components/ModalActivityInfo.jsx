import './ModalActivity.css'


export const ModalActivityInfo = () => {
  return (
    <section className="modal">
        <div className='modal_ActivityInfo'>
            <p>ACTIVIDAD:</p>
            <h2>Nombre actividad</h2>
            <p>Lorem fistrum me cago en tus muelas condemor papaar papaar pecador ahorarr torpedo pupita. Jarl te voy a borrar el cerito apetecan ahorarr a gramenawer.</p>
            <ul>
                <li>FECHA:</li>
                <li>Lunes, 18-03-2024</li>
                <li>HORA:</li>
                <li>18:30</li>
                <li>MONITOR:</li>
                <li>Herminio Castro</li>
            </ul>
        </div>
        <div>
            <img className="modal_ActivityImg" src="./carretilla.jpg" alt="Carretilla balance" />
        </div>
    </section>
  )
}

