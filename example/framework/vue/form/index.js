const { createApp, ref } = Vue

createApp({
  setup() {
    const textValue = ref('textValue')
    const textareaValue = ref('textareaValue')
    const radioValue = ref('2')
    const checkboxValue1 = ref(true)
    const checkboxValue2 = ref(['2', '3'])
    const selectValue1 = ref('2')
    const selectValue2 = ref(['2', '3'])

    const printData = () => {
      const data = {
        textValue: textValue.value,
        textareaValue: textareaValue.value,
        radioValue: radioValue.value,
        checkboxValue1: checkboxValue1.value,
        checkboxValue2: checkboxValue2.value,
        selectValue1: selectValue1.value,
        selectValue2: selectValue2.value
      }
      console.table(data)
    }

    return {
      textValue,
      textareaValue,
      radioValue,
      checkboxValue1,
      checkboxValue2,
      selectValue1,
      selectValue2,
      printData
    }
  }
}).mount('#app')
