/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  basePath: '/api',
  // hub: neynar({ apiKey: process.env.NEYMAR_API_KEY }),
  browserLocation: '/',
  imageOptions: {
    fonts: [
      {
        name: 'JetBrains Mono',
        source: 'google',
      },
    ],
  },
  title: 'KBW-Insights',
})


// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {

  const { buttonValue } = c;

  const getImageUrl = () => {
    if(buttonValue === 'Top Kols')
    {
      return 'https://i.ibb.co/hMCtwbP/Top-10-Followed-KOLs-on-X.png'
    }
    else if (buttonValue === 'Top Projects') 
    {
      return 'https://i.ibb.co/RpXdqxG/Top-10-Followed-Projects-on-X-1.png';
    } 
    else if (buttonValue === 'Top Tokens')
    {
      return 'https://i.ibb.co/nmnChJq/Top-10-tokens.png';
    }
    else if (buttonValue === 'Top Exchanges')
    {
      return 'https://i.ibb.co/0MnPJ9T/Top-10-exchanges.png';
    }
    return 'https://i.ibb.co/DQTRywT/A5.png';
  };

  const imageUrl = getImageUrl();

  return c.res({
    image: imageUrl,
    intents: [
      <Button value="Top Kols">Top KOLs</Button>,
      <Button value="Top Projects">Top Projects</Button>,
      <Button value="Top Tokens">Top Tokens</Button>,
      <Button value="Top Exchanges">Top Exchanges</Button>,
    ],
  });
});


devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
