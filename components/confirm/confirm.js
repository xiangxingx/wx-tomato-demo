Component({
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ""
    }
  },
  data: {
    value: ""
  },
  methods: {
    confirm() {
      this.triggerEvent('confirm', this.data.value)
    },
    cancel() {
      this.triggerEvent('cancel', '取消')
    },
    watchvalue(event) {
      this.data.value = event.detail.value
    }
  }
})