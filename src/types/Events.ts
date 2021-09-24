import { EscrollState } from '@/types/EscrollState'

/* HOMEPAGE SCROLL STATE CHANGE EVENT */
export const MYonChangeHomepageScrollStateEventName = 'my-homepage-scrollstate-change'

export class MYChangeScrollStateEvent {
  scrollState: EscrollState

  constructor (scrollState: EscrollState) {
    this.scrollState = scrollState
  }
}
/**************************************/
