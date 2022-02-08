import { API_BASEURL } from "./constants"
import type { TemplateSettings } from "./stores/user"

export const replaceAll = (str: string, find: string, replace: string): string => {
  return str.split(find).join(replace)
}

export const getProfileCode = (codeTemplate: string, userId: number, path: string): string => {
  return replaceAll(
    replaceAll(codeTemplate, ':id', userId.toString()), 
    ':path', 
    path
  )
}

export const setClipboard = (text) => { navigator.clipboard.writeText(text) }

export const getPathToProfile = (userId: number, template: string, theme: string, options: TemplateSettings): string => {
  let queryStringsObject = { theme }

  Object.keys(options).forEach((option) => {
    queryStringsObject[option] = options[option].value
  })

  const queryStrings = new URLSearchParams(queryStringsObject).toString()
  return `${API_BASEURL}/${template}/${userId}?${queryStrings}`
}
