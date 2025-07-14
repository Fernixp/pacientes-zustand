import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { DraftPatient, PatientType } from "../types";
import { v4 as uuidv4 } from "uuid";

type PatientState ={
    patients: PatientType[],
    activeId: PatientType['id'] | null,
    addPatient: (patient: DraftPatient) => void,
    deletePatient: (id: PatientType['id']) => void,
    getPatientById: (id: PatientType['id']) => void,
}

const createPatient = (patient: DraftPatient) : PatientType => {
    return {
        ...patient,
        id: uuidv4(),
    }
}

export const usePatientStore = create<PatientState>()(
    devtools((set) => ({
    patients: [],
    activeId: null,
    addPatient: (patient) => {
        const newPatient = createPatient(patient)
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    },

    deletePatient: (id) => {
        set((state) => ({
            patients: state.patients.filter(patient => patient.id !== id)
        }))
    },
    getPatientById(id) {
        set((state) => ({
            activeId: id
        }))
        /* const patient = this.patients.find(patient => patient.id === id)
        if (!patient) {
            throw new Error('Patient not found')
        }
        console.table(patient)
        return patient */
    },
})))