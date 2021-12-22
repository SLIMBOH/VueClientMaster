<template>
  <div id="aCoursesList" class="bg-fa of">
    <section class="container">
      <header class="comm-title all-teacher-title">
        <h2 class="fl tac">
          <span class="c-333">All Teachers</span>
        </h2>
        <section class="c-tab-title">
          <a id="subjectAll" title="All" href="#">All</a>
        </section>
      </header>
      <section class="c-sort-box unBr">
        <div>
          <!-- no data -->
          <section class="no-data-wrap" v-if="data.total==0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">No date availible here...</span>
          </section>

          <article v-if="data.total>0" class="i-teacher-list">
            <ul class="of">
              <li v-for="teacher in data.items" :key="teacher.id">
                <section class="i-teach-wrap">
                  <div class="i-teach-pic">
                    <a :href="'/teacher/'+teacher.id" :title="teacher.name" target="_blank">
                      <img :src="teacher.avatar" :alt="teacher.name">
                    </a>
                  </div>
                  <div class="mt10 hLh30 txtOf tac">
                    <a :href="'/teacher/'+teacher.id" :title="teacher.name" target="_blank" class="fsize18 c-666">{{teacher.name}}</a>
                  </div>
                  <div class="hLh30 txtOf tac">
                    <span class="fsize14 c-999">{{teacher.intro}}</span>
                  </div>
                  <div class="mt15 i-q-txt">
                    <p class="c-999 f-fA">{{teacher.career}}</p>
                  </div>
                </section>
              </li>
              
            </ul>
            <div class="clear"></div>
          </article>
        </div>
      <div>
        <div class="paging">
          <a
            :class="{undisable: !data.hasPrevious}"
            href="#"
            title="first"
            @click.prevent="gotoPage(1)">first</a>

          <!-- <a
            :class="{undisable: !data.hasPrevious}"
            href="#"
            title="previous"
            @click.prevent="gotoPage(data.current-1)">&lt;</a> -->

          <a
            v-for="page in data.pages"
            :key="page"
            :class="{current: data.current == page, undisable: data.current == page}"
            :title="'page '+page"
            href="#"
            @click.prevent="gotoPage(page)">{{ page }}</a>

          <!-- <a
            :class="{undisable: !data.hasNext}"
            href="#"
            title="next"
            @click.prevent="gotoPage(data.current+1)">&gt;</a> -->

          <a
            :class="{undisable: !data.hasNext}"
            href="#"
            title="last"
            @click.prevent="gotoPage(data.pages)">last</a>

          <div class="clear"/>
        </div>
      </div>
      </section>
    </section>
  </div>
</template>
<script>
import teacherApi from '@/api/teacher'

export default {
    //params: this.$route.params.id  ==  params.id
    asyncData({ params, error }) {
      return teacherApi.getTeacherList(1,4).then(response => {
            return { data: response.data.data }
        })
  },
  methods:{
    gotoPage(page) {
      teacherApi.getTeacherList(page,4)
        .then(response => {
          this.data = response.data.data
        })
    }
  }

};
</script>