
import { createContext, useState, useEffect, type ReactNode } from 'react'

export interface Store {
    id: string
    name: string
    url?: string
    metrics: string[]
}

interface StoreContextType {
    stores: Store[]
    addStore: (store: Omit<Store, 'id'>) => void
    updateStore: (id: string, updates: Partial<Store>) => void
}

export const StoreContext = createContext<StoreContextType | undefined>(undefined)

export function StoreProvider({ children }: { children: ReactNode }) {
    const [stores, setStores] = useState<Store[]>(() => {
        const saved = localStorage.getItem('khojiq-stores')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('khojiq-stores', JSON.stringify(stores))
    }, [stores])

    const addStore = (storeData: Omit<Store, 'id'>) => {
        const newStore: Store = {
            ...storeData,
            id: crypto.randomUUID()
        }
        setStores(prev => [...prev, newStore])
    }

    const updateStore = (id: string, updates: Partial<Store>) => {
        setStores(prev => prev.map(store =>
            store.id === id ? { ...store, ...updates } : store
        ))
    }

    return (
        <StoreContext.Provider value={{ stores, addStore, updateStore }}>
            {children}
        </StoreContext.Provider>
    )
}
