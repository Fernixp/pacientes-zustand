import type { PatientType } from "../../types"
import { PatientDetailItem } from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: PatientType
}

export const PatientDetails = ({patient}: PatientDetailsProps) => {
    const date = new Date(patient.date).toLocaleDateString()
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem label="ID" value={patient.id} />
            <PatientDetailItem label="Paciente" value={patient.name} />
            <PatientDetailItem label="Propietario" value={patient.caretaker} />
            <PatientDetailItem label="Email" value={patient.email} />
            <PatientDetailItem label="Fecha Alta" value={date} />
            <PatientDetailItem label="Síntomas" value={patient.symptoms} />
        </div>
    )
}