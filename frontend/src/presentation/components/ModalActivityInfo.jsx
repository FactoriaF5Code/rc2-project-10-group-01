import './ModalActivity.css';
import closeButton from "../assets/closeButton.svg";


// eslint-disable-next-line react/prop-types
export const ModalActivityInfo = ({ onClose, title, description, start, trainer, urlrural }) => {
  return (
    <section className="modal">
        <div className='modal_ActivityInfo'>
            <p className='modal_ActivityInfo_title'>Actividad:</p>
            <h2 className='modal_ActivityInfo_name'>{title}</h2>
            <p className='modal_ActivityInfo_description'>{description}</p>
            <ul>
                <li className='modal_ActivityInfo_title'>Fecha:</li>
                <li className="modal_ActivityInfo_content">{start.toLocaleString().split(',')[0]}</li>
                <li className='modal_ActivityInfo_title'>Hora:</li>
                <li className="modal_ActivityInfo_content">{start.toLocaleString().split(' ')[1]}</li>
                <li className='modal_ActivityInfo_title'>Monitor:</li>
                <li className="modal_ActivityInfo_content">{trainer}</li>
            </ul>
        </div>
        <div className='modal_ActivityImg'>
            <img src={urlrural} alt="Carretilla balance" />
        </div>
        <button className='modal_CloseButton' onClick={onClose}>
          <img src={closeButton} alt="Cerrar" className="closeButton" />
        </button>
    </section>
  )
}