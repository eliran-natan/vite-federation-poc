<script>

import { computed, ref } from "vue";
import ReactDOMServer from "react-dom/server";

async function fetchImport() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = (await import("axonius/Button")).default;
      resolve(
        ReactDOMServer.renderToString(
          res({
            caption: "React Button in vue",
          })
        )
      );
    } catch (err) {
      reject(err);
    }
  });
}

export default {
    
  name: "Content",
  async setup() {
    const data = ref(null);
    data.value = await fetchImport();
    return {
      button: computed(() => {
        return data.value;
      }),
    };
  },
}

</script>

<template>
    <div v-html="button"></div>
</template>