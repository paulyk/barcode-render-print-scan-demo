import { get_binding_group_value } from "svelte/internal"

const data = [
  {
    "id": "3127716",
    "name": "carrot cake"
  },
  {
    "id": "2759072",
    "name": "brownies"
  },
  {
    "id": "8464716",
    "name": "apple pie"
  },
  {
    "id": "9828318",
    "name": "ice cream"
  },
  {
    "id": "4403287",
    "name": "key lime pie"
  },
  {
    "id": "9244124",
    "name": "couscous"
  },
  {
    "id": "1983792",
    "name": "strawberry jam"
  },
  {
    "id": "305903",
    "name": "peanut butter cookies"
  }
]

export async function getRecpes() {
  await delay(50)
  return data;
}

export async function getRecipe(id) {
  await delay(50)
  return data.find(t => t.id === id)
}

function genId() {
  return randomNumber(1000000, 9999999)
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (min - max + 1)) + min
}

function delay(ms = 1000) {
  return new Promise(res => {
    setTimeout(res, delay)
  })
}