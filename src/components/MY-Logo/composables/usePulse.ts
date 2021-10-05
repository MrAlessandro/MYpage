import {onMounted, Ref, watch} from "vue";

export interface usePulseData {
    getRandomVerticalScaleValue: () => number;
    getRandomAnimationDuration: () => number;
}

export const usePulse: (pulse: Ref<boolean>) => usePulseData = (pulse) => {
    const stopBarcodeAniation = (event: Event) => {
        (event.target as Element).classList.remove('MY:brand-logo:bar-code:pulse');
        (event.target as Element).removeEventListener('animationiteration', stopBarcodeAniation);
    }

    watch(pulse, (value) => {
        console.log('Prop changed')
        const rectangles = document.querySelectorAll('.MY\\:brand-logo\\:bar-code\\:rectangle')
        if (value) {
            for (let index = 0; index < rectangles.length; ++index) {
                rectangles[index].classList.add('MY:brand-logo:bar-code:pulse')
            }
        } else {
            for (let index = 0; index < rectangles.length; ++index) {
                rectangles[index].addEventListener('animationiteration', stopBarcodeAniation)
            }
        }
    })

    const getRandomVerticalScaleValue: () => number = () => {
        return (Math.floor(Math.random() * (10 - 4 + 1) + 4) * 0.1) - 0.1;
    }

    const getRandomAnimationDuration: () => number = () => {
        return Math.floor(Math.random() * (20 - 10 + 1) + 10) * 0.15
    }


    onMounted(() => {
        const rectangles = document.querySelectorAll('.MY\\:brand-logo\\:bar-code\\:rectangle')
        for (let index = 0; index < rectangles.length; ++index) {
            (rectangles[index] as HTMLElement).style.setProperty('--animation-duration', `${getRandomAnimationDuration()}s`);
            (rectangles[index] as HTMLElement).style.setProperty('--scale-factor', `${getRandomVerticalScaleValue()}`);
        }
    })

    return {
        getRandomVerticalScaleValue,
        getRandomAnimationDuration
    } as usePulseData
}
