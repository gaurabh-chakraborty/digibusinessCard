export const Action = () => import('../../components/Action.vue' /* webpackChunkName: "components/action" */).then(c => wrapFunctional(c.default || c))
export const Attachment = () => import('../../components/Attachment.vue' /* webpackChunkName: "components/attachment" */).then(c => wrapFunctional(c.default || c))
export const Check = () => import('../../components/Check.vue' /* webpackChunkName: "components/check" */).then(c => wrapFunctional(c.default || c))
export const Colour = () => import('../../components/Colour.vue' /* webpackChunkName: "components/colour" */).then(c => wrapFunctional(c.default || c))
export const Cropper = () => import('../../components/Cropper.vue' /* webpackChunkName: "components/cropper" */).then(c => wrapFunctional(c.default || c))
export const DocumentDownloader = () => import('../../components/DocumentDownloader.vue' /* webpackChunkName: "components/document-downloader" */).then(c => wrapFunctional(c.default || c))
export const Download = () => import('../../components/Download.vue' /* webpackChunkName: "components/download" */).then(c => wrapFunctional(c.default || c))
export const Featured = () => import('../../components/Featured.vue' /* webpackChunkName: "components/featured" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Help = () => import('../../components/Help.vue' /* webpackChunkName: "components/help" */).then(c => wrapFunctional(c.default || c))
export const MediaPlayer = () => import('../../components/MediaPlayer.vue' /* webpackChunkName: "components/media-player" */).then(c => wrapFunctional(c.default || c))
export const Modal = () => import('../../components/Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const Preview = () => import('../../components/Preview.vue' /* webpackChunkName: "components/preview" */).then(c => wrapFunctional(c.default || c))
export const ProductCard = () => import('../../components/ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => wrapFunctional(c.default || c))
export const ProductShowcase = () => import('../../components/ProductShowcase.vue' /* webpackChunkName: "components/product-showcase" */).then(c => wrapFunctional(c.default || c))
export const Vcard = () => import('../../components/Vcard.vue' /* webpackChunkName: "components/vcard" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
