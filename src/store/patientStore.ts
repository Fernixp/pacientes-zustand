import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { DraftPatient, PatientType } from "../types";
import { v4 as uuidv4 } from "uuid";

type PatientState = {
  patients: PatientType[];
  activeId: PatientType["id"] | null;
  addPatient: (patient: DraftPatient) => void;
  deletePatient: (id: PatientType["id"]) => void;
  setActivePatient: (id: PatientType["id"]) => void;
  updatePatient: (data: DraftPatient) => void;
};

const createPatient = (patient: DraftPatient): PatientType => {
  return {
    ...patient,
    id: uuidv4(),
  };
};

export const usePatientStore = create<PatientState>()(
  devtools((set) => ({
    patients: [],
    activeId: null,
    addPatient: (patient) => {
      const newPatient = createPatient(patient);
      set((state) => ({
        patients: [...state.patients, newPatient],
      }));
    },

    deletePatient: (id) => {
      set((state) => ({
        patients: state.patients.filter((patient) => patient.id !== id),
      }));
    },
    setActivePatient(id) {
      set(() => ({
        activeId: id,
      }));
    },
    updatePatient(data) {
      set((state) => ({
        patients: state.patients.map((patient) =>
          patient.id === state.activeId
            ? { id: state.activeId, ...data }
            : patient),
        /* Despues de editar el paciente, se resetea el activeId */
        activeId: null,
      }));
    },
  }))
);
