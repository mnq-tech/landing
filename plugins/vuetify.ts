// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import type { ThemeDefinition } from 'vuetify';

const customTheme : ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#66FCF1',
    secondary: '#45A29E',
    dark: '#0B0C10',
    darkAlt: '#1F2833',
    light: '#C5C6C7',
    background: '#0B0C10',
    surface: '#1F2833',
    onPrimary: '#0B0C10',
    onSecondary: '#FFFFFF',
    onBackground: '#C5C6C7',
    onSurface: '#C5C6C7',
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'customTheme',
      themes: {
        customTheme,
      },
    }
  })
  app.vueApp.use(vuetify)
})
