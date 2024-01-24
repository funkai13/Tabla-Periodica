
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

    if (currentElement) {

        let nextXpos = currentElement.xpos + 1;
        let nextYpos = currentElement.ypos;
        

        if (nextXpos > 18) {
            nextXpos = 1;
            nextYpos += 1;


            if (nextYpos > 7) {
                nextYpos = 1;
            }
        }

        let nextElement = elements.find(
            (element) => element.xpos === nextXpos && element.ypos === nextYpos
        );

        
        if (nextElement) {
            set({ selectedElement: nextElement });
        }
    }
},
            
        
        goPreviousElement:()=>{
            const {elements,selectedElement}=get()
            const currentElement = elements.find((element) => element.xpos === selectedElement.xpos && element.ypos===selectedElement.ypos) 
        
            if (selectedElement){
                let nextXpos = currentElement.xpos - 1;
                let nextYpos = currentElement.ypos;
                
        
                if (nextXpos < 1) {
                    nextXpos = 18;
                    nextYpos -= 1;
        
        
                    if (nextYpos > 7) {
                        nextYpos = 1;
                    }
                }
        
                let nextElement = elements.find(
                    (element) => element.xpos === nextXpos && element.ypos === nextYpos
                );
        
                
                if (nextElement) {
                    set({ selectedElement: nextElement });
                }
            }
        },

}))