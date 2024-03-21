import './ModalActivity.css';
import closeButton from "../assets/closeButton.svg";


// eslint-disable-next-line react/prop-types
export const ModalActivityInfo = ({ onClose }) => {
  return (
    <section className="modal">
        <div className='modal_ActivityInfo'>
            <p className='modal_ActivityInfo_title'>Actividad:</p>
            <h2 className='modal_ActivityInfo_name'>Carretilla balance</h2>
            <p className='modal_ActivityInfo_description'>Lorem fistrum me cago en tus muelas condemor papaar papaar pecador ahorarr torpedo pupita. Jarl te voy a borrar el cerito apetecan ahorarr a gramenawer.</p>
            <ul>
                <li className='modal_ActivityInfo_title'>Fecha:</li>
                <li className="modal_ActivityInfo_content">Lunes, 18-03-2024</li>
                <li className='modal_ActivityInfo_title'>Hora:</li>
                <li className="modal_ActivityInfo_content">18:30</li>
                <li className='modal_ActivityInfo_title'>Monitor:</li>
                <li className="modal_ActivityInfo_content">Herminio Castro</li>
            </ul>
        </div>
        <div className='modal_ActivityImg'>
            <img src="./carretilla.jpg" alt="Carretilla balance" />
        </div>
        <button className='modal_CloseButton' onClick={onClose}>
          <img src={closeButton} alt="Cerrar" className="closeButton" />
        </button>
    </section>
  )
}

