import { usePatientStore } from "../../store/patientStore"
import { PatientDetails } from "./PatientDetails"

export const PatientList = () => {
    const patients = usePatientStore((state) => state.patients)
    return (
        <>
            <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">

                {patients.length === 0 ? (
                    <>
                        <h2 className="text-3xl font-black text-center">No hay pacientes</h2>
                        <p className="text-center  text-xl mb-10 mt-5">
                            Comienza agregando pacientes {''}
                            <span className="text-indigo-600 font-bold">
                                y aparecerán en este lugar
                            </span>
                        </p>
                    </>
                ) : (
                    <>
                    <h2 className="text-3xl font-black text-center">Listado de Pacientes</h2>
                    <p className="text-center text-xl mb-10 mt-5">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">
                            Pacientes y Citas
                        </span>
                    </p>
                            {patients.map(patient => (
                               <PatientDetails key={patient.id} patient={patient} />
                            ))}
                    </>
                )}
            </div>
        </>
    )
}