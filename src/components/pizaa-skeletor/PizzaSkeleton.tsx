import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = () => (
  <ContentLoader
    speed={2}
    width={264}
    height={479}
    viewBox="0 0 264 479"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="127" cy="107" r="107" />
    <rect x="6" y="228" rx="0" ry="0" width="255" height="22" />
    <rect x="6" y="264" rx="0" ry="0" width="255" height="65" />
    <rect x="6" y="350" rx="0" ry="0" width="79" height="23" />
    <rect x="153" y="350" rx="0" ry="0" width="108" height="29" />
  </ContentLoader>
)

export default PizzaSkeleton