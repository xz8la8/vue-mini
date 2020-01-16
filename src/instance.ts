import { ReactiveEffect } from '@next-vue/reactivity'

export type PageInstance = WechatMiniprogram.Page.InstanceProperties &
  WechatMiniprogram.Page.InstanceMethods<Record<string, unknown>> & {
    [key: string]: any
    _isInjectedShareHook?: () => true
    _listenPageScroll?: () => true
    _effects?: ReactiveEffect[]
  }

export type ComponentInstance = WechatMiniprogram.Component.InstanceProperties &
  WechatMiniprogram.Component.InstanceMethods<Record<string, unknown>> & {
    [key: string]: any
    _effects?: ReactiveEffect[]
  }

export let currentPage: PageInstance | null = null

export let currentComponent: ComponentInstance | null = null

export function getCurrentInstance(): PageInstance | ComponentInstance | null {
  return currentPage || currentComponent
}

export function setCurrentPage(page: PageInstance | null): void {
  currentPage = page
}

export function setCurrentComponent(component: ComponentInstance | null): void {
  currentComponent = component
}
