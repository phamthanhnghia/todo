<template>
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Enter to add new todo</label
          >
          <input
            v-model="taskNew.name"
            type="text"
            class="form-control"
            v-on:keyup.enter="createTaskNew()"
            placeholder="To do"
          />
        </div>

        <ul class="list-group  " v-for="item in getTaskList" :key="item.id">
          <li
            class="
              list-group-item list-group-item-action
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <TaskItem v-bind:item="item" />
            <button type="button" class="btn btn-primary badge bg-primary rounded-pill" v-on:click="removeTask(item.id)">x</button>
          </li>
        </ul>
        
      </div>
    </div>
    <div class="col"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TaskItem from "@/components/Task/TaskItem.vue";

export default {
  name: "TaskList",
  components: {
    TaskItem,
  },
  data() {
    return {
      taskNew: {
        name: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getTaskList", "getTaskLast"]),

    createTaskId() {
      if (typeof this.getTaskLast !== "undefined") {
        return parseInt(this.getTaskLast?.id) + 1;
      }
      return 1;
    },
    createTaskName() {
      return this.taskNew.name.trim();
    },
  },

  mounted() {},
  methods: {
    ...mapActions(["addTask","removeTask"]),

    cleanTaskNew() {
      this.taskNew.name = "";
    },

    createTaskNew() {
      const taskId = this.createTaskId;
      const taskName = this.taskNew.name;
      const task = {
        id: taskId,
        name: taskName,
      };

      if (taskName != "") {
        this.addTask(task);
      }

      this.cleanTaskNew();
    },
  },
};
</script>

<style  >

</style>
