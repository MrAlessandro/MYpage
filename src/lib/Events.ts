/* HOMEPAGE SCROLL STATE CHANGE EVENT */
import { EscrollState } from '@/lib/interfaces/EscrollState'

export const MYonChangeHomepageScrollStateEventName = 'my-homepage-scrollstate-change'
export class MYChangeScrollStateEvent {
  scrollState: EscrollState

  constructor (scrollState: EscrollState) {
    this.scrollState = scrollState
  }
}
/**************************************/
