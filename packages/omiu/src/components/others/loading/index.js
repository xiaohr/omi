import { define, WeElement } from 'omi'
import style from './_index.css'

define('o-loading', class extends WeElement {
  css() {
    return style
  }
  render(props) {
    return (
      <div
        class="ow-loading"
        style={{ width: props.size, height: props.size }}
      />
    )
  }
})
