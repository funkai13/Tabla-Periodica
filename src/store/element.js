
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
            let nextXpos = currentElement.xpos+1
            let nextYpos = currentElement.ypos
            if (currentElement) {
                const numRows = 10;
                const numCols = 18;

                let nextXpos = currentElement.xpos + 1;
                let nextYpos = currentElement.ypos;

            
                for (let y = nextYpos; y <= 10; y++) {
                    for (let x = nextXpos; x <= 19; x++) {
                    if (x >18) {
                        x = 1;
                        y++;
                    }
                    if(y>10){
                        y=1
                    }

                    const nextElement = elements.find(
                    (element) => element.xpos === x && element.ypos === y)
                    if (nextElement === null) {
                        continue;
                    }
                    if (nextElement) {
                        set({ selectedElement: nextElement })
                        return;
                }
            }
        }
    }

},
            
        
        goPreviousElement:()=>{
            const {elements,selectedElement}=get()
            const currentElement = elements.find((element) => element.xpos === selectedElement.xpos && element.ypos===selectedElement.ypos) 
            let nextXpos = currentElement.xpos+1
            let nextYpos = currentElement.ypos
          if (currentElement) {
        const numRows = 10;
        const numCols = 18;

        let previousXpos = currentElement.xpos -1;
        let previousYpos = currentElement.ypos;

            
        for (let y = previousYpos; y <= 10; y--) {
            for (let x = previousXpos; x <= 18; x--) {
                if (x <1) {
                    x = 18;
                    y--;
                }
                if(y<1){
                    y=10
                }

                const nextElement = elements.find(
                    (element) => element.xpos === x && element.ypos === y
                );

                if (nextElement === null) {
                    continue;
                }
                if (nextElement) {
                    set({ selectedElement: nextElement });
                    return;
                }
            }
        }
    }

        },

}))