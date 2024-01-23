
import { create } from "zustand"
import PeriodicTableData from '../../public/PeriodicTableData.json'



export const useElementStore = create((set,get)=>({
        elements: PeriodicTableData.elements,
        currentElement: null,
        colorMap: {
            "noble gas": "#FFBC42",
            "alkaline earth metal": "#EC674E",
            "diatomic nonmetal": "#D81159",
            "alkali metal": "#8F2D56",
            "transition metal": "#58586B",
            "post-transition metal": "#218380",
            "lanthanide": "#4AABAF",
            "metalloid": "#73D2DE",
            "polyatomic nonmetal": "#909090",
            "actinide":"#70abfa" 
        },
        
        setSelectedElement: (element) => set({ selectedElement: element }),
        clearSelectedElement: () => set({ selectedElement: null }),    

        goToNextElement: () => {
            const {elements,selectedElement}=get()
            const currentElement = elements.find((element) => element.xpos === selectedElement.xpos && element.ypos===selectedElement.ypos) 
            console.log(currentElement )
              // Verificar si se encontró el elemento actual
    if (currentElement) {
        // Calcular las nuevas coordenadas xpos e ypos para el siguiente elemento
        let nextXpos = currentElement.xpos + 1;
        let nextYpos = currentElement.ypos;
        
        // Si alcanzamos la última columna, pasar a la siguiente fila y reiniciar xpos
       
        if (nextXpos > 18) {
            nextXpos = 1;
            nextYpos += 1;

            // Si alcanzamos la última fila, reiniciar ypos
            if (nextYpos > 7) {
                nextYpos = 1;
            }
        }

        // Encontrar el siguiente elemento con las nuevas coordenadas xpos e ypos
        let nextElement = elements.find(
            (element) => element.xpos === nextXpos && element.ypos === nextYpos
        );

        // Verificar si se encontró el siguiente elemento
        if (nextElement) {
            // Establecer el siguiente elemento como el elemento seleccionado
            set({ selectedElement: nextElement });
        }
    }
},
            
        
        goPreviousElement:()=>{
            const {elements,selectedElement}= get()
            const prev = currentElement+1

            if(nextElement<selectedElement.length){
                set({currentElement: nextElement})
            }
        },

}))