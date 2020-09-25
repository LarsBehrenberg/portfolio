import React from 'react'
import MailtoUI from './node_modules/mailtoui/dist/mailtoui-min.js'

import LocaleWrap from './wrapPageElement'

export const wrapPageElement = LocaleWrap

export const onRouteUpdate = () => {
  MailtoUI.run()
}
