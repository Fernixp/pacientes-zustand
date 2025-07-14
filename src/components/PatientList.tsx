import { usePatientStore } from "../store/patientStore"

export const PatientList = () => {
    const { patients } = usePatientStore()
    return (
        <div>
            <h2>Lista de Pacientes</h2>
            {patients.length === 0 ? (
                <p>No hay pacientes</p>
            ) : (
                <ul>
                    {patients.map(patient => (
                        <li key={patient.id}>{patient.name}</li>
                        
                    ))}
                </ul>
            )}
        </div>
    )
}