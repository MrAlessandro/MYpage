import {onMounted, reactive, ref, Ref, toRefs, watch} from "vue";
import {usePulseData} from "@/components/MY-Logo/composables/usePulse";

export interface useShineData {
    getTextShineAnimation: (idPrefix: string, index: number) => string;
}

export const useShine: (shine: Ref<boolean>) => usePulseData = (shine) => {
    /*const state = reactive({
        textWebLetterW: ref(),
        textWebLetterE: ref(),
        textWebLetterB: ref(),
        textDoneLetterD: ref(),
        textDoneLetterO: ref(),
        textDoneLetterN: ref(),
        textDoneLetterE: ref(),
    });

    watch(shine, (value) => {
        const letters = document.querySelectorAll('.MY\\:brand-logo\\:text\\:letter svg');
        if (value) {
            for (let index = 0; index < letters.length; ++index) {
                const gradientId = (letters[index] as HTMLElement).querySelector('linearGradient').getAttribute('id');
                (letters[index] as HTMLElement).style.setProperty('fill', `url(#${gradientId})`);
            }



        } else {
            for (let index = 0; index < letters.length; ++index) {
                (letters[index] as HTMLElement).style.setProperty('fill', `inherit`);
            }
        }



    })

    onMounted(() => {
        console.log(state.textDoneLetterN)
    })*/

    return {
    } as useShineData
}
