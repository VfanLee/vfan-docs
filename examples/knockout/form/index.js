const app = document.querySelector('#app')

function AppViewModel() {
  const self = this

  // select 渲染的 option
  self.exampleOptions = [
    { id: '1', name: '选项1' },
    { id: '2', name: '选项2' },
    { id: '3', name: '选项3' }
  ]

  self.textValue = ko.observable('textValue')
  self.textareaValue = ko.observable('textareaValue')
  self.radioValue = ko.observable('2')
  self.checkboxValue1 = ko.observable(true)
  self.checkboxValue2 = ko.observableArray(['2', '3'])
  self.selectValue1 = ko.observable('2')
  self.selectValue2 = ko.observableArray(['2', '3'])

  self.printData = function () {
    const data = {
      textValue: self.textValue(),
      textareaValue: self.textareaValue(),
      radioValue: self.radioValue(),
      checkboxValue1: self.checkboxValue1(),
      checkboxValue2: self.checkboxValue2(),
      selectValue1: self.selectValue1(),
      selectValue2: self.selectValue2()
    }
    console.table(data)
  }
}

ko.applyBindings(new AppViewModel(), app)
