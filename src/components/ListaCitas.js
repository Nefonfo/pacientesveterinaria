import React from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';
const ListasCitas = ({ citas, eliminarCita }) => {

const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra Las Citas Aquí';
  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">{mensaje}</h2>
        <div className="lista-citas">
          {citas.map(cita => (
            <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
          ))}
        </div>
      </div>
    </div>
  );
};

ListasCitas.propType = {
  citas: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};

export default ListasCitas;
