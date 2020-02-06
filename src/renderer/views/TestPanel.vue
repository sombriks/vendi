<template>
  <div></div>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  name: "test-panel",
  data() {
    return {
      sysinfo: {}
    };
  },
  created() {
    console.log("created");
    ipcRenderer.invoke("getSysInfo").then(ret => {
      this.sysinfo = ret;
    });
  }
};
</script>

<style></style>
