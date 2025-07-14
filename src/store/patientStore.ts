import { create } from "zustand";
import type { DraftPatient, PatientType } from "../types";
import { v4 as uuidv4 } from "uuid";

type PatientState ={
    patients: PatientType[],
    addPatient: (patient: DraftPatient) => void,
}

const createPatient = (patient: DraftPatient) : PatientType => {
    return {
        ...patient,
        id: uuidv4(),
    }
}

export const usePatientStore = create<PatientState>((set) => ({
    patients: [],
    addPatient: (patient) => {
        const newPatient = createPatient(patient)
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    }
}))