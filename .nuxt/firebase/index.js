import createApp from './app.js'

import storageService from './service.storage.js'

const appConfig = {"apiKey":"AIzaSyCwIBLPmMURCSdqe_rQqC4gFrUtteLwbfI","authDomain":"participatory-budgeting-a5f34.firebaseapp.com","projectId":"participatory-budgeting-a5f34","storageBucket":"participatory-budgeting-a5f34.appspot.com","messagingSenderId":"412280397430","appId":"1:412280397430:web:d2fd56e866108d5c3c0957"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      storageService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      storageService(session, firebase, ctx, inject),

    ]
  }

  const [
    storage
  ] = await Promise.all(servicePromises)

  const fire = {
    storage: storage
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}