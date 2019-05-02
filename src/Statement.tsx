import React, { SFC } from 'react'
import Page from './Page'
import PaintingHolder from './components/PaintingHolder'
import { Flex, Box } from 'rebass'

const Statement: SFC = () => (
  <Page>
    <Flex flexWrap={['wrap', 'wrap', 'nowrap']} flexDirection="row">
      <Box width={[1, 1, 7 / 10]} order={1} mb={[5]}>
        <h2>Statement</h2>
        <p>
          As a young painter I can remember one very special moment, the clear
          realisation that I had found a source of inspiration that would
          influence my work from then on.
        </p>
        <p>
          I had just made a radical change of direction in my career, leaving
          teaching and moving to Dorset. The ancient and beautiful landscape I
          discovered was a revelation and one particular image stays in my
          memory. Imagine a vast vaulted sky, a chalk textured field stretching
          ahead to reveal an ancient stone structure, a neolithic dolmen
          originally erected about 4000BC. This was the Hellstone, high above
          Portesham and stark against the sky. Since that day, Dorset's ancient
          sites, landscape and coastline have been the source material for most
          of my work. The quality of light, conditioned by the chalk downland
          has also been a significant influence. Stones, rocks and Purbeck's
          amazing coastline with its intricate detail and sweeping switchback
          scale, textures and shapes were absorbed into my visual vocabulary. In
          response I created new techniques in an attempt to record the myriad
          surfaces I was experiencing.
        </p>
        <p>
          I had taught ceramics and that awareness of surfaces coupled with the
          need to recreate textures led me, through my experience of firing pots
          in kilns, to explore the action of extreme heat on acrylic and oil
          paint. I learnt about the resulting stresses and textures created, and
          by layering, smoothing back and using other media such as glues,
          managed to achieve the surfaces I sought. These are evident in my work
          where complex textures contrast with areas of porcelain-like
          smoothness. I encourage tactile as well as visual involvement with my
          work and to that end leave the paintings unglazed.
        </p>
        <p>
          I paint full-time and exhibit regularly and nationally, my work being
          in numerous private and corporate collections. My second book,
          'Overview' has recently been published by Canterton Books and I am
          featured in 'Cranborne Chase Artists' by the same publisher, 'Fifty
          Wessex Artists' by Evolver Books and 'Paintings in Public Ownership'
          by PCF.
        </p>
      </Box>
      <Box
        width={[1, 1, 3 / 10]}
        mt={[2, 2, 4]}
        ml={[2, 2, 5]}
        mr={[2, 2, 0]}
        order={2}
      >
        <PaintingHolder
          img={require('./images/StatementNorthcott2.jpg')}
          largeImg={require('./images/lrg/Northcott2.jpg')}
          title={'Northcott 2'}
          dims={'37 x 57cm'}
        />
        <PaintingHolder
          img={require('./images/StatementOutlook.jpg')}
          largeImg={require('./images/lrg/Outlook.jpg')}
          title={'Outlook'}
          dims={'51 x 38cm'}
        />

        <PaintingHolder
          img={require('./images/StatementLandform3.jpg')}
          largeImg={require('./images/lrg/Landform3.jpg')}
          title={'Landform 3'}
          dims={'37 x 57cm'}
        />
      </Box>
    </Flex>
  </Page>
)

export default Statement
