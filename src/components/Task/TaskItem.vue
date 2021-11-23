<template>
  <div>
    {{ item.name }}
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TaskItem",
  components: {},
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  mounted() {},
  methods: {
    ...mapActions(["removeTask", "updateTask"]),
    changeTaskDone(task) {
      task.status.done = !task.status.done;
      this.updateTask(task);
    },
	

  },
};
</script>

<style lang="scss" scoped>
</style>
