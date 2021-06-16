<template>
  <div class="about">
    <el-form
      :model="form"
      ref="form"
      :rules='rules'
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="手机号"
        prop="phone"
      >
        <el-input
          type="phone"
          v-model.number="form.phone"
          autocomplete="off"
          :maxlength='11'
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('form')"
        >提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    const validatePhone = (rule, value, callback) => {
      if (this.$validate.validateTelephone(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的手机号'))
      }
    }
    return {
      rules: {
        phone: [
          { required: true, message: '手机号不能为空' },
          { validator: validatePhone, trigger: ['blur', 'change'] }
        ]
      },
      form: {
        phone: ''
      }
    }
  },
  mounted () {
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
