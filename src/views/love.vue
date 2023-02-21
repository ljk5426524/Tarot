<template>
  <div class="page">
    <div class="card-cover">
      <img alt="" src="@/assets/images/tarot1.png" />
    </div>
    <div class="card-explain-content">
      <div class="title">「皇后」</div>
      <div class="explain">
        <p>
          正位：母爱，喜悦，优雅，幸福，成功，收获，体贴，丰收，生产，艺术，与大自然接触，感受力强，浪漫的恋爱
        </p>
        <p>
          逆位：冷淡，缺乏上进心，欢乐消失，散漫，困难，享乐，环境险恶，贴近自然，自负，纠纷，感情挫折
        </p>
      </div>
    </div>
    <Footer :footActive="1" class="myfooter"></Footer>
  </div>
</template>
<script>
import Footer from '@/components/Footer/footer.vue'
export default {
  name: 'love',
  components: { Footer },
}
</script>
<style lang="less" scoped>
@import '~@/styles/mixins';

.card-cover {
  margin: 20px auto;
  width: 300px;
  overflow: hidden;
  border-radius: 4px;
  background: #fff;
  box-shadow: 11px 11px 30px #a1a1a1, -11px -11px 30px #fff;
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
