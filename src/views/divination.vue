<template>
  <div>
    <div class="card-content">
      <div class="play-content">
        <div class="card-shaffle">
          <span :class="isStart ? 'card-item' : 'card-item-init'"></span>
          <span :class="isStart ? 'card-item' : 'card-item-init'"></span>
          <span :class="isStart ? 'card-item' : 'card-item-init'"></span>
          <span :class="isStart ? 'card-item' : 'card-item-init'"></span>
          <span :class="isStart ? 'card-item' : 'card-item-init'"></span>
          <span :class="isStart ? 'card-item' : 'card-item-init'"></span>
          <span :class="isStart ? 'card-item' : 'card-item-init'"></span>
          <span :class="isStart ? 'card-item' : 'card-item-init'"></span>
          <span :class="isStart ? 'card-item' : 'card-item-init'"></span>
          <span :class="isStart ? 'card-item' : 'card-item-init'"></span>
        </div>
        <div class="card-pic">
          <div class="card-infos">
            <div class="card-cover" :class="isOver ? 'cover-left' : ''">
              <img
                alt=""
                src="@/assets/images/tarot.jpg"
                :class="front1 ? 'front' : 'back'"
                @click="change(1, true)"
              />
              <img
                alt=""
                :class="front1 ? 'back' : 'front'"
                src="@/assets/images/1.jpg"
                @click="change(1, false)"
              />
            </div>
            <div v-show="front1Show" class="card-title">「命运之轮」</div>
          </div>
          <div class="card-infos">
            <div class="card-cover" :class="isOver ? 'cover-middle' : ''">
              <img
                alt=""
                src="@/assets/images/tarot.jpg"
                :class="front2 ? 'front' : 'back'"
                @click="change(2, true)"
              />
              <img
                alt=""
                :class="front2 ? 'back' : 'front'"
                src="@/assets/images/1.jpg"
                @click="change(2, false)"
              />
            </div>
            <div v-show="front2Show" class="card-title">「高塔」</div>
          </div>
          <div class="card-infos">
            <div class="card-cover" :class="isOver ? 'cover-right' : ''">
              <img
                alt=""
                src="@/assets/images/tarot.jpg"
                :class="front3 ? 'front' : 'back'"
                @click="change(3, true)"
              />
              <img
                alt=""
                :class="front3 ? 'back' : 'front'"
                src="@/assets/images/1.jpg"
                @click="change(3, false)"
              />
            </div>
            <div v-show="front3Show" class="card-title">「审判」</div>
          </div>
        </div>
        <div class="unstart-content" :class="isStart ? 'clear' : ''">
          <div class="start-btn" @click="start">start</div>
        </div>
        <div v-show="front1Show && front2Show && front3Show">
          <div class="card-info">卡牌信息</div>
          <div class="explain">
            这三张牌加在一起可以给你一个完整的讯息。要记住，它们是互相关联的。
            并不是说第一张牌反映出你生活的某一面，而第二张牌是谈到完全不同的一件事。
            每一个位置的牌都会谈到其他两张牌的某些东西。
            简单来讲，第一张牌就是你现在所处的位置，第三张牌是你可以进入的最佳位置，第二张牌则是你要达到那里所需要的了解或道路。
          </div>
          <div class="card-info">代表寓意</div>
          <div class="explain">
            这三张牌加在一起可以给你一个完整的讯息。要记住，它们是互相关联的。
            并不是说第一张牌反映出你生活的某一面，而第二张牌是谈到完全不同的一件事。
            每一个位置的牌都会谈到其他两张牌的某些东西。
            简单来讲，第一张牌就是你现在所处的位置，第三张牌是你可以进入的最佳位置，第二张牌则是你要达到那里所需要的了解或道路。
          </div>
        </div>
      </div>
    </div>
    <Footer :footActive="2" class="myfooter"></Footer>
  </div>
