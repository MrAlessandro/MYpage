import {MYonSplashScreenAnimationEndEventName} from "@/types/Events";
import {reactive, toRefs, Ref} from "vue";

export interface MYSplashScreenSetupData {
    MYanimatedFlag: Ref<boolean>;
    MYsplashAnimationEndHandler: () => void;
    MYsplashScreenAnimationEndEventName: string;
}

export const MYsplashScreenSetup = (): MYSplashScreenSetupData => {
    const MYsplashScreenAnimationEndEventName = MYonSplashScreenAnimationEndEventName
    const state = reactive({
        MYanimatedFlag: false
    })

    const MYsplashAnimationEndHandler: () => void = () => {
        state.MYanimatedFlag = true
    }

    return {
        ...toRefs(state),
        MYsplashAnimationEndHandler,
        MYsplashScreenAnimationEndEventName
    } as MYSplashScreenSetupData
}
