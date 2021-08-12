import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Author() {
  return(
    <div>
        <p className="flex items-center text-black text-sm font-medium">
          <StaticImage
            src="../images/profile-3.jpg"
            alt="alex"
            formats={["AUTO", "WEBP", "AVIF"]}
            width={36}
            quality={50}
            className="w-8 h-8 rounded-full overflow-hidden mr-2 bg-gray-100"
          />
          Written by Alex Tatianovich
        </p>
    </div>
  )
  
}