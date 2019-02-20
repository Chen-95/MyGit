new Vue({
	el: '#vue-app',
	data: {
		persons: [{
				name: '张三',
				age: 20,
				sex: "男",
				phone: 15926791145
			},
			{
				name: '李四',
				age: 18,
				sex: "男",
				phone: 15745785245
			},
			{
				name: '王五',
				age: 22,
				sex: "男",
				phone: 15006794580
			},
			{
				name: '赵六',
				age: 19,
				sex: "女",
				phone: 13426755545
			},
		],
		newStudent: {
			name: '',
			age: '',
			sex: "男",
			phone: ""
		}
	},
	methods: {
		//添加一条学生信息
		createNewStudent() {
			//判断姓名不能为空
			if (this.newStudent.name === "") {
				alert('姓名不能为空');
				return;
			}
			//判断年龄不能为空
			if (this.newStudent.age === "") {
				alert('年龄不能为空');
				return;
			}
			//判断手机号不能为空
			if (this.newStudent.phone === "") {
				alert('手机号不能为空');
				return;
			}
			//创建一条新数据
			this.persons.unshift(this.newStudent);
			//添加成功后清除数据
			this.newStudent = {
				name: '',
				age: "",
				sex: "男",
				phone: ""
			}
		},
		//删除一条学生信息
		deleteStudent(index) {
			//根据索引删除信息
			this.persons.splice(index, 1);
		}
	}
})
