<template>
  <div id="app">
    <a-layout>
      <a-layout-header class="header">Less Compiler</a-layout-header>
      <a-layout-content>
        <a-row>
          <a-col :span="12">
            <div class="editor-container">
              <codemirror
                v-model="source_code"
                :options="cmOptions"
                @input="onCmCodeChange"
              />
            </div>
          </a-col>
          <a-col :span="12">
            <div class="editor-container">
              <codemirror
                v-model="compiler_code"
                :options="cmOptions"
              ></codemirror>
            </div>
          </a-col>
        </a-row>
      </a-layout-content>
      <a-layout-footer class="footer">©️copyright baozun 2018 </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
// language js
import "codemirror/mode/css/css.js";
// theme css
import "codemirror/theme/idea.css";

var less = require("less");

export default {
  name: "App",
  data() {
    return {
      source_code: `@width: 10px;
@height: @width + 10px;
#header {
  width: @width;
  height: @height;
}`,
      compiler_code: "",
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mime: "text/less",
        theme: "idea",
        lineNumbers: true,
        line: true
      }
    };
  },
  methods: {
    onCmCodeChange() {
      less.render(this.source_code, {}, (err, data) => {
        if (err) {
          this.compiler_code = "编译错误...";
          return;
        }
        this.compiler_code = data.css;
        console.log(err, data);
      });
    }
  },
  computed: {},

  mounted() {
    this.onCmCodeChange();
  }
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.header {
  text-align: center;
  color: #fff;
}
.editor-container {
  .CodeMirror {
    height: 100vh;
  }
}

.footer {
  text-align: center;
}
</style>
