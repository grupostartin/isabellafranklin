import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const pixelId =
    process.env.FB_PIXEL_ID || process.env.VITE_FB_PIXEL_ID || null
  const gtagId =
    process.env.GA_MEASUREMENT_ID || process.env.VITE_GA_MEASUREMENT_ID || null
  const googleAdsConversionId =
    process.env.VITE_GOOGLE_ADS_CONVERSION_ID || null
  const googleAdsConversionLabel =
    process.env.VITE_GOOGLE_ADS_CONVERSION_LABEL || null

  res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=600')
  res.status(200).json({
    pixelId,
    gtagId,
    googleAdsConversionId,
    googleAdsConversionLabel,
  })
}
