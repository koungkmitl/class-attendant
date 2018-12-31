<template>
  <div class="table100 ver2 m-b-110">
    <div class="table100-head">
      <table>
        <thead>
          <tr class="row100 head">
            <th class="cell100 column1">Course No.</th>
            <th class="cell100 column1">Course Name</th>
          </tr>
        </thead>
      </table>
    </div>

    <div class="table100-body js-pscroll">
      <table>
        <tbody>
          <template v-if="listdata && listdata.length">
            <tr class="row100 body" v-for="i of filteritem">
              <td class="cell100 column1">
                <router-link
                  :to="{ name: 'Status', params: { cnumber: i.courseId, cname:i.subject } }"
                >{{i.courseId}}</router-link>
              </td>
              <td class="cell100 column1">
                <router-link
                  :to="{ name: 'Status', params: { cnumber: i.courseId, cname:i.subject } }"
                >{{i.subject}}</router-link>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Course from "@/function/Course.vue";
export default {
  data() {
    return {
      ...Course.data()
    };
  },
  props: {
    search: String,
    searchyear: String
  },
  computed: {
    filteritem: function() {
      this.search = this.search.replace(new RegExp("\\\\", "g"), "\\\\");
      return this.listdata.filter(item => {
        return (
          item.courseId.match(this.search.toUpperCase()) ||
          item.subject.match(this.search.toUpperCase())
        );
      });
    }
  },
  methods: {
    ...Course.methods
  },
  mounted() {
    this.getAllcourse();
  }
};
</script>

<style>
@import "../../styles/table/main.css";
@import "../../styles/table/util.css";
.restable {
  padding-left: 200px;
  padding-right: 200px;
}
@media screen and (max-width: 960px) {
  .restable {
    padding-left: 50px;
    padding-right: 50px;
  }
}
@media screen and (max-width: 720px) {
  .restable {
    padding-left: 0px;
    padding-right: 0px;
  }
  .table100 {
    padding-top: 80px;
  }
}
</style>
