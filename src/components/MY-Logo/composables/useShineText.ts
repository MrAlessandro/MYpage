import {reactive, ref, Ref, toRefs, watch} from "vue";
import variables from "@/assets/styles/_variables.scss";

export interface shiningDurations {
    webW: number,
    webE: number,
    webB: number,
    doneD: number,
    doneO: number,
    doneN: number,
    doneE: number
}

export interface shiningBegins {
    webE: number,
    webB: number,
    doneD: number,
    doneO: number,
    doneN: number,
    doneE: number
}

export interface useShineData {
    colorPrimary: Ref<string>,
    colorDark: Ref<string>,
    textAnimationWebW: Ref<HTMLElement>,
    textAnimationWebE: Ref<HTMLElement>,
    textAnimationWebB: Ref<HTMLElement>,
    textAnimationDoneD: Ref<HTMLElement>,
    textAnimationDoneO: Ref<HTMLElement>,
    textAnimationDoneN: Ref<HTMLElement>,
    textAnimationDoneE: Ref<HTMLElement>,
    textShiningAnimationsDurations: Ref<shiningDurations>,
    textShiningAnimationsBegins: Ref<shiningBegins>,
    textShiningIteration: () => void;
}

export const useShine: (shine: Ref<boolean>) => useShineData = (shine) => {
    const letterShiningAnimationDuration = Number(
        variables.MYanimationsDurationExtraLong.substring(0, variables.MYanimationsDurationExtraLong.length - 2)
    );
    const textShiningAnimationAdvanceFactor = letterShiningAnimationDuration * 0.4;
    const textShiningAnimationDelayFactor = letterShiningAnimationDuration * 0.3;
    const textShiningAnimationBeginWebE = letterShiningAnimationDuration - (textShiningAnimationDelayFactor * 0.6);
    const textShiningAnimationBeginWebB = textShiningAnimationBeginWebE + letterShiningAnimationDuration - textShiningAnimationAdvanceFactor;
    const textShiningAnimationBeginDoneD = textShiningAnimationBeginWebB + letterShiningAnimationDuration - textShiningAnimationAdvanceFactor;
    const textShiningAnimationBeginDoneO = textShiningAnimationBeginDoneD + letterShiningAnimationDuration - textShiningAnimationAdvanceFactor;
    const textShiningAnimationBeginDoneN = textShiningAnimationBeginDoneO + letterShiningAnimationDuration - textShiningAnimationAdvanceFactor;
    const textShiningAnimationBeginDoneE = textShiningAnimationBeginDoneN + letterShiningAnimationDuration - textShiningAnimationAdvanceFactor;

    const state = reactive({
        colorPrimary: variables.MYcolorPrimary,
        colorDark: variables.MYcolorDark,
        textAnimationWebW: ref(),
        textAnimationWebE: ref(),
        textAnimationWebB: ref(),
        textAnimationDoneD: ref(),
        textAnimationDoneO: ref(),
        textAnimationDoneN: ref(),
        textAnimationDoneE: ref(),
        textShiningAnimationsDurations: {
            webW: letterShiningAnimationDuration + textShiningAnimationDelayFactor,
            webE: letterShiningAnimationDuration,
            webB: letterShiningAnimationDuration,
            doneD: letterShiningAnimationDuration,
            doneO: letterShiningAnimationDuration,
            doneN: letterShiningAnimationDuration,
            doneE: letterShiningAnimationDuration
        } as shiningDurations,
        textShiningAnimationsBegins: {
            webE: textShiningAnimationBeginWebE,
            webB: textShiningAnimationBeginWebB,
            doneD: textShiningAnimationBeginDoneD,
            doneO: textShiningAnimationBeginDoneO,
            doneN: textShiningAnimationBeginDoneN,
            doneE: textShiningAnimationBeginDoneE
        } as shiningBegins
    });

    const textShiningIteration: () => void = () => {
        state.textAnimationWebW.beginElement()
        setTimeout(() => {
            state.textAnimationWebE.beginElement();
        }, state.textShiningAnimationsBegins.webE);
        setTimeout(() => {
            state.textAnimationWebB.beginElement();
        }, state.textShiningAnimationsBegins.webB);
        setTimeout(() => {
            state.textAnimationDoneD.beginElement();
        }, state.textShiningAnimationsBegins.doneD);
        setTimeout(() => {
            state.textAnimationDoneO.beginElement();
        }, state.textShiningAnimationsBegins.doneO);
        setTimeout(() => {
            state.textAnimationDoneN.beginElement();
        }, state.textShiningAnimationsBegins.doneN);
        setTimeout(() => {
            state.textAnimationDoneE.beginElement();
        }, state.textShiningAnimationsBegins.doneE);
        (state.textAnimationDoneE as HTMLElement).addEventListener('endEvent', () => {
            if (shine.value) {
                textShiningIteration();
            }
        }, {once: true});
    };

    watch(shine, (value) => {
        if (value) {
            textShiningIteration();
        }
    });

    return {
        ...toRefs(state),
        textShiningIteration
    } as useShineData
}
