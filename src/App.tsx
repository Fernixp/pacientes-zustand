import PatientForm from "./components/Patient/PatientForm"
import { PatientList } from "./components/Patient/PatientList"

function App() {
  return (
    <>
    <div className="container mx-auto mt-20">
      <h1 className="text-5xl font-black text-center md:w-2/3 md:mx-auto">Seguimiento de Pacientes <span className="text-indigo-700">Veterinaria</span>
      </h1>
      <div className="mt-12 md:flex md:justify-between md:gap-6">
      <PatientForm />
      <PatientList />
      </div>
    </div>
    </>
  )
}

export default App
