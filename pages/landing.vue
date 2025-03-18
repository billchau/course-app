<template>
    <div>
        <!-- Hero Section -->
        <header class="py-8">
            <div class="container mx-auto text-center px-4">
                <h2 class="text-4xl md:text-6xl text-btheme-darkbrown font-bold mb-6">Master Bitcoin with CryptoMaxx</h2>
                <p class="text-xl text-btheme-brown max-w-2xl mx-auto">Unlock the future of finance through our
                    comprehensive Bitcoin education program</p>
                    <NuxtLink class="mt-4" 
                    :to="`/login`">
                    <div class="text-xl mt-2 underline mx-auto text-btheme-darkbrown">
                        Sign up / sign in to access the course now
                    </div>
                </NuxtLink>
            </div>

        </header>

        <!-- Courses Section -->
        <main class="container mx-auto mb-8 px-4">
            <div class="grid gap-12">
                <!-- Course Cards -->
                <div v-for="course in landingInfo" :key="course.title" class="bg-btheme-brown rounded-2xl p-8 shadow-xl">
                    <h3 class="text-3xl font-bold mb-6 text-btheme-beige">{{ course.title }}</h3>
                    <p class="text-btheme-beige mb-8">{{ course.description }}</p>

                    <div class="grid md:grid-cols-3 gap-6">
                        <div v-for="chapter in course.chapters" :key="chapter.title"
                            class="bg-btheme-brown rounded-lg hover:bg-btheme-brownhover transition">
                            <h4 class="text-xl font-semibold mb-3 text-btheme-beige">{{ chapter.title }}</h4>
                            <p class="text-btheme-beige text-sm mb-4">{{ chapter.highlight }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">

const landingInfo = ref(
    [
      {
        "title": "Bitcoin Basics for Beginners",
        "description": "A beginner-friendly guide to understanding Bitcoin, blockchain, and how to get started.",
        "chapters": [
          {
            "title": "What is Bitcoin?",
            "highlight": "Bitcoin is digital gold and the future of money.",
          },
          {
            "title": "How Bitcoin Works",
            "highlight": "Blockchain is the backbone of Bitcoin’s security and transparency.",
          },
          {
            "title": "Setting Up Your First Wallet",
            "highlight": "Your keys, your Bitcoin. Not your keys, not your Bitcoin.",
          }
        ]
      },
      {
        "title": "Bitcoin Investment Strategies",
        "description": "Learn how to invest in Bitcoin like a pro, from dollar-cost averaging to risk management.",
        "chapters": [
          {
            "id": 5,
            "title": "Why Invest in Bitcoin?",
            "highlight": "Bitcoin is the best-performing asset of the last decade.",
          },
          {
            "title": "Dollar-Cost Averaging (DCA)",
            "highlight": "DCA removes emotion from investing and builds long-term wealth.",
          },
          {
            "title": "Risk Management",
            "highlight": "Only invest what you can afford to lose.",
          }
        ]
      },
      {
        "title": "Advanced Bitcoin Technology",
        "description": "Dive deep into Bitcoin’s technical aspects, including mining, nodes, and the Lightning Network.",
        "chapters": [
          {
            "title": "Bitcoin Mining Explained",
            "highlight": "Mining secures the network and creates new Bitcoin.",
          },
          {
            "title": "Running a Bitcoin Node",
            "highlight": "Nodes are the backbone of Bitcoin’s decentralization.",
          },
          {
            "title": "The Lightning Network",
            "highlight": "Lightning enables instant, low-cost Bitcoin transactions.",
          }
        ]
      }
    ]
)
</script>