import UiButton from "./UiButton";

export default {
    title: 'UI-Kit/UiButton',
    component: UiButton
}
const Template = (args) => <UiButton {...args}/>

const props = {
    text: 'Hello',
    onClick: ()=> {console.log('click')},
    disabled: false,
    theme:'dark',
    classes: ''
}

export const Ligth = Template.bind({})

Ligth.args = {
   ...props,
    theme: 'light',
}
export const Darck = Template.bind({})

Darck.args = {
    ...props,
    theme: 'dark',
}
export const Disabled = Template.bind({})

Disabled.args = {
    ...props,
    disabled: true,
}
