import { usePatientStore } from "../../store/patientStore"
import type { PatientType } from "../../types"
import { PatientDetailItem } from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: PatientType
}

export const PatientDetails = ({ patient }: PatientDetailsProps) => {
    const date = new Date(patient.date).toLocaleDateString()
    const deletePatient = usePatientStore(state => state.deletePatient)
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label="ID" value={patient.id} />
            <PatientDetailItem label="Paciente" value={patient.name} />
            <PatientDetailItem label="Propietario" value={patient.caretaker} />
            <PatientDetailItem label="Email" value={patient.email} />
            <PatientDetailItem label="Fecha Alta" value={date} />
            <PatientDetailItem label="Síntomas" value={patient.symptoms} />

            <div className="flex justify-between gap-3 mt-10">
                <button className="bg-indigo-600 py-2 px-10 hover:bg-indigo-700 transition-colors delay-100 cursor-pointer
                text-white font-bold uppercase rounded-lg">
                    Editar
                </button>
                <button className="bg-red-600 py-2 px-10 hover:bg-red-700 transition-colors delay-100 cursor-pointer
                text-white font-bold uppercase rounded-lg"
                    onClick={() => deletePatient(patient.id)}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}