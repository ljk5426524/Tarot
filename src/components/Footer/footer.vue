<template>
  <div>
    <van-tabbar active-color="#307DEE" v-model="footValue" @change="onChange">
      <van-tabbar-item>
        <span>每日一卡</span>
        <template #icon="props">
          <van-icon
            name="gift-card-o"
            :color="props.active ? '#307dee' : '#999'"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>爱情占卜</span>
        <template #icon="props">
          <van-icon name="like-o" :color="props.active ? '#307dee' : '#999'" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item>
        <span>抽三张</span>
        <template #icon="props">
          <van-icon name="star-o" :color="props.active ? '#307dee' : '#999'" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { getCookieJSON, removeCookie } from '@/utils/cookie'
export default {
  name: 'ImgBox',
  props: {
    footActive: {
      type: [Number, String],
      default: () => {
        return 0
      },
    },
  },
  data() {
    return {
      footValue: this.footActive,
    }
  },
  mounted() {},
  methods: {
    onChange(index) {
      switch (index) {
        case 0:
          this.$router.push('/home')
          break
        case 1:
          this.$router.push('/love')
          break
        case 2:
          this.$router.push('/divination')
          break
        default:
          break
      }
    },
  },
}
</script>
<style lang="less">
.van-tabbar--fixed {
  height: 56px;
  z-index: 10;
}
.no-raed {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: -26px;
    right: -2px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: red;
  }
}
</style>
  