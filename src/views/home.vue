<template>
  <div class="page">
    <div class="loading">
      <div class="loading-text">
        <span class="loading-text-words">L</span>
        <span class="loading-text-words">O</span>
        <span class="loading-text-words">A</span>
        <span class="loading-text-words">D</span>
        <span class="loading-text-words">I</span>
        <span class="loading-text-words">N</span>
        <span class="loading-text-words">G</span>
      </div>
    </div>
    <div class="home-float">
      <img class="text" src="@/assets/images/text.png" />
      <img class="bg-middle" src="@/assets/images/bg-middle.png" />
    </div>
    <div class="card-cover">
      <img
        alt=""
        :class="front ? 'front' : 'back'"
        src="@/assets/images/card-back-sun.png"
        @click="change"
      />
      <div class="cover" :class="front ? 'back' : 'front'">
        <img
          alt=""
          class="cover-front"
          :src="cardInfo.fileUrl"
          @click="change"
        />
      </div>
    </div>
    <div class="card-explain-content" v-if="answerShow">
      <div class="title">「{{ cardInfo.name || '愚人' }}」</div>
      <div class="explain">
        <p>
          {{
            cardInfo.sketch ||
            '愚人是一个天真无邪的冒险家，即将展开一趟重要旅程。他抱持着满脑子希望，十足的理想主义，而不切实际；他身上的装扮当然也不会是为了旅行。'
          }}
        </p>
      </div>
    </div>
    <Footer :footActive="0" class="myfooter"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer/footer.vue'

export default {
  name: 'Home',

  components: { Footer },

  filters: {},

  props: {},

  data() {
    return {
      front: false,
      cardInfo: {},
      answerShow: false,
    }
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {
    this.getDaylyCard()
  },

  destroyed() {},

  methods: {
    change() {
      const { front } = this
      this.front = !front
      this.answerShow = true
    },
    // 卡牌列表
    getDaylyCard() {
      this.$api.getDaylyCard({}).then((res) => {
        this.cardInfo = res.data
      })
    },
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixins';

.page {
  background-image: url('../assets/images/sel-bg.png');
  background-size: 100%;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-color: #000;
  .home-float {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 11;
    background-image: url('../assets/images/bg-head.png');
    background-size: 100%;
    background-repeat: no-repeat;
    animation: frontHide 1s ease 7s;
    animation-fill-mode: forwards;
    .text {
      position: absolute;
      left: 50%;
      top: 20%;
      transform: translateX(-50%) scale(0.5);
      animation: textScale 2s ease 5s;
    }
  }

  .bg-middle {
    position: absolute;
    width: 80%;
    left: 50%;
    bottom: 14%;
    transform: translateX(-50%);
  }

  .card-cover {
    position: relative;
    margin: 0 auto;
    padding-top: 120px;
    width: 200px;
    height: 430px;
    z-index: 10;
    .cover {
      position: relative;
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 200px;
        height: 300px;
        background-color: #fff;
        z-index: -1;
        border-radius: 16px;
      }
    }
    .cover-front {
      width: 200px;
      height: 300px;
    }
    .back {
      width: 200px;
      height: 300px;
      position: absolute;
      transform: rotateY(0deg) scale(0.8);
      transition-duration: 0.2s;
      transition-delay: 0.2s;
      overflow: hidden;
      border-radius: 10px;
    }

    .front {
      width: 200px;
      height: 300px;
      position: absolute;
      transform: rotateY(90deg) scale(1);
      transition-duration: 0.2s;
      transition-delay: 0s;
      overflow: hidden;
      border-radius: 4px;
    }
  }

  .card-explain-content {
    padding: 10px 20px;
    color: #d4aa72;

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
    }
  }
}
@keyframes textScale {
  0% {
    transform: translateX(-50%) scale(0.5);
  }
  50% {
    transform: translateX(-50%) scale(0.8);
  }
  100% {
    transform: translateX(-50%) scale(0.5);
  }
}
@keyframes frontHide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    z-index: -1;
  }
}

.animat(@n, @i:1) when (@i <= @n) {
  &:nth-child(@{i}) {
    filter: blur(0px);
    animation: blur-text 0.8s (@i / 5) + 0s infinite linear alternate;
  }
  .animat(@n, (@i + 1));
}
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 9999;
  animation: hide-loadinng 2s ease 3s;
  animation-fill-mode: forwards;
}

.loading-text {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  width: 100%;
  height: 100px;
  line-height: 100px;
  span {
    display: inline-block;
    margin: 0 5px;
    color: #fff;
    font-family: 'Quattrocento Sans', sans-serif;
    .animat(7);
  }
}

@keyframes blur-text {
  0% {
    filter: blur(0px);
  }
  100% {
    filter: blur(4px);
  }
}
@keyframes hide-loadinng {
  0% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
    z-index: -1;
  }
}
</style>
