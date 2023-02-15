<template>
  <div>
    <div class="card-content">
      <div class="card-pic">
        <div>
          <div class="card-cover">
            <img alt="" src="@/assets/images/tarot.jpg" />
          </div>
          <div class="card-title">「命运之轮」</div>
        </div>
        <div>
          <div class="card-cover">
            <img alt="" src="@/assets/images/tarot.jpg" />
          </div>
          <div class="card-title">「高塔」</div>
        </div>
        <div>
          <div class="card-cover">
            <img alt="" src="@/assets/images/tarot.jpg" />
          </div>
          <div class="card-title">「审判」</div>
        </div>
      </div>
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
    <Footer :footActive="2" class="myfooter"></Footer>
  </div>
</template>
<script>
import Footer from '@/components/Footer/footer.vue'
export default {
  name: 'divination',
  components: { Footer },
}
</script>
<style lang="less" scoped>
.card-content {
  padding: 40px 20px;

  .card-pic {
    display: flex;
    justify-content: space-between;

    .card-cover {
      width: 90px;
      overflow: hidden;
      border-radius: 2px;
      background: #fff;
      box-shadow: 11px 11px 30px #a1a1a1, -11px -11px 30px #fff;
    }

    .card-title {
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
}
</style>
