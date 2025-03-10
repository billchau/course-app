<script setup lang="ts">
import { faker } from '@faker-js/faker'
let person = 'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/62.jpg'
//let person = faker.image.personPortrait({ sex: 'male', size: 512 })
let name = 'CryptoMaxx'
let slogan = "Bitcoin isn't just a currency; it's a revolution. I sold my car for BTC in 2013 and never looked back. Stay humble, stack sats, and remember: Not your keys, not your coins."
let achievement = [
    "First to Predict Bitcoin's 2017 Bull Run",
    "Hosted the Bitcoin-Only Conference in the Metaverse",
    "Turned 1 BTC into a $10M Crypto Empire"
]
let backstory = "<div><p>CryptoMaxx, born Maxwell Carter, was a self-taught programmer who discovered Bitcoin in 2012 while working as a freelance software engineer. Intrigued by Satoshi Nakamoto’s whitepaper, he began mining BTC on his laptop, accumulating 500 coins by 2013. Despite skepticism from friends and family, he sold his car and invested everything into Bitcoin, weathering the 2014 crash and even losing 200 BTC to a hack. Undeterred, he built a trading bot, honed his skills, and became a vocal advocate for cold storage and decentralization. </p> <p>By 2017, his early predictions of Bitcoin’s bull run went viral, catapulting him to fame as CryptoMaxx, the Bitcoin evangelist. He turned 1 BTC into a $10M portfolio through strategic altcoin trades and DeFi investments, hosted the first Bitcoin-only Metaverse conference, and inspired millions with his mantra, \"Stay humble, stack sats.\" Today, CryptoMaxx is a global crypto icon, blending technical expertise, memes, and a relentless belief in Bitcoin’s power to change the world.</p></div>"
</script>

<template>
    <div class="p-12 max-w-7xl flex flex-col">
        <div class="flex flex-row">
            <NuxtImg :src="person" :placeholder="[30, 20]" width="300" height="200" class="rounded" />
            <div class="ml-12 mt-4">
                <p class="text-5xl">{{ name }}</p>
                <p class="text-2xl mt-4">{{ slogan }}</p>
            </div>
        </div>
        <ul v-for="ach in achievement" class="mt-8 ml-8 list-disc text-xl flex-start">
            <li> {{ ach }}</li>
        </ul>
        <div class="mt-8"><span v-html="backstory"></span></div>
    </div>
</template>