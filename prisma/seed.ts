
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const news = await prisma.news.createMany({
    data: [
        {
            title:"Bitcoin Breaks 70,000!",
            highlight: "EOY is now a conservative target. Institutional adoption (BlackRock, Fidelity, etc.) is driving this rally. The liquidity wave is just starting. 🚀"
        },
        {
            title:"El Salvador Doubles Down on BTC",
            highlight: "Allocating 1% of their treasury to #Bitcoin is a masterstroke by @nayibbukele. In a world of fiat debasement, BTC is the ultimate hedge. Other nations, take notes!"
        },
        {
            title:"Bitcoin Mining Goes Green",
            highlight: "Marathon Digital's move to 100% renewable energy is a game-changer. Bitcoin can be both a store of value AND environmentally sustainable. The FUD is officially debunked. 🌱"
        },
        {
            title:"2024 Bitcoin Halving: Supply Shock Incoming",
            highlight: "Post-halving, only 450 BTC will be mined daily. With institutional demand skyrocketing, the supply shock will be historic. $500,000+ this cycle is still on track. 📈"
        },
        {
            title:"Jamie Dimon Acknowledges Bitcoin",
            highlight: "When the CEO of JPMorgan admits #Bitcoin has value, you know we're winning the narrative war. Even the biggest skeptics are starting to see the light. 🎯"
        },
        {
            title:"Bitcoin Breaks 60,000!",
            highlight: "EOY is now a conservative target. Institutional adoption (BlackRock, Fidelity, etc.) is driving this rally. The liquidity wave is just starting. 🚀"
        },
        {
            title:"Bitcoin Breaks 50,000!",
            highlight: "EOY is now a conservative target. Institutional adoption (BlackRock, Fidelity, etc.) is driving this rally. The liquidity wave is just starting. 🚀"
        },
        {
            title:"Bitcoin Breaks 40,000!",
            highlight: "EOY is now a conservative target. Institutional adoption (BlackRock, Fidelity, etc.) is driving this rally. The liquidity wave is just starting. 🚀"
        },
        {
            title:"Bitcoin Breaks 30,000!",
            highlight: "EOY is now a conservative target. Institutional adoption (BlackRock, Fidelity, etc.) is driving this rally. The liquidity wave is just starting. 🚀"
        },
        {
            title:"Bitcoin Breaks 20,000!",
            highlight: "EOY is now a conservative target. Institutional adoption (BlackRock, Fidelity, etc.) is driving this rally. The liquidity wave is just starting. 🚀"
        },
        {
            title:"Bitcoin Breaks 10,000!",
            highlight: "EOY is now a conservative target. Institutional adoption (BlackRock, Fidelity, etc.) is driving this rally. The liquidity wave is just starting. 🚀"
        },
]
  })
  const events = await prisma.events.createMany({
    data: [
        {
          image:
            "A futuristic stage with a giant Bitcoin logo hologram, surrounded by a global audience.",
          imageUrl: "https://loremflickr.com/512/512/events?lock=1293546693373285",  
          title: "Bitcoin World Summit 2024",
          highlight:
            "Join the biggest gathering of blockchain innovators, investors, and enthusiasts to shape the future of decentralized finance.",
          content:
            "The Bitcoin World Summit 2024 is set to be the most anticipated event in the blockchain industry. Held in the vibrant city of Dubai, this three-day conference will bring together the brightest minds in cryptocurrency, including keynote speakers like Vitalik Buterin, Michael Saylor, and Cathie Wood. Attendees will gain insights into Bitcoin adoption, participate in hands-on workshops exploring blockchain scalability, and network with industry leaders. A highlight of the event will be the live demonstration of Bitcoin's Lightning Network 2.0, showcasing the next evolution in fast and cost-effective transactions.",
        },
        {
          image:
            'A glowing Bitcoin cake with the number "840,000" (the block height of the halving) on top, surrounded by confetti.',
            imageUrl: "https://loremflickr.com/512/512/events?lock=5290479119590600",
          title: "Bitcoin Halving Celebration Party",
          highlight:
            "Celebrate the 2024 Bitcoin halving with exclusive insights, giveaways, and a night of crypto fun!",
          content:
            "Mark your calendars for April 20, 2024, as Miami hosts the ultimate Bitcoin Halving Celebration Party. This event will commemorate the historic moment when Bitcoin's block reward is halved, reducing miner rewards and potentially impacting the market. The evening will feature panel discussions with top analysts predicting post-halving trends, live trading competitions, and a stunning Bitcoin-themed art exhibition. Attendees will also receive free commemorative NFTs, making this a night to remember for every crypto enthusiast.",
        },
        {
          image:
            "A luxurious ballroom with attendees dressed in formal attire, holding tablets displaying Bitcoin donations.",
            imageUrl: "https://loremflickr.com/512/512/events?lock=2244543961331234",
          title: "Bitcoin Charity Gala",
          highlight:
            "Using Bitcoin to change the world—join us in raising funds for global education initiatives.",
          content:
            "On September 10, 2024, the Bitcoin Charity Gala will take place in the heart of London, bringing together philanthropists, investors, and blockchain advocates for a noble cause. The evening will feature a silent auction of rare Bitcoin memorabilia, captivating live performances, and inspiring keynote speeches. All donations will be transparently tracked on the blockchain, ensuring 100% accountability. Proceeds will support global education initiatives, empowering underserved communities through the transformative power of Bitcoin and blockchain technology.",
        },
        {
          image:
            "A snowy mountain resort with a giant Bitcoin logo made of ice, surrounded by skiers and snowboarders.",
            imageUrl: "https://loremflickr.com/512/512/events?lock=6902784185756836",
          title: "Bitcoin Winter Festival",
          highlight: "Ski, network, and learn about Bitcoin in the Swiss Alps!",
          content:
            "Escape to the breathtaking Swiss Alps for the Bitcoin Winter Festival, happening from January 25-27, 2025, in Zermatt. This unique event combines the thrill of winter sports with the excitement of Bitcoin innovation. Attendees can enjoy fireside chats with Bitcoin OGs, participate in exhilarating skiing competitions, and explore a showcase of cutting-edge Bitcoin mining rigs. Payments made in Bitcoin will receive exclusive discounts, making this a truly immersive crypto experience in one of the world's most stunning locations.",
        },
      ]
  })

  const course1 = await prisma.course.create({
    data: {
    title: "Bitcoin Basics for Beginners",
    description: "A beginner-friendly guide to understanding Bitcoin, blockchain, and how to get started.",
    chapters: {
        create: [
          {
            title: "What is Bitcoin?",
            content: 'https://twitter.com/prisma',
            highlight: "Bitcoin is the world’s first decentralized digital currency, created in 2009 by an anonymous entity known as Satoshi Nakamoto. Unlike traditional currencies, Bitcoin operates on a peer-to-peer network without the need for intermediaries like banks or governments. In this chapter, you’ll learn about Bitcoin’s origins, its purpose as a decentralized form of money, and why it’s considered a revolutionary technology. We’ll also explore its key features, such as limited supply (21 million coins), transparency, and immutability. By the end of this chapter, you’ll understand why Bitcoin is often referred to as 'digital gold' and how it’s changing the way we think about money.",
            videoUrl: "https://youtu.be/KodoeImcF9c"
          },
          {
            "title": "How Bitcoin Works",
            "highlight": "Blockchain is the backbone of Bitcoin’s security and transparency.",
            "content": "Bitcoin operates on a technology called blockchain, which is a public ledger that records all transactions in a secure and transparent manner. In this chapter, we’ll break down how the blockchain works, including the concepts of blocks, hashes, and consensus mechanisms like Proof of Work (PoW). You’ll also learn about Bitcoin mining, the process by which new Bitcoins are created and transactions are verified. We’ll explain the role of miners, how they compete to solve complex mathematical problems, and why this process is essential for maintaining the network’s security. By the end of this chapter, you’ll have a solid understanding of the technical foundations of Bitcoin.",
            videoUrl: "https://youtu.be/KodoeImcF9c"
          },
          {
            "title": "Setting Up Your First Wallet",
            "highlight": "Your keys, your Bitcoin. Not your keys, not your Bitcoin.",
            "content": "A Bitcoin wallet is a tool that allows you to store, send, and receive Bitcoin. In this chapter, we’ll guide you through the process of choosing and setting up your first Bitcoin wallet. We’ll compare different types of wallets, including hardware wallets, mobile wallets, and desktop wallets, and discuss their pros and cons. You’ll learn how to generate a wallet address, secure your private keys, and back up your wallet to protect against loss or theft. We’ll also cover best practices for keeping your Bitcoin safe, such as enabling two-factor authentication and avoiding phishing scams. By the end of this chapter, you’ll be ready to start using Bitcoin with confidence.",
           videoUrl: "https://youtu.be/KodoeImcF9c"
          }
        ],
      },
    },
  })

  const course2 = await prisma.course.create({
    data: {
    "title": "Bitcoin Investment Strategies",
        "description": "Learn how to invest in Bitcoin like a pro, from dollar-cost averaging to risk management.",
    chapters: {
        create: [{
            "title": "Why Invest in Bitcoin?",
            "highlight": "Bitcoin is the best-performing asset of the last decade.",
            "content": "Bitcoin has consistently outperformed traditional assets like stocks, gold, and real estate over the past decade. In this chapter, we’ll explore why Bitcoin is such a compelling investment. We’ll discuss its unique properties, such as scarcity, decentralization, and resistance to censorship, and how these make it an attractive store of value and hedge against inflation. We’ll also examine Bitcoin’s historical price performance, its adoption by institutions, and its potential for future growth. By the end of this chapter, you’ll understand why Bitcoin is often referred to as 'digital gold' and why it deserves a place in your investment portfolio.",
           videoUrl: "https://youtu.be/KodoeImcF9c"
          },
          {
            "title": "Dollar-Cost Averaging (DCA)",
            "highlight": "DCA removes emotion from investing and builds long-term wealth.",
            "content": "Dollar-cost averaging (DCA) is a strategy that involves investing a fixed amount of money into Bitcoin at regular intervals, regardless of its price. In this chapter, we’ll explain how DCA works and why it’s one of the most effective ways to invest in Bitcoin. We’ll discuss the benefits of DCA, such as reducing the impact of market volatility and eliminating the need to time the market. We’ll also provide practical tips for implementing a DCA strategy, including how to choose the right amount to invest and how often to make purchases. By the end of this chapter, you’ll have a clear plan for building your Bitcoin holdings over time.",
         videoUrl: "https://youtu.be/KodoeImcF9c"
          },
          {
            "title": "Risk Management",
            "highlight": "Only invest what you can afford to lose.",
            "content": "While Bitcoin has the potential for significant returns, it’s also a highly volatile asset. In this chapter, we’ll discuss strategies for managing risk when investing in Bitcoin. We’ll cover topics such as portfolio allocation, setting stop-loss orders, and diversifying your investments. We’ll also explore common pitfalls to avoid, such as emotional trading and over-leveraging. By the end of this chapter, you’ll have the tools and knowledge to invest in Bitcoin responsibly and minimize potential losses.",
           videoUrl: "https://youtu.be/KodoeImcF9c"
          }
        ],
      },
    },
  })

  const course3 = await prisma.course.create({
    data: {
        "title": "Advanced Bitcoin Technology",
        "description": "Dive deep into Bitcoin’s technical aspects, including mining, nodes, and the Lightning Network.",
    chapters: {
        create: [{
            "title": "Bitcoin Mining Explained",
            "highlight": "Mining secures the network and creates new Bitcoin.",
            "content": "Bitcoin mining is the process by which new Bitcoins are created and transactions are added to the blockchain. In this chapter, we’ll explore how mining works, including the role of miners, the Proof of Work (PoW) consensus mechanism, and the hardware and software used in mining. We’ll also discuss the economics of mining, including the costs of electricity and equipment, and how miners earn rewards. By the end of this chapter, you’ll have a comprehensive understanding of Bitcoin mining and its importance to the network.",
           videoUrl: "https://youtu.be/KodoeImcF9c"
          },
          {
            "title": "Running a Bitcoin Node",
            "highlight": "Nodes are the backbone of Bitcoin’s decentralization.",
            "content": "A Bitcoin node is a computer that runs Bitcoin software and helps maintain the network by validating transactions and blocks. In this chapter, we’ll guide you through the process of setting up and running your own Bitcoin node. We’ll discuss the benefits of running a node, such as increased privacy, security, and support for the network. We’ll also cover the hardware and software requirements, as well as step-by-step instructions for installation and configuration. By the end of this chapter, you’ll be ready to contribute to the Bitcoin network by running your own node.",
        videoUrl: "https://youtu.be/KodoeImcF9c"
          },
          {
            "title": "The Lightning Network",
            "highlight": "Lightning enables instant, low-cost Bitcoin transactions.",
            "content": "The Lightning Network is a second-layer solution built on top of Bitcoin that enables fast and low-cost transactions. In this chapter, we’ll explore how the Lightning Network works, including the concepts of payment channels and routing. We’ll discuss the benefits of the Lightning Network, such as scalability and micropayments, and how it’s being used in real-world applications. We’ll also provide a guide to setting up and using a Lightning wallet. By the end of this chapter, you’ll understand how the Lightning Network is helping to scale Bitcoin and make it more usable for everyday transactions.",
      videoUrl: "https://youtu.be/KodoeImcF9c"
          }
        ],
      },
    },
  })

  console.log({ news, events, course1, course2, course3 })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })