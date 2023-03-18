<template>
  <div class="menu">
    <div class="menu-item" v-for="menuItem in menuData" :key="menuItem.name">
      {{ menuItem.name }}
      <div v-if="menuItem.children">
        <Menu
          :menuData="menuItem.children"
          :positionObject="positionObject(menuItem.name)"
          :level="props.level + 1"
        ></Menu>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  menuData: {
    type: Array,
    default: [],
  },
  positionObject: {
    type: Object,
    default: {
      x: 0,
      y: 0,
    },
  },
  level: {
    type: Number,
    default: 1,
  },
});

console.log(props.positionObject);

const positionX = ref(props.positionObject.x + "px");
const positionY = ref(props.positionObject.y + "px");

const positionObject = computed(() => {
  return (name) => {
    let itemIndex = 0;
    for (let i = 0; i < props.menuData.length; i++) {
      if (props.menuData[i].name === name) {
        itemIndex = i;
        break;
      }
    }
    return {
      x: 122 * props.level + 40,
      y: parseInt(positionY.value) + itemIndex * 15,
    };
  };
});
</script>

<style scoped lang="less">
.menu {
  position: fixed;
  top: v-bind(positionY);
  left: v-bind(positionX);
  width: 120px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
  .menu-item {
    padding: 5px 0px;
    cursor: pointer;
    &:hover {
      background-color: #d4e157;
    }
  }
}
</style>
