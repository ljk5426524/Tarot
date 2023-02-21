<template>
  <div class="page">
    <div class="card-cover">
      <img
        alt=""
        :class="front ? 'front' : 'back'"
        src="@/assets/images/tarot1.png"
        @click="change"
      />
      <img
        alt=""
        :class="front ? 'back' : 'front'"
        src="@/assets/images/资源 9.png"
        @click="change"
      />
    </div>
    <div class="card-explain-content">
      <div class="title">「{{cardInfo.name}}」</div>
      <div class="explain">
        <p>
          {{cardInfo.sketch}}
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
      cardInfo:{}
    }
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {
    this.getCardsList()
  },

  destroyed() {},

  methods: {
    change() {
      const { front } = this
      this.front = !front
    },
    // 卡牌列表
    getCardsList() {
      this.$api.getCardsList({}).then(res => {
        const { data: cardList } = res
        this.cardInfo = cardList[Math.round(Math.random()*22)]
      })
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
  transform-style: preserve-3d;

  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: rotateY(0deg) scale(0.8);
    transition-duration: 0.2s;
    transition-delay: 0.2s;
    overflow: hidden;
    border-radius: 10px;
    //background: #fff;
    //box-shadow: 11px 11px 30px #a1a1a1, -11px -11px 30px #fff;
  }

  .front {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: rotateY(90deg) scale(1);
    transition-duration: 0.2s;
    transition-delay: 0s;
    overflow: hidden;
    border-radius: 4px;
    //background: #fff;
    //box-shadow: 11px 11px 30px #a1a1a1, -11px -11px 30px #fff;
  }
}

.card-explain-content {
  padding: 10px 20px;

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
    color: #fff;
  }
}
</style>
