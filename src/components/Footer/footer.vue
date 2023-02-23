<template>
  <div>
    <van-tabbar v-model="footValue" @change="onChange">
      <van-tabbar-item>
        <!-- <span>每日一卡</span> -->
        <template #icon="props">
          <img
            class="icon-tabbar"
            :src="props.active ? iconCard.active : iconCard.inactive"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <!-- <span>爱情占卜</span> -->
        <template #icon="props">
          <img
            class="icon-tabbar"
            :src="props.active ? iconLove.active : iconLove.inactive"
          />
        </template>
      </van-tabbar-item>

      <van-tabbar-item>
        <!-- <span>抽三张</span> -->
        <template #icon="props">
          <img
            class="icon-tabbar"
            :src="props.active ? iconBook.active : iconBook.inactive"
          />
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
      iconCard: {
        active: require('@/assets/images/icon-day.png'),
        inactive: require('@/assets/images/icon-day.png'),
      },
      iconLove: {
        active: require('@/assets/images/icon-love.png'),
        inactive: require('@/assets/images/icon-love.png'),
      },
      iconBook: {
        active: require('@/assets/images/icon-book.png'),
        inactive: require('@/assets/images/icon-book.png'),
      },
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
  height: 80px;
  z-index: 10;
}

.van-hairline--top-bottom {
  &::after {
    border-color: #000;
  }

  .van-tabbar-item {
    background-color: #000;

    .icon-tabbar {
      height: 40px !important;
    }
  }
}
</style>
