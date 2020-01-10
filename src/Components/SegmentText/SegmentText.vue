<template lang="pug">
  //- segment text variation 1
  .segmentText1(v-if="segmentTypeMode == 1")
    .segmentText1-main
      fondre(
        fondre-tag="h2"
        :fondre-style="segmentMainTextStyle"
        :fondre-textcopy="segmentMainTextcopy"
        )

    .segmentText1-secondary
      fondre(
        fondre-tag="a"
        :fondre-style="segmentSecondaryTextStyle"
        :fondre-textcopy="segmentSecondaryTextcopy"
        )

  //- segment text variation 2
  .segmentText2(v-else-if="segmentTypeMode == 2")
    fondre.segmentText2-number(
      v-if="segmentTwoNumberTextcopy"
      fondre-tag="span"
      :fondre-style="segmentTwoTextcopyStyle"
      :fondre-textcopy="segmentTwoNumberTextcopy"
      )

    fondre.segmentText2-text(
      fondre-tag="span"
      :fondre-style="segmentTwoTextcopyStyle"
      :fondre-textcopy="segmentTwoTextcopy"
      )

</template>
<script>
import Fondre from '../Fondre/Fondre'
import { FONDRE_STYLES } from '../Fondre/Const-fondre'
export default {
  name: 'SegmentText',
  components: {
    Fondre
  },
  props: {
    segmentMainTextStyle: {
      type: String,
      default: FONDRE_STYLES.F_XL
    },
    segmentMainTextcopy: {
      type: String,
      default: () => ''
    },
    segmentSecondaryTextStyle: {
      type: String,
      default: FONDRE_STYLES.F_XS
    },
    segmentSecondaryTextcopy: {
      type: String,
      default: () => ''
    },
    segmentTypeMode: {
      type: Number,
      default: () => 0
    },
    segmentTwoTextcopyStyle: {
      type: String,
      default: FONDRE_STYLES.F_XS
    },
    segmentTwoTextcopy: {
      type: String,
      default: () => ''
    },
    segmentTwoNumberTextcopy: {
      type: Number,
      default: () => 0
    }
  }
}
</script>
<style lang="sass" scoped>
.segmentText1
  display: flex
  justify-content: space-between
</style>