</template>
<script>
import Footer from '@/components/Footer/footer.vue'
export default {
  name: 'divination',
  components: { Footer },
  data() {
    return {
      isStart: false,
      isOver: false,
      front1: false,
      front1Show: false,
      front2: false,
      front2Show: false,
      front3: false,
      front3Show: false,
    }
  },
  methods: {
    start() {
      this.isStart = true
      setTimeout(() => {
        this.isOver = true
      }, 3500)
    },

    change(idx, isFront) {
      const { front1, front2, front3 } = this
      const map = {
        1: front1,
        2: front2,
        3: front3,
      }
      if (isFront) {
        this[`front${idx}Show`] = true
      }
      this[`front${idx}`] = !map[idx]
    },
  },
}
</script>
<style lang="less" scoped>
.card-content {
  padding: 40px 20px;

  .unstart-content {
    &.clear {
      display: none;
    }

    .start-btn {
      margin: 0 auto;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      color: #333;
      border: 1px solid #333;
      border-radius: 20px;
    }
  }

  .play-content {
    position: relative;
  }

  .card-pic {
    display: flex;
    justify-content: space-between;

    .card-infos {
      width: 100px;
    }

    .card-cover {
      width: 100px;
      height: 150px;
      border-radius: 2px;
      background: #fff;
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      z-index: -1;

      .back {
        width: 100%;
        height: 100%;
        position: absolute;
        transform: rotateY(0deg) scale(1);
        transition-duration: 0.2s;
        transition-delay: 0.2s;
        overflow: hidden;
        border-radius: 4px;
        border: 1px solid dimgray;
        background: #fff;
        box-shadow: 11px 11px 30px #a1a1a1, -11px -11px 30px #fff;
      }

      .front {
        width: 100%;
        height: 100%;
        position: absolute;
        transform: rotateY(90deg) scale(1.1);
        transition-duration: 0.2s;
        transition-delay: 0s;
        overflow: hidden;
        border-radius: 4px;
        background: #fff;
        box-shadow: 11px 11px 30px #a1a1a1, -11px -11px 30px #fff;
      }

      &.cover-left {
        animation: handoutleft 0.5s ease;
        animation-fill-mode: forwards;
      }

      &.cover-middle {
        animation: handoutmiddle 0.5s ease;
        animation-delay: 0.3s;
        animation-fill-mode: forwards;
      }

      &.cover-right {
        animation: handoutright 0.5s ease;
        animation-delay: 0.6s;
        animation-fill-mode: forwards;
      }
    }

    .card-title {
      width: 100px;
      text-align: center;
      font-size: 14px;
      margin: 20px auto;
    }
  }

  .card-info {
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .explain {
    padding: 10px;
    font-size: 14px;
    line-height: 24px;
    color: #999;
  }

  .card-shaffle {
    width: 100%;
    height: 340px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .card-item {
      box-sizing: border-box;
      position: absolute;
      width: 100px;
      height: 150px;
      background-image: url('../assets/images/tarot.jpg');
      background-size: 100%;
      top: calc(50% - 200px / 2);
      border: 1px solid dimgray;
      border-radius: 4px;
      transform-origin: right;
      animation: rotating 3s ease;
      animation-delay: calc((var(--n)) * 0.08s);
      animation-fill-mode: forwards;
    }

    .card-item-init {
      box-sizing: border-box;
      position: absolute;
      width: 100px;
      height: 150px;
      background-image: url('../assets/images/tarot.jpg');
      background-size: 100%;
      top: calc(50% - 200px / 2);
      border: 1px solid dimgray;
      border-radius: 4px;
    }
  }

  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(360deg);
    }

    100% {
      transform: translateY(-70px);
    }
  }

  @keyframes handoutleft {
    0% {
      transform: translateX(-50%);
    }

    1% {
      opacity: 1;
      z-index: 0;
    }

    100% {
      transform: translate(calc(-170%), 160px);
      opacity: 1;
      z-index: 0;
    }
  }

  @keyframes handoutmiddle {
    0% {
      transform: translateX(-50%);
    }

    1% {
      opacity: 1;
      z-index: 0;
    }

    100% {
      transform: translateX(-50%) translateY(160px);
      opacity: 1;
      z-index: 0;
    }
  }

  @keyframes handoutright {
    0% {
      transform: translateX(-50%);
    }

    1% {
      opacity: 1;
      z-index: 0;
    }

    100% {
      transform: translateX(calc(70%)) translateY(160px);
      opacity: 1;
      z-index: 0;
    }
  }

  .card-shaffle .card-item:nth-child(1) {
    --n: 1;
  }

  .card-shaffle .card-item:nth-child(2) {
    --n: 2;
  }

  .card-shaffle .card-item:nth-child(3) {
    --n: 3;
  }

  .card-shaffle .card-item:nth-child(4) {
    --n: 4;
  }

  .card-shaffle .card-item:nth-child(5) {
    --n: 5;
  }

  .card-shaffle .card-item:nth-child(6) {
    --n: 6;
  }

  .card-shaffle .card-item:nth-child(7) {
    --n: 7;
  }

  .card-shaffle .card-item:nth-child(8) {
    --n: 8;
  }

  .card-shaffle .card-item:nth-child(9) {
    --n: 9;
  }

  .card-shaffle .card-item:nth-child(10) {
    --n: 10;
  }
}
</style>
