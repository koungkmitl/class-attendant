<template>

				<div class="table100 ver2 m-b-110">
					<div class="table100-head">
						<table>
							<thead>
								<tr class="row100 head">
									<th class="cell100 column1">รหัสนักศึกษา</th>
									<th class="cell100 column1">ชื่อ-นามสกุล</th>
                                    <th class="cell100 column3">จำนวนครั้งที่เข้าเรียน</th>
                                    <th class="cell100 column4">หมายเหตุ</th>
                                    
								</tr>
							</thead>
						</table>
					</div>

					<div class="table100-body js-pscroll">
						<table>
							<tbody>
                                <template v-for="(data) in list_data">
                                <tr class="row100 body">
                                        <td class="cell100 column1"> {{data.studentId}}</td>
                                        <td class="cell100 column1"> {{data.name}}</td>
                                        <td class="cell100 column3"> {{data.checkin}}</td>
                                        <td class="cell100 column4">  <b-btn v-b-modal="data.studentId" :variant ="'outline-danger'">ลบนักศึกษา</b-btn>

  <!-- the modal -->
  <b-modal title="ยืนยันการลบ" v-bind:id="data.studentId" @ok="deleteStudent(data.studentId, courseid), handleOk" ok-title = "ยินยัน" ok-variant = "danger" cancel-title = "ยกเลิก">
    คุณยืนยันที่จะลบนักศึกษาหมายเลข {{data.studentId}} ใช่หรือไม่
  </b-modal></td> 
								</tr>
                                </template>
							</tbody>
						</table>
					</div>
				</div>

</template>

<script>
import Student from '@/function/Student.vue'
export default {
    created() {
        this.courseid = this.$route.params.cnumber
        this.cname = this.$route.params.cname

    },
	data(){
		return{
			list_data:[],
		}
    },
    methods:{
        ...Student.methods,
        handleOk (evt,studentId) {
      // Prevent modal from closing
      evt.preventDefault()
    }
},
    mounted(){
    this.getStudent(this.courseid)
}
}
</script>

<style>
@import '../../styles/table/main.css';
@import '../../styles/table/util.css';
.restable{
    padding-left: 200px;
    padding-right: 200px;
}
@media screen and (max-width: 960px){
    .restable{	
    padding-left: 50px;
    padding-right: 50px;
}
}
@media screen and (max-width: 720px){
    .restable{
    padding-left: 0px;
    padding-right: 0px;
	
}
.table100 {
    padding-top: 80px;
}
}
</style>
