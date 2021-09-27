import {reactive, toRefs, Ref, ref, onMounted} from "vue";
import {MYscrollState} from "@/types/Enums";

export interface MYHomepageScrollSetupData {
    MYmainNavbar: Ref<null>;
    MYmainNavbarHeight: Ref<number>;
    MYhomepageScrollState: Ref<MYscrollState>;
}

export const MYhomepageScrollSetup = (): MYHomepageScrollSetupData => {
    const state = reactive({
        MYmainNavbar: ref(),
        MYmainNavbarHeight: 0,
        MYhomepageScrollState: MYscrollState.TOP
    })

    const isScrollTop: () => boolean = () => {
        return window.scrollY === 0
    }

    const onScroll: () => void = () => {
        state.MYhomepageScrollState = isScrollTop() ? MYscrollState.TOP : MYscrollState.BELOW
    }

    onMounted(() => {
        document.addEventListener('scroll', onScroll)
        state.MYmainNavbarHeight = state.MYmainNavbar.$el.offsetHeight
    })

    return {
        ...toRefs(state)
    } as MYHomepageScrollSetupData
}
