import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={1}
    width={280}
    height={400}
    viewBox="0 0 280 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="188" y="100" rx="0" ry="0" width="2" height="2" /> 
    <rect x="131" y="113" rx="0" ry="0" width="0" height="3" /> 
    <rect x="0" y="9" rx="10" ry="10" width="267" height="174" /> 
    <rect x="0" y="190" rx="5" ry="5" width="265" height="25" /> 
    <rect x="0" y="225" rx="10" ry="10" width="265" height="80" /> 
    <rect x="0" y="325" rx="3" ry="3" width="89" height="33" /> 
    <rect x="136" y="320" rx="20" ry="20" width="131" height="44" />
  </ContentLoader>
)

export default Skeleton