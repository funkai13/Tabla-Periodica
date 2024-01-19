
import { create } from "zustand"
import PeriodicTableData from '../../public/PeriodicTableData.json'



export const useElementStore = create((set,get)=>({
        elements: PeriodicTableData.elements,
        currentElement: null,
        
        setSelectedElement: (element) => set({ selectedElement: element }),
        clearSelectedElement: () => set({ selectedElement: null }),    
        goNextElement:()=>{
            const {currentElement,selectedElement}= get()
            const nextElement = currentElement+1
            if(nextElement<selectedElement.length){
                set({selectedElement: nextElement})
            }
        },
        goPreviousElement:()=>{
            const {currentElement,selectedElement}= get()
            const nextElement = currentElement+1
            if(nextElement<selectedElement.length){
                set({currentElement: nextElement})
            }
        }

}))