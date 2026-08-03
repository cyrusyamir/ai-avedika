import { createContext, useContext, useState, type ReactNode } from 'react'
import ContactModal from '../components/ContactModal'

interface FormContextValue {
  openForm: () => void
}

const FormContext = createContext<FormContextValue>({ openForm: () => {} })

export function FormProvider({ children }: { children: ReactNode }) {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <FormContext.Provider value={{ openForm: () => setFormOpen(true) }}>
      {children}
      <ContactModal open={formOpen} onClose={() => setFormOpen(false)} />
    </FormContext.Provider>
  )
}

export function useForm() {
  return useContext(FormContext)
}
