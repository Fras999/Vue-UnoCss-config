import "primevue/resources/themes/bootstrap4-light-purple/theme.css"
import "primevue/resources/primevue.min.css"


import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Button from "primevue/button"
import InputText from "primevue/inputtext"
import 'uno.css'


const app = createApp(App)

app.use(PrimeVue,{ripple:true})
app.component("Button", Button)
app.component("InputText", InputText)


app.mount("#app")

