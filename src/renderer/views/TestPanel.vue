<template>
  <div>
    <h1>Test Panel</h1>
    <p>Arch: {{ sysinfo.arch }}</p>
    <p>Platform: {{ sysinfo.platform }}</p>
    <table>
      <thead>
        <tr>
          <th>Model</th>
          <th>Speed</th>
          <th>Times</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cpu,i) in sysinfo.cpus" :key="i">
          <td>{{ cpu.model }}</td>
          <td>{{ cpu.speed }}</td>
          <td>{{ cpu.times }}</td>
        </tr>
      </tbody>
    </table>
    <button  v-if="!live" @click="liveupdate()">Live update</button>
    <button  v-if="live" @click="liveupdate()">Stop</button>
    <hr/>
    <button @click="listProdutos()">Listar produtos</button>
    <ul v-if="produtos">
      <li v-for="p in produtos" :key="p.id">{{p.nome}}</li>
    </ul>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
import eventos from "../../common/eventos";
export default {
  name: "test-panel",
  data() {
    return {
      live: false,
      sysinfo: {
        arch: "-",
        platform: "-",
        cpus: []
      },
      interval: null,
      produtos:[],
    };
  },
  created() {
    console.log("created");
    this.updateSysInfo();
  },
  methods: {
    liveupdate() {
      console.log("live");
      clearInterval(this.interval);
      this.live = !this.live;
      if (this.live) {
        this.interval = setInterval(_ => {
          this.updateSysInfo();
        }, 100);
      }
    },
    updateSysInfo() {
      ipcRenderer.invoke(eventos.getSysInfo).then(ret => {
        this.sysinfo = ret;
      });
    },
    listProdutos() {
      ipcRenderer.invoke(eventos.listProducts,{}).then(ret => this.produtos = ret);
    }
  }
};
</script>

<style scoped>
table,
tr,
td,
th,
tbody,
thead {
  border: 1px solid black;
}
</style>
