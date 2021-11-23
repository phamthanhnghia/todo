<template>
  <div>
    <p>{{ time }}</p>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Time",
  components: {},
  computed: {},
  data() {
    return {
      time: moment().format("hh:mm:ss "),
    };
  },
  methods: {
    second() {
      setInterval(() => {
        this.time = moment().format("hh:mm:ss ");
      }, 1000);
    },
  },
  created() {
    this.second();
  },
};
</script>

<style >
p {
  font-size: 10rem;
  font-weight: 600;
}
</style>