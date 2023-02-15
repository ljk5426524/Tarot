<template>
  <div class="page">
    <div class="card-cover">
      <img
        alt=""
        :class="front ? 'front' : 'back'"
        src="@/assets/images/tarot.jpg"
        @click="change"
      />
      <img
        alt=""
        :class="front ? 'back' : 'front'"
        src="@/assets/images/1.jpg"
        @click="change"
      />
    </div>
    <div class="card-explain-content">
      <div class="title">「隐士」</div>
      <div class="explain">
        <p>
          正位：一意孤行，流浪，活力无限又潜力无限，愚蠢无知，追求梦想，未知，天真的爱
        </p>
        <p>
          逆位：漂泊，冒险，鲁莽，冒失，疯狂，无视物质损失，灵魂堕落，内心空虚，感情轻浮
        </p>
      </div>
    </div>
    <Footer :footActive="0" class="myfooter"></Footer>
  </div>
</template>

<script>
import { getCookie, setCookie } from '@/utils/cookie'
import Footer from '@/components/Footer/footer.vue'

export default {
  name: 'Home',

  components: { Footer },

  filters: {},

  props: {},

  data() {
    return {
      front: false,
    }
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
    change() {
      const { front } = this
      this.front = !front
    },
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixins';

.card-cover {
  position: relative;
  margin: 20px auto;
  width: 300px;
  height: 450px;

  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: rotateY(0deg);
    transition-duration: 0.2s;
    transition-delay: 0.2s;
    overflow: hidden;
    border-radius: 10px;
    background: #fff;
    box-shadow: 11px 11px 30px #a1a1a1, -11px -11px 30px #fff;
  }
  .front {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: rotateY(90deg);
    transition-duration: 0.2s;
    transition-delay: 0s;
    overflow: hidden;
    border-radius: 4px;
    background: #fff;
    box-shadow: 11px 11px 30px #a1a1a1, -11px -11px 30px #fff;
  }
}

.card-explain-content {
  padding: 16px 20px;

  .title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  .explain {
    margin-top: 20px;
    padding: 0 10px;
    font-size: 14px;
    line-height: 24px;
    color: #999;
  }
}
</style>
